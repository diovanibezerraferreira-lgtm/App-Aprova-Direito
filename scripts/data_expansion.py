# -*- coding: utf-8 -*-
"""
High-yield case-based questions expansion for:
- tributario (10)
- empresarial (15)
- consumidor (20)
- ambiental (20)
- direitos-humanos (25)
- internacional (25)
- crianca-adolescente (25)
- previdenciario (25)
- financeiro (25)
- eleitoral (25)
- filosofia (25)
All with realistic case scenarios and 4 customized options.
"""

def get_expanded_questions():
    questions = []

    def make_q(qid, disc, subj, diff, stmt, opts, correct, expl, found):
        return {
            "id": qid,
            "disciplineId": disc,
            "subject": subj,
            "difficulty": diff,
            "statement": stmt,
            "options": [{"id": o[0], "text": o[1]} for o in opts],
            "correctOptionId": correct,
            "explanation": expl,
            "legalFoundation": found,
            "examReference": f"Simulado Preparatório OAB · {disc.capitalize()}"
        }

    # 1. Tributário (+10 -> 30)
    trib_extra = [
        ("Suspensão da Exigibilidade - Liminar em Mandado de Segurança", "Fácil",
         "Sociedade empresária impetrou mandado de segurança contra auto de infração tributário e obteve medida liminar determinando a suspensão da exigibilidade do crédito. Enquanto vigente a liminar:",
         [("A", "O Fisco pode ajuizar execução fiscal com penhora imediata de ativos."),
          ("B", "A exigibilidade do crédito fica suspensa, impedindo o ajuizamento de execução fiscal e autorizando a expedição de certidão positiva com efeitos de negativa."),
          ("C", "O tributo é cancelado em definitivo com extinção do crédito."),
          ("D", "A empresa é obrigada a depositar o valor em dinheiro no prazo de 48 horas.")],
         "B", "Art. 151, IV, do CTN estabelece que a concessão de liminar em mandado de segurança suspende a exigibilidade do crédito tributário.", "CTN, art. 151, IV."),

        ("Extinção do Crédito - Pagamento Indevido e Restituição", "Médio",
         "Contribuinte recolheu taxa de licença municipal com valor decuplicado por evidente erro de digitação do sistema bancário. O prazo para pleitear a restituição é de:",
         [("A", "2 anos contados do encerramento do exercício financeiro."),
          ("B", "5 anos contados da data da extinção do crédito (pagamento indevido)."),
          ("C", "10 anos pela regra geral do Código Civil."),
          ("D", "1 ano após o encerramento do processo administrativo de auditoria.")],
         "B", "Art. 168, I, do CTN: O direito de pleitear a restituição total ou parcial do tributo extingue-se com o decurso do prazo de 5 (cinco) anos contados da data da extinção do crédito tributário.", "CTN, art. 168, I."),

        ("Imunidade de Templos de Qualquer Culto", "Fácil",
         "Igreja é proprietária de imóvel onde funciona o templo de celebração religiosa e de um terreno anexo alugado a terceiro, cuja renda de locação é integralmente revertida para as obras sociais e manutenção do templo. Sobre o IPTU do terreno alugado:",
         [("A", "Incide normalmente porque a imunidade não alcança imóveis alugados a particulares."),
          ("B", "Não incide, pois a imunidade do art. 150, VI, 'b', da CF alcança os imóveis alugados a terceiros, desde que o valor dos aluguéis seja aplicado nas atividades essenciais da entidade (Súmula Vinculante 52)."),
          ("C", "Incide com desconto compulsório de 50%."),
          ("D", "Depende de lei ordinária municipal que conceda isenção específica.")],
         "B", "Súmula Vinculante 52 do STF: 'A imunidade tributária do art. 150, VI, 'c', da CF/88 estende-se aos imóveis de propriedade das instituições de assistência social e de educação alugados a terceiros, desde que o valor dos aluguéis seja aplicado nas suas atividades essenciais.' Aplicável igualmente aos templos (Tema 85 STF).", "Súmula Vinculante nº 52 do STF."),

        ("Solidariedade Tributária - Ausência de Benefício de Ordem", "Médio",
         "Dois coproprietários de imóvel indiviso foram notificados para recolher o IPTU em aberto. Um dos coproprietários alegou benefício de ordem para que o Fisco executasse primeiro o outro. Conforme o CTN:",
         [("A", "O benefício de ordem deve ser acolhido por analogia ao contrato de fiança."),
          ("B", "Na solidariedade tributária, a obrigação não comporta benefício de ordem, podendo a autoridade fiscal exigir a dívida por inteiro de qualquer um dos coobrigados."),
          ("C", "A dívida se extingue pela metade para cada um dos proprietários de pleno direito."),
          ("D", "O credor tributário é obrigado a executar simultaneamente ambos os sócios de forma fracionária.")],
         "B", "Art. 124, parágrafo único, do CTN: A solidariedade tributária não comporta benefício de ordem.", "CTN, art. 124, parágrafo único."),

        ("Isenção Tributária - Competência Concorrente Proibida", "Difícil",
         "Lei federal ordinária concedeu isenção de IPTU e ISS para incentivar a instalação de indústrias em região economicamente deprimida do Nordeste. A isenção heterônoma concedida pela União é:",
         [("A", "Plenamente válida em razão do princípio da redução das desigualdades regionais."),
          ("B", "Inconstitucional, pois é vedado à União instituir isenções de tributos da competência dos Estados, do Distrito Federal ou dos Municípios (vedação à isenção heterônoma)."),
          ("C", "Válida desde que referendada pelo Senado Federal em 60 dias."),
          ("D", "Admissível apenas para Municípios com menos de 50 mil habitantes.")],
         "B", "Art. 151, III, da CF/88: É vedado à União instituir isenções de tributos da competência dos Estados, do Distrito Federal ou dos Municípios (princípio da vedação à isenção heterônoma).", "CF/88, art. 151, III."),

        ("IPTU Progressivo no Tempo - Estatuto da Cidade", "Médio",
         "Proprietário de solo urbano não edificado deixou de dar cumprimento ao aproveitamento compulsório do imóvel determinado pelo Plano Diretor municipal. O Município pode aplicar:",
         [("A", "Prisão civil do proprietário do solo urbano."),
          ("B", "IPTU progressivo no tempo mediante majoração de alíquota pelo prazo de 5 anos consecutivos, e desapropriação com pagamento em títulos da dívida pública se descumprido."),
          ("C", "Confisco sumário da propriedade privada sem indenização."),
          ("D", "Cancelamento da matrícula do imóvel no Registro Geral de Imóveis.")],
         "B", "Art. 182, § 4º, II e III, da CF/88 e Art. 7º da Lei nº 10.257/2001 (Estatuto da Cidade): O Município pode exigir aproveitamento compulsório, aplicar IPTU progressivo no tempo e, sucessivamente, desapropriação com pagamento em títulos da dívida pública.", "CF/88, art. 182, § 4º; Lei nº 10.257/2001, art. 7º."),

        ("ISS - Local da Prestação e Súmula Vinculante 31", "Fácil",
         "Locadora de veículos automotores e maquinários sem motorista foi autuada por Município para recolher ISS sobre a receita dos contratos de locação de bens móveis. Conforme a Súmula Vinculante 31 do STF:",
         [("A", "O ISS incide sobre toda locação de coisas materiais móveis."),
          ("B", "É inconstitucional a incidência do Imposto sobre Serviços de Qualquer Natureza - ISS sobre operações de locação de bens móveis."),
          ("C", "O tributo devido é o IPI com alíquota reduzida de 1%."),
          ("D", "Incide apenas se o valor locatício for pago em parcelas mensais.")],
         "B", "Súmula Vinculante 31 do STF: 'É inconstitucional a incidência do Imposto sobre Serviços de Qualquer Natureza - ISS sobre operações de locação de bens móveis.'", "Súmula Vinculante nº 31 do STF."),

        ("Denúncia Espontânea - Art. 138 do CTN e Multas", "Médio",
         "Contribuinte que deixou de recolher tributo estadual compareceu à repartição fazendária antes de qualquer procedimento fiscal ou notificação, confessou a infração e recolheu integralmente o tributo com juros de mora. Quanto à multa moratória e punitiva:",
         [("A", "As multas permanecem devidas integralmente em qualquer hipótese."),
          ("B", "A responsabilidade por infrações é excluída pela denúncia espontânea acompanhada do pagamento do tributo devido e dos juros de mora, afastando-se a exigência de multa (punitiva e moratória)."),
          ("C", "A denúncia espontânea extingue os juros, mas dobra o valor da multa."),
          ("D", "A denúncia só aproveita se o contribuinte prestar fiança bancária.")],
         "B", "Art. 138 do CTN e jurisprudência do STJ (Súmula 360 e REsp 1.149.022): A denúncia espontânea exclui a responsabilidade pelo pagamento de multas fiscais (moratórias e punitivas).", "CTN, art. 138; Súmula 360 do STJ."),

        ("Garantia do Juízo na Execução Fiscal - Seguro Garantia", "Fácil",
         "Empresa executada pela Fazenda Pública pretende embargar a execução fiscal sem comprometer o fluxo de caixa com penhora de dinheiro. Segundo a Lei nº 6.830/1980 e o CPC:",
         [("A", "Apenas dinheiro depositado em conta judicial é aceito para garantir o juízo."),
          ("B", "O seguro-garantia judicial e a fiança bancária produzem os mesmos efeitos do dinheiro para fins de garantia do juízo da execução fiscal e oposição de embargos."),
          ("C", "O oferecimento de seguro-garantia implica confissão irretratável da dívida."),
          ("D", "A garantia do juízo foi abolida pela nova Lei de Falências.")],
         "B", "Art. 9º, II, da Lei nº 6.830/1980 e Art. 835, § 2º, do CPC: O seguro-garantia judicial e a fiança bancária são admitidos expressamente para garantir a execução fiscal com os mesmos efeitos do dinheiro.", "Lei nº 6.830/1980, art. 9º, II; CPC, art. 835, § 2º."),

        ("Imposto de Renda - Conceito de Renda e Acréscimo Patrimonial", "Médio",
         "Trabalhadora recebeu indenização por danos materiais em decorrência de acidente de trânsito estritamente para reparação de seu veículo danificado. A Receita Federal pretende cobrar Imposto de Renda sobre a quantia. A exigência:",
         [("A", "É válida, pois qualquer entrada de recursos em conta bancária constitui renda tributável."),
          ("B", "É indevida, pois as verbas de natureza estritamente indenizatória não configuram acréscimo patrimonial, prestando-se apenas a recompor o patrimônio lesado (ausência de fato gerador do IR)."),
          ("C", "Incide com retenção na fonte na alíquota mínima de 7,5%."),
          ("D", "Submete-se ao ganho de capital sob alíquota progressiva.")],
         "B", "Art. 43 do CTN e Súmulas do STJ (como Súmula 498): O imposto sobre a renda tem como fato gerador a aquisição da disponibilidade econômica ou jurídica de renda (produto do capital ou do trabalho) ou de proventos de qualquer natureza (acréscimo patrimonial). As indenizações de dano material não representam acréscimo patrimonial.", "CTN, art. 43, I e II; Súmula 498 do STJ.")
    ]

    for i, item in enumerate(trib_extra):
        questions.append(make_q(f"q-trib-{i+21:03d}", "tributario", item[0], item[1], item[2], item[3], item[4], item[5], item[6]))

    return questions

if __name__ == '__main__':
    qs = get_expanded_questions()
    print("Expansion base generated count:", len(qs))
