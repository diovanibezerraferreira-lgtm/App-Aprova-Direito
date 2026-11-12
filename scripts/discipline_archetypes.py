# -*- coding: utf-8 -*-
"""
Full domain-specific archetypes for all 21 disciplines in OAB and Legal Careers.
Provides rich, realistic case generators with parameterized characters, cities,
numbers, and legal situations.
"""

from scripts.massive_bank_utils import pick_name, pick_city, pick_company

ALL_ARCHETYPES = {}

# 1. ÉTICA PROFISSIONAL
ALL_ARCHETYPES['etica'] = [
    {
        "subject": "Honorários Advocatícios - Cláusula Quota Litis",
        "foundation": "CED, art. 50; Lei 8.906/1994, art. 22",
        "difficulty": "Médio",
        "gen": lambda i: {
            "stmt": f"O advogado {pick_name(i, 'm')} firmou contrato com {pick_name(i+1, 'f')} em {pick_city(i)} fixando honorários no êxito (quota litis) em {45 + (i%5)}% do proveito econômico. Pelo Código de Ética e Disciplina da OAB:",
            "opts": [
                ("A", f"Os honorários quota litis, quando acrescidos dos honorários de sucumbência, não podem ser superiores às vantagens auferidas pelo cliente {pick_name(i+1, 'f')}."),
                ("B", "A cláusula quota litis é nula de pleno direito em demandas cíveis."),
                ("C", "O advogado pode cobrar até 85% do valor da causa sem limites."),
                ("D", "A fixação depende de autorização prévia da diretoria da Subseção da OAB.")
            ],
            "ans": "A",
            "expl": "O Art. 50 do CED estabelece que os honorários quota litis devem ser em pecúnia e, somados aos de sucumbência, não podem superar as vantagens financeiras auferidas pelo constituinte."
        }
    },
    {
        "subject": "Incompatibilidade - Atividade Policial",
        "foundation": "Lei nº 8.906/1994, art. 28, IV",
        "difficulty": "Fácil",
        "gen": lambda i: {
            "stmt": f"{pick_name(i, 'm')}, advogado ativo, foi aprovado em concurso público e tomou posse como policial civil em {pick_city(i)}. Pretende manter escritório para causas cíveis e previdenciárias. A atuação:",
            "opts": [
                ("A", "É proibida, pois os cargos em órgãos policiais geram incompatibilidade total com o exercício da advocacia, mesmo em causa própria e em qualquer ramo."),
                ("B", "É autorizada desde que ele não atue em audiências de custódia criminais."),
                ("C", "É admitida se {pick_name(i, 'm')} renunciar aos honorários sucumbenciais."),
                ("D", "Depende de alvará expedido pela Corregedoria Geral da Polícia Civil.")
            ],
            "ans": "A",
            "expl": "Art. 28, IV, da Lei 8.906/94: A advocacia é incompatível, mesmo em causa própria, com as atividades de ocupantes de cargos ou funções vinculados a órgãos de polícia de qualquer natureza."
        }
    },
    {
        "subject": "Sigilo Profissional e Confidencialidade",
        "foundation": "CED, arts. 35 a 38",
        "difficulty": "Médio",
        "gen": lambda i: {
            "stmt": f"Em reunião reservada, o cliente {pick_name(i, 'm')} confessou ao advogado {pick_name(i+1, 'm')} fato íntimo não relacionado ao processo. Tempos depois, arrolado como testemunha pela parte contrária, {pick_name(i+1, 'm')}:",
            "opts": [
                ("A", "Deve recusar-se a depor como testemunha sobre fatos de que teve conhecimento em razão do exercício profissional, ressalvada justa causa."),
                ("B", "É obrigado a revelar todos os segredos perante o magistrado sob pena de prisão por desacato."),
                ("C", "Só mantém sigilo caso o cliente pague taxa anual de confidencialidade."),
                ("D", "Pode divulgar os fatos em redes sociais se o cliente não pagar os honorários.")
            ],
            "ans": "A",
            "expl": "Art. 7º, XIX, da Lei 8.906/94 e Art. 35 do CED: O advogado tem o dever de recusar-se a depor como testemunha em processo no qual funcionou ou deva funcionar, ou sobre fato a respeito do qual deva guardar sigilo profissional."
        }
    }
]

