# -*- coding: utf-8 -*-
import json

def get_part2_questions():
    questions = []

    # ---------------------------------------------------------
    # 5. DIREITO AMBIENTAL
    # ---------------------------------------------------------
    amb_specs = [
        ("Princípio da Precaução vs Prevenção", "Médio",
         "Indústria pretende instalar atividade produtiva que utiliza novos nanomateriais químicos sobre os quais não há certeza científica absoluta a respeito de potenciais danos irreversíveis aos lençóis freáticos. O órgão ambiental indeferiu a licença com base no princípio da:",
         [("A", "Prevenção, cabível quando há perigo certo e mensurável cientificamente."),
          ("B", "Precaução, segundo o qual a ausência de certeza científica absoluta não deve servir de pretexto para postergar medidas eficazes para evitar a degradação ambiental irreversível."),
          ("C", "Proibição de retrocesso social restrita a direitos dos trabalhadores."),
          ("D", "Autonomia privada da indústria poluidora.")],
         "B",
         "O Princípio da Precaução (Princípio 15 da Declaração do Rio/92) impõe que a incerteza científica sobre os riscos e impactos de determinada atividade impõe a atuação preventiva em favor do meio ambiente (in dubio pro natura).",
         "Declaração do Rio sobre Meio Ambiente e Desenvolvimento (1992), Princípio 15; CF/88, art. 225."),

        ("Responsabilidade Civil Ambiental - Risco Integral", "Médio",
         "Rompimento de barragem de rejeitos de mineração de grande porte devastou rios e povoados ribeirinhos. A mineradora alegou fortuito externo decorrente de chuvas torrenciais acima da média para se eximir da reparação. Conforme o STJ:",
         [("A", "O fortuito externo e a força maior elidem a responsabilidade civil do poluidor."),
          ("B", "A responsabilidade civil ambiental é objetiva e informada pela teoria do risco integral, sendo inadmissíveis excludentes como fortuito, força maior ou fato de terceiro."),
          ("C", "A responsabilidade é subjetiva com presunção simples de culpa."),
          ("D", "A indenização é limitada ao valor das apólices de seguro contratadas.")],
         "B",
         "O STJ consolidou em recurso repetitivo (Tema 707 e Súmula 652) que a responsabilidade civil por dano ambiental é objetiva, orientada pela teoria do risco integral, não admitindo a incidência de excludentes de culpabilidade ou nexo causal (como caso fortuito, força maior ou fato de terceiro).",
         "STJ, Tema 707 (REsp 1.374.284/MG) e Súmula 652; Lei nº 6.938/1981, art. 14, § 1º."),

        ("Obrigação Propter Rem e Súmula 623 do STJ", "Fácil",
         "Bernardo comprou fazenda em que o antigo proprietário havia desmatado ilegalmente a Área de Preservação Permanente (APP) ao longo de um córrego. Bernardo alega que não desmatou e não tem obrigação de recuperar. Segundo a Súmula 623 do STJ:",
         [("A", "Bernardo não responde pela recomposição, que é dívida pessoal intransmissível do causador do dano."),
          ("B", "As obrigações ambientais possuem natureza propter rem, sendo admissível cobrá-las do proprietário ou possuidor atual e/ou dos anteriores, à escolha do credor."),
          ("C", "A obrigação só recai sobre Bernardo se houver condenação criminal prévia do vendedor."),
          ("D", "O Estado é o único obrigado a reflorestar propriedades privadas adquiridas por terceiros de boa-fé.")],
         "B",
         "Súmula 623 do STJ: 'As obrigações ambientais possuem natureza propter rem, sendo admissível cobrá-las do proprietário ou possuidor atual e/ou dos anteriores, à escolha do credor.'",
         "Súmula 623 do STJ; Lei nº 12.651/2012, art. 2º, § 2º."),

        ("Imprescritibilidade da Reparação do Dano Ambiental", "Médio",
         "Empresa química poluiu o solo de terreno industrial na década de 1990. Trinta anos depois, o Ministério Público ajuizou Ação Civil Pública pleiteando a recuperação da área contaminada. A empresa alegou prescrição. O STF pacificou que:",
         [("A", "A pretensão de reparação civil do dano ambiental prescreve em 5 anos pelo Decreto 20.910/32."),
          ("B", "É imprescritível a pretensão de reparação civil de dano ambiental, dada a indisponibilidade e a relevância do direito fundamental ao meio ambiente ecologicamente equilibrado."),
          ("C", "Prescreve em 10 anos pela regra geral do Código Civil."),
          ("D", "Aplica-se a prescrição trienal dos atos ilícitos extracontratuais.")],
         "B",
         "STF, RE 654.833 (Tema 999 de Repercussão Geral): 'É imprescritível a pretensão de reparação civil do dano ambiental.'",
         "STF Tema 999 (RE 654.833); CF/88, art. 225."),

        ("Licenciamento Ambiental - Licença Prévia, Instalação e Operação", "Fácil",
         "Empreendimento portuário obteve Licença Prévia (LP) e de imediato iniciou as obras de construção dos cais e a operação de atracação de navios de carga. A conduta do porto é:",
         [("A", "Plenamente regular, pois a Licença Prévia autoriza todas as fases da obra."),
          ("B", "Ilegal, pois a Licença Prévia apenas aprova a viabilidade locacional e concepção do projeto, dependendo o início das obras da Licença de Instalação (LI) e o funcionamento da Licença de Operação (LO)."),
          ("C", "Regular se a empresa depositar caução ambiental em juízo."),
          ("D", "Válida em virtude do princípio do silêncio administrativo positivo.")],
         "B",
         "Resolução CONAMA nº 237/1997 e Lei Complementar 140/2011: O licenciamento ambiental trifásico compreende: 1) Licença Prévia (LP) na fase preliminar; 2) Licença de Instalação (LI) para construir o empreendimento; 3) Licença de Operação (LO) para iniciar a atividade.",
         "Resolução CONAMA nº 237/1997, art. 8º; Lei Complementar nº 140/2011."),

        ("Unidades de Conservação - Proteção Integral vs Uso Sustentável", "Médio",
         "O Poder Público pretende criar Unidade de Conservação cujo objetivo precípuo é a preservação da natureza, sendo admitido apenas o uso indireto dos seus recursos naturais, como pesquisa científica e ecoturismo. A categoria adequada é:",
         [("A", "Área de Proteção Ambiental (APA)."),
          ("B", "Parque Nacional, enquadrado como Unidade de Proteção Integral na Lei nº 9.985/2000 (SNUC)."),
          ("C", "Reserva Extrativista (RESEX)."),
          ("D", "Floresta Nacional de uso madeireiro.")],
         "B",
         "Art. 8º e Art. 11 da Lei nº 9.985/2000 (SNUC): O grupo das Unidades de Proteção Integral (Estação Ecológica, Reserva Biológica, Parque Nacional, Monumento Natural e Refúgio de Vida Silvestre) tem como objetivo básico preservar a natureza, sendo admitido apenas o uso indireto dos recursos.",
         "Lei nº 9.985/2000, arts. 8º e 11."),

        ("Crimes Ambientais - Responsabilidade da Pessoa Jurídica", "Fácil",
         "Sociedade empresária do ramo de curtume despejou intencionalmente efluentes de cromo no rio municipal. O Ministério Público ofereceu denúncia criminal exclusivamente contra a pessoa jurídica. O STJ e o STF entendem que:",
         [("A", "A denúncia é inepta, exigindo-se obrigatoriamente a dupla imputação concomitante da pessoa física e da pessoa jurídica."),
          ("B", "É admissível a responsabilização penal da pessoa jurídica por crimes ambientais independentemente da imputação simultânea ou condenação da pessoa física que agiu em seu nome."),
          ("C", "Pessoas jurídicas no Brasil são penalmente irresponsáveis em qualquer hipótese."),
          ("D", "Apenas entes públicos podem figurar no polo passivo da persecução penal ambiental.")],
         "B",
         "Superada a teoria da dupla imputação, o STF (RE 548.181) e o STJ (Tema Repetitivo 799) pacificaram que a pessoa jurídica pode ser processada e condenada criminalmente por crime ambiental mesmo que a pessoa física não tenha sido denunciada.",
         "CF/88, art. 225, § 3º; Lei nº 9.605/1998, art. 3º; STF RE 548.181; STJ Tema 799."),

        ("Reserva Legal - Código Florestal", "Médio",
         "Imóvel rural localizado em área de floresta no bioma da Amazônia Legal possui área total de 1.000 hectares. A porcentagem mínima que o proprietário deve manter a título de Reserva Legal com cobertura de vegetação nativa é:",
         [("A", "20% da área do imóvel."),
          ("B", "80% da área total do imóvel."),
          ("C", "35% caso haja plantio de soja."),
          ("D", "50% em qualquer bioma do território nacional.")],
         "B",
         "Art. 12, I, 'a', da Lei nº 12.651/2012 (Código Florestal): Todo imóvel rural deve manter área com cobertura de vegetação nativa, a título de Reserva Legal, no percentual de 80% no imóvel situado em área de florestas na Amazônia Legal.",
         "Lei nº 12.651/2012, art. 12, I, 'a'."),

        ("Estudo Prévio de Impacto Ambiental (EIA/RIMA)", "Fácil",
         "Governador autorizou a construção de usina nuclear dispensando a realização de EIA/RIMA por considerá-lo ato discricionário do Executivo. A dispensa é:",
         [("A", "Válida se houver aprovação pelo Secretário de Fazenda."),
          ("B", "Inconstitucional, pois a exigência de Estudo Prévio de Impacto Ambiental para instalação de obra ou atividade potencialmente causadora de significativa degradação ambiental é obrigatória e vinculada."),
          ("C", "Legítima caso a usina gere empregos diretos para mais de 500 operários."),
          ("D", "Admissível se for substituída por termo de compromisso verbal.")],
         "B",
         "Art. 225, § 1º, IV, da CF/88: Incumbe ao Poder Público exigir, na forma da lei, para instalação de obra ou atividade potencialmente causadora de significativa degradação do meio ambiente, estudo prévio de impacto ambiental, a que se dará publicidade.",
         "CF/88, art. 225, § 1º, IV."),

        ("Poder de Polícia Ambiental - Infração e Multa", "Médio",
         "Fiscais do IBAMA lavraram auto de infração aplicando multa a proprietário que destruiu 10 hectares de mata atlântica nativa. A multa administrativa ambiental:",
         [("A", "Depende de prévia condenação criminal transitada em julgado pelo juízo federal."),
          ("B", "Pode ser aplicada diretamente pelo órgão ambiental no exercício legítimo do poder de polícia sancionatório, assegurada a ampla defesa em processo administrativo."),
          ("C", "Subordina-se à concordância prévia do sindicato patronal rural."),
          ("D", "É inexigível caso a vegetação seja reflorestada com árvores frutíferas em 5 dias.")],
         "B",
         "Lei nº 9.605/1998, art. 70 e art. 72: As infrações administrativas ambientais são apuradas em processo administrativo próprio, com aplicação de penalidades como advertência, multa simples e embargo pelo órgão de fiscalização no uso de seu poder de polícia.",
         "Lei nº 9.605/1998, arts. 70 a 72; Decreto nº 6.514/2008.")
    ]

    for i, item in enumerate(amb_specs):
        questions.append({
            "id": f"q-amb-{i+1:03d}",
            "disciplineId": "ambiental",
            "subject": item[0],
            "difficulty": item[1],
            "statement": item[2],
            "options": [{"id": o[0], "text": o[1]} for o in item[3]],
            "correctOptionId": item[4],
            "explanation": item[5],
            "legalFoundation": item[6],
            "examReference": "Simulado Preparatório OAB · Direito Ambiental"
        })

    # ---------------------------------------------------------
    # 6. DIREITOS HUMANOS
    # ---------------------------------------------------------
    dh_specs = [
        ("Pacto de São José da Costa Rica - Prisão Civil do Depositário", "Fácil",
         "Juiz cível determinou a prisão civil por 60 dias de cidadão qualificado como depositário judicial infiel com base no texto originário do art. 5º, LXVII, da CF/88. Conforme a Súmula Vinculante 25 do STF:",
         [("A", "A prisão é plenamente válida para depositários judiciais ou convencionais."),
          ("B", "É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito."),
          ("C", "A prisão é permitida apenas se o valor do bem depositado exceder 50 salários mínimos."),
          ("D", "Cabe habeas corpus originário apenas perante a Corte Interamericana de Direitos Humanos.")],
         "B",
         "Súmula Vinculante 25 do STF: 'É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.' O STF conferiu status supralegal ao Pacto de São José da Costa Rica (CADH, Art. 7º, 7), paralisando a eficácia da norma autorizadora infraconstitucional.",
         "Súmula Vinculante nº 25 do STF; CADH (Pacto de São José), art. 7º, 7."),

        ("Controle de Convencionalidade e Status Supralegal", "Médio",
         "Tratado internacional sobre direitos humanos foi ratificado pelo Brasil pelo rito ordinário de aprovação (maioria simples em turno único), sem o quórum qualificado das emendas constitucionais. O STF assentou que tal tratado possui:",
         [("A", "Hierarquia idêntica à de lei ordinária infraconstitucional."),
          ("B", "Status supralegal, situando-se abaixo da Constituição, mas acima de toda a legislação ordinária interna (efeito paralisante de leis contrárias)."),
          ("C", "Eficácia meramente programática sem aplicabilidade judicial."),
          ("D", "Validade nula por não ter atingido o quórum de três quintos.")],
         "B",
         "STF, RE 466.343/SP: Os tratados e convenções internacionais sobre direitos humanos incorporados sem o procedimento do art. 5º, § 3º, da CF possuem hierarquia supralegal, exercendo efeito paralisante sobre a produção normativa doméstica com eles incompatível.",
         "CF/88, art. 5º, § 2º e § 3º; STF RE 466.343/SP."),

        ("Tratados Equivalentes a Emendas Constitucionais", "Fácil",
         "Para que um tratado internacional sobre direitos humanos seja incorporado ao ordenamento jurídico brasileiro com equivalência de Emenda Constitucional, a Constituição Federal exige aprovação:",
         [("A", "Pelo Congresso Nacional em sessão unicameral por maioria absoluta."),
          ("B", "Em cada Casa do Congresso Nacional, em dois turnos, por três quintos dos votos dos respectivos membros."),
          ("C", "Pelo plenário do Supremo Tribunal Federal em votação unânime."),
          ("D", "Por referendo popular convocado pelo Presidente da República.")],
         "B",
         "Art. 5º, § 3º, da CF/88: Os tratados e convenções internacionais sobre direitos humanos que forem aprovados, em cada Casa do Congresso Nacional, em dois turnos, por três quintos dos votos dos respectivos membros, serão equivalentes às emendas constitucionais.",
         "CF/88, art. 5º, § 3º."),

        ("Corte Interamericana de Direitos Humanos - Legitimidade de Acesso", "Médio",
         "Vítima de tortura cometida por agentes estatais pretende peticionar diretamente à Corte Interamericana de Direitos Humanos em San José da Costa Rica para processar o Estado brasileiro. Segundo o sistema da CADH:",
         [("A", "A vítima pessoa natural pode ajuizar ação diretamente perante a Corte Interamericana sem intermediários."),
          ("B", "Somente os Estados Partes e a Comissão Interamericana de Direitos Humanos têm legitimidade para submeter um caso à decisão da Corte Interamericana."),
          ("C", "Apenas o Procurador-Geral da República tem legitimidade perante a Corte IDH."),
          ("D", "A denúncia perante a Corte prescinde do esgotamento prévio dos recursos internos.")],
         "B",
         "Art. 61, 1, da Convenção Americana sobre Direitos Humanos (Pacto de São José da Costa Rica): Somente os Estados Partes e a Comissão têm direito de submeter um caso à decisão da Corte. Os indivíduos devem peticionar primeiramente à Comissão Interamericana (art. 44).",
         "Convenção Americana sobre Direitos Humanos, art. 61, 1 e art. 44."),

        ("Incidente de Deslocamento de Competência (IDC)", "Difícil",
         "Em município do interior, defensores de direitos humanos foram vítimas de execuções sumárias por milicianos. Diante de grave violação a direitos humanos e inércia das autoridades locais, a medida cabível para federalizar o caso é:",
         [("A", "Ação Popular distribuída originariamente perante a Justiça Militar."),
          ("B", "Incidente de Deslocamento de Competência (IDC) suscitado exclusivamente pelo Procurador-Geral da República perante o Superior Tribunal de Justiça."),
          ("C", "Intervenção federal direta decretada de ofício pelo Presidente da República."),
          ("D", "Conflito de atribuições suscitado pelo Delegado da Polícia Federal ao STF.")],
         "B",
         "Art. 109, § 5º, da CF/88: Nas hipóteses de grave violação de direitos humanos, o Procurador-Geral da República, com a finalidade de assegurar o cumprimento de obrigações decorrentes de tratados internacionais de direitos humanos dos quais o Brasil seja parte, poderá suscitar, perante o Superior Tribunal de Justiça, em qualquer fase do inquérito ou da instrução, incidente de deslocamento de competência para a Justiça Federal.",
         "CF/88, art. 109, § 5º.")
    ]

    for i, item in enumerate(dh_specs):
        questions.append({
            "id": f"q-dh-{i+1:03d}",
            "disciplineId": "direitos-humanos",
            "subject": item[0],
            "difficulty": item[1],
            "statement": item[2],
            "options": [{"id": o[0], "text": o[1]} for o in item[3]],
            "correctOptionId": item[4],
            "explanation": item[5],
            "legalFoundation": item[6],
            "examReference": "Simulado Preparatório OAB · Direitos Humanos"
        })

    # ---------------------------------------------------------
    # 7. DIREITO INTERNACIONAL
    # ---------------------------------------------------------
    inter_specs = [
        ("Nacionalidade Originária - Jus Soli e Exceções", "Fácil",
         "Filho de casal de diplomatas italianos a serviço oficial do Governo da Itália nasceu em território brasileiro no Hospital de Brasília. Quanto à sua nacionalidade brasileira:",
         [("A", "É brasileiro nato pelo critério puro do jus soli territorial."),
          ("B", "Não é brasileiro nato, pois a Constituição excepciona os nascidos no Brasil de pais estrangeiros desde que qualquer um deles esteja a serviço de seu país."),
          ("C", "É brasileiro naturalizado de pleno direito aos 18 anos."),
          ("D", "Pode optar pela nacionalidade brasileira com dispensa de residência.")],
         "B",
         "Art. 12, I, 'a', da CF/88: São brasileiros natos os nascidos na República Federativa do Brasil, ainda que de pais estrangeiros, desde que estes não estejam a serviço de seu país. Como os pais estavam a serviço da Itália, a criança não adquire a nacionalidade originária brasileira.",
         "CF/88, art. 12, I, 'a'."),

        ("Extradição de Brasileiro Nato vs Naturalizado", "Médio",
         "Cidadão estrangeiro naturalizou-se brasileiro em 2021. Em 2023, o seu país de origem requereu sua extradição por crime de homicídio qualificado cometido em 2018 (anterior à naturalização). A extradição é:",
         [("A", "Impossível, pois nenhum cidadão brasileiro pode ser extraditado em qualquer hipótese."),
          ("B", "Cabível, pois a Constituição autoriza a extradição de brasileiro naturalizado em caso de crime comum praticado antes da naturalização, ou de comprovado envolvimento em tráfico de entorpecentes a qualquer tempo."),
          ("C", "Depende de autorização expressa do Conselho da República."),
          ("D", "Admissível apenas mediante comutação da pena para trabalhos forçados.")],
         "B",
         "Art. 5º, LI, da CF/88: Nenhum brasileiro será extraditado, salvo o naturalizado, em caso de crime comum, praticado antes da naturalização, ou de comprovado envolvimento em tráfico ilícito de entorpecentes e drogas afins, na forma da lei.",
         "CF/88, art. 5º, LI."),

        ("Homologação de Sentença Estrangeira - Competência do STJ", "Fácil",
         "Sentença de divórcio consensual não puro contendo partilha de bens foi proferida por tribunal francês. Para que surta efeitos jurídicos plenos no Brasil em relação aos imóveis, a homologação compete ao:",
         [("A", "Supremo Tribunal Federal."),
          ("B", "Superior Tribunal de Justiça (STJ)."),
          ("C", "Ministério das Relações Exteriores."),
          ("D", "Juiz de Paz do domicílio dos nubentes.")],
         "B",
         "Art. 105, I, 'i', da CF/88 (após a EC 45/2004) e Arts. 960 a 965 do CPC: Compete ao Superior Tribunal de Justiça processar e julgar, originariamente, a homologação de sentenças estrangeiras e a concessão de exequatur às cartas rogatórias.",
         "CF/88, art. 105, I, 'i'; CPC, art. 960."),

        ("LINDB - Lei Aplicável às Obrigações Contratuais", "Médio",
         "Empresa brasileira celebrou contrato de compra e venda de equipamentos industriais com empresa argentina, tendo o contrato sido inteiramente redigido e assinado em Buenos Aires. O Art. 9º da LINDB prevê que:",
         [("A", "Para qualificar e reger as obrigações, aplicar-se-á a lei do país em que se constituírem (lex loci celebrationis)."),
          ("B", "Aplica-se sempre e com exclusividade a legislação brasileira por ser foro de consumidor."),
          ("C", "O contrato subordina-se à lei da moeda eleita para o pagamento."),
          ("D", "A avença rege-se pela lei do domicílio do juiz da causa.")],
         "A",
         "Art. 9º, caput, da Lei de Introdução às Normas do Direito Brasileiro (LINDB - Dec-Lei 4.657/1942): Para qualificar e reger as obrigações, aplicar-se-á a lei do país em que se constituírem.",
         "LINDB, art. 9º, caput."),

        ("Asilo Político vs Refúgio", "Médio",
         "Cidadão estrangeiro fugiu de seu país natal por fundado temor de perseguição em razão de raça, religião e grupo social, ingressando em fronteira brasileira. Para formalizar sua permanência perante o CONARE, deve requerer:",
         [("A", "Asilo diplomático a bordo de navio de guerra."),
          ("B", "Reconhecimento da condição de refugiado, conforme a Convenção de Genebra de 1951 e a Lei Federal nº 9.474/1997."),
          ("C", "Deportação voluntária com visto de trânsito internacional."),
          ("D", "Nacionalidade por jus soli derivado.")],
         "B",
         "Lei nº 9.474/1997, art. 1º: É reconhecido como refugiado todo indivíduo que, devido a fundados temores de perseguição por motivos de raça, religião, nacionalidade, grupo social ou opiniões políticas encontre-se fora de seu país de nacionalidade e não possa ou não queira acolher-se à proteção de tal país.",
         "Lei nº 9.474/1997, art. 1º, I.")
    ]

    for i, item in enumerate(inter_specs):
        questions.append({
            "id": f"q-inter-{i+1:03d}",
            "disciplineId": "internacional",
            "subject": item[0],
            "difficulty": item[1],
            "statement": item[2],
            "options": [{"id": o[0], "text": o[1]} for o in item[3]],
            "correctOptionId": item[4],
            "explanation": item[5],
            "legalFoundation": item[6],
            "examReference": "Simulado Preparatório OAB · Direito Internacional"
        })

    # ---------------------------------------------------------
    # 8. ECA (CRIANÇA E ADOLESCENTE)
    # ---------------------------------------------------------
    eca_specs = [
        ("Ato Infracional - Diferença de Tratamento Criança vs Adolescente", "Fácil",
         "Matheus, de 11 anos de idade, e Leonardo, de 16 anos, praticaram juntos conduta análoga ao crime de furto qualificado. De acordo com o ECA, as medidas aplicáveis a cada um são:",
         [("A", "Medidas socioeducativas de internação para ambos em estabelecimento prisional."),
          ("B", "A Matheus (criança) aplicam-se exclusivamente medidas de proteção; a Leonardo (adolescente) podem ser aplicadas medidas socioeducativas."),
          ("C", "Ambos respondem criminalmente pelo Código Penal perante a Vara Criminal ordinária."),
          ("D", "Matheus deve ser posto em semiliberdade e Leonardo absolvido por menoridade.")],
         "B",
         "Art. 105 do ECA: Ao ato infracional praticado por criança (menor de 12 anos incompletos) corresponderão apenas as medidas de proteção do art. 101. As medidas socioeducativas (art. 112) são reservadas aos adolescentes (entre 12 e 18 anos).",
         "Lei nº 8.069/1990 (ECA), art. 2º, art. 101 e art. 105."),

        ("Medida Socioeducativa de Internação - Hipóteses Taxativas", "Médio",
         "Adolescente de 15 anos sem qualquer antecedente infracional cometeu ato infracional análogo ao crime de receptação simples (sem violência ou grave ameaça). O juiz aplicou medida de internação. A decisão é:",
         [("A", "Válida, pois o juiz tem discricionariedade absoluta na escolha da medida socioeducativa."),
          ("B", "Ilegal, pois a internação só cabe em hipóteses taxativas (ato com violência ou grave ameaça à pessoa, reiteração em outras infrações graves ou descumprimento reiterado e injustificável de medida anterior)."),
          ("C", "Legítima caso a família do adolescente seja de baixa renda."),
          ("D", "Admissível para fins estritamente pedagógicos e de ressocialização rápida.")],
         "B",
         "Art. 122 do ECA e Súmula 498 do STJ: A internação é medida extrema sujeita aos princípios da brevidade e excepcionalidade, admitida apenas no rol taxativo do art. 122 do ECA, não cabendo por receptação sem violência e sem reiteração.",
         "Lei nº 8.069/1990, art. 122, I a III; Súmula 498 do STJ."),

        ("Adoção - Requisitos de Idade e Irrevogabilidade", "Fácil",
         "Carlos, com 24 anos de idade, pretende adotar seu sobrinho Lucas, de 10 anos. Sobre os requisitos etários da adoção no Estatuto da Criança e do Adolescente:",
         [("A", "Carlos não pode adotar, pois a adoção exige idade mínima de 30 anos e casamento prévio."),
          ("B", "A adoção é possível, pois o adotante deve ser maior de 18 anos e ser pelo menos 16 anos mais velho que o adotando."),
          ("C", "A adoção exige diferença de idade mínima de 25 anos entre adotante e adotado."),
          ("D", "Carlos pode adotar mediante termo revogável de guarda por 10 anos.")],
         "B",
         "Art. 42, caput e § 3º, do ECA: Podem adotar os maiores de 18 anos, independentemente do estado civil. O adotante há de ser, pelo menos, dezesseis anos mais velho do que o adotando. Ademais, a adoção é irrevogável (art. 39, § 1º).",
         "Lei nº 8.069/1990, art. 42, caput e § 3º."),

        ("Conselho Tutelar - Atribuições e Natureza", "Médio",
         "Conselho Tutelar determinou a aplicação direta de medida socioeducativa de liberdade assistida a adolescente e destituiu judicialmente o poder familiar dos pais. Esses atos do Conselho Tutelar são:",
         [("A", "Plenamente legítimos em virtude do poder judicante conferido ao órgão."),
          ("B", "Ilegais e extrapolam as atribuições do Conselho Tutelar, que é órgão permanente e autônomo, não jurisdicional, cabendo apenas ao Poder Judiciário aplicar medidas socioeducativas e decretar perda de poder familiar."),
          ("C", "Válidos desde que referendados pelo Presidente da Câmara Municipal."),
          ("D", "Válidos apenas se tomados por decisão unânime dos cinco conselheiros.")],
         "B",
         "Art. 131 e Art. 136 do ECA: O Conselho Tutelar é órgão permanente e autônomo, não jurisdicional, encarregado de zelar pelos direitos da criança e do adolescente. Não tem atribuição jurisdicional para aplicar medidas socioeducativas nem destituir poder familiar (reserva de jurisdição).",
         "Lei nº 8.069/1990, arts. 131 e 136."),

        ("Autorização de Viagem Nacional para Menor de 16 Anos", "Fácil",
         "Adolescente de 14 anos pretende viajar desacompanhado de seus pais de São Paulo para Salvador em voo doméstico sem portar qualquer autorização expressa. O embarque:",
         [("A", "É livre a partir dos 12 anos completos."),
          ("B", "Não pode ocorrer, pois nenhuma criança ou adolescente menor de 16 anos pode viajar para fora de sua comarca sem expressa autorização judicial ou autorização dos pais por documento com firma reconhecida."),
          ("C", "Depende de autorização exclusiva da Polícia Federal."),
          ("D", "É autorizado mediante apresentação da carteira de estudante escolar.")],
         "B",
         "Art. 83, caput, do ECA (com redação da Lei nº 13.812/2019): Nenhuma criança ou adolescente menor de 16 (dezesseis) anos poderá viajar para fora da comarca onde reside desacompanhado dos pais ou dos responsáveis sem expressa autorização judicial ou autorização válida dos pais.",
         "Lei nº 8.069/1990, art. 83, caput.")
    ]

    for i, item in enumerate(eca_specs):
        questions.append({
            "id": f"q-eca-{i+1:03d}",
            "disciplineId": "crianca-adolescente",
            "subject": item[0],
            "difficulty": item[1],
            "statement": item[2],
            "options": [{"id": o[0], "text": o[1]} for o in item[3]],
            "correctOptionId": item[4],
            "explanation": item[5],
            "legalFoundation": item[6],
            "examReference": "Simulado Preparatório OAB · ECA"
        })

    print(f"Generated {len(questions)} questions in Part 2.")
    return questions

if __name__ == '__main__':
    qs = get_part2_questions()
    with open('scripts/part2_out.json', 'w', encoding='utf-8') as f:
        json.dump(qs, f, ensure_ascii=False, indent=2)
    print("Part 2 written successfully.")
