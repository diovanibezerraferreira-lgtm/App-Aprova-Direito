import json

new_briefs = [
  {
    "id": "pedido-falencia-empresarial",
    "title": "Petição Inicial de Pedido de Falência por Impontualidade",
    "area": "Direito Empresarial",
    "subject": "Petições Iniciais",
    "legalBasis": "Art. 94, inciso I e § 3º da Lei nº 11.101/2005; Súmula 361 do STJ; Arts. 319 e 320 do CPC/15.",
    "legalDeadlines": "Prazo de 10 dias para o devedor contestar ou depositar o valor da dívida corrigido (depósito elisivo - art. 98, parágrafo único).",
    "jurisdiction": "Vara Cível ou Vara Especializada de Falências e Recuperações Judiciais do local do principal estabelecimento do devedor (art. 3º da Lei 11.101/05).",
    "overview": "O pedido de falência fundado no art. 94, I da Lei 11.101/05 decorre da impontualidade injustificada do devedor empresário. Requer dívida líquida, certa e exigível consubstanciada em título executivo protestado para fins falimentares, cujo somatório ultrapasse 40 (quarenta) salários mínimos na data do pedido.",
    "structureGuide": [
      {
        "step": "1. Endereçamento e Juízo Competente",
        "description": "Endereçar ao Juiz da Vara de Falências ou Vara Cível do principal estabelecimento da devedora (art. 3º da Lei 11.101/05).",
        "practicalTip": "EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA ... VARA CÍVEL E EMPRESARIAL DA COMARCA DE ..."
      },
      {
        "step": "2. Demonstração dos Requisitos do Art. 94, I",
        "description": "Comprovar a legitimidade ativa e passiva, a condição de sociedade empresária da ré, o título executivo e o valor superior a 40 salários mínimos.",
        "practicalTip": "Juntar obrigatoriamente a certidão de protesto especial para fins falimentares lavrada por cartório de protesto (Súmula 361 STJ)."
      },
      {
        "step": "3. Citação para Defesa ou Depósito Elisivo",
        "description": "Requerer a citação da ré para pagar a dívida no prazo de 10 dias ou apresentar contestação nos termos do art. 98.",
        "practicalTip": "Mencionar expressamente a faculdade de efetuar o depósito elisivo elidindo o decreto de quebra."
      },
      {
        "step": "4. Pedidos da Sentença de Falência",
        "description": "Em caso de não pagamento e ausência de acolhimento da defesa, requerer a decretação da falência e nomeação de administrador judicial.",
        "practicalTip": "Requerer os efeitos e comandos estipulados no art. 99 da Lei nº 11.101/2005."
      }
    ],
    "caseScenario": {
      "title": "Caso Prático OAB 2ª Fase Empresarial",
      "problemStatement": "A empresa Credora Mercantil Ltda. é credora da importância de R$ 95.000,00 da empresa Varejo & Distribuição de Alimentos Ltda., representada por três duplicatas mercantis aceitas e vencidas há mais de 60 dias, acompanhadas das notas fiscais e comprovantes de entrega de mercadorias. Os títulos foram levados a protesto especial para fins falimentares, com intimação pessoal do devedor. A dívida supera amplamente 40 salários mínimos e não houve pagamento amigável.",
      "clientNeeds": "Elaborar a Petição Inicial de Pedido de Falência pelo rito do art. 94, I da Lei nº 11.101/2005 perante o juízo competente do principal estabelecimento da devedora."
    },
    "fullDraft": """EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA ... VARA CÍVEL (OU DE RECUPERAÇÃO JUDICIAL E FALÊNCIAS) DA COMARCA DE ...

CREDORA MERCANTIL LTDA., pessoa jurídica de direito privado, inscrita no CNPJ sob o nº ..., com sede na Rua ..., nº ..., Bairro ..., Cidade/UF, CEP ..., com endereço eletrônico ..., representada neste ato por seu sócio-administrador ..., brasileiro, estado civil ..., profissão ..., portador do RG nº ... e inscrito no CPF sob o nº ..., por seu advogado que a esta subscreve, conforme procuração anexa (doc. 01), com escritório profissional sito à Rua ..., onde recebe intimações, vem, respeitosamente, à presença de Vossa Excelência, com fulcro no art. 94, inciso I, da Lei Federal nº 11.101/2005 c/c artigos 319 e 320 do Código de Processo Civil, propor o presente

PEDIDO DE DECRETAÇÃO DE FALÊNCIA POR IMPONTUALIDADE INJUSTIFICADA

em face de VAREJO & DISTRIBUIÇÃO DE ALIMENTOS LTDA., pessoa jurídica de direito privado, inscrita no CNPJ sob o nº ..., com sede e principal estabelecimento situado na Rua ..., nº ..., Bairro ..., nesta Comarca/UF, CEP ..., endereço eletrônico desconhecido, pelas razões de fato e de direito a seguir expostas:

I - DA COMPETÊNCIA DO JUÍZO
Conforme preconiza o art. 3º da Lei Federal nº 11.101/2005, é competente para homologar o plano de recuperação extrajudicial, deferir a recuperação judicial ou decretar a falência o juízo do local do principal estabelecimento do devedor.
In casu, a Requerida mantém sua sede administrativa e concentração principal de atividades mercantis nesta Comarca, restando plenamente fixada a competência deste d. Juízo.

II - DA LEGITIMIDADE ATIVA E PASSIVA
A Autora é sociedade empresária credora por crédito líquido, certo e exigível.
A Requerida é sociedade empresária devidamente registrada na Junta Comercial, exercendo atividade econômica organizada voltada à circulação de bens, enquadrando-se com perfeição no art. 1º da Lei nº 11.101/2005.

III - DOS FATOS
A Autora celebrou com a Requerida operação de compra e venda mercantil de gêneros alimentícios, tendo efetuado a entrega tempestiva de todos os produtos, conforme comprovam as notas fiscais e canhotos de entrega devidamente assinados pelos prepostos da Requerida (docs. anexo).
Em razão de referida transação, foram sacadas as Duplicatas Mercantis nº 101/01, 101/02 e 101/03, com vencimentos respectivamente ocorridos em ..., ... e ..., perfazendo o montante total de R$ 95.000,00 (noventa e cinco mil reais).
Todavia, alcançado o termo de vencimento, a Requerida quedou-se inerte, recusando-se imotivadamente a honrar o pagamento das obrigações contraídas.
Diante da recalcitrância, a Autora promoveu o regular protesto cambial dos títulos perante o ... Tabelionato de Protesto de Títulos desta Comarca, efetuando o protesto para fins falimentares, cuja intimação pessoal do representante legal restou aperfeiçoada, consoante certidões cartorárias inclusas (doc. anexo), atendendo ao comando do art. 94, § 3º da Lei 11.101/05 e à Súmula 361 do Superior Tribunal de Justiça.

IV - DO DIREITO: IMPONTUALIDADE INJUSTIFICADA SUPERIOR A 40 SALÁRIOS MÍNIMOS
O art. 94, inciso I da Lei nº 11.101/2005 prevê de maneira expressa que será decretada a falência do devedor que:
\"I - sem relevante razão de direito, não paga, no vencimento, obrigação líquida materializada em título ou títulos executivos protestados cuja soma ultrapasse o equivalente a 40 (quarenta) salários-mínimos na data do pedido;\"
Na data da distribuição desta exordial, o valor total do crédito (R$ 95.000,00) supera com ampla folga o piso legal de 40 salários mínimos vigentes no país.
Os títulos que aparelham o presente pedido preenchem todos os requisitos de higidez e exigibilidade legal, não tendo a devedora oposto qualquer relevante razão jurídica para o inadimplemento.

V - DOS PEDIDOS
Ante todo o exposto, requer a Autora se digne Vossa Excelência a:
a) Determinar a CITAÇÃO da Requerida, no endereço de seu principal estabelecimento acima consignado, para que, no prazo improrrogável de 10 (dez) dias (art. 98 da Lei nº 11.101/2005), apresente contestação, querendo, ou efetue o DEPÓSITO ELISIVO do montante correspondente ao débito atualizado com juros e honorários advocatícios (art. 98, parágrafo único);
b) Caso a Requerida não elida o pedido mediante depósito judicial e não apresente defesa hábil, seja DECRETADA A FALÊNCIA da empresa VAREJO & DISTRIBUIÇÃO DE ALIMENTOS LTDA., proferindo-se a competente sentença de quebra contendo todas as determinações previstas no art. 99 da Lei nº 11.101/2005, inclusive a nomeação de Administrador Judicial idôneo e a fixação do termo legal da falência;
c) A condenação da Ré nas custas processuais e honorários advocatícios sucumbenciais;
d) A intimação do Ministério Público nos termos legais.

Protesta provar o alegado por todos os meios de prova em direito admitidos, notadamente pela juntada dos títulos executivos protestados, notas fiscais e comprovantes de entrega de mercadorias.

Dá-se à causa o valor de R$ 95.000,00 (noventa e cinco mil reais).

Termos em que,
Pede e espera deferimento.

Comarca/UF, data...
ADVOGADO(A)...
OAB/... nº ..."""
  },
  {
    "id": "dissolucao-parcial-empresarial",
    "title": "Ação de Dissolução Parcial de Sociedade Limitada com Apuração de Haveres",
    "area": "Direito Empresarial",
    "subject": "Petições Iniciais",
    "legalBasis": "Arts. 599 a 609 do Código de Processo Civil; Arts. 1.028 a 1.031 do Código Civil.",
    "legalDeadlines": "Prazo de resposta de 15 dias para os réus manifestarem expressa e unânime concordância ou contestarem o feito.",
    "jurisdiction": "Vara Cível ou Especializada em Direito Empresarial do foro da sede da sociedade empresária.",
    "overview": "A Ação de Dissolução Parcial de Sociedade visa formalizar a saída do sócio dissidente (direito de recesso/retirada) ou em virtude de falecimento/exclusão, preservando a pessoa jurídica e procedendo à apuração dos haveres societários mediante balanço especial de determinação avaliado a valor de mercado.",
    "structureGuide": [
      {
        "step": "1. Endereçamento",
        "description": "Endereçar ao Juiz da Vara Cível/Empresarial da comarca da sede social.",
        "practicalTip": "EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA ... VARA CÍVEL E EMPRESARIAL DA COMARCA DE ..."
      },
      {
        "step": "2. Litisconsórcio Passivo Obrigatório",
        "description": "Colocar no polo passivo a sociedade e todos os demais sócios remanescentes (art. 601 do CPC/15).",
        "practicalTip": "A sociedade e os sócios são litisconsortes passivos necessários."
      },
      {
        "step": "3. Notificação Prévia de Retirada",
        "description": "Demonstrar a notificação prévia de exercício do direito de retirada (art. 1.029 do Código Civil).",
        "practicalTip": "Provar que decorreu o prazo de 60 dias da notificação extrajudicial."
      },
      {
        "step": "4. Apuração de Haveres a Valor de Saída",
        "description": "Requerer a realização de balanço especial de determinação pelo critério do valor de mercado (art. 606 do CPC/15).",
        "practicalTip": "Pleitear o pagamento da quota liquidada na forma do contrato social ou em 90 dias (art. 1.031, § 2º, CC)."
      }
    ],
    "caseScenario": {
      "title": "Caso Prático 2ª Fase OAB Empresarial",
      "problemStatement": "Roberto é titular de 30% das quotas da sociedade Ômega Soluções em Tecnologia Ltda., constituída por tempo indeterminado. Diante da quebra irremediável da affectio societatis com seus outros dois sócios, notificou formalmente a sociedade e consócios de sua retirada imotivada nos moldes do art. 1.029 do Código Civil. Transcorridos 60 dias, os demais sócios recusam-se a averbar a alteração na Junta Comercial e não realizam o balanço especial de liquidação das quotas.",
      "clientNeeds": "Promover Ação de Dissolução Parcial de Sociedade cumulada com Apuração de Haveres em face da Sociedade e dos demais sócios para declaração da dissolução parcial e liquidação da quota patrimonial."
    },
    "fullDraft": """EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA ... VARA CÍVEL E EMPRESARIAL DA COMARCA DE ...

ROBERTO, brasileiro, casado, empresário, portador da cédula de identidade RG nº ..., inscrito no CPF sob o nº ..., residente e domiciliado na Rua ..., nº ..., Bairro ..., Cidade/UF, CEP ..., com endereço eletrônico ..., por seu procurador infra-assinado, com instrumento de mandato anexo e escritório profissional localizado na Rua ..., onde recebe notificações e intimações de estilo, vem, respeitosamente, perante este insigne Juízo, com fulcro nos artigos 599 a 609 do Código de Processo Civil e artigos 1.028 a 1.031 do Código Civil, ajuizar a presente

AÇÃO DE DISSOLUÇÃO PARCIAL DE SOCIEDADE C/C APURAÇÃO DE HAVERES

em face de:
1. ÔMEGA SOLUÇÕES EM TECNOLOGIA LTDA., pessoa jurídica de direito privado, inscrita no CNPJ sob o nº ..., com sede na Rua ..., nº ..., Bairro ..., nesta Comarca/UF, CEP ...;
2. CARLOS, brasileiro, solteiro, empresário, inscrito no CPF sob o nº ..., residente e domiciliado na Rua ..., nº ..., Cidade/UF; e
3. MARCOS, brasileiro, casado, empresário, inscrito no CPF sob o nº ..., residente e domiciliado na Rua ..., nº ..., Cidade/UF;
pelos substratos fáticos e fundamentos jurídicos doravante alinhados:

I - DOS FATOS
O Autor é sócio fundador da primeira Ré (Ômega Soluções em Tecnologia Ltda.), sendo legítimo titular de 30% (trinta por cento) do capital social subscrito e integralizado.
A sociedade em testilha foi constituída por prazo indeterminado, conforme atesta a cópia integral do Contrato Social devidamente arquivado na Junta Comercial competente (doc. 02).
Em razão de reiteradas e profundas divergências quanto às diretrizes de expansão empresarial e quebra insanável da affectio societatis, o Autor manifestou formalmente seu desinteresse na permanência do quadro social.
Dessa forma, aos ..., expediu expressa Notificação Extrajudicial de Retirada, recebida comprovadamente pela sociedade e pelos demais sócios em ..., com base no art. 1.029 do Código Civil.
Decorrido o prazo legal de 60 (sessenta) dias sem qualquer insurgência quanto ao desligamento, os Réus recusam-se a lavrar o competente aditivo contratual para registro na Junta Comercial e negam-se a promover a apuração de haveres e liquidação da quota do Autor, impondo-se a presente tutela judicial.

II - DO DIREITO
1. Do Direito de Retirada Imotivada em Sociedade por Prazo Indeterminado:
O art. 1.029 do Código Civil confere a prerrogativa inalienável de qualquer sócio dissidente retirar-se da sociedade mediante notificação aos demais sócios com antecedência mínima de 60 (sessenta) dias:
\"Art. 1.029. Além dos casos previstos na lei ou no contrato, qualquer sócio pode retirar-se da sociedade; se de prazo indeterminado, mediante notificação aos demais sócios, com antecedência mínima de sessenta dias;\"
Ninguém pode ser compelido a permanecer associado (art. 5º, XX da CF/88). Operada a notificação tempestiva, consolidou-se a resolução da sociedade em relação ao sócio retirante, cuja data-base de desligamento e fixação dos haveres corresponde ao término do sexagésimo dia seguinte ao recebimento da notificação (art. 605, II do CPC/15).

2. Da Apuração de Haveres e Critério de Mercado:
O art. 606 do Código de Processo Civil estipula expressamente que, para a apuração de haveres, o juiz nomeará perito contábil para elaboração de balanço especial de determinação, avaliando-se os ativos corpóreos e incorpóreos (inclusive aviamento e ponto) a valor de mercado / saída:
\"Art. 606. Em caso de omissão do contrato social, o juiz definirá, como critério de apuração de haveres, o valor patrimonial apurado em balanço de determinação, tomando-se por referência a data da resolução e avaliando-se os bens e direitos do ativo, tangíveis e intangíveis, a preço de saída, além do passivo também a ser apurado de igual forma.\"
Uma vez apurado o saldo da quota patrimonial de 30%, impõe-se a condenação solidária ao pagamento no prazo legal, acrescido de correção monetária e juros de mora legais (art. 608 do CPC).

III - DOS PEDIDOS
Ex positis, requer o Autor:
a) A CITAÇÃO da sociedade e dos sócios corréus para, querendo, manifestarem expressa e unânime concordância com a dissolução parcial da sociedade, hipótese em que o processo seguirá apenas para a liquidação dos haveres sem honorários (art. 603, § 1º do CPC/15), ou oferecerem contestação no prazo de 15 (quinze) dias;
b) Ao final, seja julgada PROCEDENTE a presente demanda para:
   b.1) DECLARAR DISSOLVIDA PARCIALMENTE a sociedade Ré em relação ao sócio Autor, fixando como data-base de resolução o sexagésimo dia após a notificação (...), determinando-se a expedição de mandado à Junta Comercial do Estado para a devida averbação;
   b.2) NOMEAR perito contábil para proceder à liquidação da quota do Autor (30%) por meio de Balanço Especial de Determinação a preço de saída nos termos do art. 606 do CPC/15;
   b.3) CONDENAR os Réus ao pagamento da integralidade dos haveres apurados em favor do Autor, corrigidos monetariamente a partir da data da resolução e acrescidos de juros moratórios legais a partir da citação;
c) A condenação dos Réus no ônus da sucumbência e honorários advocatícios (art. 85, § 2º do CPC);
d) A produção de provas por todos os meios em direito admitidos, notadamente perícia contábil, juntada de documentos e oitiva de testemunhas.

Dá-se à causa o valor provisório de R$ 150.000,00 (cento e cinquenta mil reais).

Termos em que,
Pede e espera deferimento.

Comarca/UF, data...
ADVOGADO(A)...
OAB/... nº ..."""
  },
  {
    "id": "renovatoria-locacao-empresarial",
    "title": "Ação Renovatória de Locação Empresarial com Pedido Fixatório",
    "area": "Direito Empresarial",
    "subject": "Petições Iniciais",
    "legalBasis": "Arts. 51 e 71 da Lei nº 8.245/1991 (Lei do Inquilinato); Súmulas 482 e 59 do STF.",
    "legalDeadlines": "Prazo decadencial estrito: deve ser ajuizada no interregno entre 1 ano e 6 meses antes do término do contrato a renovar (art. 51, § 5º da Lei 8.245/91).",
    "jurisdiction": "Vara Cível da Comarca de localização do imóvel locado (art. 58, II da Lei 8.245/91 - foro da situação da coisa).",
    "overview": "A Ação Renovatória protege o ponto comercial e o aviamento construído pelo empresário locatário. Exige contrato escrito por prazo determinado de no mínimo 5 anos (ou soma ininterrupta) e exploração do mesmo ramo mercantil há pelo menos 3 anos consecutivos, com comprovação do fiel cumprimento de todas as obrigações locatícias.",
    "structureGuide": [
      {
        "step": "1. Tempestividade Decadencial",
        "description": "Comprovar que a ação é proposta no prazo improrrogável entre 1 ano e 6 meses antes do fim do contrato vigente.",
        "practicalTip": "A perda desse prazo acarreta a perda definitiva do direito à renovação compulsória."
      },
      {
        "step": "2. Demonstração dos Três Requisitos Cumulativos",
        "description": "Art. 51, I, II e III da Lei 8.245/91: contrato escrito, 5 anos de locação e 3 anos ininterruptos no mesmo ramo.",
        "practicalTip": "Juntar contratos primitivos e aditivos sequenciais demonstrando a continuidade da locação."
      },
      {
        "step": "3. Requisitos Especiais da Petição Inicial (Art. 71)",
        "description": "Comprovar quitação dos aluguéis e impostos (IPTU/condomínio), indicação das novas condições e fiador.",
        "practicalTip": "Se mantido o mesmo fiador, juntar declaração deste com outorga conjugal e certidão de bens imóveis."
      },
      {
        "step": "4. Proposta de Aluguel e Pedido de Arbitramento",
        "description": "Indicar o valor do novo aluguel de acordo com o valor de mercado com base em laudo prévio.",
        "practicalTip": "Requerer a fixação provisória ou perícia avaliatória judicial."
      }
    ],
    "caseScenario": {
      "title": "Caso Prático OAB 2ª Fase Empresarial",
      "problemStatement": "A Livraria e Café Cultural Ltda. loca imóvel não residencial do proprietário Paulo há 7 anos ininterruptos, com contratos escritos sequenciais de prazo determinado. O último contrato findará em 31/12/2026. A empresa explora o mesmo ramo cultural desde o início e está em dia com aluguéis, IPTU e seguro contra incêndio. Faltando 8 meses para o término do prazo contratual, Paulo recusa-se a renovar extrajudicialmente.",
      "clientNeeds": "Elaborar a Petição Inicial de Ação Renovatória de Locação Empresarial para assegurar a renovação compulsória por mais 5 anos, preservando o ponto comercial e o fundo de comércio."
    },
    "fullDraft": """EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA ... VARA CÍVEL DA COMARCA DE ...

LIVRARIA E CAFÉ CULTURAL LTDA., pessoa jurídica de direito privado, inscrita no CNPJ sob o nº ..., com sede no imóvel locado situado na Rua ..., nº ..., Bairro ..., nesta Cidade/UF, CEP ..., endereço eletrônico ..., representada por seu sócio-administrador ..., brasileiro, casado, empresário, inscrito no CPF sob o nº ..., por seu patrono infra-assinado, com procuração em anexo, com escritório profissional estabelecido na Rua ..., vem, mui respeitosamente, perante Vossa Excelência, com esteio nos artigos 51 e 71 da Lei Federal nº 8.245/1991 (Lei do Inquilinato) e artigos 319 e 320 do Código de Processo Civil, ajuizar a vertente

AÇÃO RENOVATÓRIA DE LOCAÇÃO EMPRESARIAL C/C FIXAÇÃO DE ALUGUEL

em face de PAULO, brasileiro, casado, proprietário, inscrito no CPF sob o nº ..., residente e domiciliado na Rua ..., nº ..., Bairro ..., nesta Cidade/UF, CEP ..., pelos fatos e fundamentos a seguir delineados:

I - DA COMPETÊNCIA E DO PRAZO DECADENCIAL TEMPESTIVO
A presente ação é proposta perante o d. Juízo do foro da situação do imóvel locado, em estrita subserviência ao art. 58, inciso II da Lei nº 8.245/1991.
Ademais, no tocante à tempestividade, o contrato locatício em vigor tem seu termo final previsto para 31/12/2026.
O art. 51, § 5º da Lei de Locações preconiza que o direito à renovação decai se não for pleiteado no interregno de 1 (um) ano a 6 (seis) meses antes da finalização do contrato. Ajuizada a presente demanda em ..., a propositura operou-se com perfeita obediência ao prazo legal.

II - DO PREENCHIMENTO DOS REQUISITOS CUMULATIVOS DO ART. 51 DA LEI 8.245/91
A Autora atende a todos os requisitos substanciais estatuídos nos incisos do art. 51:
a) Contrato escrito com prazo determinado (inciso I): a relação locatícia sempre foi instrumentalizada por meio de contratos escritos, acostando-se o contrato originário e aditivos (docs. 03/05);
b) Prazo mínimo ininterrupto de 5 anos (inciso II): a Autora ocupa ininterruptamente o prédio há mais de 7 (sete) anos mediante sucessão de instrumentos válidos;
c) Exploração do mesmo ramo mercantil há mais de 3 anos (inciso III): a Autora atua continuadamente no ramo de comércio de livros, papelaria e cafeteria gourmet desde a inauguração da loja no local, gerando expressivo aviamento e fixação de clientela no ponto comercial.

III - DO ATENDIMENTO AOS REQUISITOS DO ART. 71 DA LEI 8.245/91
1. Prova do exato cumprimento das obrigações contratuais (incisos I e II): a Autora junta comprovantes de quitação de todos os aluguéis vencidos, bem como guias de pagamento do IPTU, tarifas e da apólice de seguro contra incêndio devidamente quitada (docs. anexo);
2. Proposta clara de renovação (inciso III): propõe-se a renovação da locação pelo prazo de 5 (cinco) anos, iniciando-se em 01/01/2027 e findando em 31/12/2031, mantidas as cláusulas contratuais primitivas;
3. Fixação do aluguel em patamar de mercado: propõe-se o valor locatício mensal de R$ 8.500,00 (oito mil e quinhentos reais), plenamente condizente com a média mercadológica da região, conforme laudo prévio de avaliação mercadológica subscrito por corretor credenciado no CRECI (doc. anexo);
4. Garantia Fidejussória (incisos V e VI): indica-se a manutenção do mesmo fiador do contrato primitivo, Sr. ..., que assina declaração anexa assentindo com a prorrogação da fiança com outorga conjugal de sua esposa, comprovando solvência com a certidão de propriedade de bens imóveis livres e desembaraçados (docs. anexo).

IV - DOS PEDIDOS
Diante do exposto, requer a Autora:
a) A CITAÇÃO do Réu para responder aos termos da presente ação no prazo legal, apresentando a contestação que tiver ou aceitando a proposta;
b) Ao final, seja julgada TOTALMENTE PROCEDENTE a presente demanda, decretando-se a RENOVAÇÃO COMPULSÓRIA da locação comercial referente ao imóvel situado na Rua ..., nº ..., pelo prazo de 5 (cinco) anos, a iniciar em 01/01/2027 e com término em 31/12/2031, fixando-se o aluguel mensal no valor proposto de R$ 8.500,00;
c) Caso haja divergência quanto ao valor locativo, seja determinada a realização de perícia técnica judicial imobiliária;
d) A condenação do Réu no pagamento das custas processuais e honorários advocatícios (art. 85 do CPC).

Dá-se à causa o valor de R$ 102.000,00 (doze meses de aluguel proposto, conforme art. 58, III da Lei nº 8.245/91).

Termos em que,
Pede e espera deferimento.

Comarca/UF, data...
ADVOGADO(A)...
OAB/... nº ..."""
  },
  {
    "id": "usucapiao-extraordinario-civil",
    "title": "Petição Inicial de Ação de Usucapião Extraordinário Urbano",
    "area": "Direito Civil",
    "subject": "Petições Iniciais",
    "legalBasis": "Art. 1.238 do Código Civil; Arts. 319, 320 e 246, § 3º do CPC/15.",
    "legalDeadlines": "15 anos de posse mansa, pacífica e ininterrupta (dispensando justo título e boa-fé), ou 10 anos se o possuidor tiver estabelecido no imóvel a sua moradia habitual.",
    "jurisdiction": "Vara Cível da Comarca de localização do imóvel usucapiendo (art. 47 do CPC/15 - forum rei sitae).",
    "overview": "O Usucapião Extraordinário é modo originário de aquisição da propriedade imobiliária pelo decurso do tempo. Exige a comprovação de posse mansa, pacífica, contínua e com animus domini durante o lapso temporal legalmente estabelecido, dispensando-se a existência de justo título e a boa-fé.",
    "structureGuide": [
      {
        "step": "1. Competência Absoluta Funcional",
        "description": "Endereçar ao Juiz da Vara Cível do foro da situação da coisa (art. 47 do CPC).",
        "practicalTip": "EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA ... VARA CÍVEL DA COMARCA DE ..."
      },
      {
        "step": "2. Descrição Minuciosa do Imóvel",
        "description": "Descrever com exatidão memorial descritivo, planta e confrontações exatas do bem imóvel usucapiendo.",
        "practicalTip": "Art. 246, § 3º do CPC/15 exige a citação pessoal de todos os confinantes."
      },
      {
        "step": "3. Demonstração dos Requisitos do Art. 1.238 do CC",
        "description": "Comprovar posse ininterrupta por mais de 15 anos (ou 10 com moradia habitual) sem qualquer oposição.",
        "practicalTip": "Juntar contas antigas de consumo (água, luz), guias de IPTU quitadas e testemunhas idôneas."
      },
      {
        "step": "4. Citações e Notificações Obrigatórias",
        "description": "Citar o titular do registro imobiliário, confrontantes e intimar Fazendas Públicas (União, Estado e Município).",
        "practicalTip": "Requerer a declaração do domínio e expedição de mandado para registro no CRI competente."
      }
    ],
    "caseScenario": {
      "title": "Caso Prático 2ª Fase OAB Civil",
      "problemStatement": "Antônio estabeleceu sua residência familiar em um lote de terreno urbano com área de 360 m² na comarca de Taubaté/SP desde janeiro de 2008. Construiu com recursos próprios sua casa de alvenaria onde reside com sua família até a data presente, sem interrupção nem oposição de terceiros. Pagou todos os tributos municipais e contas de concessionárias. A matrícula imobiliária consta em nome de antiga imobiliária liquidada nos anos 90.",
      "clientNeeds": "Elaborar Petição Inicial de Ação de Usucapião Extraordinário com fundamento no art. 1.238 do Código Civil c/c regras processuais do CPC/15, postulando a declaração judicial de domínio com expedição de mandado para abertura de matrícula imobiliária."
    },
    "fullDraft": """EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA ... VARA CÍVEL DA COMARCA DE ...

ANTÔNIO, brasileiro, casado, mecânico, portador do RG nº ..., inscrito no CPF sob o nº ..., endereço eletrônico ..., e sua esposa MARIA, brasileira, casada, comerciária, inscrita no CPF sob o nº ..., ambos residentes e domiciliados na Rua ..., nº ..., Bairro ..., nesta Cidade/UF, CEP ..., por seu procurador judicial constituído pelo instrumento de mandato em anexo (doc. 01), com escritório profissional sito à Rua ..., onde recebe intimações, vêm, respeitosamente, à augusta presença de Vossa Excelência, com esteio no art. 1.238, parágrafo único, do Código Civil, c/c artigos 319, 320 e 246, § 3º do Código de Processo Civil, ajuizar a presente

AÇÃO DE USUCAPIÃO EXTRAORDINÁRIO URBANO

em face de IMOBILIÁRIA PROGRESSO S/A, pessoa jurídica de direito privado inscrita no CNPJ sob o nº ..., titular registral constante na Matrícula nº ..., atualmente em local incerto e não sabido, bem como em face de eventuais terceiros interessados ausentes, incertos e não sabidos, e dos CONFINANTES abaixo especificados, pelos motivos de fato e de direito adiante expendidos:

I - DO IMÓVEL USUCAPIENDO E DA COMPETÊNCIA
O imóvel objeto da presente demanda consiste no lote de terreno urbano nº 12 da Quadra D do Loteamento ..., situado nesta Comarca/UF, com área superficial de 360,00 m², cadastrado na Prefeitura Municipal sob a inscrição imobiliária nº ..., e registrado no Oficial de Registro de Imóveis sob a Matrícula nº ... (doc. 03).
O bem é perfeitamente individualizado pela Planta Topográfica Georreferenciada e Memorial Descritivo subscritos por engenheiro agrimensor com ART quitada (docs. 04 e 05), com os seguintes limites e confrontações:
- Frente: confronta com a Rua ..., medindo 12,00 metros lineares;
- Fundos: confronta com o Lote 25 de propriedade de ..., medindo 12,00 metros;
- Lado Direito: confronta com o Lote 13 de propriedade de ..., brasileiro, residente no próprio local;
- Lado Esquerdo: confronta com o Lote 11 de propriedade de ..., brasileiro, residente no próprio local.
Tratando-se de ação que versa sobre direito real de propriedade imobiliária, a competência absoluta é deste d. Juízo do foro da situação do imóvel (art. 47 do CPC/15).

II - DA POSSE AD USUCAPIONEM E DOS FATOS
No início do ano de 2008, os Autores adentraram pacificamente no aludido lote de terreno, que então se encontrava totalmente abandonado, servindo de depósito clandestino de lixo e desprovido de qualquer posse anterior ou cerca delimitadora.
Imbuídos de inequívoco animus domini (intenção de donos), os Autores limparam o lote, ergueram muros divisórios e edificaram uma casa residencial em alvenaria com 140 m² de área construída, na qual fixaram a moradia habitual de sua família, lá residindo initerruptamente há mais de 16 (dezesseis) anos.
Ao longo de todo esse expressivo lapso temporal, os Autores exerceram a posse direta de forma contínua, mansa, pacífica, pública e sem qualquer oposição ou contestação de quem quer que fosse.
Ademais, os Autores custearam e adimpliram pontualmente todos os lançamentos do IPTU, tarifas de fornecimento de energia elétrica e abastecimento de água (comprovantes anexos com datas ininterruptas desde 2008), realizando benfeitorias indispensáveis à função socioambiental da propriedade.

III - DO DIREITO
O art. 1.238 do Código Civil consagra a usucapião extraordinária como modo originário de aquisição da propriedade:
\"Art. 1.238. Aquele que, por quinze anos, sem interrupção, nem oposição, possuir como seu um imóvel, adquire-lhe a propriedade, independentemente de título e boa-fé; podendo requerer ao juiz que assim o declare por sentença, a qual servirá de título para o registro no Cartório de Registro de Imóveis.
Parágrafo único. O prazo estabelecido neste artigo reduzir-se-á a dez anos se o possuidor houver estabelecido no imóvel a sua moradia habitual, ou nele realizado obras ou serviços de caráter produtivo.\"
Na presente hipótese, convergem com clareza solar todos os pressupostos materiais:
a) Posse mansa, pacífica e contínua há mais de 16 anos (ultrapassando até mesmo o prazo geral de 15 anos e o especial de 10 anos de moradia habitual);
b) Animus domini comprovado pelos atos possessórios inequívocos e pagamento dos tributos;
c) Desnecessidade de comprovação de justo título ou boa-fé subjetiva, por expressa disposição da lei material.
Preenchidos todos os pressupostos, a sentença declaratória de usucapião operará efeitos ex tunc, conferindo a plena titularidade dominial aos Autores.

IV - DOS PEDIDOS
Isto posto, requerem os Autores a Vossa Excelência:
a) A concessão dos benefícios da GRATUIDADE DA JUSTIÇA, por serem pessoas economicamente hipossuficientes (art. 98 do CPC/15);
b) A CITAÇÃO da titular registral do imóvel constante na matrícula (Imobiliária Progresso S/A) por carta ou, restando infrutífera, por Edital com base no art. 256 do CPC;
c) A CITAÇÃO PESSOAL de todos os confinantes indicados na qualificação desta exordial, bem como de seus cônjuges (art. 246, § 3º do CPC/15);
d) A CITAÇÃO POR EDITAL dos eventuais interessados ausentes, incertos ou desconhecidos (art. 259, III do CPC/15);
e) A INTIMAÇÃO por via postal dos representantes da FAZENDA PÚBLICA DA UNIÃO, DO ESTADO E DO MUNICÍPIO, para que manifestem eventual interesse na causa;
f) A intimação do digno representante do Ministério Público;
g) Ao final, seja julgada TOTALMENTE PROCEDENTE a presente ação para DECLARAR O DOMÍNIO dos Autores sobre o imóvel usucapiendo pormenorizado no memorial descritivo, expedindo-se o competente MANDADO DE REGISTRO ao Oficial de Registro de Imóveis da Comarca para abertura de matrícula imobiliária própria em nome dos Autores.

Protesta provar o alegado por todos os meios de prova em direito admitidos, especialmente oitiva de testemunhas em audiência de instrução, perícia topográfica de constatação e juntada de novos documentos.

Dá-se à causa o valor de R$ 180.000,00 (valor venal do imóvel perante o cadastro municipal).

Termos em que,
Pedem e esperam deferimento.

Comarca/UF, data...
ADVOGADO(A)...
OAB/... nº ..."""
  },
  {
    "id": "embargos-terceiro-civil",
    "title": "Embargos de Terceiro Cível com Pedido Liminar de Manutenção de Posse",
    "area": "Direito Civil",
    "subject": "Defesas & Respostas",
    "legalBasis": "Arts. 674 a 681 do Código de Processo Civil; Súmula 84 do Superior Tribunal de Justiça.",
    "legalDeadlines": "Podem ser opostos a qualquer tempo no processo de conhecimento antes do trânsito em julgado e, no cumprimento de sentença ou execução, até 5 dias após a arrematação, adjudicação ou remição, mas sempre antes da assinatura da respectiva carta (art. 675 do CPC).",
    "jurisdiction": "Juízo que ordenou a constrição indevida, distribuído por dependência aos autos da ação executiva principal (art. 676 do CPC/15).",
    "overview": "Os Embargos de Terceiro destinam-se a defender a posse ou propriedade de terceiro de boa-fé que, não sendo parte no processo, sofre ato de constrição judicial indevida (penhora, arresto, sequestro). A Súmula 84 do STJ confere legitimidade ativa ao adquirente possuidor com base em promessa de compra e venda desprovida de registro imobiliário.",
    "structureGuide": [
      {
        "step": "1. Endereçamento por Dependência",
        "description": "Distribuir por dependência à Vara onde tramita o processo que determinou a penhora (art. 676 do CPC).",
        "practicalTip": "EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA ... VARA CÍVEL DA COMARCA DE ..."
      },
      {
        "step": "2. Demonstração da Qualidade de Terceiro e Posse Legítima",
        "description": "Comprovar que o embargante não participou da lide e que detém posse justa anterior à penhora.",
        "practicalTip": "Invocar com ênfase a Súmula 84 do STJ para contratos de gaveta ou sem registro."
      },
      {
        "step": "3. Pedido Liminar de Liberação ou Manutenção (Art. 678)",
        "description": "Demonstrada sumariamente a posse, o juiz deve deferir liminarmente a suspensão das medidas constritivas.",
        "practicalTip": "Art. 678 do CPC impõe a suspensão da alienação judicial do bem embargado."
      },
      {
        "step": "4. Pedidos Finais e Levantamento da Penhora",
        "description": "Requerer a citação do embargado exequente para contestar em 15 dias e o cancelamento definitivo da penhora.",
        "practicalTip": "Pleitear a condenação do embargado nas verbas sucumbenciais se resistir à liberação do bem (Súmula 303 STJ)."
      }
    ],
    "caseScenario": {
      "title": "Caso Prático 2ª Fase OAB Civil",
      "problemStatement": "Juliana adquiriu em março de 2021 de Gustavo, por escritura particular de compromisso de compra e venda irretratável com firmas reconhecidas, um apartamento residencial onde reside com seus filhos. Não procedeu imediatamente ao registro na matrícula imobiliária por dificuldades financeiras. Em outubro de 2024, o Banco Alfa ajuizou execução de título extrajudicial contra Gustavo por dívida não quitada contraída em 2023, obtendo a penhora sobre o referido apartamento. Juliana foi surpreendida com intimação de hasta pública agendada.",
      "clientNeeds": "Elaborar Embargos de Terceiro com pedido de tutela liminar urgente de manutenção de posse e suspensão dos atos executivos sobre o bem, invocando a Súmula 84 do STJ e o art. 678 do CPC/15."
    },
    "fullDraft": """EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA ... VARA CÍVEL DA COMARCA DE ...

DISTRIBUIÇÃO POR DEPENDÊNCIA AOS AUTOS DA EXECUÇÃO DE TÍTULO EXTRAJUDICIAL Nº ...

JULIANA, brasileira, divorciada, servidora pública, inscrita no CPF sob o nº ..., portadora do RG nº ..., endereço eletrônico ..., residente e domiciliada na Rua ..., nº ..., apto. 42, Edifício ..., nesta Cidade/UF, CEP ..., por seu advogado subscrito, constituído nos termos do instrumento de procuração anexo (doc. 01), com endereço profissional na Rua ..., onde recebe intimações, vem, com o devido acatamento, perante Vossa Excelência, com fulcro nos artigos 674 a 681 do Código de Processo Civil e Súmula 84 do Superior Tribunal de Justiça, opor os presentes

EMBARGOS DE TERCEIRO COM PEDIDO LIMINAR DE SUSPENSÃO DE CONSTRIÇÃO

em face de BANCO ALFA S/A, instituição financeira de direito privado, inscrita no CNPJ sob o nº ..., com sede na Avenida ..., nº ..., Cidade/UF, exequente nos autos da Ação de Execução de Título Extrajudicial acima referenciada, movida em desfavor de GUSTAVO, pelos motivos fáticos e jurídicos que passa a expor:

I - DO CABIMENTO E DISTRIBUIÇÃO POR DEPENDÊNCIA
Nos termos do art. 674 do CPC, quem, não sendo parte no processo, sofrer constrição ou ameaça de constrição sobre bens que possua ou sobre os quais tenha direito incompatível com o ato constritivo, poderá requerer seu desfazimento ou sua inibição por meio de embargos de terceiro.
Outrossim, em obediência ao art. 676 do diploma processual, os embargos são distribuídos por dependência ao juízo que ordenou a constrição e autuados em apartado.
A Embargante é terceira juridicamente estranha à lide executiva executada pelo Banco Alfa contra o executado Gustavo, sendo a real legítima proprietária e possuidora de boa-fé do bem penhorado.

II - DA TEMPESTIVIDADE
Preleciona o art. 675 do CPC que os embargos podem ser opostos a qualquer tempo no cumprimento de sentença ou no processo de execução, até 5 (cinco) dias depois da adjudicação, da alienação por iniciativa particular ou da arrematação, mas sempre antes da assinatura da respectiva carta.
No caso concreto, o bem fora apenas penhorado, encontrando-se a hasta pública designada para data futura, restando patente a tempestividade dos presentes embargos.

III - DOS FATOS E DA POSSE DE BOA-FÉ ANTERIOR À DÍVIDA
Em 15 de março de 2021, a Embargante adquiriu legitimamente de Gustavo o apartamento nº 42 do Edifício ..., matriculado sob o nº ... no Cartório de Registro de Imóveis desta Comarca, mediante Contrato Particular de Promessa de Compra e Venda com quitação integral do preço de R$ 320.000,00, conforme comprovantes bancários e reconhecimento de firmas contemporâneos (docs. 03 e 04).
Imediatamente após a celebração da transação, a Embargante imitiu-se na posse direta do imóvel residencial, onde estabeleceu a moradia própria de sua família, adimplindo com pontualidade todas as taxas de condomínio e impostos prediais (IPTU) desde então (docs. 05 e 06).
Entretanto, em outubro de 2024, o Banco Embargado ajuizou execução executiva contra o vendedor Gustavo lastreada em cédula de crédito bancário inadimplida no ano de 2023 (ou seja, contraída mais de 2 anos após a venda do bem).
Nos referidos autos executivos, o Embargado postulou e obteve a penhora daquele apartamento ao constatar que o registro imobiliário ainda figurava em nome do executado Gustavo, culminando na designação iminente de leilão judicial.

IV - DO DIREITO E DA APLICAÇÃO DA SÚMULA 84 DO STJ
O art. 674, § 1º do CPC/15 assegura expressamente a defesa da posse pelo terceiro possuidor:
\"§ 1º Os embargos podem ser de terceiro proprietário, inclusive fiduciário, ou possuidor.\"
Ressalte-se que a ausência de registro formal do contrato de compra e venda no fólio real não é óbice à defesa possessória contra credor do alienante, ex vi da consagrada Súmula nº 84 do Superior Tribunal de Justiça:
\"Súmula 84 do STJ: É admissível a oposição de embargos de terceiro fundados em alegação de posse advinda do compromisso de compra e venda de imóvel, ainda que desprovido do registro.\"
A aquisição operou-se anos antes da constituição do débito executado, demonstrando de forma irretorquível a absoluta boa-fé da Embargante e a inexistência de fraude à execução (Súmula 375 do STJ).

V - DA MEDIDA LIMINAR DE SUSPENSÃO DA EXECUÇÃO SOBRE O BEM (ART. 678 DO CPC)
Estando suficientemente demonstrada a qualidade de terceira e a posse justa exercida pela Embargante, o art. 678 do CPC impõe a concessão da tutela liminar para determinar a suspensão imediata dos atos de expropriação sobre o imóvel:
\"Art. 678. A decisão que reconhecer suficientemente provada a posse determinará a suspensão das medidas constritivas sobre os bens litigiosos objeto dos embargos, bem como a manutenção ou a reintegração provisória na posse, se o embargante a houver requerido e oferecido caução, da qual poderá ser dispensado se não puder prestá-la.\"
O perigo da demora é evidente, haja vista a iminência de alienação em praça pública de bem de família da Embargante.

VI - DOS PEDIDOS
Por todo o exposto, requer a Embargante se digne Vossa Excelência a:
a) Conceder, inaudita altera parte, a MEDIDA LIMINAR de manutenção da Embargante na posse do imóvel penhorado, determinando a IMEDIATA SUSPENSÃO de todos os atos constritivos e expropriatórios nos autos da Execução nº ..., notadamente cancelando a hasta pública designada (art. 678 do CPC);
b) A citação do Embargado, na pessoa de seu patrono constituído nos autos principais da execução (art. 677, § 3º do CPC), para que, querendo, apresente contestação no prazo de 15 (quinze) dias;
c) Ao final, julgar TOTALMENTE PROCEDENTES os presentes Embargos de Terceiro, confirmando a liminar e DETERMINANDO O DEFINITIVO LEVANTAMENTO DA PENHORA incidente sobre o apartamento nº 42 do Edifício ..., expedindo-se o competente mandado de cancelamento de penhora ao Cartório de Registro de Imóveis;
d) A condenação do Embargado nas custas e despesas processuais, bem como em honorários advocatícios sucumbenciais (art. 85, § 2º do CPC e Súmula 303 do STJ);
e) A concessão dos benefícios da Justiça Gratuita, ante a declaração de hipossuficiência anexa.

Protesta provar o alegado por todos os meios em direito permitidos, notadamente prova documental e testemunhal.

Dá-se à causa o valor de R$ 320.000,00 (valor do bem penhorado objeto da constrição).

Termos em que,
Pede e espera deferimento.

Comarca/UF, data...
ADVOGADO(A)...
OAB/... nº ..."""
  }
]

# Read existing legalBriefs.ts
with open('src/data/legalBriefs.ts', 'r', encoding='utf-8') as f:
    text = f.read()

prefix = 'export const LEGAL_BRIEFS: LegalBrief[] = '
data_str = text.split(prefix)[1].strip()
if data_str.endswith(';'):
    data_str = data_str[:-1]

briefs = json.loads(data_str)

# Remove any existing versions of these new brief ids if present
new_ids = {b['id'] for b in new_briefs}
briefs = [b for b in briefs if b['id'] not in new_ids]

# Append new briefs
briefs.extend(new_briefs)

print(f"Total legal briefs after addition: {len(briefs)}")

with open('src/data/legalBriefs.ts', 'w', encoding='utf-8') as f:
    f.write("import { LegalBrief } from '../types';\n\nexport const LEGAL_BRIEFS: LegalBrief[] = ")
    f.write(json.dumps(briefs, ensure_ascii=False, indent=2))
    f.write(";\n")

print("Successfully written updated legal briefs to src/data/legalBriefs.ts!")