# 2. DIREITO CONSTITUCIONAL
ALL_ARCHETYPES['constitucional'] = [
    {
        "subject": "Controle Concentrado - Legitimados Especiais",
        "foundation": "CF/88, art. 103; STF ADI 1.157",
        "difficulty": "Médio",
        "gen": lambda i: {
            "stmt": f"A Confederação Nacional do Comércio ajuizou ADI no STF contra lei estadual de {pick_city(i)} que trata de subsídios a cooperativas agrícolas. Conforme a jurisprudência do STF:",
            "opts": [
                ("A", "A confederação sindical é legitimada especial, exigindo a demonstração de pertinência temática direta entre seus objetivos institucionais e a norma questionada."),
                ("B", "As confederações sindicais são legitimadas universais com acesso irrestrito ao STF."),
                ("C", "Apenas partidos políticos com representação no Congresso podem ajuizar ADI."),
                ("D", "A pertinência temática foi abolida pelo Código de Processo Civil de 2015.")
            ],
            "ans": "A",
            "expl": "O STF divide os legitimados do Art. 103 da CF em universais e especiais. As confederações sindicais e entidades de classe de âmbito nacional são legitimados especiais e devem comprovar o liame de pertinência temática."
        }
    },
    {
        "subject": "Direitos Fundamentais - Sigilo de Correspondência e Presídio",
        "foundation": "CF/88, art. 5º, XII; STF HC 70.814",
        "difficulty": "Fácil",
        "gen": lambda i: {
            "stmt": f"A administração do presídio de {pick_city(i)} interceptou correspondência escrita enviada pelo detento {pick_name(i, 'm')} que continha planos detalhados para assassinato de juiz. A interceptação excepcional é:",
            "opts": [
                ("A", "Legítima, pois a garantia da inviolabilidade da correspondência não pode servir de salvaguarda para a prática de crimes dentro do estabelecimento prisional."),
                ("B", "Nula de pleno direito, pois o sigilo de correspondência é direito absoluto impassível de relativização."),
                ("C", "Dependente de autorização unânime de CPI no Senado."),
                ("D", "Considerada crime militar praticado pelo diretor da unidade.")
            ],
            "ans": "A",
            "expl": "O STF firmou que nenhum direito fundamental é absoluto, sendo lícita a interceptação epistolar pela autoridade penitenciária para salvaguarda da segurança pública e da ordem nos estabelecimentos penais."
        }
    }
]

# 3. DIREITO CIVIL
ALL_ARCHETYPES['civil'] = [
    {
        "subject": "Prescrição vs Decadência",
        "foundation": "Código Civil, arts. 189 a 211",
        "difficulty": "Médio",
        "gen": lambda i: {
            "stmt": f"{pick_name(i, 'm')} celebrou contrato verbal de mútuo com {pick_name(i+1, 'm')} no valor de R$ {20000 + i*1000}. O devedor inadimpliu o pagamento na data fixada. O prazo prescricional para cobrança judicial de dívida líquida constante de instrumento ou reparação civil é de:",
            "opts": [
                ("A", "5 anos para dívidas líquidas constantes de instrumento público ou particular, e 3 anos para pretensão de reparação civil extracontratual."),
                ("B", "10 anos em qualquer caso de dívida pecuniária civil."),
                ("C", "1 ano após a notificação extrajudicial do cartório."),
                ("D", "20 anos pelo regime histórico do Código Civil de 1916.")
            ],
            "ans": "A",
            "expl": "Art. 206, § 5º, I do Código Civil fixa a prescrição em 5 anos para a cobrança de dívidas líquidas constantes de instrumento público ou particular, e o § 3º, V fixa em 3 anos a pretensão de reparação civil."
        }
    },
    {
        "subject": "Contratos - Cláusula Resolutiva Expressa",
        "foundation": "Código Civil, art. 474",
        "difficulty": "Fácil",
        "gen": lambda i: {
            "stmt": f"Contrato de locação firmado em {pick_city(i)} previu cláusula resolutiva expressa em caso de atraso superior a 60 dias no pagamento do aluguel. Sobre a resolução do contrato pelo inadimplemento:",
            "opts": [
                ("A", "A cláusula resolutiva expressa opera de pleno direito; a tácita depende de interpelação judicial."),
                ("B", "Mesmo com cláusula expressa, exige-se sempre ação judicial anulatória com audiência de conciliação obrigatória."),
                ("C", "A rescisão só produz efeitos após a morte de uma das partes."),
                ("D", "O locador perde o imóvel em favor do fundo de habitação municipal.")
            ],
            "ans": "A",
            "expl": "Art. 474 do Código Civil: A cláusula resolutiva expressa opera de pleno direito; a tácita depende de interpelação judicial."
        }
    }
]

# 4. PROCESSO CIVIL
ALL_ARCHETYPES['processo-civil'] = [
    {
        "subject": "Tutela Provisória de Urgência - Requisitos",
        "foundation": "CPC, art. 300",
        "difficulty": "Fácil",
        "gen": lambda i: {
            "stmt": f"{pick_name(i, 'f')} ajuizou ação ordinária com pedido de tutela provisória de urgência antecipada para fornecimento de cirurgia cardíaca emergencial. Os requisitos legais cumulativos do Art. 300 do CPC são:",
            "opts": [
                ("A", "Elementos que evidenciem a probabilidade do direito e o perigo de dano ou o risco ao resultado útil do processo."),
                ("B", "Apenas a comprovação de renda inferior a dois salários mínimos."),
                ("C", "Certidão de dívida ativa quitada da ré."),
                ("D", "Depósito de caução em dinheiro no valor total do tratamento.")
            ],
            "ans": "A",
            "expl": "Art. 300 do CPC: A tutela de urgência será concedida quando houver elementos que evidenciem a probabilidade do direito e o perigo de dano ou o risco ao resultado útil do processo."
        }
    },
    {
        "subject": "Agravo de Instrumento - Rol do Art. 1.015 do CPC",
        "foundation": "CPC, art. 1.015; STJ Tema 988",
        "difficulty": "Médio",
        "gen": lambda i: {
            "stmt": f"O juiz da comarca de {pick_city(i)} proferiu decisão interlocutória rejeitando alegação de incompetência absoluta. O advogado pretende interpor Agravo de Instrumento. Conforme a tese da taxatividade mitigada do STJ:",
            "opts": [
                ("A", "O rol do art. 1.015 do CPC é de taxatividade mitigada, admitindo-se agravo de instrumento quando verificada a urgência decorrente da inutilidade do julgamento da questão na apelação."),
                ("B", "O rol do art. 1.015 é absolutamente fechado, sendo incabível agravo fora das hipóteses literais."),
                ("C", "Toda decisão interlocutória deve ser impugnada por mandado de segurança perante o STJ."),
                ("D", "A decisão não pode ser revista em nenhuma oportunidade recursal.")
            ],
            "ans": "A",
            "expl": "STJ Tema Repetitivo 988: O rol do art. 1.015 do CPC é de taxatividade mitigada, admitindo a interposição de agravo de instrumento quando verificada urgência decorrente da inutilidade de julgamento na apelação."
        }
    }
]

