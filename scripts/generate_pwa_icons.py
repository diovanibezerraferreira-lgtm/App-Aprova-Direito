import struct
import zlib
import os
import math

def create_png(width, height, get_pixel_func):
    """Generates an RGBA PNG using standard library zlib and struct."""
    # 2x supersampling for high quality anti-aliasing
    scale = 2
    sw = width * scale
    sh = height * scale
    
    raw_rows = []
    for y in range(height):
        row_bytes = bytearray([0]) # Filter byte 0 (None)
        for x in range(width):
            # Supersample 2x2 grid
            r_acc, g_acc, b_acc, a_acc = 0, 0, 0, 0
            for sy in range(scale):
                for sx in range(scale):
                    px = (x * scale + sx + 0.5) / sw
                    py = (y * scale + sy + 0.5) / sh
                    r, g, b, a = get_pixel_func(px, py)
                    r_acc += r
                    g_acc += g
                    b_acc += b
                    a_acc += a
            count = scale * scale
            row_bytes.extend([
                int(r_acc / count),
                int(g_acc / count),
                int(b_acc / count),
                int(a_acc / count)
            ])
        raw_rows.append(bytes(row_bytes))

    raw_data = b"".join(raw_rows)
    compressed = zlib.compress(raw_data, 9)

    def chunk(tag, data):
        length = struct.pack(">I", len(data))
        crc = struct.pack(">I", zlib.crc32(tag + data) & 0xffffffff)
        return length + tag + data + crc

    # PNG Signature
    png = b"\x89PNG\r\n\x1a\n"
    # IHDR Chunk
    ihdr_data = struct.pack(">IIBBBBB", width, height, 8, 6, 0, 0, 0)
    png += chunk(b"IHDR", ihdr_data)
    # IDAT Chunk
    png += chunk(b"IDAT", compressed)
    # IEND Chunk
    png += chunk(b"IEND", b"")
    return png

