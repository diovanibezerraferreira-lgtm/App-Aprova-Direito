import json

# Read existing pieces from legalBriefs.ts if needed, or build the pristine list of 18 comprehensive briefs
from generate_legal_briefs import briefs as initial_briefs

remaining_briefs = [
  {
    "id": "queixa-crime",
    "title": "Queixa-Crime (Ação Penal Privada)",
    "area": "Direito Penal",
    "subject": "Petições Iniciais",
    "legalBasis": "Art. 100, § 2º, do CP; Arts. 30 e 41 do CPP; Art. 44 do CPP (procuração com poderes especiais).",
    "legalDeadlines": "6 (seis) meses a contar do dia em que o querelante veio a saber quem é o autor do fato (art. 38 do CPP e art. 103 do CP - prazo decadencial).",
    "jurisdiction": "Vara Criminal da Comarca ou Juizado Especial Criminal (JECRIM) se infração de menor potencial ofensivo.",
    "overview": "A Queixa-Crime é a petição inicial da ação penal de iniciativa privada (exclusiva ou subsidiária da pública). Exige rigor técnico na descrição minuciosa do fato com todas as suas circunstâncias e obrigatoriamente procuração com poderes especiais (art. 44 do CPP), sob pena de decadência.",
    "structureGuide": [
      {
        "step": "1. Endereçamento e Distribuição",
        "description": "Endereçar ao Juiz de Direito da Vara Criminal da Comarca onde se consumou o delito ou Juizado Especial Criminal.",
        "practicalTip": "EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA ... VARA CRIMINAL DA COMARCA DE ..."
      },
      {
        "step": "2. Qualificação das Partes e Procuração com Poderes Especiais",
        "description": "Qualificar detalhadamente o querelante e o querelado. Mencionar expressamente o instrumento de mandato com poderes especiais (art. 44 do CPP).",
        "practicalTip": "Fazer menção expressa de que o advogado junta instrumento procuratório com poderes especiais e menção ao fato criminoso."
      },
      {
        "step": "3. Dos Fatos e Demonstração da Tempestividade",
        "description": "Narrar de forma cronológica, com dia, hora, local exato e as palavras ou condutas praticadas pelo querelado.",
        "practicalTip": "Demonstrar de pronto a tempestividade dentro do prazo de 6 meses."
      },
      {
        "step": "4. Do Direito e Tipificação (Calúnia, Difamação, Injúria)",
        "description": "Enquadrar a conduta nos artigos do Código Penal demonstrando a presença do animus caluniandi/diffamandi/injuriandi.",
        "practicalTip": "Indicar causas de aumento de pena cabíveis (ex.: art. 141 do CP)."
      },
      {
        "step": "5. Dos Pedidos e Rol de Testemunhas",
        "description": "Requerer o recebimento da queixa, citação do querelado, intervenção do MP como custos legis, condenação e fixação de indenização civil mínima (art. 387, IV, CPP).",
        "practicalTip": "Apresentar rol de testemunhas (até 3 no rito sumário/JECRIM, até 8 no ordinário)."
      }
    ],
    "caseScenario": {
      "title": "Caso Hipotético FGV 2ª Fase Penal",
      "problemStatement": "Em 10 de maio de 2026, na cidade de São Paulo/SP, Carlos, durante assembleia de condomínio aberta transmitida por videoconferência com 40 moradores, dirigiu-se a Roberto, síndico eleito, afirmando: 'Você é um desonesto, embolsou R$ 50.000,00 da conta do condomínio para comprar um carro particular!'. A acusação era inverídica e Carlos sabia da falsidade. Roberto tomou conhecimento no mesmo dia e procurou advogado para adotar a medida judicial cabível.",
      "clientNeeds": "Redigir a Queixa-Crime cabível imputando o crime de calúnia circunstanciada pela presença de várias pessoas (art. 138 c/c art. 141, III, do CP)."
    },
    "fullDraft": """EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA ... VARA CRIMINAL DA COMARCA DA CAPITAL / SP

ROBERTO..., brasileiro, casado, administrador de empresas, portador da cédula de identidade RG nº ..., inscrito no CPF/MF sob o nº ..., residente e domiciliado na Rua ..., nº ..., Bairro ..., São Paulo/SP, por seu advogado infra-assinado, com procuração com poderes especiais em anexo, outorgada nos exatos termos do art. 44 do Código de Processo Penal, vem, respeitosamente, perante Vossa Excelência, oferecer

QUEIXA-CRIME

em face de CARLOS..., brasileiro, solteiro, engenheiro, portador do RG nº ..., inscrito no CPF nº ..., residente e domiciliado na Rua ..., nº ..., São Paulo/SP, com fundamento no art. 100, § 2º, do Código Penal, e arts. 30 e 41 do Código de Processo Penal, pelos fatos e fundamentos jurídicos a seguir expostos:

I - DA TEMPESTIVIDADE E DA PROCURAÇÃO COM PODERES ESPECIAIS
O querelante tomou conhecimento da autoria delitiva no dia 10 de maio de 2026, restando plenamente tempestiva a presente queixa, nos termos do art. 38 do Código de Processo Penal.
Instrui a presente a necessária procuração com menção expressa ao fato criminoso e com poderes especiais, na forma do art. 44 do CPP.

II - DOS FATOS
No dia 10 de maio de 2026, por volta das 19h30min, durante a assembleia geral ordinária do Condomínio Edifício Solar, realizada de forma híbrida e transmitida simultaneamente a mais de 40 (quarenta) condôminos, o querelado CARLOS, com nítido dolo de ofender e imputar falsamente crime, vociferou contra o querelante:
"Você é um desonesto, embolsou R$ 50.000,00 da conta do condomínio para comprar um carro particular!".
A imputação é manifestamente mentirosa, sabendo o querelado da integral lisura das contas condominiais aprovadas por auditoria externa independente.

III - DO DIREITO
A conduta do querelado amolda-se com perfeição ao tipo penal do art. 138 do Código Penal (calúnia), consistente em imputar falsamente a alguém fato definido como crime (no caso, apropriação indébita - art. 168 do CP).
Incide a causa de aumento de pena prevista no art. 141, inciso III, do Código Penal, pois o delito foi cometido na presença de mais de três pessoas e transmitido por meio tecnológico de ampla difusão.

IV - DOS PEDIDOS
Diante do exposto, requer o querelante:
a) O recebimento e processamento da presente Queixa-Crime;
b) A citação do querelado para responder aos termos da presente ação penal;
c) A intimação do digno representante do Ministério Público para intervir como fiscal da ordem jurídica (custos legis);
d) A procedência total da queixa com a condenação do querelado nas penas do art. 138 c/c art. 141, III, do Código Penal;
e) A fixação de valor mínimo para reparação dos danos morais causados pela infração, com fulcro no art. 387, inciso IV, do CPP.

Rol de testemunhas:
1. ..., qualificação e endereço;
2. ..., qualificação e endereço;
3. ..., qualificação e endereço.

Nestes termos,
Pede deferimento.

São Paulo/SP, data...
ADVOGADO(A)...
OAB/... nº ..."""
  },
  {
    "id": "resposta-acusacao",
    "title": "Resposta à Acusação (Arts. 396 e 396-A do CPP)",
    "area": "Direito Penal",
    "subject": "Defesas & Respostas",
    "legalBasis": "Arts. 396 e 396-A do Código de Processo Penal; Art. 397 (hipóteses de absolvição sumária).",
    "legalDeadlines": "10 (dez) dias corridos a contar da citação pessoal do acusado ou da intimação do defensor dativo/constituído (art. 396 do CPP).",
    "jurisdiction": "Juízo da Vara Criminal por onde tramita a ação penal originária.",
    "overview": "A Resposta à Acusação é a primeira peça defensiva do réu após o recebimento da denúncia ou queixa. Nela a defesa pode arguir preliminares e tudo o que interesse à sua defesa, oferecer documentos e justificações, especificar as provas pretendidas e arrolar testemunhas, com pedido primordial de ABSOLVIÇÃO SUMÁRIA nos moldes do art. 397 do CPP.",
    "structureGuide": [
      {
        "step": "1. Endereçamento e Número dos Autos",
        "description": "Endereçar ao Juiz de Direito da Vara Criminal que recebeu a denúncia.",
        "practicalTip": "EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA ... VARA CRIMINAL DA COMARCA DE ..."
      },
      {
        "step": "2. Preliminares Processuais",
        "description": "Inépcia da denúncia (art. 41 do CPP), nulidade de citação, ausência de justa causa (art. 395) ou incompetência do juízo.",
        "practicalTip": "Demonstrar preliminarmente se a acusação foi genérica e não individualizou a conduta."
      },
      {
        "step": "3. Do Mérito e Teses de Absolvição Sumária (Art. 397)",
        "description": "Existência manifesta de causa excludente de ilicitude ou culpabilidade, atipicidade do fato ou extinção da punibilidade (prescrição).",
        "practicalTip": "Atenção: legítima defesa clara ou princípio da insignificância geram absolvição sumária imediata."
      },
      {
        "step": "4. Dos Pedidos e Rol de Testemunhas",
        "description": "Pedir a absolvição sumária do réu (art. 397 do CPP) ou, subsidiariamente, o prosseguimento da instrução com oitiva das testemunhas arroladas.",
        "practicalTip": "Arrolar expressamente testemunhas no prazo fatal (até 8 no rito ordinário, até 5 no sumário)."
      }
    ],
    "caseScenario": {
      "title": "Caso Hipotético FGV 2ª Fase Penal",
      "problemStatement": "Mateus foi denunciado pelo crime de furto simples por subtrair um saco de arroz e feijão avaliados em R$ 35,00 de um grande supermercado atacadista. A res furtiva foi imediatamente recuperada sem qualquer prejuízo à vítima. Mateus é primário e praticou o ato para alimentar seus filhos menores que estavam em jejum forçado há 2 dias. Citado pessoalmente, Mateus procura assistência jurídica.",
      "clientNeeds": "Elaborar a Resposta à Acusação pugnando preliminarmente pelo reconhecimento do estado de necessidade exculpante/justificante e pelo princípio da insignificância com absolvição sumária (art. 397, I e III, do CPP)."
    },
    "fullDraft": """EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA 1ª VARA CRIMINAL DA COMARCA DE FORTALEZA / CE

Processo nº 0034567-89.2026.8.06.0001

MATEUS..., já qualificado nos autos da Ação Penal em epígrafe, que lhe move o MINISTÉRIO PÚBLICO DO ESTADO DO CEARÁ, por intermédio de seu advogado legalmente constituído (procuração anexa), vem, respeitosamente, à presença de Vossa Excelência, no prazo legal, apresentar

RESPOSTA À ACUSAÇÃO

com supedâneo nos artigos 396 e 396-A do Código de Processo Penal, pelas razões fáticas e jurídicas adiante articuladas:

I - DA TEMPESTIVIDADE
O réu foi citado pessoalmente no dia ..., sendo a presente manifestação defensiva protocolizada no decêndio legal, restando inquestionável a tempestividade processual (art. 396 do CPP).

II - DOS FATOS
O acusado foi denunciado como incurso nas sanções do art. 155, caput, do Código Penal, sob a alegação de ter subtraído dois gêneros alimentícios básicos de estabelecimento hipermercadista, avaliados no importe de R$ 35,00 (trinta e cinco reais).
A mercadoria foi imediatamente restituída intacta, inexistindo qualquer abalo patrimonial à vítima. O réu agiu premido pelo desespero de alimentar seus dois filhos de tenra idade que passavam fome.

III - DO MÉRITO: DA ATIPICIDADE MATERIAL PELO PRINCÍPIO DA INSIGNIFICÂNCIA (ART. 397, III, CPP)
Conforme jurisprudência pacificada do Supremo Tribunal Federal (HC 84.412/SP) e do Superior Tribunal de Justiça, incide o princípio da insignificância quando reunidos os quatro vetores cumulativos: mínima ofensividade da conduta, nenhuma periculosidade social da ação, reduzidíssimo grau de reprovabilidade do comportamento e inexpressividade da lesão jurídica provocada.
O valor ínfimo dos bens alimentícios impede a tipicidade material do furto, tornando a conduta atípica sob o prisma penal.
Ademais, resta patente o furto famélico alicerçado no estado de necessidade (art. 24 do CP), causa manifesta de exclusão da ilicitude.

IV - DOS PEDIDOS
Ante todo o exposto, pugna a Defesa técnica:
a) A ABSOLVIÇÃO SUMÁRIA do acusado MATEUS, com fundamento no art. 397, inciso III, do Código de Processo Penal (atipicidade material pela insignificância);
b) Subsidiariamente, caso não seja esse o entendimento de Vossa Excelência, a absolvição sumária pelo estado de necessidade (art. 397, inciso I, do CPP);
c) Caso superadas as teses absolutórias, requer o regular prosseguimento do feito com a oitiva das testemunhas tempestivamente arroladas no rol anexo, que comparecerão independentemente de intimação.

Rol de testemunhas:
1. ..., qualificação e endereço;
2. ..., qualificação e endereço;
3. ..., qualificação e endereço.

Nestes termos,
Pede deferimento.

Fortaleza/CE, data...
ADVOGADO(A)...
OAB/... nº ..."""
  },
  {
    "id": "memoriais-penal",
    "title": "Memoriais Escritos da Defesa no Rito Comum (Art. 403, § 3º)",
    "area": "Direito Penal",
    "subject": "Defesas & Respostas",
    "legalBasis": "Art. 403, § 3º, e Art. 404, parágrafo único, do Código de Processo Penal; Art. 386 do CPP.",
    "legalDeadlines": "5 (cinco) dias sucessivos para acusação e defesa (art. 403, § 3º, do CPP).",
    "jurisdiction": "Dirigida ao Juiz da Vara Criminal que presidiu a audiência de instrução e julgamento.",
    "overview": "Os Memoriais Escritos constituem a peça culminante da defesa na fase instrutória do processo penal antes da sentença. Devem esgotar todas as teses defensivas materiais e processuais: nulidades, absolvição principal por ausência de autoria ou materialidade (art. 386), desclassificação, teses subsidiárias de dosimetria da pena (art. 59), atenuantes (art. 65), fixação de regime prisional mais brando (art. 33) e substituição da pena privativa de liberdade por restritivas de direitos (art. 44).",
    "structureGuide": [
      {
        "step": "1. Endereçamento e Qualificação Processual",
        "description": "Endereçar ao Juiz de Direito da Vara Criminal responsável pelo julgamento.",
        "practicalTip": "EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA ... VARA CRIMINAL DA COMARCA DE ..."
      },
      {
        "step": "2. Preliminares de Nulidade Processual",
        "description": "Arguição de cerceamento de defesa, ilicitude de provas obtidas por violação de domicílio sem mandado judicial ou quebra de cadeia de custódia.",
        "practicalTip": "Pedir o desentranhamento das provas ilícitas (art. 157 do CPP)."
      },
      {
        "step": "3. Do Mérito Absolutório (Art. 386 do CPP)",
        "description": "Demonstrar a inexistência do fato, ausência de provas suficientes de autoria (in dubio pro reo - art. 386, VII, CPP) ou insuficiência probatória.",
        "practicalTip": "Enfatizar que o ônus da prova na ação penal recai exclusivamente sobre o Ministério Público."
      },
      {
        "step": "4. Das Teses Subsidiárias de Dosimetria da Pena",
        "description": "Fixação da pena-base no mínimo legal (art. 59), reconhecimento da atenuante da menoridade relativa ou confissão espontânea (art. 65), regime aberto e substituição por restritiva de direitos (art. 44).",
        "practicalTip": "Nunca esquecer de requerer o direito de recorrer em liberdade (art. 387, § 1º, CPP)."
      },
      {
        "step": "5. Dos Pedidos Finais",
        "description": "Conclusão com os pedidos de acolhimento das preliminares, absolvição nos termos do art. 386 ou acolhimento integral dos pleitos subsidiários.",
        "practicalTip": "Listar os incisos exatos do art. 386 do CPP postulados."
      }
    ],
    "caseScenario": {
      "title": "Caso Hipotético FGV 2ª Fase Penal",
      "problemStatement": "Gabriel foi processado por tráfico de drogas (art. 33 da Lei 11.343/06). A denúncia baseou-se exclusivamente no ingresso de policiais militares em sua residência à noite sem mandado judicial e sem fundadas razões. Em juízo, os policiais prestaram depoimentos contraditórios e nenhuma substância foi apreendida com Gabriel, que é primário, estuda e trabalha. O MP pediu a condenação em alegações finais. Gabriel é intimado para memoriais.",
      "clientNeeds": "Apresentar Memoriais Escritos da Defesa no rito ordinário, arguindo a nulidade do ingresso domiciliar sem mandado (Tema 280 STF), absolvição por falta de provas (art. 386, VII, CPP) e teses subsidiárias de tráfico privilegiado (art. 33, § 4º) e regime aberto."
    },
    "fullDraft": """EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA 2ª VARA DE DELITOS DE DROGAS DA COMARCA DE BELÉM / PA

Processo nº 0045678-90.2026.8.14.0401

GABRIEL..., já qualificado nos autos da Ação Penal em epígrafe, que lhe move o MINISTÉRIO PÚBLICO DO ESTADO DO PARÁ, por seu defensor constituído, vem, tempestivamente, à presença de Vossa Excelência, com fulcro no art. 403, § 3º, do Código de Processo Penal, apresentar

MEMORIAIS ESCRITOS DA DEFESA

pelas razões de fato e de direito que passa a expor:

I - DA TEMPESTIVIDADE
A defesa foi intimada no dia ..., findando-se o prazo no dia ..., demonstrada a tempestividade do protocolo no quinquídio legal previsto no art. 403, § 3º, do CPP.

II - DA PRELIMINAR DE NULIDADE ABSOLUTA: ILICITUDE DA PROVA POR INVASÃO DE DOMICÍLIO (TEMA 280 DO STF)
A diligência policial que culminou na prisão do acusado é flagrantemente nula por violação à garantia constitucional da inviolabilidade do domicílio (art. 5º, XI, da CF/88).
Os policiais militares invadiram o imóvel residencial do acusado durante o período noturno sem ordem judicial expedida e sem prévia investigação que fundamentasse justa causa e flagrante delito.
O Supremo Tribunal Federal, ao julgar o Tema 280 de Repercussão Geral (RE 603.616), fixou que a entrada forçada em domicílio sem mandado judicial só é lícita quando amparada em fundadas razões, sob pena de nulidade dos atos e responsabilidade dos agentes.
Aplica-se a Teoria dos Frutos da Árvore Envenenada (fruits of the poisonous tree), positivada no art. 157, § 1º, do CPP, devendo ser desentranhadas todas as provas ilegais.

III - DO MÉRITO PRINCIPAL: DA ABSOLVIÇÃO POR FALTA DE PROVAS (ART. 386, VII, DO CPP)
No mérito, impõe-se a imperiosa absolvição de Gabriel.
A acusação não produziu nenhuma prova idônea sob o crivo do contraditório que vincule o réu à mercancia ilícita de entorpecentes. Testemunhas ouvidas em juízo atestaram que o réu é jovem trabalhador formal e estudante universitário.
Vigora no direito processual penal o princípio do in dubio pro reo: a dúvida razoável milita em favor do réu, impondo-se a absolvição com base no art. 386, inciso VII, do CPP.

IV - DAS TESES SUBSIDIÁRIAS DE DOSIMETRIA DA PENA
Na hipótese remota de condenação:
a) Aplicação da pena-base no patamar mínimo legal (art. 59 do CP);
b) Reconhecimento e aplicação da causa especial de diminuição de pena do TRÁFICO PRIVILEGIADO (art. 33, § 4º, da Lei 11.343/06) na fração máxima de 2/3 (dois terços), haja vista a primariedade, bons antecedentes e ausência de ligação com facções criminosas;
c) Fixação do REGIME INICIAL ABERTO de cumprimento de pena (art. 33, § 2º, 'c', do CP);
d) Substituição da pena privativa de liberdade por RESTRITIVAS DE DIREITOS, nos termos do art. 44 do CP e Resolução nº 05/2012 do Senado Federal;
e) Concessão do direito de recorrer em liberdade (art. 387, § 1º, CPP).

V - DOS PEDIDOS
Ante o exposto, pugna a Defesa:
a) O acolhimento da PRELIMINAR DE NULIDADE pela ilicitude das provas oriundas da violação de domicílio, desentranhando-se dos autos;
b) No mérito, a ABSOLVIÇÃO TOTAL do réu GABRIEL, forte no art. 386, inciso VII (ou inciso II), do Código de Processo Penal;
c) Subsidiariamente, o acolhimento de todas as teses de dosimetria com a aplicação do redutor do § 4º do art. 33, regime aberto e substituição por penas restritivas de direitos.

Nestes termos,
Pede deferimento.

Belém/PA, data...
ADVOGADO(A)...
OAB/... nº ..."""
  },
  {
    "id": "apelacao-penal",
    "title": "Apelação Criminal com Razões e Contrarrazões",
    "area": "Direito Penal",
    "subject": "Recursos",
    "legalBasis": "Arts. 593 e 600 do Código de Processo Penal; Art. 593, I (sentença definitiva de condenação ou absolvição do juiz singular).",
    "legalDeadlines": "5 (cinco) dias para a interposição perante o juízo singular e 8 (oito) dias para a apresentação das razões ao Tribunal (arts. 593 e 600 do CPP).",
    "jurisdiction": "Petição de interposição perante a Vara Criminal de origem e razões recursais ao Tribunal de Justiça / Tribunal Regional Federal.",
    "overview": "A Apelação Criminal é o recurso cabível contra as sentenças definitivas de condenação ou absolvição proferidas por juiz singular (art. 593, I, CPP). A defesa pode apresentar as razões na própria origem no prazo de 8 dias ou requerer expressamente o arrazoamento na superior instância (art. 600, § 4º, do CPP).",
    "structureGuide": [
      {
        "step": "1. Petição de Interposição",
        "description": "Endereçar ao juiz sentenciante com manifestação formal de inconformismo e pedido de recebimento.",
        "practicalTip": "EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA ... VARA CRIMINAL DA COMARCA DE ..."
      },
      {
        "step": "2. Folha Separada de Razões de Apelação",
        "description": "Abrir nova página endereçada ao Tribunal de Justiça com relatório e síntese processual.",
        "practicalTip": "EGRÉGIO TRIBUNAL DE JUSTIÇA / COLENDA CÂMARA CRIMINAL"
      },
      {
        "step": "3. Preliminares de Nulidade da Sentença",
        "description": "Falta de fundamentação da sentença (art. 381 do CPP e art. 93, IX, da CF), vício na oitiva de testemunhas ou cerceamento de defesa.",
        "practicalTip": "Pedir a anulação ab initio do processo ou da sentença."
      },
      {
        "step": "4. Mérito: Absolvição ou Desclassificação",
        "description": "Teses absolutórias do art. 386 do CPP ou desclassificação (ex.: de roubo para furto, de tráfico para porte de uso próprio - art. 28).",
        "practicalTip": "Argumentar atipicidade e insuficiência de provas sob o crivo do contraditório judicial."
      },
      {
        "step": "5. Dosimetria e Pedidos Finais",
        "description": "Afastamento de circunstâncias judiciais negativas indevidas, decote de qualificadoras e causas de aumento, regime inicial e concessão de sursis penal.",
        "practicalTip": "Concluir postulando o conhecimento e provimento da apelação."
      }
    ],
    "caseScenario": {
      "title": "Caso Hipotético FGV 2ª Fase Penal",
      "problemStatement": "Leandro foi condenado a 5 anos e 4 meses de reclusão em regime inicial semiaberto pela suposta prática de roubo simples (art. 157, caput, do CP). O conjunto probatório demonstrou que Leandro apenas subtraiu a bolsa da vítima sem empregar qualquer tipo de violência ou ameaça física ou verbal, tendo a vítima confirmado expressamente que não houve intimidação, mas apenas rapidez no ato (arrebentamento da alça). O magistrado fixou a pena acima do mínimo por conduta social sem qualquer elemento concreto.",
      "clientNeeds": "Interpor recurso de Apelação Criminal pleiteando a desclassificação do roubo para furto simples (art. 155, caput, do CP), fixação da pena no mínimo legal, substituição por restritiva de direitos e fixação de regime aberto."
    },
    "fullDraft": """[FOLHA 01 - INTERPOSIÇÃO]

EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA 3ª VARA CRIMINAL DA COMARCA DE GOIÂNIA / GO

Processo nº 0078901-23.2026.8.09.0001

LEANDRO..., já qualificado nos autos da presente Ação Penal, que lhe move o Ministério Público, por intermédio de seu advogado infra-assinado, vem, respeitosamente, perante Vossa Excelência, inconformado com a r. sentença condenatória de fls. ..., interpor o presente

RECURSO DE APELAÇÃO CRIMINAL

com fundamento no art. 593, inciso I, do Código de Processo Penal.
Requer o recebimento do recurso e, já apresentando as razões recursais em anexo nos termos do art. 600 do CPP, pugna pela remessa dos autos ao Egrégio Tribunal de Justiça do Estado de Goiás.

Termos em que,
Pede deferimento.

Goiânia/GO, data...
ADVOGADO(A)...
OAB/... nº ...

--------------------------------------------------------------------------------
[FOLHA 02 - RAZÕES RECURSAIS]

EGRÉGIO TRIBUNAL DE JUSTIÇA DO ESTADO DE GOIÁS
COLENDA CÂMARA CRIMINAL
ÍNCLITOS DESEMBARGADORES

Apelante: Leandro...
Apelado: Ministério Público do Estado de Goiás
Autos nº: 0078901-23.2026.8.09.0001

RAZÕES DO RECURSO DE APELAÇÃO

I - DA TEMPESTIVIDADE
O apelo é plenamente tempestivo, interposto dentro do quinquídio previsto no art. 593 do CPP, com razões no prazo do art. 600 do mesmo diploma.

II - DOS FATOS E DO MÉRITO: DA DESCLASSIFICAÇÃO DE ROUBO PARA FURTO SIMPLES
O apelante foi condenado pelo delito de roubo simples (art. 157 do CP).
Contudo, o depoimento uníssono da própria vítima em audiência de instrução demonstrou que o apelante não empregou violência contra a pessoa ou grave ameaça de qualquer jaez. O réu limitou-se a puxar a bolsa com destreza rápida contra a coisa, sem produzir qualquer lesão, agressão ou intimidação moral.
A doutrina e jurisprudência consolidadas dos Tribunais Superiores preconizam que a violência exercida exclusivamente contra a coisa para possibilitar a subtração não tipifica o crime de roubo, mas sim o delito de FURTO (art. 155, caput, do CP).
Imperiosa, pois, a desclassificação da conduta para o crime de furto simples.

III - DA REFORMA DA DOSIMETRIA DA PENA
O juízo a quo exasperou a pena-base invocando genericamente que "a conduta social do agente é desfavorável", sem apontar qualquer fato concreto desabonador, violando a Súmula 444 do STJ.
A pena-base deve ser readequada ao patamar mínimo legal de 1 ano de reclusão.
Operada a desclassificação e a fixação da pena no piso legal, o apelante faz jus ao REGIME INICIAL ABERTO (art. 33, § 2º, 'c', do CP) e à SUBSTITUIÇÃO da pena privativa de liberdade por pena restritiva de direitos (art. 44 do CP).

IV - DOS PEDIDOS
Diante do exposto, requer a este Egrégio Tribunal:
a) O CONHECIMENTO e o integral PROVIMENTO do presente recurso de Apelação;
b) A DESCLASSIFICAÇÃO da imputação de roubo para o crime de FURTO SIMPLES (art. 155, caput, do Código Penal);
c) O redimensionamento da dosimetria penal para fixação da pena no mínimo legal de 1 (um) ano de reclusão;
d) A fixação do regime inicial ABERTO e a conversão da pena por restritivas de direitos (art. 44 do CP).

Nestes termos,
Pede provimento.

Goiânia/GO, data...
ADVOGADO(A)...
OAB/... nº ..."""
  },
  {
    "id": "rese-penal",
    "title": "Recurso em Sentido Estrito - RESE (Art. 581 do CPP)",
    "area": "Direito Penal",
    "subject": "Recursos",
    "legalBasis": "Arts. 581 a 592 do Código de Processo Penal; Art. 581, IV (pronúncia); Juízo de retratação (art. 589).",
    "legalDeadlines": "5 (cinco) dias para interposição e 2 (dois) dias para razões/contrarrazões (arts. 586 e 588 do CPP).",
    "jurisdiction": "Petição de interposição perante o Juiz da Vara do Tribunal do Júri (com juízo de retratação) e razões ao Tribunal.",
    "overview": "O Recurso em Sentido Estrito (RESE) possui rol taxativo previsto no art. 581 do CPP, sendo a peça por excelência contra a decisão de PRONÚNCIA no rito do Tribunal do Júri (art. 581, IV). Exige duas peças (interposição com pedido expresso de juízo de retratação e razões ao Tribunal), postulando a impronúncia, absolvição sumária ou desclassificação.",
    "structureGuide": [
      {
        "step": "1. Petição de Interposição com Juízo de Retratação",
        "description": "Endereçar ao Juiz Presidente do Tribunal do Júri que pronunciou o réu, requerendo a retratação.",
        "practicalTip": "EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA ... VARA DO TRIBUNAL DO JÚRI DA COMARCA DE ..."
      },
      {
        "step": "2. Folha Separada de Razões do Recurso",
        "description": "Endereçar ao Tribunal de Justiça com fundamentação recursal e pedidos.",
        "practicalTip": "EGRÉGIO TRIBUNAL DE JUSTIÇA / COLENDA CÂMARA CRIMINAL"
      },
      {
        "step": "3. Das Teses Principais contra a Pronúncia",
        "description": "Absolvição sumária (art. 415 do CPP - legítima defesa estreme de dúvidas), impronúncia por falta de indícios de autoria (art. 414) ou desclassificação por ausência de animus necandi (art. 419).",
        "practicalTip": "Pedir subsidiariamente o decote de qualificadoras manifestamente improcedentes."
      },
      {
        "step": "4. Dos Pedidos Recursais",
        "description": "Requerer a retratação pelo magistrado de primeiro grau ou, mantida a pronúncia, o provimento pelo Tribunal.",
        "practicalTip": "Formular pedidos graduados: absolvição sumária -> impronúncia -> desclassificação -> decote de qualificadoras."
      }
    ],
    "caseScenario": {
      "title": "Caso Hipotético FGV 2ª Fase Penal",
      "problemStatement": "Bruno foi pronunciado como incurso no art. 121, § 2º, II, do CP (homicídio qualificado por motivo fútil). Toda a prova pericial e testemunhas presenciais comprovaram de forma cristalina que Bruno agiu em legítima defesa de terceiro, repelindo agressão injusta com arma de fogo praticada pelo ofendido contra sua mãe idosa, tendo disparado um único tiro não letal que ricocheteou. O juiz de primeira instância pronunciou o réu fundamentando que 'na primeira fase do júri vigora o in dubio pro societate'.",
      "clientNeeds": "Interpor Recurso em Sentido Estrito perante a Vara do Júri com pedido de retratação e razões recursais ao TJ para obter a Absolvição Sumária pela legítima defesa comprovada (art. 415, IV, CPP) ou decote da qualificadora."
    },
    "fullDraft": """[FOLHA 01 - INTERPOSIÇÃO]

EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DE DIREITO DA 1ª VARA DO TRIBUNAL DO JÚRI DA COMARCA DE MANAUS / AM

Processo nº 0090123-45.2026.8.04.0001

BRUNO..., já qualificado nos autos da Ação Penal em epígrafe, por seu procurador infra-assinado, vem, perante Vossa Excelência, inconformado com a decisão de pronúncia de fls. ..., interpor o presente

RECURSO EM SENTIDO ESTRITO (RESE)

com fulcro no art. 581, inciso IV, do Código de Processo Penal.
Requer, inicialmente, que Vossa Excelência se digne a exercer o JUÍZO DE RETRATAÇÃO previsto no art. 589 do Código de Processo Penal, reformando a decisão para absolver sumariamente o recorrente.
Não sendo este o vosso prudente entendimento, requer o recebimento das razões anexas e a remessa dos autos ao Egrégio Tribunal de Justiça do Estado do Amazonas.

Termos em que,
Pede deferimento.

Manaus/AM, data...
ADVOGADO(A)...
OAB/... nº ...

--------------------------------------------------------------------------------
[FOLHA 02 - RAZÕES DO RESE]

EGRÉGIO TRIBUNAL DE JUSTIÇA DO ESTADO DO AMAZONAS
COLENDA CÂMARA CRIMINAL
ÍNCLITOS JULGADORES

Recorrente: Bruno...
Recorrido: Ministério Público do Estado do Amazonas
Autos nº: 0090123-45.2026.8.04.0001

RAZÕES DO RECURSO EM SENTIDO ESTRITO

I - DA TEMPESTIVIDADE
O presente recurso é tempestivo, atendendo rigorosamente ao prazo de 5 (cinco) dias previsto no art. 586 do Código de Processo Penal.

II - DO MÉRITO: DA LEGÍTIMA DEFESA E ABSOLVIÇÃO SUMÁRIA (ART. 415, IV, CPP)
O recorrente foi pronunciado pelo crime de homicídio qualificado.
Nada obstante, a instrução probatória demonstrou de maneira insofismável e estreme de dúvidas que Bruno agiu amparado pela excludente da LEGÍTIMA DEFESA de sua genitora idosa (art. 23, II, e art. 25 do Código Penal).
A vítima investia violentamente armada contra a genitora do réu, que utilizou moderadamente do único meio que dispunha para fazer cessar a agressão iminente.
O art. 415, IV, do CPP impõe que o juiz absolverá sumariamente o acusado desde logo quando demonstrada causa de exclusão do crime. Não incide o brocardo do in dubio pro societate quando a excludente de ilicitude ressoa evidente nos autos.
Subsidiariamente, impõe-se a impronúncia (art. 414) ou, ao menos, o afastamento da qualificadora de motivo fútil, porquanto manifestamente improcedente.

III - DOS PEDIDOS
Ante o exposto, pugna o recorrente:
a) O CONHECIMENTO e PROVIMENTO do presente Recurso em Sentido Estrito;
b) A reforma da r. decisão para decretar a ABSOLVIÇÃO SUMÁRIA de Bruno, com espeque no art. 415, inciso IV, do Código de Processo Penal;
c) Subsidiariamente, caso não seja acolhida a absolvição sumária, a IMPRONÚNCIA com base no art. 414 do CPP, ou a exclusão da qualificadora do motivo fútil.

Nestes termos,
Pede provimento.

Manaus/AM, data...
ADVOGADO(A)...
OAB/... nº ..."""
  },
  {
    "id": "reclamacao-trabalhista",
    "title": "Reclamação Trabalhista no Rito Ordinário (Art. 840 da CLT)",
    "area": "Direito do Trabalho",
    "subject": "Petições Iniciais",
    "legalBasis": "Arts. 840, § 1º, da CLT; Arts. 58, 59 e 477 da CLT; Súmulas do TST (331, 338, 244).",
    "legalDeadlines": "Prazo prescricional de 2 anos após a extinção do contrato de trabalho, atingindo créditos dos últimos 5 anos (art. 7º, XXIX, da CF e art. 11 da CLT).",
    "jurisdiction": "Vara do Trabalho da localidade da prestação dos serviços (art. 651 da CLT).",
    "overview": "A Reclamação Trabalhista é a ação inicial do empregado na Justiça do Trabalho. A Reforma Trabalhista (Lei 13.467/2017) alterou o art. 840, § 1º, da CLT, exigindo pedido certo, determinado e com indicação expressa do seu valor econômico estimado, sob pena de extinção sem mérito dos pedidos não liquidados.",
    "structureGuide": [
      {
        "step": "1. Endereçamento à Vara do Trabalho",
        "description": "Endereçar ao Juiz do Trabalho da Vara da localidade onde o empregado prestava seus serviços.",
        "practicalTip": "EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DA ... VARA DO TRABALHO DE ..."
      },
      {
        "step": "2. Qualificação das Partes e Dados Contratuais",
        "description": "Indicar data de admissão, cargo, remuneração mensal, jornada real e data/motivo da rescisão contratual.",
        "practicalTip": "Indicar o correto enquadramento da jornada e remuneração."
      },
      {
        "step": "3. Dos Pedidos Líquidos Obrigatórios (Art. 840, § 1º, CLT)",
        "description": "Formular pedidos de horas extras, intervalo intrajornada, adicional de insalubridade, aviso prévio, FGTS + 40%, sempre indicando os valores estimados.",
        "practicalTip": "Cada pedido deve ter seu valor expresso: 'Horas extras ... R$ 12.000,00'."
      },
      {
        "step": "4. Justiça Gratuita e Honorários Sucumbenciais",
        "description": "Pedir gratuidade da justiça (art. 790, § 3º e § 4º da CLT) e honorários sucumbenciais de 15% (art. 791-A).",
        "practicalTip": "Juntar declaração de hipossuficiência econômica."
      },
      {
        "step": "5. Conclusão e Rol de Pedidos Líquidos",
        "description": "Apresentar a somatória dos pedidos no valor da causa.",
        "practicalTip": "Notificação da reclamada e procedência total dos pleitos."
      }
    ],
    "caseScenario": {
      "title": "Caso Hipotético FGV 2ª Fase Trabalhista",
      "problemStatement": "Fernanda trabalhou para a empresa 'Tecnologia Avançada S/A' de 01/02/2023 a 10/01/2026, exercendo a função de analista júnior com salário de R$ 3.000,00 por mês. Cumpria jornada de trabalho habitual de segunda a sexta-feira das 08h00min às 19h00min, com apenas 30 minutos de intervalo intrajornada. Foi demitida sem justa causa e não recebeu as verbas rescisórias tempestivas (aviso prévio, 13º proporcional e férias + 1/3) nem as horas extras laboradas.",
      "clientNeeds": "Ajuizar Reclamação Trabalhista no rito ordinário perante a Vara do Trabalho competente formulando pedidos líquidos com valores estimados nos termos do art. 840, § 1º, da CLT."
    },
    "fullDraft": """EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DO TRABALHO DA ... VARA DO TRABALHO DE RECIFE / PE

FERNANDA..., brasileira, solteira, analista de sistemas, portadora da CTPS nº ..., série ..., RG nº ..., inscrita no CPF sob o nº ..., residente e domiciliada na Rua ..., nº ..., Recife/PE, por seu advogado infra-assinado, com procuração em anexo, com escritório profissional na Rua ..., nº ..., onde recebe notificações, vem propor

RECLAMAÇÃO TRABALHISTA PELO RITO ORDINÁRIO

em face de TECNOLOGIA AVANÇADA S/A, pessoa jurídica de direito privado, inscrita no CNPJ sob o nº ..., com sede na Avenida ..., nº ..., Recife/PE, pelos fatos e fundamentos a seguir expostos:

I - DOS DADOS CONTRATUAIS
A reclamante foi admitida pela reclamada em 01 de fevereiro de 2023 para exercer a função de analista júnior, mediante última remuneração de R$ 3.000,00 (três mil reais) por mês.
Foi dispensada sem justa causa no dia 10 de janeiro de 2026, sem que a empresa quitasse tempestivamente suas verbas rescisórias de direito.

II - DAS HORAS EXTRAS E INTERVALO INTRAJORNADA (ARTS. 59 E 71 DA CLT)
A reclamante laborava habitualmente de segunda a sexta-feira, das 08h00min às 19h00min, usufruindo de apenas 30 minutos de intervalo para refeição e descanso, extrapolando o limite constitucional diário de 8 horas e semanal de 44 horas.
Nos termos do art. 59 da CLT e Súmula 338 do TST, faz jus ao pagamento das horas suplementares com adicional mínimo de 50%, com reflexos em DSR, aviso prévio, 13º salário, férias com 1/3 e FGTS com 40%.
Pela supressão parcial do intervalo intrajornada (art. 71, § 4º, da CLT), faz jus à indenização do período de 30 minutos diários suprimidos com acréscimo de 50%.

III - DAS VERBAS RESCISÓRIAS E MULTAS DOS ARTS. 467 E 477 DA CLT
Diante da dispensa imotivada sem pagamento das parcelas rescisórias no prazo de 10 dias úteis, é devido o aviso prévio indenizado, férias proporcionais com 1/3, 13º salário proporcional e multa de um salário estipulada no art. 477, § 8º, da CLT, além da dobra do art. 467 se incontroversas.

IV - DOS PEDIDOS LÍQUIDOS (ART. 840, § 1º, DA CLT)
Diante do exposto, requer a condenação da reclamada nos seguintes pedidos líquidos e certos estimados:
a) Horas extras excedentes da 8ª diária e 44ª semanal com adicional de 50% e reflexos legais ... R$ 18.000,00;
b) Indenização pela supressão do intervalo intrajornada com 50% (art. 71, § 4º, CLT) ... R$ 4.500,00;
c) Aviso prévio indenizado proporcional (36 dias) ... R$ 3.600,00;
d) 13º salário e férias proporcionais com 1/3 ... R$ 6.200,00;
e) Multa do art. 477, § 8º, da CLT ... R$ 3.000,00;
f) Multa de 40% do FGTS e expedição de alvará para saque ... R$ 4.800,00;
g) Concessão da gratuidade da justiça (art. 790, § 3º, CLT);
h) Condenação da ré ao pagamento de honorários advocatícios sucumbenciais de 15% (art. 791-A da CLT) ... R$ 6.015,00.

Dá-se à causa o valor de R$ 46.115,00 (quarenta e seis mil cento e quinze reais).

Nestes termos,
Pede deferimento.

Recife/PE, data...
ADVOGADO(A)...
OAB/... nº ..."""
  },
  {
    "id": "contestacao-trabalhista",
    "title": "Contestação Trabalhista com Prejudiciais e Preliminares",
    "area": "Direito do Trabalho",
    "subject": "Defesas & Respostas",
    "legalBasis": "Art. 847 da CLT; Arts. 337 e 485 do CPC; Súmula 330 do TST; Prescrição quinquenal e bienal (art. 7º, XXIX, CF).",
    "legalDeadlines": "Apresentada em audiência una ou protocolada no PJe até a data da audiência (art. 847 da CLT).",
    "jurisdiction": "Distribuída perante a Vara do Trabalho da causa.",
    "overview": "A Contestação Trabalhista é a resposta formal da empresa ré contra a reclamatória trabalhista. Deve contemplar preliminares processuais de incompetência material ou inépcia de pedidos não liquidados (art. 840, § 3º, da CLT), prejudiciais de mérito de prescrição bienal ou quinquenal (art. 7º, XXIX, CF e art. 11 da CLT) e impugnação de mérito ponto por ponto acompanhada de cartões de ponto válidos (Súmula 338 TST).",
    "structureGuide": [
      {
        "step": "1. Endereçamento e Número da RT",
        "description": "Endereçar diretamente ao Juiz da Vara do Trabalho onde tramita o feito.",
        "practicalTip": "EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DO TRABALHO DA ... VARA DO TRABALHO DE ..."
      },
      {
        "step": "2. Preliminares de Inépcia (Art. 840, § 3º, CLT)",
        "description": "Apontar pedidos ilíquidos formulados pelo reclamante sem estimativa de valor para obter a extinção sem mérito.",
        "practicalTip": "Citar a regra expressa pós-Reforma Trabalhista."
      },
      {
        "step": "3. Prejudicial de Mérito: Prescrição Quinquenal (Art. 7º, XXIX, CF)",
        "description": "Requerer a declaração de prescrição de todas as parcelas anteriores a cinco anos contados do ajuizamento da ação.",
        "practicalTip": "Súmula 308, I, do TST."
      },
      {
        "step": "4. Mérito e Validade dos Controles de Ponto",
        "description": "Juntar cartões de ponto eletrônicos válidos e recibos salariais assinados (art. 464 CLT).",
        "practicalTip": "Demonstrar a inexistência de horas extras ou a regularidade do banco de horas."
      },
      {
        "step": "5. Dos Pedidos",
        "description": "Acolhimento da preliminar, pronúncia da prescrição quinquenal e improcedência total no mérito com honorários sucumbenciais (art. 791-A da CLT).",
        "practicalTip": "Pedir subsidiariamente compensação/dedução de valores já quitados (art. 767 da CLT e Súmula 18 do TST)."
      }
    ],
    "caseScenario": {
      "title": "Caso Hipotético FGV 2ª Fase Trabalhista",
      "problemStatement": "A empresa 'Comércio de Bebidas Silva Ltda.' foi acionada em reclamação trabalhista por ex-vendedor que pede horas extras dos últimos 7 anos e adicional de periculosidade. O reclamante não indicou o valor estimado de seu pedido de periculosidade e a empresa possui cartões de ponto biométricos que registram com exatidão a jornada e o pagamento de todas as horas laboradas. A empresa é notificada para a audiência.",
      "clientNeeds": "Apresentar Contestação Trabalhista arguindo preliminar de inépcia do pedido de periculosidade (art. 840, § 3º, CLT), prejudicial de prescrição quinquenal (Súmula 308 TST) e mérito de improcedência das horas extras com cartões de ponto idôneos."
    },
    "fullDraft": """EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DO TRABALHO DA 5ª VARA DO TRABALHO DE PORTO ALEGRE / RS

Processo nº 0021345-78.2026.5.04.0005

COMÉRCIO DE BEBIDAS SILVA LTDA., pessoa jurídica de direito privado, inscrita no CNPJ sob o nº ..., com sede na Rua ..., nº ..., Porto Alegre/RS, por seu advogado infra-assinado, com procuração em anexo, vem, com fulcro no art. 847 da CLT, oferecer

CONTESTAÇÃO TRABALHISTA

à Reclamação Trabalhista proposta por EX-EMPREGADO..., pelas razões fáticas e jurídicas adiante aduzidas:

I - DA PRELIMINAR DE INÉPCIA POR AUSÊNCIA DE LIQUIDAÇÃO (ART. 840, § 1º E § 3º, DA CLT)
A petição inicial formulou pedido genérico de adicional de periculosidade sem indicar o valor determinado e estimado da pretensão, violando frontalmente a redação do art. 840, § 1º, da CLT.
O § 3º do mesmo dispositivo determina peremptoriamente que os pedidos que não atendam ao disposto no § 1º serão julgados extintos sem resolução do mérito.
Requer-se a extinção sem julgamento do mérito quanto ao pedido de periculosidade.

II - DA PREJUDICIAL DE MÉRITO: PRESCRIÇÃO QUINQUENAL (ART. 7º, XXIX, DA CF E SÚMULA 308 DO TST)
O reclamante postula o recebimento de verbas e reflexos de período que remonta a 7 anos anteriores à data do ajuizamento.
Incide a prescrição quinquenal prevista no art. 7º, inciso XXIX, da Constituição Federal e art. 11 da CLT.
Assim, com fulcro na Súmula nº 308, I, do Colendo Tribunal Superior do Trabalho, requer-se a extinção com resolução de mérito (art. 487, II, do CPC) de todas as pretensões pecuniárias anteriores a 5 (cinco) anos contados da propositura da presente demanda.

III - DO MÉRITO: DA INEXISTÊNCIA DE HORAS EXTRAS
No mérito, todos os pleitos devem ser julgados integralmente improcedentes.
A reclamada junta aos autos a integralidade dos espelhos de ponto biométricos fidedignos e idôneos (Doc. 03), com horários variáveis em perfeita harmonia com o art. 74, § 2º, da CLT e Súmula 338, I, do TST.
As eventuais horas extraordinárias prestadas foram devidamente quitadas nos contracheques acostados ou compensadas mediante regular acordo de compensação de jornada.

IV - DA COMPENSAÇÃO / DEDUÇÃO (ART. 767 DA CLT)
Ad cautelam, em remota hipótese de deferimento de qualquer parcela, requer a dedução de todos os valores já quitados a idêntico título, a fim de evitar enriquecimento sem causa (Súmula 18 do TST).

V - DOS PEDIDOS
Diante de todo o exposto, requer a reclamada:
a) O acolhimento da PRELIMINAR DE INÉPCIA com a extinção do pedido de periculosidade sem resolução do mérito (art. 840, § 3º, da CLT);
b) O acolhimento da PREJUDICIAL DE PRESCRIÇÃO QUINQUENAL, extinguindo-se as parcelas anteriores a cinco anos (art. 487, II, do CPC);
c) O julgamento de TOTAL IMPROCEDÊNCIA dos pedidos formulados na petição inicial;
d) A condenação do reclamante ao pagamento de honorários advocatícios sucumbenciais de 15% (art. 791-A da CLT).

Protesta provar o alegado por todos os meios em direito admitidos.

Nestes termos,
Pede deferimento.

Porto Alegre/RS, data...
ADVOGADO(A)...
OAB/... nº ..."""
  },
  {
    "id": "recurso-ordinario-trabalhista",
    "title": "Recurso Ordinário Trabalhista (Art. 895 da CLT)",
    "area": "Direito do Trabalho",
    "subject": "Recursos",
    "legalBasis": "Arts. 893, II, e 895, I, da CLT; Guia de custas e depósito recursal (art. 899 da CLT).",
    "legalDeadlines": "8 (oito) dias úteis a contar da intimação da sentença trabalhista (art. 895 da CLT c/c art. 775 da CLT).",
    "jurisdiction": "Interposição perante a Vara do Trabalho prolatora da sentença e razões ao Tribunal Regional do Trabalho (TRT).",
    "overview": "O Recurso Ordinário Trabalhista é o recurso por excelência contra as sentenças definitivas ou terminativas proferidas pelas Varas do Trabalho (art. 895, I, da CLT). É composto de folha de rosto/interposição com comprovação do preparo (custas e depósito recursal na forma do art. 899 da CLT) e folha de razões recursais endereçadas ao Tribunal Regional do Trabalho.",
    "structureGuide": [
      {
        "step": "1. Petição de Interposição à Vara do Trabalho",
        "description": "Endereçar ao Juiz da Vara do Trabalho que prolatou a sentença com guias de recolhimento das custas e depósito recursal.",
        "practicalTip": "EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DO TRABALHO DA ... VARA DO TRABALHO DE ..."
      },
      {
        "step": "2. Folha Separada de Razões Recursais ao TRT",
        "description": "Endereçar ao Egrégio Tribunal Regional do Trabalho da respectiva Região.",
        "practicalTip": "EGRÉGIO TRIBUNAL REGIONAL DO TRABALHO DA ... REGIÃO"
      },
      {
        "step": "3. Da Tempestividade e do Preparo Recursal (Art. 899 CLT)",
        "description": "Demonstrar a contagem em dias úteis (8 dias) e juntar a guia GFIP/depósito recursal e custas judiciais devidamente pagas.",
        "practicalTip": "Súmula 128 do TST (deserção)."
      },
      {
        "step": "4. Das Preliminares e Razões de Reforma",
        "description": "Arguição de cerceamento do direito de defesa (indeferimento indevido de testemunha - art. 794 CLT) e mérito trabalhista.",
        "practicalTip": "Pedir a anulação da sentença por error in procedendo ou reforma por error in judicando."
      },
      {
        "step": "5. Dos Pedidos e Honorários Recursais",
        "description": "Conhecimento e provimento para anular ou reformar a sentença, julgando improcedentes os pleitos da petição inicial.",
        "practicalTip": "Inversão dos ônus de sucumbência."
      }
    ],
    "caseScenario": {
      "title": "Caso Hipotético FGV 2ª Fase Trabalhista",
      "problemStatement": "A empresa 'Logística Rápida S/A' foi condenada ao pagamento de horas extras porque o juiz da Vara do Trabalho indeferiu a oitiva da única testemunha da empresa presente na audiência que comprovaria o regime de teletrabalho externo sem controle de horário (art. 62, III, CLT), sob o fundamento de que 'a prova documental já era suficiente'. A empresa consignou seus protestos tempestivos em ata e a sentença foi publicada há 3 dias.",
      "clientNeeds": "Interpor Recurso Ordinário Trabalhista perante a Vara de origem com razões ao Tribunal Regional do Trabalho, comprovando o preparo recursal, arguindo preliminar de cerceamento de defesa com nulidade da sentença e mérito subsidiário de enquadramento no art. 62 da CLT."
    },
    "fullDraft": """[FOLHA 01 - INTERPOSIÇÃO]

EXCELENTÍSSIMO SENHOR DOUTOR JUIZ DO TRABALHO DA 2ª VARA DO TRABALHO DE FLORIANÓPOLIS / SC

Processo nº 0010987-65.2026.5.12.0002

LOGÍSTICA RÁPIDA S/A, já qualificada nos autos da Reclamação Trabalhista em epígrafe, que lhe move RECLAMANTE..., por seu advogado infra-assinado, vem, respeitosamente, à presença de Vossa Excelência, inconformada com a r. sentença de fls. ..., interpor o presente

RECURSO ORDINÁRIO TRABALHISTA

com supedâneo nos arts. 893, inciso II, e 895, inciso I, da CLT.
Informa que junta as guias comprovando o recolhimento tempestivo das custas processuais e do depósito recursal (Docs. 01 e 02), em estrito cumprimento ao art. 899 da CLT.
Requer a notificação do recorrido para que apresente contrarrazões e, após, a remessa dos autos ao Egrégio Tribunal Regional do Trabalho da 12ª Região.

Termos em que,
Pede deferimento.

Florianópolis/SC, data...
ADVOGADO(A)...
OAB/... nº ...

--------------------------------------------------------------------------------
[FOLHA 02 - RAZÕES DO RECURSO ORDINÁRIO]

EGRÉGIO TRIBUNAL REGIONAL DO TRABALHO DA 12ª REGIÃO
COLENDA TURMA RECURSAL
ÍNCLITOS DESEMBARGADORES

Recorrente: Logística Rápida S/A
Recorrido: Reclamante...
Origem: 2ª Vara do Trabalho de Florianópolis/SC
Autos nº: 0010987-65.2026.5.12.0002

RAZÕES DO RECURSO ORDINÁRIO

I - DOS PRESSUPOSTOS DE ADMISSIBILIDADE
O presente recurso é tempestivo, protocolado dentro do prazo peremptório de 8 (oito) dias úteis (art. 895, I, c/c art. 775 da CLT), e encontra-se devidamente preparado com a quitação integral das custas e do depósito recursal.

II - DA PRELIMINAR DE NULIDADE POR CERCEAMENTO DE DEFESA (ART. 5º, LV, DA CF E ART. 794 DA CLT)
Na audiência de instrução, o magistrado de primeiro grau indeferiu arbitrariamente a oitiva da testemunha patronal tempestivamente arrolada e presente no ato, cujo depoimento demonstraria que o reclamante realizava atividade externa de logística com total autonomia e sem fiscalização de horário.
A recorrente consignou expressamente seus tempestivos protestos antipreclusivos em ata de audiência.
A conduta judicial acarretou manifesto prejuízo processual à recorrente (art. 794 da CLT), resultando em sua posterior condenação exatamente na matéria fática que foi impedida de provar.
Impõe-se a anulação da respeitável sentença com determinação de reabertura da instrução processual para oitiva da referida testemunha.

III - DO MÉRITO: DA INCOMPATIBILIDADE COM CONTROLE DE JORNADA (ART. 62, I E III, DA CLT)
Ad argumentandum tantum, no mérito a sentença deve ser reformada.
O reclamante desempenhava atividades estritamente externas, incompatíveis com a fixação e controle de horário de trabalho, condição expressamente anotada em sua CTPS e no contrato individual de trabalho.
Inexiste nos autos qualquer evidência de submissão do autor a controle de ponto, aplicando-se o art. 62, I, da CLT, julgando-se improcedente a condenação em horas extras.

IV - DOS PEDIDOS
Ante o exposto, pugna a recorrente:
a) O CONHECIMENTO do Recurso Ordinário;
b) O ACOLHIMENTO DA PRELIMINAR de cerceamento de defesa, acolhendo a nulidade da sentença e determinando o retorno dos autos à Vara do Trabalho de origem para reinquirição testemunhal;
c) Subsidiariamente, no mérito, o integral PROVIMENTO do recurso para reformar a decisão e julgar totalmente improcedentes os pedidos da petição inicial;
d) A inversão das custas processuais e honorários sucumbenciais.

Nestes termos,
Pede provimento.

Florianópolis/SC, data...
ADVOGADO(A)...
OAB/... nº ..."""
  }
]

all_briefs = initial_briefs + remaining_briefs

with open("src/data/legalBriefs.ts", "w", encoding="utf-8") as f:
    f.write("import { LegalBrief } from '../types';\n\nexport const LEGAL_BRIEFS: LegalBrief[] = ")
    f.write(json.dumps(all_briefs, ensure_ascii=False, indent=2))
    f.write(";\n")

print(f"Total legal briefs saved: {len(all_briefs)}")