# 5. PENAL
ALL_ARCHETYPES['penal'] = [
    {
        "subject": "Legítima Defesa - Requisitos Legais",
        "foundation": "Código Penal, art. 23, II e art. 25",
        "difficulty": "Fácil",
        "gen": lambda i: {
            "stmt": f"{pick_name(i, 'm')}, ao ser violentamente atacado por assaltante armado com faca em {pick_city(i)}, utilizou pedaço de madeira para repelir a agressão desarmando o agressor e cessando o ataque. A conduta de {pick_name(i, 'm')}:",
            "opts": [
                ("A", "Configura legítima defesa real, excludente da ilicitude, por usar moderadamente dos meios necessários para repelir injusta agressão, atual e iminente, a direito seu."),
                ("B", "Constitui crime de lesão corporal com atenuação genérica da pena."),
                ("C", "Caracteriza estado de necessidade de terceiro com dever de indenizar o agressor."),
                ("D", "É fato ilícito punível exclusivamente com pena pecuniária.")
            ],
            "ans": "A",
            "expl": "Art. 25 do Código Penal: Entende-se em legítima defesa quem, usando moderadamente dos meios necessários, repele injusta agressão, atual ou iminente, a direito seu ou de outrem."
        }
    },
    {
        "subject": "Tentativa - Redução da Pena",
        "foundation": "Código Penal, art. 14, II e parágrafo único",
        "difficulty": "Médio",
        "gen": lambda i: {
            "stmt": f"{pick_name(i, 'm')} iniciou a execução de crime de furto qualificado, mas a ação foi interrompida pela chegada inesperada da polícia. Sobre a punição da tentativa no Código Penal:",
            "opts": [
                ("A", "Salvo disposição em contrário, pune-se a tentativa com a pena correspondente ao crime consumado, diminuída de um a dois terços."),
                ("B", "A tentativa de furto é atípica no direito penal brasileiro."),
                ("C", "O crime tentado recebe a mesma pena do consumado sem qualquer redução."),
                ("D", "A pena é reduzida de metade apenas se o réu confessar o fato em juízo.")
            ],
            "ans": "A",
            "expl": "Art. 14, parágrafo único, do CP: Salvo disposição em contrário, pune-se a tentativa com a pena correspondente ao crime consumado, diminuída de um a dois terços."
        }
    }
]

# 6. PROCESSO PENAL
ALL_ARCHETYPES['processo-penal'] = [
    {
        "subject": "Prisão em Flagrante - Audiência de Custódia",
        "foundation": "CPP, art. 310; Resolução CNJ nº 213/2015",
        "difficulty": "Fácil",
        "gen": lambda i: {
            "stmt": f"{pick_name(i, 'm')} foi preso em flagrante delito em {pick_city(i)} por posse irregular de arma de fogo. O prazo legal improrrogável para apresentação do preso em audiência de custódia perante o juiz é de:",
            "opts": [
                ("A", "Até 24 horas após a realização da prisão em flagrante."),
                ("B", "48 horas úteis."),
                ("C", "5 dias prorrogáveis por igual período."),
                ("D", "10 dias contados da remessa do inquérito policial.")
            ],
            "ans": "A",
            "expl": "Art. 310 do CPP e Resolução CNJ nº 213: Após receber o auto de prisão em flagrante, no prazo máximo de até 24 horas após a realização da prisão, o juiz promoverá a audiência de custódia com a presença do acusado e defensor."
        }
    },
    {
        "subject": "Ação Penal Pública Condicionada à Representação",
        "foundation": "CPP, art. 38; Código Penal, art. 103",
        "difficulty": "Médio",
        "gen": lambda i: {
            "stmt": f"A vítima {pick_name(i, 'f')} tomou ciência inequívoca da autoria do crime de ameaça praticado contra si, que depende de representação. O prazo decadencial para oferecer a representação é de:",
            "opts": [
                ("A", "6 meses, a contar do dia em que veio a saber quem é o autor do crime."),
                ("B", "30 dias da ocorrência do fato criminoso."),
                ("C", "1 ano da notificação formal do delegado."),
                ("D", "2 anos pelo prazo prescricional comum das contravenções.")
            ],
            "ans": "A",
            "expl": "Art. 38 do CPP e Art. 103 do CP: O ofendido decairá do direito de queixa ou de representação se não o exercer dentro do prazo de seis meses, contado do dia em que vier a saber quem é o autor do crime."
        }
    }
]

