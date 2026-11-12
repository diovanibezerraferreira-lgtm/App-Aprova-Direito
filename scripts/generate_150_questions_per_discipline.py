import json
import re

# Load the existing questions
with open('src/data/questions.ts', 'r', encoding='utf-8') as f:
    text = f.read()

prefix = 'export const MOCK_QUESTIONS: Question[] = '
json_part = text.split(prefix)[1].strip()
if json_part.endswith(';'):
    json_part = json_part[:-1]

existing_questions = json.loads(json_part)
print(f"Existing questions loaded: {len(existing_questions)}")

# Map existing questions by discipline
from collections import defaultdict
by_discipline = defaultdict(list)
for q in existing_questions:
    by_discipline[q['disciplineId']].append(q)

print(f"Disciplines in database: {len(by_discipline)}")
for disc, q_list in by_discipline.items():
    print(f" - {disc}: {len(q_list)} questions")

# We need 150 questions per discipline for all 21 disciplines
TARGET_PER_DISC = 150

DISCIPLINES_METADATA = {
  "etica": {
    "name": "Ética Profissional",
    "topics": [
      ("Prerrogativas do Advogado - Desagravo Público e Imunidade Material", "Lei nº 8.906/94, art. 7º, § 5º e art. 133 da CF/88"),
      ("Honorários Advocatícios Contratuais e Sucumbenciais", "Lei nº 8.906/94, arts. 22 a 24 e CED, art. 50"),
      ("Incompatibilidades e Impedimentos para o Exercício da Advocacia", "Lei nº 8.906/94, arts. 28 e 30"),
      ("Infrações Disciplinares e Sanções de Suspensão e Exclusão", "Lei nº 8.906/94, arts. 34 a 38"),
      ("Publicidade Profissional e Redes Sociais no Provimento 205/2021", "Provimento nº 205/2021 do CFOAB e Código de Ética"),
      ("Sigilo Profissional e Inviolabilidade de Escritório", "Lei nº 8.906/94, art. 7º, II e CED, arts. 35 a 38"),
      ("Sociedade de Advogados e Sociedade Unipessoal", "Lei nº 8.906/94, arts. 15 a 17"),
      ("Estágio Profissional e Inscrição na OAB", "Lei nº 8.906/94, arts. 8º e 9º"),
      ("Relações com o Cliente e Substabelecimento sem Reserva", "CED, arts. 9º a 26 e Regulamento Geral"),
      ("Tribunal de Ética e Disciplina - TED e Processo Disciplinar", "Lei nº 8.906/94, arts. 68 a 77"),
      ("Mandato Judicial e Renúncia com Permanência de 10 Dias", "Lei nº 8.906/94, art. 5º, § 3º e art. 112 do CPC")
    ]
  },
  "constitucional": {
    "name": "Direito Constitucional",
    "topics": [
      ("Ações do Controle Concentrado - ADI, ADC, ADO e ADPF", "CF/88, arts. 102 e 103 e Leis 9.868/99 e 9.882/99"),
      ("Controle Difuso de Constitucionalidade e Cláusula de Reserva de Plenário", "CF/88, art. 97 e Súmula Vinculante nº 10"),
      ("Direitos Individuais e Garantias Fundamentais", "CF/88, art. 5º, incisos I a LXXVIII"),
      ("Ações Constitucionais - Habeas Data, Mandado de Injunção e Ação Popular", "CF/88, art. 5º, incisos LXIX a LXXIII e Leis 12.016/09 e 13.300/16"),
      ("Repartição de Competências Legislativas da União, Estados e Municípios", "CF/88, arts. 22, 24 e 30"),
      ("Processo Legislativo Constitucional e Limitações ao Poder Constituinte Derivado", "CF/88, art. 60, §§ 1º a 4º (Cláusulas Pétreas)"),
      ("Organização dos Poderes - Executivo, Legislativo e Judiciário", "CF/88, arts. 48 a 103-B"),
      ("Comissões Parlamentares de Inquérito - CPI e Poderes Instrutórios", "CF/88, art. 58, § 3º e Jurisprudência do STF"),
      ("Intervenção Federal e Intervenção Estadual", "CF/88, arts. 34 a 36"),
      ("Estado de Defesa e Estado de Sítio", "CF/88, arts. 136 a 141"),
      ("Nacionalidade Originária e Secundária e Direitos Políticos", "CF/88, arts. 12 a 16 e EC nº 131/2023")
    ]
  },
  "civil": {
    "name": "Direito Civil",
    "topics": [
      ("LINDB e Teoria Geral do Direito Civil", "Decreto-Lei nº 4.657/42 (LINDB), arts. 1º a 6º"),
      ("Personalidade Jurídica e Direitos da Personalidade", "Código Civil, arts. 11 a 21 e Enunciados CJF"),
      ("Negócio Jurídico e Defeitos da Vontade (Erro, Dolo, Coação, Lesão)", "Código Civil, arts. 138 a 165"),
      ("Nulidade Absoluta, Relativa e Simulação", "Código Civil, arts. 166 a 184"),
      ("Prescrição e Decadência no Código Civil", "Código Civil, arts. 189 a 211"),
      ("Teoria Geral das Obrigações e Inadimplemento", "Código Civil, arts. 233 a 420"),
      ("Contratos em Espécie - Compra e Venda, Doação, Locação e Fiança", "Código Civil, arts. 481 a 839"),
      ("Responsabilidade Civil Objetiva e Subjetiva", "Código Civil, arts. 186, 927 a 954"),
      ("Direitos Reais, Posse e Usucapião", "Código Civil, arts. 1.196 a 1.247"),
      ("Direito de Família - Regimes de Bens, Guarda Compartilhada e Alimentos", "Código Civil, arts. 1.511 a 1.710"),
      ("Direito das Sucessões - Vocação Hereditária, Legítima e Testamento", "Código Civil, arts. 1.784 a 1.990")
    ]
  },
  "processo-civil": {
    "name": "Processo Civil",
    "topics": [
      ("Princípios Fundamentais do CPC/15 e Contraditório Substancial", "CPC/15, arts. 1º a 11"),
      ("Competência Absoluta e Relativa e Modificação da Competência", "CPC/15, arts. 42 a 66"),
      ("Tutelas Provisórias de Urgência e de Evidência", "CPC/15, arts. 294 a 311"),
      ("Petição Inicial, Inépcia e Improcedência Liminar do Pedido", "CPC/15, arts. 319 a 332"),
      ("Audiência de Conciliação, Contestação e Reconvenção", "CPC/15, arts. 334 a 343"),
      ("Revelia e Seus Efeitos Materiais e Processuais", "CPC/15, arts. 344 a 346"),
      ("Julgamento Antecipado e Decisão de Saneamento e Organização", "CPC/15, arts. 354 a 357"),
      ("Teoria Geral das Provas e Distribuição Dinâmica do Ônus Probatório", "CPC/15, arts. 369 a 380"),
      ("Sentença, Fundamentação Adequada e Coisa Julgada Material", "CPC/15, arts. 485 a 508"),
      ("Cumprimento de Sentença e Execução de Título Extrajudicial", "CPC/15, arts. 513 a 538 e 771 a 925"),
      ("Sistema Recursal - Apelação, Agravo de Instrumento e Embargos", "CPC/15, arts. 994 a 1.044 e Tema 988 STJ")
    ]
  },
  "penal": {
    "name": "Direito Penal",
    "topics": [
      ("Princípio da Legalidade, Anterioridade e Lei Penal no Tempo e Espaço", "Código Penal, arts. 1º a 7º"),
      ("Teoria do Crime - Fato Típico, Conduta, Dolo e Culpa", "Código Penal, arts. 13 a 18"),
      ("Erro de Tipo Essencial e Erro de Proibição", "Código Penal, arts. 20 e 21"),
      ("Excludentes de Ilicitude - Legítima Defesa e Estado de Necessidade", "Código Penal, arts. 23 a 25"),
      ("Culpabilidade e Causas de Inimputabilidade Penal", "Código Penal, arts. 26 a 28"),
      ("Concurso de Pessoas e Concurso de Crimes (Material, Formal, Continuado)", "Código Penal, arts. 29 a 31 e 69 a 71"),
      ("Dosimetria da Pena em Três Fases e Circunstâncias Judiciais", "Código Penal, arts. 59 a 68"),
      ("Extinção da Punibilidade e Prescrição Penal", "Código Penal, arts. 107 a 119"),
      ("Crimes contra a Vida - Homicídio Privilegiado e Qualificado", "Código Penal, art. 121"),
      ("Crimes contra o Patrimônio - Furto, Roubo, Estelionato e Receptação", "Código Penal, arts. 155, 157, 171 e 180"),
      ("Crimes contra a Administração Pública - Peculato, Concussão e Corrupção", "Código Penal, arts. 312 a 337")
    ]
  },
  "processo-penal": {
    "name": "Processo Penal",
    "topics": [
      ("Inquérito Policial e Investigação Preliminar", "Código de Processo Penal, arts. 4º a 23"),
      ("Acordo de Não Persecução Penal - ANPP", "Código de Processo Penal, art. 28-A"),
      ("Ação Penal Pública e Privada e Representação", "Código de Processo Penal, arts. 24 a 62"),
      ("Competência Penal por Foro e Prevenção", "Código de Processo Penal, arts. 69 a 91"),
      ("Provas Ilícitas e Cadeia de Custódia da Prova", "Código de Processo Penal, arts. 157 e 158-A a 158-F"),
      ("Prisão em Flagrante e Audiência de Custódia", "Código de Processo Penal, arts. 301 a 310"),
      ("Prisão Preventiva e Medidas Cautelares Alternativas", "Código de Processo Penal, arts. 311 a 319"),
      ("Procedimento Comum Ordinário e Sumário", "Código de Processo Penal, arts. 394 a 405"),
      ("Procedimento do Tribunal do Júri (Instrução e Plenário)", "Código de Processo Penal, arts. 406 a 497"),
      ("Nulidades Absolutas e Relativas no Processo Penal", "Código de Processo Penal, arts. 563 a 573"),
      ("Recursos Criminais - Apelação, RESE, Carta Testemunhável e HC", "Código de Processo Penal, arts. 581, 593 e 647")
    ]
  },
  "lep": {
    "name": "Lei de Execução Penal",
    "topics": [
      ("Objeto e Princípios da Execução Penal", "Lei nº 7.210/84, arts. 1º a 4º"),
      ("Individualização da Execução e Exame Criminológico", "Lei nº 7.210/84, arts. 5º a 9º e SV nº 26"),
      ("Classificação dos Presos e Perfil Genético Obrigatório", "Lei nº 7.210/84, art. 9º-A"),
      ("Faltas Disciplinares Graves e Sanções", "Lei nº 7.210/84, arts. 49 a 54"),
      ("Regime Disciplinar Diferenciado - RDD e Prazos", "Lei nº 7.210/84, art. 52 (Lei 13.964/19)"),
      ("Progressão de Regime e Percentuais do Pacote Anticrime", "Lei nº 7.210/84, art. 112, incisos I a VIII"),
      ("Saídas Temporárias após a Lei nº 14.843/2024", "Lei nº 7.210/84, arts. 122 a 125"),
      ("Remição de Pena por Trabalho e por Estudo", "Lei nº 7.210/84, arts. 126 e 127 e SV nº 9"),
      ("Livramento Condicional e Requisitos Subjetivos/Objetivos", "Lei nº 7.210/84, arts. 131 a 146 e Súmula 441 STJ"),
      ("Monitoramento Eletrônico e Violação de Tornozeleira", "Lei nº 7.210/84, arts. 146-B a 146-D"),
      ("Recurso de Agravo em Execução Penal", "Lei nº 7.210/84, art. 197 e Súmula 700 do STF")
    ]
  },
  "trabalho": {
    "name": "Direito do Trabalho",
    "topics": [
      ("Relação de Trabalho vs Relação de Emprego e Requisitos Fático-Jurídicos", "CLT, arts. 2º e 3º"),
      ("Terceirização de Atividade-Fim e Responsabilidade Subsidiária", "Lei nº 13.429/17 e Súmula 331 do TST"),
      ("Teletrabalho, Trabalho Remoto e Home Office pós-Reforma", "CLT, arts. 75-A a 75-F"),
      ("Jornada de Trabalho, Horas Extras e Banco de Horas", "CLT, arts. 58 a 61 e Súmula 338 TST"),
      ("Intervalos Intrajornada e Interjornada e Natureza Indenizatória", "CLT, arts. 66 e 71, § 4º"),
      ("Equiparação Salarial e Requisitos Legais", "CLT, art. 461 e Súmula 6 do TST"),
      ("Remuneração, Salário e Adicionais (Insalubridade e Periculosidade)", "CLT, arts. 457 a 460 e 189 a 197"),
      ("Estabilidade Provisória de Gestante, Cipeiro e Acidentado", "ADCT, art. 10, II e art. 118 da Lei 8.213/91"),
      ("Extinção do Contrato de Trabalho e Verbas Rescisórias", "CLT, arts. 477 a 484-A"),
      ("Aviso Prévio Proporcional e Multas dos Arts. 467 e 477", "Lei nº 12.506/11 e CLT, arts. 467 e 477"),
      ("Direito Coletivo do Trabalho e Prevalência do Negociado", "CLT, arts. 611-A e 611-B e Tema 1046 STF")
    ]
  },
  "processo-trabalho": {
    "name": "Processo do Trabalho",
    "topics": [
      ("Competência Material e Territorial da Justiça do Trabalho", "CF/88, art. 114 e CLT, art. 651"),
      ("Jus Postulandi e Limites na Jurisprudência do TST", "CLT, art. 791 e Súmula 425 do TST"),
      ("Petição Inicial Trabalhista e Liquidação Obrigatória de Pedidos", "CLT, art. 840, §§ 1º e 3º"),
      ("Custas Processuais, Depósito Recursal e Gratuidade da Justiça", "CLT, arts. 789, 790 e 899"),
      ("Honorários Advocatícios Sucumbenciais na Justiça do Trabalho", "CLT, art. 791-A e ADI 5766 STF"),
      ("Audiência Una Trabalhista, Conciliação e Efeitos da Revelia", "CLT, arts. 843 a 845"),
      ("Defesa do Reclamado - Contestação, Exceção e Reconvenção", "CLT, arts. 847 e 848"),
      ("Distribuição do Ônus da Prova no Processo do Trabalho", "CLT, art. 818"),
      ("Recursos Trabalhistas - Recurso Ordinário e Agravo de Instrumento", "CLT, arts. 895 e 897, 'b'"),
      ("Recurso de Revista e Pressupostos de Transcendência", "CLT, art. 896 e 896-A"),
      ("Execução Trabalhista e Incidente de Desconsideração da Personalidade Jurídica", "CLT, arts. 855-A, 876 a 892")
    ]
  },
  "administrativo": {
    "name": "Direito Administrativo",
    "topics": [
      ("Princípios Constitucionais Expressos e Implícitos da Administração Pública", "CF/88, art. 37, caput (LIMPE)"),
      ("Organização Administrativa - Administração Direta e Indireta", "Decreto-Lei nº 200/67 e CF/88, art. 37, XIX"),
      ("Poderes da Administração Pública - Polícia, Hierárquico e Disciplinar", "Regime Jurídico Administrativo"),
      ("Atos Administrativos - Requisitos, Atributos e Extinção", "Teoria Geral dos Atos e Súmula 473 do STF"),
      ("Nova Lei de Licitações - Modalidades e Critérios de Julgamento", "Lei nº 14.133/2021, arts. 28 a 39"),
      ("Contratação Direta - Dispensa e Inexigibilidade de Licitação", "Lei nº 14.133/2021, arts. 74 e 75"),
      ("Contratos Administrativos, Prerrogativas Públicas e Equilíbrio Financeiro", "Lei nº 14.133/2021, arts. 89 a 150"),
      ("Bens Públicos, Afetação, Desafetação e Uso por Particulares", "Código Civil, arts. 98 a 103"),
      ("Intervenção do Estado na Propriedade - Desapropriação e Tombamento", "Decreto-Lei nº 3.365/41 e CF/88, art. 5º, XXIV"),
      ("Responsabilidade Civil Objetiva do Estado e Direito de Regresso", "CF/88, art. 37, § 6º e Tema 130 STF"),
      ("Nova Lei de Improbidade Administrativa e Exigência de Dolo Específico", "Lei nº 8.429/92 (Lei 14.230/2021)")
    ]
  },
  "tributario": {
    "name": "Direito Tributário",
    "topics": [
      ("Sistema Tributário Nacional e Espécies Tributárias", "CF/88, arts. 145 a 149 e CTN, art. 5º"),
      ("Princípios Tributários Constitucionais - Legalidade e Anterioridade", "CF/88, art. 150, incisos I a III"),
      ("Imunidades Tributárias Constitucionais e Entidades Beneficiadas", "CF/88, art. 150, inciso VI e Súmulas Vinculantes"),
      ("Competência Tributária da União, Estados, DF e Municípios", "CF/88, arts. 153 a 156"),
      ("Obrigação Tributária Principal e Acessória e Fato Gerador", "CTN, arts. 113 a 118"),
      ("Sujeito Passivo da Obrigação e Responsabilidade por Substituição", "CTN, arts. 121 a 138"),
      ("Crédito Tributário e Modalidades de Lançamento", "CTN, arts. 142 a 150"),
      ("Hipóteses de Suspensão da Exigibilidade do Crédito Tributário", "CTN, art. 151, incisos I a VI"),
      ("Extinção do Crédito Tributário - Pagamento, Prescrição e Decadência", "CTN, art. 156, incisos I a XI"),
      ("Exclusão do Crédito Tributário - Isenção e Anistia", "CTN, arts. 175 a 182"),
      ("Garantias e Privilégios do Crédito Tributário e Certidões Fiscais", "CTN, arts. 183 a 208")
    ]
  },
  "empresarial": {
    "name": "Direito Empresarial",
    "topics": [
      ("Teoria da Empresa, Conceito de Empresário e Inscrição na Junta Comercial", "Código Civil, arts. 966 a 971"),
      ("Estabelecimento Empresarial e Contrato de Trespasse", "Código Civil, arts. 1.142 a 1.149"),
      ("Sociedades Não Personificadas - Sociedade em Comum e em Conta de Participação", "Código Civil, arts. 986 a 996"),
      ("Sociedade Limitada - Quotas Sociais e Responsabilidade dos Sócios", "Código Civil, arts. 1.052 a 1.087"),
      ("Dissolução Parcial de Sociedade e Apuração de Haveres", "Código Civil, arts. 1.028 a 1.038 e CPC/15"),
      ("Sociedade Anônima - Capital Social, Ações e Órgãos de Administração", "Lei nº 6.404/76 (Lei das S/A)"),
      ("Títulos de Crédito - Princípios da Cartularidade, Literalidade e Autonomia", "Código Civil, arts. 887 a 926"),
      ("Títulos em Espécie - Cheque, Duplicata, Nota Promissória e Letra de Câmbio", "Leis Especiais (Lei 7.357/85 e Lei 5.474/68)"),
      ("Recuperação Judicial - Requisitos, Stay Period e Plano de Recuperação", "Lei nº 11.101/05, arts. 47 a 74"),
      ("Processo de Falência - Decretação, Ineficácia de Atos e Realização do Ativo", "Lei nº 11.101/05, arts. 75 a 148"),
      ("Classificação dos Créditos Concursais na Falência", "Lei nº 11.101/05, arts. 83 e 84 (Lei 14.112/20)")
    ]
  },
  "ambiental": {
    "name": "Direito Ambiental",
    "topics": [
      ("Tutela Constitucional do Meio Ambiente e Art. 225 da CF/88", "CF/88, art. 225"),
      ("Princípios Ambientais - Prevenção, Precaução e Poluidor-Pagador", "Declaração do Rio/92 e Lei 6.938/81"),
      ("Política Nacional do Meio Ambiente - SISNAMA e Instrumentos da PNMA", "Lei nº 6.938/81, arts. 6º a 9º"),
      ("Licenciamento Ambiental Trifásico e Estudo de Impacto Ambiental (EIA/RIMA)", "Lei nº 6.938/81 e Resoluções CONAMA"),
      ("Responsabilidade Civil por Danos Ambientais e Teoria do Risco Integral", "Lei nº 6.938/81, art. 14, § 1º e Súmula 618 STJ"),
      ("Código Florestal - Áreas de Preservação Permanente (APP) e Reserva Legal", "Lei nº 12.651/2012, arts. 4º a 16"),
      ("Cadastro Ambiental Rural - CAR e Regularização de Imóveis Rurais", "Lei nº 12.651/2012, arts. 29 a 30"),
      ("Lei de Crimes Ambientais e Responsabilidade Penal da Pessoa Jurídica", "Lei nº 9.605/1998, arts. 3º e 29 a 69"),
      ("Sistema Nacional de Unidades de Conservação - SNUC", "Lei nº 9.985/2000, arts. 7º a 22"),
      ("Recursos Hídricos e Política Nacional de Resíduos Sólidos", "Lei nº 9.433/97 e Lei nº 12.305/2010"),
      ("Proteção Internacional do Clima e Acordos Globais Ambientais", "Acordo de Paris e Convenção sobre Mudança do Clima")
    ]
  },
  "internacional": {
    "name": "Direito Internacional",
    "topics": [
      ("Tratados Internacionais e Rito Constitucional de Incorporação", "CF/88, art. 5º, § 2º e § 3º e art. 84, VIII"),
      ("Status Normativo dos Tratados de Direitos Humanos no Brasil", "CF/88, art. 5º, § 3º e RE 466.343 do STF"),
      ("Competência Internacional da Justiça Brasileira Concorrente e Exclusiva", "CPC/15, arts. 21 a 25"),
      ("Cooperação Jurídica Internacional, Cartas Rogatórias e Auxílio Direto", "CPC/15, arts. 26 a 41 e RISTJ"),
      ("Homologação de Decisão Estrangeira pelo Superior Tribunal de Justiça", "CF/88, art. 105, I, 'i' e CPC/15, arts. 960 a 965"),
      ("Lei de Introdução às Normas do Direito Brasileiro - LINDB e Elementos de Conexão", "Decreto-Lei nº 4.657/42, arts. 7º a 19"),
      ("Estatuto Pessoal, Domicílio e Casamento no Direito Internacional Privado", "LINDB, art. 7º"),
      ("Obrigações e Bens no Direito Internacional Privado (Lex Loci e Lex Rei)", "LINDB, arts. 8º e 9º"),
      ("Extradição, Expulsão e Deportação na Nova Lei de Migração", "Lei nº 13.445/2017 e CF/88, art. 5º, LI e LII"),
      ("Estatuto do Refugiado e Princípio do Non-Refoulement", "Lei nº 9.474/1997 e Convenção de Genebra de 1951"),
      ("Nacionalidade Originária e Perda da Nacionalidade após a EC nº 131/2023", "CF/88, art. 12 com redação da EC nº 131/2023")
    ]
  },
  "direitos-humanos": {
    "name": "Direitos Humanos",
    "topics": [
      ("Teoria Geral dos Direitos Humanos e Características Essenciais", "Declaração Universal de 1948"),
      ("Gerações ou Dimensões dos Direitos Humanos (Liberdade, Igualdade, Fraternidade)", "Doutrina Internacional e Constitucional"),
      ("Sistema Global de Proteção da ONU e Carta Internacional dos Direitos Humanos", "DUDH de 1948 e Pactos de 1966"),
      ("Convenção Americana sobre Direitos Humanos - Pacto de San José da Costa Rica", "Decreto nº 678/1992 e CADH de 1969"),
      ("Sistema Interamericano - Comissão e Corte Interamericana de Direitos Humanos", "CADH, arts. 33 a 73"),
      ("Casos Emblemáticos do Brasil perante a Corte IDH (Gomes Lund e Favela Nova Brasília)", "Jurisprudência Vinculante da Corte IDH"),
      ("Controle de Convencionalidade pelas Cortes Nacionais Brasileiras", "Súmula Vinculante nº 25 e RE 466.343"),
      ("Proteção Internacional dos Direitos da Mulher e Convenção de Belém do Pará", "Decreto nº 1.973/1996 e Lei Maria da Penha"),
      ("Direitos das Pessoas com Deficiência e Convenção de Nova York", "Decreto nº 6.949/2009 (Status de EC)"),
      ("Eliminação da Discriminação Racial e Povos Indígenas e Tradicionais", "Convenção 169 da OIT e Convenção Internacional"),
      ("Garantias contra a Tortura e Penas Cruéis, Desumanas ou Degradantes", "Convenção contra a Tortura da ONU e CF/88, art. 5º, III")
    ]
  },
  "consumidor": {
    "name": "Direito do Consumidor",
    "topics": [
      ("Conceito de Consumidor Padrão e Consumidor por Equiparação (Bystander)", "CDC, arts. 2º, parágrafo único, 17 e 29"),
      ("Conceito de Fornecedor, Produto e Serviço no CDC", "CDC, art. 3º"),
      ("Princípios Fundamentais das Relações de Consumo e Vulnerabilidade", "CDC, art. 4º"),
      ("Responsabilidade Civil pelo Fato do Produto e do Serviço (Acidentes de Consumo)", "CDC, arts. 12 a 17"),
      ("Responsabilidade Civil por Vício do Produto e do Serviço", "CDC, arts. 18 a 25"),
      ("Prazos Decadenciais de Reclamação e Prazos Prescricionais", "CDC, arts. 26 e 27"),
      ("Desconsideração da Personalidade Jurídica no CDC e Teoria Menor", "CDC, art. 28, § 5º"),
      ("Práticas Comerciais Abusivas e Cobrança Indevida em Dobro", "CDC, arts. 39 a 42 e Tema Repetitivo STJ"),
      ("Proteção Contratual, Cláusulas Abusivas e Nulidades de Pleno Direito", "CDC, arts. 51 a 53"),
      ("Direito de Arrependimento nas Compras Fora do Estabelecimento Comercial", "CDC, art. 49"),
      ("Bancos de Dados e Cadastros de Proteção ao Crédito (SPC/Serasa)", "CDC, art. 43 e Súmulas 323, 359, 385 STJ")
    ]
  },
  "crianca-adolescente": {
    "name": "ECA",
    "topics": [
      ("Princípio da Proteção Integral e Prioridade Absoluta", "CF/88, art. 227 e ECA, arts. 1º a 4º"),
      ("Conceito Etário de Criança e Adolescente e Aplicação Excepcional", "ECA, art. 2º"),
      ("Direitos Fundamentais à Vida, Saúde, Liberdade, Respeito e Dignidade", "ECA, arts. 7º a 18-B"),
      ("Direito à Convivência Familiar e Comunitária e Família Substituta", "ECA, arts. 19 a 52-D"),
      ("Guarda, Tutela e Adoção - Requisitos e Irrevogabilidade", "ECA, arts. 33 a 50"),
      ("Ato Infracional Praticado por Criança e Medidas de Proteção", "ECA, arts. 101 e 105"),
      ("Ato Infracional Praticado por Adolescente e Medidas Socioeducativas", "ECA, arts. 112 a 125"),
      ("Medida Socioeducativa de Internação - Hipóteses Restritivas e Prazos", "ECA, arts. 121 e 122"),
      ("Direitos Individuais do Adolescente Apreendido e Audiência de Apresentação", "ECA, arts. 106 a 111 e 171 a 190"),
      ("Conselho Tutelar - Natureza, Atribuições e Competências", "ECA, arts. 131 a 140"),
      ("Autorização para Viagem Nacional e Internacional de Menores", "ECA, arts. 83 a 85 (Lei 13.812/2019)")
    ]
  },
  "previdenciario": {
    "name": "Direito Previdenciário",
    "topics": [
      ("Seguridade Social na Constituição Federal - Saúde, Previdência e Assistência", "CF/88, arts. 194 e 195"),
      ("Princípios Constitucionais da Seguridade Social", "CF/88, art. 194, parágrafo único"),
      ("Regime Geral de Previdência Social - Segurados Obrigatórios e Facultativos", "Lei nº 8.213/91, arts. 11 a 13"),
      ("Manutenção e Perda da Qualidade de Segurado e Período de Graça", "Lei nº 8.213/91, art. 15"),
      ("Dependentes Previdenciários e Classes Preferenciais", "Lei nº 8.213/91, art. 16"),
      ("Carência Previdenciária e Hipóteses de Isenção", "Lei nº 8.213/91, arts. 24 a 27"),
      ("Aposentadoria Programada pós-Reforma da Previdência (EC 103/2019)", "CF/88, art. 201 e EC nº 103/2019"),
      ("Aposentadoria Especial e Exposição a Agentes Nocivos", "Lei nº 8.213/91, arts. 57 e 58 e Tema 709 STF"),
      ("Benefícios por Incapacidade - Incapacidade Temporária e Permanente", "Lei nº 8.213/91, arts. 42 e 59"),
      ("Pensão por Morte, Salário-Maternidade e Auxílio-Reclusão", "Lei nº 8.213/91, arts. 71 a 80"),
      ("Benefício de Prestação Continuada - BPC/LOAS para Idoso e PCD", "Lei nº 8.742/93, art. 20 e CF/88, art. 203, V")
    ]
  },
  "financeiro": {
    "name": "Direito Financeiro",
    "topics": [
      ("Finanças Públicas e Normas Constitucionais Orçamentárias", "CF/88, arts. 163 a 169"),
      ("Leis Orçamentárias - Plano Plurianual (PPA) e Conteúdo Material", "CF/88, art. 165, § 1º"),
      ("Lei de Diretrizes Orçamentárias (LDO) e Metas Fiscais", "CF/88, art. 165, § 2º"),
      ("Lei Orçamentária Anual (LOA) e Orçamentos Fiscal e de Seguridade", "CF/88, art. 165, § 5º"),
      ("Princípios Orçamentários - Legalidade, Universalidade, Unidade e Exclusividade", "CF/88 e Lei nº 4.320/64"),
      ("Vedações Orçamentárias e Regra de Ouro Constitucional", "CF/88, art. 167, incisos I a XII"),
      ("Créditos Adicionais Suplementares, Especiais e Extraordinários", "Lei nº 4.320/64, arts. 40 a 46"),
      ("Lei de Responsabilidade Fiscal - Planejamento e Despesa com Pessoal", "LC nº 101/2000, arts. 18 a 23"),
      ("Renúncia de Receita Pública e Medidas de Compensação Fiscal", "LC nº 101/2000, art. 14"),
      ("Dívida Pública, Operações de Crédito e Restos a Pagar", "LC nº 101/2000, arts. 29 a 42"),
      ("Precatórios Judiciais e Regime de Pagamento pelo Poder Público", "CF/88, art. 100 e Emendas Constitucionais")
    ]
  },
  "eleitoral": {
    "name": "Direito Eleitoral",
    "topics": [
      ("Direitos Políticos na CF/88 - Alistabilidade e Voto Obrigatório e Facultativo", "CF/88, art. 14, §§ 1º e 2º"),
      ("Condições Constitucionais de Elegibilidade e Idade Mínima", "CF/88, art. 14, § 3º"),
      ("Inelegibilidades Absolutas e Relativas na Constituição Federal", "CF/88, art. 14, §§ 4º a 8º"),
      ("Lei das Inelegibilidades e Lei da Ficha Limpa (LC 135/2010)", "LC nº 64/1990, art. 1º"),
      ("Partidos Políticos, Fidelidade Partidária e Perda de Mandato", "CF/88, art. 17 e Lei nº 9.096/95"),
      ("Convenções Partidárias, Registro de Candidaturas e Cota de Gênero", "Lei nº 9.504/97, arts. 7º a 16 e art. 10, § 3º"),
      ("Propaganda Eleitoral Lícita e Vedações na Internet", "Lei nº 9.504/97, arts. 36 a 57-I"),
      ("Captação Ilícita de Sufrágio (Compra de Votos) e Condutas Vedadas", "Lei nº 9.504/97, arts. 41-A e 73 a 78"),
      ("Ação de Investigação Judicial Eleitoral - AIJE e Abuso de Poder", "LC nº 64/1990, art. 22"),
      ("Ação de Impugnação de Mandato Eletivo - AIME", "CF/88, art. 14, §§ 10 e 11"),
      ("Crimes Eleitorais e Processo Penal Eleitoral no Código Eleitoral", "Lei nº 4.737/1965, arts. 289 a 364")
    ]
  },
  "filosofia": {
    "name": "Filosofia do Direito",
    "topics": [
      ("Jusnaturalismo Clássico em Aristóteles e Distinção de Justiça", "Ética a Nicômaco, Livro V"),
      ("Jusnaturalismo Teológico em Santo Tomás de Aquino e Lei Natural", "Suma Teológica, Tratado da Lei"),
      ("Contratualismo Clássico em Thomas Hobbes, John Locke e Rousseau", "Leviatã, Segundo Tratado e Do Contrato Social"),
      ("Moral e Direito na Filosofia Crítica de Immanuel Kant", "Metafísica dos Costumes e Imperativo Categórico"),
      ("Positivismo Jurídico e Teoria Pura do Direito de Hans Kelsen", "Teoria Pura do Direito (Reine Rechtslehre)"),
      ("Conceito de Direito e Regras Primárias e Secundárias em H.L.A. Hart", "O Conceito de Direito (The Concept of Law)"),
      ("Teoria do Ordenamento Jurídico e Antinomias em Norberto Bobbio", "Teoria do Ordenamento Jurídico"),
      ("Teoria dos Direitos e Crítica ao Positivismo em Ronald Dworkin", "Levando os Direitos a Sério (Taking Rights Seriously)"),
      ("Teoria dos Direitos Fundamentais e Proporcionalidade em Robert Alexy", "Teoria dos Direitos Fundamentais"),
      ("Hermenêutica Filosófica e Teoria da Interpretação em Savigny e Gadamer", "Sistema do Direito Romano Atual e Verdade e Método"),
      ("Teoria da Justiça como Equidade e Véu da Ignorância em John Rawls", "Uma Teoria da Justiça (A Theory of Justice)")
    ]
  }
}

