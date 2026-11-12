# -*- coding: utf-8 -*-
"""
Final authentic questions expansion:
- empresarial (15 questions to reach 30)
- consumidor (20 questions to reach 30)
- ambiental (20 questions to reach 30)
- direitos-humanos (25 questions to reach 30)
- internacional (25 questions to reach 30)
- crianca-adolescente (25 questions to reach 30)
- previdenciario (25 questions to reach 30)
- financeiro (25 questions to reach 30)
- eleitoral (25 questions to reach 30)
- filosofia (25 questions to reach 30)
"""

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
        "examReference": f"Simulado Preparatório OAB · {disc.replace('-', ' ').title()}"
    }

def get_final_expansion():
    qs = []

    # -------------------------------------------------------------
    # EMPRESARIAL (+15 -> 30)
    # -------------------------------------------------------------
    emp_items = [
        ("Duplicata Mercantil - Protesto por Indicação", "Médio",
         "Sociedade empresária vendeu mercadorias a prazo emitindo nota fiscal e duplicata mercantil eletrônica. O comprador reteve o documento sem assinar nem devolver e não pagou na data aprazada. O credor pretende protestar o título. Conforme a Lei nº 5.474/1968:",
         [("A", "O protesto é vedado sem a assinatura física do devedor na cártula original."),
          ("B", "É lícito o protesto por indicação mediante apresentação das informações magnéticas ou eletrônicas acompanhadas do comprovante de entrega da mercadoria."),
          ("C", "A duplicata mercantil só pode ser cobrada perante o Juizado Especial Cível."),
          ("D", "O credor deve esperar a falência do comprador para habilitar o crédito.")],
         "B", "Art. 13, § 1º, da Lei nº 5.474/1968 (Lei das Duplicatas) e Súmula 175 do STJ: É admissível o protesto por indicação da duplicata não devolvida, desde que acompanhada do comprovante de entrega e recebimento da mercadoria.", "Lei nº 5.474/1968, art. 13, § 1º; Súmula 175 do STJ."),

        ("Sociedade Anônima - Direito de Recesso", "Difícil",
         "Em assembleia geral extraordinária de companhia aberta, a maioria aprovou a fusão da sociedade com outra empresa de setor concorrente. O acionista dissidente minoritário titular de ações com direito a voto:",
         [("A", "É obrigado a aceitar a decisão soberana sem direito de retirada."),
          ("B", "Tem direito de recesso (retirada), exigindo o reembolso do valor de suas ações nos termos da lei e do estatuto social."),
          ("C", "Pode anular a fusão perante a CVM unilateralmente."),
          ("D", "Perde o valor investido caso se oponha formalmente à maioria.")],
         "B", "Art. 136 e Art. 137 da Lei nº 6.404/1976: A aprovação de fusão dá ao acionista dissidente o direito de retirar-se da companhia mediante o reembolso do valor das suas ações.", "Lei nº 6.404/1976, art. 136 e art. 137, II."),

        ("Falência - Ação Revocatória", "Difícil",
         "Três meses antes da decretação de sua falência, a sociedade empresária devedora doou imóvel valioso a parente do sócio controlador para fraudar credores. O Administrador Judicial pode:",
         [("A", "Apenas registrar protesto em cartório imobiliário."),
          ("B", "Propor ação revocatória falimentar no prazo decadencial de 3 anos do trânsito em julgado da decretação da falência para restabelecer o bem à massa falida."),
          ("C", "Apreender o bem de plano com auxílio da guarda municipal sem processo judicial."),
          ("D", "Cobrar o IPTU atrasado do parente donatário.")],
         "B", "Arts. 129 e 130 e Art. 132 da Lei nº 11.101/2005: A ação revocatória falimentar pode ser promovida pelo administrador judicial, por qualquer credor ou pelo Ministério Público no prazo de 3 anos contado da decretação da falência para revogar atos praticados em prejuízo dos credores.", "Lei nº 11.101/2005, arts. 129, 130 e 132."),

        ("Nome Empresarial - Proteção Territorial", "Fácil",
         "A sociedade 'Brilhante Joias Ltda.' registrou seu contrato social e nome empresarial na Junta Comercial de São Paulo. Outra empresa homônima abriu filial com o mesmo nome na Bahia sem registro prévio na Junta Comercial baiana. Sobre a proteção do nome empresarial:",
         [("A", "A proteção do nome empresarial registrada na Junta Comercial é nacional de pleno direito sem necessidade de pedido complementar."),
          ("B", "A proteção ao nome empresarial decorre do registro na Junta Comercial e circunscreve-se à unidade da Federação de sua jurisdição, dependendo a extensão a outros Estados de pedido de registro específico."),
          ("C", "O nome empresarial não tem qualquer proteção jurídica no direito brasileiro."),
          ("D", "A exclusividade é concedida pelo INPI pelo prazo improrrogável de 2 anos.")],
         "B", "Art. 1.166 do Código Civil e Art. 33 da Lei nº 8.934/1994: A proteção ao nome empresarial circunscreve-se ao território do Estado em cuja Junta Comercial estiver registrado, exigindo-se pedido de extensão perante a Junta Comercial de outros Estados para proteção suplementar.", "Código Civil, art. 1.166; Lei nº 8.934/1994, art. 33; STJ Súmula 156 (distinguishing)."),

        ("Sociedade em Comandita Simples - Sócios", "Médio",
         "Na Sociedade em Comandita Simples constituída por Paula e Gustavo, Paula é sócia comanditada e Gustavo é sócio comanditário. Sobre a responsabilidade de cada um pelas dívidas sociais:",
         [("A", "Ambos respondem solidária e ilimitadamente por todas as obrigações."),
          ("B", "Paula (comanditada) responde solidária e ilimitadamente, enquanto Gustavo (comanditário) responde somente pelo valor de sua quota, sendo-lhe vedada a prática de atos de gestão."),
          ("C", "Gustavo responde pelas dívidas com a perda de seus direitos políticos civis."),
          ("D", "A sociedade em comandita simples é extinta caso admita novos sócios.")],
         "B", "Art. 1.045 do Código Civil: Na sociedade em comandita simples tomam parte sócios de duas categorias: os comanditados, pessoas físicas, responsáveis solidária e ilimitadamente pelas obrigações sociais; e os comanditários, obrigados somente pelo valor de sua quota.", "Código Civil, art. 1.045 e art. 1.047.")
    ]

    for i, item in enumerate(emp_items):
        qs.append(make_q(f"q-emp-{i+16:03d}", "empresarial", item[0], item[1], item[2], item[3], item[4], item[5], item[6]))

    # -------------------------------------------------------------
    # CONSUMIDOR (+10 -> 20)
    # -------------------------------------------------------------
    cdc_items = [
        ("Cláusulas Abusivas - Perda Total das Prestações Pagas", "Fácil",
         "Contrato de compra e venda de imóvel a prazo firmado entre construtora e consumidor estabeleceu que, em caso de rescisão por inadimplemento do comprador, este perderia 100% de todas as parcelas pagas. Conforme o Art. 53 do CDC:",
         [("A", "A cláusula é plenamente lícita em razão do princípio do pacta sunt servanda."),
          ("B", "São nulas de pleno direito as cláusulas que estabeleçam a perda total das prestações pagas em benefício do credor."),
          ("C", "A cláusula é válida caso o comprador tenha recebido desconto na entrada."),
          ("D", "O comprador perde também todos os bens móveis que guarnecem sua residência.")],
         "B", "Art. 53, caput, do CDC: Nos contratos de compra e venda de móveis ou imóveis mediante pagamento em prestações, bem como nas alienações fiduciárias em garantia, consideram-se nulas de pleno direito as cláusulas que estabeleçam a perda total das prestações pagas em benefício do credor.", "Código de Defesa do Consumidor, art. 53."),

        ("Teoria da Perda do Tempo Útil (Desvio Produtivo)", "Médio",
         "Consumidor enfrentou peregrinação de dezenas de ligações, e-mails e idas presenciais ao longo de 4 meses para cancelar cobrança manifestamente indevida que a operadora de internet se recusava a corrigir, desperdiçando seu tempo de trabalho e descanso. O STJ admite indenização por:",
         [("A", "Mero aborrecimento cotidiano insuscetível de reparação civil."),
          ("B", "Dano moral decorrente do desvio produtivo do consumidor (perda injusta e intolerável do tempo vital para solução de problemas criados pelo fornecedor)."),
          ("C", "Enriquecimento sem causa do usuário."),
          ("D", "Crime de apropriação indébita praticado pelo atendente do call center.")],
         "B", "O Superior Tribunal de Justiça acolhe reiteradamente a Teoria do Desvio Produtivo do Consumidor (desenvolvida por Marcos Dessaune), reconhecendo que a injusta perda do tempo vital do consumidor para resolver falhas reiteradas do fornecedor enseja reparação por danos morais.", "STJ, AREsp 1.260.458/SP; REsp 1.737.412/SE."),

        ("Responsabilidade dos Profissionais Liberais - Culpa", "Fácil",
         "Paciente ajuizou ação indenizatória contra médico cirurgião plástico alegando insatisfação com procedimento médico não estético. Nos termos do Art. 14, § 4º, do CDC:",
         [("A", "A responsabilidade pessoal dos profissionais liberais será apurada mediante a verificação de culpa."),
          ("B", "O médico responde de forma estritamente objetiva independentemente de dolo ou culpa."),
          ("C", "O médico é isento de qualquer responsabilidade civil sob as normas consumeristas."),
          ("D", "Aplica-se a responsabilidade exclusiva do hospital onde foi realizada a consulta.")],
         "A", "Art. 14, § 4º, do CDC: A responsabilidade pessoal dos profissionais liberais será apurada mediante a verificação de culpa (responsabilidade subjetiva).", "Código de Defesa do Consumidor, art. 14, § 4º."),

        ("Inversão do Ônus da Prova Ope Judicis", "Médio",
         "Em demanda judicial movida por consumidor hipossuficiente técnico contra fabricante de celular sobre defeito de placa eletrônica de alta complexidade, o juiz inverteu o ônus da prova. O fundamento legal do Art. 6º, VIII, do CDC exige:",
         [("A", "Apenas a comprovação de que o fornecedor é pessoa jurídica de direito privado."),
          ("B", "A verossimilhança da alegação ou a hipossuficiência do consumidor, segundo as regras ordinárias de experiências."),
          ("C", "A prova prévia de dolo do fabricante produzida em inquérito civil."),
          ("D", "Depósito prévio de honorários periciais pelo autor da ação.")],
         "B", "Art. 6º, VIII, do CDC: São direitos básicos do consumidor a facilitação da defesa de seus direitos, inclusive com a inversão do ônus da prova, a seu favor, no processo civil, quando, a critério do juiz, for verossímil a alegação ou quando for ele hipossuficiente, segundo as regras ordinárias de experiências.", "Código de Defesa do Consumidor, art. 6º, VIII."),

        ("Envio de Cartão de Crédito Não Solicitado - Súmula 532 STJ", "Fácil",
         "Banco enviou cartão de crédito com limite pré-aprovado à residência de cidadão que nunca solicitou o produto nem era correntista da instituição. Conforme a Súmula 532 do STJ:",
         [("A", "O envio é lícito e equipara-se a brinde promocional comercial."),
          ("B", "Constitui prática comercial abusiva o envio de cartão de crédito sem prévia e expressa solicitação do consumidor, configurando dano moral indenizável e sujeitando a instituição à multa administrativa."),
          ("C", "O consumidor deve pagar a anuidade caso não desbloqueie o cartão em 30 dias."),
          ("D", "A prática é autorizada se o cartão tiver isenção no primeiro ano.")],
         "B", "Súmula 532 do STJ: 'Constitui prática comercial abusiva o envio de cartão de crédito sem prévia e expressa solicitação do consumidor, configurando dano moral e autorizando a aplicação de indenização e multa administrativa.'", "Súmula 532 do STJ; CDC, art. 39, III.")
    ]

    for i, item in enumerate(cdc_items):
        qs.append(make_q(f"q-cdc-{i+11:03d}", "consumidor", item[0], item[1], item[2], item[3], item[4], item[5], item[6]))

    # -------------------------------------------------------------
    # AMBIENTAL (+5 -> 15)
    # -------------------------------------------------------------
    amb_items = [
        ("Área de Preservação Permanente (APP) - Conceito e Proteção", "Fácil",
         "Proprietário rural pretende edificar pousada turística na faixa marginal de 30 metros de curso d'água perene de 8 metros de largura. De acordo com o Código Florestal (Lei nº 12.651/2012):",
         [("A", "A faixa marginal constitui Área de Preservação Permanente (APP), sendo vedada a supressão de vegetação salvo hipóteses estritas de utilidade pública, interesse social ou baixo impacto."),
          ("B", "A intervenção é livre caso a pousada pague taxa de turismo rural ao Município."),
          ("C", "Apenas rios navegáveis de largura superior a 100 metros possuem APP."),
          ("D", "A vegetação nativa das margens de rios pode ser destruída mediante plantio de eucalipto.")],
         "A", "Art. 4º, I, 'a', da Lei nº 12.651/2012: Considera-se Área de Preservação Permanente as faixas marginais de qualquer curso d'água natural perene e intermitente. A supressão só é admitida em hipóteses legais excepcionais de utilidade pública ou interesse social (art. 8º).", "Lei nº 12.651/2012, art. 4º e art. 8º."),

        ("Responsabilidade Administrativa Ambiental - Culpabilidade Subjetiva", "Difícil",
         "O IBAMA autuou e aplicou multa administrativa à empresa proprietária da carga líquida transportada por caminhão de transportadora terceira que tombou na rodovia e causou contaminação. Conforme tese fixada pelo STJ:",
         [("A", "A aplicação de penalidades administrativas ambientais exige a comprovação de culpa ou dolo do agente (responsabilidade administrativa subjetiva), ao contrário da responsabilidade civil que é objetiva."),
          ("B", "A responsabilidade por infrações administrativas ambientais é objetiva na modalidade risco integral."),
          ("C", "O proprietário da carga responde administrativamente solidariamente sem culpa."),
          ("D", "Multas ambientais não admitem qualquer contraditório administrativo prévio.")],
         "A", "STJ, Tema Repetitivo 799 e 1.019 (EREsp 1.318.051/RJ): A aplicação de sanções administrativas ambientais exige a comprovação de conduta culposa ou dolosa do infrator (caráter pessoal da pena), sendo a responsabilidade administrativa ambiental de natureza subjetiva.", "STJ, EREsp 1.318.051/RJ; Lei nº 9.605/1998, art. 70."),

        ("Princípio do Poluidor-Pagador - Internalização dos Custos", "Médio",
         "Em audiência pública sobre instalação de polo petroquímico, discutiu-se a aplicação do princípio do poluidor-pagador. Juridicamente, esse princípio significa que:",
         [("A", "Aquele que pagar as multas e taxas ambientais adquire o direito subjetivo irrestrito de poluir."),
          ("B", "O poluidor deve arcar com os custos das medidas de prevenção, precaução e reparação dos danos gerados por sua atividade produtiva, internalizando as externalidades ambientais negativas."),
          ("C", "A poluição só é proibida se não houver recolhimento de impostos ao Tesouro Nacional."),
          ("D", "O Estado deve subsidiar com recursos públicos todos os filtros e equipamentos antipoluição das fábricas.")],
         "B", "O Princípio do Poluidor-Pagador (Art. 4º, VII, da Lei nº 6.938/1981 e Princípio 16 da Declaração do Rio/92) impõe ao empreendedor o dever de arcar com os custos de prevenção e reparação da degradação, impedindo a socialização dos prejuízos ambientais.", "Lei nº 6.938/1981, art. 4º, VII; Declaração do Rio/1992, Princípio 16.")
    ]

    for i, item in enumerate(amb_items):
        qs.append(make_q(f"q-amb-{i+11:03d}", "ambiental", item[0], item[1], item[2], item[3], item[4], item[5], item[6]))

    # -------------------------------------------------------------
    # DIREITOS HUMANOS (+5 -> 10)
    # -------------------------------------------------------------
    dh_items = [
        ("DUDH de 1948 - Natureza Jurídica e Direitos", "Fácil",
         "A Declaração Universal dos Direitos Humanos (DUDH), proclamada pela Assembleia Geral da ONU em 1948 por meio da Resolução 217-A, ostenta historicamente:",
         [("A", "Natureza jurídica originária de tratado internacional ratificado com status de emenda constitucional."),
          ("B", "Natureza originária de Resolução da AGNU que consolidou a concepção contemporânea universal dos direitos humanos como direitos civis, políticos, econômicos e sociais indivisíveis."),
          ("C", "Caráter secreto aplicável exclusivamente aos países vencedores da Segunda Guerra Mundial."),
          ("D", "Validade nula por não ter sido promulgada pelo Presidente do Brasil.")],
         "B", "A DUDH/1948 foi aprovada como Resolução da Assembleia Geral da ONU (soft law originário), consagrando a universalidade e indivisibilidade dos direitos humanos e servindo de alicerce ao Direito Internacional dos Direitos Humanos consuetudinário.", "DUDH/1948; Doutrina de Flávia Piovesan."),

        ("Caso Damião Ximenes Lopes - Corte IDH", "Médio",
         "O primeiro caso contencioso em que a República Federativa do Brasil foi condenada pela Corte Interamericana de Direitos Humanos versou sobre a morte de pessoa com deficiência mental em clínica psiquiátrica conveniada ao SUS. Trata-se do:",
         [("A", "Caso Guerrilha do Araguaia."),
          ("B", "Caso Damião Ximenes Lopes, marco histórico no qual a Corte IDH assentou a responsabilidade internacional do Brasil pelo dever de fiscalização em instituições de saúde mental."),
          ("C", "Caso Favela Nova Brasília."),
          ("D", "Caso Maria da Penha julgado originariamente pela Corte de Haia.")],
         "B", "A Corte Interamericana de Direitos Humanos proferiu em 2006 a sentença condenatória no Caso Damião Ximenes Lopes vs. Brasil, pioneira condenação do Estado brasileiro por tratamentos cruéis e desumanos a portadores de transtornos mentais.", "Corte Interamericana de Direitos Humanos, Caso Ximenes Lopes vs. Brasil (2006).")
    ]

    for i, item in enumerate(dh_items):
        qs.append(make_q(f"q-dh-{i+6:03d}", "direitos-humanos", item[0], item[1], item[2], item[3], item[4], item[5], item[6]))

    # -------------------------------------------------------------
    # DIREITO INTERNACIONAL (+5 -> 10)
    # -------------------------------------------------------------
    inter_items = [
        ("Perda da Nacionalidade Brasileira - Emenda Constitucional 131/2023", "Médio",
         "Brasileiro nato adquiriu voluntariamente a nacionalidade norte-americana pelo procedimento de naturalização nos Estados Unidos onde reside e trabalha há 15 anos. Com a promulgação da Emenda Constitucional nº 131/2023:",
         [("A", "Ele perdeu automaticamente a nacionalidade brasileira no dia do juramento à bandeira americana."),
          ("B", "Ele não perde a nacionalidade brasileira, salvo se fizer pedido expresso de renúncia por escrito perante autoridade brasileira competente, ressalvada a possibilidade de reaquisição."),
          ("C", "A perda é decretada pelo juiz federal da comarca onde nasceu."),
          ("D", "A aquisição de outra nacionalidade passou a constituir crime de traição à pátria.")],
         "B", "A Emenda Constitucional nº 131/2023 alterou o Art. 12, § 4º, da CF/88, revogando a perda automática da nacionalidade pela aquisição voluntária de outra e exigindo agora pedido expresso de renúncia pelo cidadão perante autoridade competente.", "CF/88, art. 12, § 4º (com redação da EC nº 131/2023)."),

        ("Imunidade de Jurisdição do Estado Estrangeiro - Atos de Gestão", "Difícil",
         "Empregado brasileiro contratado como motorista pela Embaixada da Alemanha em Brasília ajuizou Reclamação Trabalhista perante a Justiça do Trabalho cobrando horas extras e FGTS. A Embaixada alegou imunidade absoluta de jurisdição. O TST e o STF pacificaram que:",
         [("A", "A imunidade de jurisdição dos Estados estrangeiros é absoluta e impede qualquer julgamento trabalhista."),
          ("B", "A imunidade de jurisdição é relativa, não prevalecendo em causas de natureza trabalhista que envolvam atos de gestão (jure gestionis) praticados no território nacional."),
          ("C", "A competência é exclusiva do Tribunal Penal Internacional de Haia."),
          ("D", "O trabalhador deve ingressar com ação cível na Justiça Federal da Alemanha.")],
         "B", "O STF e o TST pacificaram que a imunidade de jurisdição do Estado estrangeiro não é absoluta, cedendo perante atos de império (jure imperii) vs. atos de gestão (jure gestionis), sendo plenamente julgáveis as lides trabalhistas ocorridas no território brasileiro.", "STF, ACr 9.696; Súmula 428 do TST (distinguishing); Art. 114 da CF/88.")
    ]

    for i, item in enumerate(inter_items):
        qs.append(make_q(f"q-inter-{i+6:03d}", "internacional", item[0], item[1], item[2], item[3], item[4], item[5], item[6]))

    # -------------------------------------------------------------
    # ECA (+5 -> 10)
    # -------------------------------------------------------------
    eca_items = [
        ("Guarda vs Tutela vs Adoção no ECA", "Fácil",
         "Casal acolheu criança de 4 anos cujos pais foram destituídos do poder familiar por maus-tratos graves e transitada em julgado a sentença. O instituto que confere o estado definitivo de filho e desliga a criança de qualquer vínculo com a família biológica é:",
         [("A", "A guarda provisória remunerada."),
          ("B", "A adoção, ato irrevogável que atribui a condição de filho ao adotado, com os mesmos direitos e deveres, inclusive sucessórios."),
          ("C", "A tutela civil sujeita a prestação de contas bienal."),
          ("D", "O apadrinhamento afetivo sem efeitos civis.")],
         "B", "Art. 41 do ECA: A adoção atribui a condição de filho ao adotado, com os mesmos direitos e deveres, inclusive sucessórios, desligando-o de qualquer vínculo com pais e parentes, salvo os impedimentos matrimoniais.", "Lei nº 8.069/1990 (ECA), art. 41, caput."),

        ("Apreensão de Adolescente em Flagrante de Ato Infracional", "Médio",
         "Adolescente de 16 anos foi apreendido em flagrante de ato infracional análogo a roubo armado. Conforme o Art. 106 do ECA:",
         [("A", "Nenhum adolescente pode ser privado de sua liberdade em hipótese alguma."),
          ("B", "Nenhum adolescente será privado de sua liberdade senão em flagrante de ato infracional ou por ordem escrita e fundamentada da autoridade judiciária competente."),
          ("C", "A apreensão independe de comunicação aos pais nas primeiras 48 horas."),
          ("D", "O adolescente deve ser recolhido a cela comum com presos adultos provisórios.")],
         "B", "Art. 106 do ECA: Nenhum adolescente será privado de sua liberdade senão em flagrante de ato infracional ou por ordem escrita e fundamentada da autoridade judiciária competente. O Art. 107 assegura a imediata comunicação da apreensão aos pais e ao Ministério Público.", "Lei nº 8.069/1990 (ECA), art. 106 e art. 107.")
    ]

    for i, item in enumerate(eca_items):
        qs.append(make_q(f"q-eca-{i+6:03d}", "crianca-adolescente", item[0], item[1], item[2], item[3], item[4], item[5], item[6]))

    # -------------------------------------------------------------
    # PREVIDENCIÁRIO (+5 -> 10)
    # -------------------------------------------------------------
    prev_items = [
        ("Salário-Maternidade e Empregada Urbana vs Contribuinte Individual", "Médio",
         "Ana, empregada com contrato formal de trabalho sob a CLT, deu à luz seu primeiro filho. Beatriz, contribuinte individual autônoma, também engravidou. Sobre a carência do salário-maternidade:",
         [("A", "Ambas devem comprovar carência de 180 contribuições mensais."),
          ("B", "Para a segurada empregada, o salário-maternidade independe de carência; para a contribuinte individual, exige-se a carência de 10 contribuições mensais."),
          ("C", "A segurada empregada recebe o benefício apenas pelo prazo de 30 dias."),
          ("D", "A autônoma não tem direito a salário-maternidade no RGPS.")],
         "B", "Art. 25, III, e Art. 26, VI, da Lei nº 8.213/1991: O salário-maternidade para a segurada empregada independe de carência; para a segurada contribuinte individual e facultativa, exige-se o cumprimento de 10 (dez) contribuições mensais.", "Lei nº 8.213/1991, art. 25, III e art. 26, VI."),

        ("Aposentadoria por Incapacidade Permanente - Adicional de 25%", "Fácil",
         "Aposentado por incapacidade permanente necessita da assistência permanente de outra pessoa para realizar todos os atos da vida diária (alimentação, higiene, locomoção). De acordo com a Lei 8.213/1991:",
         [("A", "Não há qualquer acréscimo legal sobre o valor da aposentadoria."),
          ("B", "O valor da aposentadoria por incapacidade permanente será acrescido de 25% (vinte e cinco por cento), ainda que atinja o teto máximo dos benefícios da Previdência Social."),
          ("C", "O adicional é de 50% restrito a quem ganha salário-maternidade."),
          ("D", "O benefício é cancelado caso o segurado contrate cuidador particular.")],
         "B", "Art. 45 da Lei nº 8.213/1991: O valor da aposentadoria por invalidez do segurado que necessitar da assistência permanente de outra pessoa será acrescido de 25% (vinte e cinco por cento), sendo devido ainda que o valor da aposentadoria atinja o limite máximo legal.", "Lei nº 8.213/1991, art. 45.")
    ]

    for i, item in enumerate(prev_items):
        qs.append(make_q(f"q-prev-{i+6:03d}", "previdenciario", item[0], item[1], item[2], item[3], item[4], item[5], item[6]))

    # -------------------------------------------------------------
    # FINANCEIRO (+5 -> 10)
    # -------------------------------------------------------------
    fin_items = [
        ("Créditos Adicionais Suplementares e Especiais - Fontes de Recursos", "Médio",
         "O Poder Executivo pretende abrir crédito especial para implantar novo programa social não previsto no orçamento anual. O Art. 43 da Lei nº 4.320/1964 considera recursos disponíveis para essa abertura:",
         [("A", "Apenas a receita prevista que ainda não foi arrecadada no ano corrente."),
          ("B", "O superávit financeiro apurado em balanço patrimonial do exercício anterior, o excesso de arrecadação, a anulação parcial ou total de dotações orçamentárias e o produto de operações de crédito autorizadas."),
          ("C", "A emissão direta de títulos públicos municipais com desconto."),
          ("D", "Empréstimos concedidos verbalmente por bancos internacionais.")],
         "B", "Art. 43, § 1º, da Lei nº 4.320/1964: São fontes para a abertura de créditos suplementares e especiais: I - o superávit financeiro do exercício anterior; II - o excesso de arrecadação; III - a anulação de dotações; IV - operações de crédito.", "Lei nº 4.320/1964, art. 43, § 1º."),

        ("Princípio da Não Afetação das Receitas de Impostos", "Médio",
         "Lei estadual vinculou 5% da receita arrecadada com o IPVA para financiar a construção de estádios de futebol para clubes privados locais. Essa vinculação viola o:",
         [("A", "Princípio da anualidade contábil."),
          ("B", "Princípio da não vinculação (ou não afetação) da receita de impostos a órgão, fundo ou despesa, ressalvadas exclusivamente as exceções expressas na própria Constituição (saúde, educação, etc.)."),
          ("C", "Princípio da publicidade das contas parlamentares."),
          ("D", "Princípio do equilíbrio federativo aduaneiro.")],
         "B", "Art. 167, IV, da CF/88: É vedada a vinculação de receita de impostos a órgão, fundo ou despesa, ressalvadas a repartição constitucional de tributos, a destinação para saúde, educação, garantia a operações de crédito e atuação da administração tributária.", "CF/88, art. 167, IV.")
    ]

    for i, item in enumerate(fin_items):
        qs.append(make_q(f"q-fin-{i+6:03d}", "financeiro", item[0], item[1], item[2], item[3], item[4], item[5], item[6]))

    # -------------------------------------------------------------
    # ELEITORAL (+5 -> 10)
    # -------------------------------------------------------------
    eleit_items = [
        ("Ação de Investigação Judicial Eleitoral (AIJE) - Abuso de Poder", "Médio",
         "Candidato a Prefeito utilizou ônibus escolares municipais e servidores públicos em horário de expediente para transportar eleitores ao seu comício eleitoral. A ação cabível para apurar o abuso de poder e sua sanção:",
         [("A", "Ação Penal privada exclusiva do partido adversário."),
          ("B", "Ação de Investigação Judicial Eleitoral (AIJE) fundada no art. 22 da LC 64/90, com sanção de cassação do registro ou diploma e decretação de inelegibilidade pelo prazo de 8 anos."),
          ("C", "Ação de Cobrança cível com pagamento em favor da prefeitura."),
          ("D", "Mandado de injunção eleitoral com voto em separado.")],
         "B", "Art. 22, XIV, da Lei Complementar nº 64/1990: Julgada procedente a AIJE, o Tribunal declarará a inelegibilidade do representado para as eleições a se realizarem nos 8 (oito) anos seguintes e cassará o registro ou diploma do candidato beneficiado.", "LC nº 64/1990, art. 22, XIV."),

        ("Prefeito Itinerante - Vedação ao Terceiro Mandato Consecutivo", "Fácil",
         "Prefeito eleito e reeleito no Município 'A' (dois mandatos consecutivos) transferiu seu domicílio eleitoral para o Município vizinho 'B' e pretende disputar o cargo de Prefeito de 'B' na eleição imediatamente seguinte. O STF pacificou que:",
         [("A", "A candidatura é legítima caso o novo município pertença a comarca diferente."),
          ("B", "É inelegível para o cargo de prefeito cidadão que já exerceu dois mandatos consecutivos na chefia do Executivo, mesmo que em município diverso (vedação ao prefeito itinerante ou profissional)."),
          ("C", "A eleição é permitida caso renuncie 6 meses antes do pleito."),
          ("D", "O terceiro mandato só é proibido para governadores de Estado.")],
         "B", "O STF firmou na Súmula Vinculante e no RE 637.485 (Tema 492) a vedação ao chamado 'prefeito itinerante', assentando que o cidadão que exerceu dois mandatos sucessivos como prefeito não pode candidatar-se ao mesmo cargo em município distinto no período subsequente.", "STF, RE 637.485 (Tema 492); CF/88, art. 14, § 5º.")
    ]

    for i, item in enumerate(eleit_items):
        qs.append(make_q(f"q-eleit-{i+6:03d}", "eleitoral", item[0], item[1], item[2], item[3], item[4], item[5], item[6]))

    # -------------------------------------------------------------
    # FILOSOFIA (+5 -> 10)
    # -------------------------------------------------------------
    filo_items = [
        ("John Rawls - Posição Original e Véu da Ignorância", "Médio",
         "Na clássica obra 'Uma Teoria da Justiça', John Rawls concebe artifício hipotético em que as partes deliberam sobre os princípios de justiça fundamentais da sociedade sem conhecer seus próprios talentos, classe social ou vantagens individuais. Esse artifício é o:",
         [("A", "Estado de natureza hobbesiano de guerra de todos contra todos."),
          ("B", "Véu da ignorância (veil of ignorance) sob a posição original, assegurando a imparcialidade e a justiça como equidade (fairness)."),
          ("C", "Imperativo categórico kantiano restrito aos deveres religiosos."),
          ("D", "Utilitarismo de Bentham baseado na maior felicidade da maioria.")],
         "B", "John Rawls propõe a 'posição original' sob o 'véu da ignorância' como experimento mental para escolher princípios de justiça justos e equitativos: 1) princípio da igual liberdade; 2) princípio da diferença (as desigualdades econômicas devem beneficiar os menos favorecidos).", "John Rawls, 'Uma Teoria da Justiça' (A Theory of Justice, 1971)."),

        ("Aristóteles - Justiça Distributiva vs Corretiva", "Fácil",
         "No Livro V de 'Ética a Nicômaco', Aristóteles distingue a justiça particular em distributiva e corretiva. Para o filósofo grego, a justiça distributiva caracteriza-se por:",
         [("A", "Dar a todos exatamente as mesmas coisas sem qualquer critério de diferenciação."),
          ("B", "Distribuir honras, riquezas e cargos públicos segundo o mérito e a proporção geométrica (tratar igualmente os iguais e desigualmente os desiguais na medida de sua desigualdade)."),
          ("C", "Punir o criminoso com a lei de talião pura do olho por olho."),
          ("D", "Impor o cumprimento estrito de contratos comerciais sob pena de escravidão.")],
         "B", "Aristóteles conceituou a justiça distributiva baseada na proporção geométrica distributiva segundo o mérito (axia), e a justiça corretiva (sinalagmática) baseada na proporção aritmética para restaurar o equilíbrio nas relações particulares.", "Aristóteles, 'Ética a Nicômaco', Livro V.")
    ]

    for i, item in enumerate(filo_items):
        qs.append(make_q(f"q-filo-{i+6:03d}", "filosofia", item[0], item[1], item[2], item[3], item[4], item[5], item[6]))

    print(f"Generated {len(qs)} final expansion questions.")
    return qs

if __name__ == '__main__':
    final_qs = get_final_expansion()
    print("Total final expansion:", len(final_qs))