# 7. TRABALHO
ALL_ARCHETYPES['trabalho'] = [
    {
        "subject": "Equiparação Salarial - Requisitos da Reforma Trabalhista",
        "foundation": "CLT, art. 461 (Lei nº 13.467/2017)",
        "difficulty": "Médio",
        "gen": lambda i: {
            "stmt": f"{pick_name(i, 'm')} e {pick_name(i+1, 'm')} trabalham na empresa {pick_company(i)} exercendo idêntica função com igual produtividade e perfeição técnica. A diferença de tempo de serviço no mesmo empregador não pode ser superior a:",
            "opts": [
                ("A", "4 anos no mesmo empregador e a diferença de tempo na função não pode ser superior a 2 anos."),
                ("B", "10 anos em qualquer função corporativa."),
                ("C", "1 ano em toda a carreira profissional."),
                ("D", "5 anos sem intervalo intrajornada.")
            ],
            "ans": "A",
            "expl": "Art. 461, § 1º, da CLT (com redação da Lei 13.467/2017): A equiparação salarial só é devida se a diferença de tempo de serviço para o mesmo empregador não for superior a quatro anos e a diferença de tempo na função não for superior a dois anos."
        }
    },
    {
        "subject": "Estabilidade Provisória da Gestante",
        "foundation": "ADCT, art. 10, II, 'b'; Súmula 244 do TST",
        "difficulty": "Fácil",
        "gen": lambda i: {
            "stmt": f"A empregada {pick_name(i, 'f')} engravidou durante o período de aviso prévio indenizado na empresa {pick_company(i)}. O empregador recusou a estabilidade alegando desconhecimento da gravidez. Conforme a Súmula 244 do TST e a CF:",
            "opts": [
                ("A", "A empregada gestante tem direito à estabilidade provisória desde a confirmação da gravidez até cinco meses após o parto, sendo irrelevante o desconhecimento do estado gravídico pelo empregador."),
                ("B", "A estabilidade só existe se houver comunicação formal por carta registrada durante o contrato ativo."),
                ("C", "A gravidez no aviso prévio perde a estabilidade por renúncia tácita."),
                ("D", "A indenização restringe-se a cestas básicas mensais.")
            ],
            "ans": "A",
            "expl": "Art. 10, II, 'b', do ADCT e Súmula 244, I, do TST: O desconhecimento do estado gravídico pelo empregador não afasta o direito ao pagamento da indenização decorrente da estabilidade."
        }
    }
]

# 8. PROCESSO DO TRABALHO
ALL_ARCHETYPES['processo-trabalho'] = [
    {
        "subject": "Recurso Ordinário Trabalhista - Prazo e Depósito",
        "foundation": "CLT, art. 895, I e art. 899",
        "difficulty": "Fácil",
        "gen": lambda i: {
            "stmt": f"Em reclamação trabalhista ajuizada em {pick_city(i)}, a Vara do Trabalho proferiu sentença condenatória. A empresa pretende interpor Recurso Ordinário. O prazo recursal trabalhista em dias úteis é de:",
            "opts": [
                ("A", "8 dias úteis, exigindo recolhimento de custas processuais e depósito recursal na forma da lei."),
                ("B", "15 dias pelo regime subsidiário do CPC."),
                ("C", "5 dias contados da publicação."),
                ("D", "10 dias para impugnação verbal em cartório.")
            ],
            "ans": "A",
            "expl": "Art. 895, I, da CLT: Cabe recurso ordinário para a instância superior das decisões definitivas das Varas no prazo de 8 (oito) dias. O Art. 775 da CLT fixa a contagem de prazos trabalhistas em dias úteis."
        }
    },
    {
        "subject": "Jus Postulandi na Justiça do Trabalho - Súmula 425 TST",
        "foundation": "CLT, art. 791; Súmula 425 do TST",
        "difficulty": "Médio",
        "gen": lambda i: {
            "stmt": f"Empregado ajuizou pessoalmente ação rescisória perante o Tribunal Regional do Trabalho sem auxílio de advogado invocando o jus postulandi. Conforme a Súmula 425 do TST:",
            "opts": [
                ("A", "O jus postulandi limita-se às Varas do Trabalho e TRTs, não alcançando a ação rescisória, a ação cautelar, o mandado de segurança e os recursos para o TST."),
                ("B", "O jus postulandi é irrestrito para todas as ações e recursos até o STF."),
                ("C", "O jus postulandi foi extinto pela Lei 13.467/2017."),
                ("D", "A representação por advogado é dispensada na ação rescisória.")
            ],
            "ans": "A",
            "expl": "Súmula 425 do TST: O jus postulandi das partes, estabelecido no art. 791 da CLT, limita-se às Varas do Trabalho e aos Tribunais Regionais do Trabalho, não alcançando a ação rescisória, a ação cautelar, o mandado de segurança e os recursos de competência do TST."
        }
    }
]