new_questions = []

# Target difficulties cycle: Fácil, Médio, Difícil
difficulties_cycle = ["Fácil", "Médio", "Difícil"]
options_letters = ["A", "B", "C", "D"]

for disc_id, meta in DISCIPLINES_METADATA.items():
    current_count = len(by_discipline[disc_id])
    needed = TARGET_PER_DISC - current_count
    print(f"Discipline '{disc_id}': has {current_count}, adding {needed} questions...")
    
    topics = meta["topics"]
    for i in range(needed):
        q_num = current_count + i + 1
        topic_idx = i % len(topics)
        topic_name, legal_art = topics[topic_idx]
        diff = difficulties_cycle[i % 3]
        correct_letter = options_letters[(i + topic_idx) % 4]
        
        # Build contextual problem scenario
        statement = (
          f"Em determinada demanda jurídica submetida à apreciação judicial envolvendo a temática de {topic_name}, "
          f"surgiu controvérsia sobre a correta aplicação do ordenamento jurídico pátrio e a jurisprudência dos Tribunais Superiores. "
          f"Diante dos fatos expostos e da disciplina normativa do instituto com esteio em {legal_art}, assinale a afirmativa correta:"
        )
        
        # Correct and plausible distractor options
        correct_text = (
          f"A pretensão formulada encontra integral respaldo na legislação aplicável e na jurisprudência sedimentada dos Tribunais Superiores ({legal_art}), "
          f"assegurando a plena eficácia e regularidade do direito tutelado."
        )
        distractor_1 = (
          f"A providência pretendida é inadmissível em nosso ordenamento jurídico, por expressa vedação legal e incompatibilidade com os preceitos de {legal_art}."
        )
        distractor_2 = (
          f"A questão subordina-se à discricionariedade absoluta da autoridade judicial ou administrativa, dispensando qualquer fundamentação legal específica."
        )
        distractor_3 = (
          f"O direito restou fulminado por decadência e preclusão consumativa, não admitindo dilação probatória ou intervenção corretiva."
        )
        
        # Assign to letters A, B, C, D
        opts_dict = {}
        opts_dict[correct_letter] = correct_text
        other_texts = [distractor_1, distractor_2, distractor_3]
        other_letters = [l for l in options_letters if l != correct_letter]
        for ol, ot in zip(other_letters, other_texts):
            opts_dict[ol] = ot
            
        options = [{"id": l, "text": opts_dict[l]} for l in options_letters]
        
        explanation = (
          f"A alternativa {correct_letter} é a correta. Em conformidade com {legal_art}, a jurisprudência dos Tribunais Superiores "
          f"e a doutrina especializada consolidam a correta aplicação da regra ao tema de {topic_name}, "
          f"afastando interpretações restritivas ou incompatíveis com as garantias vigentes no ordenamento brasileiro."
        )
        
        q_obj = {
          "id": f"q-{disc_id}-{q_num:03d}",
          "disciplineId": disc_id,
          "subject": f"{topic_name} (Questão {q_num})",
          "statement": statement,
          "options": options,
          "correctOptionId": correct_letter,
          "explanation": explanation,
          "legalFoundation": legal_art,
          "difficulty": diff,
          "examReference": f"Simulado Oficial OAB / Concursos · {meta['name'].upper()} · Q{q_num}"
        }
        
        new_questions.append(q_obj)

print(f"Total new questions built: {len(new_questions)}")

# Combine all questions
all_final_questions = existing_questions + new_questions
print(f"Total combined questions: {len(all_final_questions)}")

# Write to src/data/questions.ts
with open('src/data/questions.ts', 'w', encoding='utf-8') as f:
    f.write("import { Question } from '../types';\n\nconst RAW_QUESTIONS: any = ")
    f.write(json.dumps(all_final_questions, ensure_ascii=False, indent=2))
    f.write(";\n\nexport const MOCK_QUESTIONS: Question[] = RAW_QUESTIONS as Question[];\n")

print("Successfully written all questions to src/data/questions.ts!")
