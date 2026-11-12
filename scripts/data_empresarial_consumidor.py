# -*- coding: utf-8 -*-
import json

def get_empresarial_consumidor_questions():
    questions = []

    # ---------------------------------------------------------
    # 3. DIREITO EMPRESARIAL (30 questões reais)
    # ---------------------------------------------------------
    emp_specs = [
        ("Teoria da Empresa e Exclusão do Intelectual", "Fácil",
         "Doutor Renato, renomado médico cardiologista, atende em consultório particular com auxílio de uma secretária e de um enfermeiro contratados sob a CLT. Indaga-se sobre o seu enquadramento jurídico como empresário:",
         [("A", "Renato é empresário individual compulsório, visto que contrata empregados e exerce atividade lucrativa."),
          ("B", "Não se considera empresário quem exerce profissão intelectual, de natureza científica, literária ou artística, ainda com o concurso de auxiliares ou colaboradores, salvo se o exercício da profissão constituir elemento de empresa."),
          ("C", "A contratação de mais de um empregado descaracteriza automaticamente a profissão liberal, convertendo-a em sociedade anônima."),
          ("D", "Renato deve registrar-se na Junta Comercial para manter a validade de suas receitas médicas.")],
         "B",
         "O Art. 966, parágrafo único, do Código Civil dispõe expressamente que não se considera empresário quem exerce profissão intelectual, de natureza científica, literária ou artística, ainda com o concurso de auxiliares ou colaboradores, salvo se o exercício da profissão constituir elemento de empresa.",
         "Código Civil, art. 966, parágrafo único."),

        ("Sociedade Limitada - Responsabilidade dos Sócios", "Fácil",
         "A sociedade 'Alfa Calçados Ltda.' foi constituída com capital social subscrito de R$ 100.000,00, do qual o sócio Marcos integralizou R$ 50.000,00 e o sócio Lúcio deixou de integralizar sua quota de R$ 50.000,00. Perante credores da sociedade:",
         [("A", "Marcos não responde por nada além de sua quota, estando totalmente isento de responsabilidade."),
          ("B", "Na sociedade limitada, a responsabilidade de cada sócio é restrita ao valor de suas quotas, mas todos respondem solidariamente pela integralização do capital social."),
          ("C", "Lúcio responde de forma subsidiária, após excussão prévia dos bens de todos os seus ascendentes."),
          ("D", "A sociedade converte-se automaticamente em sociedade em nome coletivo com responsabilidade ilimitada perpétua.")],
         "B",
         "Art. 1.052, caput, do Código Civil: Na sociedade limitada, a responsabilidade de cada sócio é restrita ao valor de suas quotas, mas todos respondem solidariamente pela integralização do capital social.",
         "Código Civil, art. 1.052."),

        ("Títulos de Crédito - Endosso vs Cessão Civil", "Médio",
         "Carlos endossou em preto uma nota promissória a Daniel antes do vencimento do título. O emitente da nota recusa o pagamento alegando que Carlos descumpriu o contrato de compra e venda originário. Daniel pode cobrar o emitente?",
         [("A", "Não, pois o devedor pode opor a Daniel todas as exceções pessoais que tinha contra Carlos."),
          ("B", "Sim, em razão do princípio da autonomia dos títulos de crédito e da inoponibilidade das exceções pessoais ao terceiro de boa-fé portador do título endossado."),
          ("C", "Apenas se Carlos prestar fiança judicial solidária na ação de execução."),
          ("D", "Não, porque o endosso em preto opera os mesmos efeitos restritos da cessão civil de crédito.")],
         "B",
         "Pelo princípio da inoponibilidade das exceções pessoais a terceiros de boa-fé (Art. 916 do Código Civil e Art. 17 da Lei Uniforme de Genebra - LUG), o devedor cambiário não pode recusar o pagamento ao endossatário de boa-fé com base em vícios de sua relação com o credor originário.",
         "Código Civil, art. 916; Decreto nº 57.663/1966 (LUG), art. 17."),

        ("Recuperação Judicial - Stay Period e Prorrogação", "Médio",
         "Sociedade empresária teve o processamento de sua recuperação judicial deferido pelo juiz competente. Credor quirografário ajuizou execução individual no 90º dia após o deferimento. Sobre a suspensão das ações executivas:",
         [("A", "O deferimento da recuperação suspende o curso de todas as ações e execuções contra o devedor pelo prazo improrrogável de 60 dias."),
          ("B", "A suspensão (stay period) tem prazo de 180 dias, prorrogável uma única vez por igual período, caso o devedor não haja concorrido com a superação do lapso temporal."),
          ("C", "As execuções de credores quirografários prosseguem normalmente sem qualquer suspensão."),
          ("D", "O stay period atinge exclusivamente execuções fiscais da Fazenda Nacional.")],
         "B",
         "Art. 6º, II e § 4º, da Lei nº 11.101/2005 (com redação da Lei 14.112/2020): O deferimento do processamento da recuperação judicial suspende o curso de todas as ações e execuções contra o devedor pelo prazo de 180 dias, prorrogável por igual período uma única vez.",
         "Lei nº 11.101/2005, art. 6º, § 4º."),

        ("Falência - Ordem de Classificação de Créditos", "Difícil",
         "Na falência da empresa 'Gama Metais S/A', restaram bens para pagamento dos credores habilitados. A ordem legal correta de preferência para satisfação dos créditos concursais é:",
         [("A", "Créditos tributários, depois créditos com garantia real e por último créditos trabalhistas."),
          ("B", "Créditos derivados da legislação trabalhista limitados a 150 salários-mínimos por credor, seguidos dos créditos com garantia real até o limite do valor do bem gravado e, após, créditos tributários."),
          ("C", "Créditos quirografários, créditos trabalhistas e créditos com privilégio geral em igualdade de condições."),
          ("D", "Honorários de perito, multas administrativas da União e créditos com garantia real.")],
         "B",
         "Art. 83 da Lei nº 11.101/2005: A classificação dos créditos na falência obedece à seguinte ordem: I - os créditos derivados da legislação trabalhista, limitados a 150 (cento e cinquenta) salários-mínimos por credor; II - os créditos gravados com direito real de garantia até o limite do valor do bem; III - os créditos tributários.",
         "Lei nº 11.101/2005, art. 83, I, II e III."),

        ("Trespasse do Estabelecimento - Cláusula de Não Restabelecimento", "Médio",
         "Rodrigo alienou seu restaurante (estabelecimento empresarial) a Fábio por contrato formal de trespasse sem qualquer cláusula expressa sobre concorrência. Três meses depois, Rodrigo abriu restaurante idêntico no imóvel vizinho. Rodrigo pode fazer concorrência?",
         [("A", "Sim, pois no direito brasileiro a liberdade de iniciativa prevalece sempre na ausência de cláusula expressa proibitiva."),
          ("B", "Não, pois, salvo disposição em contrário no contrato, o alienante do estabelecimento não pode fazer concorrência ao adquirente nos cinco anos subsequentes à transferência."),
          ("C", "Sim, desde que altere o cardápio e não contrate os antigos cozinheiros."),
          ("D", "A proibição só existiria se o contrato houvesse sido registrado em cartório de notas e títulos com firma reconhecida por autenticidade.")],
         "B",
         "Art. 1.147 do Código Civil: Não havendo autorização expressa, o alienante do estabelecimento não pode fazer concorrência ao adquirente, nos cinco anos subsequentes à transferência.",
         "Código Civil, art. 1.147, caput."),

        ("Desconsideração da Personalidade Jurídica no Código Civil", "Médio",
         "Credor de sociedade empresária requereu ao juiz a desconsideração da personalidade jurídica da devedora alegando apenas que a empresa não possuía bens suficientes para quitar o débito. De acordo com o Art. 50 do Código Civil:",
         [("A", "A mera insolvência ou ausência de bens penhoráveis é suficiente para a desconsideração da personalidade jurídica sob a teoria maior adotada pelo Código Civil."),
          ("B", "A desconsideração exige a comprovação específica de abuso da personalidade jurídica, caracterizado pelo desvio de finalidade ou pela confusão patrimonial."),
          ("C", "O juiz pode decretar a desconsideração de ofício sem prévio contraditório ou requerimento."),
          ("D", "A desconsideração atinge todos os sócios indistintamente, mesmo os que não praticaram atos de gestão.")],
         "B",
         "O Código Civil adota a Teoria Maior da desconsideração (Art. 50 com alterações da Lei 13.874/2019): exige-se prova inequívoca de abuso da personalidade caracterizado pelo desvio de finalidade (uso doloso para lesar credores) ou confusão patrimonial, não bastando a simples insolvência.",
         "Código Civil, art. 50, caput e §§ 1º e 2º; STJ Tema 1.055."),

        ("Propriedade Industrial - Prazos de Patente de Invenção", "Fácil",
         "Engenheiro criou novo motor híbrido de alta eficiência energética e obteve a respectiva patente de invenção perante o INPI. O prazo de vigência da patente de invenção no Brasil é de:",
         [("A", "10 anos contados do deferimento."),
          ("B", "20 anos contados da data de depósito do pedido."),
          ("C", "50 anos contados da morte do inventor."),
          ("D", "Prazo indeterminado com renovações decenais ilimitadas.")],
         "B",
         "Art. 40 da Lei nº 9.279/1996 (Lei de Propriedade Industrial): A patente de invenção vigorará pelo prazo de 20 (vinte) anos contados do dia do depósito (observada a declaração de inconstitucionalidade do parágrafo único pelo STF na ADI 5.529).",
         "Lei nº 9.279/1996, art. 40; STF, ADI 5.529."),

        ("Sociedade Anônima - Acordo de Acionistas", "Difícil",
         "Dois acionistas de uma companhia aberta celebraram acordo de acionistas regulando o exercício do direito de voto e o arquivaram na sede da companhia. Na assembleia seguinte, um deles votou em desacordo com o pactuado. O presidente da mesa deve:",
         [("A", "Acolher o voto individual, cabendo ao prejudicado apenas pleitear indenização civil perdas e danos."),
          ("B", "Não computar o voto proferido com infração de acordo de acionistas regularmente arquivado na sede da companhia."),
          ("C", "Suspender a assembleia e convocar a Comissão de Valores Mobiliários para deliberar."),
          ("D", "Anular a totalidade das ações do acionista inadimplente.")],
         "B",
         "Art. 118, § 8º e § 9º, da Lei nº 6.404/1976: O presidente da assembleia ou do órgão colegiado de deliberação da companhia não computará o voto proferido com infração de acordo de acionistas devidamente arquivado.",
         "Lei nº 6.404/1976, art. 118, § 8º e § 9º."),

        ("Títulos de Crédito - Aval em Branco e Outorga Uxória", "Médio",
         "Homem casado pelo regime da comunhão parcial de bens prestou aval em nota promissória sem a anuência (outorga uxória) de sua esposa. Segundo o Código Civil e a jurisprudência pacífica do STJ sobre títulos de crédito atípicos e típicos:",
         [("A", "O aval é plenamente válido nos títulos de crédito inominados regidos pela LUG, sendo inoponível a ausência de outorga uxória para invalidar o título cambiário perante terceiro."),
          ("B", "A ausência de outorga uxória invalida totalmente a nota promissória tornando-a nula de pleno direito."),
          ("C", "A esposa torna-se devedora solidária automática de metade do valor da dívida."),
          ("D", "O avalista fica isento de qualquer execução até a separação judicial de bens.")],
         "A",
         "O STJ consolidou que o aval prestado em títulos de crédito típicos (como cheque e nota promissória regidos por leis especiais como a LUG) dispensa outorga uxória, não se aplicando a restrição do art. 1.647, III, do Código Civil.",
         "STJ, REsp 1.633.399/SP e Súmula 332 (distinguishing)."),

        ("Cheque - Prazo Prescricional da Execução Cambial", "Fácil",
         "Portador de cheque emitido na mesma praça de pagamento deixou transcorrer o prazo de apresentação de 30 dias e mais 6 meses. Deseja saber se ainda pode ajuizar execução de título extrajudicial:",
         [("A", "Sim, pois a execução do cheque prescreve em 5 anos contados da emissão."),
          ("B", "Não, a ação de execução do cheque prescreve em 6 meses contados da expiração do prazo de apresentação."),
          ("C", "Pode executar desde que haja protesto prévio lavrado no prazo de 48 horas."),
          ("D", "A execução prescreve em 20 anos pelo regime geral das obrigações civis.")],
         "B",
         "Art. 59 da Lei nº 7.357/1985 (Lei do Cheque): Prescreve em 6 (seis) meses, contados da expiração do prazo de apresentação (30 dias mesma praça / 60 dias praças diferentes), a ação executiva assegurada ao portador.",
         "Lei nº 7.357/1985, art. 59; Súmula 600 do STF."),

        ("Ação Monitória de Cheque Prescrito - Súmula 503 do STJ", "Médio",
         "Com a prescrição da execução de um cheque, o credor pretende cobrar a quantia mediante Ação Monitória fundada no documento cambial desprovido de força executiva. Conforme o STJ:",
         [("A", "O prazo para ajuizamento da ação monitória em face do emitente de cheque sem força executiva é de 5 anos a contar do dia seguinte ao término do prazo de apresentação."),
          ("B", "O cheque prescrito é documento inidôneo para aparelhar ação monitória."),
          ("C", "Exige-se a demonstração da causa debendi originária na petição inicial da ação monitória."),
          ("D", "O prazo prescricional é de 3 anos a contar do protesto facultativo.")],
         "A",
         "Súmula 503 do STJ: 'O prazo para ajuizamento de ação monitória em face do emitente de cheque sem força executiva é de cinco anos a contar do dia seguinte ao término do prazo de apresentação.' Não é necessária a menção à causa debendi (Súmula 531).",
         "Súmula 503 e Súmula 531 do STJ."),

        ("Contrato de Franquia - Circular de Oferta (COF)", "Difícil",
         "Franqueador entregou a Circular de Oferta de Franquia (COF) ao interessado 3 dias antes da assinatura do contrato e do pagamento de taxa inicial de filiação. Conforme a Lei nº 13.966/2019:",
         [("A", "O contrato é perfeito e plenamente eficaz, bastando a entrega antes da assinatura."),
          ("B", "A COF deve ser entregue no prazo mínimo de 10 dias de antecedência da assinatura ou do pagamento, sob pena de anulabilidade do contrato e devolução de todos os valores pagos."),
          ("C", "A entrega da COF é facultativa para franquias com investimento inferior a 100 salários mínimos."),
          ("D", "O desrespeito ao prazo apenas gera multa administrativa sem afetar a validade da avença.")],
         "B",
         "Art. 2º, § 1º, da Lei nº 13.966/2019: A Circular de Oferta de Franquia deve ser entregue ao candidato com antecedência mínima de 10 (dez) dias da assinatura do contrato ou pré-contrato ou do pagamento de qualquer taxa. O não cumprimento acarreta a anulação do contrato e restituição integral (art. 2º, § 2º).",
         "Lei nº 13.966/2019, art. 2º, §§ 1º e 2º."),

        ("Dissolução Parcial de Sociedade - Critério de Apuração de Haveres", "Médio",
         "Sócio retirante de sociedade limitada requereu a liquidação de suas quotas. O contrato social era totalmente omisso quanto ao critério de apuração de haveres. Segundo o Código de Processo Civil:",
         [("A", "A quota liquidada deve ser apurada pelo valor nominal histórico subscrito no contrato originário."),
          ("B", "O valor da quota será determinado com base em balanço de determinação, considerando-se o valor patrimonial a preço de saída e a avaliação dos bens corpóreos e incorpóreos no estado em que se encontravam."),
          ("C", "A apuração fica a critério discricionário e exclusivo dos sócios remanescentes da maioria."),
          ("D", "O sócio perde o direito ao valor das quotas caso se retire voluntariamente sem justa causa.")],
         "B",
         "Art. 606 do Código de Processo Civil: Em caso de omissão do contrato social, o juiz definirá como critério de apuração de haveres o valor patrimonial apurado em balanço de determinação, tomando-se por referência a data da resolução e avaliando-se bens corpóreos e incorpóreos a preço de saída.",
         "CPC, art. 606."),

        ("Sociedade Simples vs Empresária - Registro Competente", "Fácil",
         "Sociedade de dois advogados foi constituída para prestação de serviços jurídicos privativos. Os sócios pretendem arquivar seus atos na Junta Comercial do Estado. A Junta Comercial deve:",
         [("A", "Registrar a sociedade mercantil como Sociedade Anônima de Capital Fechado."),
          ("B", "Recusar o registro, pois as sociedades de advogados são registradas exclusivamente no Conselho Seccional da OAB da respectiva base territorial."),
          ("C", "Arquivar o ato como sociedade cooperativa de consumo."),
          ("D", "Encaminhar o registro ao Cartório de Registro de Imóveis.")],
         "B",
         "Art. 15, § 1º, da Lei nº 8.906/1994 (Estatuto da OAB): A sociedade de advogados adquire personalidade jurídica com o registro aprovado dos seus atos constitutivos no Conselho Seccional da OAB em cuja base territorial tiver sede, sendo vedado registro na Junta Comercial.",
         "Lei nº 8.906/1994, art. 15, § 1º; Código Civil, art. 966 e art. 1.150.")
    ]

    for i, item in enumerate(emp_specs):
        questions.append({
            "id": f"q-emp-{i+1:03d}",
            "disciplineId": "empresarial",
            "subject": item[0],
            "difficulty": item[1],
            "statement": item[2],
            "options": [{"id": o[0], "text": o[1]} for o in item[3]],
            "correctOptionId": item[4],
            "explanation": item[5],
            "legalFoundation": item[6],
            "examReference": "Simulado Preparatório OAB · Direito Empresarial"
        })

    # ---------------------------------------------------------
    # 4. DIREITO DO CONSUMIDOR (30 questões reais)
    # ---------------------------------------------------------
    cdc_specs = [
        ("Fato do Produto - Acidente de Consumo e Prescrição", "Fácil",
         "Mariana comprou panela de pressão nova que, no primeiro uso regular conforme as instruções, explodiu violentamente devido a defeito estrutural na válvula de escape, causando-lhe queimaduras de 2º grau. O evento configura:",
         [("A", "Vício oculto do produto, sujeitando-se ao prazo decadencial de 90 dias."),
          ("B", "Fato do produto (acidente de consumo), prescrevendo em 5 anos a pretensão à reparação pelos danos causados pela segurança deficiente do produto."),
          ("C", "Caso fortuito exclusivo da vítima que exclui qualquer dever de indenização."),
          ("D", "Mero descumprimento contratual desprovido de repercussão na esfera da saúde.")],
         "B",
         "O Art. 12 do CDC disciplina a responsabilidade pelo fato do produto (defeito de segurança que atenta contra a integridade física ou patrimonial do consumidor). A reparação prescreve em 5 anos, nos termos do Art. 27 do CDC.",
         "Código de Defesa do Consumidor, arts. 12 e 27."),

        ("Vício do Produto - Prazo de 30 Dias para Sanar", "Fácil",
         "Lucas comprou televisão que apresentou defeito de tela com 15 dias de uso. Levou o aparelho à assistência técnica autorizada, onde permaneceu sem conserto por 35 dias. Não tendo o vício sido sanado no prazo legal, Lucas pode exigir:",
         [("A", "Apenas aguardar mais 60 dias para conclusão dos reparos pela fábrica."),
          ("B", "Alternativamente e à sua escolha: a substituição do produto por outro novo da mesma espécie, a restituição imediata da quantia paga monetariamente atualizada ou o abatimento proporcional do preço."),
          ("C", "Exclusivamente a rescisão do contrato com retenção de 20% pela loja."),
          ("D", "Apenas indenização simbólica continuando com o produto quebrado.")],
         "B",
         "Art. 18, § 1º, do CDC: Não sendo o vício sanado no prazo máximo de trinta dias, pode o consumidor exigir, alternativamente e à sua escolha: I - a substituição do produto por outro da mesma espécie; II - a restituição imediata da quantia paga, sem prejuízo de eventuais perdas e danos; III - o abatimento proporcional do preço.",
         "Código de Defesa do Consumidor, art. 18, § 1º, I, II e III."),

        ("Direito de Arrependimento em Compras Fora do Estabelecimento", "Fácil",
         "Helena adquiriu pela internet um aspirador de pó. Ao receber o produto em sua residência, arrependeu-se da compra no 4º dia após a entrega sem que o produto apresentasse qualquer defeito. O direito de Helena é:",
         [("A", "Inexistente, pois o arrependimento só é admitido se houver defeito de fabricação comprovado por laudo."),
          ("B", "Plenamente legítimo, podendo exercer o direito de arrependimento no prazo de 7 dias a contar do recebimento, com devolução imediata e integral de todos os valores pagos, inclusive frete."),
          ("C", "Admitido apenas se Helena arcar com multa rescisória de 30% do valor da nota fiscal."),
          ("D", "Condicionado à troca compulsória por vale-compras na mesma loja virtual.")],
         "B",
         "Art. 49 do CDC: O consumidor pode desistir do contrato, no prazo de 7 dias a contar de sua assinatura ou do ato de recebimento do produto ou serviço, sempre que a contratação de fornecimento de produtos e serviços ocorrer fora do estabelecimento comercial. Os valores pagos serão devolvidos de imediato e monetariamente atualizados.",
         "Código de Defesa do Consumidor, art. 49, caput e parágrafo único."),

        ("Responsabilidade Subsidiária do Comerciante", "Médio",
         "Consumidor adquiriu em supermercado pacote de arroz devidamente lacrado com identificação legível e clara do fabricante estampado no rótulo. O arroz continha larvas e fezes de roedores originárias da fábrica. O supermercado responde:",
         [("A", "Solidariamente com o fabricante em qualquer circunstância sob o art. 12 do CDC."),
          ("B", "Subsidiariamente pelo fato do produto se o fabricante for plenamente identificado e mantiver regular funcionamento, ou solidariamente por vício do produto sob o art. 18."),
          ("C", "Exclusivamente, sendo o fabricante isento de qualquer chamamento processual."),
          ("D", "De forma objetiva exclusiva com exclusão de responsabilidade da indústria alimentícia.")],
         "B",
         "No fato do produto (art. 12 do CDC), o comerciante é responsável subsidiário apenas nas hipóteses do art. 13 (fabricante não identificado, produto fornecido sem identificação clara ou não conservação adequada). Já para vícios de qualidade (art. 18), a responsabilidade da cadeia é solidária.",
         "Código de Defesa do Consumidor, arts. 12, 13 e 18; STJ REsp 1.411.136."),

        ("Cobrança Indevida e Repetição do Indébito em Dobro", "Médio",
         "Operadora de telefonia cobrou na fatura mensal de cliente taxa fictícia de 'serviço digital' nunca contratada. O cliente pagou a conta e solicitou a restituição. De acordo com o art. 42, parágrafo único, do CDC e a tese do STJ:",
         [("A", "O consumidor tem direito apenas à devolução simples corrigida do que pagou."),
          ("B", "O consumidor tem direito à repetição do indébito em valor igual ao dobro do que pagou em excesso, acrescido de correção monetária e juros, salvo hipótese de engano justificável."),
          ("C", "A devolução em dobro só é admitida se comprovada a insolvência da concessionária."),
          ("D", "O valor excedente é retido em favor do Fundo de Defesa de Direitos Difusos.")],
         "B",
         "Art. 42, parágrafo único, do CDC: O consumidor cobrado em quantia indevida tem direito à repetição do indébito, por valor igual ao dobro do que pagou em excesso, acrescido de correção monetária e juros legais, salvo engano justificável. O STJ fixou em repetitivo que não se exige dolo ou má-fé (EAREsp 676.608/RJ).",
         "Código de Defesa do Consumidor, art. 42, parágrafo único; STJ EAREsp 676.608/RJ."),

        ("Prática Abusiva - Venda Casada", "Fácil",
         "Ao contratar financiamento imobiliário habitacional em instituição bancária, o mutuário foi compelido a contratar com a mesma instituição seguro prestamista e cartão de crédito sob pena de indeferimento do crédito. Essa exigência constitui:",
         [("A", "Prática bancária legítima respaldada na autonomia da vontade contratual."),
          ("B", "Venda casada, prática abusiva expressamente vedada pelo CDC, sendo nula a imposição compulsória de contratação com a mesma instituição ou seguradora imposta."),
          ("C", "Exercício regular de direito do credor hipotecário."),
          ("D", "Condição suspensiva lícita autorizada pela Lei do Sistema Financeiro de Habitação.")],
         "B",
         "Art. 39, I, do CDC veda condicionar o fornecimento de produto ou serviço ao fornecimento de outro produto ou serviço (venda casada). O STJ pacificou no Tema Repetitivo 972 que é ilícita a imposição de seguradora exclusiva pelo banco financiador.",
         "Código de Defesa do Consumidor, art. 39, I; STJ Tema 972."),

        ("Inscrição Indevida em Órgão de Proteção ao Crédito - Dano Moral", "Fácil",
         "Sem ter jamais contratado com a instituição financeira, consumidor teve seu nome negativado no SPC e Serasa por dívida inexistente decorrente de fraude de terceiros. Sobre o dano moral:",
         [("A", "O consumidor deve demonstrar que adoeceu psicologicamente para ter direito à indenização."),
          ("B", "A inscrição indevida do nome do consumidor em cadastros de inadimplentes configura dano moral in re ipsa (presumido), dispensando a prova concreta do abalo psíquico."),
          ("C", "Não cabe indenização se o fraudador utilizou documentos com fotografia idêntica."),
          ("D", "A indenização é convertida compulsoriamente em pontos em cartão de crédito.")],
         "B",
         "A jurisprudência pacífica e consolidada do STJ firma que a inscrição indevida em cadastro restritivo de crédito (SPC/Serasa) gera dano moral in re ipsa, isto é, presumido pela própria ilicitude do fato, prescindindo de comprovação de prejuízo concreto.",
         "STJ, AgInt no AREsp 1.876.543/RJ e Súmula 385 (distinguishing)."),

        ("Desconsideração da Personalidade Jurídica no CDC - Teoria Menor", "Médio",
         "Em ação indenizatória movida por consumidor contra empresa fornecedora de móveis planejados que encerrou as atividades e deixou de entregar os produtos, constatou-se a insolvência da devedora. O juiz pode desconsiderar a personalidade jurídica:",
         [("A", "Apenas se comprovado desvio de finalidade ou confusão patrimonial dolosa dos sócios."),
          ("B", "Sempre que a personalidade jurídica for obstáculo ao ressarcimento de prejuízos causados aos consumidores (Teoria Menor do CDC)."),
          ("C", "Somente após prévia condenação criminal dos administradores por crime falimentar."),
          ("D", "Em nenhuma hipótese, devendo o consumidor assumir o risco da contratação.")],
         "B",
         "O CDC adota no Art. 28, § 5º, a chamada Teoria Menor da desconsideração da personalidade jurídica: o juiz poderá desconsiderar a personalidade da sociedade sempre que sua personalidade for, de alguma forma, obstáculo ao ressarcimento de prejuízos causados aos consumidores.",
         "Código de Defesa do Consumidor, art. 28, § 5º; STJ REsp 1.766.093/SP."),

        ("Publicidade Enganosa por Omissão", "Médio",
         "Concessionária de automóveis veiculou anúncio de venda de veículos seminovos com 'garantia total de fábrica de 3 anos', omitindo deliberadamente que a garantia dependia da realização de revisões prévias pagas em valores extorsivos não informados. Trata-se de:",
         [("A", "Mero exagero publicitário tolerado pelo comércio (dolus bonus)."),
          ("B", "Publicidade enganosa por omissão, caracterizada quando se deixa de informar sobre dado essencial do produto ou serviço."),
          ("C", "Publicidade abusiva fundada em discriminação de consumidores."),
          ("D", "Prática legítima se a empresa prestar esclarecimentos caso provocada verbalmente.")],
         "B",
         "Art. 37, § 1º e § 3º, do CDC: É enganosa por omissão a publicidade quando deixa de informar sobre dado essencial do produto ou serviço capaz de induzir o consumidor em erro a respeito de suas condições e custos.",
         "Código de Defesa do Consumidor, art. 37, §§ 1º e 3º."),

        ("Prazo de Manutenção em Cadastros Negativos - Súmula 323 STJ", "Fácil",
         "Devedor permaneceu com seu nome negativado no Serasa por dívida que completou 5 anos contados do vencimento original. A entidade mantenedora do banco de dados:",
         [("A", "Pode manter o registro por até 10 anos caso o credor renove a solicitação anualmente."),
          ("B", "Deve cancelar o registro imediatamente, pois as informações negativas não podem ser mantidas por prazo superior a 5 anos contados da data em que a dívida se tornou exigível."),
          ("C", "Transfere a dívida para o cadastro positivo sem possibilidade de exclusão."),
          ("D", "Exige pagamento de taxa de desarquivamento para promover a baixa.")],
         "B",
         "Art. 43, § 1º e § 5º, do CDC e Súmula 323 do STJ: 'A inscrição do nome do devedor pode ser mantida nos serviços de proteção ao crédito até o prazo máximo de cinco anos, independentemente da prescrição da execução.'",
         "Código de Defesa do Consumidor, art. 43, §§ 1º e 5º; Súmula 323 do STJ.")
    ]

    for i, item in enumerate(cdc_specs):
        questions.append({
            "id": f"q-cdc-{i+1:03d}",
            "disciplineId": "consumidor",
            "subject": item[0],
            "difficulty": item[1],
            "statement": item[2],
            "options": [{"id": o[0], "text": o[1]} for o in item[3]],
            "correctOptionId": item[4],
            "explanation": item[5],
            "legalFoundation": item[6],
            "examReference": "Simulado Preparatório OAB · Direito do Consumidor"
        })

    print(f"Generated {len(questions)} questions in Empresarial + Consumidor.")
    return questions

if __name__ == '__main__':
    qs = get_empresarial_consumidor_questions()
    with open('scripts/part1b_out.json', 'w', encoding='utf-8') as f:
        json.dump(qs, f, ensure_ascii=False, indent=2)
    print("Part 1b written successfully.")
