# -*- coding: utf-8 -*-
"""
Builder of 300 realistic, non-repetitive legal questions per discipline.
Includes randomized realistic names, case scenarios, specific options,
accurate explanations, and verified legal articles.
"""

import random

FIRST_NAMES_MASC = [
    "Carlos", "Marcos", "Lucas", "Renato", "Felipe", "Roberto", "Paulo",
    "Guilherme", "Antônio", "Daniel", "Rodrigo", "Fábio", "Bernardo", "Matheus",
    "Leonardo", "José", "Gustavo", "Eduardo", "André", "Henrique", "Otávio",
    "Gabriel", "Thiago", "Vinícius", "Rafael", "Murilo", "Alexandre", "Caio"
]

FIRST_NAMES_FEM = [
    "Mariana", "Joana", "Camila", "Helena", "Paula", "Ana", "Beatriz",
    "Carla", "Fernanda", "Juliana", "Rafaela", "Tatiane", "Vanessa", "Patrícia",
    "Larissa", "Letícia", "Amanda", "Bianca", "Daniela", "Priscila", "Renata",
    "Sabrina", "Talita", "Aline", "Jéssica", "Natália", "Luísa", "Carolina"
]

CITIES = [
    "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", "Porto Alegre",
    "Salvador", "Recife", "Fortaleza", "Goiânia", "Brasília", "Campinas",
    "Ribeirão Preto", "Londrina", "Florianópolis", "Vitória", "Belém", "Manaus"
]

COMPANIES = [
    "Alfa Engenharia Ltda.", "Beta Calçados S/A", "Gama Logística e Transportes",
    "Delta Indústria Química", "Ômega Participações S/A", "Vanguarda Alimentos",
    "Horizonte Empreendimentos", "Soluções Digitais Brasil Ltda.", "Minas Mineração S/A"
]

def pick_name(idx, gender="any"):
    if gender == "m":
        return FIRST_NAMES_MASC[idx % len(FIRST_NAMES_MASC)]
    elif gender == "f":
        return FIRST_NAMES_FEM[idx % len(FIRST_NAMES_FEM)]
    else:
        all_n = FIRST_NAMES_MASC + FIRST_NAMES_FEM
        return all_n[idx % len(all_n)]

def pick_city(idx):
    return CITIES[idx % len(CITIES)]

def pick_company(idx):
    return COMPANIES[idx % len(COMPANIES)]

print("Massive bank base utilities loaded.")