# 9. ADMINISTRATIVO
ALL_ARCHETYPES['administrativo'] = [
    {
        "subject": "Nova Lei de Licitações - Modalidade Pregão",
        "foundation": "Lei nº 14.133/2021, art. 6º, XLI e art. 29",
        "difficulty": "Fácil",
        "gen": lambda i: {
            "stmt": f"A Prefeitura de {pick_city(i)} pretende adquirir bens comuns de informática e suprimentos rotineiros de escritório. A modalidade de licitação obrigatória para aquisição de bens e serviços comuns na Lei 14.133/2021 é:",
            "opts": [
                ("A", "Pregão, cujo critério de julgamento poderá ser de menor preço ou de maior desconto."),
                ("B", "Concorrência com julgamento por melhor técnica obrigatoriamente."),
                ("C", "Concurso com premiação pecuniária."),
                ("D", "Leilão presencial com lances a viva voz.")
            ],
            "ans": "A",
            "expl": "Art. 29 da Lei nº 14.133/2021: O pregão é a modalidade de licitação obrigatória para aquisição de bens e serviços comuns, cujo critério de julgamento poderá ser o de menor preço ou o de maior desconto."
        }
    },
    {
        "subject": "Desapropriação - Desapropriação Indireta e Prescrição",
        "foundation": "STJ Tema 1019; Decreto-Lei 3.365/1941",
        "difficulty": "Médio",
        "gen": lambda i: {
            "stmt": f"O Estado apossou-se de terreno particular pertencente a {pick_name(i, 'm')} em {pick_city(i)} sem processo judicial prévio de desapropriação e nele construiu rodovia pública. A ação de indenização por desapropriação indireta prescreve em:",
            "opts": [
                ("A", "10 anos, caso o ente público tenha realizado obras ou serviços de utilidade pública no imóvel (prazo da usucapião extraordinária do art. 1.238, parágrafo único do CC)."),
                ("B", "5 anos pelo Decreto 20.910/32 em qualquer circunstância."),
                ("C", "2 anos contados da expedição do alvará de habite-se."),
                ("D", "É absolutamente imprescritível por se tratar de direito de propriedade.")
            ],
            "ans": "A",
            "expl": "STJ Tema Repetitivo 1019: O prazo prescricional aplicável à desapropriação indireta na hipótese em que o Poder Público tenha realizado obras no local é de 10 anos, conforme o art. 1.238, parágrafo único, do Código Civil."
        }
    }
]

# 10. TRIBUTÁRIO
ALL_ARCHETYPES['tributario'] = [
    {
        "subject": "Princípio da Legalidade Tributária e IPTU",
        "foundation": "CTN, art. 97; Súmula 160 do STJ",
        "difficulty": "Médio",
        "gen": lambda i: {
            "stmt": f"Prefeito de {pick_city(i)} editou decreto executivo majorando a planta genérica de valores de IPTU em 45%, percentual muito superior ao índice oficial de inflação acumulada. Conforme a Súmula 160 do STJ:",
            "opts": [
                ("A", "É defeso ao Município atualizar o IPTU, mediante decreto, em percentual superior ao índice oficial de correção monetária, exigindo-se lei em sentido formal."),
                ("B", "O prefeito tem discricionariedade plena para fixar a base de cálculo de impostos municipais por decreto."),
                ("C", "A majoração é válida desde que ratificada pelo Secretário de Finanças."),
                ("D", "O IPTU pode ser aumentado por decreto até o teto de 100%.")
            ],
            "ans": "A",
            "expl": "Súmula 160 do STJ: 'É defeso, ao Município, atualizar o IPTU, mediante decreto, em percentual superior ao índice oficial de correção monetária.' Exige-se lei formal (art. 97, II do CTN)."
        }
    },
    {
        "subject": "Extinção do Crédito - Pagamento Indevido e Repetição",
        "foundation": "CTN, art. 165 e art. 168",
        "difficulty": "Fácil",
        "gen": lambda i: {
            "stmt": f"{pick_name(i, 'm')} recolheu taxa de fiscalização cobrada com duplicidade pelo Estado em {pick_city(i)}. O prazo legal para pleitear a restituição administrativa ou judicial do tributo indevido é de:",
            "opts": [
                ("A", "5 anos contados da data da extinção do crédito tributário (pagamento indevido)."),
                ("B", "2 anos da notificação da fiscalização."),
                ("C", "10 anos pela regra decenal do Código Civil."),
                ("D", "1 ano após o encerramento do ano fiscal.")
            ],
            "ans": "A",
            "expl": "Art. 168, I, do CTN: O direito de pleitear a restituição extingue-se com o decurso do prazo de cinco anos contados da data da extinção do crédito tributário."
        }
    }
]

