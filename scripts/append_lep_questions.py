import json
import re

lep_questions = [
  {
    "id": "q-lep-01",
    "disciplineId": "lep",
    "subject": "Progressão de Regime - Réu Primário sem Violência (Art. 112, I)",
    "statement": "Carlos foi definitivamente condenado à pena de 4 anos de reclusão pelo crime de furto qualificado (sem violência ou grave ameaça à pessoa). Trata-se de réu primário e com bom comportamento carcerário atestado pelo diretor do estabelecimento prisional. De acordo com o art. 112 da Lei de Execução Penal (alterado pelo Pacote Anticrime), qual fração/percentual da pena Carlos deve cumprir para progredir para o regime semiaberto?",
    "options": [
      { "id": "A", "text": "16% (dezesseis por cento) da pena." },
      { "id": "B", "text": "20% (vinte por cento) da pena." },
      { "id": "C", "text": "25% (vinte e cinco por cento) da pena." },
      { "id": "D", "text": "1/6 (um sexto) da pena, conforme redação anterior à Lei 13.964/2019." }
    ],
    "correctOptionId": "A",
    "explanation": "A alternativa A está correta. Nos termos do art. 112, inciso I, da LEP (com redação dada pela Lei 13.964/2019), a progressão de regime de pena privativa de liberdade dar-se-á quando o apenado tiver cumprido ao menos 16% da pena, se for primário e o crime tiver sido cometido sem violência à pessoa ou grave ameaça.",
    "legalFoundation": "Art. 112, inciso I, da Lei nº 7.210/1984 (LEP)",
    "difficulty": "Fácil",
    "examReference": "Simulado OAB / Concursos · LEP · Q01"
  },
  {
    "id": "q-lep-02",
    "disciplineId": "lep",
    "subject": "Progressão de Regime - Reincidente em Crime sem Violência (Art. 112, II)",
    "statement": "Marcos, reincidente em crime de receptação (cometido sem violência ou grave ameaça), cumpre pena privativa de liberdade em regime fechado. Para pleitear a progressão ao regime semiaberto, a defesa deve demonstrar o cumprimento do requisito objetivo de:",
    "options": [
      { "id": "A", "text": "16% da pena." },
      { "id": "B", "text": "20% da pena." },
      { "id": "C", "text": "25% da pena." },
      { "id": "D", "text": "30% da pena." }
    ],
    "correctOptionId": "B",
    "explanation": "A alternativa B está correta. O art. 112, inciso II, da LEP estabelece o percentual de 20% (vinte por cento) da pena se o apenado for reincidente em crime cometido sem violência à pessoa ou grave ameaça.",
    "legalFoundation": "Art. 112, inciso II, da Lei nº 7.210/1984 (LEP)",
    "difficulty": "Médio",
    "examReference": "Simulado OAB / Concursos · LEP · Q02"
  },
  {
    "id": "q-lep-03",
    "disciplineId": "lep",
    "subject": "Progressão de Regime - Crime com Violência ou Grave Ameaça Primário (Art. 112, III)",
    "statement": "Lucas, primário e de bons antecedentes, foi condenado a 6 anos de reclusão pelo crime de roubo simples (cometido com grave ameaça à pessoa). Para fins de progressão de regime penitenciário, o percentual exigido pela LEP é de:",
    "options": [
      { "id": "A", "text": "20% da pena." },
      { "id": "B", "text": "25% da pena." },
      { "id": "C", "text": "30% da pena." },
      { "id": "D", "text": "40% da pena." }
    ],
    "correctOptionId": "B",
    "explanation": "A alternativa B está correta. Segundo o art. 112, inciso III, da LEP, a progressão exige o cumprimento de 25% (vinte e cinco por cento) da pena se o apenado for primário e o crime tiver sido cometido com violência à pessoa ou grave ameaça.",
    "legalFoundation": "Art. 112, inciso III, da Lei nº 7.210/1984 (LEP)",
    "difficulty": "Médio",
    "examReference": "Simulado OAB / Concursos · LEP · Q03"
  },
  {
    "id": "q-lep-04",
    "disciplineId": "lep",
    "subject": "Progressão de Regime - Reincidente em Crime com Violência (Art. 112, IV)",
    "statement": "Renato é reincidente específico em roubo circunstanciado (crime praticado com violência ou grave ameaça). Para que a Vara de Execuções Penais defira a progressão de regime prisional, Renato deverá cumprir a fração de:",
    "options": [
      { "id": "A", "text": "25% da pena." },
      { "id": "B", "text": "30% da pena." },
      { "id": "C", "text": "40% da pena." },
      { "id": "D", "text": "50% da pena." }
    ],
    "correctOptionId": "B",
    "explanation": "A alternativa B está correta. O art. 112, inciso IV, da LEP preconiza que a progressão dependerá do cumprimento de 30% (trinta por cento) da pena, se o apenado for reincidente em crime cometido com violência à pessoa ou grave ameaça.",
    "legalFoundation": "Art. 112, inciso IV, da Lei nº 7.210/1984 (LEP)",
    "difficulty": "Médio",
    "examReference": "Simulado OAB / Concursos · LEP · Q04"
  },
  {
    "id": "q-lep-05",
    "disciplineId": "lep",
    "subject": "Progressão de Regime - Crime Hediondo Primário sem Resultado Morte (Art. 112, V)",
    "statement": "Mariana foi condenada por tráfico ilícito de entorpecentes (art. 33, caput, da Lei 11.343/06), equiparado a hediondo. Trata-se de ré primária, sem resultado morte. O lapso temporal necessário para progressão de regime carcerário corresponde a:",
    "options": [
      { "id": "A", "text": "2/5 da pena." },
      { "id": "B", "text": "40% da pena." },
      { "id": "C", "text": "50% da pena." },
      { "id": "D", "text": "60% da pena." }
    ],
    "correctOptionId": "B",
    "explanation": "A alternativa B está correta. Pelo art. 112, inciso V, da LEP, exige-se 40% (quarenta por cento) da pena se o apenado for condenado pela prática de crime hediondo ou equiparado, se for primário.",
    "legalFoundation": "Art. 112, inciso V, da Lei nº 7.210/1984 (LEP)",
    "difficulty": "Médio",
    "examReference": "Simulado OAB / Concursos · LEP · Q05"
  },
  {
    "id": "q-lep-06",
    "disciplineId": "lep",
    "subject": "Crime Hediondo com Resultado Morte Primário (Art. 112, VI, 'a')",
    "statement": "Felipe foi condenado por latrocínio consumado (resultado morte), sendo réu primário. Além de cumprir 50% da pena para progressão de regime, a Lei de Execução Penal impõe a seguinte consequência legal peremptória:",
    "options": [
      { "id": "A", "text": "É admitido o livramento condicional após o cumprimento de 2/3 da reprimenda." },
      { "id": "B", "text": "É vedado o livramento condicional ao condenado por crime hediondo ou equiparado com resultado morte." },
      { "id": "C", "text": "A progressão somente será permitida após o cumprimento de 70% da pena." },
      { "id": "D", "text": "A remição por estudo é terminantemente proibida para esta modalidade criminosa." }
    ],
    "correctOptionId": "B",
    "explanation": "A alternativa B está correta. O art. 112, VI, 'a', da LEP prevê 50% de pena para o primário em crime hediondo/equiparado com resultado morte, e expressamente veda o livramento condicional, regra reforçada pelo art. 83, V, do Código Penal.",
    "legalFoundation": "Art. 112, inciso VI, alínea 'a', da LEP e art. 83, inciso V, do Código Penal",
    "difficulty": "Difícil",
    "examReference": "Simulado OAB / Concursos · LEP · Q06"
  },
  {
    "id": "q-lep-07",
    "disciplineId": "lep",
    "subject": "Progressão de Regime - Hediondo com Reincidência Específica (Art. 112, VIII)",
    "statement": "Condenado reincidente específico na prática de crime hediondo com resultado morte busca saber qual percentual de cumprimento de pena deve atingir para obter a progressão de regime prisional. Segundo a LEP, o percentual é de:",
    "options": [
      { "id": "A", "text": "50% da pena." },
      { "id": "B", "text": "60% da pena." },
      { "id": "C", "text": "70% da pena." },
      { "id": "D", "text": "80% da pena." }
    ],
    "correctOptionId": "C",
    "explanation": "A alternativa C está correta. O art. 112, inciso VIII, da LEP estabelece o percentual de 70% (setenta por cento) da pena se o apenado for reincidente na prática de crime hediondo ou equiparado com resultado morte, vedado o livramento condicional.",
    "legalFoundation": "Art. 112, inciso VIII, da Lei nº 7.210/1984 (LEP)",
    "difficulty": "Difícil",
    "examReference": "Simulado OAB / Concursos · LEP · Q07"
  },
  {
    "id": "q-lep-08",
    "disciplineId": "lep",
    "subject": "Progressão Especial para Mulher Mãe ou Gestante (Art. 112, § 3º)",
    "statement": "Joana, mãe de uma criança de 4 anos de idade, foi condenada por furto qualificado a 3 anos de reclusão. Não integra organização criminosa e é ré primária. Para a progressão especial prevista no art. 112, § 3º, da LEP, Joana precisará cumprir:",
    "options": [
      { "id": "A", "text": "1/6 (um sexto) da pena." },
      { "id": "B", "text": "1/8 (um oitavo) da pena." },
      { "id": "C", "text": "16% da pena." },
      { "id": "D", "text": "10% da pena." }
    ],
    "correctOptionId": "B",
    "explanation": "A alternativa B está correta. O art. 112, § 3º, da LEP garante progressão com 1/8 (um oitavo) da pena à mulher gestante ou mãe/responsável por crianças ou pessoas com deficiência, desde que preenchidos os requisitos cumulativos (crime sem violência, primariedade, etc.).",
    "legalFoundation": "Art. 112, § 3º, da Lei nº 7.210/1984 (LEP)",
    "difficulty": "Médio",
    "examReference": "Simulado OAB / Concursos · LEP · Q08"
  },
  {
    "id": "q-lep-09",
    "disciplineId": "lep",
    "subject": "Exame Criminológico e Súmula Vinculante 26 do STF",
    "statement": "O Juiz da Execução Penal indeferiu monocraticamente pedido de progressão de regime de um apenado sob a única fundamentação genérica de que 'a gravidade abstrata do delito exige prévia perícia psiquiátrica'. À luz da Súmula Vinculante 26 do STF e do art. 112, § 1º, da LEP, a decisão judicial:",
    "options": [
      { "id": "A", "text": "É válida, pois o exame criminológico é sempre obrigatório na execução de qualquer pena privativa de liberdade." },
      { "id": "B", "text": "É ilegal, pois para a concessão de progressão de regime, o magistrado pode determinar o exame criminológico, mas desde que o faça por decisão motivada pelas peculiaridades concretas do caso." },
      { "id": "C", "text": "É nula de pleno direito, pois o exame criminológico foi expressamente banido do ordenamento jurídico brasileiro." },
      { "id": "D", "text": "É irrecorrível, competindo unicamente ao Ministério Público deliberar sobre a necessidade da perícia." }
    ],
    "correctOptionId": "B",
    "explanation": "A alternativa B está correta. A Súmula Vinculante 26 dispõe: 'Para efeito de progressão de regime no cumprimento de pena por crime hediondo, ou equiparado, o juízo da execução observará a inconstitucionalidade do art. 2º da Lei 8.072/1990, sem prejuízo de avaliar se o condenado preenche, ou não, os requisitos objetivos e subjetivos do benefício, podendo determinar, para tal fim, de modo fundamentado, a realização de exame criminológico'.",
    "legalFoundation": "Súmula Vinculante nº 26 do STF e art. 112, § 1º, da LEP",
    "difficulty": "Médio",
    "examReference": "Simulado OAB / Concursos · LEP · Q09"
  },
  {
    "id": "q-lep-10",
    "disciplineId": "lep",
    "subject": "Remição de Pena por Trabalho - Proporção Legal (Art. 126, § 1º, II)",
    "statement": "O apenado Roberto trabalhou regularmente durante 90 (noventa) dias dentro da oficina prisional de marcenaria do presídio, cumprindo jornada de 8 horas diárias. De acordo com o art. 126, § 1º, inciso II, da LEP, Roberto terá direito a remir quantos dias de sua pena?",
    "options": [
      { "id": "A", "text": "90 dias de pena remidos (1 dia remido para cada dia trabalhado)." },
      { "id": "B", "text": "45 dias de pena remidos (1 dia remido a cada 2 dias trabalhados)." },
      { "id": "C", "text": "30 dias de pena remidos (1 dia remido a cada 3 dias trabalhados)." },
      { "id": "D", "text": "15 dias de pena remidos (1 dia remido a cada 6 dias trabalhados)." }
    ],
    "correctOptionId": "C",
    "explanation": "A alternativa C está correta. Conforme o art. 126, § 1º, II, da LEP, a contagem de tempo para o fim de remição será feita à razão de 1 (um) dia de pena a cada 3 (três) dias de trabalho. Portanto, 90 / 3 = 30 dias de pena remidos.",
    "legalFoundation": "Art. 126, § 1º, inciso II, da Lei nº 7.210/1984 (LEP)",
    "difficulty": "Fácil",
    "examReference": "Simulado OAB / Concursos · LEP · Q10"
  },
  {
    "id": "q-lep-11",
    "disciplineId": "lep",
    "subject": "Remição de Pena por Estudo (Art. 126, § 1º, I)",
    "statement": "Na execução penal, a remição de pena em decorrência de atividades de frequência escolar presencial ou a distância (ensino fundamental, médio ou superior) dar-se-á à razão de:",
    "options": [
      { "id": "A", "text": "1 dia de pena a cada 12 horas de frequência escolar, divididas, no mínimo, em 3 dias." },
      { "id": "B", "text": "1 dia de pena a cada 6 horas de frequência escolar ininterrupta." },
      { "id": "C", "text": "1 dia de pena a cada 20 horas letivas mensais." },
      { "id": "D", "text": "2 dias de pena por módulo concluído com aprovação." }
    ],
    "correctOptionId": "A",
    "explanation": "A alternativa A está correta. O art. 126, § 1º, inciso I, da LEP prevê a remição à razão de 1 (um) dia de pena a cada 12 (doze) horas de frequência escolar - atividade de ensino fundamental, médio, inclusive profissionalizante, ou superior, ou ainda de requalificação profissional - divididas, no mínimo, em 3 (três) dias.",
    "legalFoundation": "Art. 126, § 1º, inciso I, da Lei nº 7.210/1984 (LEP)",
    "difficulty": "Fácil",
    "examReference": "Simulado OAB / Concursos · LEP · Q11"
  },
  {
    "id": "q-lep-12",
    "disciplineId": "lep",
    "subject": "Remição por Conclusão de Ensino (Art. 126, § 5º)",
    "statement": "Enquanto cumpria pena, Tiago concluiu o ensino médio por meio de exame nacional de certificação de jovens e adultos (ENCCEJA). Nessa situação, o tempo a remir em função das horas de estudo será acrescido de:",
    "options": [
      { "id": "A", "text": "1/2 (metade)." },
      { "id": "B", "text": "1/3 (um terço)." },
      { "id": "C", "text": "1/4 (um quarto)." },
      { "id": "D", "text": "1/6 (um sexto)." }
    ],
    "correctOptionId": "B",
    "explanation": "A alternativa B está correta. O art. 126, § 5º, da LEP estabelece que o tempo a remir em função das horas de estudo será acrescido de 1/3 (um terço) no caso de conclusão do ensino fundamental, médio ou superior durante o cumprimento da pena, desde que certificada pelo órgão competente do sistema de educação.",
    "legalFoundation": "Art. 126, § 5º, da Lei nº 7.210/1984 (LEP)",
    "difficulty": "Médio",
    "examReference": "Simulado OAB / Concursos · LEP · Q12"
  },
  {
    "id": "q-lep-13",
    "disciplineId": "lep",
    "subject": "Remição por Leitura e Diretrizes do CNJ",
    "statement": "Acerca da remição de pena pela leitura nos estabelecimentos penitenciários, conforme a jurisprudência pacificada do STJ e a Recomendação nº 44/2013 do CNJ, assinale a afirmativa correta:",
    "options": [
      { "id": "A", "text": "A remição pela leitura é incompatível com o ordenamento pátrio, pois a LEP contempla exclusivamente o trabalho físico braçal." },
      { "id": "B", "text": "O apenado tem direito de remir 4 (quatro) dias de pena por obra lida e avaliada por resenha, até o limite de 12 (doze) livros por ano (máximo de 48 dias remidos anualmente)." },
      { "id": "C", "text": "O preso pode ler ilimitadas obras ao mês e remir toda a sua pena unicamente por resenhas literárias." },
      { "id": "D", "text": "A remição por leitura restringe-se a condenados por crimes contra a honra e sem violência." }
    ],
    "correctOptionId": "B",
    "explanation": "A alternativa B está correta. Nos termos da jurisprudência do STJ e da Recomendação nº 44/2013 do Conselho Nacional de Justiça, admite-se a remição pela leitura à razão de 4 dias de pena por obra literária lida com apresentação de resenha fidedigna, limitada a 12 obras por ano (máximo 48 dias anuais).",
    "legalFoundation": "Recomendação nº 44/2013 do CNJ e Jurisprudência pacificada do STJ",
    "difficulty": "Médio",
    "examReference": "Simulado OAB / Concursos · LEP · Q13"
  },
  {
    "id": "q-lep-14",
    "disciplineId": "lep",
    "subject": "Perda dos Dias Remidos por Falta Grave (Art. 127 e Súmula Vinculante 9)",
    "statement": "Condenado que possuía 120 dias remidos cometeu falta disciplinar de natureza grave dentro do presídio. O juiz da execução, ao julgar a falta, revogou a totalidade dos 120 dias remidos. Essa decisão judicial:",
    "options": [
      { "id": "A", "text": "Está correta, pois a falta grave opera a cassação automática e irrestrita de todo o tempo remido." },
      { "id": "B", "text": "Viola o art. 127 da LEP e a jurisprudência sumulada, pois o magistrado somente pode revogar até 1/3 (um terço) do tempo remido, motivando a fração escolhida." },
      { "id": "C", "text": "É válida somente se o preso for reincidente específico em crime hediondo." },
      { "id": "D", "text": "É vedada porque a falta grave jamais pode atingir os dias remidos pelo apenado." }
    ],
    "correctOptionId": "B",
    "explanation": "A alternativa B está correta. Pela redação da Lei 12.245/2010 ao art. 127 da LEP, em caso de falta grave, o juiz poderá revogar até 1/3 (um terço) do tempo remido, recomeçando a contagem a partir da data da infração disciplinar. A Súmula Vinculante 9 do STF corrobora a constitucionalidade da limitação de revogação.",
    "legalFoundation": "Art. 127 da Lei nº 7.210/1984 e Súmula Vinculante nº 9 do STF",
    "difficulty": "Médio",
    "examReference": "Simulado OAB / Concursos · LEP · Q14"
  },
  {
    "id": "q-lep-15",
    "disciplineId": "lep",
    "subject": "Saídas Temporárias após a Lei nº 14.843/2024",
    "statement": "Com as recentes alterações promovidas pela Lei Federal nº 14.843/2024 na Lei de Execução Penal sobre o instituto da saída temporária, assinale a assertiva correta:",
    "options": [
      { "id": "A", "text": "A saída temporária para visita à família foi totalmente extinta para qualquer apenado, restando apenas o livramento condicional." },
      { "id": "B", "text": "Não terá direito à saída temporária o condenado que cumpre pena por praticar crime hediondo ou com violência ou grave ameaça contra pessoa." },
      { "id": "C", "text": "Presos em regime fechado passaram a ter direito a 3 saídas temporárias anuais." },
      { "id": "D", "text": "A autorização de saída temporária pode agora ser deferida diretamente pelo diretor do presídio sem manifestação do Ministério Público." }
    ],
    "correctOptionId": "B",
    "explanation": "A alternativa B está correta. O art. 122, § 2º, da LEP, com redação dada pela Lei 14.843/2024, dispõe: 'Não terá direito à saída temporária a que se refere o caput deste artigo ou a qualquer outra o condenado que cumpre pena por praticar crime hediondo ou com violência, ou grave ameaça contra pessoa'.",
    "legalFoundation": "Art. 122, § 2º, da Lei nº 7.210/1984 (redação da Lei nº 14.843/2024)",
    "difficulty": "Difícil",
    "examReference": "Simulado OAB / Concursos · LEP · Q15"
  },
  {
    "id": "q-lep-16",
    "disciplineId": "lep",
    "subject": "Direito Intertemporal e Saída Temporária (Lei 14.843/2024)",
    "statement": "Sérgio cometeu crime de roubo qualificado em 2022, antes da entrada em vigor da Lei 14.843/2024. Já em 2026, cumprindo pena no regime semiaberto com ótimo comportamento, Sérgio requer saída temporária para visitação familiar. O Ministério Público manifestou-se contrariamente, alegando a nova vedação legal para crimes praticados com violência. Sobre a controvérsia, conforme o entendimento do STF e STJ sobre a irretroatividade da lex gravior:",
    "options": [
      { "id": "A", "text": "Aplica-se imediatamente a nova lei, pois normas de execução penal têm natureza puramente procedimental e atingem todos os apenados de imediato." },
      { "id": "B", "text": "Por se tratar de norma de direito material/mista mais gravosa (lex gravior), a restrição da Lei 14.843/2024 não retroage para alcançar crimes cometidos antes de sua vigência." },
      { "id": "C", "text": "A saída temporária somente poderá ser usufruída se Sérgio pagar antecipadamente a multa penal comutada." },
      { "id": "D", "text": "Sérgio deverá permanecer no regime semiaberto, sendo vedada qualquer concessão de benefício executório." }
    ],
    "correctOptionId": "B",
    "explanation": "A alternativa B está correta. A norma que restringe benefícios da execução penal, como a saída temporária, possui natureza jurídica mista (material e processual). Logo, pelo princípio constitucional da irretroatividade da lei penal mais gravosa (art. 5º, XL, da CF), a Lei 14.843/2024 não se aplica a crimes cometidos antes de sua vigência.",
    "legalFoundation": "Art. 5º, inciso XL, da CF/88 e Jurisprudência do STF/STJ",
    "difficulty": "Difícil",
    "examReference": "Simulado OAB / Concursos · LEP · Q16"
  },
  {
    "id": "q-lep-17",
    "disciplineId": "lep",
    "subject": "Prazos e Limites da Saída Temporária (Art. 124 da LEP)",
    "statement": "De acordo com o art. 124 da LEP, a autorização das saídas temporárias será concedida por prazo não superior a:",
    "options": [
      { "id": "A", "text": "7 (sete) dias, podendo ser renovada por mais 4 (quatro) vezes durante o ano." },
      { "id": "B", "text": "15 (quinze) dias, prorrogável uma única vez no ano." },
      { "id": "C", "text": "3 (três) dias, sem possibilidade de renovação semestral." },
      { "id": "D", "text": "30 (trinta) dias consecutivos a critério da administração penitenciária." }
    ],
    "correctOptionId": "A",
    "explanation": "A alternativa A está correta. O art. 124 da LEP preceitua que a autorização será concedida por prazo não superior a 7 (sete) dias, podendo ser renovada por mais 4 (quatro) vezes durante o ano, devendo haver intervalo de no mínimo 45 dias entre uma saída e outra.",
    "legalFoundation": "Art. 124, caput e § 1º, da Lei nº 7.210/1984 (LEP)",
    "difficulty": "Médio",
    "examReference": "Simulado OAB / Concursos · LEP · Q17"
  },
  {
    "id": "q-lep-18",
    "disciplineId": "lep",
    "subject": "Monitoramento Eletrônico na Execução Penal (Art. 146-B)",
    "statement": "O juiz da execução penal poderá definir a fiscalização por meio da monitoração eletrônica (tornozeleira eletrônica) expressamente nas seguintes hipóteses da LEP:",
    "options": [
      { "id": "A", "text": "Autorizar a saída temporária no regime semiaberto e determinar a prisão domiciliar." },
      { "id": "B", "text": "Exclusivamente no livramento condicional, sendo proibida no regime semiaberto." },
      { "id": "C", "text": "Apenas durante a audiência de custódia pré-processual." },
      { "id": "D", "text": "Apenas para presos que cumprem pena em estabelecimento de segurança máxima." }
    ],
    "correctOptionId": "A",
    "explanation": "A alternativa A está correta. O art. 146-B da LEP elenca que o juiz poderá definir a fiscalização por meio da monitoração eletrônica quando: II - autorizar a saída temporária no regime semiaberto; IV - determinar a prisão domiciliar.",
    "legalFoundation": "Art. 146-B da Lei nº 7.210/1984 (LEP)",
    "difficulty": "Fácil",
    "examReference": "Simulado OAB / Concursos · LEP · Q18"
  },
  {
    "id": "q-lep-19",
    "disciplineId": "lep",
    "subject": "Violação dos Deveres do Monitoramento Eletrônico (Art. 146-C)",
    "statement": "O condenado beneficiado com prisão domiciliar monitorada por tornozeleira eletrônica descarregou deliberadamente a bateria do aparelho e ultrapassou o perímetro fixado pela decisão judicial. Diante desse descumprimento, o juiz poderá aplicar:",
    "options": [
      { "id": "A", "text": "Regressão do regime, revogação da prisão domiciliar e anotação de falta grave." },
      { "id": "B", "text": "Exclusivamente uma advertência verbal, sendo vedada a regressão de regime prisional." },
      { "id": "C", "text": "Imediata decretação de nova pena autônoma de reclusão sem processo." },
      { "id": "D", "text": "Aumento do tempo total de cumprimento de pena em 1/3." }
    ],
    "correctOptionId": "A",
    "explanation": "A alternativa A está correta. Conforme o parágrafo único do art. 146-C da LEP, a violação dos deveres de monitoração eletrônica poderá acarretar, a critério do juiz: I - a regressão do regime; VI - a revogação da prisão domiciliar, além da caracterização de falta disciplinar de natureza grave (art. 50, V, da LEP).",
    "legalFoundation": "Art. 146-C, parágrafo único, e art. 50, V, da Lei nº 7.210/1984",
    "difficulty": "Médio",
    "examReference": "Simulado OAB / Concursos · LEP · Q19"
  },
  {
    "id": "q-lep-20",
    "disciplineId": "lep",
    "subject": "Livramento Condicional - Requisitos do Código Penal e LEP",
    "statement": "Para que o condenado não reincidente em crime doloso e com bons antecedentes possa obter o livramento condicional, o requisito objetivo temporal geral previsto no art. 83, I, do Código Penal é o cumprimento de mais de:",
    "options": [
      { "id": "A", "text": "1/3 (um terço) da pena." },
      { "id": "B", "text": "1/2 (metade) da pena." },
      { "id": "C", "text": "2/3 (dois terços) da pena." },
      { "id": "D", "text": "16% da pena." }
    ],
    "correctOptionId": "A",
    "explanation": "A alternativa A está correta. O art. 83, inciso I, do Código Penal estabelece que o juiz poderá conceder livramento condicional ao condenado a pena privativa de liberdade igual ou superior a 2 anos, cumprida mais de um terço da pena se o condenado não for reincidente em crime doloso e tiver bons antecedentes.",
    "legalFoundation": "Art. 83, inciso I, do Código Penal",
    "difficulty": "Fácil",
    "examReference": "Simulado OAB / Concursos · LEP · Q20"
  },
  {
    "id": "q-lep-21",
    "disciplineId": "lep",
    "subject": "Falta Grave e Livramento Condicional (Súmula 441 do STJ)",
    "statement": "O cometimento de falta disciplinar grave pelo apenado durante a execução penal acarreta a interrupção do prazo para obtenção de livramento condicional?",
    "options": [
      { "id": "A", "text": "Sim, pois a falta grave zera todos os prazos em curso na execução da pena privativa de liberdade." },
      { "id": "B", "text": "Não. A falta grave não interrompe o prazo para a obtenção de livramento condicional, consoante a Súmula 441 do STJ." },
      { "id": "C", "text": "Apenas se a falta grave envolver posse de entorpecentes no estabelecimento penal." },
      { "id": "D", "text": "Sim, reiniciando a contagem de 2/3 da pena a partir da data da infração disciplinar." }
    ],
    "correctOptionId": "B",
    "explanation": "A alternativa B está correta. A Súmula 441 do Superior Tribunal de Justiça é expressa: 'A falta grave não interrompe o prazo para obtenção de livramento condicional'. Embora possa impactar o requisito subjetivo (comportamento), não zera o lapso temporal objetivo.",
    "legalFoundation": "Súmula nº 441 do Superior Tribunal de Justiça (STJ)",
    "difficulty": "Difícil",
    "examReference": "Simulado OAB / Concursos · LEP · Q21"
  },
  {
    "id": "q-lep-22",
    "disciplineId": "lep",
    "subject": "Falta Grave e Concessão de Indulto (Súmula 535 do STJ)",
    "statement": "Em relação aos impactos da falta grave sobre o benefício de indulto e comutação de pena, assinale a opção que reflete o enunciado da Súmula 535 do STJ:",
    "options": [
      { "id": "A", "text": "A prática de falta grave impede perpetuamente a concessão de indulto presidencial." },
      { "id": "B", "text": "A prática de falta grave não interrompe o prazo para fim de comutação de pena ou indulto." },
      { "id": "C", "text": "A falta grave duplica o tempo residual exigido nos decretos presidenciais de indulto natalino." },
      { "id": "D", "text": "O indulto prescinde de qualquer decreto presidencial quando há falta grave superveniente." }
    ],
    "correctOptionId": "B",
    "explanation": "A alternativa B está correta. O STJ consolidou seu entendimento na Súmula 535: 'A prática de falta grave não interrompe o prazo para fim de comutação de pena ou indulto'. As exigências e vedações devem constar expressamente do respectivo decreto presidencial.",
    "legalFoundation": "Súmula nº 535 do Superior Tribunal de Justiça (STJ)",
    "difficulty": "Difícil",
    "examReference": "Simulado OAB / Concursos · LEP · Q22"
  },
  {
    "id": "q-lep-23",
    "disciplineId": "lep",
    "subject": "Falta Grave e Progressão de Regime (Súmula 534 do STJ)",
    "statement": "Diferentemente do que ocorre no livramento condicional e no indulto, qual é o efeito da prática de falta grave sobre a contagem do prazo para progressão de regime prisional?",
    "options": [
      { "id": "A", "text": "A prática de falta grave interrompe a contagem do prazo para a progressão de regime de cumprimento de pena, o qual se reinicia a partir do cometimento da infração (Súmula 534 do STJ)." },
      { "id": "B", "text": "Não há qualquer interrupção, sofrendo o preso apenas sanção disciplinar administrativa de isolamento celular." },
      { "id": "C", "text": "O prazo se interrompe apenas se houver condenação criminal transitada em julgado pelo novo crime." },
      { "id": "D", "text": "A interrupção só atinge apenados em regime semiaberto, sendo inócua no regime fechado." }
    ],
    "correctOptionId": "A",
    "explanation": "A alternativa A está correta. A Súmula 534 do STJ dispõe: 'A prática de falta grave interrompe a contagem do prazo para a progressão de regime de cumprimento de pena, o qual se reinicia a partir do cometimento dessa infração'. O novo cálculo incidirá sobre o restante da pena a cumprir.",
    "legalFoundation": "Súmula nº 534 do Superior Tribunal de Justiça (STJ)",
    "difficulty": "Médio",
    "examReference": "Simulado OAB / Concursos · LEP · Q23"
  },
  {
    "id": "q-lep-24",
    "disciplineId": "lep",
    "subject": "Audiência de Justificação e Súmula 533 do STJ",
    "statement": "Para o reconhecimento da prática de falta disciplinar de natureza grave e consequente regressão definitiva de regime prisional, o procedimento formal obrigatório é:",
    "options": [
      { "id": "A", "text": "A instauração de procedimento administrativo disciplinar (PAD) com defesa técnica e/ou oitiva do condenado em audiência de justificação pelo juízo da execução." },
      { "id": "B", "text": "Mero relatório sumário da guarda prisional, sem necessidade de contraditório ou oitiva do apenado." },
      { "id": "C", "text": "Decisão de ofício do Ministério Público com efeito rescisório imediato." },
      { "id": "D", "text": "Lavratura de auto de infração sem necessidade de intervenção de defensor ou advogado." }
    ],
    "correctOptionId": "A",
    "explanation": "A alternativa A está correta. Segundo a Súmula 533 do STJ e o art. 118, § 2º, da LEP, para o reconhecimento da prática de falta grave é necessária a instauração de PAD assegurada a ampla defesa por advogado ou defensor público, admitindo-se a realização de audiência de justificação pelo magistrado.",
    "legalFoundation": "Súmula nº 533 do STJ e art. 118, § 2º, da LEP",
    "difficulty": "Médio",
    "examReference": "Simulado OAB / Concursos · LEP · Q24"
  },
  {
    "id": "q-lep-25",
    "disciplineId": "lep",
    "subject": "Posse de Aparelho Celular no Estabelecimento Prisional (Art. 50, VII)",
    "statement": "Durante revista de rotina no pavilhão de um presídio, foi encontrado com o apenado Jorge um aparelho telefônico celular funcional e um chip telefônico. De acordo com o art. 50, inciso VII, da Lei de Execução Penal, a conduta de Jorge configura:",
    "options": [
      { "id": "A", "text": "Falta disciplinar de natureza leve." },
      { "id": "B", "text": "Falta disciplinar de natureza média." },
      { "id": "C", "text": "Falta disciplinar de natureza grave." },
      { "id": "D", "text": "Mero ilícito administrativo atípico se não houver prova de ligação efetuada." }
    ],
    "correctOptionId": "C",
    "explanation": "A alternativa C está correta. O art. 50, inciso VII, da LEP (incluído pela Lei 11.466/2007) categoriza como falta grave a conduta de: 'tiver em sua posse, utilizar ou fornecer aparelho telefônico, de rádio ou similar, que permita a comunicação com outros presos ou com o ambiente externo'.",
    "legalFoundation": "Art. 50, inciso VII, da Lei nº 7.210/1984 (LEP)",
    "difficulty": "Fácil",
    "examReference": "Simulado OAB / Concursos · LEP · Q25"
  },
  {
    "id": "q-lep-26",
    "disciplineId": "lep",
    "subject": "Recurso Cabível na Execução Penal (Art. 197 da LEP)",
    "statement": "Contra a decisão proferida pelo Juízo da Vara de Execuções Penais que indefere pedido de livramento condicional formulado pela defesa técnica, qual é o recurso cabível e expressamente nominado pela Lei de Execução Penal?",
    "options": [
      { "id": "A", "text": "Recurso de Apelação Penal." },
      { "id": "B", "text": "Recurso em Sentido Estrito (RESE)." },
      { "id": "C", "text": "Agravo em Execução Penal." },
      { "id": "D", "text": "Embargos Infringentes da Execução." }
    ],
    "correctOptionId": "C",
    "explanation": "A alternativa C está correta. O art. 197 da LEP estabelece de maneira unívoca: 'Das decisões proferidas pelo Juiz caberá recurso de agravo, sem efeito suspensivo'. Trata-se do Agravo em Execução Penal, recurso típico da jurisdição executória.",
    "legalFoundation": "Art. 197 da Lei nº 7.210/1984 (LEP)",
    "difficulty": "Fácil",
    "examReference": "Simulado OAB / Concursos · LEP · Q26"
  },
  {
    "id": "q-lep-27",
    "disciplineId": "lep",
    "subject": "Prazo e Rito do Agravo em Execução (Súmula 700 do STF)",
    "statement": "Qual é o prazo legal para a interposição do recurso de Agravo em Execução Penal e qual rito procedimental ele adota, consoante a jurisprudência sumulada do Supremo Tribunal Federal?",
    "options": [
      { "id": "A", "text": "Prazo de 5 (cinco) dias, seguindo o rito do Recurso em Sentido Estrito (Súmula 700 do STF)." },
      { "id": "B", "text": "Prazo de 15 (quinze) dias úteis, seguindo o Código de Processo Civil." },
      { "id": "C", "text": "Prazo de 8 (oito) dias, seguindo o rito da Apelação Penal." },
      { "id": "D", "text": "Prazo de 10 (dez) dias corridos, com sustentação oral obrigatória." }
    ],
    "correctOptionId": "A",
    "explanation": "A alternativa A está correta. A Súmula 700 do Supremo Tribunal Federal enuncia: 'É de cinco dias o prazo para a interposição de agravo contra decisão do juiz da execução penal'. O agravo segue o rito do recurso em sentido estrito (art. 581 e seguintes do CPP), admitindo juízo de retratação.",
    "legalFoundation": "Súmula nº 700 do STF e Código de Processo Penal",
    "difficulty": "Médio",
    "examReference": "Simulado OAB / Concursos · LEP · Q27"
  },
  {
    "id": "q-lep-28",
    "disciplineId": "lep",
    "subject": "Efeitos do Agravo em Execução Penal (Art. 197 da LEP)",
    "statement": "O advogado de defesa interpôs Agravo em Execução contra decisão que regrediu o apenado do regime semiaberto para o fechado. Como regra geral expressa no art. 197 da LEP, o recurso de agravo:",
    "options": [
      { "id": "A", "text": "É dotado de efeito suspensivo automático, sobrestando de imediato o cumprimento da decisão." },
      { "id": "B", "text": "Não é dotado de efeito suspensivo, operando efeitos imediatos a decisão agravada." },
      { "id": "C", "text": "Admite efeito suspensivo concedido pelo Diretor do Presídio." },
      { "id": "D", "text": "Tem efeito suspensivo apenas se houver caução financeira depositada em juízo." }
    ],
    "correctOptionId": "B",
    "explanation": "A alternativa B está correta. O art. 197 da LEP é categórico: 'Das decisões proferidas pelo Juiz caberá recurso de agravo, sem efeito suspensivo'. Eventual efeito suspensivo só pode ser concedido excepcionalmente via cautelar inominada ou habeas corpus pelo Tribunal.",
    "legalFoundation": "Art. 197 da Lei nº 7.210/1984 (LEP)",
    "difficulty": "Fácil",
    "examReference": "Simulado OAB / Concursos · LEP · Q28"
  },
  {
    "id": "q-lep-29",
    "disciplineId": "lep",
    "subject": "Regime Disciplinar Diferenciado - RDD (Art. 52 da LEP)",
    "statement": "O Regime Disciplinar Diferenciado (RDD) é modalidade especial de sanção disciplinar e de medida de segurança carcerária. Nos termos do art. 52 da LEP, o RDD é cabível quando:",
    "options": [
      { "id": "A", "text": "A prática de crime doloso constituir falta grave que cause subversão da ordem ou disciplina interna, ou quando o preso apresentar alto risco à ordem ou pertencer a organização criminosa." },
      { "id": "B", "text": "O condenado praticar qualquer falta de natureza leve ou média no estabelecimento prisional." },
      { "id": "C", "text": "O apenado se recusar a trabalhar na faxina das celas do pavilhão comum." },
      { "id": "D", "text": "O réu for estrangeiro e estiver aguardando decisão sobre extradição executória." }
    ],
    "correctOptionId": "A",
    "explanation": "A alternativa A está correta. O art. 52 da LEP preceitua que o RDD aplica-se quando a prática de crime doloso constituir falta grave e cause subversão da ordem ou disciplina internas, bem como aos presos que apresentem alto risco para a ordem e a segurança do estabelecimento ou da sociedade, ou sobre os quais recaiam fundadas suspeitas de envolvimento em organização criminosa.",
    "legalFoundation": "Art. 52, caput e §§ 1º e 2º, da Lei nº 7.210/1984 (LEP)",
    "difficulty": "Médio",
    "examReference": "Simulado OAB / Concursos · LEP · Q29"
  },
  {
    "id": "q-lep-30",
    "disciplineId": "lep",
    "subject": "Duração Máxima do RDD (Art. 52, I, da LEP)",
    "statement": "Com as alterações da Lei nº 13.964/2019 (Pacote Anticrime), qual é a duração máxima do Regime Disciplinar Diferenciado (RDD)?",
    "options": [
      { "id": "A", "text": "Duração máxima de até 2 (dois) anos, sem prejuízo de repetição da sanção por nova falta grave de mesma espécie." },
      { "id": "B", "text": "Duração máxima improrrogável de 360 (trezentos e sessenta) dias." },
      { "id": "C", "text": "Duração de 6 (seis) meses, admitida uma única prorrogação." },
      { "id": "D", "text": "Prazo indeterminado fixado discricionariamente pelo juiz da execução." }
    ],
    "correctOptionId": "A",
    "explanation": "A alternativa A está correta. O art. 52, inciso I, da LEP estabelece: 'duração máxima de até 2 (dois) anos, sem prejuízo de repetição da sanção por nova falta grave de mesma espécie'. Além disso, o § 1º prevê que o RDD poderá ser prorrogado sucessivamente por períodos de 1 ano existindo indícios de continuidade de liderança em organização criminosa.",
    "legalFoundation": "Art. 52, inciso I e § 1º, da Lei nº 7.210/1984 (LEP)",
    "difficulty": "Difícil",
    "examReference": "Simulado OAB / Concursos · LEP · Q30"
  },
  {
    "id": "q-lep-31",
    "disciplineId": "lep",
    "subject": "Direitos e Restrições no Regime Disciplinar Diferenciado",
    "statement": "No Regime Disciplinar Diferenciado (RDD), o regime de visitas e banho de sol do apenado segue as seguintes regras expressas no art. 52 da LEP:",
    "options": [
      { "id": "A", "text": "Visitas quinzenais de 2 pessoas por vez (sem contato físico e com comunicação por interfone através de vidro), e banho de sol de 2 horas diárias em grupos de até 4 presos que não pertençam à mesma facção." },
      { "id": "B", "text": "Visitas semanais livres de contato com familiares e banho de sol de 4 horas." },
      { "id": "C", "text": "Vedação absoluta de qualquer visita, inclusive de advogados e defensores públicos." },
      { "id": "D", "text": "Banho de sol individual de 15 minutos semanais sem visão do céu aberto." }
    ],
    "correctOptionId": "A",
    "explanation": "A alternativa A está correta. O art. 52, incisos III e IV, da LEP define: visitas quinzenais, de 2 pessoas por vez, a serem realizadas em local com vidro e dispositivo de voz, sem contato físico nem passagem de objetos, e banho de sol de 2 horas diárias, em grupos de até 4 presos, desde que não sejam do mesmo grupo criminoso.",
    "legalFoundation": "Art. 52, incisos III e IV, da Lei nº 7.210/1984 (LEP)",
    "difficulty": "Difícil",
    "examReference": "Simulado OAB / Concursos · LEP · Q31"
  },
  {
    "id": "q-lep-32",
    "disciplineId": "lep",
    "subject": "Prisão Domiciliar na Execução Penal (Art. 117 da LEP)",
    "statement": "O art. 117 da Lei de Execução Penal prevê que o recolhimento do apenado em residência particular (prisão domiciliar) no regime aberto somente poderá ser deferido nas seguintes situações expressas:",
    "options": [
      { "id": "A", "text": "Condenado maior de 70 anos; acometido de doença grave; condenada com filho menor ou deficiente físico/mental; e condenada gestante." },
      { "id": "B", "text": "A qualquer condenado primário desempregado em regime semiaberto." },
      { "id": "C", "text": "Apenas se houver greve dos servidores penitenciários estaduais." },
      { "id": "D", "text": "Exclusivamente para crimes culposos de trânsito." }
    ],
    "correctOptionId": "A",
    "explanation": "A alternativa A está correta. Nos termos do art. 117 da LEP: Somente se admitirá o recolhimento do beneficiário de regime aberto em residência particular quando se tratar de: I - condenado maior de 70 (setenta) anos; II - condenado acometido de doença grave; III - condenada com filho menor ou deficiente físico ou mental; IV - condenada gestante.",
    "legalFoundation": "Art. 117 da Lei nº 7.210/1984 (LEP)",
    "difficulty": "Médio",
    "examReference": "Simulado OAB / Concursos · LEP · Q32"
  },
  {
    "id": "q-lep-33",
    "disciplineId": "lep",
    "subject": "Trabalho Externo do Preso em Regime Fechado (Arts. 36 e 37)",
    "statement": "Sobre a prestação de trabalho externo pelo apenado que se encontra cumprindo pena no regime fechado, assinale a afirmativa correta:",
    "options": [
      { "id": "A", "text": "É admissível exclusivamente em serviços ou obras públicas realizadas por órgãos da administração direta ou indireta, ou entidades privadas, desde que tomadas as cautelas contra a fuga e em favor da disciplina." },
      { "id": "B", "text": "É totalmente vedada em qualquer circunstância para apenados em regime fechado." },
      { "id": "C", "text": "Pode ser exercida livremente no comércio privado sem vigilância policial desde o primeiro dia de cumprimento da pena." },
      { "id": "D", "text": "Independe de qualquer autorização judicial ou administrativa." }
    ],
    "correctOptionId": "A",
    "explanation": "A alternativa A está correta. O art. 36 da LEP prevê que o trabalho externo é admissível para os presos em regime fechado somente em serviços ou obras públicas realizadas por órgãos da administração direta ou indireta, ou entidades privadas, desde que tomadas as cautelas contra a fuga e em favor da disciplina.",
    "legalFoundation": "Art. 36 da Lei nº 7.210/1984 (LEP)",
    "difficulty": "Médio",
    "examReference": "Simulado OAB / Concursos · LEP · Q33"
  },
  {
    "id": "q-lep-34",
    "disciplineId": "lep",
    "subject": "Remuneração do Trabalho do Preso (Art. 28 e 29 da LEP)",
    "statement": "No tocante à natureza jurídica e remuneração do trabalho exercido pelo apenado, a LEP preconiza que:",
    "options": [
      { "id": "A", "text": "O trabalho do condenado não está sujeito ao regime da Consolidação das Leis do Trabalho (CLT) e será remunerado, mediante prévia tabela, não podendo ser inferior a 3/4 do salário mínimo." },
      { "id": "B", "text": "O trabalho prisional gera vínculo empregatício formal regido pela CLT com direito a FGTS e férias remuneradas." },
      { "id": "C", "text": "O trabalho penitenciário é compulsório e não remunerado em nenhuma hipótese." },
      { "id": "D", "text": "A remuneração deve equivaler obrigatoriamente a no mínimo 2 salários mínimos nacionais." }
    ],
    "correctOptionId": "A",
    "explanation": "A alternativa A está correta. O art. 28, § 2º, da LEP dispõe que 'o trabalho do preso não está sujeito ao regime da Consolidação das Leis do Trabalho'. E o art. 29 estabelece que o trabalho do preso será remunerado, mediante prévia tabela, não podendo ser inferior a 3/4 (três quartos) do salário mínimo.",
    "legalFoundation": "Art. 28, § 2º, e art. 29 da Lei nº 7.210/1984 (LEP)",
    "difficulty": "Fácil",
    "examReference": "Simulado OAB / Concursos · LEP · Q34"
  },
  {
    "id": "q-lep-35",
    "disciplineId": "lep",
    "subject": "Conversão de Penas Restritivas em Privativas de Liberdade (Art. 181)",
    "statement": "O condenado a penas restritivas de direitos (prestação de serviços à comunidade) deixa injustificadamente de comparecer à entidade designada e recusa-se a cumprir a determinação judicial. Conforme o art. 181 da LEP e art. 44, § 4º, do Código Penal:",
    "options": [
      { "id": "A", "text": "A pena restritiva de direitos converter-se-á em privativa de liberdade pelo tempo restante a cumprir, respeitado o saldo mínimo de 30 dias." },
      { "id": "B", "text": "Ocorrerá a extinção automática da punibilidade pela desnecessidade da pena." },
      { "id": "C", "text": "A pena será convertida obrigatoriamente em medida de segurança perpétua." },
      { "id": "D", "text": "O juiz é obrigado a duplicar a prestação de serviços sem poder determinar a prisão." }
    ],
    "correctOptionId": "A",
    "explanation": "A alternativa A está correta. O art. 181 da LEP e o art. 44, § 4º, do Código Penal autorizam a conversão da pena restritiva de direitos em privativa de liberdade quando ocorrer o descumprimento injustificado da obrigação imposta, computando-se o período já cumprido.",
    "legalFoundation": "Art. 181 da Lei nº 7.210/1984 e art. 44, § 4º, do CP",
    "difficulty": "Médio",
    "examReference": "Simulado OAB / Concursos · LEP · Q35"
  },
  {
    "id": "q-lep-36",
    "disciplineId": "lep",
    "subject": "Superveniência de Doença Mental na Execução (Art. 183 da LEP)",
    "statement": "Quando, no curso da execução da pena privativa de liberdade, sobrevier doença mental ou perturbação da saúde mental no condenado, o juiz da execução deverá:",
    "options": [
      { "id": "A", "text": "Determinar a imediata soltura sem qualquer acompanhamento médico estatal." },
      { "id": "B", "text": "Ordenar a conversão da pena privativa de liberdade em medida de segurança, com internação em hospital de custódia e tratamento psiquiátrico." },
      { "id": "C", "text": "Transferir o apenado em definitivo para o Regime Disciplinar Diferenciado." },
      { "id": "D", "text": "Ignorar a condição psíquica, devendo o apenado cumprir a pena na cela comum." }
    ],
    "correctOptionId": "B",
    "explanation": "A alternativa B está correta. Conforme o art. 183 da LEP: 'Quando, no curso da execução da pena privativa de liberdade, sobrevier doença mental ou perturbação da saúde mental, o Juiz, de ofício, a requerimento do Ministério Público, da Defensoria Pública ou do procurador do condenado, nomeará curador e determinará a conversão da pena em medida de segurança'.",
    "legalFoundation": "Art. 183 da Lei nº 7.210/1984 (LEP)",
    "difficulty": "Difícil",
    "examReference": "Simulado OAB / Concursos · LEP · Q36"
  },
  {
    "id": "q-lep-37",
    "disciplineId": "lep",
    "subject": "Unificação e Soma de Penas (Art. 111 da LEP)",
    "statement": "Sobrevindo condenação definitiva por novo crime no curso da execução penal, como o juiz deve proceder em relação à fixação do regime prisional?",
    "options": [
      { "id": "A", "text": "Far-se-á a unificação e soma das penas, sendo o novo regime determinado pelo resultado da soma das penas privativas de liberdade, subtraído o tempo já cumprido." },
      { "id": "B", "text": "O apenado cumprirá primeiro integralmente a pena mais antiga e só depois iniciará a nova condenação." },
      { "id": "C", "text": "O apenado regredirá obrigatoriamente para regime fechado de segurança máxima, independentemente do quantum de pena." },
      { "id": "D", "text": "O juiz deve aplicar apenas a pena mais grave, desprezando a menor por consunção executória." }
    ],
    "correctOptionId": "A",
    "explanation": "A alternativa A está correta. O art. 111, parágrafo único, da LEP prevê que, sobrevindo condenação no curso da execução, somar-se-á a pena ao restante da que está sendo cumprida, para determinação do regime. Se o total resultante ultrapassar 8 anos, caberá a fixação do regime fechado.",
    "legalFoundation": "Art. 111, parágrafo único, da Lei nº 7.210/1984 (LEP)",
    "difficulty": "Médio",
    "examReference": "Simulado OAB / Concursos · LEP · Q37"
  },
  {
    "id": "q-lep-38",
    "disciplineId": "lep",
    "subject": "Detração Penal na Execução (Art. 42 do Código Penal)",
    "statement": "O instituto da detração penal na fase da execução da pena consiste em:",
    "options": [
      { "id": "A", "text": "Computar, na pena privativa de liberdade e na medida de segurança, o tempo de prisão provisória, no Brasil ou no estrangeiro, o de prisão administrativa e o de internação em qualquer dos estabelecimentos referidos." },
      { "id": "B", "text": "Reduzir a pena em 50% para condenados que colaboram com o diretor da unidade prisional." },
      { "id": "C", "text": "Perdoar judicialmente a pena de multa após 2 anos de inadimplência involuntária." },
      { "id": "D", "text": "Transferir a responsabilidade patrimonial da pena aos sucessores do apenado." }
    ],
    "correctOptionId": "A",
    "explanation": "A alternativa A está correta. A detração penal (art. 42 do Código Penal) consiste no cômputo, na pena privativa de liberdade e na medida de segurança, do tempo de prisão provisória cumprido cautelarmente antes do trânsito em julgado da condenação.",
    "legalFoundation": "Art. 42 do Código Penal",
    "difficulty": "Fácil",
    "examReference": "Simulado OAB / Concursos · LEP · Q38"
  },
  {
    "id": "q-lep-39",
    "disciplineId": "lep",
    "subject": "Prescrição da Pretensão Executória e Termo Inicial (STF Tema 788)",
    "statement": "Sobre o termo inicial da prescrição da pretensão executória da pena pelo Estado, o Supremo Tribunal Federal fixou tese em repercussão geral (Tema 788) assentando que:",
    "options": [
      { "id": "A", "text": "O prazo prescricional para o Estado executar a pena começa a fluir a partir do trânsito em julgado para ambas as partes (acusação e defesa), e não da data do trânsito em julgado exclusivo para a acusação." },
      { "id": "B", "text": "A prescrição executória começa a correr no exato momento da publicação da sentença penal condenatória de primeira instância." },
      { "id": "C", "text": "A pretensão executória é imprescritível para qualquer modalidade criminosa." },
      { "id": "D", "text": "O termo inicial coincide com a data da fuga do apenado do estabelecimento prisional em qualquer hipótese." }
    ],
    "correctOptionId": "A",
    "explanation": "A alternativa A está correta. O STF, no julgamento do Tema 788 de Repercussão Geral, assentou que o prazo para a prescrição da pretensão executória é contado a partir do trânsito em julgado para ambas as partes, momento em que a pena se torna efetivamente exequível pelo Estado.",
    "legalFoundation": "STF, Tema 788 de Repercussão Geral (ARE 848.107/DF)",
    "difficulty": "Difícil",
    "examReference": "Simulado OAB / Concursos · LEP · Q39"
  },
  {
    "id": "q-lep-40",
    "disciplineId": "lep",
    "subject": "Competência do Juízo da Execução (Súmula 192 do STJ)",
    "statement": "O condenado pela Justiça Federal que cumpre a pena privativa de liberdade em estabelecimento prisional estadual subordina-se à jurisdição de qual juízo da execução penal, conforme a Súmula 192 do STJ?",
    "options": [
      { "id": "A", "text": "Compete ao Juízo das Execuções Penais do Estado a execução das penas impostas a sentenciados pela Justiça Federal, Militar ou Eleitoral, quando recolhidos a estabelecimentos prisionais estaduais." },
      { "id": "B", "text": "Compete privativamente à Justiça Federal, sendo nulos quaisquer atos praticados por juízes de direito estaduais." },
      { "id": "C", "text": "Compete exclusivamente ao Superior Tribunal de Justiça dirimir a fiscalização de estabelecimentos prisionais estaduais." },
      { "id": "D", "text": "Compete ao juízo da condenação originária, vedada qualquer delegação de competência executória." }
    ],
    "correctOptionId": "A",
    "explanation": "A alternativa A está correta. A Súmula 192 do Superior Tribunal de Justiça estabelece: 'Compete ao Juízo das Execuções Penais do Estado a execução das penas impostas a sentenciados pela Justiça Federal, Militar ou Eleitoral, quando recolhidos a estabelecimentos sujeitos à administração estadual'.",
    "legalFoundation": "Súmula nº 192 do Superior Tribunal de Justiça (STJ)",
    "difficulty": "Médio",
    "examReference": "Simulado OAB / Concursos · LEP · Q40"
  }
]

with open("src/data/questions.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Replace the closing bracket '];' with the new questions
replacement = ",\n" + json.dumps(lep_questions, ensure_ascii=False, indent=2)[1:-1].strip() + "\n];"

# Find last occurrence of ];
last_bracket = content.rfind("];")
if last_bracket != -1:
    new_content = content[:last_bracket].rstrip() + replacement
    with open("src/data/questions.ts", "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Successfully appended 40 LEP questions to src/data/questions.ts!")
else:
    print("Could not locate end of questions array!")
