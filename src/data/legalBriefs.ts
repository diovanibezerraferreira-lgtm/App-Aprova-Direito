import { LegalBrief } from '../types';

export const LEGAL_BRIEFS: LegalBrief[] = [
  {
    id: 'queixa-crime',
    title: 'Queixa-Crime',
    area: 'Direito Penal',
    legalBasis: 'Art. 100, § 2º, do CP; Arts. 30 e 41 do CPP; Art. 44 do CPP (procuração com poderes especiais).',
    legalDeadlines: '6 (seis) meses a contar do dia em que o querelante veio a saber quem é o autor do fato (art. 38 do CPP e art. 103 do CP - prazo decadencial).',
    jurisdiction: 'Vara Criminal da Comarca ou Juizado Especial Criminal (JECRIM) se infração de menor potencial ofensivo.',
    overview:
      'A Queixa-Crime é a petição inicial da ação penal de iniciativa privada (exclusiva ou subsidiária da pública). Exige rigor técnico na descrição minuciosa do fato com todas as suas circunstâncias e obrigatoriamente procuração com poderes especiais (art. 44 do CPP), sob pena de decadência.',
    structureGuide: [
      {
        step: '1. Endereçamento e Distribuição',
        description: 'Endereçar ao Juiz de Direito da Vara Criminal da Comarca onde se consumou o delito ou Juizado Especial Criminal.',
        practicalTip: 'EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA ... VARA CRIMINAL DA COMARCA DE ...'
      },
      {
        step: '2. Qualificação das Partes e Procuração',
        description: 'Qualificar detalhadamente o querelante e o querelado. Mencionar expressamente o instrumento de mandato com poderes especiais (art. 44 do CPP).',
        practicalTip: 'Fazer menção expressa de que o advogado junta instrumento procuratório com poderes especiais.'
      },
      {
        step: '3. Dos Fatos',
        description: 'Narrar de forma cronológica, com dia, hora, local exato e as palavras ou condutas praticadas pelo querelado.',
        practicalTip: 'Demonstrar de pronto a tempestividade (data do conhecimento da autoria).'
      },
      {
        step: '4. Do Direito e Tipificação',
        description: 'Enquadrar a conduta nos artigos do Código Penal (calúnia, difamação, injúria, etc.), demonstrando a presença do animus caluniandi/diffamandi/injuriandi.',
        practicalTip: 'Indicar as causas de aumento de pena (ex.: art. 141 do CP).'
      },
      {
        step: '5. Dos Pedidos e Rol de Testemunhas',
        description: 'Requerer o recebimento da queixa, citação do querelado, intervenção do MP como custos legis, condenação e fixação de indenização civil mínima (art. 387, IV, CPP).',
        practicalTip: 'Apresentar rol de testemunhas (até 3 no rito sumário/JECRIM, até 8 no ordinário).'
      }
    ],
    caseScenario: {
      title: 'Caso Hipotético FGV 2ª Fase Penal',
      problemStatement:
        'Em 10 de maio de 2026, na cidade de São Paulo/SP, Carlos, durante assembleia de condomínio aberta transmitida por videoconferência com 40 moradores, dirigiu-se a Roberto, síndico eleito, afirmando: "Você é um desonesto, embolsou R$ 50.000,00 da conta do condomínio para comprar um carro particular!". A acusação era inverídica e Carlos sabia da falsidade. Roberto tomou conhecimento no mesmo dia e o procurou para adotar a medida judicial cabível.',
      clientNeeds: 'Redigir a Queixa-Crime cabível imputando o crime de calúnia circunstanciada pela presença de várias pessoas.'
    },
    fullDraft: `EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA ... VARA CRIMINAL DA COMARCA DA CAPITAL / SP

ROBERTO, brasileiro, casado, administrador de empresas, portador da cédula de identidade RG nº ..., inscrito no CPF/MF sob o nº ..., residente e domiciliado na Rua ..., nº ..., Bairro ..., São Paulo/SP, por seu advogado infra-assinado, com procuração com poderes especiais em anexo, outorgada nos exatos termos do art. 44 do Código de Processo Penal, vem, respeitosamente, perante Vossa Excelência, oferecer

QUEIXA-CRIME

em face de CARLOS, brasileiro, solteiro, engenheiro, portador do RG nº ..., inscrito no CPF nº ..., residente e domiciliado na Rua ..., nº ..., São Paulo/SP, com fundamento no art. 100, § 2º, do Código Penal, e arts. 30 e 41 do Código de Processo Penal, pelos fatos e fundamentos jurídicos a seguir expostos:

I - DA TEMPESTIVIDADE E DA PROCURAÇÃO COM PODERES ESPECIAIS
O querelante tomou conhecimento da autoria delitiva no dia 10 de maio de 2026, restando plenamente tempestiva a presente queixa, nos termos do art. 38 do Código de Processo Penal.
Instrui a presente a necessária procuração com menção expressa ao fato criminoso e com poderes especiais, na forma do art. 44 do CPP.

II - DOS FATOS
No dia 10 de maio de 2026, por volta das 19h30min, durante a assembleia geral ordinária do Condomínio Edifício Solar, realizada de forma híbrida e transmitida simultaneamente a mais de 40 (quarenta) condôminos, o querelado CARLOS, com nítido dolo de ofender e imputar falsamente crime, vociferou contra o querelante:
"Você é um desonesto, embolsou R$ 50.000,00 da conta do condomínio para comprar um carro particular!".
O fato imputado é manifestamente falso, sabendo o querelado que Roberto jamais desviou quaisquer valores da coletividade.

III - DO DIREITO
A conduta do querelado subsume-se formal e materialmente ao tipo penal previsto no art. 138, caput, do Código Penal (calúnia), praticado com a causa de aumento de pena do art. 141, inciso III, do Código Penal, por ter sido perpetrado na presença de várias pessoas por meio que facilitou a divulgação da ofensa.
Presente o elemento subjetivo do tipo (animus caluniandi), imperiosa a instauração da persecução penal.

IV - DOS PEDIDOS
Ante o exposto, requer o querelante:
a) O recebimento e processamento da presente Queixa-Crime;
b) A intimação do ilustre membro do Ministério Público para intervir como fiscal da ordem jurídica;
c) A citação do querelado para responder aos termos da presente ação penal e para os demais atos processuais;
d) A procedência integral do pedido, com a condenação do querelado nas penas do art. 138 c/c art. 141, III, do Código Penal;
e) A fixação de valor mínimo para a reparação dos danos morais causados pela infração, com fulcro no art. 387, inciso IV, do CPP;
f) A condenação do querelado nas custas processuais e honorários advocatícios sucumbenciais.

Protesta provar o alegado por todos os meios de prova admitidos em direito, em especial pela oitiva das testemunhas abaixo arroladas.

Nestes termos,
Pede deferimento.

Local ..., Data ...
Advogado ...
OAB/... nº ...

ROL DE TESTEMUNHAS:
1. ..., RG ..., CPF ..., residente em ...
2. ..., RG ..., CPF ..., residente em ...`
  },
  {
    id: 'resposta-acusacao',
    title: 'Resposta à Acusação',
    area: 'Direito Penal',
    legalBasis: 'Arts. 396 e 396-A do Código de Processo Penal.',
    legalDeadlines: '10 (dez) dias corridos a contar da citação do acusado (art. 396 do CPP).',
    jurisdiction: 'Juiz de Direito da Vara Criminal ou Juiz Federal competente que recebeu a denúncia/queixa.',
    overview:
      'Primeira peça defensiva formal após a citação. É a oportunidade primordial para buscar a absolvição sumária do acusado com base no art. 397 do CPP (excludente de ilicitude, excludente de culpabilidade, atipicidade formal/material ou extinção da punibilidade), arguir preliminares e arrolar testemunhas sob pena de preclusão.',
    structureGuide: [
      {
        step: '1. Endereçamento',
        description: 'Ao juízo criminal que determinou a citação e perante o qual tramita o processo.',
        practicalTip: 'EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA ... VARA CRIMINAL DA COMARCA DE ...'
      },
      {
        step: '2. Qualificação e Fundamento',
        description: 'Qualificação do réu já citado, fundamentando no art. 396 e 396-A do CPP.',
        practicalTip: 'Mencionar: "...já qualificado nos autos da ação penal sob o número em epígrafe..."'
      },
      {
        step: '3. Preliminares Processuais',
        description: 'Alegar nulidades (art. 564 do CPP), inépcia da denúncia (art. 41 do CPP) ou falta de justa causa.',
        practicalTip: 'Focar na inépcia se a denúncia não individualizou a conduta.'
      },
      {
        step: '4. Do Mérito e Tese de Absolvição Sumária',
        description: 'Demonstrar cabalmente uma das hipóteses do art. 397 do CPP (atipicidade, insignificância, legítima defesa comprovada de plano, prescrição).',
        practicalTip: 'Pedir expressamente a absolvição sumária pelo inciso adequado do art. 397 do CPP.'
      },
      {
        step: '5. Pedidos e Rol de Testemunhas',
        description: 'Requerer acolhimento das preliminares ou absolvição sumária (art. 397, CPP); subsidiariamente a produção de provas e oitiva das testemunhas.',
        practicalTip: 'Obrigatoriamente apresentar o rol de testemunhas com qualificação completa.'
      }
    ],
    caseScenario: {
      title: 'Caso Hipotético FGV 2ª Fase Penal',
      problemStatement:
        'Lucas foi denunciado pelo crime de furto simples (art. 155 do CP) por ter subtraído um pacote de sabão em pó avaliado em R$ 12,00 de um grande supermercado, tendo a coisa sido restituída de imediato. Lucas é primário e tem bons antecedentes. Citado regularmente, contratou você como advogado no nono dia.',
      clientNeeds: 'Redigir a Resposta à Acusação pleiteando a absolvição sumária pelo princípio da insignificância.'
    },
    fullDraft: `EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA ... VARA CRIMINAL DA COMARCA DE ...

Processo nº ...

LUCAS, já qualificado nos autos da presente Ação Penal que lhe move o MINISTÉRIO PÚBLICO DO ESTADO ..., por seu advogado constituído, vem, respeitosamente, à presença de Vossa Excelência, com fulcro nos artigos 396 e 396-A do Código de Processo Penal, apresentar

RESPOSTA À ACUSAÇÃO

pelos motivos fáticos e jurídicos a seguir delineados:

I - DA TEMPESTIVIDADE
O acusado foi citado regularmente no dia ..., iniciando-se a contagem do decêndio legal no primeiro dia útil subsequente. Logo, a presente resposta é tempestiva.

II - BREVE SÍNTESE DOS FATOS
O denunciado foi acusado da prática do crime previsto no art. 155, caput, do Código Penal, porque teria supostamente subtraído um pacote de sabão em pó avaliado no valor irrisório de R$ 12,00 (doze reais) de um estabelecimento comercial atacadista. O bem foi de imediato restituído sem qualquer dano ou prejuízo ao patrimônio da vítima.

III - DO MÉRITO: DA ATIPICIDADE MATERIAL DA CONDUTA PELO PRINCÍPIO DA INSIGNIFICÂNCIA
Consoante pacificado pelo Pleno do Supremo Tribunal Federal (HC 84.412/SP) e pelo Superior Tribunal de Justiça, a incidência do princípio da insignificância pressupõe: a) mínima ofensividade da conduta; b) ausência de periculosidade social da ação; c) reduzidíssimo grau de reprovabilidade do comportamento; e d) inexpressividade da lesão jurídica provocada.
O bem tutelado ostenta valor de apenas R$ 12,00, totalmente inexpressivo frente ao faturamento da empresa vítima, além de ter sido prontamente recuperado.
Trata-se de hipótese cristalina de exclusão da tipicidade material, gerando a atipicidade do fato narrado.

IV - DOS PEDIDOS
Ante o exposto, requer a Vossa Excelência:
a) A ABSOLVIÇÃO SUMÁRIA do acusado LUCAS, com fulcro no art. 397, inciso III, do Código de Processo Penal, diante da manifesta atipicidade material do fato em razão do princípio da insignificância;
b) Subsidiariamente, caso não seja esse o entendimento de Vossa Excelência, requer a produção de todas as provas em direito admitidas, especialmente o depoimento das testemunhas abaixo arroladas.

Nestes termos,
Pede deferimento.

Local ..., Data ...
Advogado ...
OAB/... nº ...

ROL DE TESTEMUNHAS:
1. ..., qualificação ...
2. ..., qualificação ...`
  },
  {
    id: 'memoriais-penal',
    title: 'Memoriais (Alegações Finais por Memoriais)',
    area: 'Direito Penal',
    legalBasis: 'Art. 403, § 3º ou Art. 404, parágrafo único, do Código de Processo Penal.',
    legalDeadlines: '5 (cinco) dias sucessivos para defesa após vista do Ministério Público ou Querelante.',
    jurisdiction: 'Juízo que presidiu a instrução e julgamento criminal.',
    overview:
      'Última peça da fase instrutória de primeiro grau antes da sentença condenatória ou absolutória. Momento de deduzir TODAS as teses defensivas (preliminares de nulidade, mérito absolutório do art. 386 do CPP, teses subsidiárias de desclassificação, fixação de pena no mínimo legal, atenuantes, regime aberto e substituição por restritiva de direitos).',
    structureGuide: [
      {
        step: '1. Preliminares de Nulidade',
        description: 'Alegar ilicitude de provas (art. 157 CPP), ausência de laudo pericial indispensável, cerceamento de defesa.',
        practicalTip: 'Requerer a anulação do processo a partir do ato viciado (art. 564 do CPP).'
      },
      {
        step: '2. Mérito Principal (Absolvição)',
        description: 'Apontar ausência de provas (in dubio pro reo - art. 386, VII, CPP) ou prova da inocência.',
        practicalTip: 'Analisar detalhadamente cada testemunho e contradições do processo.'
      },
      {
        step: '3. Teses Subsidiárias (Dosimetria)',
        description: 'Para o caso remoto de condenação: pena-base no mínimo (art. 59 CP), atenuante da menoridade/confissão (art. 65 CP), causa de diminuição, regime prisional menos gravoso (art. 33 CP) e substituição por restritiva de direitos (art. 44 CP).',
        practicalTip: 'Nunca esqueça das teses subsidiárias em 2ª Fase OAB.'
      }
    ],
    caseScenario: {
      title: 'Caso Hipotético FGV 2ª Fase Penal',
      problemStatement:
        'Mateus foi processado pelo crime de roubo majorado pelo emprego de arma de fogo. Durante a instrução, a vítima declarou que não tinha certeza se viu uma arma de fogo e os policiais afirmaram que nenhuma arma foi apreendida ou periciada. O Ministério Público requereu a condenação nos exatos termos da denúncia. O juiz abriu prazo para memoriais escritos da defesa.',
      clientNeeds: 'Elaborar os Memoriais requerendo a absolvição por falta de provas do dolo de roubo ou, subsidiariamente, o afastamento da majorante da arma e fixação do regime aberto.'
    },
    fullDraft: `EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA ... VARA CRIMINAL DA COMARCA DE ...

Processo nº ...

MATEUS, já devidamente qualificado nos autos da ação penal que lhe move a JUSTIÇA PÚBLICA, por seu procurador firmatário, vem, perante Vossa Excelência, no prazo legal, apresentar

MEMORIAIS

com fundamento no art. 403, § 3º, do Código de Processo Penal, pelas razões de fato e de direito adiante expendidas:

I - DOS FATOS
O acusado foi denunciado como incurso nas sanções do art. 157, § 2º-A, inciso I, do Código Penal. Encerrada a instrução probatória, o Parquet pugnou pela procedência da exordial acusatória. Todavia, a prova carreada aos autos clama por desfecho inteiramente diverso.

II - DO MÉRITO: DA AUSÊNCIA DE PROVAS E IN DUBIO PRO REO
A vítima, ouvida em juízo sob o crivo do contraditório, hesitou e confirmou categoricamente que o local estava escuro e que não visualizou arma nas mãos do réu. Nenhuma arma foi apreendida ou submetida à perícia de eficiência lesiva.
Incide no caso o postulado da presunção de inocência (art. 5º, LVII, da CF/88), impondo-se a absolvição por insuficiência probatória com supedâneo no art. 386, inciso VII, do CPP.

III - SUBSIDIARIAMENTE: DO AFASTAMENTO DA MAJORANTE E DA FIXAÇÃO DA PENA
Na remota hipótese de condenação:
a) Requer o afastamento da majorante do emprego de arma de fogo, ante a ausência de apreensão e perícia e a expressa dúvida da vítima;
b) Fixação da pena-base no patamar mínimo legal, à vista da primariedade e favorabilidade das circunstâncias judiciais do art. 59 do CP;
c) Reconhecimento da atenuante da menoridade relativa (art. 65, I, do CP), por ter o réu 19 anos na data do fato;
d) Fixação de regime inicial aberto (art. 33, § 2º, "c", do CP) e concessão do direito de recorrer em liberdade.

IV - DOS PEDIDOS
Diante de todo o exposto, requer a ABSOLVIÇÃO do acusado com esteio no art. 386, inciso VII, do CPP. Subsidiariamente, o acolhimento dos pleitos benéficos na dosimetria da pena.

Pede deferimento.
Local ..., Data ...
Advogado ... OAB/... nº ...`
  },
  {
    id: 'apelacao-penal',
    title: 'Apelação Criminal',
    area: 'Direito Penal',
    legalBasis: 'Art. 593, inciso I ou II, do Código de Processo Penal.',
    legalDeadlines: 'Interposição em 5 (cinco) dias; razões recursais em 8 (oito) dias (art. 600 do CPP) ou interposição conjunta.',
    jurisdiction: 'Petição de interposição perante o Juízo a quo; razões endereçadas ao Tribunal de Justiça ou Tribunal Regional Federal (ad quem).',
    overview:
      'Recurso por excelência contra sentenças condenatórias ou absolutórias de primeiro grau e decisões com força de definitivas. Exige peça bipartida: folha de interposição para o juiz que proferiu a sentença e razões de apelação dirigidas ao Tribunal competente.',
    structureGuide: [
      {
        step: '1. Petição de Interposição (Juízo a quo)',
        description: 'Endereçada ao juiz da vara que prolatou a sentença. Conter pedido de recebimento, processamento e remessa ao Tribunal.',
        practicalTip: 'Indicar expressamente o fundamento: art. 593, I, do CPP.'
      },
      {
        step: '2. Razões de Apelação (Tribunal ad quem)',
        description: 'Endereçada ao Tribunal de Justiça / TRF competente. Conter resumo do processo, preliminares de nulidade, mérito e teses subsidiárias.',
        practicalTip: 'Usar vocativo "EGRÉGIO TRIBUNAL DE JUSTIÇA, COLENDA CÂMARA CRIMINAL, DOUTO PROCURADOR DE JUSTIÇA".'
      }
    ],
    caseScenario: {
      title: 'Caso Hipotético FGV 2ª Fase Penal',
      problemStatement:
        'Sentença penal condenatória condenou o réu por furto qualificado no período noturno sem reconhecer a atenuante da confissão espontânea alegada na defesa e fixando regime fechado unicamente com base na gravidade em abstrato do delito.',
      clientNeeds: 'Interpor apelação para reformar a dosimetria, reconhecer a confissão (Súmula 545/STJ) e fixar regime aberto (Súmula 718 e 719/STF).'
    },
    fullDraft: `[FOLHA DE INTERPOSIÇÃO]
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA ... VARA CRIMINAL DA COMARCA DE ...

Processo nº ...

RÉU, já qualificado nos autos da ação penal em epígrafe, vem, por seu advogado, tempestivamente perante Vossa Excelência, inconformado com a r. sentença condenatória de fls., interpor

RECURSO DE APELAÇÃO

com fundamento no art. 593, inciso I, do Código de Processo Penal.
Requer o recebimento do presente recurso e, após as formalidades de praxe, a remessa dos autos com as inclusas razões ao Egrégio Tribunal de Justiça do Estado de ...

Pede deferimento.
Local ..., Data ...
Advogado ... OAB/... nº ...

--------------------------------------------------------------------------------
[FOLHA DE RAZÕES]
RAZÕES DE APELAÇÃO

APELANTE: RÉU
APELADO: MINISTÉRIO PÚBLICO
ORIGEM: ... VARA CRIMINAL DA COMARCA DE ...
AUTOS Nº ...

EGRÉGIO TRIBUNAL DE JUSTIÇA,
COLENDA CÂMARA CRIMINAL,
ILUSTRE PROCURADOR DE JUSTIÇA.

I - DA TEMPESTIVIDADE E CABIMENTO
O presente recurso é tempestivo e preenche todos os requisitos intrínsecos e extrínsecos de admissibilidade recursal.

II - DAS RAZÕES DE REFORMA (MÉRITO E SUBSIDIÁRIAS)
A r. sentença merece reforma pontual. O apelante confessou espontaneamente a autoria do fato em solo judicial, sendo referida confissão utilizada pelo magistrado sentenciante para fundamentar a condenação. Logo, o réu faz jus à atenuante do art. 65, III, "d", do CP (Súmula 545 do STJ).
Outrossim, a fixação de regime prisional fechado baseou-se unicamente na gravidade abstrata do delito, violando frontalmente as Súmulas 718 e 719 do STF e Súmula 440 do STJ.

III - DOS PEDIDOS
Requer o conhecimento e o PROVIMENTO do recurso para redimensionar a pena com a aplicação da atenuante da confissão e a fixação do regime inicial aberto ou semiaberto, com substituição por PRD.

Local ..., Data ...
Advogado ... OAB/...`
  },
  {
    id: 'rese-penal',
    title: 'Recurso em Sentido Estrito (RESE)',
    area: 'Direito Penal',
    legalBasis: 'Art. 581 do Código de Processo Penal (rol taxativo).',
    legalDeadlines: '5 (cinco) dias para interposição e 2 (dois) dias para as razões (art. 586 e 588 do CPP).',
    jurisdiction: 'Petição de interposição com juízo de retratação ao juiz a quo; razões ao Tribunal ad quem.',
    overview:
      'Recurso contra decisões interlocutórias do juízo criminal previstas no rol taxativo do art. 581 do CPP (destaque absoluto para decisão de PRONÚNCIA no Tribunal do Júri - art. 581, IV, do CPP). Tem como traço essencial o efeito regressivo/juízo de retratação (art. 589 do CPP).',
    structureGuide: [
      {
        step: '1. Folha de Interposição com Juízo de Retratação',
        description: 'Conter obrigatoriamente pedido expresso de retratação do juiz a quo antes de encaminhar ao Tribunal.',
        practicalTip: 'Pugnar para que Vossa Excelência "reformule a decisão recorrida com supedâneo no art. 589 do CPP".'
      },
      {
        step: '2. Folha de Razões',
        description: 'Pleitear a despronúncia (art. 414 CPP), absolvição sumária (art. 415 CPP) ou desclassificação (art. 419 CPP).',
        practicalTip: 'Afastar qualificadoras manifestamente improcedentes.'
      }
    ],
    caseScenario: {
      title: 'Caso Hipotético FGV 2ª Fase Penal',
      problemStatement:
        'Em procedimento do Tribunal do Júri, o réu foi pronunciado por homicídio tentado qualificado pelo motivo fútil, a despeito de a prova colhida demonstrar sem dúvidas que agiu sob legítima defesa real.',
      clientNeeds: 'Interpor RESE requerendo a absolvição sumária do art. 415, IV, do CPP ou, subsidiariamente, a despronúncia.'
    },
    fullDraft: `[FOLHA DE INTERPOSIÇÃO COM JUÍZO DE RETRATAÇÃO]
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA ... VARA DO TRIBUNAL DO JÚRI DA COMARCA DE ...

Processo nº ...

RÉU, já qualificado nos autos, vem, perante Vossa Excelência, interpor

RECURSO EM SENTIDO ESTRITO (RESE)

com fulcro no art. 581, inciso IV, do Código de Processo Penal.
Requer o recebimento do recurso e que, nos termos do art. 589 do CPP, Vossa Excelência exerça o JUÍZO DE RETRATAÇÃO para reformar a respeitável decisão de pronúncia. Caso mantida, requer a remessa das razões inclusas ao Egrégio Tribunal de Justiça.

Pede deferimento.
Local ..., Data ... Advogado ... OAB/...

--------------------------------------------------------------------------------
[FOLHA DE RAZÕES DE RESE]
RAZÕES DE RECURSO EM SENTIDO ESTRITO

EGRÉGIO TRIBUNAL DE JUSTIÇA,
COLENDA CÂMARA CRIMINAL.

I - DAS RAZÕES DE MÉRITO: DA LEGÍTIMA DEFESA ESTREME DE DÚVIDAS
A instrução comprovou de forma inequívoca que o recorrente agiu amparado pela excludente da legítima defesa própria, repelindo agressão injusta com os únicos meios ao seu alcance.
Impõe-se a ABSOLVIÇÃO SUMÁRIA nos termos do art. 415, inciso IV, do Código de Processo Penal.

II - DOS PEDIDOS
Requer o provimento do presente RESE para cassar a pronúncia e absolver sumariamente o réu (art. 415, IV, CPP) ou subsidiariamente a despronúncia (art. 414 do CPP).

Local ..., Data ... Advogado ... OAB/...`
  },
  {
    id: 'reclamacao-trabalhista',
    title: 'Reclamação Trabalhista',
    area: 'Direito do Trabalho',
    legalBasis: 'Art. 840, § 1º, da CLT c/c Art. 319 do CPC.',
    legalDeadlines: 'Prazo prescricional: 2 (dois) anos após a extinção do contrato de trabalho, atingindo créditos dos últimos 5 (cinco) anos (art. 7º, XXIX, CF/88 e art. 11 da CLT).',
    jurisdiction: 'Vara do Trabalho do local da prestação de serviços (art. 651 da CLT).',
    overview:
      'Petição inicial da Justiça do Trabalho. Após a Reforma Trabalhista (Lei 13.467/17), exige pedidos certos, determinados e com indicação do valor correspondente (art. 840, § 1º, da CLT), sob pena de extinção sem resolução do mérito.',
    structureGuide: [
      {
        step: '1. Endereçamento e Qualificação',
        description: 'Vara do Trabalho competente pelo local onde o empregado laborou.',
        practicalTip: 'EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DA ... VARA DO TRABALHO DE ...'
      },
      {
        step: '2. Dados Contratuais (Admissão, Função, Salário, Demissão)',
        description: 'Indicar com exatidão a data de admissão, remuneração, função desempenhada e modalidade de rescisão.',
        practicalTip: 'Sempre elencar o histórico funcional logo após a qualificação.'
      },
      {
        step: '3. Verbas Pleiteadas com Liquidação Prévia',
        description: 'Cada verba deve conter fundamentação legal e valor estimado apurado.',
        practicalTip: 'Indicar: "...totalizando R$ X.XXX,XX".'
      },
      {
        step: '4. Pedidos, Justiça Gratuita e Honorários',
        description: 'Requerer citação da reclamada, procedência, concessão da gratuidade de justiça e honorários sucumbenciais (art. 791-A da CLT).',
        practicalTip: 'Valor da causa igual à soma de todos os pedidos liquidados.'
      }
    ],
    caseScenario: {
      title: 'Caso Hipotético FGV 2ª Fase Trabalhista',
      problemStatement:
        'Empregado trabalhou durante 2 anos como vendedor, dispensado imotivadamente sem receber o 13º salário proporcional, férias vencidas acrescidas de 1/3 e com horas extras habituais não quitadas.',
      clientNeeds: 'Redigir a Reclamação Trabalhista postulando a condenação nas verbas rescisórias e horas suplementares com pedidos liquidados.'
    },
    fullDraft: `EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DO TRABALHO DA ... VARA DO TRABALHO DE ...

RECLAMANTE, brasileiro, estado civil ..., profissão ..., portador da CTPS nº ..., RG nº ..., CPF nº ..., residente e domiciliado na Rua ..., por seu advogado subscrito, vem, perante Vossa Excelência, propor

RECLAMAÇÃO TRABALHISTA (RITO ORDINÁRIO)

em face de RECLAMADA LTDA., pessoa jurídica de direito privado, inscrita no CNPJ sob o nº ..., com sede na Rua ..., pelos motivos de fato e de direito que passa a expor:

I - DO CONTRATO DE TRABALHO
O Reclamante foi admitido aos serviços da Reclamada em 01/02/2024 para exercer as funções de vendedor, auferindo última remuneração de R$ 3.000,00 por mês. Foi dispensado imotivadamente em 10/01/2026.

II - DAS HORAS EXTRAS E REFLEXOS
O obreiro laborava de segunda a sexta-feira das 08h00 às 19h00 com 30 minutos de intervalo intrajornada, extrapolando habitualmente o limite constitucional de 8 horas diárias e 44 semanais. Faz jus ao pagamento das horas suplementares acrescidas do adicional de 50%, com reflexos em DSR, aviso prévio, férias + 1/3, 13º salário e FGTS + 40%. Valor estimado: R$ 14.500,00.

III - DAS VERBAS RESCISÓRIAS E FÉRIAS VENCIDAS
A Reclamada sonegou o pagamento das férias do período aquisitivo 2024/2025, devidas de forma simples acrescidas do terço constitucional (art. 129 e 134 da CLT). Valor: R$ 4.000,00.

IV - DOS PEDIDOS
Diante do exposto, requer a condenação da Reclamada no pagamento de:
a) Horas extras habituais e respectivos reflexos legais ... R$ 14.500,00;
b) Férias vencidas acrescidas de 1/3 constitucional ... R$ 4.000,00;
c) Concessão dos benefícios da Justiça Gratuita (art. 790, § 3º, da CLT);
d) Condenação em honorários sucumbenciais de 15% (art. 791-A da CLT) ... R$ 2.775,00.

Dá-se à causa o valor de R$ 21.275,00.
Pede deferimento. Local ..., Data ... Advogado ... OAB/...`
  },
  {
    id: 'contestacao-trabalhista',
    title: 'Contestação Trabalhista',
    area: 'Direito do Trabalho',
    legalBasis: 'Art. 847 da CLT c/c Arts. 335 a 342 do CPC.',
    legalDeadlines: 'Apresentada em audiência una ou até o início da audiência por meio do sistema PJe.',
    jurisdiction: 'Vara do Trabalho competente por onde tramita a reclamatória.',
    overview:
      'Principal peça de defesa do empregador. Deve conter matérias preliminares (inépcia, incompetência, coisa julgada), prejudiciais de mérito (prescrição quinquenal e bienal - art. 7º, XXIX, CF/88 e art. 11 da CLT) e impugnação pormenorizada de todos os fatos e verbas pleiteadas pelo autor sob pena de confissão ficta.',
    structureGuide: [
      {
        step: '1. Preliminares Processuais',
        description: 'Alegar inépcia da petição inicial (falta de liquidação ou pedidos contraditórios) ou litispendência.',
        practicalTip: 'Focar na ausência de especificação do art. 840, § 1º, da CLT.'
      },
      {
        step: '2. Prejudicial de Mérito: Prescrição Quinquenal',
        description: 'Pugnar pela extinção com resolução de mérito (art. 487, II, CPC) de todas as parcelas anteriores aos últimos 5 anos.',
        practicalTip: 'Sempre invocar o art. 7º, XXIX, da CF/88 e a Súmula 308, I, do TST.'
      },
      {
        step: '3. Mérito e Compensação/Retenção',
        description: 'Contestar item por item os fatos (cartões de ponto válidos, recibos de quitação). Pedir compensação de valores já quitados.',
        practicalTip: 'Súmula 48 do TST (a compensação deve ser arguida na contestação).'
      }
    ],
    caseScenario: {
      title: 'Caso Hipotético FGV 2ª Fase Trabalhista',
      problemStatement:
        'Reclamante cobra parcelas trabalhistas de contrato que durou 8 anos. Além disso, postula equiparação salarial com colega que exercia função com perfeição técnica superior e diferença de tempo de serviço na função superior a 2 anos.',
      clientNeeds: 'Redigir a Contestação arguindo preliminar, prescrição quinquenal e a improcedência da equiparação salarial (art. 461 da CLT).'
    },
    fullDraft: `EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DA ... VARA DO TRABALHO DE ...

Processo nº ...

RECLAMADA S/A, já qualificada nos autos da Reclamação Trabalhista proposta por RECLAMANTE, vem, por seu advogado, apresentar

CONTESTAÇÃO

com base no art. 847 da CLT, pelos seguintes fundamentos:

I - PREJUDICIAL DE MÉRITO: DA PRESCRIÇÃO QUINQUENAL
Com fulcro no art. 7º, XXIX, da Constituição Federal e art. 11 da CLT, requer a declaração de PRESCRIÇÃO QUINQUENAL de todos os créditos anteriores aos 5 (cinco) anos contados do ajuizamento da ação, extinguindo-os com resolução do mérito (art. 487, II, do CPC).

II - DO MÉRITO: DA INDEVIDA EQUIPARAÇÃO SALARIAL
Pretende o reclamante a equiparação salarial com o paradigma José. Ocorre que o paradigma possui diferença de tempo de serviço na função superior a 2 (dois) anos e comprovada superioridade técnica, além de produtividade diferenciada. Não foram preenchidos os requisitos do art. 461 da CLT e da Súmula 6 do TST, impondo-se a total improcedência do pleito.

III - DOS PEDIDOS
Requer o acolhimento da prejudicial de prescrição quinquenal e, no mérito, a total IMPROCEDÊNCIA dos pedidos formulados, com a condenação do autor ao pagamento de honorários sucumbenciais (art. 791-A da CLT).

Pede deferimento. Local ..., Data ... Advogado ... OAB/...`
  },
  {
    id: 'recurso-ordinario-trabalhista',
    title: 'Recurso Ordinário Trabalhista (RO)',
    area: 'Direito do Trabalho',
    legalBasis: 'Art. 895, inciso I, da CLT.',
    legalDeadlines: '8 (oito) dias úteis a contar da intimação da sentença.',
    jurisdiction: 'Interposição perante o Juiz da Vara do Trabalho (a quo); razões ao Tribunal Regional do Trabalho (TRT - ad quem).',
    overview:
      'Principal recurso contra as sentenças definitivas ou terminativas das Varas do Trabalho no processo trabalhista (equivalente à Apelação do processo civil). Exige preparo rigoroso: comprovação simultânea de recolhimento das custas processuais e do depósito recursal (art. 899 da CLT) dentro do prazo recursal.',
    structureGuide: [
      {
        step: '1. Folha de Rosto e Preparo',
        description: 'Dirigida à Vara de origem comprovando tempestividade e preparo (depósito recursal e custas quitadas).',
        practicalTip: 'Mencionar a juntada das guias GFIP/GRF e GRU devidamente quitadas.'
      },
      {
        step: '2. Folha de Razões ao Tribunal Regional do Trabalho',
        description: 'Endereçada ao TRT com impugnação específica aos tópicos da sentença de piso.',
        practicalTip: 'Concluir com pedido de reforma da sentença.'
      }
    ],
    caseScenario: {
      title: 'Caso Hipotético FGV 2ª Fase Trabalhista',
      problemStatement:
        'A sentença julgou procedente o pedido de adicional de periculosidade a um empregado que trabalhava em escritório contíguo sem contato permanente com inflamáveis e sem que houvesse perícia técnica obrigatória determinada pelo juízo.',
      clientNeeds: 'Interpor Recurso Ordinário arguindo nulidade por ausência de perícia técnica (art. 195 da CLT) e improcedência da periculosidade.'
    },
    fullDraft: `[FOLHA DE INTERPOSIÇÃO]
EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DA ... VARA DO TRABALHO DE ...

Processo nº ...

RECORRENTE EMPRESA S/A, por seu procurador judicial, vem interpor

RECURSO ORDINÁRIO

com espeque no art. 895, inciso I, da Consolidação das Leis do Trabalho.
Informa que junta os comprovantes de recolhimento tempestivo e integral das custas processuais e do depósito recursal. Requer o regular processamento e a remessa ao Egrégio Tribunal Regional do Trabalho da ... Região.

Local ..., Data ... Advogado ... OAB/...

--------------------------------------------------------------------------------
[FOLHA DE RAZÕES]
RAZÕES DO RECURSO ORDINÁRIO

RECORRENTE: RECORRENTE EMPRESA S/A
RECORRIDO: RECORRIDO EX-EMPREGADO
ORIGEM: ... VARA DO TRABALHO DE ...

EGRÉGIO TRIBUNAL REGIONAL DO TRABALHO DA ... REGIÃO,
COLENDA TURMA RECURSAL.

I - DA PRELIMINAR DE NULIDADE POR CERCEAMENTO DE DEFESA
O MM. Juízo a quo indeferiu a realização de perícia técnica para aferição de periculosidade, condenando a recorrente com base em meras presunções. Trata-se de violação direta ao art. 195, § 2º, da CLT e art. 5º, LV, da CF/88, sendo nula a r. sentença por cerceamento de defesa.

II - DO MÉRITO
Caso superada a preliminar, impõe-se a reforma da condenação, pois o recorrido jamais laborou em área de risco classificada pelas normas do Ministério do Trabalho.

III - CONCLUSÃO E PEDIDOS
Requer o acolhimento da preliminar com anulação da sentença e reabertura da instrução; subsidiariamente, o total provimento do recurso para julgar improcedente o pedido autoral.

Local ..., Data ... Advogado ... OAB/...`
  }
];