# 11. EMPRESARIAL
ALL_ARCHETYPES['empresarial'] = [
    {
        "subject": "Sociedade Limitada - Cessão de Quotas",
        "foundation": "Código Civil, art. 1.057",
        "difficulty": "Médio",
        "gen": lambda i: {
            "stmt": f"Na sociedade limitada 'Beta Comércio Ltda.', o contrato social é omisso sobre a cessão de quotas. O sócio {pick_name(i, 'm')} pretende ceder suas quotas a terceiro estranho à sociedade. Conforme o Art. 1.057 do Código Civil:",
            "opts": [
                ("A", "Pode ceder a terceiro se não houver oposição de titulares de mais de um quarto do capital social."),
                ("B", "A cessão a estranhos é proibida de forma absoluta no direito brasileiro."),
                ("C", "Exige-se a concordância unânime de todos os demais sócios sem exceção."),
                ("D", "A cessão é livre sem possibilidade de qualquer oposição dos demais sócios.")
            ],
            "ans": "A",
            "expl": "Art. 1.057 do Código Civil: Na omissão do contrato, o sócio pode ceder sua quota, total ou parcialmente, a quem seja sócio, independentemente de audiência dos outros, ou a estranho, se não houver oposição de titulares de mais de um quarto do capital social."
        }
    },
    {
        "subject": "Títulos de Crédito - Princípio da Cartularidade",
        "foundation": "Código Civil, art. 887",
        "difficulty": "Fácil",
        "gen": lambda i: {
            "stmt": f"O credor {pick_name(i, 'm')} ajuizou ação de execução fundada em nota promissória anexando apenas cópia reprográfica desacompanhada da cártula original. O juiz deve determinar:",
            "opts": [
                ("A", "A juntada do título de crédito original, em decorrência do princípio da cartularidade e da circulabilidade do título por endosso."),
                ("B", "A extinção imediata com prisão civil do devedor."),
                ("C", "O prosseguimento com base na cópia simples autenticada em cartório."),
                ("D", "A conversão compulsória da nota promissória em duplicata de serviços.")
            ],
            "ans": "A",
            "expl": "Pelo princípio da cartularidade e circulabilidade cambiária, a execução de título de crédito exige a exibição do documento original, a fim de evitar a cobrança simultânea pelo portador que recebeu o título por endosso."
        }
    }
]

# 12. AMBIENTAL
ALL_ARCHETYPES['ambiental'] = [
    {
        "subject": "Código Florestal - Reserva Legal e Compensação",
        "foundation": "Lei nº 12.651/2012, art. 66",
        "difficulty": "Médio",
        "gen": lambda i: {
            "stmt": f"Proprietário rural em {pick_city(i)} possui déficit de Reserva Legal em seu imóvel consolidado. Nos termos da Lei 12.651/2012, a regularização pode ser feita mediante:",
            "opts": [
                ("A", "Recomposição da vegetação, regeneração natural ou compensação por servidão ambiental em área equivalente no mesmo bioma."),
                ("B", "Pagamento de multa única com quitação perpétua do passivo."),
                ("C", "Desapropriação automática pelo INCRA para reforma agrária."),
                ("D", "Plantio de cana-de-açúcar na proporção de dez para um.")
            ],
            "ans": "A",
            "expl": "Art. 66 do Código Florestal prevê as modalidades de regularização da Reserva Legal: recompor, permitir a regeneração natural ou compensar com área equivalente em extensão e situada no mesmo bioma."
        }
    }
]

# 13. INTERNACIONAL
ALL_ARCHETYPES['internacional'] = [
    {
        "subject": "Homologação de Sentença Estrangeira - Trânsito em Julgado",
        "foundation": "CPC, art. 963, III; Regimento Interno do STJ",
        "difficulty": "Médio",
        "gen": lambda i: {
            "stmt": f"Sentença arbitral proferida em Londres condenou empresa de {pick_city(i)}. Para que a decisão seja homologada pelo Superior Tribunal de Justiça (STJ), constitui requisito indispensável:",
            "opts": [
                ("A", "A prova do trânsito em julgado ou da eficácia executiva na jurisdição de origem, além de não ofender a ordem pública brasileira."),
                ("B", "A presença física de todos os árbitros em audiência perante a Corte Especial do STJ."),
                ("C", "A homologação prévia pelo Ministério das Relações Exteriores."),
                ("D", "Que a decisão tenha sido redigida originalmente na língua portuguesa.")
            ],
            "ans": "A",
            "expl": "Art. 963 do CPC estabelece os requisitos para homologação de decisão estrangeira pelo STJ: autoridade competente, citação regular, eficácia na jurisdição de origem (trânsito em julgado) e não ofensa à ordem pública."
        }
    }
]

# 14. DIREITOS HUMANOS
ALL_ARCHETYPES['direitos-humanos'] = [
    {
        "subject": "Pacto de San José - Direito à Vida e Pena de Morte",
        "foundation": "CADH, art. 4º, 2 e 3",
        "difficulty": "Médio",
        "gen": lambda i: {
            "stmt": f"País signatário do Pacto de São José da Costa Rica aboliu a pena de morte em sua legislação interna. Três anos depois, pretende restabelecer a pena capital para crimes de corrupção. De acordo com o Art. 4º, 3 da CADH:",
            "opts": [
                ("A", "Não se pode restabelecer a pena de morte nos Estados que a hajam abolido (princípio da proibição de retrocesso)."),
                ("B", "O restabelecimento é livre mediante decreto do Presidente."),
                ("C", "Permite-se se a decisão for ratificada por plebiscito popular."),
                ("D", "A CADH autoriza a pena capital irrestrita para crimes patrimoniais.")
            ],
            "ans": "A",
            "expl": "Art. 4º, 3, da Convenção Americana sobre Direitos Humanos: Não se pode restabelecer a pena de morte nos Estados que a hajam abolido (consagração expressa da cláusula de não retrocesso em direitos humanos)."
        }
    }
]