def make_icon_renderer(is_maskable=False):
    # Base colors
    # Navy: #0B1F3A -> (11, 31, 58), bottom #071527 -> (7, 21, 39)
    # Gold: #D4AF37 -> (212, 175, 55), highlight #F9E076 -> (249, 224, 118), dark #A27907 -> (162, 121, 7)
    
    def renderer(u, v):
        # u, v in [0, 1]
        
        # Background gradient
        bg_r = int(12 + (6 - 12) * v)
        bg_g = int(32 + (19 - 32) * v)
        bg_b = int(60 + (38 - 60) * v)

        # Coordinates for scale drawing
        if is_maskable:
            # 80% safe zone centered at (0.5, 0.5)
            su = (u - 0.5) / 0.72 + 0.5
            sv = (v - 0.5) / 0.72 + 0.5
        else:
            su = (u - 0.5) / 0.88 + 0.5
            sv = (v - 0.5) / 0.88 + 0.5

        if su < 0 or su > 1 or sv < 0 or sv > 1:
            return bg_r, bg_g, bg_b, 255

        # Center coordinates relative to (0.5, 0.5)
        cx = (su - 0.5) * 100.0
        cy = (sv - 0.5) * 100.0

        # Gold gradient helper
        def gold_color(local_y, bright=False):
            t = max(0.0, min(1.0, (local_y + 40) / 80.0))
            if bright:
                return (249, 224, 118, 255)
            r = int(249 * (1 - t) + 162 * t)
            g = int(224 * (1 - t) + 121 * t)
            b = int(118 * (1 - t) + 7 * t)
            return (r, g, b, 255)

        # 1. Top Spire / Finial (cy ~ -38 to -30)
        # Diamond / triangle at top
        if -38 <= cy <= -31 and abs(cx) <= (cy + 38) * 0.7:
            return gold_color(cy, bright=True)
        # Finial circle
        dist_finial = math.hypot(cx, cy - (-29))
        if dist_finial <= 4.0:
            if dist_finial <= 1.8:
                return (255, 245, 180, 255)
            return gold_color(cy)

        # 2. Central Column (cy from -28 to 32, width 3.2)
        if -28 <= cy <= 32 and abs(cx) <= 1.8:
            if abs(cx) <= 0.6:
                return (249, 224, 118, 255)
            return gold_color(cy)

        # 3. Horizontal Balance Beam (cy ~ -18, span cx from -32 to 32)
        # Arching slightly
        beam_arch = (cx * cx) / 800.0
        beam_y = -18.0 + beam_arch
        beam_dist = abs(cy - beam_y)
        beam_half_thick = max(0.8, 1.8 - abs(cx) / 28.0)
        if abs(cx) <= 31.0 and beam_dist <= beam_half_thick:
            if beam_dist <= 0.6:
                return (255, 245, 180, 255)
            return gold_color(cy)

        # Beam pivot circles: center, left tip, right tip
        if math.hypot(cx, cy - (-18.0)) <= 2.8:
            return (255, 245, 180, 255)
        if math.hypot(cx - (-31.0), cy - (-16.8)) <= 2.0:
            return (255, 245, 180, 255)
        if math.hypot(cx - 31.0, cy - (-16.8)) <= 2.0:
            return (255, 245, 180, 255)

        # 4. Suspension strings
        # Left pan strings from (-31.0, -16.8) to (-41.0, 9.0) and (-21.0, 9.0)
        def dist_to_segment(px, py, x1, y1, x2, y2):
            dx = x2 - x1
            dy = y2 - y1
            l2 = dx*dx + dy*dy
            if l2 == 0: return math.hypot(px - x1, py - y1)
            t = max(0.0, min(1.0, ((px - x1)*dx + (py - y1)*dy) / l2))
            projx = x1 + t * dx
            projy = y1 + t * dy
            return math.hypot(px - projx, py - projy)

        # Left strings
        d_ls1 = dist_to_segment(cx, cy, -31.0, -16.8, -41.0, 9.0)
        d_ls2 = dist_to_segment(cx, cy, -31.0, -16.8, -21.0, 9.0)
        if (d_ls1 <= 0.85 or d_ls2 <= 0.85) and -16.8 <= cy <= 9.0:
            return (212, 175, 55, 255)

        # Right strings
        d_rs1 = dist_to_segment(cx, cy, 31.0, -16.8, 21.0, 9.0)
        d_rs2 = dist_to_segment(cx, cy, 31.0, -16.8, 41.0, 9.0)
        if (d_rs1 <= 0.85 or d_rs2 <= 0.85) and -16.8 <= cy <= 9.0:
            return (212, 175, 55, 255)

        # 5. Balance Pans (Bowls)
        # Left Pan (center x = -31, top rim y = 9.0, width 21, height 7)
        if -41.5 <= cx <= -20.5:
            rel_x = (cx - (-31.0)) / 10.5
            bowl_depth = (1.0 - rel_x * rel_x) * 6.5
            # Rim line
            if abs(cy - 9.0) <= 0.9:
                return (255, 245, 180, 255)
            # Bowl fill
            if 9.0 <= cy <= 9.0 + bowl_depth:
                return gold_color(cy)

        # Right Pan (center x = 31, top rim y = 9.0, width 21, height 7)
        if 20.5 <= cx <= 41.5:
            rel_x = (cx - 31.0) / 10.5
            bowl_depth = (1.0 - rel_x * rel_x) * 6.5
            # Rim line
            if abs(cy - 9.0) <= 0.9:
                return (255, 245, 180, 255)
            # Bowl fill
            if 9.0 <= cy <= 9.0 + bowl_depth:
                return gold_color(cy)

        # 6. Pedestal Base
        # Upper base cone (cy from 31 to 37)
        if 31.0 <= cy <= 37.0:
            progress = (cy - 31.0) / 6.0
            half_w = 6.0 + progress * 7.0
            if abs(cx) <= half_w:
                return gold_color(cy)

        # Lower base plate (cy from 37 to 42, width 32)
        if 37.0 <= cy <= 42.0:
            if abs(cx) <= 16.0:
                if cy <= 38.5:
                    return (255, 245, 180, 255)
                return gold_color(cy)

        return bg_r, bg_g, bg_b, 255

    return renderer

def main():
    os.makedirs("public", exist_ok=True)
    
    print("Generating standard icon renderer...")
    render_std = make_icon_renderer(is_maskable=False)
    
    print("Rendering pwa-192x192.png...")
    png_192 = create_png(192, 192, render_std)
    with open("public/pwa-192x192.png", "wb") as f:
        f.write(png_192)

    print("Rendering apple-touch-icon.png (180x180)...")
    png_180 = create_png(180, 180, render_std)
    with open("public/apple-touch-icon.png", "wb") as f:
        f.write(png_180)

    print("Rendering pwa-512x512.png...")
    png_512 = create_png(512, 512, render_std)
    with open("public/pwa-512x512.png", "wb") as f:
        f.write(png_512)

    print("Rendering maskable icon...")
    render_maskable = make_icon_renderer(is_maskable=True)
    png_maskable = create_png(512, 512, render_maskable)
    with open("public/pwa-maskable-512x512.png", "wb") as f:
        f.write(png_maskable)

    # Also render 64x64 favicon
    print("Rendering favicon-64x64.png...")
    png_64 = create_png(64, 64, render_std)
    with open("public/favicon-64x64.png", "wb") as f:
        f.write(png_64)

    print("All PWA icons generated successfully!")

if __name__ == "__main__":
    main()