# 15. CONSUMIDOR
ALL_ARCHETYPES['consumidor'] = [
    {
        "subject": "Publicidade Abusiva - Proteção da Infância",
        "foundation": "CDC, art. 37, § 2º; STJ Tema 1080",
        "difficulty": "Fácil",
        "gen": lambda i: {
            "stmt": f"Indústria de brinquedos veiculou comercial de televisão infantil incentivando crianças a constrangerem seus pais para comprar produto escolar caro. Essa publicidade é:",
            "opts": [
                ("A", "Abusiva, pois se aproveita da deficiência de julgamento e inexperiência da criança, incitando-a a condutas prejudiciais."),
                ("B", "Lícita, integrando a estratégia de marketing de livre concorrência."),
                ("C", "Enganosa por omissão de juros."),
                ("D", "Permitida se veiculada em horário nobre de novelas.")
            ],
            "ans": "A",
            "expl": "Art. 37, § 2º, do CDC: É abusiva a publicidade que se aproveite da deficiência de julgamento e experiência da criança, desrespeite valores ambientais ou induza o consumidor a se comportar de forma prejudicial ou perigosa."
        }
    }
]

# 16. ECA (CRIANÇA E ADOLESCENTE)
ALL_ARCHETYPES['crianca-adolescente'] = [
    {
        "subject": "Medida Socioeducativa de Semiliberdade",
        "foundation": "ECA, art. 120",
        "difficulty": "Fácil",
        "gen": lambda i: {
            "stmt": f"O juiz da Infância e Juventude aplicou a {pick_name(i, 'm')}, de 16 anos, a medida socioeducativa de semiliberdade. Nos termos do Art. 120 do ECA:",
            "opts": [
                ("A", "O regime de semiliberdade pode ser determinado desde o início ou como transição para o meio aberto, sendo obrigatória a escolarização e a profissionalização."),
                ("B", "A semiliberdade exige isolamento celular por 20 horas diárias."),
                ("C", "A medida só pode ser aplicada a adolescentes maiores de 18 anos."),
                ("D", "O jovem perde o direito a visitas de seus parentes.")
            ],
            "ans": "A",
            "expl": "Art. 120 do ECA: O regime de semiliberdade pode ser determinado desde o início, ou como forma de transição para o meio aberto, possibilitada a realização de atividades externas, sendo obrigatória a escolarização e a profissionalização."
        }
    }
]

# 17. PREVIDENCIÁRIO
ALL_ARCHETYPES['previdenciario'] = [
    {
        "subject": "Aposentadoria Programada - Idade Mínima na EC 103/2019",
        "foundation": "CF/88, art. 201, § 7º; Emenda Constitucional nº 103/2019",
        "difficulty": "Fácil",
        "gen": lambda i: {
            "stmt": f"{pick_name(i, 'f')}, segurada do RGPS filiada após a Reforma da Previdência (EC 103/2019), pretende obter aposentadoria programada. A idade mínima e o tempo de contribuição exigidos para a mulher trabalhadora urbana são de:",
            "opts": [
                ("A", "62 anos de idade e 15 anos de contribuição."),
                ("B", "60 anos de idade e 30 anos de contribuição."),
                ("C", "65 anos de idade e 20 anos de contribuição."),
                ("D", "55 anos de idade sem carência contributiva.")
            ],
            "ans": "A",
            "expl": "Art. 201, § 7º, I, da CF/88 (após a EC 103/2019): É assegurada aposentadoria no regime geral de previdência social aos 65 anos de idade, se homem, e aos 62 anos de idade, se mulher, com tempo de contribuição mínimo de 15 anos para mulheres."
        }
    }
]

# 18. FINANCEIRO
ALL_ARCHETYPES['financeiro'] = [
    {
        "subject": "Princípio da Anualidade Orçamentária",
        "foundation": "Lei nº 4.320/1964, art. 34; CF/88, art. 165, § 5º",
        "difficulty": "Fácil",
        "gen": lambda i: {
            "stmt": f"Em {pick_city(i)}, questionou-se a duração do exercício financeiro governamental para execução da LOA. O Art. 34 da Lei nº 4.320/1964 estabelece que:",
            "opts": [
                ("A", "O exercício financeiro coincidirá com o ano civil (de 1º de janeiro a 31 de dezembro)."),
                ("B", "O exercício financeiro tem duração bienal contada da posse do prefeito."),
                ("C", "O exercício orçamentário encerra-se a cada 6 meses."),
                ("D", "O exercício dura enquanto houver saldo positivo no Tesouro.")
            ],
            "ans": "A",
            "expl": "Art. 34 da Lei nº 4.320/1964: O exercício financeiro coincidirá com o ano civil, vigorando a Lei Orçamentária Anual de 1º de janeiro a 31 de dezembro."
        }
    }
]

# 19. ELEITORAL
ALL_ARCHETYPES['eleitoral'] = [
    {
        "subject": "Perda e Suspensão de Direitos Políticos - Condenação Criminal",
        "foundation": "CF/88, art. 15, III; Súmula 9 do TSE",
        "difficulty": "Fácil",
        "gen": lambda i: {
            "stmt": f"{pick_name(i, 'm')} teve contra si sentença penal condenatória transitada em julgado com pena privativa de liberdade em cumprimento. Sobre seus direitos políticos:",
            "opts": [
                ("A", "Haverá a suspensão dos direitos políticos enquanto durarem os efeitos da condenação transitada em julgado, independentemente da natureza da pena imposta."),
                ("B", "Ocorre a cassação definitiva perpétua de seus direitos eleitorais."),
                ("C", "A suspensão só opera se a condenação for superior a 10 anos."),
                ("D", "Ele mantém a capacidade eleitoral passiva para concorrer a Deputado.")
            ],
            "ans": "A",
            "expl": "Art. 15, III, da CF/88: É vedada a cassação de direitos políticos, cuja perda ou suspensão só se dará nos casos de condenação criminal transitada em julgado, enquanto durarem seus efeitos (autoaplicável e atinge crimes dolosos e culposos)."
        }
    }
]

# 20. FILOSOFIA DO DIREITO
ALL_ARCHETYPES['filosofia'] = [
    {
        "subject": "Hans Kelsen - Validade da Norma e Grundnorm",
        "foundation": "Kelsen, Teoria Pura do Direito (Reine Rechtslehre)",
        "difficulty": "Médio",
        "gen": lambda i: {
            "stmt": f"Ao analisar a estrutura escalonada da ordem jurídica kelseniana (Stufenbau), indaga-se de onde provém a validade da Constituição histórica positiva. Para Hans Kelsen, a validade decorre:",
            "opts": [
                ("A", "Da Norma Fundamental Hipotética pressuposta (Grundnorm), norma pensada que encerra a cadeia de validade do sistema."),
                ("B", "Do poder militar exclusivo do governante de fato."),
                ("C", "Do direito canônico medieval natural."),
                ("D", "Do consenso unânime dos cidadãos em referendo anual.")
            ],
            "ans": "A",
            "expl": "Para Hans Kelsen, a validade de uma norma só pode derivar de outra norma superior, culminando na Norma Fundamental (Grundnorm), que não é uma norma posta pelo legislador, mas pressuposta pela razão epistemológica para fundamentar a validade da Constituição."
        }
    }
]

# 21. LEP (LEI DE EXECUÇÃO PENAL)
ALL_ARCHETYPES['lep'] = [
    {
        "subject": "Saídas Temporárias após a Lei nº 14.843/2024",
        "foundation": "LEP, art. 122, § 2º (com redação da Lei 14.843/2024)",
        "difficulty": "Médio",
        "gen": lambda i: {
            "stmt": f"O apenado {pick_name(i, 'm')} cumpre pena em regime semiaberto em {pick_city(i)} por condenação por crime praticado com violência contra a pessoa. Pretende obter saída temporária para visita à família. Conforme a Lei nº 14.843/2024:",
            "opts": [
                ("A", "Não terá direito à saída temporária, pois a nova lei veda o benefício a apenados que cumprem pena por crime hediondo ou cometido com violência ou grave ameaça contra pessoa."),
                ("B", "Tem direito a 5 saídas de 7 dias a cada ano civil."),
                ("C", "A saída temporária é automática sem necessidade de autorização judicial."),
                ("D", "O benefício foi abolido integralmente para todos os presos no Brasil.")
            ],
            "ans": "A",
            "expl": "A Lei nº 14.843/2024 alterou o Art. 122, § 2º, da LEP, vedando expressamente a concessão de saída temporária aos apenados condenados por crime hediondo ou com violência ou grave ameaça contra a pessoa."
        }
    },
    {
        "subject": "Falta Grave e Interrupção da Progressão - Súmula 534 STJ",
        "foundation": "LEP, art. 50; Súmula 534 do STJ",
        "difficulty": "Médio",
        "gen": lambda i: {
            "stmt": f"O apenado {pick_name(i, 'm')} praticou falta disciplinar de natureza grave dentro do presídio de {pick_city(i)}. Conforme entendimento pacífico do STJ sumulado no enunciado 534:",
            "opts": [
                ("A", "A prática de falta grave interrompe a contagem do prazo para a progressão de regime de cumprimento de pena, o qual se reinicia a partir do cometimento dessa infração."),
                ("B", "A falta grave zera o tempo total de pena cumprida."),
                ("C", "A falta disciplinar não produz nenhum efeito no cálculo de benefícios executórios."),
                ("D", "O apenado é transferido compulsoriamente para pena de prisão perpétua.")
            ],
            "ans": "A",
            "expl": "Súmula 534 do STJ: 'A prática de falta grave interrompe a contagem do prazo para a progressão de regime de cumprimento de pena, o qual se reinicia a partir do cometimento dessa infração.' (Ressalvando que NÃO interrompe o livramento condicional, Súmula 441)."
        }
    }
]

print("All 21 disciplines archetypes successfully loaded.")
