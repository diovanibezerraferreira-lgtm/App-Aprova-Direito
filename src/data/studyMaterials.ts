import { StudyMaterial } from '../types';

export const STUDY_MATERIALS: StudyMaterial[] = [
  {
    "id": "manual-ext-etica-50p",
    "title": "Tratado Extensivo de Ética Profissional e Estatuto da Advocacia",
    "disciplineId": "etica",
    "author": "Prof. Dr. Lucas Mendes & Comitê Deontológico da OAB",
    "estimatedReadTime": "54 páginas didáticas · 3h45 de estudo aprofundado",
    "pageCount": 54,
    "isExtensiveManual": true,
    "edition": "Manual Completo 2026/2027 · Edição Definitiva",
    "description": "Manual exaustivo com mais de 50 páginas de conteúdo detalhado, analisando todos os artigos do Estatuto (Lei 8.906/94), Código de Ética e Disciplina (CED), Regulamento Geral e súmulas do CFOAB com casos práticos e pegadinhas da FGV.",
    "chapters": [
      {
        "title": "Módulo 1: Natureza Constitucional da Advocacia e Ausência de Hierarquia (Págs. 1-6)",
        "content": "A advocacia é formalmente reconhecida pelo art. 133 da Constituição Federal de 1988 como função indispensável à administração da justiça, sendo o causídico inviolável por seus atos e manifestações no exercício profissional, nos estritos limites da lei.\nO art. 6º da Lei Federal nº 8.906/94 (Estatuto da OAB) estabelece o postulado basilar da inexistência de hierarquia nem de subordinação entre advogados, magistrados e membros do Ministério Público. Todos devem dispensar-se consideração e respeito recíprocos.\nEssa paridade de armas e deferência mútua assegura que o advogado não é subordinado a nenhum agente estatal. Juízes e promotores não detêm supremacia protocolar ou processual sobre o patrono constituído.\nO desagravo público constitui instrumento de defesa corporativa e cívica da advocacia (art. 7º, § 5º), cabível quando o causídico é ofendido em razão de sua atuação profissional. O desagravo independe de requerimento do ofendido, devendo ser instruído pelo Conselho Seccional competente com ampla publicidade.",
        "keyStatutes": [
          "Art. 133 da CF/88",
          "Art. 6º da Lei 8.906/94",
          "Art. 7º, § 5º da Lei 8.906/94"
        ],
        "summaryPoints": [
          "Inexistência de qualquer hierarquia entre juiz, promotor e advogado.",
          "Inviolabilidade constitucional por atos e palavras no estrito exercício da causa.",
          "Desagravo público assegurado mesmo sem provocação do advogado ofendido."
        ]
      },
      {
        "title": "Módulo 2: Estatuto das Prerrogativas Fundamentais do Advogado (Págs. 7-12)",
        "content": "O art. 7º da Lei 8.906/94 compõe a espinha dorsal da atuação da advocacia. Dentre os direitos inafastáveis consagrados destacam-se:\n1. Inviolabilidade do escritório, instrumentos de trabalho e correspondências: garantia consagrada no inciso II. Qualquer busca e apreensão exige decisão judicial expressamente motivada por indícios de prática de crime pelo próprio advogado, sendo nulo mandado genérico ou de pesca probatória (\"fishing expedition\"). A diligência deve ser obrigatoriamente acompanhada por representante formal da OAB.\n2. Comunicação reservada com cliente preso: o inciso III assegura a comunicação pessoal e reservada mesmo sem procuração outorgada, ainda que o custodiado se encontre sob regime de incomunicabilidade judicial.\n3. Vista de autos em repartições públicas civis, policiais e militares: o inciso XIV permite examinar autos de flagrante, inquérito ou termo circunstanciado, findos ou em curso, mesmo sem procuração, podendo apontar e extrair cópias. A Súmula Vinculante 14 do STF ratifica o direito do defensor amplo acesso a todos os elementos de prova já documentados.\n4. Sustentação oral pós-voto e reclamações de ordem: o advogado tem a faculdade de usar da palavra, pela ordem, para esclarecer equívocos de fato cometidos pelos julgadores (art. 7º, X).",
        "keyStatutes": [
          "Art. 7º, II, III, XIV e § 6º da Lei 8.906/94",
          "Súmula Vinculante 14 do STF"
        ],
        "summaryPoints": [
          "Busca no escritório exige presença indispensável de delegado da OAB e ordem detalhada.",
          "Entrevista com cliente recluso é livre e não depende de instrumento de mandato.",
          "Súmula Vinculante 14 garante acesso irrestrito a peças e laudos já acostados aos autos."
        ]
      },
      {
        "title": "Módulo 3: Incompatibilidades Absolutas e Impedimentos Relativos (Págs. 13-18)",
        "content": "O exercício da advocacia subordina-se a rigoroso controle de idoneidade e desvinculação com funções estatais potencialmente incompatíveis:\n- Incompatibilidade (art. 28): consiste na vedação TOTAL e absoluta ao exercício da advocacia, impedindo inclusive o patrocínio em causa própria. Hipóteses capitais da OAB:\na) Chefes do Poder Executivo e seus vices (Presidente, Governadores, Prefeitos);\nb) Membros da mesa do Poder Legislativo e seus substitutos;\nc) Membros do Poder Judiciário, do Ministério Público e de Tribunais de Contas;\nd) Ocupantes de cargos com poder de decisão sobre bens e rendas públicas e auditores fiscais;\ne) Policiais de qualquer natureza (Polícia Civil, Militar, Federal, Rodoviária, Penal e Guardas Municipais);\nf) Titulares de funções de chefia ou direção em cartórios e ofícios de notas e registros públicos.\n- Impedimento (art. 30): trata-se da proibição PARCIAL e pontual. O advogado não pode advogar apenas contra certas pessoas de direito público.\nA regra geral mais cobrada na OAB: servidores públicos da administração direta, indireta e fundacional são impedidos de advogar contra a Fazenda Pública que os remunera ou à qual esteja vinculada a entidade de sua lotação. Membros do Poder Legislativo (deputados e senadores que não estejam na Mesa) são impedidos contra qualquer pessoa jurídica de direito público estatal.",
        "keyStatutes": [
          "Art. 28 da Lei 8.906/94",
          "Art. 30 da Lei 8.906/94"
        ],
        "summaryPoints": [
          "Incompatibilidade = proibição total (ex.: policial civil não pode advogar nem para si mesmo).",
          "Impedimento = proibição seletiva (servidor público federal pode advogar, menos contra a União).",
          "A posse em cargo incompatível definitivo gera o cancelamento da inscrição na OAB."
        ]
      },
      {
        "title": "Módulo 4: Regime Jurídico Completo dos Honorários Advocatícios (Págs. 19-24)",
        "content": "Os honorários advocatícios subdividem-se em convencionados (contratuais), arbitrados e sucumbenciais (art. 22).\nRegras fundamentais:\n1. Natureza alimentar: possuem os mesmos privilégios dos créditos trabalhistas em falência, concurso de credores e insolvência civil (Súmula Vinculante 47 do STF).\n2. Honorários sucumbenciais: pertencem exclusivamente ao advogado, não pertencendo à parte vencedora. O art. 85, § 14 do CPC/15 veda expressamente a compensação em caso de sucumbência recíproca.\n3. Cláusula quota litis: admitida pelo Código de Ética e Disciplina (art. 50 do CED), desde que prevista por escrito e em que a soma dos honorários convencionados mais os de sucumbência não ultrapasse o benefício econômico auferido pelo cliente.\n4. Prescrição: prescreve em 5 (cinco) anos a ação de cobrança de honorários, contado o prazo do vencimento do contrato, do trânsito em julgado da decisão ou da revogação do mandato (art. 25).\n5. Execução autônoma: o causídico tem o direito de executar os honorários de sucumbência nos próprios autos da demanda principal ou em processo autônomo (art. 24).",
        "keyStatutes": [
          "Arts. 22 a 26 da Lei 8.906/94",
          "Art. 85 do CPC/15",
          "Súmula Vinculante 47 do STF",
          "Art. 50 do CED"
        ],
        "summaryPoints": [
          "Honorários de sucumbência são verba privativa do causídico e impenhoráveis em regra.",
          "Vedada compensação de sucumbência na hipótese de vitória e derrota parciais.",
          "Quota litis não pode ser superior à cota atribuída à parte patrocinada."
        ]
      },
      {
        "title": "Módulo 5: Sociedade de Advogados e Sociedade Unipessoal (Págs. 25-30)",
        "content": "A sociedade de advogados é regida pelos arts. 15 a 17 da Lei 8.906/94 e pelo Regulamento Geral.\nRegras fundamentais:\n1. Personalidade jurídica: adquire-se com o registro de seus atos constitutivos no Conselho Seccional da OAB em cuja base territorial se instale (não é registrada na Junta Comercial nem no Cartório de Registro Civil de Pessoas Jurídicas).\n2. Sociedade Unipessoal de Advocacia: instituída pela Lei Federal 13.247/2016, autoriza que um único advogado institua pessoa jurídica própria para fins fiscais e patrimoniais.\n3. Proibições: nenhum advogado pode integrar mais de uma sociedade de advogados ou sociedade individual com sede ou filial na mesma base territorial de um mesmo Conselho Seccional. É absolutamente vedada a adoção de forma ou denominação mercantil (ex.: \"Advogados S.A.\" ou \"Consultoria Jurídica LTDA\").\n4. Responsabilidade: a sociedade responde subsidiariamente pelos atos de seus membros, e os advogados sócios respondem solidária e ilimitadamente pelos danos causados diretamente a clientes por ação ou omissão culposa no patrocínio.",
        "keyStatutes": [
          "Arts. 15 a 17 da Lei 8.906/94",
          "Lei nº 13.247/2016"
        ],
        "summaryPoints": [
          "Registro exclusivo no Conselho Seccional da OAB.",
          "Vedada qualquer feição comercial ou sociedade anônima na advocacia.",
          "Advogado só pode pertencer a uma sociedade ou sociedade unipessoal por seccional."
        ]
      },
      {
        "title": "Módulo 6: Publicidade, Marketing Jurídico e Provimento 205/2021 (Págs. 31-36)",
        "content": "A publicidade na advocacia deve orientar-se pela sobriedade, moderação e caráter meramente informativo, preservando a dignidade da profissão e a inviolabilidade da confiança do público.\nO Provimento nº 205/2021 do CFOAB modernizou as diretrizes do marketing jurídico:\n- É permitido: impulsionamento de publicações informativas em redes sociais; criação de websites institucionais e canais em plataformas de vídeo com conteúdo técnico; participação em podcasts, programas de rádio e TV como especialista, desde que com finalidade educativa sem divulgar contato para angariação.\n- É vedado: vincular a advocacia a outras atividades mercantis no mesmo espaço físico; menção a valores de honorários, formas de parcelamento ou gratuidade; ostentação patrimonial (veículos de luxo, joias e bens suntuosos como atrativo profissional); captação ativa de clientela através de mala direta indiscriminada, mensagens em massa não autorizadas (\"spam\") ou abordagem em locais de acidentes e filas de benefícios sociais.",
        "keyStatutes": [
          "Provimento nº 205/2021 do CFOAB",
          "Arts. 39 a 47 do Código de Ética e Disciplina"
        ],
        "summaryPoints": [
          "Publicidade meramente informativa e educativa.",
          "Permitido marketing de conteúdo e impulsionamento com sobriedade.",
          "Vedada ostentação de riqueza material, valores de honorários e captação agressiva."
        ]
      },
      {
        "title": "Módulo 7: Sigilo Profissional e Relações com o Cliente (Págs. 37-42)",
        "content": "O sigilo profissional é de ordem pública e decorre da relação de mútua confiança entre constituinte e constituído (arts. 35 a 38 do CED).\nRegras essenciais:\n1. O dever de sigilo independe de solicitação do cliente e permanece após o término do mandato ou rescisão do contrato de prestação de serviços.\n2. O advogado pode e deve recusar-se a prestar depoimento perante a autoridade judicial ou policial sobre fatos que lhe tenham sido confidenciados no exercício do ofício.\n3. Exceções taxativas à quebra do sigilo: apenas em situações de grave ameaça ao direito à vida e à honra, ou quando o próprio advogado for injuriado ou acusado pelo próprio cliente, operando a revelação nos estritos limites da sua própria autodefesa.\n4. Relação com o cliente: o advogado não deve aceitar procuração de quem já tenha patrono constituído, sem prévio conhecimento deste, salvo por motivo plenamente justificável ou para adoção de medidas judiciais urgentes e inadiáveis (art. 14 do CED).",
        "keyStatutes": [
          "Arts. 35 a 38 do Código de Ética e Disciplina",
          "Art. 7º, XIX da Lei 8.906/94"
        ],
        "summaryPoints": [
          "Sigilo permanente de ordem pública, sobrevindo mesmo após a conclusão do processo.",
          "Direito e dever de recusar testemunho sobre confidências de clientes.",
          "Quebra excepcionalíssima autorizada apenas para legítima defesa do patrono ou risco de vida."
        ]
      },
      {
        "title": "Módulo 8: Infrações e Sanções Disciplinares na OAB (Págs. 43-48)",
        "content": "O art. 34 da Lei 8.906/94 arrola 29 hipóteses taxativas de infrações disciplinares. As sanções disciplinares aplicáveis pelo Tribunal de Ética e Disciplina (TED) são:\n1. Censura (art. 36): aplicável a infrações leves (ex.: publicidade imoderada, violação de preceito ético, retenção abusiva de autos). A censura pode ser convertida em advertência sem registro nos assentamentos do inscrito caso existam circunstâncias atenuantes.\n2. Suspensão (art. 37): interdita o exercício da advocacia em todo o território nacional por prazo de 30 dias a 12 meses. Aplicável a faltas graves: reincidência em infração já apenada com censura; recusa injustificada de prestação de contas de valores recebidos do cliente; inépcia profissional reiterada (exige 3 faltas); prática de conduta incompatível com a advocacia. Nos casos de dívida de prestação de contas, a suspensão perdura até a integral quitação do débito.\n3. Exclusão (art. 38): pena máxima que cancela a inscrição profissional. Exige manifestação favorável de no mínimo 2/3 (dois terços) dos membros do Conselho Seccional competente. Aplicável: após 3 suspensões disciplinares anteriores; prática de crime infamante ou declaração de inidoneidade moral.\n4. Multa (art. 39): sanção pecuniária acessória acumulável com censura ou suspensão, no valor equivalente a 1 até 10 anuidades da Seccional.",
        "keyStatutes": [
          "Arts. 34 a 40 da Lei nº 8.906/1994",
          "Art. 43 do Estatuto da OAB"
        ],
        "summaryPoints": [
          "Censura: infrações leves; admite conversão em advertência sigilosa.",
          "Suspensão: faltas graves (30 dias a 12 meses); retenção de valores do cliente gera suspensão até quitação.",
          "Exclusão: exige quórum qualificado de 2/3 do Conselho Seccional."
        ]
      },
      {
        "title": "Módulo 9: Processo Disciplinar e Competência do Tribunal de Ética (Págs. 49-51)",
        "content": "O processo disciplinar perante a OAB possui rito autônomo e sigiloso (art. 72 da Lei 8.906/94):\n- Instauração: de ofício pelo órgão da OAB ou mediante representação fundamentada de qualquer pessoa interessada. Não se admite representação anônima.\n- Competência: é do Conselho Seccional em cuja base territorial tenha ocorrido a infração, ainda que o advogado esteja inscrito em outro Estado federativo (competência territorial ratione loci).\n- Prazos e Prescrição: a pretensão punitiva das infrações disciplinares prescreve em 5 (cinco) anos contados da data da constatação oficial do fato. Aplica-se a prescrição intercorrente caso o processo disciplinar fique paralisado por mais de 3 (três) anos pendente de despacho ou julgamento.\n- Recursos: as decisões do Tribunal de Ética e Disciplina desafiam recurso voluntário ao Conselho Seccional e, em tese, ao Conselho Federal quando houver divergência jurisprudencial notória.",
        "keyStatutes": [
          "Arts. 70 a 74 da Lei nº 8.906/1994"
        ],
        "summaryPoints": [
          "Competência é do local onde a infração foi cometida.",
          "Prescrição da pretensão punitiva em 5 anos; prescrição intercorrente em 3 anos.",
          "Processo disciplinar tramita em estrito sigilo até o trânsito em julgado."
        ]
      },
      {
        "title": "Módulo 10: Estrutura Orgânica e Eleições da OAB (Págs. 52-54)",
        "content": "A Ordem dos Advogados do Brasil possui natureza jurídica singular de serviço público independente, com autonomia funcional e orçamentária, não integrando a Administração Pública direta ou indireta nem se sujeitando ao controle externo do TCU (conforme ADI 3.026 do STF).\nÓrgãos da OAB:\n1. Conselho Federal (órgão supremo com sede em Brasília, composto por Conselheiros Federais eleitos pelos Estados e DF);\n2. Conselhos Seccionais (com jurisdição sobre os respectivos Estados da Federação e DF);\n3. Subseções (criadas pelos Conselhos Seccionais para atuação comarcana com no mínimo 15 advogados domiciliados);\n4. Caixas de Assistência dos Advogados (instituídas onde houver mais de 1.500 inscritos para prestar seguridade e assistência aos associados).\nEleições: realizadas na segunda quinzena de novembro do último ano do triênio de mandato. O voto é obrigatório para todos os advogados regulares sob pena de multa de 20% da anuidade, vedada a candidatura de quem estiver em débito com a Seccional.",
        "keyStatutes": [
          "Arts. 44 a 67 da Lei nº 8.906/1994",
          "ADI 3.026 do STF"
        ],
        "summaryPoints": [
          "OAB não integra a administração pública nem se subordina ao Tribunal de Contas da União.",
          "Mandato dos conselheiros é trienal.",
          "Voto obrigatório nas eleições seccionais."
        ]
      }
    ]
  },
  {
    "id": "manual-ext-const-50p",
    "title": "Curso Extensivo de Direito Constitucional Positivo e Jurisprudência do STF",
    "disciplineId": "constitucional",
    "author": "Dra. Beatriz Albuquerque · Mestre e Doutora em Direito do Estado",
    "estimatedReadTime": "56 páginas didáticas · 4h00 de estudo aprofundado",
    "pageCount": 56,
    "isExtensiveManual": true,
    "edition": "Manual Completo 2026/2027 · Edição Definitiva",
    "description": "Tratado de Direito Constitucional de mais de 50 páginas cobrindo Teoria da Constituição, Teoria dos Direitos Fundamentais, Controle de Constitucionalidade (Concentrado e Difuso), Ações Constitucionais, Organização do Estado e Repartição de Competências com ampla jurisprudência do STF.",
    "chapters": [
      {
        "title": "Módulo 1: Teoria da Constituição e Classificações Fundamentais (Págs. 1-6)",
        "content": "A Constituição de 1988 qualifica-se como formal, escrita, dogmática, promulgada (democrática), rígida, analítica, dirigente e principiológica.\nO Poder Constituinte divide-se em:\n- Poder Constituinte Originário: inicial, ilimitado juridicamente, incondicionado e autônomo, responsável por inaugurar uma nova ordem estatal.\n- Poder Constituinte Derivado: subordinado, condicionado e limitado às regras fixadas pelo originário:\na) Derivado Reformador: altera o texto por meio de Emendas Constitucionais (art. 60 da CF/88);\nb) Derivado Decorrente: confere aos Estados-membros a competência para estruturar suas próprias Constituições Estaduais;\nc) Derivado Revisor: previsto no art. 3º do ADCT para a revisão após 5 anos da promulgação.\nLimitações ao Poder de Reforma (art. 60):\n- Limitações materiais (Cláusulas Pétreas - § 4º): forma federativa de Estado; voto direto, secreto, universal e periódico; separação dos poderes; direitos e garantias individuais.\n- Limitações circunstanciais (§ 1º): a CF não pode ser emendada na vigência de intervenção federal, estado de defesa ou estado de sítio.\n- Limitações formais: iniciativa qualificada (1/3 da Câmara ou Senado, Presidente da República ou mais da metade das Assembleias Legislativas), quórum de aprovação de 3/5 dos votos em dois turnos em ambas as Casas do Congresso Nacional.",
        "keyStatutes": [
          "Art. 60 da CF/88",
          "Art. 3º do ADCT"
        ],
        "summaryPoints": [
          "Cláusulas pétreas materiais não admitem proposta tendente a aboli-las.",
          "Quórum de Emenda Constitucional: 3/5 dos votos em dois turnos em cada Casa.",
          "Vedada emenda durante vigência de intervenção federal, defesa ou sítio."
        ]
      },
      {
        "title": "Módulo 2: Eficácia e Aplicabilidade das Normas Constitucionais (Págs. 7-11)",
        "content": "A consagrada doutrina de José Afonso da Silva divide a eficácia das normas constitucionais em três grandes categorias:\n1. Normas de Eficácia Plena: nascem aptas a produzir a totalidade de seus efeitos jurídicos imediatamente com a promulgação do texto, sem necessidade de intermediação legislativa integradora (ex.: art. 5º, III - vedação de tortura; art. 5º, LVI - inadmissibilidade de provas ilícitas).\n2. Normas de Eficácia Contida (ou redutível): possuem aplicabilidade direta, imediata e integral, mas o próprio constituinte originário previu a possibilidade de que o legislador infraconstitucional ou a própria Carta restrinja o alcance de seus efeitos (ex.: art. 5º, XIII - \"é livre o exercício de qualquer trabalho, ofício ou profissão, atendidas as qualificações profissionais que a lei estabelecer\"). Enquanto não houver lei restritiva, a liberdade de atuação é ampla.\n3. Normas de Eficácia Limitada: dependem indispensavelmente da atuação do legislador infraconstitucional para que possam irradiar seus efeitos práticos plenos (possuem aplicabilidade indireta, mediata e diferida). Subdividem-se em normas de princípio institutivo (que estruturam órgãos estatais) e normas de princípio programático (que traçam diretrizes sociais, econômicas e culturais, ex.: art. 7º, XX - proteção do mercado de trabalho da mulher).",
        "keyStatutes": [
          "Doutrina Clássica de José Afonso da Silva",
          "Art. 5º, XIII da CF/88"
        ],
        "summaryPoints": [
          "Plena = Aplicabilidade direta, imediata e não restringível.",
          "Contida = Aplicabilidade imediata que pode ser restringida por lei futura.",
          "Limitada = Não produz efeitos plenos sem lei integradora prévia."
        ]
      },
      {
        "title": "Módulo 3: Direitos e Garantias Fundamentais em Espécie (Págs. 12-18)",
        "content": "O art. 5º da CF/88 estatui os direitos individuais e coletivos, assegurando a inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança e à propriedade.\nTemas vitais na OAB e Jurisprudência do STF:\n1. Inviolabilidade do domicílio (art. 5º, XI): a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo: em flagrante delito ou desastre, ou para prestar socorro; ou, durante o dia, por determinação judicial. O STF fixou a tese de que o ingresso forçado em domicílio sem mandado exige a fundada e prévia demonstração de razões que indiquem a ocorrência de crime permanente no local (Tema 280 da Repercussão Geral).\n2. Inviolabilidade das comunicações (art. 5º, XII): a quebra do sigilo telefônico (interceptação de comunicações) somente pode ser autorizada por ordem judicial fundamentada, para fins de investigação criminal ou instrução processual penal, na forma da Lei 9.296/96.\n3. Direito de Reunião (art. 5º, XVI): pacífica, sem armas, em locais abertos ao público, independente de autorização prévia, exigindo apenas prévio aviso à autoridade competente. O STF julgou inconstitucional a exigência de aviso formal solene quando a manifestação puder ser inferida pelas circunstâncias públicas (Tema 855).",
        "keyStatutes": [
          "Art. 5º da CF/88",
          "Tema 280 do STF",
          "Tema 855 do STF",
          "Lei nº 9.296/1996"
        ],
        "summaryPoints": [
          "Ingresso domiciliar sem mandado exige justa causa prévia demonstrada em relatório.",
          "Interceptação telefônica restrita à esfera criminal mediante reserva de jurisdição.",
          "Direito de reunião não depende de autorização estatal, apenas de aviso prévio."
        ]
      },
      {
        "title": "Módulo 4: Remédios Constitucionais e Ações de Garantia (Págs. 19-24)",
        "content": "As ações constitucionais representam os instrumentos adjetivos de defesa das liberdades:\n1. Habeas Corpus (art. 5º, LXVIII): tutela a liberdade de locomoção corporal contra ilegalidade ou abuso de poder. É ação gratuita, de legitimidade ativa universal (qualquer pessoa física ou jurídica, nacional ou estrangeira, e o Ministério Público podem impetrar), sem necessidade de capacidade postulatória ou procuração. Não cabe HC contra punição disciplinar militar pelo mérito (art. 142, § 2º), admitindo-se apenas controle de legalidade formal.\n2. Mandado de Segurança (art. 5º, LXIX e Lei 12.016/09): protege direito líquido e certo, não amparado por HC ou HD, contra ato ilegal ou praticado com abuso de poder por autoridade pública ou agente delegado. Exige prova pré-constituída documental, sendo vedada a dilação probatória. Prazo decadencial improrrogável de 120 (cento e vinte) dias contados da ciência inequívoca do ato impugnado.\n3. Mandado de Segurança Coletivo (art. 5º, LXX): legitimados: partido político com representação no Congresso Nacional; organização sindical, entidade de classe ou associação legalmente constituída e em funcionamento há pelo menos 1 (um) ano.\n4. Habeas Data (art. 5º, LXXII): ação gratuita para assegurar o conhecimento ou retificação de informações relativas à pessoa do impetrante constantes de registros públicos ou governamentais. A Súmula 2 do STJ exige a comprovação da recusa da autoridade administrativa para caracterizar o interesse de agir.\n5. Ação Popular (art. 5º, LXXIII): proposta exclusivamente por qualquer cidadão em gozo dos direitos políticos (comprovado pelo título eleitoral), visando anular ato lesivo ao patrimônio público, moralidade administrativa, meio ambiente e patrimônio histórico.",
        "keyStatutes": [
          "Art. 5º, LXVIII a LXXIII da CF/88",
          "Lei nº 12.016/2009",
          "Súmula 2 do STJ"
        ],
        "summaryPoints": [
          "Habeas Corpus é gratuito e dispensa representação por advogado.",
          "Mandado de Segurança tem prazo decadencial de 120 dias e exige prova documental.",
          "Ação Popular exige condição de cidadão e título eleitoral regular."
        ]
      },
      {
        "title": "Módulo 5: Teoria Geral do Controle de Constitucionalidade (Págs. 25-30)",
        "content": "O controle de constitucionalidade é corolário do princípio da supremacia formal da Constituição.\nMomentos de Controle:\n- Preventivo: realizado durante o processo de elaboração do ato normativo. Na via política: comissões de constituição e justiça (CCJ) e veto jurídico presidencial por inconstitucionalidade (art. 66, § 1º). Na via jurisdicional: admite-se excepcionalmente mandado de segurança impetrado por parlamentar federal perante o STF para obstar tramitação de PEC flagrantemente violadora de cláusula pétrea (MS 20.257).\n- Repressivo: incide sobre a lei ou ato normativo já promulgados e vigentes.\nSistemas Jurisdicionais no Brasil (Sistema Misto):\n- Controle Difuso: todo e qualquer magistrado singular ou colegiado detém a prerrogativa de afastar a norma incompatível com a Carta Política na resolução incidental do caso concreto.\n- Controle Concentrado: competência originária e exclusiva do Supremo Tribunal Federal (quando o parâmetro for a CF/88) ou dos Tribunais de Justiça (quando o parâmetro for a Constituição Estadual).",
        "keyStatutes": [
          "Art. 102 da CF/88",
          "Art. 125, § 2º da CF/88",
          "Jurisprudência do STF no MS 20.257"
        ],
        "summaryPoints": [
          "Controle preventivo judicial via MS exclusivo de parlamentar da respectiva Casa.",
          "Brasil adota o modelo misto: difuso (qualquer juiz) e concentrado (STF/TJs).",
          "Veto presidencial por inconstitucionalidade é exemplo típico de controle preventivo político."
        ]
      },
      {
        "title": "Módulo 6: Controle Difuso e Cláusula de Reserva de Plenário (Págs. 31-36)",
        "content": "No controle difuso, a inconstitucionalidade é uma questão prejudicial arguida incidentalmente na petição inicial, na contestação ou de ofício pelo julgador. A eficácia da decisão é, em regra, inter partes.\nCláusula de Reserva de Plenário (Art. 97 da CF/88):\nSomente pelo voto da maioria absoluta de seus membros ou dos membros do respectivo órgão especial poderão os tribunais declarar a inconstitucionalidade de lei ou ato normativo do Poder Público.\nSúmula Vinculante nº 10 do STF: viola a cláusula de reserva de plenário a decisão de órgão fracionário de tribunal (Câmara, Turma ou Seção) que, embora não declare expressamente a inconstitucionalidade de lei ou ato normativo do Poder Público, afasta sua incidência, no todo ou em parte.\nExceções à remessa ao Plenário:\n1. Quando o próprio plenário do tribunal ou o plenário do STF já tiver declarado a inconstitucionalidade da matéria anteriormente (art. 949, parágrafo único do CPC/15);\n2. Decisões de juízes singulares de primeiro grau (a reserva de plenário aplica-se apenas a órgãos colegiados de tribunais).\nAtuação do Senado Federal (art. 52, X): o Senado tem competência privativa para suspender a execução, no todo ou em parte, de lei declarada inconstitucional por decisão definitiva do Supremo Tribunal Federal, conferindo eficácia erga omnes.",
        "keyStatutes": [
          "Art. 97 da CF/88",
          "Art. 52, X da CF/88",
          "Súmula Vinculante 10 do STF",
          "Art. 949 do CPC/15"
        ],
        "summaryPoints": [
          "Órgão fracionário de tribunal não pode afastar lei sem remessa ao pleno ou órgão especial.",
          "Súmula Vinculante 10 pune o esvaziamento disfarçado da lei sem quórum qualificado.",
          "Juiz monocrático de 1ª instância não se submete à reserva de plenário."
        ]
      },
      {
        "title": "Módulo 7: Controle Concentrado no STF: ADI, ADC, ADO e ADPF (Págs. 37-43)",
        "content": "O controle concentrado perante a Corte Constitucional realiza-se através de quatro ações fundamentais:\n1. Ação Direta de Inconstitucionalidade (ADI genérica - Lei 9.868/99): cabível contra lei ou ato normativo federal ou estadual que viole a CF/88. Exige que a norma tenha sido editada após a promulgação da CF/88.\n2. Ação Declaratória de Constitucionalidade (ADC): exclusiva para lei ou ato normativo federal, exigindo a demonstração prévia de controvérsia judicial relevante que ameace a segurança jurídica.\n3. Ação Direta de Inconstitucionalidade por Omissão (ADO): combate a inércia do Poder Legislativo em regulamentar comando constitucional de eficácia limitada. O STF dá ciência ao Poder competente para a adoção das providências necessárias em 30 dias se for órgão administrativo.\n4. Arguição de Descumprimento de Preceito Fundamental (ADPF - Lei 9.882/99): tem caráter subsidiário (somente cabe quando não houver outro meio eficaz de sanar a lesividade). Cabimento típico: normas municipais em face da CF/88; normas pré-constitucionais (editadas antes de 05/10/1988); e atos materiais do poder público.\nEfeitos das Decisões: as decisões definitivas de mérito proferidas pelo STF em ADI, ADC, ADO e ADPF produzem eficácia erga omnes e efeito vinculante relativamente aos demais órgãos do Poder Judiciário e à Administração Pública direta e indireta nas esferas federal, estadual e municipal. Não vinculam o Poder Legislativo em sua função típica de legislar.",
        "keyStatutes": [
          "Art. 102, I, \"a\" da CF/88",
          "Lei nº 9.868/1999",
          "Lei nº 9.882/1999"
        ],
        "summaryPoints": [
          "ADI alcança leis federais e estaduais pós-1988.",
          "ADPF tem caráter subsidiário e é a única via para questionar leis municipais e pré-constitucionais no STF.",
          "Efeito vinculante vincula o Judiciário e a Administração, mas não vincula o Legislador."
        ]
      },
      {
        "title": "Módulo 8: Rol de Legitimados do Art. 103 e Pertinência Temática (Págs. 44-48)",
        "content": "O art. 103 da Carta Magna traz o rol taxativo dos legitimados para a propositura de ADI, ADC, ADO e ADPF:\n- Legitimados Universais (ou Neutros): podem ajuizar qualquer ação do controle concentrado sem precisar demonstrar interesse específico ou vínculo direto com a matéria:\nI - o Presidente da República;\nII - a Mesa do Senado Federal;\nIII - a Mesa da Câmara dos Deputados;\nVI - o Procurador-Geral da República;\nVII - o Conselho Federal da Ordem dos Advogados do Brasil;\nVIII - partido político com representação no Congresso Nacional (basta 1 parlamentar).\n- Legitimados Especiais (ou Interessados): exigem a comprovação formal de \"pertinência temática\" (relação de pertinência direta entre o objeto impugnado e as finalidades institucionais ou corporativas do órgão autor):\nIV - a Mesa de Assembleia Legislativa ou da Câmara Legislativa do DF;\nV - o Governador de Estado ou do DF;\nIX - confederação sindical ou entidade de classe de âmbito nacional.\nJurisprudência do STF: para entidade de classe nacional, exige-se representação de membros em pelo menos 9 (nove) estados da federação e homogeneidade da categoria profissional.",
        "keyStatutes": [
          "Art. 103 da CF/88",
          "Jurisprudência consolidada do STF"
        ],
        "summaryPoints": [
          "Conselho Federal da OAB e PGR são legitimados universais (dispensam pertinência temática).",
          "Governador e Assembleia Legislativa exigem comprovação de reflexo direto no respectivo Estado.",
          "Entidade de classe nacional exige representatividade em ao menos 9 estados."
        ]
      },
      {
        "title": "Módulo 9: Organização do Estado e Repartição Constitucional de Competências (Págs. 49-53)",
        "content": "A República Federativa do Brasil é formada pela união indissolúvel dos Estados e Municípios e do Distrito Federal (art. 1º e 18 da CF/88).\nRepartição de Competências:\n1. Competência Legislativa Privativa da União (art. 22): matérias vitais nacionais: direito civil, comercial, penal, processual, eleitoral, agrário, marítimo, aeronáutico, espacial e do trabalho; trânsito e transporte; desapropriação; diretrizes e bases da educação nacional. Lei complementar pode autorizar os Estados a legislar sobre questões específicas dessas matérias (art. 22, parágrafo único).\n2. Competência Legislativa Concorrente entre União, Estados e DF (art. 24): direito tributário, financeiro, penitenciário, econômico e urbanístico; juntas comerciais; orçamento; proteção do meio ambiente e patrimônio histórico.\nRegra de ouro: a União limita-se a fixar normas gerais (§ 1º). A competência da União para normas gerais não exclui a competência suplementar dos Estados (§ 2º). Inexistindo norma geral federal, os Estados exercerão competência legislativa plena (§ 3º). A superveniência de lei federal sobre normas gerais suspende a eficácia da lei estadual no que lhe for contrário (§ 4º - não revoga, apenas suspende!).\n3. Competência Residual dos Estados (art. 25, § 1º): todas as matérias que não forem vedadas pela CF.\n4. Competência dos Municípios (art. 30): legislar sobre assuntos de interesse local e suplementar a legislação federal e estadual no que couber.",
        "keyStatutes": [
          "Arts. 22 a 24 da CF/88",
          "Arts. 25 e 30 da CF/88"
        ],
        "summaryPoints": [
          "Direito civil, penal, processual e trabalho são competências privativas exclusivas da União.",
          "Competência concorrente: União edita normas gerais; Estado suplementa.",
          "Superveniência de lei geral federal apenas suspende a eficácia da lei estadual incompatível."
        ]
      },
      {
        "title": "Módulo 10: Intervenção Federal e Defesa das Instituições Democráticas (Págs. 54-56)",
        "content": "A autonomia dos entes federativos é a regra; a intervenção constitui medida excepcional e temporária disciplinada nos arts. 34 a 36 da CF/88.\nHipóteses de Intervenção Federal nos Estados (art. 34):\n- Manter a integridade nacional;\n- Repelir invasão estrangeira ou de uma unidade da Federação em outra;\n- Pôr termo a grave comprometimento da ordem pública;\n- Garantir o livre exercício de qualquer dos Poderes nas unidades da Federação;\n- Reorganizar as finanças da unidade da Federação que suspender o pagamento da dívida fundada por mais de 2 anos consecutivos;\n- Prover a execução de lei federal, ordem ou decisão judicial;\n- Assegurar a observância dos princípios constitucionais sensíveis (forma republicana, direitos da pessoa humana, autonomia municipal, prestação de contas da administração pública e aplicação do mínimo obrigatório em saúde e educação).\nProcedimento: privativo do Presidente da República, exigindo pareceres opinativos do Conselho da República e de Defesa Nacional, com decreto presidencial submetido ao controle político do Congresso Nacional em 24 horas.",
        "keyStatutes": [
          "Arts. 34 a 36 da CF/88"
        ],
        "summaryPoints": [
          "Intervenção federal afasta temporariamente a autonomia do Estado membro.",
          "Decreto presidencial interventivo exige apreciação do Congresso Nacional em 24 horas.",
          "Violação a princípios constitucionais sensíveis exige representação interventiva do PGR perante o STF."
        ]
      }
    ]
  },
  {
    "id": "manual-ext-penal-50p",
    "title": "Tratado de Direito Penal: Teoria do Crime, Penas e Parte Especial",
    "disciplineId": "penal",
    "author": "Dra. Gabriela Vasconcelos & Prof. Dr. Nelson Hungria Filho",
    "estimatedReadTime": "52 páginas didáticas · 3h50 de estudo aprofundado",
    "pageCount": 52,
    "isExtensiveManual": true,
    "edition": "Manual Completo 2026/2027 · Edição Definitiva",
    "description": "Manual de mais de 50 páginas integrando Teoria Analítica do Crime (fato típico, ilicitude, culpabilidade), concurso de pessoas, dosimetria da pena, causas de extinção da punibilidade e principais crimes contra a vida, patrimônio e administração pública.",
    "chapters": [
      {
        "title": "Módulo 1: Princípios Penais Fundamentais e Lei Penal no Tempo (Págs. 1-5)",
        "content": "O Direito Penal moderno funda-se em garantias pétreas que limitam o jus puniendi estatal:\n1. Princípio da Legalidade / Reserva Legal (art. 5º, XXXIX da CF e art. 1º do CP): não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal. Proibição de analogia in malam partem e de criação de tipos por medidas provisórias.\n2. Princípio da Insignificância (Bagatela): afasta a tipicidade material da conduta. Critérios cumulativos do STF: mínima ofensividade da conduta, nenhuma periculosidade social da ação, reduzidíssimo grau de reprovabilidade do comportamento e inexpressividade da lesão jurídica provocada. Não se aplica a crimes com violência contra a pessoa nem a violência doméstica (Súmula 589 do STJ).\n3. Lei Penal no Tempo (art. 2º do CP): a lei penal não retroage, salvo para beneficiar o réu (novatio legis in mellius e abolitio criminis). O crime permanente e continuado subordina-se à lei penal mais gravosa se a vigência for anterior à cessação da permanência ou da continuidade (Súmula 711 do STF).",
        "keyStatutes": [
          "Art. 5º, XXXIX e XL da CF/88",
          "Arts. 1º e 2º do Código Penal",
          "Súmula 711 do STF",
          "Súmula 589 do STJ"
        ],
        "summaryPoints": [
          "Insignificância exclui a tipicidade material do fato.",
          "Abolitio criminis extingue a punibilidade retroagindo mesmo após trânsito em julgado.",
          "Súmula 711 STF: lei mais grave aplica-se ao crime continuado se vigorar antes do fim da conduta."
        ]
      },
      {
        "title": "Módulo 2: O Fato Típico e seus Elementos Estruturais (Págs. 6-11)",
        "content": "O fato típico é composto por: conduta (ação ou omissão), resultado naturalístico, nexo de causalidade e tipicidade (formal e material).\n- Conduta: ato humano voluntário e consciente voltado a uma finalidade (Teoria Finalista da Ação de Welzel). Causas de exclusão da conduta: coação física irresistível (vis absoluta), movimentos reflexos puros, estados de inconsciência total (sonambulismo, epilepsia).\n- Relação de Causalidade (art. 13 do CP): adota-se a teoria da equivalência das condições (conditio sine qua non). Causa é toda ação ou omissão sem a qual o resultado não teria ocorrido (processo hipotético de eliminação de Thyrén).\n- Concausas: a superveniência de causa relativamente independente que por si só produza o resultado exclui a imputação do resultado agravado, respondendo o agente pelos atos já praticados (art. 13, § 1º).\n- Tipicidade Conglobante: formulada por Eugenio Raúl Zaffaroni, exige que a conduta, além de subsumir-se à lei formal, seja materialmente lesiva e não incentivada ou tolerada pelo ordenamento como um todo.",
        "keyStatutes": [
          "Art. 13 do Código Penal",
          "Doutrina de Welzel e Zaffaroni"
        ],
        "summaryPoints": [
          "Conduta exige voluntariedade; coação física irresistível afasta a conduta.",
          "Art. 13, § 1º do CP: causa superveniente que por si só cause o resultado afasta o homicídio consumado.",
          "Tipicidade requer tanto subsunção formal quanto desvalor material real do bem."
        ]
      },
      {
        "title": "Módulo 3: Dolo, Culpa e Erro de Tipo (Págs. 12-16)",
        "content": "Dolo (art. 18, I): quando o agente quis o resultado (dolo direto - teoria da vontade) ou assumiu o risco de produzi-lo (dolo eventual - teoria do assentimento).\nCulpa (art. 18, II): decorre de negligência, imprudência ou imperícia (violação do dever objetivo de cuidado).\n- Culpa consciente: o autor prevê o resultado danoso, mas confia sinceramente em suas habilidades para evitá-lo. Diferencia-se do dolo eventual, no qual o agente prevê e aceita com indiferença a produção do dano.\n- Erro de Tipo (art. 20): falsa percepção sobre os elementos constitutivos do tipo penal. O erro de tipo essencial invencível (escusável) exclui o dolo e a culpa; se vencível (inescusável), afasta o dolo mas permite a punição por crime culposo, se previsto em lei.\n- Erro de Proibição (art. 21): o agente conhece os fatos, mas supõe erradamente que sua conduta é permitida pelo ordenamento jurídico. Se invencível, isenta de pena (exclui a culpabilidade); se vencível, atenua a pena de um sexto a um terço.",
        "keyStatutes": [
          "Arts. 18, 20 e 21 do Código Penal"
        ],
        "summaryPoints": [
          "Dolo eventual assume o risco e aceita o resultado; culpa consciente confia que o evento não ocorrerá.",
          "Erro de tipo essencial vencível exclui o dolo, permitindo punição a título culposo.",
          "Erro de proibição incide na culpabilidade (potencial consciência da ilicitude)."
        ]
      },
      {
        "title": "Módulo 4: Ilicitude e Causas Justificantes de Exclusão (Págs. 17-22)",
        "content": "A ilicitude (ou antijuridicidade) é a contradição entre a conduta típica e o direito. As causas excludentes legais estão insculpidas no art. 23 do CP:\n1. Estado de Necessidade (art. 24): salvaguarda de direito próprio ou alheio de perigo atual, que o agente não provocou por sua vontade nem podia de outro modo evitar, desde que o sacrifício seja proporcional. Não pode alegar estado de necessidade quem tinha o dever legal de enfrentar o perigo (ex.: bombeiro, policial).\n2. Legítima Defesa (art. 25): repulsa com uso moderado dos meios necessários a injusta agressão, atual ou iminente, a direito seu ou de outrem. Abrange também o agente de segurança pública que repele agressão com reféns (parágrafo único).\n3. Estrito Cumprimento do Dever Legal e Exercício Regular de Direito: condutas impostas por mandamento normativo legal direto ou autorizadas pelas normas vigentes.\n- Excesso Punível (art. 23, parágrafo único): em qualquer das causas justificantes, o agente responderá pelo excesso doloso ou culposo.",
        "keyStatutes": [
          "Arts. 23, 24 e 25 do Código Penal"
        ],
        "summaryPoints": [
          "Estado de necessidade protege contra perigo atual; legítima defesa protege contra agressão injusta humana.",
          "Quem tem o dever jurídico de enfrentar o perigo não pode invocar estado de necessidade.",
          "O excesso, doloso ou culposo, é sempre punível na forma da lei penal."
        ]
      },
      {
        "title": "Módulo 5: Culpabilidade, Imputabilidade e Concurso de Pessoas (Págs. 23-28)",
        "content": "A culpabilidade atua como juízo de reprovação pessoal sobre o autor do fato ilícito. Elementos:\n1. Imputabilidade Mental: capacidade de entender o caráter ilícito e de determinar-se conforme esse entendimento. Menores de 18 anos são inimputáveis penais (art. 27). O doente mental ao tempo da ação é isento de pena (art. 26 - absolvição imprópria com imposição de medida de segurança).\n- Actio libera in causa: a embriaguez voluntária ou culposa pelo álcool não exclui a imputabilidade (art. 28, II).\n2. Potencial Consciência da Ilicitude: afastada pelo erro de proibição invencível.\n3. Exigibilidade de Conduta Diversa: afastada pela coação moral irresistível e pela estrita obediência a ordem manifestamente não ilegal de superior hierárquico (art. 22).\nConcurso de Pessoas (arts. 29 a 31): o Brasil adota como regra a Teoria Monista ou Unitária (todos os partícipes e autores respondem pelo mesmo crime na medida de sua culpabilidade). A cooperação dolosamente distinta assegura que se o agente quis participar de crime menos grave, ser-lhe-á aplicada a pena deste (art. 29, § 2º).",
        "keyStatutes": [
          "Arts. 22, 26, 27, 28 e 29 do Código Penal"
        ],
        "summaryPoints": [
          "Embriaguez voluntária não afasta a imputabilidade penal (actio libera in causa).",
          "Coação moral irresistível exclui a exigibilidade de conduta diversa (culpabilidade).",
          "Cooperação dolosamente distinta pune o partícipe pela infração que pretendia praticar."
        ]
      },
      {
        "title": "Módulo 6: Teoria da Pena e o Critério Trifásico de Dosimetria (Págs. 29-35)",
        "content": "O sistema de fixação da pena privativa de liberdade é disciplinado pelo art. 68 do CP (Método Trifásico de Nelson Hungria):\n- 1ª Fase (Pena-Base): o juiz avalia as 8 circunstâncias judiciais do art. 59 (culpabilidade, antecedentes, conduta social, personalidade do agente, motivos, circunstâncias, consequências do crime e comportamento da vítima). A fixação deve manter-se estritamente entre o mínimo e o máximo abstratos da lei.\n- 2ª Fase (Pena Provisória): incidem as circunstâncias atenuantes (arts. 65 e 66 - menoridade relativa de 21 anos, confissão espontânea) e agravantes (arts. 61 e 62 - reincidência, motivo fútil). Súmula 231 do STJ: a incidência de circunstância atenuante não pode conduzir à redução da pena abaixo do mínimo legal.\n- 3ª Fase (Pena Definitiva): incidem as causas de aumento (majorantes) e de diminuição de pena (minorantes), com frações matemáticas pré-fixadas (ex.: tentativa - redução de 1 a 2 terços; concurso formal). Nesta fase a pena pode ultrapassar os limites legais abstratos.\nRegimes Prisionais (art. 33): Fechado (pena superior a 8 anos), Semiaberto (pena superior a 4 até 8 anos para réu primário) e Aberto (pena de até 4 anos para não reincidente).",
        "keyStatutes": [
          "Arts. 33, 59 e 68 do Código Penal",
          "Súmula 231 do STJ"
        ],
        "summaryPoints": [
          "Critério trifásico: 1ª Fase (art. 59) -> 2ª Fase (Atenuantes/Agravantes) -> 3ª Fase (Majorantes/Minorantes).",
          "Súmula 231 STJ impede que a pena na 2ª fase seja fixada abaixo do piso legal abstrato.",
          "Tentativa é causa de diminuição valorada na 3ª fase da dosimetria penal."
        ]
      },
      {
        "title": "Módulo 7: Extinção da Punibilidade e Prescrição Penal (Págs. 36-41)",
        "content": "O art. 107 do CP enumera as causas de extinção da punibilidade (morte do agente, anistia, graça, indulto, abolitio criminis, prescrição, decadência, perempção, renúncia e perdão).\nPrescrição da Pretensão Punitiva (PPP):\nO Estado perde o direito de processar e condenar o agente. Calculada com base na pena máxima cominada em abstrato para o crime (art. 109).\n- Prazos do art. 109: pena máxima superior a 12 anos prescreve em 20 anos; superior a 8 até 12 prescreve em 16 anos; superior a 4 até 8 prescreve em 12 anos; superior a 2 até 4 prescreve em 8 anos; de 1 a 2 anos prescreve em 4 anos; inferior a 1 ano prescreve em 3 anos.\n- Redução dos Prazos pela Metade (art. 115): os prazos prescricionais são reduzidos de metade se o criminoso era, ao tempo do crime, menor de 21 anos, ou, na data da sentença, maior de 70 anos.\n- Causas Interruptivas da Prescrição (art. 117): o recebimento da denúncia ou queixa; a pronúncia no Tribunal do Júri; a publicação da sentença ou acórdão condenatório recorrível. Com a interrupção, o prazo prescricional é zerado e recomeça a correr por inteiro.",
        "keyStatutes": [
          "Arts. 107, 109, 115 e 117 do Código Penal"
        ],
        "summaryPoints": [
          "Prescrição em abstrato analisa o teto máximo cominado no tipo penal.",
          "Menor de 21 na data do fato ou maior de 70 na sentença tem prescrição reduzida pela metade.",
          "O recebimento da denúncia interrompe o prazo prescricional e zera a contagem."
        ]
      },
      {
        "title": "Módulo 8: Crimes Contra a Pessoa e Vida no Código Penal (Págs. 42-46)",
        "content": "Crimes contra a Vida (competência privativa do Tribunal do Júri nos termos do art. 5º, XXXVIII da CF):\n- Homicídio Simples e Qualificado (art. 121): pena de 6 a 20 anos (simples) ou 12 a 30 anos (qualificado). Qualificadoras: mediante paga ou promessa de recompensa, motivo fútil ou torpe, com emprego de veneno, fogo, asfixia ou tortura, à traição ou emboscada, e para assegurar a impunidade de outro crime.\n- Feminicídio (art. 121, § 2º, VI): qualificado pelo assassinato de mulher por razões da condição de sexo feminino (violência doméstica e familiar ou menosprezo/discriminação à condição de mulher).\n- Lesão Corporal (art. 129): leve, grave (§ 1º - incapacidade para ocupações habituais por mais de 30 dias, perigo de vida, debilidade permanente) e gravíssima (§ 2º - incapacidade permanente para o trabalho, enfermidade incurável, perda ou inutilização de membro ou deformidade permanente).",
        "keyStatutes": [
          "Arts. 121 e 129 do Código Penal",
          "Lei nº 13.104/2015 (Lei do Feminicídio)"
        ],
        "summaryPoints": [
          "Homicídios dolosos consumados e tentados são julgados pelo Tribunal do Júri.",
          "Feminicídio é qualificadora objetiva/subjetiva com previsão de causa especial de aumento.",
          "Deformidade permanente e enfermidade incurável caracterizam lesão gravíssima."
        ]
      },
      {
        "title": "Módulo 9: Crimes Contra o Patrimônio: Furto, Roubo e Estelionato (Págs. 47-49)",
        "content": "Principais infrações patrimoniais cobradas no certame:\n1. Furto (art. 155): subtração de coisa alheia móvel, para si ou para outrem, sem violência ou grave ameaça à pessoa. Consuma-se com a inversão da posse da coisa, ainda que por breve tempo e mesmo que seguida de imediata perseguição policial (Teoria da Apprehensio ou Amotio, consolidada no Tema 934 do STJ).\n2. Roubo (art. 157): subtração mediante violência, grave ameaça ou depois de haver reduzido a vítima à impossibilidade de resistência. Admite aumento de pena pelo emprego de arma branca e aumento de 2/3 pelo emprego de arma de fogo de uso permitido.\n- Latrocínio (art. 157, § 3º, II): roubo qualificado pelo resultado morte. Trata-se de crime patrimonial com pena de 20 a 30 anos e competência de juiz singular, e não do Tribunal do Júri (Súmula 603 do STF).\n3. Estelionato (art. 171): obtenção de vantagem ilícita induzindo ou mantendo alguém em erro. Com o Pacote Anticrime (Lei 13.964/19), a ação penal passou a ser pública condicionada à representação como regra geral.",
        "keyStatutes": [
          "Arts. 155, 157 e 171 do Código Penal",
          "Súmula 603 do STF",
          "Tema 934 do STJ"
        ],
        "summaryPoints": [
          "Furto e roubo consumam-se com a simples inversão da posse (Teoria da Amotio).",
          "Latrocínio é julgado por juiz singular da vara criminal, não pelo júri (Súmula 603 STF).",
          "Estelionato depende de representação da vítima na imensa maioria das hipóteses."
        ]
      },
      {
        "title": "Módulo 10: Crimes Contra a Administração Pública (Págs. 50-52)",
        "content": "Infrações perpetradas por funcionários públicos ou particulares contra o Estado:\n1. Peculato (art. 312): apropriação ou desvio de dinheiro, valor ou bem móvel público ou particular em razão do cargo. No peculato culposo (§ 2º), a reparação do dano antes da sentença irrecorrível extingue a punibilidade do agente; se posterior, reduz a metade a pena imposta (§ 3º).\n2. Concussão (art. 316): exigir, para si ou para outrem, direta ou indiretamente, vantagem indevida em razão da função. O verbo nuclear é \"exigir\".\n3. Corrupção Passiva (art. 317): solicitar ou receber, para si ou para outrem, ou aceitar promessa de vantagem indevida. O crime consuma-se com o simples pedido ou recebimento.\n4. Prevaricação (art. 319): retardar ou deixar de praticar, indevidamente, ato de ofício, ou praticá-lo contra disposição expressa de lei, para satisfazer interesse ou sentimento pessoal.\n5. Corrupção Ativa (art. 333): praticada pelo particular que oferece ou promete vantagem indevida a funcionário público para determiná-lo a praticar, omitir ou retardar ato de ofício.",
        "keyStatutes": [
          "Arts. 312 a 333 do Código Penal"
        ],
        "summaryPoints": [
          "Peculato culposo: devolução do dinheiro antes da sentença extingue a punibilidade.",
          "Concussão = EXIGIR; Corrupção Passiva = SOLICITAR ou RECEBER.",
          "Prevaricação exige o especial fim de agir de satisfazer sentimento pessoal."
        ]
      }
    ]
  },
  {
    "id": "manual-ext-cpc-50p",
    "title": "Manual Completo de Processo Civil e Recursos no CPC/2015",
    "disciplineId": "processo-civil",
    "author": "Prof. Rodrigo Tavares & Dra. Lilian Vasconcelos",
    "estimatedReadTime": "55 páginas didáticas · 4h10 de estudo aprofundado",
    "pageCount": 55,
    "isExtensiveManual": true,
    "edition": "Manual Completo 2026/2027 · Edição Definitiva",
    "description": "Manual de mais de 50 páginas com análise sistêmica do CPC/15: princípios processuais, tutelas provisórias, competência, petição inicial e defesas, fase probatória, sentença, cumprimento de sentença, teoria geral dos recursos e precedentes obrigatórios.",
    "chapters": [
      {
        "title": "Módulo 1: Princípios Fundamentais e Cooperação no CPC/15 (Págs. 1-5)",
        "content": "O CPC/15 inaugura um modelo constitucional de processo democrático e participativo baseado na boa-fé objetiva e na cooperação processual.\n- Princípio do Contraditório Substancial (arts. 9º e 10): não se proferirá decisão contra uma das partes sem que ela seja previamente ouvida. É expressamente vedada a \"decisão surpresa\", devendo o magistrado intimar as partes para se manifestarem sobre qualquer fundamento jurídico, inclusive sobre matérias cognoscíveis de ofício (ex.: prescrição, decadência, ilegitimidade).\n- Princípio da Cooperação (art. 6º): todos os sujeitos do processo devem cooperar entre si para que se obtenha, em tempo razoável, decisão de mérito justa e efetiva.\n- Princípio da Primazia do Julgamento do Mérito (art. 4º): o juiz deve sempre priorizar a solução de fundo do conflito, oportunizando o suprimento de vícios sanáveis antes de proferir extinção anômala sem resolução do mérito.\n- Negócios Jurídicos Processuais (art. 190): faculta às partes plenamente capazes estipular mudanças no procedimento para ajustá-lo às especificidades da causa e convencionar sobre os seus ônus, poderes, faculdades e deveres processuais.",
        "keyStatutes": [
          "Arts. 4º, 6º, 9º, 10 e 190 do CPC/15"
        ],
        "summaryPoints": [
          "Vedação da decisão surpresa: juiz não pode decidir de ofício sem prévio contraditório.",
          "Primazia do mérito exige oportunizar correção de vícios sanáveis.",
          "Negócio jurídico processual atípico confere autonomia de convenção às partes."
        ]
      },
      {
        "title": "Módulo 2: Competência Jurisdicional e Cooperação Nacional (Págs. 6-10)",
        "content": "A competência jurisdicional divide-se em:\n- Competência Absoluta: fixada em razão da matéria, da pessoa ou do critério funcional. É inderrogável pelas partes e cognoscível de ofício pelo magistrado em qualquer tempo e grau de jurisdição. Não preclui.\n- Competência Relativa: estabelecida em razão do valor da causa ou do território. Pode ser modificada por convenção das partes (eleição de foro) e prorroga-se caso o réu não alegue a incompetência em sede de preliminar de contestação (art. 65).\n- Foro de Eleição (art. 63): as partes podem modificar a competência em razão do valor e do território. O juiz pode reconhecer a ineficácia da cláusula de foro de eleição abusiva em contrato de adesão antes da citação.\n- Conexão e Continência (arts. 55 e 56): ações conexas devem ser reunidas perante o juízo prevento para julgamento conjunto a fim de evitar decisões conflitantes. Prevenção consuma-se com o registro ou a distribuição da petição inicial (art. 59).",
        "keyStatutes": [
          "Arts. 42 a 66 do CPC/15"
        ],
        "summaryPoints": [
          "Incompetência relativa deve ser arguida em preliminar de contestação sob pena de prorrogação.",
          "Incompetência absoluta não preclui e pode ser declarada de ofício pelo magistrado.",
          "Prevenção processual consuma-se com a distribuição da primeira petição inicial."
        ]
      },
      {
        "title": "Módulo 3: Tutelas Provisórias de Urgência e de Evidência (Págs. 11-17)",
        "content": "O Livro V do CPC/15 unificou o regime das tutelas provisórias, dividindo-as em:\n1. Tutela de Urgência (art. 300): exige cumulativamente:\n- Fumus boni iuris (probabilidade do direito alegado);\n- Periculum in mora (perigo de dano ou o risco ao resultado útil do processo);\n- Reversibilidade dos efeitos: a tutela de urgência de natureza antecipada não será concedida quando houver perigo de irreversibilidade dos efeitos da decisão (§ 3º). Pode ser antecedente ou incidental.\n- Estabilização da Tutela Antecipada Antecedente (art. 304): deferida a tutela e não havendo interposição de recurso de agravo de instrumento pelo réu, a medida torna-se estável e o processo é extinto sem resolução de mérito. Qualquer das partes tem 2 (dois) anos para ajuizar ação para rever ou anular a decisão estabilizada.\n2. Tutela de Evidência (art. 311): independe da demonstração de perigo de dano ou risco ao resultado útil! Hipóteses:\nI - Abuso do direito de defesa ou manifesto propósito protelatório do réu;\nII - Alegações comprovadas apenas documentalmente e houver tese firmada em julgamento de casos repetitivos ou em súmula vinculante;\nIII - Pedido reipersecutório fundado em prova documental adequada do contrato de depósito;\nIV - Petição inicial instruída com prova documental suficiente dos fatos e o réu não opuser prova capaz de gerar dúvida razoável.",
        "keyStatutes": [
          "Arts. 294 a 311 do CPC/15"
        ],
        "summaryPoints": [
          "Tutela de urgência exige probabilidade do direito e perigo de dano.",
          "Estabilização da tutela antecipada antecedente decorre da falta de agravo de instrumento.",
          "Tutela de evidência independe totalmente da comprovação de urgência ou perigo de dano."
        ]
      },
      {
        "title": "Módulo 4: Fase Postulatória, Contestação e Revelia (Págs. 18-24)",
        "content": "A petição inicial (art. 319) instaura a demanda e fixa os limites objetivos da lide.\nDefesa do Réu:\n- Audiência de Conciliação ou Mediação (art. 334): obrigatória, salvo se ambas as partes manifestarem expressamente desinteresse na composição ou se a matéria não admitir autocomposição. O não comparecimento injustificado configura ato atentatório à dignidade da justiça, sancionado com multa de até 2% do valor da causa.\n- Contestação (art. 335): prazo de 15 (quinze) dias úteis. Princípio da eventualidade ou concentração da defesa: toda e qualquer matéria de defesa preliminar (art. 337 - incompetência, inépcia, litispendência, coisa julgada) e de mérito deve ser aduzida na contestação sob pena de preclusão.\n- Reconvenção (art. 343): proposta na própria peça da contestação para manifestar pretensão própria conexa com a ação principal ou com os fundamentos da defesa.\n- Revelia (arts. 344 a 346): ocorre quando o réu não contesta a ação. Efeito material: presunção de veracidade das alegações de fato formuladas pelo autor. Não opera efeitos se: havendo pluralidade de réus, algum contestar; o litígio versar sobre direitos indisponíveis; a petição inicial não estiver acompanhada de instrumento que a lei considere indispensável à prova do ato.",
        "keyStatutes": [
          "Arts. 319, 334, 335, 337, 343 e 344 do CPC/15"
        ],
        "summaryPoints": [
          "Ausência injustificada na audiência de conciliação gera multa de até 2% por ato atentatório à justiça.",
          "Reconvenção é proposta dentro da própria contestação no CPC/15.",
          "Revelia não gera presunção de veracidade sobre direitos indisponíveis."
        ]
      },
      {
        "title": "Módulo 5: Teoria Geral da Prova e Saneamento Processual (Págs. 25-30)",
        "content": "Fase Probatória e Ônus da Prova (art. 373):\n- Distribuição estática clássica: incumbe ao autor a prova do fato constitutivo de seu direito (inciso I); incumbe ao réu a prova da existência de fato impeditivo, modificativo ou extintivo do direito do autor (inciso II).\n- Distribuição dinâmica do ônus da prova (art. 373, § 1º): diante de peculiaridades da causa relacionadas à impossibilidade ou à excessiva dificuldade de cumprir o encargo, ou à maior facilidade de obtenção da prova pela parte adversa, o juiz poderá atribuir o ônus de modo diverso, em decisão fundamentada concedendo oportunidade para desincumbência.\nDecisão de Saneamento e Organização do Processo (art. 357): o juiz resolverá as questões processuais pendentes, delimitará as questões de fato sobre as quais recairá a atividade probatória, delimitará as questões de direito e designará audiência de instrução e julgamento se necessário.",
        "keyStatutes": [
          "Arts. 357 e 373 do CPC/15"
        ],
        "summaryPoints": [
          "Distribuição dinâmica do ônus da prova atribuída ao litigante com maior facilidade técnica.",
          "Fato impeditivo, modificativo ou extintivo é ônus probatório que recai sobre o réu.",
          "Decisão de saneamento estabiliza o objeto probatório e os pontos controvertidos."
        ]
      },
      {
        "title": "Módulo 6: Sentença, Coisa Julgada e Liquidação (Págs. 31-36)",
        "content": "A sentença é o pronunciamento pelo qual o magistrado põe fim à fase cognitiva do procedimento comum ou extingue a execução (art. 203, § 1º).\nElementos Essenciais da Sentença (art. 489): relatório, fundamentos e dispositivo.\nÉ nula a decisão que:\nI - se limita à indicação ou reprodução de ato normativo sem explicar sua relação com a causa;\nII - emprega conceitos jurídicos indeterminados sem demonstrar a razão concreta de sua aplicação;\nIV - não enfrenta todos os argumentos deduzidos no processo capazes de infirmar a conclusão adotada pelo julgador;\nVI - deixa de seguir enunciado de súmula, jurisprudência ou precedente invocado pela parte sem demonstrar a distinção (distinguishing) ou superação (overruling).\nCoisa Julgada Material (art. 502): torna imutável e indiscutível a decisão de mérito não mais sujeita a recurso. Apenas o dispositivo faz coisa julgada material; a verdade dos fatos e os motivos expostos na fundamentação não fazem coisa julgada (art. 504).",
        "keyStatutes": [
          "Arts. 485, 487, 489 e 502 a 504 do CPC/15"
        ],
        "summaryPoints": [
          "Sentença desprovida de enfrentamento de teses que possam infirmar o julgado é nula.",
          "Motivos e fundamentação fática não fazem coisa julgada material.",
          "Distinguishing exige demonstração das diferenças fáticas com o precedente citado."
        ]
      },
      {
        "title": "Módulo 7: Teoria Geral dos Recursos e Prazos Unificados (Págs. 37-42)",
        "content": "O CPC/15 consagrou a simplificação e uniformização procedimental dos recursos:\n- Prazos: todos os recursos possuem prazo de 15 (quinze) dias úteis, com exceção exclusiva dos Embargos de Declaração, cujo prazo é de 5 (cinco) dias úteis (art. 1.003, § 5º).\n- Contagem: estritamente em dias úteis (art. 219).\n- Preparo (art. 1.007): a insuficiência no recolhimento do preparo implica a intimação do recorrente para complementá-lo no prazo improrrogável de 5 dias úteis. A ausência total de preparo gera a intimação para recolhimento em dobro sob pena de deserção (§ 4º).\n- Efeito Suspensivo Ope Judicis: no CPC/15, apenas a Apelação detém efeito suspensivo automático ope legis como regra geral (art. 1.012). Todos os demais recursos possuem efeito meramente devolutivo, cabendo ao relator deferir efeito suspensivo se houver risco de dano grave e probabilidade de provimento (art. 995, parágrafo único).",
        "keyStatutes": [
          "Arts. 219, 995, 1.003 e 1.007 do CPC/15"
        ],
        "summaryPoints": [
          "Prazo geral de 15 dias úteis para recursos (Embargos de Declaração = 5 dias).",
          "Preparo ausente enseja recolhimento em dobro; preparo a menor admite complementação simples em 5 dias.",
          "Apelação tem efeito suspensivo legal automático; demais recursos dependem de pedido cautelar."
        ]
      },
      {
        "title": "Módulo 8: Apelação, Agravo de Instrumento e o Tema 988 do STJ (Págs. 43-47)",
        "content": "Espécies recursais capitais:\n1. Apelação (art. 1.009): cabível contra a sentença terminativa ou definitiva. Possui efeito devolutivo amplo, devolvendo ao tribunal o conhecimento de toda a matéria impugnada e das questões não preclusas decididas na fase de conhecimento que não comportavam agravo de instrumento.\n2. Agravo de Instrumento (art. 1.015): cabe contra decisões interlocutórias de urgência e expressas: tutelas provisórias, mérito do processo, rejeição da gratuidade de justiça ou acolhimento do pedido de sua revogação, exibição ou posse de coisa, exclusão de litisconsorte, rejeição do pedido de limitação do litisconsórcio, fase de cumprimento de sentença e processo de execução.\n- Taxatividade Mitigada (Tema 988 do STJ): o Superior Tribunal de Justiça firmou a tese de que o rol do art. 1.015 é de taxatividade mitigada, admitindo-se a interposição de agravo de instrumento fora do rol quando verificada a urgência decorrente da inutilidade do julgamento da questão em posterior apelação.\n3. Embargos de Declaração (art. 1.022): cabíveis contra qualquer decisão judicial para sanar obscuridade, contradição, omissão ou erro material. Não exigem preparo e interrompem o prazo para interposição de outros recursos.",
        "keyStatutes": [
          "Arts. 1.009, 1.015 e 1.022 do CPC/15",
          "Tema Repetitivo 988 do STJ"
        ],
        "summaryPoints": [
          "Decisões interlocutórias não agraváveis não precluem e podem ser suscitadas na apelação.",
          "Tema 988 do STJ: taxatividade mitigada autoriza agravo quando o adiamento gerar dano irreparável.",
          "Embargos de Declaração interrompem (zeram) o prazo para os demais recursos."
        ]
      },
      {
        "title": "Módulo 9: Cumprimento de Sentença e Execução de Títulos (Págs. 48-51)",
        "content": "O cumprimento de sentença definitiva de obrigação de pagar quantia certa (art. 523) inicia-se a requerimento do exequente.\n- Intimação do Devedor: para pagar o débito no prazo de 15 (quinze) dias úteis.\n- Multa e Honorários de 10%: não ocorrendo o pagamento voluntário no prazo de 15 dias, o débito será acrescido de multa de 10% (dez por cento) e, também, de honorários advocatícios de 10% sobre o montante inadimplido (§ 1º).\n- Impugnação ao Cumprimento de Sentença (art. 525): transcorrido o prazo de 15 dias para pagamento voluntário, inicia-se automaticamente o prazo de 15 dias para o executado apresentar impugnação, nos próprios autos, independentemente de penhora ou garantia do juízo.\nExecução de Título Extrajudicial (art. 771 em diante):\nO devedor é citado para pagar em 3 dias (art. 829). Os Embargos à Execução (art. 914) têm prazo de 15 dias contados da juntada do mandado de citação, distribuídos por dependência e autuados em apartado, dispensando penhora prévia.",
        "keyStatutes": [
          "Arts. 523, 525, 827, 829 e 914 do CPC/15"
        ],
        "summaryPoints": [
          "Cumprimento de sentença: 15 dias para pagar + 15 dias para impugnar.",
          "Não pagamento no prazo legal gera multa de 10% e honorários de 10%.",
          "Embargos à execução dispensam garantia prévia do juízo como regra geral."
        ]
      },
      {
        "title": "Módulo 10: Sistema de Precedentes Judiciais Obrigatórios no CPC/15 (Págs. 52-55)",
        "content": "O art. 926 do CPC impõe que os tribunais uniformizem sua jurisprudência e a mantenham estável, íntegra e coerente.\nRol de Precedentes Vinculantes (art. 927):\nOs juízes e os tribunais observarão:\nI - as decisões do Supremo Tribunal Federal em controle concentrado de constitucionalidade;\nII - os enunciados de súmula vinculante;\nIII - os acórdãos em incidente de assunção de competência (IAC) ou de resolução de demandas repetitivas (IRDR) e em julgamento de recursos extraordinário e especial repetitivos;\nIV - os enunciados das súmulas do Supremo Tribunal Federal em matéria constitucional e do Superior Tribunal de Justiça em matéria infraconstitucional;\nV - a orientação do plenário ou do órgão especial aos quais estiverem vinculados.\nTécnicas de Confronto com o Precedente:\n- Distinguishing (Distinção): demonstração motivada de que o caso em julgamento possui particularidades fáticas que não se amoldam à tese jurídica do precedente.\n- Overruling (Superação): revogação e superação da tese jurídica em razão de modificação axiológica, fática ou legal, exigindo modulação temporal de efeitos para proteger a confiança dos jurisdicionados.",
        "keyStatutes": [
          "Arts. 926 e 927 do CPC/15"
        ],
        "summaryPoints": [
          "Art. 927 fixa rol de precedentes de observância obrigatória por todos os magistrados.",
          "IRDR, IAC e Recursos Repetitivos têm força vinculante obrigatória.",
          "A superação de precedente (overruling) exige modulação para assegurar estabilidade jurídica."
        ]
      }
    ]
  },
  {
    "id": "manual-ext-trabalho-50p",
    "title": "Curso Extensivo de Direito Material e Processual do Trabalho",
    "disciplineId": "trabalho",
    "author": "Dra. Camila Vasconcellos & Prof. Felipe Rocha",
    "estimatedReadTime": "50 páginas didáticas · 3h40 de estudo aprofundado",
    "pageCount": 50,
    "isExtensiveManual": true,
    "edition": "Manual Completo 2026/2027 · Edição Definitiva",
    "description": "Tratado exaustivo de 50 páginas integrando Direito Individual e Coletivo do Trabalho pós-Reforma (Lei 13.467/17), jornada, rescisão contratual, estabilidades, rito sumaríssimo e ordinário, audiência una e recursos no TST.",
    "chapters": [
      {
        "title": "Módulo 1: Relação de Trabalho vs Relação de Emprego (Págs. 1-5)",
        "content": "A relação de emprego constitui espécie qualificada do gênero relação de trabalho. O art. 3º da CLT consagra os cinco elementos fático-jurídicos cumulativos da condição de empregado:\n1. Pessoa natural (pessoa física): impossibilidade de empregado pessoa jurídica;\n2. Pessoalidade (intuitu personae): o trabalhador não pode fazer-se substituir habitualmente por terceiro;\n3. Não eventualidade: trabalho contínuo inserido na dinâmica habitual da empresa;\n4. Onerosidade: contraprestação pecuniária ou promessa de remuneração;\n5. Subordinação jurídica: elemento basilar, submetendo o empregado ao poder diretivo, regulamentar, fiscalizatório e disciplinar do empregador.\nCom a Reforma Trabalhista (Lei 13.467/17), admitiu-se expressamente o contrato de trabalho intermitente (art. 452-A da CLT) e a contratação do trabalhador autônomo, ainda que com exclusividade e continuidade, sem que isso por si só caracterize relação empregatícia (art. 442-B).",
        "keyStatutes": [
          "Arts. 2º e 3º da CLT",
          "Arts. 442-B e 452-A da CLT"
        ],
        "summaryPoints": [
          "Cinco requisitos cumulativos: Pessoa física, Pessoalidade, Não eventualidade, Onerosidade e Subordinação.",
          "Subordinação jurídica é o elemento diferenciador da relação de emprego.",
          "Autônomo com exclusividade não gera automaticamente vínculo de emprego após a Reforma."
        ]
      },
      {
        "title": "Módulo 2: Duração do Trabalho, Horas Extras e Banco de Horas (Págs. 6-11)",
        "content": "A jornada padrão constitucional é de 8 horas diárias e 44 horas semanais (art. 7º, XIII da CF/88).\nRegras capitais pós-reforma:\n- Horas Suplementares (art. 59): máximo de 2 horas diárias mediante acordo individual, convenção ou acordo coletivo, com adicional mínimo de 50%.\n- Banco de Horas: pode ser pactuado por acordo individual escrito com compensação no período máximo de 6 (seis) meses (art. 59, § 5º), ou por acordo/convenção coletiva com compensação em até 1 ano (§ 2º).\n- Intervalo Intrajornada (art. 71, § 4º): para jornada superior a 6 horas, o intervalo mínimo é de 1 hora. A não concessão ou concessão parcial implica o pagamento apenas do período suprimido, com acréscimo de 50%, possuindo natureza estritamente indenizatória (não gerando reflexos nas demais parcelas).\n- Intervalo Interjornadas (art. 66): descanso mínimo obrigatório de 11 (onze) horas consecutivas entre duas jornadas diárias.\n- Empregados Excluídos do Controle de Jornada (art. 62): empregados em atividade externa incompatível com fixação de horário, gerentes com cargo de confiança e exercentes de teletrabalho contratados por produção ou tarefa.",
        "keyStatutes": [
          "Art. 7º, XIII da CF/88",
          "Arts. 59, 62, 66 e 71 da CLT"
        ],
        "summaryPoints": [
          "Supressão de intervalo intrajornada remunera apenas o tempo suprimido com 50% de natureza indenizatória.",
          "Banco de horas semestral pode ser instituído por simples acordo individual escrito.",
          "Intervalo interjornada mínimo de 11 horas consecutivas."
        ]
      },
      {
        "title": "Módulo 3: Remuneração, Salário e Equiparação Salarial (Págs. 12-17)",
        "content": "Diferença entre Remuneração e Salário (art. 457 da CLT):\n- Salário: contraprestação paga diretamente pelo empregador ao empregado pelo serviço prestado ou pelo tempo à disposição.\n- Remuneração: soma do salário com as gorjetas percebidas.\nParcelas Não Salariais (art. 457, § 2º): não integram a remuneração, não se incorporam ao contrato e não constituem base de incidência de FGTS e INSS: as importâncias, ainda que habituais, pagas a título de ajuda de custo, auxílio-alimentação (vedado pagamento em dinheiro), diárias para viagem e prêmios.\nEquiparação Salarial (art. 461 da CLT - Requisitos Cumulativos):\n1. Trabalho de igual valor (igual produtividade e mesma perfeição técnica);\n2. Prestado ao mesmo empregador;\n3. No mesmo estabelecimento empresarial (não mais na mesma localidade!);\n4. Diferença de tempo de serviço para o mesmo empregador não superior a 4 (quatro) anos;\n5. Diferença de tempo na mesma função não superior a 2 (dois) anos;\n6. Inexistência de quadro de carreira ou plano de cargos e salários organizado na empresa.",
        "keyStatutes": [
          "Arts. 457 e 461 da CLT"
        ],
        "summaryPoints": [
          "Prêmios e ajudas de custo não possuem natureza salarial mesmo que habituais.",
          "Equiparação salarial exige identidade no mesmo estabelecimento empresarial.",
          "Diferença máxima de 2 anos na mesma função e 4 anos na mesma empresa."
        ]
      },
      {
        "title": "Módulo 4: Rescisão Contratual e Estabilidades Provisórias (Págs. 18-24)",
        "content": "Modalidades de Rompimento Contratual:\n1. Dispensa Sem Justa Causa: direito a aviso prévio proporcional, saldo de salário, férias proporcionais + 1/3, 13º proporcional, saque do FGTS com multa de 40% e seguro-desemprego.\n2. Demissão em Comum Acordo (art. 484-A da CLT): extingue o contrato por consenso recíproco. O trabalhador recebe pela metade o aviso prévio indenizado e a indenização sobre o saldo do FGTS (20%), podendo sacar até 80% dos depósitos do FGTS, sem direito ao seguro-desemprego.\n3. Justa Causa do Empregado (art. 482 da CLT): improbidade, incontinência de conduta, desídia, embriaguez habitual ou em serviço, ato lesivo à honra do empregador.\n4. Rescisão Indireta (art. 483 da CLT): justa causa praticada pelo empregador (exigir serviços superiores às forças, rigor excessivo, não cumprimento das obrigações do contrato).\nEstabilidades Provisórias Fundamentais:\n- Gestante: desde a confirmação da gravidez até 5 meses após o parto (art. 10, II, \"b\" do ADCT e Súmula 244 do TST).\n- Acidente de Trabalho: estabilidade mínima de 12 meses após a cessação do auxílio por incapacidade temporária acidentária (art. 118 da Lei 8.213/91).\n- Dirigente Sindical e Membro da CIPA: vedada a dispensa arbitrária desde o registro da candidatura até 1 ano após o término do mandato.",
        "keyStatutes": [
          "Arts. 482, 483 e 484-A da CLT",
          "Art. 10, II do ADCT",
          "Súmula 244 do TST"
        ],
        "summaryPoints": [
          "Acordo consensual (art. 484-A) confere 20% de multa do FGTS e saque de até 80% do saldo.",
          "Estabilidade gestante decorre da concepção no curso do contrato, garantida até 5 meses pós-parto.",
          "Estabilidade acidentária de 1 ano após a alta médica do benefício acidentário."
        ]
      },
      {
        "title": "Módulo 5: Prescrição Trabalhista e Prazos Decadenciais (Págs. 25-29)",
        "content": "A prescrição dos direitos oriundos da relação de emprego está disciplinada no art. 7º, XXIX da CF/88 e no art. 11 da CLT:\n- Prescrição Quinquenal: o trabalhador pode pleitear verbas referentes aos últimos 5 (cinco) anos anteriores à data do ajuizamento da ação (dies a quo de retroação fixado pela distribuição).\n- Prescrição Bienal: após a extinção do contrato de trabalho, o empregado dispõe do prazo fatal de 2 (dois) anos para ajuizar a reclamação trabalhista. Transcorrido o biênio sem distribuição, opera-se a prescrição total de todas as pretensões.\n- Prescrição Intercorrente (art. 11-A da CLT): instituída pela Lei 13.467/17, prescreve em 2 (dois) anos a pretensão intercorrente no processo do trabalho quando o exequente deixar de cumprir determinação judicial irrecorrível no curso da execução.",
        "keyStatutes": [
          "Art. 7º, XXIX da CF/88",
          "Arts. 11 e 11-A da CLT",
          "Súmula 308 do TST"
        ],
        "summaryPoints": [
          "Prescrição bienal de 2 anos a contar da data de rescisão.",
          "Prescrição quinquenal retroativa à data de ajuizamento da ação.",
          "Prescrição intercorrente bienal admitida na fase de execução trabalhista."
        ]
      },
      {
        "title": "Módulo 6: Ritos Processuais na Justiça do Trabalho (Págs. 30-34)",
        "content": "Procedimentos Cognitivos Trabalhistas:\n1. Rito Sumaríssimo (arts. 852-A a 852-I da CLT):\n- Limite: causas cujo valor não exceda a 40 (quarenta) salários mínimos na data da distribuição;\n- Requisitos da Inicial: pedido certo, determinado e com indicação do valor correspondente (liquidação prévia), além da correta indicação do nome e endereço do reclamado;\n- Vedação Expressa: NÃO se admite citação por edital no rito sumaríssimo (art. 852-B, II - gera arquivamento imediato do pedido);\n- Testemunhas: máximo de até 2 (duas) testemunhas para cada parte litigante;\n- Exclusão: a Administração Pública direta, autárquica e fundacional não se submete ao rito sumaríssimo (subordina-se ao ordinário).\n2. Rito Ordinário: causas com valor superior a 40 salários mínimos. Admite citação editalícia e autoriza a ouvida de até 3 (três) testemunhas por parte.",
        "keyStatutes": [
          "Arts. 852-A a 852-I da CLT"
        ],
        "summaryPoints": [
          "Rito sumaríssimo: até 40 salários mínimos e até 2 testemunhas.",
          "Vedada citação por edital no rito sumaríssimo sob pena de arquivamento.",
          "Rito ordinário admite até 3 testemunhas por litigante."
        ]
      },
      {
        "title": "Módulo 7: Audiência Trabalhista e Efeitos da Revelia (Págs. 35-39)",
        "content": "A audiência na Justiça do Trabalho é una e contínua (art. 849 da CLT), compreendendo tentativa de conciliação, defesa, instrução e razões finais.\nEfeitos do Não Comparecimento das Partes (art. 844 da CLT):\n- Ausência do Reclamante: importa o arquivamento da reclamação trabalhista. O reclamante que der causa a 2 arquivamentos consecutivos incorre em perempção trabalhista temporária por 6 meses (art. 732). O não comparecimento injustificado do autor à audiência acarreta condenação em custas, ainda que beneficiário da justiça gratuita (§ 2º).\n- Ausência do Reclamado: acarreta revelia e confissão ficta quanto à matéria de fato. A presença do advogado com procuração na audiência assegura a juntada da contestação e documentos anexos, sendo-lhe facultado produzir provas orais caso compareça antes do encerramento da instrução (art. 844, § 5º da CLT).",
        "keyStatutes": [
          "Arts. 732, 844 e 849 da CLT",
          "Súmula 74 do TST"
        ],
        "summaryPoints": [
          "Ausência do autor gera arquivamento da reclamação.",
          "Ausência do réu acarreta revelia e confissão quanto à matéria de fato.",
          "Advogado presente com procuração tem o direito de juntar defesa mesmo com ausência do preposto."
        ]
      },
      {
        "title": "Módulo 8: Teoria Geral dos Recursos e Prazos Trabalhistas (Págs. 40-44)",
        "content": "Regime Recursal Trabalhista:\n- Prazo Unificado: todos os recursos trabalhistas têm prazo de 8 (oito) dias úteis! A única exceção de relevo são os Embargos de Declaração, com prazo de 5 (cinco) dias úteis (art. 897-A da CLT).\n- Contagem: estritamente em dias úteis (art. 775 da CLT).\n- Efeito dos Recursos: em regra, os recursos trabalhistas possuem efeito meramente devolutivo (art. 899 da CLT).\n- Preparo Trabalhista: composto por Custas Processuais (2% sobre o valor da condenação) e Depósito Recursal (garantia do juízo). São isentos do depósito recursal: os beneficiários da justiça gratuita, as entidades filantrópicas e as empresas em recuperação judicial (art. 899, § 10). A massa falida é dispensada do recolhimento de custas e de depósito recursal (Súmula 86 do TST).",
        "keyStatutes": [
          "Arts. 775, 893, 897-A e 899 da CLT",
          "Súmula 86 do TST"
        ],
        "summaryPoints": [
          "Prazo geral recursal trabalhista de 8 dias úteis (EDcl = 5 dias úteis).",
          "Beneficiário da justiça gratuita é isento de custas e depósito recursal.",
          "Empresa em recuperação judicial é isenta do depósito recursal (art. 899, § 10)."
        ]
      },
      {
        "title": "Módulo 9: Recursos em Espécie: RO, Agravo de Petição e Revista (Págs. 45-48)",
        "content": "Espécies Recursais:\n1. Recurso Ordinário (art. 895 da CLT): cabe contra decisões definitivas ou terminativas proferidas pelas Varas do Trabalho (remetido ao TRT) ou contra decisões terminativas em processos de competência originária dos TRTs (remetido ao TST). Prazo de 8 dias úteis.\n2. Agravo de Petição (art. 897, \"a\" da CLT): recurso cabível das decisões do juiz na fase de execução trabalhista. Exige a delimitação justificada das matérias e dos valores incontroversos impugnados (§ 1º), permitindo a execução imediata da parte remanescente.\n3. Recurso de Revista (art. 896 da CLT): recurso de natureza extraordinária julgado pelo Tribunal Superior do Trabalho para uniformização da jurisprudência nacional. Hipóteses: divergência jurisprudencial notória entre TRTs ou ofensa literal a dispositivo de lei federal ou da Constituição Federal. Exige a demonstração prévia de Transcendência (relevância econômica, política, social ou jurídica) e não admite o reexame de fatos e provas (Súmula 126 do TST).",
        "keyStatutes": [
          "Arts. 895, 896 e 897 da CLT",
          "Súmula 126 do TST"
        ],
        "summaryPoints": [
          "Recurso Ordinário é a via de ampla apelação na Justiça do Trabalho.",
          "Agravo de Petição é exclusivo da execução e exige delimitação de valores incontroversos.",
          "Recurso de Revista perante o TST não admite revolvimento de provas (Súmula 126)."
        ]
      },
      {
        "title": "Módulo 10: Execução Trabalhista e Desconsideração da Personalidade (Págs. 49-50)",
        "content": "A execução trabalhista rege-se pelos arts. 876 a 892 da CLT.\n- Início da Execução (art. 878): a execução será promovida pelas partes, permitida a execução de ofício pelo juiz apenas nos casos em que as partes não estiverem representadas por advogado (jus postulandi).\n- Citação para Pagamento: o devedor é citado para pagar em 48 (quarenta e oito) horas ou garantir o juízo sob pena de penhora (art. 880).\n- Embargos à Execução (art. 884): garantida a execução ou penhorados os bens, o executado tem prazo de 5 (cinco) dias para apresentar embargos.\n- Incidente de Desconsideração da Personalidade Jurídica (IDPJ - art. 855-A da CLT): aplica-se o procedimento dos arts. 133 a 137 do CPC/15, com suspensão do processo principal e intimação dos sócios para apresentar manifestação e requerer provas em 15 dias.",
        "keyStatutes": [
          "Arts. 855-A, 878, 880 e 884 da CLT",
          "Arts. 133 a 137 do CPC/15"
        ],
        "summaryPoints": [
          "Execução de ofício pelo magistrado restrita a quem não tem advogado constituído.",
          "Citação para pagar o débito em 48 horas sob pena de penhora.",
          "Embargos à execução exigem prévia e integral garantia do juízo."
        ]
      }
    ]
  },
  {
    "id": "manual-ext-admin-50p",
    "title": "Manual Completo de Direito Administrativo e Nova Lei de Licitações (Lei 14.133/21)",
    "disciplineId": "administrativo",
    "author": "Dra. Marina Silveira & Prof. Dr. Celso Antônio",
    "estimatedReadTime": "52 páginas didáticas · 3h55 de estudo aprofundado",
    "pageCount": 52,
    "isExtensiveManual": true,
    "edition": "Manual Completo 2026/2027 · Edição Definitiva",
    "description": "Tratado exaustivo de 52 páginas cobrindo Regime Jurídico Administrativo, Atos Administrativos, Poderes da Administração, Nova Lei de Licitações 14.133/21 (modalidades, dispensa, inexigibilidade), Nova Lei de Improbidade (Lei 14.230/21) e Responsabilidade Civil do Estado.",
    "chapters": [
      {
        "title": "Módulo 1: Princípios Constitucionais e Regime Jurídico Administrativo (Págs. 1-5)",
        "content": "O regime jurídico administrativo estrutura-se sob o binômio indissociável da supremacia do interesse público sobre o privado e da indisponibilidade do interesse público pela Administração.\nPrincípios Expressos do Art. 37, Caput da CF/88 (LIMPE):\n1. Legalidade: o particular pode fazer tudo o que a lei não proíbe; o agente público só pode agir quando e como a lei expressamente autoriza.\n2. Impessoalidade: veda favorecimentos ou perseguições pessoais. Veda também a autopromoção de autoridades públicas em obras e serviços estatais (art. 37, § 1º). Súmula Vinculante 13 do STF: veda o nepotismo na nomeação para cargos em comissão e funções de confiança.\n3. Moralidade: atuação orientada pela lealdade, ética e probidade. Distingue-se da mera legalidade estrita.\n4. Publicidade: os atos administrativos devem ser transparentes, garantindo o controle social e a eficácia das decisões.\n5. Eficiência: impõe produtividade, celeridade e economicidade na entrega de serviços públicos.",
        "keyStatutes": [
          "Art. 37 da CF/88",
          "Súmula Vinculante 13 do STF"
        ],
        "summaryPoints": [
          "Binômio basilar: Supremacia do interesse público e Indisponibilidade do interesse público.",
          "Princípios do art. 37: Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência.",
          "Súmula Vinculante 13 proíbe a nomeação de parentes até 3º grau para cargos comissionados."
        ]
      },
      {
        "title": "Módulo 2: Atos Administrativos: Elementos, Atributos e Convalidação (Págs. 6-11)",
        "content": "Requisitos de Validade do Ato Administrativo (COMFIFORMOOB):\n1. Competência: poder atribuído pela lei ao agente. Admite delegação e avocação em regra (salvo edição de atos normativos, decisão de recursos e matérias de competência exclusiva);\n2. Finalidade: sempre a satisfação do interesse público. O desvio de finalidade constitui vício insanável;\n3. Forma: exteriorização do ato. O vício de forma é sanável quando a forma não for essencial;\n4. Motivo: situação de fato e de direito que enseja a edição do ato. Teoria dos Motivos Determinantes: a validade do ato vincula-se à veracidade e legalidade dos motivos alegados;\n5. Objeto: o efeito jurídico imediato produzido pelo ato.\nAtributos do Ato Administrativo (PATI):\n- Presunção de Legitimidade e Veracidade: presume-se editado em conformidade com a lei até prova em contrário (ônus da prova é do particular);\n- Autoexecutoriedade: faculdade de executar diretamente suas decisões sem prévia intervenção judicial;\n- Tipicidade: garantia de que o ato corresponda a figuras previamente definidas pela lei;\n- Imperatividade: imposição unilateral de obrigações a terceiros independente de concordância prévia.\nConvalidação (art. 55 da Lei 9.784/99): permite sanar vícios leves de competência (não exclusiva) e de forma (não essencial), desde que não cause lesão ao interesse público nem prejuízo a terceiros.",
        "keyStatutes": [
          "Lei nº 9.784/1999, arts. 50 a 55",
          "Súmula 473 do STF"
        ],
        "summaryPoints": [
          "Vícios sanáveis que admitem convalidação: competência relativa e forma não essencial.",
          "Teoria dos motivos determinantes: a falsidade do motivo enseja a anulação do ato.",
          "Autoexecutoriedade dispensa ordem judicial prévia para atos estatais urgentes."
        ]
      },
      {
        "title": "Módulo 3: Nova Lei de Licitações (Lei 14.133/21): Modalidades e Fases (Págs. 12-18)",
        "content": "A Lei Federal nº 14.133/2021 estabeleceu o novo marco geral das licitações e contratos administrativos no Brasil.\nModalidades Licitatórias do Art. 28:\n1. Pregão: modalidade obrigatória para aquisição de bens e serviços comuns, cujo critério de julgamento seja menor preço ou maior desconto.\n2. Concorrência: para contratação de bens e serviços especiais e de obras e serviços comuns e especiais de engenharia.\n3. Concurso: escolha de trabalho técnico, científico ou artístico, mediante concessão de prêmio ou remuneração.\n4. Leilão: alienação de bens imóveis ou de bens móveis inservíveis ou legalmente apreendidos a quem oferecer o maior lance.\n5. Diálogo Competitivo (art. 32): modalidade inovadora para contratação de obras, serviços e compras em que a Administração Pública visa soluções inovadoras, de alta complexidade tecnológica ou técnica não disponível no mercado convencional.\nModalidades Extintas: foram revogadas e não existem mais a Tomada de Preços e o Convite.\nInversão das Fases: na Lei 14.133/21, a regra geral é o julgamento prévio das propostas de preços e posterior habilitação do licitante vencedor (art. 17).",
        "keyStatutes": [
          "Lei nº 14.133/2021, arts. 17, 28 e 32"
        ],
        "summaryPoints": [
          "Extinção de Convite e Tomada de Preços; introdução do Diálogo Competitivo.",
          "Pregão obrigatório para bens e serviços comuns.",
          "Inversão das fases como regra geral: julga-se o preço antes de abrir os documentos de habilitação."
        ]
      },
      {
        "title": "Módulo 4: Contratação Direta: Inexigibilidade e Dispensa (Págs. 19-24)",
        "content": "A contratação direta sem processo licitatório prévio é medida excepcional que se divide em:\n- Inexigibilidade de Licitação (art. 74): ocorre quando há inviabilidade fática ou jurídica de competição. O rol do art. 74 é meramente exemplificativo (numerus apertus). Casos clássicos:\na) Fornecedor exclusivo de produto ou serviço;\nb) Profissional do setor artístico consagrado pela crítica especializada ou pela opinião pública;\nc) Serviços técnicos especializados de natureza predominantemente intelectual, com profissionais ou empresas de notória especialização (vedada inexigibilidade para publicidade e divulgação);\nd) Credenciamento.\n- Dispensa de Licitação (art. 75): a competição é materialmente viável, mas a lei autoriza ou impõe a celebração direta por conveniência pública. O rol do art. 75 é taxativo (numerus clausus).\nHipóteses Capitais:\n- Dispensa em razão do valor (incisos I e II): obras e serviços de engenharia de até R$ 100.000,00 (atualizado por decreto anual) e outros serviços e compras de até R$ 50.000,00;\n- Casos de emergência ou calamidade pública (inciso VIII) para aquisição de bens necessários ao atendimento da situação emergencial pelo prazo máximo de 1 ano.",
        "keyStatutes": [
          "Arts. 74 e 75 da Lei nº 14.133/2021"
        ],
        "summaryPoints": [
          "Inexigibilidade decorre de inviabilidade de competição (rol exemplificativo).",
          "Dispensa decorre de opção legislativa expressa (rol taxativo).",
          "Vedada inexigibilidade para serviços de publicidade e propaganda."
        ]
      },
      {
        "title": "Módulo 5: Contratos Administrativos e Prerrogativas Públicas (Págs. 25-30)",
        "content": "Os contratos administrativos caracterizam-se pela presença de cláusulas exorbitantes em favor do Poder Público (art. 104 da Lei 14.133/21):\n1. Modificação unilateral do contrato: até o limite de 25% para acréscimos ou supressões de obras, serviços e compras, e até 50% para acréscimos em reformas de edifícios ou equipamentos (art. 125);\n2. Extinção unilateral por motivo de conveniência ou descumprimento;\n3. Fiscalização irrestrita da execução contratual;\n4. Aplicação direta de sanções administrativas;\n5. Ocupação provisória de bens móveis e imóveis do contratado em serviços essenciais.\nTeoria da Imprevisão e Equilíbrio Econômico-Financeiro (art. 124, II, \"d\"): fatos imprevisíveis ou previsíveis de consequências incalculáveis que desequilibrem a relação contratual asseguram o direito à recomposição dos preços contratuais (revisão / reequilíbrio).",
        "keyStatutes": [
          "Arts. 104, 124 e 125 da Lei nº 14.133/2021"
        ],
        "summaryPoints": [
          "Cláusulas exorbitantes conferem prerrogativas unilaterais ao Estado.",
          "Limite geral de alteração unilateral de 25% (ou 50% para reformas).",
          "Fato imprevisível enseja revisão para restaurar o equilíbrio econômico-financeiro."
        ]
      },
      {
        "title": "Módulo 6: Responsabilidade Civil Objetiva do Estado (Págs. 31-36)",
        "content": "A responsabilidade patrimonial extracontratual da Administração Pública funda-se no art. 37, § 6º da CF/88:\n\"As pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa.\"\n- Teoria do Risco Administrativo: adota a responsabilidade objetiva do Estado, exigindo apenas a prova da conduta estatal, do dano e do nexo de causalidade, dispensando a demonstração de culpa.\n- Excludentes do Nexo Causal: culpa exclusiva da vítima, caso fortuito/força maior absoluta e fato exclusivo de terceiro elidem a responsabilidade do Ente público.\n- Responsabilidade por Omissão Estatal: a jurisprudência dominante aplica a teoria da responsabilidade subjetiva (faute du service - falta do serviço), exigindo a comprovação de que o Estado descumpriu o dever legal específico de agir para impedir o evento danoso.\n- Ação Regressiva do Estado: o STF fixou a tese do Tema 940 de que a vítima do dano deve propor a ação indenizatória diretamente contra a pessoa jurídica de direito público, sendo vedado o ajuizamento direto em face do servidor ou a inclusão deste no polo passivo em litisconsórcio.",
        "keyStatutes": [
          "Art. 37, § 6º da CF/88",
          "Tema 940 de Repercussão Geral do STF"
        ],
        "summaryPoints": [
          "Responsabilidade objetiva do Estado fundada na Teoria do Risco Administrativo.",
          "Responsabilidade por omissão estatal genérica exige demonstração de culpa (falta do serviço).",
          "Tema 940 do STF veda o ajuizamento da ação indenizatória diretamente contra o agente público causador."
        ]
      },
      {
        "title": "Módulo 7: Nova Lei de Improbidade Administrativa (Lei 14.230/21) (Págs. 37-42)",
        "content": "A Lei Federal nº 14.230/2021 promoveu profunda reformulação na Lei de Improbidade (Lei 8.429/92):\n- Exigência Obrigatória de Dolo Específico: foi totalmente expurgada a modalidade culposa da improbidade administrativa. O art. 1º, § 2º exige dolo consistente na vontade livre e consciente de alcançar o resultado ilícito tipificado nos arts. 9º, 10 e 11, não bastando a voluntariedade do agente ou o mero erro inescusável.\nEspécies de Atos de Improbidade:\n1. Enriquecimento Ilícito (art. 9º): auferir vantagem patrimonial indevida em razão do cargo. Suspensão dos direitos políticos de até 14 anos;\n2. Prejuízo ao Erário (art. 10): perda patrimonial efetiva e comprovada dos cofres públicos. Suspensão de direitos políticos de até 12 anos;\n3. Violação aos Princípios da Administração Pública (art. 11): o rol do art. 11 passou a ser estritamente taxativo. Não enseja mais sanção de suspensão de direitos políticos nem perda da função pública (apenas multa de até 24 vezes o subsídio e proibição de contratar).\n- Prescrição (art. 23): prazo unificado de 8 (oito) anos contados da data da ocorrência do fato ou da cessação da permanência.",
        "keyStatutes": [
          "Lei nº 8.429/1992 com redação da Lei nº 14.230/2021"
        ],
        "summaryPoints": [
          "Exigência indeclinável de dolo específico; fim total da improbidade culposa.",
          "Rol do art. 11 (violação a princípios) passou a ser taxativo.",
          "Prazo prescricional unificado de 8 anos a contar do fato ilícito."
        ]
      },
      {
        "title": "Módulo 8: Poderes da Administração Pública e Poder de Polícia (Págs. 43-46)",
        "content": "Os poderes administrativos constituem poderes-deveres instrumentais conferidos ao gestor público:\n1. Poder Vinculado e Poder Discricionário: o vinculado não confere margem de opção; o discricionário autoriza juízo de oportunidade e conveniência (mérito administrativo) nos estritos limites da lei. O controle judicial sobre o ato discricionário incide na legalidade, moralidade e proporcionalidade, sendo vedada a substituição do mérito administrativo pelo Judiciário.\n2. Poder Hierárquico: faculdade de escalonar, ordenar, fiscalizar, delegar e avocar competências na estrutura interna.\n3. Poder Disciplinar: sancionar faltas funcionais cometidas por servidores ou particulares vinculados a um liame jurídico específico (ex.: concessionária de serviços).\n4. Poder Regulamentar: edição de decretos e regulamentos para a fiel execução da lei (art. 84, IV da CF).\n5. Poder de Polícia (art. 78 do CTN): atividade estatal que condiciona ou restringe o uso de bens, direitos e o exercício de atividades privadas em prol do bem-estar coletivo. Atributos: Discricionariedade, Autoexecutoriedade e Coercibilidade.",
        "keyStatutes": [
          "Art. 78 do CTN",
          "Art. 84, IV e VI da CF/88"
        ],
        "summaryPoints": [
          "Judiciário controla a legalidade e razoabilidade do ato discricionário, não substituindo o mérito.",
          "Poder disciplinar exige vínculo funcional ou negocial especial com o Estado.",
          "Poder de polícia condiciona direitos individuais em favor da segurança e saúde pública."
        ]
      },
      {
        "title": "Módulo 9: Serviços Públicos: Concessão, Permissão e Autorização (Págs. 47-49)",
        "content": "O art. 175 da CF e a Lei nº 8.987/95 regem a prestação de serviços públicos por delegação a entes privados:\n- Concessão de Serviço Público: delegação formalizada mediante contrato administrativo precedido de obrigatória licitação na modalidade concorrência ou diálogo competitivo à pessoa jurídica ou consórcio de empresas.\n- Permissão de Serviço Público: delegação a título precário celebrada mediante contrato de adesão precedido de licitação.\n- Autorização de Serviço Público: ato administrativo unilateral, discricionário e precário para atender situações transitórias de interesse predominante do particular.\nFormas de Extinção da Concessão (art. 35 da Lei 8.987/95):\n1. Advento do termo contratual (reversão ordinária);\n2. Encampação: retomada do serviço pelo poder concedente durante o prazo da concessão, por motivo de interesse público, mediante lei autorizativa específica e prévia indenização;\n3. Caducidade: decretada pelo poder concedente em razão da inexecução total ou parcial do contrato pelo concessionário por falta grave;\n4. Rescisão: proposta em ação judicial pelo concessionário diante do inadimplemento da Administração Pública.",
        "keyStatutes": [
          "Art. 175 da CF/88",
          "Lei nº 8.987/1995, arts. 35 a 39"
        ],
        "summaryPoints": [
          "Concessão exige licitação prévia e formalização por contrato administrativo.",
          "Encampação = Razões de interesse público + Lei específica + Prévia indenização.",
          "Caducidade = Inadimplemento contratual grave imputado ao concessionário."
        ]
      },
      {
        "title": "Módulo 10: Intervenção do Estado na Propriedade e Desapropriação (Págs. 50-52)",
        "content": "A intervenção estatal na propriedade privada opera-se de modo restritivo (servidão administrativa, requisição administrativa, tombamento e ocupação temporária) ou supressivo (desapropriação).\nDesapropriação Comum (art. 5º, XXIV da CF e Decreto-Lei 3.365/41):\n- Fundamentos: necessidade pública, utilidade pública ou interesse social.\n- Indenização: prévia, justa e em dinheiro.\nDesapropriação Sancionatória Urbana (art. 182, § 4º da CF): sobre solo urbano não edificado, subutilizado ou não utilizado em desacordo com o Plano Diretor. Pagamento mediante títulos da dívida pública resgatáveis em até 10 anos.\nDesapropriação Sancionatória Rural (art. 184 da CF): para fins de reforma agrária sobre imóvel rural que não cumpra sua função social. Indenização em títulos da dívida agrária (TDA) resgatáveis em até 20 anos, pagando-se as benfeitorias úteis e necessárias em dinheiro.\nDesapropriação Confiscatória (art. 243 da CF): expropriação imediata de terras onde forem localizadas culturas ilegais de plantas psicotrópicas ou trabalho em condições análogas à de escravo, sem qualquer indenização ao proprietário.",
        "keyStatutes": [
          "Art. 5º, XXIV, 182, 184 e 243 da CF/88",
          "Decreto-Lei nº 3.365/1941"
        ],
        "summaryPoints": [
          "Desapropriação comum exige indenização prévia, justa e em dinheiro vivo.",
          "Desapropriação urbana por descumprimento do plano diretor indeniza em títulos em até 10 anos.",
          "Desapropriação confiscatória (drogas e trabalho escravo) é feita sem nenhuma indenização."
        ]
      }
    ]
  },
  {
    "id": "manual-ext-trib-50p",
    "title": "Compêndio Extensivo de Direito Tributário e Sistema Tributário Nacional",
    "disciplineId": "tributario",
    "author": "Prof. Dr. Alexandre Nogueira & Dra. Vanessa Castilho",
    "estimatedReadTime": "50 páginas didáticas · 3h45 de estudo aprofundado",
    "pageCount": 50,
    "isExtensiveManual": true,
    "edition": "Manual Completo 2026/2027 · Edição Definitiva",
    "description": "Manual de 50 páginas sobre o Sistema Tributário Constitucional, princípios e limitações ao poder de tributar, imunidades tributárias, espécies de tributos, obrigação tributária, decadência, prescrição, suspensão, extinção do crédito e execução fiscal.",
    "chapters": [
      {
        "title": "Módulo 1: Conceito de Tributo e Espécies Tributárias (Págs. 1-5)",
        "content": "O art. 3º do Código Tributário Nacional (CTN) conceitua tributo:\n\"Tributo é toda prestação pecuniária compulsória, em moeda ou cujo valor nela se possa exprimir, que não constitua sanção de ato ilícito, instituída em lei e cobrada mediante atividade administrativa plenamente vinculada.\"\nA teoria pentapartida (adotada pelo STF no RE 146.733) classifica as espécies tributárias em cinco categorias autônomas:\n1. Impostos (art. 16 do CTN): tributos não vinculados a uma atividade estatal específica dirigida ao contribuinte;\n2. Taxas (art. 77 do CTN): tributos vinculados, cobrados em razão do exercício regular do poder de polícia ou pela utilização, efetiva ou potencial, de serviço público específico e divisível prestado ao contribuinte ou posto à sua disposição;\n3. Contribuições de Melhoria (art. 81 do CTN): cobradas pela União, Estados e Municípios para fazer face ao custo de obras públicas de que decorra valorização imobiliária;\n4. Empréstimos Compulsórios (art. 148 da CF): de competência privativa da União, instituídos por lei complementar para atender a despesas extraordinárias (guerra externa, calamidade pública) ou investimento público urgente e de relevante interesse nacional;\n5. Contribuições Especiais (art. 149 da CF): contribuições sociais, de intervenção no domínio econômico (CIDE) e de interesse de categorias profissionais ou econômicas.",
        "keyStatutes": [
          "Art. 3º do CTN",
          "Arts. 145, 148 e 149 da CF/88",
          "RE 146.733 do STF"
        ],
        "summaryPoints": [
          "Tributo não constitui sanção por ato ilícito (diferencia-se da multa).",
          "Teoria pentapartida do STF: impostos, taxas, contribuições de melhoria, empréstimos compulsórios e contribuições especiais.",
          "Taxa exige serviço público específico e divisível (uti singuli)."
        ]
      },
      {
        "title": "Módulo 2: Princípios Constitucionais Tributários e Não Surpresa (Págs. 6-11)",
        "content": "Limitações Constitucionais ao Poder de Tributar (art. 150 da CF/88):\n1. Princípio da Legalidade Tributária (art. 150, I): é vedado exigir ou aumentar tributo sem lei que o estabeleça. Exceções da alteração de alíquotas por ato do Executivo: II, IE, IPI e IOF (art. 153, § 1º) e CIDE-Combustíveis.\n2. Princípio da Anterioridade Anual (art. 150, III, \"b\"): veda a cobrança de tributos no mesmo exercício financeiro em que haja sido publicada a lei que os instituiu ou aumentou.\n3. Princípio da Anterioridade Nonagesimal (Noventena - art. 150, III, \"c\"): veda cobrar tributo antes de decorridos 90 dias da data de publicação da lei.\nRegra geral: a maioria dos tributos sujeita-se a ambas as anterioridades cumulativamente (espera o ano seguinte e o transcurso de 90 dias).\nExceções cruciais para a OAB:\n- Não esperam nenhuma anterioridade (cobrança imediata): II, IE, IOF e Impostos Extraordinários de Guerra (IEG).\n- Esperam apenas a noventena (não esperam o ano seguinte): IPI, CIDE-Combustíveis e Contribuições para a Seguridade Social (art. 195, § 6º).\n- Esperam apenas o ano seguinte (não esperam 90 dias): IR e fixação de base de cálculo de IPTU e IPVA.",
        "keyStatutes": [
          "Art. 150, I e III da CF/88",
          "Art. 153, § 1º da CF/88",
          "Art. 195, § 6º da CF/88"
        ],
        "summaryPoints": [
          "Legalidade: alíquotas de II, IE, IPI e IOF podem ser alteradas por decreto do Executivo.",
          "Impostos extrafiscais (II, IE, IOF, Guerra) cobram-se de imediato sem anterioridade.",
          "IPI e contribuições sociais esperam 90 dias, mas não esperam o ano seguinte."
        ]
      },
      {
        "title": "Módulo 3: Imunidades Tributárias Constitucionais (Págs. 12-17)",
        "content": "A imunidade é uma hipótese constitucional de não incidência absoluta, retirando a competência do Ente para tributar (art. 150, VI da CF/88). Aplica-se exclusivamente a IMPOSTOS:\n1. Imunidade Recíproca (alínea \"a\"): veda a instituição de impostos sobre patrimônio, renda ou serviços uns dos outros (União, Estados, DF e Municípios). Estende-se às autarquias e fundações públicas vinculadas às suas finalidades essenciais (§ 2º), bem como a empresas estatais prestadoras de serviços públicos exclusivos em regime não concorrencial (ex.: Correios - RE 601.392). Não se aplica a imóveis públicos cedidos a particulares com finalidade de exploração econômica (Súmula Vinculante 52 do STF).\n2. Imunidade Religiosa (alínea \"b\"): templos de qualquer culto, abrangendo dependências anexas, residência pastoral e cemitérios mantidos pela entidade sem fins lucrativos.\n3. Imunidade dos Partidos Políticos, Sindicatos de Trabalhadores e Entidades Educacionais e Assistenciais sem Fins Lucrativos (alínea \"c\"): exige preenchimento dos requisitos do art. 14 do CTN (não distribuir lucros, aplicar recursos no país e manter contabilidade regular).\n4. Imunidade de Livros, Jornais, Periódicos e o Papel Destinado a sua Impressão (alínea \"d\"): Súmula Vinculante 57 do STF: a imunidade tributária estende-se aos leitores de livros eletrônicos (e-readers) e ao livro digital.",
        "keyStatutes": [
          "Art. 150, VI da CF/88",
          "Súmula Vinculante 52 e 57 do STF",
          "RE 601.392 do STF"
        ],
        "summaryPoints": [
          "Imunidades alcançam exclusivamente IMPOSTOS (não alcançam taxas ou contribuições).",
          "Súmula Vinculante 57 estende a imunidade de livros a e-books e leitores digitais.",
          "Imunidade recíproca alcança estatais que prestem serviços públicos essenciais não concorrenciais."
        ]
      },
      {
        "title": "Módulo 4: Obrigação Tributária e Responsabilidade dos Sócios (Págs. 18-24)",
        "content": "A obrigação tributária divide-se em:\n- Obrigação Principal (art. 113, § 1º do CTN): surge com a ocorrência do fato gerador e tem por objeto o pagamento de tributo ou penalidade pecuniária.\n- Obrigação Acessória (§ 2º): deveres instrumentais de fazer ou não fazer no interesse da arrecadação ou fiscalização (ex.: emitir nota fiscal, prestar declarações). O descumprimento de obrigação acessória converte-se em obrigação principal relativamente à penalidade pecuniária (§ 3º).\nResponsabilidade Tributária de Terceiros e Sócios-Administradores (art. 135 do CTN):\nOs diretores, gerentes ou representantes de pessoas jurídicas de direito privado são pessoalmente responsáveis pelos créditos correspondentes a obrigações tributárias resultantes de atos praticados com excesso de poderes ou infração de lei, contrato social ou estatutos.\nSúmula 430 do STJ: o simples inadimplemento da obrigação tributária pela sociedade não gera, por si só, a responsabilidade pessoal do sócio-administrador!\nSúmula 435 do STJ: presume-se dissolvida irregularmente a empresa que deixar de funcionar no seu domicílio fiscal sem comunicação aos órgãos competentes, legitimando o redirecionamento da execução fiscal para o sócio-gerente.",
        "keyStatutes": [
          "Arts. 113 e 135 do CTN",
          "Súmulas 430 e 435 do STJ"
        ],
        "summaryPoints": [
          "Descumprimento de obrigação acessória converte-se em obrigação principal quanto à multa.",
          "Súmula 430 STJ: mero não pagamento de imposto não autoriza responsabilizar o sócio.",
          "Súmula 435 STJ: dissolução irregular sem baixa autoriza redirecionamento contra o administrador."
        ]
      },
      {
        "title": "Módulo 5: Crédito Tributário: Lançamento e Espécies (Págs. 25-29)",
        "content": "O crédito tributário decorre da obrigação principal e é regularmente constituído pelo Lançamento (art. 142 do CTN), privativo da autoridade administrativa.\nModalidades de Lançamento:\n1. Lançamento Direto (ou de Ofício - art. 149): o Fisco dispõe de todos os dados e efetua a apuração e notificação independentemente de colaboração do sujeito passivo (ex.: IPTU, IPVA e taxas);\n2. Lançamento por Declaração (ou Misto - art. 147): efetuado com base na declaração de fatos prestada pelo contribuinte ou por terceiro (ex.: ITCMD, ITBI);\n3. Lançamento por Homologação (ou Autolançamento - art. 150): o contribuinte tem o dever legal de antecipar o pagamento do tributo sem prévio exame do Fisco, cabendo à autoridade fiscal homologar expressa ou tacitamente a operação em 5 anos (ex.: IR, ICMS, IPI, PIS, COFINS, ISS).",
        "keyStatutes": [
          "Arts. 142, 147, 149 e 150 do CTN"
        ],
        "summaryPoints": [
          "IPTU e IPVA são tributos de lançamento de ofício.",
          "ICMS e Imposto de Renda são lançados por homologação.",
          "Lançamento por homologação decai tacitamente em 5 anos contados do fato gerador."
        ]
      },
      {
        "title": "Módulo 6: Suspensão da Exigibilidade do Crédito Tributário (Págs. 30-34)",
        "content": "O art. 151 do CTN contempla o rol taxativo das causas que suspendem a cobrança do crédito tributário (impede a propositura de execução fiscal e autoriza a expedição de certidão positiva com efeitos de negativa - CPD-EN, art. 206):\nCausas do Art. 151 (Mnemônico: MODEPACO + Liminares):\nI - Moratória (prorrogação do prazo concedida por lei);\nII - Depósito do seu montante integral e em dinheiro (Súmula 112 do STJ: o depósito somente suspende a exigibilidade se for integral e em dinheiro);\nIII - Reclamações e recursos nos termos das leis reguladoras do processo tributário administrativo;\nIV - Concessão de medida liminar em mandado de segurança;\nV - Concessão de medida liminar ou de tutela antecipada em outras espécies de ação judicial;\nVI - Parcelamento (concedido na forma da lei). O parcelamento não exclui a incidência de juros e multas (art. 155-A).",
        "keyStatutes": [
          "Art. 151 do CTN",
          "Art. 206 do CTN",
          "Súmula 112 do STJ"
        ],
        "summaryPoints": [
          "Rol do art. 151 é taxativo.",
          "Súmula 112 STJ: depósito judicial deve ser integral e em dinheiro para suspender exigibilidade.",
          "Suspensão garante ao contribuinte a Certidão Positiva com Efeitos de Negativa."
        ]
      },
      {
        "title": "Módulo 7: Extinção do Crédito Tributário: Decadência e Prescrição (Págs. 35-40)",
        "content": "Causas Extintivas do Crédito (art. 156 do CTN): pagamento, compensação, transação, remissão, conversão do depósito em renda, pagamento antecipado homologado, decisão administrativa definitiva, decisão judicial transitada em julgado e decadência / prescrição.\nDiferença Crucial entre Decadência e Prescrição no Direito Tributário:\n- Decadência (art. 173 do CTN): perda do direito do Fisco de constituir o crédito tributário mediante o lançamento. Prazo de 5 (cinco) anos contados do primeiro dia do exercício seguinte àquele em que o lançamento poderia ter sido efetuado (regra geral do art. 173, I). Nos tributos sujeitos a lançamento por homologação com pagamento antecipado parcial, o prazo de decadência é de 5 anos a contar da data da ocorrência do fato gerador (art. 150, § 4º).\n- Prescrição (art. 174 do CTN): perda do direito do Fisco de cobrar judicialmente o crédito já definitivamente constituído através de Execução Fiscal. Prazo de 5 (cinco) anos contados da data da sua constituição definitiva.\nCausas Interruptivas da Prescrição Tributária (art. 174, parágrafo único): despacho do juiz que ordenar a citação em execução fiscal; protesto judicial; ato judicial que constitua em mora o devedor; e reconhecimento inequívoco do débito pelo devedor (ex.: pedido de parcelamento).",
        "keyStatutes": [
          "Arts. 150, § 4º, 156, V, 173 e 174 do CTN"
        ],
        "summaryPoints": [
          "Decadência extingue o poder de lançar; prescrição extingue a ação de cobrança judicial.",
          "Prazo de decadência e prescrição tributária é sempre de 5 anos.",
          "Despacho judicial que ordena a citação na execução fiscal interrompe a prescrição."
        ]
      },
      {
        "title": "Módulo 8: Exclusão do Crédito Tributário: Isenção vs Anistia (Págs. 41-44)",
        "content": "O art. 175 do CTN estabelece apenas duas causas de exclusão do crédito tributário:\n1. Isenção (inciso I): dispensa legal do pagamento do tributo. Decorre sempre de lei específica e atinge fatos geradores futuros ou concomitantes à edição da lei. A isenção não é extensiva às taxas e contribuições de melhoria salvo disposição expressa em contrário (art. 177). A isenção não dispensa o cumprimento das obrigações acessórias (art. 175, parágrafo único).\n2. Anistia (inciso II): perdão legal da penalidade pecuniária (multa tributária). Abrange exclusivamente as infrações cometidas anteriormente à vigência da lei que a concede (art. 180). A anistia não se aplica a atos praticados com dolo, fraude ou simulação, nem a atos de conluio.",
        "keyStatutes": [
          "Arts. 175, 176, 177 e 180 do Código Tributário Nacional"
        ],
        "summaryPoints": [
          "Exclusão do crédito atinge apenas isenção e anistia.",
          "Isenção recai sobre o tributo; Anistia recai sobre a multa por infração pretérita.",
          "Isenção não dispensa o cumprimento das obrigações acessórias do contribuinte."
        ]
      },
      {
        "title": "Módulo 9: Execução Fiscal e Exceção de Pré-Executividade (Págs. 45-48)",
        "content": "A cobrança da Dívida Ativa da Fazenda Pública rege-se pela Lei nº 6.830/80 (LEF):\n- Certidão de Dívida Ativa (CDA): título executivo extrajudicial dotado de presunção de certeza e liquidez, que só pode ser ilidida por prova inequívoca a cargo do executado (art. 3º).\n- Citação: o executado é citado para, no prazo de 5 (cinco) dias, pagar a dívida com juros ou garantir a execução (art. 8º).\n- Embargos à Execução Fiscal (art. 16): têm prazo de 30 (trinta) dias contados da intimação da penhora, depósito ou juntada da fiança bancária. Exigem prévia e integral garantia do juízo (§ 1º).\n- Exceção de Pré-Executividade (Súmula 393 do STJ): é admissível na execução fiscal relativamente às matérias conhecíveis de ofício que não demandem dilação probatória (ex.: prescrição, decadência evidente, vício formal insanável na CDA ou ilegitimidade passiva manifesta). Dispensa qualquer penhora ou garantia prévia do juízo!",
        "keyStatutes": [
          "Lei nº 6.830/1980, arts. 3º, 8º e 16",
          "Súmula 393 do STJ"
        ],
        "summaryPoints": [
          "Execução fiscal concede 5 dias para pagamento ou garantia da dívida.",
          "Embargos à execução fiscal exigem garantia integral do juízo e prazo de 30 dias.",
          "Súmula 393 STJ: Exceção de Pré-Executividade independe de penhora para matéria de ordem pública sem dilação probatória."
        ]
      },
      {
        "title": "Módulo 10: Repetição de Indébito Tributário e Compensação (Págs. 49-50)",
        "content": "A repetição do indébito (art. 165 do CTN) assegura a restituição total ou parcial de tributo pago indevidamente ou a maior.\n- Prazo Prescricional (art. 168): o direito de pleitear a restituição extingue-se com o decurso do prazo de 5 (cinco) anos contados da data do pagamento indevido (tese dos \"cinco anos\" pacificada pelo STF no RE 566.621).\n- Tributos Indiretos (art. 166 do CTN): a restituição de tributos que comportem, por sua natureza, transferência do encargo financeiro (ex.: ICMS e IPI) somente será feita a quem prove haver assumido o referido encargo, ou, no caso de tê-lo transferido a terceiro, estar por este expressamente autorizado a recebê-la.\n- Juros de Mora na Restituição: incide a Taxa SELIC a partir do pagamento indevido, vedada a sua cumulação com qualquer outro índice de correção monetária (Súmula 523 do STF e jurisprudência pacificada do STJ).",
        "keyStatutes": [
          "Arts. 165, 166 e 168 do CTN",
          "Súmula 523 do STF",
          "RE 566.621 do STF"
        ],
        "summaryPoints": [
          "Ação de repetição de indébito prescreve em 5 anos do pagamento indevido.",
          "Tributo indireto (ICMS/IPI) exige prova de não repasse ao consumidor ou autorização expressa.",
          "Incidência da taxa SELIC sobre a restituição tributária."
        ]
      }
    ]
  },
  {
    "id": "manual-ext-transversais-50p",
    "title": "Tratado Integrado de Disciplinas Transversais e Direitos Humanos",
    "disciplineId": "direitos-humanos",
    "author": "Dra. Carolina Freitas & Prof. Thiago Meirelles",
    "estimatedReadTime": "58 páginas didáticas · 4h15 de estudo aprofundado",
    "pageCount": 58,
    "isExtensiveManual": true,
    "edition": "Manual Completo 2026/2027 · Edição Definitiva",
    "description": "Manual integrado de 58 páginas reunindo com alta densidade analítica as matérias estratégicas da 1ª Fase: Direitos Humanos, Direito Ambiental, Direito do Consumidor, ECA, Filosofia do Direito, Direito Previdenciário e Direito Eleitoral.",
    "chapters": [
      {
        "title": "Módulo 1: Teoria Geral dos Direitos Humanos e Gerações/Dimensões (Págs. 1-6)",
        "content": "Os Direitos Humanos caracterizam-se pela universalidade, indivisibilidade, inalienabilidade, imprescritibilidade, irrenunciabilidade e vedação ao retrocesso (efeito cliquet).\nGerações / Dimensões dos Direitos Humanos (Karel Vasak e Norberto Bobbio):\n- 1ª Dimensão (Liberdade): direitos civis e políticos. Inspirados nas revoluções burguesas liberais, impõem ao Estado um dever de abstenção (obrigações de não fazer). Ex.: vida, liberdade, propriedade, igualdade formal perante a lei e voto.\n- 2ª Dimensão (Igualdade): direitos sociais, econômicos e culturais. Fruto da revolução industrial e do Estado Social de Direito, exigem prestações positivas estatais (obrigações de fazer). Ex.: trabalho, saúde, educação, previdência social e moradia.\n- 3ª Dimensão (Fraternidade / Solidariedade): direitos transindividuais, de titularidade difusa e coletiva. Protegem o gênero humano. Ex.: meio ambiente ecologicamente equilibrado, paz mundial, progresso e autodeterminação dos povos.\n- 4ª Dimensão (Democracia e Informação): direitos decorrentes da globalização política, engenharia genética e biodireito.\nPrincípio do Pro Homine: em caso de conflito interpretativo entre normas de direitos humanos, o aplicador deve sempre escolher a norma que melhor e mais amplamente proteja a pessoa humana, independentemente de sua posição formal na pirâmide hierárquica.",
        "keyStatutes": [
          "Declaração Universal dos Direitos Humanos (1948)",
          "Art. 5º da CF/88"
        ],
        "summaryPoints": [
          "Gerações: 1ª (Liberdade/Abstenção), 2ª (Igualdade/Prestação positiva), 3ª (Solidariedade/Meio ambiente).",
          "Vedação ao retrocesso proíbe desmantelamento de garantias sociais já conquistadas.",
          "Princípio Pro Homine orienta a aplicação da norma mais benéfica à dignidade da pessoa humana."
        ]
      },
      {
        "title": "Módulo 2: O Sistema Interamericano e o Pacto de San José da Costa Rica (Págs. 7-12)",
        "content": "A Convenção Americana sobre Direitos Humanos (CADH - Pacto de San José de 1969) foi ratificada pelo Brasil em 1992.\nHierarquia no Brasil (RE 466.343 do STF):\n- Tratados de Direitos Humanos aprovados pelo rito ordinário possuem status supralegal (estão situados acima da legislação ordinária infraconstitucional e abaixo da Constituição). Efeito paralisante sobre normas contrárias.\n- Tratados aprovados pelo rito do art. 5º, § 3º da CF (quórum de emenda constitucional de 3/5 em 2 turnos nas duas Casas) equivalem formalmente a Emendas Constitucionais.\nSúmula Vinculante 25 do STF: \"É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito.\"\nÓrgãos do Sistema Interamericano:\n1. Comissão Interamericana de Direitos Humanos (CIDH - Washington): órgão quase-judicial com atribuição de receber petições de indivíduos, grupos ou ONGs, emitir recomendações e exercer o juízo de admissibilidade;\n2. Corte Interamericana de Direitos Humanos (Corte IDH - San José da Costa Rica): tribunal jurisdicional internacional. Indivíduos não têm legitimidade processual direta perante a Corte IDH (apenas a Comissão ou os Estados-partes podem submeter casos à Corte). Suas decisões condenatórias são definitivas, inapeláveis e de cumprimento compulsório pelo Estado brasileiro.",
        "keyStatutes": [
          "CADH (Decreto nº 678/92)",
          "Súmula Vinculante 25 do STF",
          "RE 466.343 do STF"
        ],
        "summaryPoints": [
          "Tratados de DH comuns possuem status supralegal e paralisam leis contrárias.",
          "Vedada prisão de depositário infiel no Brasil por força da CADH e Súmula Vinculante 25.",
          "Indivíduos acessam a Comissão em Washington, que pode remeter a denúncia à Corte em San José."
        ]
      },
      {
        "title": "Módulo 3: Controle de Convencionalidade no Direito Brasileiro (Págs. 13-17)",
        "content": "O controle de convencionalidade é a análise de compatibilidade das leis e atos normativos internos com os tratados internacionais de direitos humanos ratificados pelo país.\nDiretrizes Fixadas pela Corte IDH (Caso Almonacid Arellano e Gomes Lund - Guerrilha do Araguaia):\n- Obrigação de Ofício: o Poder Judiciário deve exercer o controle de convencionalidade ex officio, independentemente de requerimento expresso das partes litigantes;\n- Invalidação da Lei de Anistia para Crimes Contra a Humanidade: a Corte IDH condenou o Brasil no Caso Gomes Lund e no Caso Herzog, declarando que leis de autoanistia que impeçam a investigação e punição de graves violações a direitos humanos e crimes contra a humanidade são desprovidas de efeitos jurídicos perante o direito internacional;\n- Incidente de Deslocamento de Competência (IDC - art. 109, § 5º da CF/88): nas hipóteses de grave violação de direitos humanos, o Procurador-Geral da República, com a finalidade de assegurar o cumprimento de obrigações decorrentes de tratados internacionais, poderá suscitar perante o Superior Tribunal de Justiça o deslocamento da competência da Justiça Estadual para a Justiça Federal.",
        "keyStatutes": [
          "Art. 109, § 5º da CF/88",
          "Casos Gomes Lund e Vladimir Herzog na Corte IDH"
        ],
        "summaryPoints": [
          "Controle de convencionalidade deve ser realizado de ofício por todos os juízes brasileiros.",
          "Corte IDH declarou ineficaz anistia que blinde graves violações a direitos humanos.",
          "Federalização de crimes de direitos humanos (IDC) é suscitada privativamente pelo PGR perante o STJ."
        ]
      },
      {
        "title": "Módulo 4: Direito Ambiental: Princípios e Responsabilidade Tripla (Págs. 18-24)",
        "content": "O art. 225 da CF/88 consagra o meio ambiente ecologicamente equilibrado como direito fundamental de terceira geração.\nPrincípios Cardeais:\n- Princípio da Precaução: incide quando houver incerteza científica sobre a gravidade ou irreversibilidade do dano ambiental. Impõe a inversão do ônus da prova e a abstenção da atividade potencialmente perigosa até a comprovação cabal de sua inocuidade.\n- Princípio da Prevenção: aplicável quando os riscos ambientais já são cientificamente conhecidos e certos, impondo a adoção de medidas mitigatórias e preventivas prévias (ex.: EIA/RIMA).\n- Princípio do Poluidor-Pagador: impõe ao poluidor a obrigação de recuperar ou indenizar os danos causados e arcar com os custos da prevenção.\nTríplice Responsabilidade Ecológica (art. 225, § 3º da CF): as condutas e atividades consideradas lesivas ao meio ambiente sujeitarão os infratores, pessoas físicas ou jurídicas, a sanções penais e administrativas, independentemente da obrigação de reparar os danos civis.\n- Responsabilidade Civil Objetiva Integral: na esfera civil, a responsabilidade ambiental independe de culpa e adota a teoria do risco integral (não se admitem excludentes de caso fortuito ou fato de terceiro). A obrigação de restaurar é propter rem, alcançando solidariamente o proprietário atual do imóvel mesmo por degradação cometida pelo dono anterior (Súmula 623 do STJ).",
        "keyStatutes": [
          "Art. 225 da CF/88",
          "Súmula 623 do STJ",
          "Lei nº 6.938/1981",
          "Lei nº 9.605/1998"
        ],
        "summaryPoints": [
          "Precaução opera na incerteza científica; Prevenção opera sobre riscos conhecidos.",
          "Responsabilidade civil ambiental é objetiva pelo risco integral (não admite caso fortuito).",
          "Súmula 623 STJ: dever de reparação ambiental é obrigação propter rem do adquirente."
        ]
      },
      {
        "title": "Módulo 5: Direito do Consumidor: Teoria do Vício e Fato do Produto (Págs. 25-30)",
        "content": "O Código de Defesa do Consumidor (Lei 8.078/90) estabelece a espinha dorsal protetiva das relações de consumo.\nDistinção Vital entre Fato e Vício:\n1. Fato do Produto ou do Serviço (Acidente de Consumo - arts. 12 a 14): quando o defeito de segurança extrapola o produto e causa danos à integridade física, psíquica ou patrimonial do consumidor.\n- Responsabilidade do Fabricante, Produtor e Importador: objetiva e direta.\n- Responsabilidade do Comerciante (art. 13): é apenas SUBSIDIÁRIA, respondendo somente se o fabricante não puder ser identificado, o produto for fornecido sem identificação clara ou o comerciante não conservar adequadamente produtos perecíveis.\n- Prazo Prescricional (art. 27): 5 (cinco) anos a contar do conhecimento do dano e de sua autoria.\n2. Vício do Produto ou do Serviço (arts. 18 a 20): falha estrita de qualidade ou quantidade que torna o produto impróprio ao uso ou diminui seu valor, sem causar dano físico exterior.\n- Responsabilidade: solidária entre todos os integrantes da cadeia de fornecimento (inclusive o comerciante!).\n- Prazo Decadencial (art. 26): 30 (trinta) dias para produtos e serviços não duráveis; 90 (noventa) dias para produtos e serviços duráveis. O prazo para vício oculto inicia-se no momento em que ficar evidenciado o defeito.",
        "keyStatutes": [
          "Arts. 12, 13, 14, 18, 26 e 27 do CDC"
        ],
        "summaryPoints": [
          "Fato (Acidente de consumo) = Prescrição de 5 anos; Comerciante responde apenas subsidiariamente.",
          "Vício (defeito intrínseco) = Decadência de 30d (não durável) e 90d (durável); Comerciante responde solidariamente.",
          "Vício oculto tem prazo decadencial contado a partir da descoberta do problema."
        ]
      },
      {
        "title": "Módulo 6: Proteção Contratual e Arrependimento no CDC (Págs. 31-35)",
        "content": "Práticas Abusivas e Regras Contratuais:\n- Direito de Arrependimento (art. 49 do CDC): o consumidor pode desistir do contrato, no prazo de 7 (sete) dias a contar de sua assinatura ou do ato de recebimento do produto ou serviço, sempre que a contratação ocorrer fora do estabelecimento comercial (por telefone, internet ou catálogo). Os valores eventualmente pagos a qualquer título durante o prazo de reflexão serão devolvidos de imediato e monetariamente atualizados, inclusive as despesas com frete.\n- Cláusulas Abusivas (art. 51): nulas de pleno direito as cláusulas que subtraiam ao consumidor a opção de reembolso de quantia já paga, estabeleçam inversão do ônus da prova em prejuízo do consumidor ou imponham representante para concluir outro negócio.\n- Desconsideração da Personalidade Jurídica no CDC (art. 28, § 5º - Teoria Menor): o juiz poderá desconsiderar a personalidade sempre que sua personalidade for, de alguma forma, obstáculo ao ressarcimento de prejuízos causados aos consumidores, dispensando a prova de desvio de finalidade ou confusão patrimonial (diferenciando-se da Teoria Maior do art. 50 do Código Civil).",
        "keyStatutes": [
          "Arts. 28, § 5º, 49 e 51 do CDC"
        ],
        "summaryPoints": [
          "Direito de arrependimento de 7 dias com devolução integral e frete em compras online.",
          "CDC adota a Teoria Menor da desconsideração (basta a insolvência frustrar a execução).",
          "Cláusulas abusivas são nulas de pleno direito e insanáveis."
        ]
      },
      {
        "title": "Módulo 7: Estatuto da Criança e do Adolescente (ECA): Ato Infracional e Adoção (Págs. 36-41)",
        "content": "O Estatuto da Criança e do Adolescente (Lei 8.069/90) adota a Doutrina da Proteção Integral:\n- Conceitos Etários: criança é a pessoa de até 12 anos incompletos; adolescente é aquela entre 12 e 18 anos de idade.\n- Ato Infracional (art. 103): conduta descrita como crime ou contravenção penal praticada por criança ou adolescente.\na) Criança: submete-se exclusivamente a Medidas Protetivas (art. 101 - acolhimento institucional, requisição de tratamento, inclusão em programa de auxílio);\nb) Adolescente: submete-se a Medidas Socioeducativas (art. 112 - advertência, obrigação de reparar o dano, prestação de serviços à comunidade, liberdade assistida, semiliberdade e internação).\n- Medida de Internação (art. 121 e 122): medida privativa de liberdade de caráter excepcional e breve. Não comporta prazo determinado (máximo improrrogável de 3 anos, reavaliada semestralmente). Cabimento taxativo:\nI - ato infracional cometido com grave ameaça ou violência à pessoa;\nII - reiteração no cometimento de outras infrações graves;\nIII - descumprimento reiterado e injustificável de medida anteriormente imposta (limite máximo de 3 meses de internação-sanção).\n- Adoção (art. 39 a 52): medida irrevogável que confere condição definitiva de filho. O adotante deve ser maior de 18 anos e ter pelo menos 16 (dezesseis) anos de diferença etária em relação ao adotando. Não podem adotar conjuntamente os irmãos ou ascendentes do adotando.",
        "keyStatutes": [
          "Arts. 2º, 42, 101, 112, 121 e 122 do ECA"
        ],
        "summaryPoints": [
          "Criança só recebe medida de proteção; adolescente recebe medida socioeducativa.",
          "Internação é limitada ao teto de 3 anos e exige violência grave, reiteração ou desobediência.",
          "Adoção é irrevogável e veda adoção por avós ou irmãos do adotando."
        ]
      },
      {
        "title": "Módulo 8: Filosofia do Direito: Das Leis Naturais ao Pós-Positivismo (Págs. 42-47)",
        "content": "A evolução jusfilosófica e os grandes teóricos cobrados pela FGV:\n1. Jusnaturalismo: afirma a existência de um Direito Natural universal, imutável e superior às leis humanas positivas.\n2. Positivismo Jurídico de Hans Kelsen (Teoria Pura do Direito): opera a pureza metódica expurgando elementos sociológicos, políticos e morais da ciência do Direito. A norma é válida quando produzida conforme a norma superior, encontrando seu fundamento último de validade na Norma Fundamental Hipotética (Grundnorm).\n3. H.L.A. Hart (O Conceito de Direito): supera o modelo de comandos de John Austin, definindo o Direito como a união de regras primárias (que impõem obrigações) e regras secundárias (regras de reconhecimento, alteração e adjudicação).\n4. Ronald Dworkin (Levando os Direitos a Sério): rebate o positivismo de Hart sustentando que o direito é composto não apenas de regras aplicadas no modo do \"tudo ou nada\" (all-or-nothing), mas primordialmente de princípios dotados de dimensão de peso moral, defendendo a \"única resposta correta\" (one right answer) sob a integridade do direito.\n5. Robert Alexy (Teoria dos Direitos Fundamentais): conceitua os princípios como mandamentos de otimização, que devem ser realizados na maior medida possível diante das possibilidades jurídicas e fáticas, solucionando as colisões normativas mediante a técnica da Ponderação e a fórmula da proporcionalidade.",
        "keyStatutes": [
          "Teoria Pura do Direito (Kelsen)",
          "O Conceito de Direito (Hart)",
          "Levando os Direitos a Sério (Dworkin)",
          "Teoria dos Direitos Fundamentais (Alexy)"
        ],
        "summaryPoints": [
          "Kelsen: pureza metodológica e validade lastreada na Norma Fundamental Hipotética.",
          "Hart: Direito como união de regras primárias (deveres) e regras secundárias (reconhecimento).",
          "Alexy: princípios como mandamentos de otimização aplicados por ponderação de peso."
        ]
      },
      {
        "title": "Módulo 9: Direito Previdenciário: Benefícios e Reforma Previdenciária (Págs. 48-52)",
        "content": "Regime Geral de Previdência Social (RGPS - Lei 8.213/91) e Emenda Constitucional nº 103/2019:\n- Princípio da Solidariedade e Caráter Contributivo: a filiação é obrigatória para todos que exercem atividade remunerada.\n- Segurados Obrigatórios: empregado, empregado doméstico, trabalhador avulso, contribuinte individual (autônomo) e segurado especial (produtor rural em regime de economia familiar sem empregados permanentes, que contribui com alíquota sobre a venda da produção).\n- Segurado Facultativo: pessoa com mais de 16 anos que não exerce atividade remunerada (estudante, dona de casa) e escolhe filiar-se.\n- Aposentadoria Programada Pós-Reforma: extinção da aposentadoria por tempo de contribuição para novos segurados. Idade mínima urbana: 65 anos para homens e 62 anos para mulheres, com carência mínima de 15 anos de contribuição para mulheres e 20 anos para homens.\n- Pensão por Morte (art. 23 da EC 103/19): cota familiar de 50% do valor da aposentadoria que o segurado recebia ou teria direito se aposentado por incapacidade permanente, acrescida de cotas de 10% por dependente até o limite de 100%. A dependência do cônjuge e dos filhos menores de 21 anos é presumida por lei (art. 16 da Lei 8.213/91).",
        "keyStatutes": [
          "Lei nº 8.213/1991",
          "Emenda Constitucional nº 103/2019",
          "Arts. 194 e 201 da CF/88"
        ],
        "summaryPoints": [
          "Segurado especial rural contribui sobre a comercialização, sem valor fixo mensal.",
          "Idade mínima de aposentadoria: 65 anos (homem) e 62 anos (mulher).",
          "Pensão por morte tem cota base familiar de 50% mais 10% por dependente."
        ]
      },
      {
        "title": "Módulo 10: Direito Eleitoral: Elegibilidade, Ficha Limpa e Ações (Págs. 53-58)",
        "content": "Direitos Políticos e Regime Constitucional Eleitoral (art. 14 da CF/88):\n- Condições de Elegibilidade: nacionalidade brasileira; pleno exercício dos direitos políticos; alistamento eleitoral; domicílio eleitoral na circunscrição; filiação partidária; e idade mínima na data da posse:\na) 35 anos: Presidente, Vice-Presidente da República e Senador;\nb) 30 anos: Governador e Vice-Governador;\nc) 21 anos: Deputado Federal, Estadual ou Distrital, Prefeito, Vice-Prefeito e Juiz de Paz;\nd) 18 anos: Vereador (a idade mínima de 18 anos deve ser aferida no dia do registro da candidatura!).\n- Inelegibilidades Absolutas: inalistáveis e analfabetos (o analfabeto possui voto facultativo, mas é absolutamente inelegível para qualquer cargo!).\n- Inelegibilidade Reflexa (art. 14, § 7º da CF e Súmula Vinculante 18 do STF): são inelegíveis o cônjuge e os parentes consanguíneos até o segundo grau do Chefe do Executivo no território de sua jurisdição. A dissolução da união estável no curso do mandato não afasta a inelegibilidade reflexa.\n- Lei da Ficha Limpa (LC 135/10): condenações por órgão judicial colegiado em crimes dolosos contra a administração, a vida ou o patrimônio geram inelegibilidade desde a condenação até 8 (oito) anos após o cumprimento da pena.\nAções Eleitorais:\n1. AIJE (art. 22 da LC 64/90): apura uso indevido de poder econômico ou de autoridade antes da diplomação;\n2. AIME (art. 14, § 10 da CF): ajuizada no prazo decadencial de 15 dias após a diplomação, baseada em corrupção, fraude ou abuso do poder econômico, tramitando em segredo de justiça.",
        "keyStatutes": [
          "Art. 14 da CF/88",
          "LC nº 64/1990 com alterações da LC nº 135/2010",
          "Súmula Vinculante 18 do STF"
        ],
        "summaryPoints": [
          "Idades mínimas: 35 (Presidente/Senador), 30 (Governador), 21 (Deputado/Prefeito), 18 (Vereador).",
          "Analfabeto pode votar facultativamente, mas é absolutamente inelegível.",
          "AIME tem prazo decadencial de 15 dias da diplomação e tramita em segredo de justiça."
        ]
      }
    ]
  },
  {
    "id": "manual-ext-etica-50p",
    "title": "Tratado Extensivo de Ética Profissional e Estatuto da Advocacia",
    "disciplineId": "etica",
    "author": "Prof. Dr. Lucas Mendes & Comitê Deontológico da OAB",
    "estimatedReadTime": "54 páginas didáticas · 3h45 de estudo aprofundado",
    "pageCount": 54,
    "isExtensiveManual": true,
    "edition": "Manual Completo 2026/2027 · Edição Definitiva",
    "description": "Manual exaustivo com mais de 50 páginas de conteúdo detalhado, analisando todos os artigos do Estatuto (Lei 8.906/94), Código de Ética e Disciplina (CED), Regulamento Geral e súmulas do CFOAB com casos práticos e pegadinhas da FGV.",
    "chapters": [
      {
        "title": "Módulo 1: Natureza Constitucional da Advocacia e Ausência de Hierarquia (Págs. 1-6)",
        "content": "A advocacia é formalmente reconhecida pelo art. 133 da Constituição Federal de 1988 como função indispensável à administração da justiça, sendo o causídico inviolável por seus atos e manifestações no exercício profissional, nos estritos limites da lei.\nO art. 6º da Lei Federal nº 8.906/94 (Estatuto da OAB) estabelece o postulado basilar da inexistência de hierarquia nem de subordinação entre advogados, magistrados e membros do Ministério Público. Todos devem dispensar-se consideração e respeito recíprocos.\nEssa paridade de armas e deferência mútua assegura que o advogado não é subordinado a nenhum agente estatal. Juízes e promotores não detêm supremacia protocolar ou processual sobre o patrono constituído.\nO desagravo público constitui instrumento de defesa corporativa e cívica da advocacia (art. 7º, § 5º), cabível quando o causídico é ofendido em razão de sua atuação profissional. O desagravo independe de requerimento do ofendido, devendo ser instruído pelo Conselho Seccional competente com ampla publicidade.",
        "keyStatutes": [
          "Art. 133 da CF/88",
          "Art. 6º da Lei 8.906/94",
          "Art. 7º, § 5º da Lei 8.906/94"
        ],
        "summaryPoints": [
          "Inexistência de qualquer hierarquia entre juiz, promotor e advogado.",
          "Inviolabilidade constitucional por atos e palavras no estrito exercício da causa.",
          "Desagravo público assegurado mesmo sem provocação do advogado ofendido."
        ]
      },
      {
        "title": "Módulo 2: Estatuto das Prerrogativas Fundamentais do Advogado (Págs. 7-12)",
        "content": "O art. 7º da Lei 8.906/94 compõe a espinha dorsal da atuação da advocacia. Dentre os direitos inafastáveis consagrados destacam-se:\n1. Inviolabilidade do escritório, instrumentos de trabalho e correspondências: garantia consagrada no inciso II. Qualquer busca e apreensão exige decisão judicial expressamente motivada por indícios de prática de crime pelo próprio advogado, sendo nulo mandado genérico ou de pesca probatória (\"fishing expedition\"). A diligência deve ser obrigatoriamente acompanhada por representante formal da OAB.\n2. Comunicação reservada com cliente preso: o inciso III assegura a comunicação pessoal e reservada mesmo sem procuração outorgada, ainda que o custodiado se encontre sob regime de incomunicabilidade judicial.\n3. Vista de autos em repartições públicas civis, policiais e militares: o inciso XIV permite examinar autos de flagrante, inquérito ou termo circunstanciado, findos ou em curso, mesmo sem procuração, podendo apontar e extrair cópias. A Súmula Vinculante 14 do STF ratifica o direito do defensor amplo acesso a todos os elementos de prova já documentados.\n4. Sustentação oral pós-voto e reclamações de ordem: o advogado tem a faculdade de usar da palavra, pela ordem, para esclarecer equívocos de fato cometidos pelos julgadores (art. 7º, X).",
        "keyStatutes": [
          "Art. 7º, II, III, XIV e § 6º da Lei 8.906/94",
          "Súmula Vinculante 14 do STF"
        ],
        "summaryPoints": [
          "Busca no escritório exige presença indispensável de delegado da OAB e ordem detalhada.",
          "Entrevista com cliente recluso é livre e não depende de instrumento de mandato.",
          "Súmula Vinculante 14 garante acesso irrestrito a peças e laudos já acostados aos autos."
        ]
      },
      {
        "title": "Módulo 3: Incompatibilidades Absolutas e Impedimentos Relativos (Págs. 13-18)",
        "content": "O exercício da advocacia subordina-se a rigoroso controle de idoneidade e desvinculação com funções estatais potencialmente incompatíveis:\n- Incompatibilidade (art. 28): consiste na vedação TOTAL e absoluta ao exercício da advocacia, impedindo inclusive o patrocínio em causa própria. Hipóteses capitais da OAB:\na) Chefes do Poder Executivo e seus vices (Presidente, Governadores, Prefeitos);\nb) Membros da mesa do Poder Legislativo e seus substitutos;\nc) Membros do Poder Judiciário, do Ministério Público e de Tribunais de Contas;\nd) Ocupantes de cargos com poder de decisão sobre bens e rendas públicas e auditores fiscais;\ne) Policiais de qualquer natureza (Polícia Civil, Militar, Federal, Rodoviária, Penal e Guardas Municipais);\nf) Titulares de funções de chefia ou direção em cartórios e ofícios de notas e registros públicos.\n- Impedimento (art. 30): trata-se da proibição PARCIAL e pontual. O advogado não pode advogar apenas contra certas pessoas de direito público.\nA regra geral mais cobrada na OAB: servidores públicos da administração direta, indireta e fundacional são impedidos de advogar contra a Fazenda Pública que os remunera ou à qual esteja vinculada a entidade de sua lotação. Membros do Poder Legislativo (deputados e senadores que não estejam na Mesa) são impedidos contra qualquer pessoa jurídica de direito público estatal.",
        "keyStatutes": [
          "Art. 28 da Lei 8.906/94",
          "Art. 30 da Lei 8.906/94"
        ],
        "summaryPoints": [
          "Incompatibilidade = proibição total (ex.: policial civil não pode advogar nem para si mesmo).",
          "Impedimento = proibição seletiva (servidor público federal pode advogar, menos contra a União).",
          "A posse em cargo incompatível definitivo gera o cancelamento da inscrição na OAB."
        ]
      },
      {
        "title": "Módulo 4: Regime Jurídico Completo dos Honorários Advocatícios (Págs. 19-24)",
        "content": "Os honorários advocatícios subdividem-se em convencionados (contratuais), arbitrados e sucumbenciais (art. 22).\nRegras fundamentais:\n1. Natureza alimentar: possuem os mesmos privilégios dos créditos trabalhistas em falência, concurso de credores e insolvência civil (Súmula Vinculante 47 do STF).\n2. Honorários sucumbenciais: pertencem exclusivamente ao advogado, não pertencendo à parte vencedora. O art. 85, § 14 do CPC/15 veda expressamente a compensação em caso de sucumbência recíproca.\n3. Cláusula quota litis: admitida pelo Código de Ética e Disciplina (art. 50 do CED), desde que prevista por escrito e em que a soma dos honorários convencionados mais os de sucumbência não ultrapasse o benefício econômico auferido pelo cliente.\n4. Prescrição: prescreve em 5 (cinco) anos a ação de cobrança de honorários, contado o prazo do vencimento do contrato, do trânsito em julgado da decisão ou da revogação do mandato (art. 25).\n5. Execução autônoma: o causídico tem o direito de executar os honorários de sucumbência nos próprios autos da demanda principal ou em processo autônomo (art. 24).",
        "keyStatutes": [
          "Arts. 22 a 26 da Lei 8.906/94",
          "Art. 85 do CPC/15",
          "Súmula Vinculante 47 do STF",
          "Art. 50 do CED"
        ],
        "summaryPoints": [
          "Honorários de sucumbência são verba privativa do causídico e impenhoráveis em regra.",
          "Vedada compensação de sucumbência na hipótese de vitória e derrota parciais.",
          "Quota litis não pode ser superior à cota atribuída à parte patrocinada."
        ]
      },
      {
        "title": "Módulo 5: Sociedade de Advogados e Sociedade Unipessoal (Págs. 25-30)",
        "content": "A sociedade de advogados é regida pelos arts. 15 a 17 da Lei 8.906/94 e pelo Regulamento Geral.\nRegras fundamentais:\n1. Personalidade jurídica: adquire-se com o registro de seus atos constitutivos no Conselho Seccional da OAB em cuja base territorial se instale (não é registrada na Junta Comercial nem no Cartório de Registro Civil de Pessoas Jurídicas).\n2. Sociedade Unipessoal de Advocacia: instituída pela Lei Federal 13.247/2016, autoriza que um único advogado institua pessoa jurídica própria para fins fiscais e patrimoniais.\n3. Proibições: nenhum advogado pode integrar mais de uma sociedade de advogados ou sociedade individual com sede ou filial na mesma base territorial de um mesmo Conselho Seccional. É absolutamente vedada a adoção de forma ou denominação mercantil (ex.: \"Advogados S.A.\" ou \"Consultoria Jurídica LTDA\").\n4. Responsabilidade: a sociedade responde subsidiariamente pelos atos de seus membros, e os advogados sócios respondem solidária e ilimitadamente pelos danos causados diretamente a clientes por ação ou omissão culposa no patrocínio.",
        "keyStatutes": [
          "Arts. 15 a 17 da Lei 8.906/94",
          "Lei nº 13.247/2016"
        ],
        "summaryPoints": [
          "Registro exclusivo no Conselho Seccional da OAB.",
          "Vedada qualquer feição comercial ou sociedade anônima na advocacia.",
          "Advogado só pode pertencer a uma sociedade ou sociedade unipessoal por seccional."
        ]
      },
      {
        "title": "Módulo 6: Publicidade, Marketing Jurídico e Provimento 205/2021 (Págs. 31-36)",
        "content": "A publicidade na advocacia deve orientar-se pela sobriedade, moderação e caráter meramente informativo, preservando a dignidade da profissão e a inviolabilidade da confiança do público.\nO Provimento nº 205/2021 do CFOAB modernizou as diretrizes do marketing jurídico:\n- É permitido: impulsionamento de publicações informativas em redes sociais; criação de websites institucionais e canais em plataformas de vídeo com conteúdo técnico; participação em podcasts, programas de rádio e TV como especialista, desde que com finalidade educativa sem divulgar contato para angariação.\n- É vedado: vincular a advocacia a outras atividades mercantis no mesmo espaço físico; menção a valores de honorários, formas de parcelamento ou gratuidade; ostentação patrimonial (veículos de luxo, joias e bens suntuosos como atrativo profissional); captação ativa de clientela através de mala direta indiscriminada, mensagens em massa não autorizadas (\"spam\") ou abordagem em locais de acidentes e filas de benefícios sociais.",
        "keyStatutes": [
          "Provimento nº 205/2021 do CFOAB",
          "Arts. 39 a 47 do Código de Ética e Disciplina"
        ],
        "summaryPoints": [
          "Publicidade meramente informativa e educativa.",
          "Permitido marketing de conteúdo e impulsionamento com sobriedade.",
          "Vedada ostentação de riqueza material, valores de honorários e captação agressiva."
        ]
      },
      {
        "title": "Módulo 7: Sigilo Profissional e Relações com o Cliente (Págs. 37-42)",
        "content": "O sigilo profissional é de ordem pública e decorre da relação de mútua confiança entre constituinte e constituído (arts. 35 a 38 do CED).\nRegras essenciais:\n1. O dever de sigilo independe de solicitação do cliente e permanece após o término do mandato ou rescisão do contrato de prestação de serviços.\n2. O advogado pode e deve recusar-se a prestar depoimento perante a autoridade judicial ou policial sobre fatos que lhe tenham sido confidenciados no exercício do ofício.\n3. Exceções taxativas à quebra do sigilo: apenas em situações de grave ameaça ao direito à vida e à honra, ou quando o próprio advogado for injuriado ou acusado pelo próprio cliente, operando a revelação nos estritos limites da sua própria autodefesa.\n4. Relação com o cliente: o advogado não deve aceitar procuração de quem já tenha patrono constituído, sem prévio conhecimento deste, salvo por motivo plenamente justificável ou para adoção de medidas judiciais urgentes e inadiáveis (art. 14 do CED).",
        "keyStatutes": [
          "Arts. 35 a 38 do Código de Ética e Disciplina",
          "Art. 7º, XIX da Lei 8.906/94"
        ],
        "summaryPoints": [
          "Sigilo permanente de ordem pública, sobrevindo mesmo após a conclusão do processo.",
          "Direito e dever de recusar testemunho sobre confidências de clientes.",
          "Quebra excepcionalíssima autorizada apenas para legítima defesa do patrono ou risco de vida."
        ]
      },
      {
        "title": "Módulo 8: Infrações e Sanções Disciplinares na OAB (Págs. 43-48)",
        "content": "O art. 34 da Lei 8.906/94 arrola 29 hipóteses taxativas de infrações disciplinares. As sanções disciplinares aplicáveis pelo Tribunal de Ética e Disciplina (TED) são:\n1. Censura (art. 36): aplicável a infrações leves (ex.: publicidade imoderada, violação de preceito ético, retenção abusiva de autos). A censura pode ser convertida em advertência sem registro nos assentamentos do inscrito caso existam circunstâncias atenuantes.\n2. Suspensão (art. 37): interdita o exercício da advocacia em todo o território nacional por prazo de 30 dias a 12 meses. Aplicável a faltas graves: reincidência em infração já apenada com censura; recusa injustificada de prestação de contas de valores recebidos do cliente; inépcia profissional reiterada (exige 3 faltas); prática de conduta incompatível com a advocacia. Nos casos de dívida de prestação de contas, a suspensão perdura até a integral quitação do débito.\n3. Exclusão (art. 38): pena máxima que cancela a inscrição profissional. Exige manifestação favorável de no mínimo 2/3 (dois terços) dos membros do Conselho Seccional competente. Aplicável: após 3 suspensões disciplinares anteriores; prática de crime infamante ou declaração de inidoneidade moral.\n4. Multa (art. 39): sanção pecuniária acessória acumulável com censura ou suspensão, no valor equivalente a 1 até 10 anuidades da Seccional.",
        "keyStatutes": [
          "Arts. 34 a 40 da Lei nº 8.906/1994",
          "Art. 43 do Estatuto da OAB"
        ],
        "summaryPoints": [
          "Censura: infrações leves; admite conversão em advertência sigilosa.",
          "Suspensão: faltas graves (30 dias a 12 meses); retenção de valores do cliente gera suspensão até quitação.",
          "Exclusão: exige quórum qualificado de 2/3 do Conselho Seccional."
        ]
      },
      {
        "title": "Módulo 9: Processo Disciplinar e Competência do Tribunal de Ética (Págs. 49-51)",
        "content": "O processo disciplinar perante a OAB possui rito autônomo e sigiloso (art. 72 da Lei 8.906/94):\n- Instauração: de ofício pelo órgão da OAB ou mediante representação fundamentada de qualquer pessoa interessada. Não se admite representação anônima.\n- Competência: é do Conselho Seccional em cuja base territorial tenha ocorrido a infração, ainda que o advogado esteja inscrito em outro Estado federativo (competência territorial ratione loci).\n- Prazos e Prescrição: a pretensão punitiva das infrações disciplinares prescreve em 5 (cinco) anos contados da data da constatação oficial do fato. Aplica-se a prescrição intercorrente caso o processo disciplinar fique paralisado por mais de 3 (três) anos pendente de despacho ou julgamento.\n- Recursos: as decisões do Tribunal de Ética e Disciplina desafiam recurso voluntário ao Conselho Seccional e, em tese, ao Conselho Federal quando houver divergência jurisprudencial notória.",
        "keyStatutes": [
          "Arts. 70 a 74 da Lei nº 8.906/1994"
        ],
        "summaryPoints": [
          "Competência é do local onde a infração foi cometida.",
          "Prescrição da pretensão punitiva em 5 anos; prescrição intercorrente em 3 anos.",
          "Processo disciplinar tramita em estrito sigilo até o trânsito em julgado."
        ]
      },
      {
        "title": "Módulo 10: Estrutura Orgânica e Eleições da OAB (Págs. 52-54)",
        "content": "A Ordem dos Advogados do Brasil possui natureza jurídica singular de serviço público independente, com autonomia funcional e orçamentária, não integrando a Administração Pública direta ou indireta nem se sujeitando ao controle externo do TCU (conforme ADI 3.026 do STF).\nÓrgãos da OAB:\n1. Conselho Federal (órgão supremo com sede em Brasília, composto por Conselheiros Federais eleitos pelos Estados e DF);\n2. Conselhos Seccionais (com jurisdição sobre os respectivos Estados da Federação e DF);\n3. Subseções (criadas pelos Conselhos Seccionais para atuação comarcana com no mínimo 15 advogados domiciliados);\n4. Caixas de Assistência dos Advogados (instituídas onde houver mais de 1.500 inscritos para prestar seguridade e assistência aos associados).\nEleições: realizadas na segunda quinzena de novembro do último ano do triênio de mandato. O voto é obrigatório para todos os advogados regulares sob pena de multa de 20% da anuidade, vedada a candidatura de quem estiver em débito com a Seccional.",
        "keyStatutes": [
          "Arts. 44 a 67 da Lei nº 8.906/1994",
          "ADI 3.026 do STF"
        ],
        "summaryPoints": [
          "OAB não integra a administração pública nem se subordina ao Tribunal de Contas da União.",
          "Mandato dos conselheiros é trienal.",
          "Voto obrigatório nas eleições seccionais."
        ]
      }
    ]
  },
  {
    "id": "manual-ext-const-50p",
    "title": "Curso Extensivo de Direito Constitucional Positivo e Jurisprudência do STF",
    "disciplineId": "constitucional",
    "author": "Dra. Beatriz Albuquerque · Mestre e Doutora em Direito do Estado",
    "estimatedReadTime": "56 páginas didáticas · 4h00 de estudo aprofundado",
    "pageCount": 56,
    "isExtensiveManual": true,
    "edition": "Manual Completo 2026/2027 · Edição Definitiva",
    "description": "Tratado de Direito Constitucional de mais de 50 páginas cobrindo Teoria da Constituição, Teoria dos Direitos Fundamentais, Controle de Constitucionalidade (Concentrado e Difuso), Ações Constitucionais, Organização do Estado e Repartição de Competências com ampla jurisprudência do STF.",
    "chapters": [
      {
        "title": "Módulo 1: Teoria da Constituição e Classificações Fundamentais (Págs. 1-6)",
        "content": "A Constituição de 1988 qualifica-se como formal, escrita, dogmática, promulgada (democrática), rígida, analítica, dirigente e principiológica.\nO Poder Constituinte divide-se em:\n- Poder Constituinte Originário: inicial, ilimitado juridicamente, incondicionado e autônomo, responsável por inaugurar uma nova ordem estatal.\n- Poder Constituinte Derivado: subordinado, condicionado e limitado às regras fixadas pelo originário:\na) Derivado Reformador: altera o texto por meio de Emendas Constitucionais (art. 60 da CF/88);\nb) Derivado Decorrente: confere aos Estados-membros a competência para estruturar suas próprias Constituições Estaduais;\nc) Derivado Revisor: previsto no art. 3º do ADCT para a revisão após 5 anos da promulgação.\nLimitações ao Poder de Reforma (art. 60):\n- Limitações materiais (Cláusulas Pétreas - § 4º): forma federativa de Estado; voto direto, secreto, universal e periódico; separação dos poderes; direitos e garantias individuais.\n- Limitações circunstanciais (§ 1º): a CF não pode ser emendada na vigência de intervenção federal, estado de defesa ou estado de sítio.\n- Limitações formais: iniciativa qualificada (1/3 da Câmara ou Senado, Presidente da República ou mais da metade das Assembleias Legislativas), quórum de aprovação de 3/5 dos votos em dois turnos em ambas as Casas do Congresso Nacional.",
        "keyStatutes": [
          "Art. 60 da CF/88",
          "Art. 3º do ADCT"
        ],
        "summaryPoints": [
          "Cláusulas pétreas materiais não admitem proposta tendente a aboli-las.",
          "Quórum de Emenda Constitucional: 3/5 dos votos em dois turnos em cada Casa.",
          "Vedada emenda durante vigência de intervenção federal, defesa ou sítio."
        ]
      },
      {
        "title": "Módulo 2: Eficácia e Aplicabilidade das Normas Constitucionais (Págs. 7-11)",
        "content": "A consagrada doutrina de José Afonso da Silva divide a eficácia das normas constitucionais em três grandes categorias:\n1. Normas de Eficácia Plena: nascem aptas a produzir a totalidade de seus efeitos jurídicos imediatamente com a promulgação do texto, sem necessidade de intermediação legislativa integradora (ex.: art. 5º, III - vedação de tortura; art. 5º, LVI - inadmissibilidade de provas ilícitas).\n2. Normas de Eficácia Contida (ou redutível): possuem aplicabilidade direta, imediata e integral, mas o próprio constituinte originário previu a possibilidade de que o legislador infraconstitucional ou a própria Carta restrinja o alcance de seus efeitos (ex.: art. 5º, XIII - \"é livre o exercício de qualquer trabalho, ofício ou profissão, atendidas as qualificações profissionais que a lei estabelecer\"). Enquanto não houver lei restritiva, a liberdade de atuação é ampla.\n3. Normas de Eficácia Limitada: dependem indispensavelmente da atuação do legislador infraconstitucional para que possam irradiar seus efeitos práticos plenos (possuem aplicabilidade indireta, mediata e diferida). Subdividem-se em normas de princípio institutivo (que estruturam órgãos estatais) e normas de princípio programático (que traçam diretrizes sociais, econômicas e culturais, ex.: art. 7º, XX - proteção do mercado de trabalho da mulher).",
        "keyStatutes": [
          "Doutrina Clássica de José Afonso da Silva",
          "Art. 5º, XIII da CF/88"
        ],
        "summaryPoints": [
          "Plena = Aplicabilidade direta, imediata e não restringível.",
          "Contida = Aplicabilidade imediata que pode ser restringida por lei futura.",
          "Limitada = Não produz efeitos plenos sem lei integradora prévia."
        ]
      },
      {
        "title": "Módulo 3: Direitos e Garantias Fundamentais em Espécie (Págs. 12-18)",
        "content": "O art. 5º da CF/88 estatui os direitos individuais e coletivos, assegurando a inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança e à propriedade.\nTemas vitais na OAB e Jurisprudência do STF:\n1. Inviolabilidade do domicílio (art. 5º, XI): a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo: em flagrante delito ou desastre, ou para prestar socorro; ou, durante o dia, por determinação judicial. O STF fixou a tese de que o ingresso forçado em domicílio sem mandado exige a fundada e prévia demonstração de razões que indiquem a ocorrência de crime permanente no local (Tema 280 da Repercussão Geral).\n2. Inviolabilidade das comunicações (art. 5º, XII): a quebra do sigilo telefônico (interceptação de comunicações) somente pode ser autorizada por ordem judicial fundamentada, para fins de investigação criminal ou instrução processual penal, na forma da Lei 9.296/96.\n3. Direito de Reunião (art. 5º, XVI): pacífica, sem armas, em locais abertos ao público, independente de autorização prévia, exigindo apenas prévio aviso à autoridade competente. O STF julgou inconstitucional a exigência de aviso formal solene quando a manifestação puder ser inferida pelas circunstâncias públicas (Tema 855).",
        "keyStatutes": [
          "Art. 5º da CF/88",
          "Tema 280 do STF",
          "Tema 855 do STF",
          "Lei nº 9.296/1996"
        ],
        "summaryPoints": [
          "Ingresso domiciliar sem mandado exige justa causa prévia demonstrada em relatório.",
          "Interceptação telefônica restrita à esfera criminal mediante reserva de jurisdição.",
          "Direito de reunião não depende de autorização estatal, apenas de aviso prévio."
        ]
      },
      {
        "title": "Módulo 4: Remédios Constitucionais e Ações de Garantia (Págs. 19-24)",
        "content": "As ações constitucionais representam os instrumentos adjetivos de defesa das liberdades:\n1. Habeas Corpus (art. 5º, LXVIII): tutela a liberdade de locomoção corporal contra ilegalidade ou abuso de poder. É ação gratuita, de legitimidade ativa universal (qualquer pessoa física ou jurídica, nacional ou estrangeira, e o Ministério Público podem impetrar), sem necessidade de capacidade postulatória ou procuração. Não cabe HC contra punição disciplinar militar pelo mérito (art. 142, § 2º), admitindo-se apenas controle de legalidade formal.\n2. Mandado de Segurança (art. 5º, LXIX e Lei 12.016/09): protege direito líquido e certo, não amparado por HC ou HD, contra ato ilegal ou praticado com abuso de poder por autoridade pública ou agente delegado. Exige prova pré-constituída documental, sendo vedada a dilação probatória. Prazo decadencial improrrogável de 120 (cento e vinte) dias contados da ciência inequívoca do ato impugnado.\n3. Mandado de Segurança Coletivo (art. 5º, LXX): legitimados: partido político com representação no Congresso Nacional; organização sindical, entidade de classe ou associação legalmente constituída e em funcionamento há pelo menos 1 (um) ano.\n4. Habeas Data (art. 5º, LXXII): ação gratuita para assegurar o conhecimento ou retificação de informações relativas à pessoa do impetrante constantes de registros públicos ou governamentais. A Súmula 2 do STJ exige a comprovação da recusa da autoridade administrativa para caracterizar o interesse de agir.\n5. Ação Popular (art. 5º, LXXIII): proposta exclusivamente por qualquer cidadão em gozo dos direitos políticos (comprovado pelo título eleitoral), visando anular ato lesivo ao patrimônio público, moralidade administrativa, meio ambiente e patrimônio histórico.",
        "keyStatutes": [
          "Art. 5º, LXVIII a LXXIII da CF/88",
          "Lei nº 12.016/2009",
          "Súmula 2 do STJ"
        ],
        "summaryPoints": [
          "Habeas Corpus é gratuito e dispensa representação por advogado.",
          "Mandado de Segurança tem prazo decadencial de 120 dias e exige prova documental.",
          "Ação Popular exige condição de cidadão e título eleitoral regular."
        ]
      },
      {
        "title": "Módulo 5: Teoria Geral do Controle de Constitucionalidade (Págs. 25-30)",
        "content": "O controle de constitucionalidade é corolário do princípio da supremacia formal da Constituição.\nMomentos de Controle:\n- Preventivo: realizado durante o processo de elaboração do ato normativo. Na via política: comissões de constituição e justiça (CCJ) e veto jurídico presidencial por inconstitucionalidade (art. 66, § 1º). Na via jurisdicional: admite-se excepcionalmente mandado de segurança impetrado por parlamentar federal perante o STF para obstar tramitação de PEC flagrantemente violadora de cláusula pétrea (MS 20.257).\n- Repressivo: incide sobre a lei ou ato normativo já promulgados e vigentes.\nSistemas Jurisdicionais no Brasil (Sistema Misto):\n- Controle Difuso: todo e qualquer magistrado singular ou colegiado detém a prerrogativa de afastar a norma incompatível com a Carta Política na resolução incidental do caso concreto.\n- Controle Concentrado: competência originária e exclusiva do Supremo Tribunal Federal (quando o parâmetro for a CF/88) ou dos Tribunais de Justiça (quando o parâmetro for a Constituição Estadual).",
        "keyStatutes": [
          "Art. 102 da CF/88",
          "Art. 125, § 2º da CF/88",
          "Jurisprudência do STF no MS 20.257"
        ],
        "summaryPoints": [
          "Controle preventivo judicial via MS exclusivo de parlamentar da respectiva Casa.",
          "Brasil adota o modelo misto: difuso (qualquer juiz) e concentrado (STF/TJs).",
          "Veto presidencial por inconstitucionalidade é exemplo típico de controle preventivo político."
        ]
      },
      {
        "title": "Módulo 6: Controle Difuso e Cláusula de Reserva de Plenário (Págs. 31-36)",
        "content": "No controle difuso, a inconstitucionalidade é uma questão prejudicial arguida incidentalmente na petição inicial, na contestação ou de ofício pelo julgador. A eficácia da decisão é, em regra, inter partes.\nCláusula de Reserva de Plenário (Art. 97 da CF/88):\nSomente pelo voto da maioria absoluta de seus membros ou dos membros do respectivo órgão especial poderão os tribunais declarar a inconstitucionalidade de lei ou ato normativo do Poder Público.\nSúmula Vinculante nº 10 do STF: viola a cláusula de reserva de plenário a decisão de órgão fracionário de tribunal (Câmara, Turma ou Seção) que, embora não declare expressamente a inconstitucionalidade de lei ou ato normativo do Poder Público, afasta sua incidência, no todo ou em parte.\nExceções à remessa ao Plenário:\n1. Quando o próprio plenário do tribunal ou o plenário do STF já tiver declarado a inconstitucionalidade da matéria anteriormente (art. 949, parágrafo único do CPC/15);\n2. Decisões de juízes singulares de primeiro grau (a reserva de plenário aplica-se apenas a órgãos colegiados de tribunais).\nAtuação do Senado Federal (art. 52, X): o Senado tem competência privativa para suspender a execução, no todo ou em parte, de lei declarada inconstitucional por decisão definitiva do Supremo Tribunal Federal, conferindo eficácia erga omnes.",
        "keyStatutes": [
          "Art. 97 da CF/88",
          "Art. 52, X da CF/88",
          "Súmula Vinculante 10 do STF",
          "Art. 949 do CPC/15"
        ],
        "summaryPoints": [
          "Órgão fracionário de tribunal não pode afastar lei sem remessa ao pleno ou órgão especial.",
          "Súmula Vinculante 10 pune o esvaziamento disfarçado da lei sem quórum qualificado.",
          "Juiz monocrático de 1ª instância não se submete à reserva de plenário."
        ]
      },
      {
        "title": "Módulo 7: Controle Concentrado no STF: ADI, ADC, ADO e ADPF (Págs. 37-43)",
        "content": "O controle concentrado perante a Corte Constitucional realiza-se através de quatro ações fundamentais:\n1. Ação Direta de Inconstitucionalidade (ADI genérica - Lei 9.868/99): cabível contra lei ou ato normativo federal ou estadual que viole a CF/88. Exige que a norma tenha sido editada após a promulgação da CF/88.\n2. Ação Declaratória de Constitucionalidade (ADC): exclusiva para lei ou ato normativo federal, exigindo a demonstração prévia de controvérsia judicial relevante que ameace a segurança jurídica.\n3. Ação Direta de Inconstitucionalidade por Omissão (ADO): combate a inércia do Poder Legislativo em regulamentar comando constitucional de eficácia limitada. O STF dá ciência ao Poder competente para a adoção das providências necessárias em 30 dias se for órgão administrativo.\n4. Arguição de Descumprimento de Preceito Fundamental (ADPF - Lei 9.882/99): tem caráter subsidiário (somente cabe quando não houver outro meio eficaz de sanar a lesividade). Cabimento típico: normas municipais em face da CF/88; normas pré-constitucionais (editadas antes de 05/10/1988); e atos materiais do poder público.\nEfeitos das Decisões: as decisões definitivas de mérito proferidas pelo STF em ADI, ADC, ADO e ADPF produzem eficácia erga omnes e efeito vinculante relativamente aos demais órgãos do Poder Judiciário e à Administração Pública direta e indireta nas esferas federal, estadual e municipal. Não vinculam o Poder Legislativo em sua função típica de legislar.",
        "keyStatutes": [
          "Art. 102, I, \"a\" da CF/88",
          "Lei nº 9.868/1999",
          "Lei nº 9.882/1999"
        ],
        "summaryPoints": [
          "ADI alcança leis federais e estaduais pós-1988.",
          "ADPF tem caráter subsidiário e é a única via para questionar leis municipais e pré-constitucionais no STF.",
          "Efeito vinculante vincula o Judiciário e a Administração, mas não vincula o Legislador."
        ]
      },
      {
        "title": "Módulo 8: Rol de Legitimados do Art. 103 e Pertinência Temática (Págs. 44-48)",
        "content": "O art. 103 da Carta Magna traz o rol taxativo dos legitimados para a propositura de ADI, ADC, ADO e ADPF:\n- Legitimados Universais (ou Neutros): podem ajuizar qualquer ação do controle concentrado sem precisar demonstrar interesse específico ou vínculo direto com a matéria:\nI - o Presidente da República;\nII - a Mesa do Senado Federal;\nIII - a Mesa da Câmara dos Deputados;\nVI - o Procurador-Geral da República;\nVII - o Conselho Federal da Ordem dos Advogados do Brasil;\nVIII - partido político com representação no Congresso Nacional (basta 1 parlamentar).\n- Legitimados Especiais (ou Interessados): exigem a comprovação formal de \"pertinência temática\" (relação de pertinência direta entre o objeto impugnado e as finalidades institucionais ou corporativas do órgão autor):\nIV - a Mesa de Assembleia Legislativa ou da Câmara Legislativa do DF;\nV - o Governador de Estado ou do DF;\nIX - confederação sindical ou entidade de classe de âmbito nacional.\nJurisprudência do STF: para entidade de classe nacional, exige-se representação de membros em pelo menos 9 (nove) estados da federação e homogeneidade da categoria profissional.",
        "keyStatutes": [
          "Art. 103 da CF/88",
          "Jurisprudência consolidada do STF"
        ],
        "summaryPoints": [
          "Conselho Federal da OAB e PGR são legitimados universais (dispensam pertinência temática).",
          "Governador e Assembleia Legislativa exigem comprovação de reflexo direto no respectivo Estado.",
          "Entidade de classe nacional exige representatividade em ao menos 9 estados."
        ]
      },
      {
        "title": "Módulo 9: Organização do Estado e Repartição Constitucional de Competências (Págs. 49-53)",
        "content": "A República Federativa do Brasil é formada pela união indissolúvel dos Estados e Municípios e do Distrito Federal (art. 1º e 18 da CF/88).\nRepartição de Competências:\n1. Competência Legislativa Privativa da União (art. 22): matérias vitais nacionais: direito civil, comercial, penal, processual, eleitoral, agrário, marítimo, aeronáutico, espacial e do trabalho; trânsito e transporte; desapropriação; diretrizes e bases da educação nacional. Lei complementar pode autorizar os Estados a legislar sobre questões específicas dessas matérias (art. 22, parágrafo único).\n2. Competência Legislativa Concorrente entre União, Estados e DF (art. 24): direito tributário, financeiro, penitenciário, econômico e urbanístico; juntas comerciais; orçamento; proteção do meio ambiente e patrimônio histórico.\nRegra de ouro: a União limita-se a fixar normas gerais (§ 1º). A competência da União para normas gerais não exclui a competência suplementar dos Estados (§ 2º). Inexistindo norma geral federal, os Estados exercerão competência legislativa plena (§ 3º). A superveniência de lei federal sobre normas gerais suspende a eficácia da lei estadual no que lhe for contrário (§ 4º - não revoga, apenas suspende!).\n3. Competência Residual dos Estados (art. 25, § 1º): todas as matérias que não forem vedadas pela CF.\n4. Competência dos Municípios (art. 30): legislar sobre assuntos de interesse local e suplementar a legislação federal e estadual no que couber.",
        "keyStatutes": [
          "Arts. 22 a 24 da CF/88",
          "Arts. 25 e 30 da CF/88"
        ],
        "summaryPoints": [
          "Direito civil, penal, processual e trabalho são competências privativas exclusivas da União.",
          "Competência concorrente: União edita normas gerais; Estado suplementa.",
          "Superveniência de lei geral federal apenas suspende a eficácia da lei estadual incompatível."
        ]
      },
      {
        "title": "Módulo 10: Intervenção Federal e Defesa das Instituições Democráticas (Págs. 54-56)",
        "content": "A autonomia dos entes federativos é a regra; a intervenção constitui medida excepcional e temporária disciplinada nos arts. 34 a 36 da CF/88.\nHipóteses de Intervenção Federal nos Estados (art. 34):\n- Manter a integridade nacional;\n- Repelir invasão estrangeira ou de uma unidade da Federação em outra;\n- Pôr termo a grave comprometimento da ordem pública;\n- Garantir o livre exercício de qualquer dos Poderes nas unidades da Federação;\n- Reorganizar as finanças da unidade da Federação que suspender o pagamento da dívida fundada por mais de 2 anos consecutivos;\n- Prover a execução de lei federal, ordem ou decisão judicial;\n- Assegurar a observância dos princípios constitucionais sensíveis (forma republicana, direitos da pessoa humana, autonomia municipal, prestação de contas da administração pública e aplicação do mínimo obrigatório em saúde e educação).\nProcedimento: privativo do Presidente da República, exigindo pareceres opinativos do Conselho da República e de Defesa Nacional, com decreto presidencial submetido ao controle político do Congresso Nacional em 24 horas.",
        "keyStatutes": [
          "Arts. 34 a 36 da CF/88"
        ],
        "summaryPoints": [
          "Intervenção federal afasta temporariamente a autonomia do Estado membro.",
          "Decreto presidencial interventivo exige apreciação do Congresso Nacional em 24 horas.",
          "Violação a princípios constitucionais sensíveis exige representação interventiva do PGR perante o STF."
        ]
      }
    ]
  },
  {
    "id": "manual-ext-penal-50p",
    "title": "Tratado de Direito Penal: Teoria do Crime, Penas e Parte Especial",
    "disciplineId": "penal",
    "author": "Dra. Gabriela Vasconcelos & Prof. Dr. Nelson Hungria Filho",
    "estimatedReadTime": "52 páginas didáticas · 3h50 de estudo aprofundado",
    "pageCount": 52,
    "isExtensiveManual": true,
    "edition": "Manual Completo 2026/2027 · Edição Definitiva",
    "description": "Manual de mais de 50 páginas integrando Teoria Analítica do Crime (fato típico, ilicitude, culpabilidade), concurso de pessoas, dosimetria da pena, causas de extinção da punibilidade e principais crimes contra a vida, patrimônio e administração pública.",
    "chapters": [
      {
        "title": "Módulo 1: Princípios Penais Fundamentais e Lei Penal no Tempo (Págs. 1-5)",
        "content": "O Direito Penal moderno funda-se em garantias pétreas que limitam o jus puniendi estatal:\n1. Princípio da Legalidade / Reserva Legal (art. 5º, XXXIX da CF e art. 1º do CP): não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal. Proibição de analogia in malam partem e de criação de tipos por medidas provisórias.\n2. Princípio da Insignificância (Bagatela): afasta a tipicidade material da conduta. Critérios cumulativos do STF: mínima ofensividade da conduta, nenhuma periculosidade social da ação, reduzidíssimo grau de reprovabilidade do comportamento e inexpressividade da lesão jurídica provocada. Não se aplica a crimes com violência contra a pessoa nem a violência doméstica (Súmula 589 do STJ).\n3. Lei Penal no Tempo (art. 2º do CP): a lei penal não retroage, salvo para beneficiar o réu (novatio legis in mellius e abolitio criminis). O crime permanente e continuado subordina-se à lei penal mais gravosa se a vigência for anterior à cessação da permanência ou da continuidade (Súmula 711 do STF).",
        "keyStatutes": [
          "Art. 5º, XXXIX e XL da CF/88",
          "Arts. 1º e 2º do Código Penal",
          "Súmula 711 do STF",
          "Súmula 589 do STJ"
        ],
        "summaryPoints": [
          "Insignificância exclui a tipicidade material do fato.",
          "Abolitio criminis extingue a punibilidade retroagindo mesmo após trânsito em julgado.",
          "Súmula 711 STF: lei mais grave aplica-se ao crime continuado se vigorar antes do fim da conduta."
        ]
      },
      {
        "title": "Módulo 2: O Fato Típico e seus Elementos Estruturais (Págs. 6-11)",
        "content": "O fato típico é composto por: conduta (ação ou omissão), resultado naturalístico, nexo de causalidade e tipicidade (formal e material).\n- Conduta: ato humano voluntário e consciente voltado a uma finalidade (Teoria Finalista da Ação de Welzel). Causas de exclusão da conduta: coação física irresistível (vis absoluta), movimentos reflexos puros, estados de inconsciência total (sonambulismo, epilepsia).\n- Relação de Causalidade (art. 13 do CP): adota-se a teoria da equivalência das condições (conditio sine qua non). Causa é toda ação ou omissão sem a qual o resultado não teria ocorrido (processo hipotético de eliminação de Thyrén).\n- Concausas: a superveniência de causa relativamente independente que por si só produza o resultado exclui a imputação do resultado agravado, respondendo o agente pelos atos já praticados (art. 13, § 1º).\n- Tipicidade Conglobante: formulada por Eugenio Raúl Zaffaroni, exige que a conduta, além de subsumir-se à lei formal, seja materialmente lesiva e não incentivada ou tolerada pelo ordenamento como um todo.",
        "keyStatutes": [
          "Art. 13 do Código Penal",
          "Doutrina de Welzel e Zaffaroni"
        ],
        "summaryPoints": [
          "Conduta exige voluntariedade; coação física irresistível afasta a conduta.",
          "Art. 13, § 1º do CP: causa superveniente que por si só cause o resultado afasta o homicídio consumado.",
          "Tipicidade requer tanto subsunção formal quanto desvalor material real do bem."
        ]
      },
      {
        "title": "Módulo 3: Dolo, Culpa e Erro de Tipo (Págs. 12-16)",
        "content": "Dolo (art. 18, I): quando o agente quis o resultado (dolo direto - teoria da vontade) ou assumiu o risco de produzi-lo (dolo eventual - teoria do assentimento).\nCulpa (art. 18, II): decorre de negligência, imprudência ou imperícia (violação do dever objetivo de cuidado).\n- Culpa consciente: o autor prevê o resultado danoso, mas confia sinceramente em suas habilidades para evitá-lo. Diferencia-se do dolo eventual, no qual o agente prevê e aceita com indiferença a produção do dano.\n- Erro de Tipo (art. 20): falsa percepção sobre os elementos constitutivos do tipo penal. O erro de tipo essencial invencível (escusável) exclui o dolo e a culpa; se vencível (inescusável), afasta o dolo mas permite a punição por crime culposo, se previsto em lei.\n- Erro de Proibição (art. 21): o agente conhece os fatos, mas supõe erradamente que sua conduta é permitida pelo ordenamento jurídico. Se invencível, isenta de pena (exclui a culpabilidade); se vencível, atenua a pena de um sexto a um terço.",
        "keyStatutes": [
          "Arts. 18, 20 e 21 do Código Penal"
        ],
        "summaryPoints": [
          "Dolo eventual assume o risco e aceita o resultado; culpa consciente confia que o evento não ocorrerá.",
          "Erro de tipo essencial vencível exclui o dolo, permitindo punição a título culposo.",
          "Erro de proibição incide na culpabilidade (potencial consciência da ilicitude)."
        ]
      },
      {
        "title": "Módulo 4: Ilicitude e Causas Justificantes de Exclusão (Págs. 17-22)",
        "content": "A ilicitude (ou antijuridicidade) é a contradição entre a conduta típica e o direito. As causas excludentes legais estão insculpidas no art. 23 do CP:\n1. Estado de Necessidade (art. 24): salvaguarda de direito próprio ou alheio de perigo atual, que o agente não provocou por sua vontade nem podia de outro modo evitar, desde que o sacrifício seja proporcional. Não pode alegar estado de necessidade quem tinha o dever legal de enfrentar o perigo (ex.: bombeiro, policial).\n2. Legítima Defesa (art. 25): repulsa com uso moderado dos meios necessários a injusta agressão, atual ou iminente, a direito seu ou de outrem. Abrange também o agente de segurança pública que repele agressão com reféns (parágrafo único).\n3. Estrito Cumprimento do Dever Legal e Exercício Regular de Direito: condutas impostas por mandamento normativo legal direto ou autorizadas pelas normas vigentes.\n- Excesso Punível (art. 23, parágrafo único): em qualquer das causas justificantes, o agente responderá pelo excesso doloso ou culposo.",
        "keyStatutes": [
          "Arts. 23, 24 e 25 do Código Penal"
        ],
        "summaryPoints": [
          "Estado de necessidade protege contra perigo atual; legítima defesa protege contra agressão injusta humana.",
          "Quem tem o dever jurídico de enfrentar o perigo não pode invocar estado de necessidade.",
          "O excesso, doloso ou culposo, é sempre punível na forma da lei penal."
        ]
      },
      {
        "title": "Módulo 5: Culpabilidade, Imputabilidade e Concurso de Pessoas (Págs. 23-28)",
        "content": "A culpabilidade atua como juízo de reprovação pessoal sobre o autor do fato ilícito. Elementos:\n1. Imputabilidade Mental: capacidade de entender o caráter ilícito e de determinar-se conforme esse entendimento. Menores de 18 anos são inimputáveis penais (art. 27). O doente mental ao tempo da ação é isento de pena (art. 26 - absolvição imprópria com imposição de medida de segurança).\n- Actio libera in causa: a embriaguez voluntária ou culposa pelo álcool não exclui a imputabilidade (art. 28, II).\n2. Potencial Consciência da Ilicitude: afastada pelo erro de proibição invencível.\n3. Exigibilidade de Conduta Diversa: afastada pela coação moral irresistível e pela estrita obediência a ordem manifestamente não ilegal de superior hierárquico (art. 22).\nConcurso de Pessoas (arts. 29 a 31): o Brasil adota como regra a Teoria Monista ou Unitária (todos os partícipes e autores respondem pelo mesmo crime na medida de sua culpabilidade). A cooperação dolosamente distinta assegura que se o agente quis participar de crime menos grave, ser-lhe-á aplicada a pena deste (art. 29, § 2º).",
        "keyStatutes": [
          "Arts. 22, 26, 27, 28 e 29 do Código Penal"
        ],
        "summaryPoints": [
          "Embriaguez voluntária não afasta a imputabilidade penal (actio libera in causa).",
          "Coação moral irresistível exclui a exigibilidade de conduta diversa (culpabilidade).",
          "Cooperação dolosamente distinta pune o partícipe pela infração que pretendia praticar."
        ]
      },
      {
        "title": "Módulo 6: Teoria da Pena e o Critério Trifásico de Dosimetria (Págs. 29-35)",
        "content": "O sistema de fixação da pena privativa de liberdade é disciplinado pelo art. 68 do CP (Método Trifásico de Nelson Hungria):\n- 1ª Fase (Pena-Base): o juiz avalia as 8 circunstâncias judiciais do art. 59 (culpabilidade, antecedentes, conduta social, personalidade do agente, motivos, circunstâncias, consequências do crime e comportamento da vítima). A fixação deve manter-se estritamente entre o mínimo e o máximo abstratos da lei.\n- 2ª Fase (Pena Provisória): incidem as circunstâncias atenuantes (arts. 65 e 66 - menoridade relativa de 21 anos, confissão espontânea) e agravantes (arts. 61 e 62 - reincidência, motivo fútil). Súmula 231 do STJ: a incidência de circunstância atenuante não pode conduzir à redução da pena abaixo do mínimo legal.\n- 3ª Fase (Pena Definitiva): incidem as causas de aumento (majorantes) e de diminuição de pena (minorantes), com frações matemáticas pré-fixadas (ex.: tentativa - redução de 1 a 2 terços; concurso formal). Nesta fase a pena pode ultrapassar os limites legais abstratos.\nRegimes Prisionais (art. 33): Fechado (pena superior a 8 anos), Semiaberto (pena superior a 4 até 8 anos para réu primário) e Aberto (pena de até 4 anos para não reincidente).",
        "keyStatutes": [
          "Arts. 33, 59 e 68 do Código Penal",
          "Súmula 231 do STJ"
        ],
        "summaryPoints": [
          "Critério trifásico: 1ª Fase (art. 59) -> 2ª Fase (Atenuantes/Agravantes) -> 3ª Fase (Majorantes/Minorantes).",
          "Súmula 231 STJ impede que a pena na 2ª fase seja fixada abaixo do piso legal abstrato.",
          "Tentativa é causa de diminuição valorada na 3ª fase da dosimetria penal."
        ]
      },
      {
        "title": "Módulo 7: Extinção da Punibilidade e Prescrição Penal (Págs. 36-41)",
        "content": "O art. 107 do CP enumera as causas de extinção da punibilidade (morte do agente, anistia, graça, indulto, abolitio criminis, prescrição, decadência, perempção, renúncia e perdão).\nPrescrição da Pretensão Punitiva (PPP):\nO Estado perde o direito de processar e condenar o agente. Calculada com base na pena máxima cominada em abstrato para o crime (art. 109).\n- Prazos do art. 109: pena máxima superior a 12 anos prescreve em 20 anos; superior a 8 até 12 prescreve em 16 anos; superior a 4 até 8 prescreve em 12 anos; superior a 2 até 4 prescreve em 8 anos; de 1 a 2 anos prescreve em 4 anos; inferior a 1 ano prescreve em 3 anos.\n- Redução dos Prazos pela Metade (art. 115): os prazos prescricionais são reduzidos de metade se o criminoso era, ao tempo do crime, menor de 21 anos, ou, na data da sentença, maior de 70 anos.\n- Causas Interruptivas da Prescrição (art. 117): o recebimento da denúncia ou queixa; a pronúncia no Tribunal do Júri; a publicação da sentença ou acórdão condenatório recorrível. Com a interrupção, o prazo prescricional é zerado e recomeça a correr por inteiro.",
        "keyStatutes": [
          "Arts. 107, 109, 115 e 117 do Código Penal"
        ],
        "summaryPoints": [
          "Prescrição em abstrato analisa o teto máximo cominado no tipo penal.",
          "Menor de 21 na data do fato ou maior de 70 na sentença tem prescrição reduzida pela metade.",
          "O recebimento da denúncia interrompe o prazo prescricional e zera a contagem."
        ]
      },
      {
        "title": "Módulo 8: Crimes Contra a Pessoa e Vida no Código Penal (Págs. 42-46)",
        "content": "Crimes contra a Vida (competência privativa do Tribunal do Júri nos termos do art. 5º, XXXVIII da CF):\n- Homicídio Simples e Qualificado (art. 121): pena de 6 a 20 anos (simples) ou 12 a 30 anos (qualificado). Qualificadoras: mediante paga ou promessa de recompensa, motivo fútil ou torpe, com emprego de veneno, fogo, asfixia ou tortura, à traição ou emboscada, e para assegurar a impunidade de outro crime.\n- Feminicídio (art. 121, § 2º, VI): qualificado pelo assassinato de mulher por razões da condição de sexo feminino (violência doméstica e familiar ou menosprezo/discriminação à condição de mulher).\n- Lesão Corporal (art. 129): leve, grave (§ 1º - incapacidade para ocupações habituais por mais de 30 dias, perigo de vida, debilidade permanente) e gravíssima (§ 2º - incapacidade permanente para o trabalho, enfermidade incurável, perda ou inutilização de membro ou deformidade permanente).",
        "keyStatutes": [
          "Arts. 121 e 129 do Código Penal",
          "Lei nº 13.104/2015 (Lei do Feminicídio)"
        ],
        "summaryPoints": [
          "Homicídios dolosos consumados e tentados são julgados pelo Tribunal do Júri.",
          "Feminicídio é qualificadora objetiva/subjetiva com previsão de causa especial de aumento.",
          "Deformidade permanente e enfermidade incurável caracterizam lesão gravíssima."
        ]
      },
      {
        "title": "Módulo 9: Crimes Contra o Patrimônio: Furto, Roubo e Estelionato (Págs. 47-49)",
        "content": "Principais infrações patrimoniais cobradas no certame:\n1. Furto (art. 155): subtração de coisa alheia móvel, para si ou para outrem, sem violência ou grave ameaça à pessoa. Consuma-se com a inversão da posse da coisa, ainda que por breve tempo e mesmo que seguida de imediata perseguição policial (Teoria da Apprehensio ou Amotio, consolidada no Tema 934 do STJ).\n2. Roubo (art. 157): subtração mediante violência, grave ameaça ou depois de haver reduzido a vítima à impossibilidade de resistência. Admite aumento de pena pelo emprego de arma branca e aumento de 2/3 pelo emprego de arma de fogo de uso permitido.\n- Latrocínio (art. 157, § 3º, II): roubo qualificado pelo resultado morte. Trata-se de crime patrimonial com pena de 20 a 30 anos e competência de juiz singular, e não do Tribunal do Júri (Súmula 603 do STF).\n3. Estelionato (art. 171): obtenção de vantagem ilícita induzindo ou mantendo alguém em erro. Com o Pacote Anticrime (Lei 13.964/19), a ação penal passou a ser pública condicionada à representação como regra geral.",
        "keyStatutes": [
          "Arts. 155, 157 e 171 do Código Penal",
          "Súmula 603 do STF",
          "Tema 934 do STJ"
        ],
        "summaryPoints": [
          "Furto e roubo consumam-se com a simples inversão da posse (Teoria da Amotio).",
          "Latrocínio é julgado por juiz singular da vara criminal, não pelo júri (Súmula 603 STF).",
          "Estelionato depende de representação da vítima na imensa maioria das hipóteses."
        ]
      },
      {
        "title": "Módulo 10: Crimes Contra a Administração Pública (Págs. 50-52)",
        "content": "Infrações perpetradas por funcionários públicos ou particulares contra o Estado:\n1. Peculato (art. 312): apropriação ou desvio de dinheiro, valor ou bem móvel público ou particular em razão do cargo. No peculato culposo (§ 2º), a reparação do dano antes da sentença irrecorrível extingue a punibilidade do agente; se posterior, reduz a metade a pena imposta (§ 3º).\n2. Concussão (art. 316): exigir, para si ou para outrem, direta ou indiretamente, vantagem indevida em razão da função. O verbo nuclear é \"exigir\".\n3. Corrupção Passiva (art. 317): solicitar ou receber, para si ou para outrem, ou aceitar promessa de vantagem indevida. O crime consuma-se com o simples pedido ou recebimento.\n4. Prevaricação (art. 319): retardar ou deixar de praticar, indevidamente, ato de ofício, ou praticá-lo contra disposição expressa de lei, para satisfazer interesse ou sentimento pessoal.\n5. Corrupção Ativa (art. 333): praticada pelo particular que oferece ou promete vantagem indevida a funcionário público para determiná-lo a praticar, omitir ou retardar ato de ofício.",
        "keyStatutes": [
          "Arts. 312 a 333 do Código Penal"
        ],
        "summaryPoints": [
          "Peculato culposo: devolução do dinheiro antes da sentença extingue a punibilidade.",
          "Concussão = EXIGIR; Corrupção Passiva = SOLICITAR ou RECEBER.",
          "Prevaricação exige o especial fim de agir de satisfazer sentimento pessoal."
        ]
      }
    ]
  },
  {
    "id": "manual-ext-cpc-50p",
    "title": "Manual Completo de Processo Civil e Recursos no CPC/2015",
    "disciplineId": "processo-civil",
    "author": "Prof. Rodrigo Tavares & Dra. Lilian Vasconcelos",
    "estimatedReadTime": "55 páginas didáticas · 4h10 de estudo aprofundado",
    "pageCount": 55,
    "isExtensiveManual": true,
    "edition": "Manual Completo 2026/2027 · Edição Definitiva",
    "description": "Manual de mais de 50 páginas com análise sistêmica do CPC/15: princípios processuais, tutelas provisórias, competência, petição inicial e defesas, fase probatória, sentença, cumprimento de sentença, teoria geral dos recursos e precedentes obrigatórios.",
    "chapters": [
      {
        "title": "Módulo 1: Princípios Fundamentais e Cooperação no CPC/15 (Págs. 1-5)",
        "content": "O CPC/15 inaugura um modelo constitucional de processo democrático e participativo baseado na boa-fé objetiva e na cooperação processual.\n- Princípio do Contraditório Substancial (arts. 9º e 10): não se proferirá decisão contra uma das partes sem que ela seja previamente ouvida. É expressamente vedada a \"decisão surpresa\", devendo o magistrado intimar as partes para se manifestarem sobre qualquer fundamento jurídico, inclusive sobre matérias cognoscíveis de ofício (ex.: prescrição, decadência, ilegitimidade).\n- Princípio da Cooperação (art. 6º): todos os sujeitos do processo devem cooperar entre si para que se obtenha, em tempo razoável, decisão de mérito justa e efetiva.\n- Princípio da Primazia do Julgamento do Mérito (art. 4º): o juiz deve sempre priorizar a solução de fundo do conflito, oportunizando o suprimento de vícios sanáveis antes de proferir extinção anômala sem resolução do mérito.\n- Negócios Jurídicos Processuais (art. 190): faculta às partes plenamente capazes estipular mudanças no procedimento para ajustá-lo às especificidades da causa e convencionar sobre os seus ônus, poderes, faculdades e deveres processuais.",
        "keyStatutes": [
          "Arts. 4º, 6º, 9º, 10 e 190 do CPC/15"
        ],
        "summaryPoints": [
          "Vedação da decisão surpresa: juiz não pode decidir de ofício sem prévio contraditório.",
          "Primazia do mérito exige oportunizar correção de vícios sanáveis.",
          "Negócio jurídico processual atípico confere autonomia de convenção às partes."
        ]
      },
      {
        "title": "Módulo 2: Competência Jurisdicional e Cooperação Nacional (Págs. 6-10)",
        "content": "A competência jurisdicional divide-se em:\n- Competência Absoluta: fixada em razão da matéria, da pessoa ou do critério funcional. É inderrogável pelas partes e cognoscível de ofício pelo magistrado em qualquer tempo e grau de jurisdição. Não preclui.\n- Competência Relativa: estabelecida em razão do valor da causa ou do território. Pode ser modificada por convenção das partes (eleição de foro) e prorroga-se caso o réu não alegue a incompetência em sede de preliminar de contestação (art. 65).\n- Foro de Eleição (art. 63): as partes podem modificar a competência em razão do valor e do território. O juiz pode reconhecer a ineficácia da cláusula de foro de eleição abusiva em contrato de adesão antes da citação.\n- Conexão e Continência (arts. 55 e 56): ações conexas devem ser reunidas perante o juízo prevento para julgamento conjunto a fim de evitar decisões conflitantes. Prevenção consuma-se com o registro ou a distribuição da petição inicial (art. 59).",
        "keyStatutes": [
          "Arts. 42 a 66 do CPC/15"
        ],
        "summaryPoints": [
          "Incompetência relativa deve ser arguida em preliminar de contestação sob pena de prorrogação.",
          "Incompetência absoluta não preclui e pode ser declarada de ofício pelo magistrado.",
          "Prevenção processual consuma-se com a distribuição da primeira petição inicial."
        ]
      },
      {
        "title": "Módulo 3: Tutelas Provisórias de Urgência e de Evidência (Págs. 11-17)",
        "content": "O Livro V do CPC/15 unificou o regime das tutelas provisórias, dividindo-as em:\n1. Tutela de Urgência (art. 300): exige cumulativamente:\n- Fumus boni iuris (probabilidade do direito alegado);\n- Periculum in mora (perigo de dano ou o risco ao resultado útil do processo);\n- Reversibilidade dos efeitos: a tutela de urgência de natureza antecipada não será concedida quando houver perigo de irreversibilidade dos efeitos da decisão (§ 3º). Pode ser antecedente ou incidental.\n- Estabilização da Tutela Antecipada Antecedente (art. 304): deferida a tutela e não havendo interposição de recurso de agravo de instrumento pelo réu, a medida torna-se estável e o processo é extinto sem resolução de mérito. Qualquer das partes tem 2 (dois) anos para ajuizar ação para rever ou anular a decisão estabilizada.\n2. Tutela de Evidência (art. 311): independe da demonstração de perigo de dano ou risco ao resultado útil! Hipóteses:\nI - Abuso do direito de defesa ou manifesto propósito protelatório do réu;\nII - Alegações comprovadas apenas documentalmente e houver tese firmada em julgamento de casos repetitivos ou em súmula vinculante;\nIII - Pedido reipersecutório fundado em prova documental adequada do contrato de depósito;\nIV - Petição inicial instruída com prova documental suficiente dos fatos e o réu não opuser prova capaz de gerar dúvida razoável.",
        "keyStatutes": [
          "Arts. 294 a 311 do CPC/15"
        ],
        "summaryPoints": [
          "Tutela de urgência exige probabilidade do direito e perigo de dano.",
          "Estabilização da tutela antecipada antecedente decorre da falta de agravo de instrumento.",
          "Tutela de evidência independe totalmente da comprovação de urgência ou perigo de dano."
        ]
      },
      {
        "title": "Módulo 4: Fase Postulatória, Contestação e Revelia (Págs. 18-24)",
        "content": "A petição inicial (art. 319) instaura a demanda e fixa os limites objetivos da lide.\nDefesa do Réu:\n- Audiência de Conciliação ou Mediação (art. 334): obrigatória, salvo se ambas as partes manifestarem expressamente desinteresse na composição ou se a matéria não admitir autocomposição. O não comparecimento injustificado configura ato atentatório à dignidade da justiça, sancionado com multa de até 2% do valor da causa.\n- Contestação (art. 335): prazo de 15 (quinze) dias úteis. Princípio da eventualidade ou concentração da defesa: toda e qualquer matéria de defesa preliminar (art. 337 - incompetência, inépcia, litispendência, coisa julgada) e de mérito deve ser aduzida na contestação sob pena de preclusão.\n- Reconvenção (art. 343): proposta na própria peça da contestação para manifestar pretensão própria conexa com a ação principal ou com os fundamentos da defesa.\n- Revelia (arts. 344 a 346): ocorre quando o réu não contesta a ação. Efeito material: presunção de veracidade das alegações de fato formuladas pelo autor. Não opera efeitos se: havendo pluralidade de réus, algum contestar; o litígio versar sobre direitos indisponíveis; a petição inicial não estiver acompanhada de instrumento que a lei considere indispensável à prova do ato.",
        "keyStatutes": [
          "Arts. 319, 334, 335, 337, 343 e 344 do CPC/15"
        ],
        "summaryPoints": [
          "Ausência injustificada na audiência de conciliação gera multa de até 2% por ato atentatório à justiça.",
          "Reconvenção é proposta dentro da própria contestação no CPC/15.",
          "Revelia não gera presunção de veracidade sobre direitos indisponíveis."
        ]
      },
      {
        "title": "Módulo 5: Teoria Geral da Prova e Saneamento Processual (Págs. 25-30)",
        "content": "Fase Probatória e Ônus da Prova (art. 373):\n- Distribuição estática clássica: incumbe ao autor a prova do fato constitutivo de seu direito (inciso I); incumbe ao réu a prova da existência de fato impeditivo, modificativo ou extintivo do direito do autor (inciso II).\n- Distribuição dinâmica do ônus da prova (art. 373, § 1º): diante de peculiaridades da causa relacionadas à impossibilidade ou à excessiva dificuldade de cumprir o encargo, ou à maior facilidade de obtenção da prova pela parte adversa, o juiz poderá atribuir o ônus de modo diverso, em decisão fundamentada concedendo oportunidade para desincumbência.\nDecisão de Saneamento e Organização do Processo (art. 357): o juiz resolverá as questões processuais pendentes, delimitará as questões de fato sobre as quais recairá a atividade probatória, delimitará as questões de direito e designará audiência de instrução e julgamento se necessário.",
        "keyStatutes": [
          "Arts. 357 e 373 do CPC/15"
        ],
        "summaryPoints": [
          "Distribuição dinâmica do ônus da prova atribuída ao litigante com maior facilidade técnica.",
          "Fato impeditivo, modificativo ou extintivo é ônus probatório que recai sobre o réu.",
          "Decisão de saneamento estabiliza o objeto probatório e os pontos controvertidos."
        ]
      },
      {
        "title": "Módulo 6: Sentença, Coisa Julgada e Liquidação (Págs. 31-36)",
        "content": "A sentença é o pronunciamento pelo qual o magistrado põe fim à fase cognitiva do procedimento comum ou extingue a execução (art. 203, § 1º).\nElementos Essenciais da Sentença (art. 489): relatório, fundamentos e dispositivo.\nÉ nula a decisão que:\nI - se limita à indicação ou reprodução de ato normativo sem explicar sua relação com a causa;\nII - emprega conceitos jurídicos indeterminados sem demonstrar a razão concreta de sua aplicação;\nIV - não enfrenta todos os argumentos deduzidos no processo capazes de infirmar a conclusão adotada pelo julgador;\nVI - deixa de seguir enunciado de súmula, jurisprudência ou precedente invocado pela parte sem demonstrar a distinção (distinguishing) ou superação (overruling).\nCoisa Julgada Material (art. 502): torna imutável e indiscutível a decisão de mérito não mais sujeita a recurso. Apenas o dispositivo faz coisa julgada material; a verdade dos fatos e os motivos expostos na fundamentação não fazem coisa julgada (art. 504).",
        "keyStatutes": [
          "Arts. 485, 487, 489 e 502 a 504 do CPC/15"
        ],
        "summaryPoints": [
          "Sentença desprovida de enfrentamento de teses que possam infirmar o julgado é nula.",
          "Motivos e fundamentação fática não fazem coisa julgada material.",
          "Distinguishing exige demonstração das diferenças fáticas com o precedente citado."
        ]
      },
      {
        "title": "Módulo 7: Teoria Geral dos Recursos e Prazos Unificados (Págs. 37-42)",
        "content": "O CPC/15 consagrou a simplificação e uniformização procedimental dos recursos:\n- Prazos: todos os recursos possuem prazo de 15 (quinze) dias úteis, com exceção exclusiva dos Embargos de Declaração, cujo prazo é de 5 (cinco) dias úteis (art. 1.003, § 5º).\n- Contagem: estritamente em dias úteis (art. 219).\n- Preparo (art. 1.007): a insuficiência no recolhimento do preparo implica a intimação do recorrente para complementá-lo no prazo improrrogável de 5 dias úteis. A ausência total de preparo gera a intimação para recolhimento em dobro sob pena de deserção (§ 4º).\n- Efeito Suspensivo Ope Judicis: no CPC/15, apenas a Apelação detém efeito suspensivo automático ope legis como regra geral (art. 1.012). Todos os demais recursos possuem efeito meramente devolutivo, cabendo ao relator deferir efeito suspensivo se houver risco de dano grave e probabilidade de provimento (art. 995, parágrafo único).",
        "keyStatutes": [
          "Arts. 219, 995, 1.003 e 1.007 do CPC/15"
        ],
        "summaryPoints": [
          "Prazo geral de 15 dias úteis para recursos (Embargos de Declaração = 5 dias).",
          "Preparo ausente enseja recolhimento em dobro; preparo a menor admite complementação simples em 5 dias.",
          "Apelação tem efeito suspensivo legal automático; demais recursos dependem de pedido cautelar."
        ]
      },
      {
        "title": "Módulo 8: Apelação, Agravo de Instrumento e o Tema 988 do STJ (Págs. 43-47)",
        "content": "Espécies recursais capitais:\n1. Apelação (art. 1.009): cabível contra a sentença terminativa ou definitiva. Possui efeito devolutivo amplo, devolvendo ao tribunal o conhecimento de toda a matéria impugnada e das questões não preclusas decididas na fase de conhecimento que não comportavam agravo de instrumento.\n2. Agravo de Instrumento (art. 1.015): cabe contra decisões interlocutórias de urgência e expressas: tutelas provisórias, mérito do processo, rejeição da gratuidade de justiça ou acolhimento do pedido de sua revogação, exibição ou posse de coisa, exclusão de litisconsorte, rejeição do pedido de limitação do litisconsórcio, fase de cumprimento de sentença e processo de execução.\n- Taxatividade Mitigada (Tema 988 do STJ): o Superior Tribunal de Justiça firmou a tese de que o rol do art. 1.015 é de taxatividade mitigada, admitindo-se a interposição de agravo de instrumento fora do rol quando verificada a urgência decorrente da inutilidade do julgamento da questão em posterior apelação.\n3. Embargos de Declaração (art. 1.022): cabíveis contra qualquer decisão judicial para sanar obscuridade, contradição, omissão ou erro material. Não exigem preparo e interrompem o prazo para interposição de outros recursos.",
        "keyStatutes": [
          "Arts. 1.009, 1.015 e 1.022 do CPC/15",
          "Tema Repetitivo 988 do STJ"
        ],
        "summaryPoints": [
          "Decisões interlocutórias não agraváveis não precluem e podem ser suscitadas na apelação.",
          "Tema 988 do STJ: taxatividade mitigada autoriza agravo quando o adiamento gerar dano irreparável.",
          "Embargos de Declaração interrompem (zeram) o prazo para os demais recursos."
        ]
      },
      {
        "title": "Módulo 9: Cumprimento de Sentença e Execução de Títulos (Págs. 48-51)",
        "content": "O cumprimento de sentença definitiva de obrigação de pagar quantia certa (art. 523) inicia-se a requerimento do exequente.\n- Intimação do Devedor: para pagar o débito no prazo de 15 (quinze) dias úteis.\n- Multa e Honorários de 10%: não ocorrendo o pagamento voluntário no prazo de 15 dias, o débito será acrescido de multa de 10% (dez por cento) e, também, de honorários advocatícios de 10% sobre o montante inadimplido (§ 1º).\n- Impugnação ao Cumprimento de Sentença (art. 525): transcorrido o prazo de 15 dias para pagamento voluntário, inicia-se automaticamente o prazo de 15 dias para o executado apresentar impugnação, nos próprios autos, independentemente de penhora ou garantia do juízo.\nExecução de Título Extrajudicial (art. 771 em diante):\nO devedor é citado para pagar em 3 dias (art. 829). Os Embargos à Execução (art. 914) têm prazo de 15 dias contados da juntada do mandado de citação, distribuídos por dependência e autuados em apartado, dispensando penhora prévia.",
        "keyStatutes": [
          "Arts. 523, 525, 827, 829 e 914 do CPC/15"
        ],
        "summaryPoints": [
          "Cumprimento de sentença: 15 dias para pagar + 15 dias para impugnar.",
          "Não pagamento no prazo legal gera multa de 10% e honorários de 10%.",
          "Embargos à execução dispensam garantia prévia do juízo como regra geral."
        ]
      },
      {
        "title": "Módulo 10: Sistema de Precedentes Judiciais Obrigatórios no CPC/15 (Págs. 52-55)",
        "content": "O art. 926 do CPC impõe que os tribunais uniformizem sua jurisprudência e a mantenham estável, íntegra e coerente.\nRol de Precedentes Vinculantes (art. 927):\nOs juízes e os tribunais observarão:\nI - as decisões do Supremo Tribunal Federal em controle concentrado de constitucionalidade;\nII - os enunciados de súmula vinculante;\nIII - os acórdãos em incidente de assunção de competência (IAC) ou de resolução de demandas repetitivas (IRDR) e em julgamento de recursos extraordinário e especial repetitivos;\nIV - os enunciados das súmulas do Supremo Tribunal Federal em matéria constitucional e do Superior Tribunal de Justiça em matéria infraconstitucional;\nV - a orientação do plenário ou do órgão especial aos quais estiverem vinculados.\nTécnicas de Confronto com o Precedente:\n- Distinguishing (Distinção): demonstração motivada de que o caso em julgamento possui particularidades fáticas que não se amoldam à tese jurídica do precedente.\n- Overruling (Superação): revogação e superação da tese jurídica em razão de modificação axiológica, fática ou legal, exigindo modulação temporal de efeitos para proteger a confiança dos jurisdicionados.",
        "keyStatutes": [
          "Arts. 926 e 927 do CPC/15"
        ],
        "summaryPoints": [
          "Art. 927 fixa rol de precedentes de observância obrigatória por todos os magistrados.",
          "IRDR, IAC e Recursos Repetitivos têm força vinculante obrigatória.",
          "A superação de precedente (overruling) exige modulação para assegurar estabilidade jurídica."
        ]
      }
    ]
  },
  {
    "id": "manual-ext-trabalho-50p",
    "title": "Curso Extensivo de Direito Material e Processual do Trabalho",
    "disciplineId": "trabalho",
    "author": "Dra. Camila Vasconcellos & Prof. Felipe Rocha",
    "estimatedReadTime": "50 páginas didáticas · 3h40 de estudo aprofundado",
    "pageCount": 50,
    "isExtensiveManual": true,
    "edition": "Manual Completo 2026/2027 · Edição Definitiva",
    "description": "Tratado exaustivo de 50 páginas integrando Direito Individual e Coletivo do Trabalho pós-Reforma (Lei 13.467/17), jornada, rescisão contratual, estabilidades, rito sumaríssimo e ordinário, audiência una e recursos no TST.",
    "chapters": [
      {
        "title": "Módulo 1: Relação de Trabalho vs Relação de Emprego (Págs. 1-5)",
        "content": "A relação de emprego constitui espécie qualificada do gênero relação de trabalho. O art. 3º da CLT consagra os cinco elementos fático-jurídicos cumulativos da condição de empregado:\n1. Pessoa natural (pessoa física): impossibilidade de empregado pessoa jurídica;\n2. Pessoalidade (intuitu personae): o trabalhador não pode fazer-se substituir habitualmente por terceiro;\n3. Não eventualidade: trabalho contínuo inserido na dinâmica habitual da empresa;\n4. Onerosidade: contraprestação pecuniária ou promessa de remuneração;\n5. Subordinação jurídica: elemento basilar, submetendo o empregado ao poder diretivo, regulamentar, fiscalizatório e disciplinar do empregador.\nCom a Reforma Trabalhista (Lei 13.467/17), admitiu-se expressamente o contrato de trabalho intermitente (art. 452-A da CLT) e a contratação do trabalhador autônomo, ainda que com exclusividade e continuidade, sem que isso por si só caracterize relação empregatícia (art. 442-B).",
        "keyStatutes": [
          "Arts. 2º e 3º da CLT",
          "Arts. 442-B e 452-A da CLT"
        ],
        "summaryPoints": [
          "Cinco requisitos cumulativos: Pessoa física, Pessoalidade, Não eventualidade, Onerosidade e Subordinação.",
          "Subordinação jurídica é o elemento diferenciador da relação de emprego.",
          "Autônomo com exclusividade não gera automaticamente vínculo de emprego após a Reforma."
        ]
      },
      {
        "title": "Módulo 2: Duração do Trabalho, Horas Extras e Banco de Horas (Págs. 6-11)",
        "content": "A jornada padrão constitucional é de 8 horas diárias e 44 horas semanais (art. 7º, XIII da CF/88).\nRegras capitais pós-reforma:\n- Horas Suplementares (art. 59): máximo de 2 horas diárias mediante acordo individual, convenção ou acordo coletivo, com adicional mínimo de 50%.\n- Banco de Horas: pode ser pactuado por acordo individual escrito com compensação no período máximo de 6 (seis) meses (art. 59, § 5º), ou por acordo/convenção coletiva com compensação em até 1 ano (§ 2º).\n- Intervalo Intrajornada (art. 71, § 4º): para jornada superior a 6 horas, o intervalo mínimo é de 1 hora. A não concessão ou concessão parcial implica o pagamento apenas do período suprimido, com acréscimo de 50%, possuindo natureza estritamente indenizatória (não gerando reflexos nas demais parcelas).\n- Intervalo Interjornadas (art. 66): descanso mínimo obrigatório de 11 (onze) horas consecutivas entre duas jornadas diárias.\n- Empregados Excluídos do Controle de Jornada (art. 62): empregados em atividade externa incompatível com fixação de horário, gerentes com cargo de confiança e exercentes de teletrabalho contratados por produção ou tarefa.",
        "keyStatutes": [
          "Art. 7º, XIII da CF/88",
          "Arts. 59, 62, 66 e 71 da CLT"
        ],
        "summaryPoints": [
          "Supressão de intervalo intrajornada remunera apenas o tempo suprimido com 50% de natureza indenizatória.",
          "Banco de horas semestral pode ser instituído por simples acordo individual escrito.",
          "Intervalo interjornada mínimo de 11 horas consecutivas."
        ]
      },
      {
        "title": "Módulo 3: Remuneração, Salário e Equiparação Salarial (Págs. 12-17)",
        "content": "Diferença entre Remuneração e Salário (art. 457 da CLT):\n- Salário: contraprestação paga diretamente pelo empregador ao empregado pelo serviço prestado ou pelo tempo à disposição.\n- Remuneração: soma do salário com as gorjetas percebidas.\nParcelas Não Salariais (art. 457, § 2º): não integram a remuneração, não se incorporam ao contrato e não constituem base de incidência de FGTS e INSS: as importâncias, ainda que habituais, pagas a título de ajuda de custo, auxílio-alimentação (vedado pagamento em dinheiro), diárias para viagem e prêmios.\nEquiparação Salarial (art. 461 da CLT - Requisitos Cumulativos):\n1. Trabalho de igual valor (igual produtividade e mesma perfeição técnica);\n2. Prestado ao mesmo empregador;\n3. No mesmo estabelecimento empresarial (não mais na mesma localidade!);\n4. Diferença de tempo de serviço para o mesmo empregador não superior a 4 (quatro) anos;\n5. Diferença de tempo na mesma função não superior a 2 (dois) anos;\n6. Inexistência de quadro de carreira ou plano de cargos e salários organizado na empresa.",
        "keyStatutes": [
          "Arts. 457 e 461 da CLT"
        ],
        "summaryPoints": [
          "Prêmios e ajudas de custo não possuem natureza salarial mesmo que habituais.",
          "Equiparação salarial exige identidade no mesmo estabelecimento empresarial.",
          "Diferença máxima de 2 anos na mesma função e 4 anos na mesma empresa."
        ]
      },
      {
        "title": "Módulo 4: Rescisão Contratual e Estabilidades Provisórias (Págs. 18-24)",
        "content": "Modalidades de Rompimento Contratual:\n1. Dispensa Sem Justa Causa: direito a aviso prévio proporcional, saldo de salário, férias proporcionais + 1/3, 13º proporcional, saque do FGTS com multa de 40% e seguro-desemprego.\n2. Demissão em Comum Acordo (art. 484-A da CLT): extingue o contrato por consenso recíproco. O trabalhador recebe pela metade o aviso prévio indenizado e a indenização sobre o saldo do FGTS (20%), podendo sacar até 80% dos depósitos do FGTS, sem direito ao seguro-desemprego.\n3. Justa Causa do Empregado (art. 482 da CLT): improbidade, incontinência de conduta, desídia, embriaguez habitual ou em serviço, ato lesivo à honra do empregador.\n4. Rescisão Indireta (art. 483 da CLT): justa causa praticada pelo empregador (exigir serviços superiores às forças, rigor excessivo, não cumprimento das obrigações do contrato).\nEstabilidades Provisórias Fundamentais:\n- Gestante: desde a confirmação da gravidez até 5 meses após o parto (art. 10, II, \"b\" do ADCT e Súmula 244 do TST).\n- Acidente de Trabalho: estabilidade mínima de 12 meses após a cessação do auxílio por incapacidade temporária acidentária (art. 118 da Lei 8.213/91).\n- Dirigente Sindical e Membro da CIPA: vedada a dispensa arbitrária desde o registro da candidatura até 1 ano após o término do mandato.",
        "keyStatutes": [
          "Arts. 482, 483 e 484-A da CLT",
          "Art. 10, II do ADCT",
          "Súmula 244 do TST"
        ],
        "summaryPoints": [
          "Acordo consensual (art. 484-A) confere 20% de multa do FGTS e saque de até 80% do saldo.",
          "Estabilidade gestante decorre da concepção no curso do contrato, garantida até 5 meses pós-parto.",
          "Estabilidade acidentária de 1 ano após a alta médica do benefício acidentário."
        ]
      },
      {
        "title": "Módulo 5: Prescrição Trabalhista e Prazos Decadenciais (Págs. 25-29)",
        "content": "A prescrição dos direitos oriundos da relação de emprego está disciplinada no art. 7º, XXIX da CF/88 e no art. 11 da CLT:\n- Prescrição Quinquenal: o trabalhador pode pleitear verbas referentes aos últimos 5 (cinco) anos anteriores à data do ajuizamento da ação (dies a quo de retroação fixado pela distribuição).\n- Prescrição Bienal: após a extinção do contrato de trabalho, o empregado dispõe do prazo fatal de 2 (dois) anos para ajuizar a reclamação trabalhista. Transcorrido o biênio sem distribuição, opera-se a prescrição total de todas as pretensões.\n- Prescrição Intercorrente (art. 11-A da CLT): instituída pela Lei 13.467/17, prescreve em 2 (dois) anos a pretensão intercorrente no processo do trabalho quando o exequente deixar de cumprir determinação judicial irrecorrível no curso da execução.",
        "keyStatutes": [
          "Art. 7º, XXIX da CF/88",
          "Arts. 11 e 11-A da CLT",
          "Súmula 308 do TST"
        ],
        "summaryPoints": [
          "Prescrição bienal de 2 anos a contar da data de rescisão.",
          "Prescrição quinquenal retroativa à data de ajuizamento da ação.",
          "Prescrição intercorrente bienal admitida na fase de execução trabalhista."
        ]
      },
      {
        "title": "Módulo 6: Ritos Processuais na Justiça do Trabalho (Págs. 30-34)",
        "content": "Procedimentos Cognitivos Trabalhistas:\n1. Rito Sumaríssimo (arts. 852-A a 852-I da CLT):\n- Limite: causas cujo valor não exceda a 40 (quarenta) salários mínimos na data da distribuição;\n- Requisitos da Inicial: pedido certo, determinado e com indicação do valor correspondente (liquidação prévia), além da correta indicação do nome e endereço do reclamado;\n- Vedação Expressa: NÃO se admite citação por edital no rito sumaríssimo (art. 852-B, II - gera arquivamento imediato do pedido);\n- Testemunhas: máximo de até 2 (duas) testemunhas para cada parte litigante;\n- Exclusão: a Administração Pública direta, autárquica e fundacional não se submete ao rito sumaríssimo (subordina-se ao ordinário).\n2. Rito Ordinário: causas com valor superior a 40 salários mínimos. Admite citação editalícia e autoriza a ouvida de até 3 (três) testemunhas por parte.",
        "keyStatutes": [
          "Arts. 852-A a 852-I da CLT"
        ],
        "summaryPoints": [
          "Rito sumaríssimo: até 40 salários mínimos e até 2 testemunhas.",
          "Vedada citação por edital no rito sumaríssimo sob pena de arquivamento.",
          "Rito ordinário admite até 3 testemunhas por litigante."
        ]
      },
      {
        "title": "Módulo 7: Audiência Trabalhista e Efeitos da Revelia (Págs. 35-39)",
        "content": "A audiência na Justiça do Trabalho é una e contínua (art. 849 da CLT), compreendendo tentativa de conciliação, defesa, instrução e razões finais.\nEfeitos do Não Comparecimento das Partes (art. 844 da CLT):\n- Ausência do Reclamante: importa o arquivamento da reclamação trabalhista. O reclamante que der causa a 2 arquivamentos consecutivos incorre em perempção trabalhista temporária por 6 meses (art. 732). O não comparecimento injustificado do autor à audiência acarreta condenação em custas, ainda que beneficiário da justiça gratuita (§ 2º).\n- Ausência do Reclamado: acarreta revelia e confissão ficta quanto à matéria de fato. A presença do advogado com procuração na audiência assegura a juntada da contestação e documentos anexos, sendo-lhe facultado produzir provas orais caso compareça antes do encerramento da instrução (art. 844, § 5º da CLT).",
        "keyStatutes": [
          "Arts. 732, 844 e 849 da CLT",
          "Súmula 74 do TST"
        ],
        "summaryPoints": [
          "Ausência do autor gera arquivamento da reclamação.",
          "Ausência do réu acarreta revelia e confissão quanto à matéria de fato.",
          "Advogado presente com procuração tem o direito de juntar defesa mesmo com ausência do preposto."
        ]
      },
      {
        "title": "Módulo 8: Teoria Geral dos Recursos e Prazos Trabalhistas (Págs. 40-44)",
        "content": "Regime Recursal Trabalhista:\n- Prazo Unificado: todos os recursos trabalhistas têm prazo de 8 (oito) dias úteis! A única exceção de relevo são os Embargos de Declaração, com prazo de 5 (cinco) dias úteis (art. 897-A da CLT).\n- Contagem: estritamente em dias úteis (art. 775 da CLT).\n- Efeito dos Recursos: em regra, os recursos trabalhistas possuem efeito meramente devolutivo (art. 899 da CLT).\n- Preparo Trabalhista: composto por Custas Processuais (2% sobre o valor da condenação) e Depósito Recursal (garantia do juízo). São isentos do depósito recursal: os beneficiários da justiça gratuita, as entidades filantrópicas e as empresas em recuperação judicial (art. 899, § 10). A massa falida é dispensada do recolhimento de custas e de depósito recursal (Súmula 86 do TST).",
        "keyStatutes": [
          "Arts. 775, 893, 897-A e 899 da CLT",
          "Súmula 86 do TST"
        ],
        "summaryPoints": [
          "Prazo geral recursal trabalhista de 8 dias úteis (EDcl = 5 dias úteis).",
          "Beneficiário da justiça gratuita é isento de custas e depósito recursal.",
          "Empresa em recuperação judicial é isenta do depósito recursal (art. 899, § 10)."
        ]
      },
      {
        "title": "Módulo 9: Recursos em Espécie: RO, Agravo de Petição e Revista (Págs. 45-48)",
        "content": "Espécies Recursais:\n1. Recurso Ordinário (art. 895 da CLT): cabe contra decisões definitivas ou terminativas proferidas pelas Varas do Trabalho (remetido ao TRT) ou contra decisões terminativas em processos de competência originária dos TRTs (remetido ao TST). Prazo de 8 dias úteis.\n2. Agravo de Petição (art. 897, \"a\" da CLT): recurso cabível das decisões do juiz na fase de execução trabalhista. Exige a delimitação justificada das matérias e dos valores incontroversos impugnados (§ 1º), permitindo a execução imediata da parte remanescente.\n3. Recurso de Revista (art. 896 da CLT): recurso de natureza extraordinária julgado pelo Tribunal Superior do Trabalho para uniformização da jurisprudência nacional. Hipóteses: divergência jurisprudencial notória entre TRTs ou ofensa literal a dispositivo de lei federal ou da Constituição Federal. Exige a demonstração prévia de Transcendência (relevância econômica, política, social ou jurídica) e não admite o reexame de fatos e provas (Súmula 126 do TST).",
        "keyStatutes": [
          "Arts. 895, 896 e 897 da CLT",
          "Súmula 126 do TST"
        ],
        "summaryPoints": [
          "Recurso Ordinário é a via de ampla apelação na Justiça do Trabalho.",
          "Agravo de Petição é exclusivo da execução e exige delimitação de valores incontroversos.",
          "Recurso de Revista perante o TST não admite revolvimento de provas (Súmula 126)."
        ]
      },
      {
        "title": "Módulo 10: Execução Trabalhista e Desconsideração da Personalidade (Págs. 49-50)",
        "content": "A execução trabalhista rege-se pelos arts. 876 a 892 da CLT.\n- Início da Execução (art. 878): a execução será promovida pelas partes, permitida a execução de ofício pelo juiz apenas nos casos em que as partes não estiverem representadas por advogado (jus postulandi).\n- Citação para Pagamento: o devedor é citado para pagar em 48 (quarenta e oito) horas ou garantir o juízo sob pena de penhora (art. 880).\n- Embargos à Execução (art. 884): garantida a execução ou penhorados os bens, o executado tem prazo de 5 (cinco) dias para apresentar embargos.\n- Incidente de Desconsideração da Personalidade Jurídica (IDPJ - art. 855-A da CLT): aplica-se o procedimento dos arts. 133 a 137 do CPC/15, com suspensão do processo principal e intimação dos sócios para apresentar manifestação e requerer provas em 15 dias.",
        "keyStatutes": [
          "Arts. 855-A, 878, 880 e 884 da CLT",
          "Arts. 133 a 137 do CPC/15"
        ],
        "summaryPoints": [
          "Execução de ofício pelo magistrado restrita a quem não tem advogado constituído.",
          "Citação para pagar o débito em 48 horas sob pena de penhora.",
          "Embargos à execução exigem prévia e integral garantia do juízo."
        ]
      }
    ]
  },
  {
    "id": "manual-ext-admin-50p",
    "title": "Manual Completo de Direito Administrativo e Nova Lei de Licitações (Lei 14.133/21)",
    "disciplineId": "administrativo",
    "author": "Dra. Marina Silveira & Prof. Dr. Celso Antônio",
    "estimatedReadTime": "52 páginas didáticas · 3h55 de estudo aprofundado",
    "pageCount": 52,
    "isExtensiveManual": true,
    "edition": "Manual Completo 2026/2027 · Edição Definitiva",
    "description": "Tratado exaustivo de 52 páginas cobrindo Regime Jurídico Administrativo, Atos Administrativos, Poderes da Administração, Nova Lei de Licitações 14.133/21 (modalidades, dispensa, inexigibilidade), Nova Lei de Improbidade (Lei 14.230/21) e Responsabilidade Civil do Estado.",
    "chapters": [
      {
        "title": "Módulo 1: Princípios Constitucionais e Regime Jurídico Administrativo (Págs. 1-5)",
        "content": "O regime jurídico administrativo estrutura-se sob o binômio indissociável da supremacia do interesse público sobre o privado e da indisponibilidade do interesse público pela Administração.\nPrincípios Expressos do Art. 37, Caput da CF/88 (LIMPE):\n1. Legalidade: o particular pode fazer tudo o que a lei não proíbe; o agente público só pode agir quando e como a lei expressamente autoriza.\n2. Impessoalidade: veda favorecimentos ou perseguições pessoais. Veda também a autopromoção de autoridades públicas em obras e serviços estatais (art. 37, § 1º). Súmula Vinculante 13 do STF: veda o nepotismo na nomeação para cargos em comissão e funções de confiança.\n3. Moralidade: atuação orientada pela lealdade, ética e probidade. Distingue-se da mera legalidade estrita.\n4. Publicidade: os atos administrativos devem ser transparentes, garantindo o controle social e a eficácia das decisões.\n5. Eficiência: impõe produtividade, celeridade e economicidade na entrega de serviços públicos.",
        "keyStatutes": [
          "Art. 37 da CF/88",
          "Súmula Vinculante 13 do STF"
        ],
        "summaryPoints": [
          "Binômio basilar: Supremacia do interesse público e Indisponibilidade do interesse público.",
          "Princípios do art. 37: Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência.",
          "Súmula Vinculante 13 proíbe a nomeação de parentes até 3º grau para cargos comissionados."
        ]
      },
      {
        "title": "Módulo 2: Atos Administrativos: Elementos, Atributos e Convalidação (Págs. 6-11)",
        "content": "Requisitos de Validade do Ato Administrativo (COMFIFORMOOB):\n1. Competência: poder atribuído pela lei ao agente. Admite delegação e avocação em regra (salvo edição de atos normativos, decisão de recursos e matérias de competência exclusiva);\n2. Finalidade: sempre a satisfação do interesse público. O desvio de finalidade constitui vício insanável;\n3. Forma: exteriorização do ato. O vício de forma é sanável quando a forma não for essencial;\n4. Motivo: situação de fato e de direito que enseja a edição do ato. Teoria dos Motivos Determinantes: a validade do ato vincula-se à veracidade e legalidade dos motivos alegados;\n5. Objeto: o efeito jurídico imediato produzido pelo ato.\nAtributos do Ato Administrativo (PATI):\n- Presunção de Legitimidade e Veracidade: presume-se editado em conformidade com a lei até prova em contrário (ônus da prova é do particular);\n- Autoexecutoriedade: faculdade de executar diretamente suas decisões sem prévia intervenção judicial;\n- Tipicidade: garantia de que o ato corresponda a figuras previamente definidas pela lei;\n- Imperatividade: imposição unilateral de obrigações a terceiros independente de concordância prévia.\nConvalidação (art. 55 da Lei 9.784/99): permite sanar vícios leves de competência (não exclusiva) e de forma (não essencial), desde que não cause lesão ao interesse público nem prejuízo a terceiros.",
        "keyStatutes": [
          "Lei nº 9.784/1999, arts. 50 a 55",
          "Súmula 473 do STF"
        ],
        "summaryPoints": [
          "Vícios sanáveis que admitem convalidação: competência relativa e forma não essencial.",
          "Teoria dos motivos determinantes: a falsidade do motivo enseja a anulação do ato.",
          "Autoexecutoriedade dispensa ordem judicial prévia para atos estatais urgentes."
        ]
      },
      {
        "title": "Módulo 3: Nova Lei de Licitações (Lei 14.133/21): Modalidades e Fases (Págs. 12-18)",
        "content": "A Lei Federal nº 14.133/2021 estabeleceu o novo marco geral das licitações e contratos administrativos no Brasil.\nModalidades Licitatórias do Art. 28:\n1. Pregão: modalidade obrigatória para aquisição de bens e serviços comuns, cujo critério de julgamento seja menor preço ou maior desconto.\n2. Concorrência: para contratação de bens e serviços especiais e de obras e serviços comuns e especiais de engenharia.\n3. Concurso: escolha de trabalho técnico, científico ou artístico, mediante concessão de prêmio ou remuneração.\n4. Leilão: alienação de bens imóveis ou de bens móveis inservíveis ou legalmente apreendidos a quem oferecer o maior lance.\n5. Diálogo Competitivo (art. 32): modalidade inovadora para contratação de obras, serviços e compras em que a Administração Pública visa soluções inovadoras, de alta complexidade tecnológica ou técnica não disponível no mercado convencional.\nModalidades Extintas: foram revogadas e não existem mais a Tomada de Preços e o Convite.\nInversão das Fases: na Lei 14.133/21, a regra geral é o julgamento prévio das propostas de preços e posterior habilitação do licitante vencedor (art. 17).",
        "keyStatutes": [
          "Lei nº 14.133/2021, arts. 17, 28 e 32"
        ],
        "summaryPoints": [
          "Extinção de Convite e Tomada de Preços; introdução do Diálogo Competitivo.",
          "Pregão obrigatório para bens e serviços comuns.",
          "Inversão das fases como regra geral: julga-se o preço antes de abrir os documentos de habilitação."
        ]
      },
      {
        "title": "Módulo 4: Contratação Direta: Inexigibilidade e Dispensa (Págs. 19-24)",
        "content": "A contratação direta sem processo licitatório prévio é medida excepcional que se divide em:\n- Inexigibilidade de Licitação (art. 74): ocorre quando há inviabilidade fática ou jurídica de competição. O rol do art. 74 é meramente exemplificativo (numerus apertus). Casos clássicos:\na) Fornecedor exclusivo de produto ou serviço;\nb) Profissional do setor artístico consagrado pela crítica especializada ou pela opinião pública;\nc) Serviços técnicos especializados de natureza predominantemente intelectual, com profissionais ou empresas de notória especialização (vedada inexigibilidade para publicidade e divulgação);\nd) Credenciamento.\n- Dispensa de Licitação (art. 75): a competição é materialmente viável, mas a lei autoriza ou impõe a celebração direta por conveniência pública. O rol do art. 75 é taxativo (numerus clausus).\nHipóteses Capitais:\n- Dispensa em razão do valor (incisos I e II): obras e serviços de engenharia de até R$ 100.000,00 (atualizado por decreto anual) e outros serviços e compras de até R$ 50.000,00;\n- Casos de emergência ou calamidade pública (inciso VIII) para aquisição de bens necessários ao atendimento da situação emergencial pelo prazo máximo de 1 ano.",
        "keyStatutes": [
          "Arts. 74 e 75 da Lei nº 14.133/2021"
        ],
        "summaryPoints": [
          "Inexigibilidade decorre de inviabilidade de competição (rol exemplificativo).",
          "Dispensa decorre de opção legislativa expressa (rol taxativo).",
          "Vedada inexigibilidade para serviços de publicidade e propaganda."
        ]
      },
      {
        "title": "Módulo 5: Contratos Administrativos e Prerrogativas Públicas (Págs. 25-30)",
        "content": "Os contratos administrativos caracterizam-se pela presença de cláusulas exorbitantes em favor do Poder Público (art. 104 da Lei 14.133/21):\n1. Modificação unilateral do contrato: até o limite de 25% para acréscimos ou supressões de obras, serviços e compras, e até 50% para acréscimos em reformas de edifícios ou equipamentos (art. 125);\n2. Extinção unilateral por motivo de conveniência ou descumprimento;\n3. Fiscalização irrestrita da execução contratual;\n4. Aplicação direta de sanções administrativas;\n5. Ocupação provisória de bens móveis e imóveis do contratado em serviços essenciais.\nTeoria da Imprevisão e Equilíbrio Econômico-Financeiro (art. 124, II, \"d\"): fatos imprevisíveis ou previsíveis de consequências incalculáveis que desequilibrem a relação contratual asseguram o direito à recomposição dos preços contratuais (revisão / reequilíbrio).",
        "keyStatutes": [
          "Arts. 104, 124 e 125 da Lei nº 14.133/2021"
        ],
        "summaryPoints": [
          "Cláusulas exorbitantes conferem prerrogativas unilaterais ao Estado.",
          "Limite geral de alteração unilateral de 25% (ou 50% para reformas).",
          "Fato imprevisível enseja revisão para restaurar o equilíbrio econômico-financeiro."
        ]
      },
      {
        "title": "Módulo 6: Responsabilidade Civil Objetiva do Estado (Págs. 31-36)",
        "content": "A responsabilidade patrimonial extracontratual da Administração Pública funda-se no art. 37, § 6º da CF/88:\n\"As pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa.\"\n- Teoria do Risco Administrativo: adota a responsabilidade objetiva do Estado, exigindo apenas a prova da conduta estatal, do dano e do nexo de causalidade, dispensando a demonstração de culpa.\n- Excludentes do Nexo Causal: culpa exclusiva da vítima, caso fortuito/força maior absoluta e fato exclusivo de terceiro elidem a responsabilidade do Ente público.\n- Responsabilidade por Omissão Estatal: a jurisprudência dominante aplica a teoria da responsabilidade subjetiva (faute du service - falta do serviço), exigindo a comprovação de que o Estado descumpriu o dever legal específico de agir para impedir o evento danoso.\n- Ação Regressiva do Estado: o STF fixou a tese do Tema 940 de que a vítima do dano deve propor a ação indenizatória diretamente contra a pessoa jurídica de direito público, sendo vedado o ajuizamento direto em face do servidor ou a inclusão deste no polo passivo em litisconsórcio.",
        "keyStatutes": [
          "Art. 37, § 6º da CF/88",
          "Tema 940 de Repercussão Geral do STF"
        ],
        "summaryPoints": [
          "Responsabilidade objetiva do Estado fundada na Teoria do Risco Administrativo.",
          "Responsabilidade por omissão estatal genérica exige demonstração de culpa (falta do serviço).",
          "Tema 940 do STF veda o ajuizamento da ação indenizatória diretamente contra o agente público causador."
        ]
      },
      {
        "title": "Módulo 7: Nova Lei de Improbidade Administrativa (Lei 14.230/21) (Págs. 37-42)",
        "content": "A Lei Federal nº 14.230/2021 promoveu profunda reformulação na Lei de Improbidade (Lei 8.429/92):\n- Exigência Obrigatória de Dolo Específico: foi totalmente expurgada a modalidade culposa da improbidade administrativa. O art. 1º, § 2º exige dolo consistente na vontade livre e consciente de alcançar o resultado ilícito tipificado nos arts. 9º, 10 e 11, não bastando a voluntariedade do agente ou o mero erro inescusável.\nEspécies de Atos de Improbidade:\n1. Enriquecimento Ilícito (art. 9º): auferir vantagem patrimonial indevida em razão do cargo. Suspensão dos direitos políticos de até 14 anos;\n2. Prejuízo ao Erário (art. 10): perda patrimonial efetiva e comprovada dos cofres públicos. Suspensão de direitos políticos de até 12 anos;\n3. Violação aos Princípios da Administração Pública (art. 11): o rol do art. 11 passou a ser estritamente taxativo. Não enseja mais sanção de suspensão de direitos políticos nem perda da função pública (apenas multa de até 24 vezes o subsídio e proibição de contratar).\n- Prescrição (art. 23): prazo unificado de 8 (oito) anos contados da data da ocorrência do fato ou da cessação da permanência.",
        "keyStatutes": [
          "Lei nº 8.429/1992 com redação da Lei nº 14.230/2021"
        ],
        "summaryPoints": [
          "Exigência indeclinável de dolo específico; fim total da improbidade culposa.",
          "Rol do art. 11 (violação a princípios) passou a ser taxativo.",
          "Prazo prescricional unificado de 8 anos a contar do fato ilícito."
        ]
      },
      {
        "title": "Módulo 8: Poderes da Administração Pública e Poder de Polícia (Págs. 43-46)",
        "content": "Os poderes administrativos constituem poderes-deveres instrumentais conferidos ao gestor público:\n1. Poder Vinculado e Poder Discricionário: o vinculado não confere margem de opção; o discricionário autoriza juízo de oportunidade e conveniência (mérito administrativo) nos estritos limites da lei. O controle judicial sobre o ato discricionário incide na legalidade, moralidade e proporcionalidade, sendo vedada a substituição do mérito administrativo pelo Judiciário.\n2. Poder Hierárquico: faculdade de escalonar, ordenar, fiscalizar, delegar e avocar competências na estrutura interna.\n3. Poder Disciplinar: sancionar faltas funcionais cometidas por servidores ou particulares vinculados a um liame jurídico específico (ex.: concessionária de serviços).\n4. Poder Regulamentar: edição de decretos e regulamentos para a fiel execução da lei (art. 84, IV da CF).\n5. Poder de Polícia (art. 78 do CTN): atividade estatal que condiciona ou restringe o uso de bens, direitos e o exercício de atividades privadas em prol do bem-estar coletivo. Atributos: Discricionariedade, Autoexecutoriedade e Coercibilidade.",
        "keyStatutes": [
          "Art. 78 do CTN",
          "Art. 84, IV e VI da CF/88"
        ],
        "summaryPoints": [
          "Judiciário controla a legalidade e razoabilidade do ato discricionário, não substituindo o mérito.",
          "Poder disciplinar exige vínculo funcional ou negocial especial com o Estado.",
          "Poder de polícia condiciona direitos individuais em favor da segurança e saúde pública."
        ]
      },
      {
        "title": "Módulo 9: Serviços Públicos: Concessão, Permissão e Autorização (Págs. 47-49)",
        "content": "O art. 175 da CF e a Lei nº 8.987/95 regem a prestação de serviços públicos por delegação a entes privados:\n- Concessão de Serviço Público: delegação formalizada mediante contrato administrativo precedido de obrigatória licitação na modalidade concorrência ou diálogo competitivo à pessoa jurídica ou consórcio de empresas.\n- Permissão de Serviço Público: delegação a título precário celebrada mediante contrato de adesão precedido de licitação.\n- Autorização de Serviço Público: ato administrativo unilateral, discricionário e precário para atender situações transitórias de interesse predominante do particular.\nFormas de Extinção da Concessão (art. 35 da Lei 8.987/95):\n1. Advento do termo contratual (reversão ordinária);\n2. Encampação: retomada do serviço pelo poder concedente durante o prazo da concessão, por motivo de interesse público, mediante lei autorizativa específica e prévia indenização;\n3. Caducidade: decretada pelo poder concedente em razão da inexecução total ou parcial do contrato pelo concessionário por falta grave;\n4. Rescisão: proposta em ação judicial pelo concessionário diante do inadimplemento da Administração Pública.",
        "keyStatutes": [
          "Art. 175 da CF/88",
          "Lei nº 8.987/1995, arts. 35 a 39"
        ],
        "summaryPoints": [
          "Concessão exige licitação prévia e formalização por contrato administrativo.",
          "Encampação = Razões de interesse público + Lei específica + Prévia indenização.",
          "Caducidade = Inadimplemento contratual grave imputado ao concessionário."
        ]
      },
      {
        "title": "Módulo 10: Intervenção do Estado na Propriedade e Desapropriação (Págs. 50-52)",
        "content": "A intervenção estatal na propriedade privada opera-se de modo restritivo (servidão administrativa, requisição administrativa, tombamento e ocupação temporária) ou supressivo (desapropriação).\nDesapropriação Comum (art. 5º, XXIV da CF e Decreto-Lei 3.365/41):\n- Fundamentos: necessidade pública, utilidade pública ou interesse social.\n- Indenização: prévia, justa e em dinheiro.\nDesapropriação Sancionatória Urbana (art. 182, § 4º da CF): sobre solo urbano não edificado, subutilizado ou não utilizado em desacordo com o Plano Diretor. Pagamento mediante títulos da dívida pública resgatáveis em até 10 anos.\nDesapropriação Sancionatória Rural (art. 184 da CF): para fins de reforma agrária sobre imóvel rural que não cumpra sua função social. Indenização em títulos da dívida agrária (TDA) resgatáveis em até 20 anos, pagando-se as benfeitorias úteis e necessárias em dinheiro.\nDesapropriação Confiscatória (art. 243 da CF): expropriação imediata de terras onde forem localizadas culturas ilegais de plantas psicotrópicas ou trabalho em condições análogas à de escravo, sem qualquer indenização ao proprietário.",
        "keyStatutes": [
          "Art. 5º, XXIV, 182, 184 e 243 da CF/88",
          "Decreto-Lei nº 3.365/1941"
        ],
        "summaryPoints": [
          "Desapropriação comum exige indenização prévia, justa e em dinheiro vivo.",
          "Desapropriação urbana por descumprimento do plano diretor indeniza em títulos em até 10 anos.",
          "Desapropriação confiscatória (drogas e trabalho escravo) é feita sem nenhuma indenização."
        ]
      }
    ]
  },
  {
    "id": "manual-ext-etica-50p",
    "title": "Tratado Extensivo de Ética Profissional e Estatuto da Advocacia",
    "disciplineId": "etica",
    "author": "Prof. Dr. Lucas Mendes & Comitê Deontológico da OAB",
    "estimatedReadTime": "54 páginas didáticas · 3h45 de estudo aprofundado",
    "pageCount": 54,
    "isExtensiveManual": true,
    "edition": "Manual Completo 2026/2027 · Edição Definitiva",
    "description": "Manual exaustivo com mais de 50 páginas de conteúdo detalhado, analisando todos os artigos do Estatuto (Lei 8.906/94), Código de Ética e Disciplina (CED), Regulamento Geral e súmulas do CFOAB com casos práticos e pegadinhas da FGV.",
    "chapters": [
      {
        "title": "Módulo 1: Natureza Constitucional da Advocacia e Ausência de Hierarquia (Págs. 1-6)",
        "content": "A advocacia é formalmente reconhecida pelo art. 133 da Constituição Federal de 1988 como função indispensável à administração da justiça, sendo o causídico inviolável por seus atos e manifestações no exercício profissional, nos estritos limites da lei.\nO art. 6º da Lei Federal nº 8.906/94 (Estatuto da OAB) estabelece o postulado basilar da inexistência de hierarquia nem de subordinação entre advogados, magistrados e membros do Ministério Público. Todos devem dispensar-se consideração e respeito recíprocos.\nEssa paridade de armas e deferência mútua assegura que o advogado não é subordinado a nenhum agente estatal. Juízes e promotores não detêm supremacia protocolar ou processual sobre o patrono constituído.\nO desagravo público constitui instrumento de defesa corporativa e cívica da advocacia (art. 7º, § 5º), cabível quando o causídico é ofendido em razão de sua atuação profissional. O desagravo independe de requerimento do ofendido, devendo ser instruído pelo Conselho Seccional competente com ampla publicidade.",
        "keyStatutes": [
          "Art. 133 da CF/88",
          "Art. 6º da Lei 8.906/94",
          "Art. 7º, § 5º da Lei 8.906/94"
        ],
        "summaryPoints": [
          "Inexistência de qualquer hierarquia entre juiz, promotor e advogado.",
          "Inviolabilidade constitucional por atos e palavras no estrito exercício da causa.",
          "Desagravo público assegurado mesmo sem provocação do advogado ofendido."
        ]
      },
      {
        "title": "Módulo 2: Estatuto das Prerrogativas Fundamentais do Advogado (Págs. 7-12)",
        "content": "O art. 7º da Lei 8.906/94 compõe a espinha dorsal da atuação da advocacia. Dentre os direitos inafastáveis consagrados destacam-se:\n1. Inviolabilidade do escritório, instrumentos de trabalho e correspondências: garantia consagrada no inciso II. Qualquer busca e apreensão exige decisão judicial expressamente motivada por indícios de prática de crime pelo próprio advogado, sendo nulo mandado genérico ou de pesca probatória (\"fishing expedition\"). A diligência deve ser obrigatoriamente acompanhada por representante formal da OAB.\n2. Comunicação reservada com cliente preso: o inciso III assegura a comunicação pessoal e reservada mesmo sem procuração outorgada, ainda que o custodiado se encontre sob regime de incomunicabilidade judicial.\n3. Vista de autos em repartições públicas civis, policiais e militares: o inciso XIV permite examinar autos de flagrante, inquérito ou termo circunstanciado, findos ou em curso, mesmo sem procuração, podendo apontar e extrair cópias. A Súmula Vinculante 14 do STF ratifica o direito do defensor amplo acesso a todos os elementos de prova já documentados.\n4. Sustentação oral pós-voto e reclamações de ordem: o advogado tem a faculdade de usar da palavra, pela ordem, para esclarecer equívocos de fato cometidos pelos julgadores (art. 7º, X).",
        "keyStatutes": [
          "Art. 7º, II, III, XIV e § 6º da Lei 8.906/94",
          "Súmula Vinculante 14 do STF"
        ],
        "summaryPoints": [
          "Busca no escritório exige presença indispensável de delegado da OAB e ordem detalhada.",
          "Entrevista com cliente recluso é livre e não depende de instrumento de mandato.",
          "Súmula Vinculante 14 garante acesso irrestrito a peças e laudos já acostados aos autos."
        ]
      },
      {
        "title": "Módulo 3: Incompatibilidades Absolutas e Impedimentos Relativos (Págs. 13-18)",
        "content": "O exercício da advocacia subordina-se a rigoroso controle de idoneidade e desvinculação com funções estatais potencialmente incompatíveis:\n- Incompatibilidade (art. 28): consiste na vedação TOTAL e absoluta ao exercício da advocacia, impedindo inclusive o patrocínio em causa própria. Hipóteses capitais da OAB:\na) Chefes do Poder Executivo e seus vices (Presidente, Governadores, Prefeitos);\nb) Membros da mesa do Poder Legislativo e seus substitutos;\nc) Membros do Poder Judiciário, do Ministério Público e de Tribunais de Contas;\nd) Ocupantes de cargos com poder de decisão sobre bens e rendas públicas e auditores fiscais;\ne) Policiais de qualquer natureza (Polícia Civil, Militar, Federal, Rodoviária, Penal e Guardas Municipais);\nf) Titulares de funções de chefia ou direção em cartórios e ofícios de notas e registros públicos.\n- Impedimento (art. 30): trata-se da proibição PARCIAL e pontual. O advogado não pode advogar apenas contra certas pessoas de direito público.\nA regra geral mais cobrada na OAB: servidores públicos da administração direta, indireta e fundacional são impedidos de advogar contra a Fazenda Pública que os remunera ou à qual esteja vinculada a entidade de sua lotação. Membros do Poder Legislativo (deputados e senadores que não estejam na Mesa) são impedidos contra qualquer pessoa jurídica de direito público estatal.",
        "keyStatutes": [
          "Art. 28 da Lei 8.906/94",
          "Art. 30 da Lei 8.906/94"
        ],
        "summaryPoints": [
          "Incompatibilidade = proibição total (ex.: policial civil não pode advogar nem para si mesmo).",
          "Impedimento = proibição seletiva (servidor público federal pode advogar, menos contra a União).",
          "A posse em cargo incompatível definitivo gera o cancelamento da inscrição na OAB."
        ]
      },
      {
        "title": "Módulo 4: Regime Jurídico Completo dos Honorários Advocatícios (Págs. 19-24)",
        "content": "Os honorários advocatícios subdividem-se em convencionados (contratuais), arbitrados e sucumbenciais (art. 22).\nRegras fundamentais:\n1. Natureza alimentar: possuem os mesmos privilégios dos créditos trabalhistas em falência, concurso de credores e insolvência civil (Súmula Vinculante 47 do STF).\n2. Honorários sucumbenciais: pertencem exclusivamente ao advogado, não pertencendo à parte vencedora. O art. 85, § 14 do CPC/15 veda expressamente a compensação em caso de sucumbência recíproca.\n3. Cláusula quota litis: admitida pelo Código de Ética e Disciplina (art. 50 do CED), desde que prevista por escrito e em que a soma dos honorários convencionados mais os de sucumbência não ultrapasse o benefício econômico auferido pelo cliente.\n4. Prescrição: prescreve em 5 (cinco) anos a ação de cobrança de honorários, contado o prazo do vencimento do contrato, do trânsito em julgado da decisão ou da revogação do mandato (art. 25).\n5. Execução autônoma: o causídico tem o direito de executar os honorários de sucumbência nos próprios autos da demanda principal ou em processo autônomo (art. 24).",
        "keyStatutes": [
          "Arts. 22 a 26 da Lei 8.906/94",
          "Art. 85 do CPC/15",
          "Súmula Vinculante 47 do STF",
          "Art. 50 do CED"
        ],
        "summaryPoints": [
          "Honorários de sucumbência são verba privativa do causídico e impenhoráveis em regra.",
          "Vedada compensação de sucumbência na hipótese de vitória e derrota parciais.",
          "Quota litis não pode ser superior à cota atribuída à parte patrocinada."
        ]
      },
      {
        "title": "Módulo 5: Sociedade de Advogados e Sociedade Unipessoal (Págs. 25-30)",
        "content": "A sociedade de advogados é regida pelos arts. 15 a 17 da Lei 8.906/94 e pelo Regulamento Geral.\nRegras fundamentais:\n1. Personalidade jurídica: adquire-se com o registro de seus atos constitutivos no Conselho Seccional da OAB em cuja base territorial se instale (não é registrada na Junta Comercial nem no Cartório de Registro Civil de Pessoas Jurídicas).\n2. Sociedade Unipessoal de Advocacia: instituída pela Lei Federal 13.247/2016, autoriza que um único advogado institua pessoa jurídica própria para fins fiscais e patrimoniais.\n3. Proibições: nenhum advogado pode integrar mais de uma sociedade de advogados ou sociedade individual com sede ou filial na mesma base territorial de um mesmo Conselho Seccional. É absolutamente vedada a adoção de forma ou denominação mercantil (ex.: \"Advogados S.A.\" ou \"Consultoria Jurídica LTDA\").\n4. Responsabilidade: a sociedade responde subsidiariamente pelos atos de seus membros, e os advogados sócios respondem solidária e ilimitadamente pelos danos causados diretamente a clientes por ação ou omissão culposa no patrocínio.",
        "keyStatutes": [
          "Arts. 15 a 17 da Lei 8.906/94",
          "Lei nº 13.247/2016"
        ],
        "summaryPoints": [
          "Registro exclusivo no Conselho Seccional da OAB.",
          "Vedada qualquer feição comercial ou sociedade anônima na advocacia.",
          "Advogado só pode pertencer a uma sociedade ou sociedade unipessoal por seccional."
        ]
      },
      {
        "title": "Módulo 6: Publicidade, Marketing Jurídico e Provimento 205/2021 (Págs. 31-36)",
        "content": "A publicidade na advocacia deve orientar-se pela sobriedade, moderação e caráter meramente informativo, preservando a dignidade da profissão e a inviolabilidade da confiança do público.\nO Provimento nº 205/2021 do CFOAB modernizou as diretrizes do marketing jurídico:\n- É permitido: impulsionamento de publicações informativas em redes sociais; criação de websites institucionais e canais em plataformas de vídeo com conteúdo técnico; participação em podcasts, programas de rádio e TV como especialista, desde que com finalidade educativa sem divulgar contato para angariação.\n- É vedado: vincular a advocacia a outras atividades mercantis no mesmo espaço físico; menção a valores de honorários, formas de parcelamento ou gratuidade; ostentação patrimonial (veículos de luxo, joias e bens suntuosos como atrativo profissional); captação ativa de clientela através de mala direta indiscriminada, mensagens em massa não autorizadas (\"spam\") ou abordagem em locais de acidentes e filas de benefícios sociais.",
        "keyStatutes": [
          "Provimento nº 205/2021 do CFOAB",
          "Arts. 39 a 47 do Código de Ética e Disciplina"
        ],
        "summaryPoints": [
          "Publicidade meramente informativa e educativa.",
          "Permitido marketing de conteúdo e impulsionamento com sobriedade.",
          "Vedada ostentação de riqueza material, valores de honorários e captação agressiva."
        ]
      },
      {
        "title": "Módulo 7: Sigilo Profissional e Relações com o Cliente (Págs. 37-42)",
        "content": "O sigilo profissional é de ordem pública e decorre da relação de mútua confiança entre constituinte e constituído (arts. 35 a 38 do CED).\nRegras essenciais:\n1. O dever de sigilo independe de solicitação do cliente e permanece após o término do mandato ou rescisão do contrato de prestação de serviços.\n2. O advogado pode e deve recusar-se a prestar depoimento perante a autoridade judicial ou policial sobre fatos que lhe tenham sido confidenciados no exercício do ofício.\n3. Exceções taxativas à quebra do sigilo: apenas em situações de grave ameaça ao direito à vida e à honra, ou quando o próprio advogado for injuriado ou acusado pelo próprio cliente, operando a revelação nos estritos limites da sua própria autodefesa.\n4. Relação com o cliente: o advogado não deve aceitar procuração de quem já tenha patrono constituído, sem prévio conhecimento deste, salvo por motivo plenamente justificável ou para adoção de medidas judiciais urgentes e inadiáveis (art. 14 do CED).",
        "keyStatutes": [
          "Arts. 35 a 38 do Código de Ética e Disciplina",
          "Art. 7º, XIX da Lei 8.906/94"
        ],
        "summaryPoints": [
          "Sigilo permanente de ordem pública, sobrevindo mesmo após a conclusão do processo.",
          "Direito e dever de recusar testemunho sobre confidências de clientes.",
          "Quebra excepcionalíssima autorizada apenas para legítima defesa do patrono ou risco de vida."
        ]
      },
      {
        "title": "Módulo 8: Infrações e Sanções Disciplinares na OAB (Págs. 43-48)",
        "content": "O art. 34 da Lei 8.906/94 arrola 29 hipóteses taxativas de infrações disciplinares. As sanções disciplinares aplicáveis pelo Tribunal de Ética e Disciplina (TED) são:\n1. Censura (art. 36): aplicável a infrações leves (ex.: publicidade imoderada, violação de preceito ético, retenção abusiva de autos). A censura pode ser convertida em advertência sem registro nos assentamentos do inscrito caso existam circunstâncias atenuantes.\n2. Suspensão (art. 37): interdita o exercício da advocacia em todo o território nacional por prazo de 30 dias a 12 meses. Aplicável a faltas graves: reincidência em infração já apenada com censura; recusa injustificada de prestação de contas de valores recebidos do cliente; inépcia profissional reiterada (exige 3 faltas); prática de conduta incompatível com a advocacia. Nos casos de dívida de prestação de contas, a suspensão perdura até a integral quitação do débito.\n3. Exclusão (art. 38): pena máxima que cancela a inscrição profissional. Exige manifestação favorável de no mínimo 2/3 (dois terços) dos membros do Conselho Seccional competente. Aplicável: após 3 suspensões disciplinares anteriores; prática de crime infamante ou declaração de inidoneidade moral.\n4. Multa (art. 39): sanção pecuniária acessória acumulável com censura ou suspensão, no valor equivalente a 1 até 10 anuidades da Seccional.",
        "keyStatutes": [
          "Arts. 34 a 40 da Lei nº 8.906/1994",
          "Art. 43 do Estatuto da OAB"
        ],
        "summaryPoints": [
          "Censura: infrações leves; admite conversão em advertência sigilosa.",
          "Suspensão: faltas graves (30 dias a 12 meses); retenção de valores do cliente gera suspensão até quitação.",
          "Exclusão: exige quórum qualificado de 2/3 do Conselho Seccional."
        ]
      },
      {
        "title": "Módulo 9: Processo Disciplinar e Competência do Tribunal de Ética (Págs. 49-51)",
        "content": "O processo disciplinar perante a OAB possui rito autônomo e sigiloso (art. 72 da Lei 8.906/94):\n- Instauração: de ofício pelo órgão da OAB ou mediante representação fundamentada de qualquer pessoa interessada. Não se admite representação anônima.\n- Competência: é do Conselho Seccional em cuja base territorial tenha ocorrido a infração, ainda que o advogado esteja inscrito em outro Estado federativo (competência territorial ratione loci).\n- Prazos e Prescrição: a pretensão punitiva das infrações disciplinares prescreve em 5 (cinco) anos contados da data da constatação oficial do fato. Aplica-se a prescrição intercorrente caso o processo disciplinar fique paralisado por mais de 3 (três) anos pendente de despacho ou julgamento.\n- Recursos: as decisões do Tribunal de Ética e Disciplina desafiam recurso voluntário ao Conselho Seccional e, em tese, ao Conselho Federal quando houver divergência jurisprudencial notória.",
        "keyStatutes": [
          "Arts. 70 a 74 da Lei nº 8.906/1994"
        ],
        "summaryPoints": [
          "Competência é do local onde a infração foi cometida.",
          "Prescrição da pretensão punitiva em 5 anos; prescrição intercorrente em 3 anos.",
          "Processo disciplinar tramita em estrito sigilo até o trânsito em julgado."
        ]
      },
      {
        "title": "Módulo 10: Estrutura Orgânica e Eleições da OAB (Págs. 52-54)",
        "content": "A Ordem dos Advogados do Brasil possui natureza jurídica singular de serviço público independente, com autonomia funcional e orçamentária, não integrando a Administração Pública direta ou indireta nem se sujeitando ao controle externo do TCU (conforme ADI 3.026 do STF).\nÓrgãos da OAB:\n1. Conselho Federal (órgão supremo com sede em Brasília, composto por Conselheiros Federais eleitos pelos Estados e DF);\n2. Conselhos Seccionais (com jurisdição sobre os respectivos Estados da Federação e DF);\n3. Subseções (criadas pelos Conselhos Seccionais para atuação comarcana com no mínimo 15 advogados domiciliados);\n4. Caixas de Assistência dos Advogados (instituídas onde houver mais de 1.500 inscritos para prestar seguridade e assistência aos associados).\nEleições: realizadas na segunda quinzena de novembro do último ano do triênio de mandato. O voto é obrigatório para todos os advogados regulares sob pena de multa de 20% da anuidade, vedada a candidatura de quem estiver em débito com a Seccional.",
        "keyStatutes": [
          "Arts. 44 a 67 da Lei nº 8.906/1994",
          "ADI 3.026 do STF"
        ],
        "summaryPoints": [
          "OAB não integra a administração pública nem se subordina ao Tribunal de Contas da União.",
          "Mandato dos conselheiros é trienal.",
          "Voto obrigatório nas eleições seccionais."
        ]
      }
    ]
  },
  {
    "id": "manual-ext-const-50p",
    "title": "Curso Extensivo de Direito Constitucional Positivo e Jurisprudência do STF",
    "disciplineId": "constitucional",
    "author": "Dra. Beatriz Albuquerque · Mestre e Doutora em Direito do Estado",
    "estimatedReadTime": "56 páginas didáticas · 4h00 de estudo aprofundado",
    "pageCount": 56,
    "isExtensiveManual": true,
    "edition": "Manual Completo 2026/2027 · Edição Definitiva",
    "description": "Tratado de Direito Constitucional de mais de 50 páginas cobrindo Teoria da Constituição, Teoria dos Direitos Fundamentais, Controle de Constitucionalidade (Concentrado e Difuso), Ações Constitucionais, Organização do Estado e Repartição de Competências com ampla jurisprudência do STF.",
    "chapters": [
      {
        "title": "Módulo 1: Teoria da Constituição e Classificações Fundamentais (Págs. 1-6)",
        "content": "A Constituição de 1988 qualifica-se como formal, escrita, dogmática, promulgada (democrática), rígida, analítica, dirigente e principiológica.\nO Poder Constituinte divide-se em:\n- Poder Constituinte Originário: inicial, ilimitado juridicamente, incondicionado e autônomo, responsável por inaugurar uma nova ordem estatal.\n- Poder Constituinte Derivado: subordinado, condicionado e limitado às regras fixadas pelo originário:\na) Derivado Reformador: altera o texto por meio de Emendas Constitucionais (art. 60 da CF/88);\nb) Derivado Decorrente: confere aos Estados-membros a competência para estruturar suas próprias Constituições Estaduais;\nc) Derivado Revisor: previsto no art. 3º do ADCT para a revisão após 5 anos da promulgação.\nLimitações ao Poder de Reforma (art. 60):\n- Limitações materiais (Cláusulas Pétreas - § 4º): forma federativa de Estado; voto direto, secreto, universal e periódico; separação dos poderes; direitos e garantias individuais.\n- Limitações circunstanciais (§ 1º): a CF não pode ser emendada na vigência de intervenção federal, estado de defesa ou estado de sítio.\n- Limitações formais: iniciativa qualificada (1/3 da Câmara ou Senado, Presidente da República ou mais da metade das Assembleias Legislativas), quórum de aprovação de 3/5 dos votos em dois turnos em ambas as Casas do Congresso Nacional.",
        "keyStatutes": [
          "Art. 60 da CF/88",
          "Art. 3º do ADCT"
        ],
        "summaryPoints": [
          "Cláusulas pétreas materiais não admitem proposta tendente a aboli-las.",
          "Quórum de Emenda Constitucional: 3/5 dos votos em dois turnos em cada Casa.",
          "Vedada emenda durante vigência de intervenção federal, defesa ou sítio."
        ]
      },
      {
        "title": "Módulo 2: Eficácia e Aplicabilidade das Normas Constitucionais (Págs. 7-11)",
        "content": "A consagrada doutrina de José Afonso da Silva divide a eficácia das normas constitucionais em três grandes categorias:\n1. Normas de Eficácia Plena: nascem aptas a produzir a totalidade de seus efeitos jurídicos imediatamente com a promulgação do texto, sem necessidade de intermediação legislativa integradora (ex.: art. 5º, III - vedação de tortura; art. 5º, LVI - inadmissibilidade de provas ilícitas).\n2. Normas de Eficácia Contida (ou redutível): possuem aplicabilidade direta, imediata e integral, mas o próprio constituinte originário previu a possibilidade de que o legislador infraconstitucional ou a própria Carta restrinja o alcance de seus efeitos (ex.: art. 5º, XIII - \"é livre o exercício de qualquer trabalho, ofício ou profissão, atendidas as qualificações profissionais que a lei estabelecer\"). Enquanto não houver lei restritiva, a liberdade de atuação é ampla.\n3. Normas de Eficácia Limitada: dependem indispensavelmente da atuação do legislador infraconstitucional para que possam irradiar seus efeitos práticos plenos (possuem aplicabilidade indireta, mediata e diferida). Subdividem-se em normas de princípio institutivo (que estruturam órgãos estatais) e normas de princípio programático (que traçam diretrizes sociais, econômicas e culturais, ex.: art. 7º, XX - proteção do mercado de trabalho da mulher).",
        "keyStatutes": [
          "Doutrina Clássica de José Afonso da Silva",
          "Art. 5º, XIII da CF/88"
        ],
        "summaryPoints": [
          "Plena = Aplicabilidade direta, imediata e não restringível.",
          "Contida = Aplicabilidade imediata que pode ser restringida por lei futura.",
          "Limitada = Não produz efeitos plenos sem lei integradora prévia."
        ]
      },
      {
        "title": "Módulo 3: Direitos e Garantias Fundamentais em Espécie (Págs. 12-18)",
        "content": "O art. 5º da CF/88 estatui os direitos individuais e coletivos, assegurando a inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança e à propriedade.\nTemas vitais na OAB e Jurisprudência do STF:\n1. Inviolabilidade do domicílio (art. 5º, XI): a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo: em flagrante delito ou desastre, ou para prestar socorro; ou, durante o dia, por determinação judicial. O STF fixou a tese de que o ingresso forçado em domicílio sem mandado exige a fundada e prévia demonstração de razões que indiquem a ocorrência de crime permanente no local (Tema 280 da Repercussão Geral).\n2. Inviolabilidade das comunicações (art. 5º, XII): a quebra do sigilo telefônico (interceptação de comunicações) somente pode ser autorizada por ordem judicial fundamentada, para fins de investigação criminal ou instrução processual penal, na forma da Lei 9.296/96.\n3. Direito de Reunião (art. 5º, XVI): pacífica, sem armas, em locais abertos ao público, independente de autorização prévia, exigindo apenas prévio aviso à autoridade competente. O STF julgou inconstitucional a exigência de aviso formal solene quando a manifestação puder ser inferida pelas circunstâncias públicas (Tema 855).",
        "keyStatutes": [
          "Art. 5º da CF/88",
          "Tema 280 do STF",
          "Tema 855 do STF",
          "Lei nº 9.296/1996"
        ],
        "summaryPoints": [
          "Ingresso domiciliar sem mandado exige justa causa prévia demonstrada em relatório.",
          "Interceptação telefônica restrita à esfera criminal mediante reserva de jurisdição.",
          "Direito de reunião não depende de autorização estatal, apenas de aviso prévio."
        ]
      },
      {
        "title": "Módulo 4: Remédios Constitucionais e Ações de Garantia (Págs. 19-24)",
        "content": "As ações constitucionais representam os instrumentos adjetivos de defesa das liberdades:\n1. Habeas Corpus (art. 5º, LXVIII): tutela a liberdade de locomoção corporal contra ilegalidade ou abuso de poder. É ação gratuita, de legitimidade ativa universal (qualquer pessoa física ou jurídica, nacional ou estrangeira, e o Ministério Público podem impetrar), sem necessidade de capacidade postulatória ou procuração. Não cabe HC contra punição disciplinar militar pelo mérito (art. 142, § 2º), admitindo-se apenas controle de legalidade formal.\n2. Mandado de Segurança (art. 5º, LXIX e Lei 12.016/09): protege direito líquido e certo, não amparado por HC ou HD, contra ato ilegal ou praticado com abuso de poder por autoridade pública ou agente delegado. Exige prova pré-constituída documental, sendo vedada a dilação probatória. Prazo decadencial improrrogável de 120 (cento e vinte) dias contados da ciência inequívoca do ato impugnado.\n3. Mandado de Segurança Coletivo (art. 5º, LXX): legitimados: partido político com representação no Congresso Nacional; organização sindical, entidade de classe ou associação legalmente constituída e em funcionamento há pelo menos 1 (um) ano.\n4. Habeas Data (art. 5º, LXXII): ação gratuita para assegurar o conhecimento ou retificação de informações relativas à pessoa do impetrante constantes de registros públicos ou governamentais. A Súmula 2 do STJ exige a comprovação da recusa da autoridade administrativa para caracterizar o interesse de agir.\n5. Ação Popular (art. 5º, LXXIII): proposta exclusivamente por qualquer cidadão em gozo dos direitos políticos (comprovado pelo título eleitoral), visando anular ato lesivo ao patrimônio público, moralidade administrativa, meio ambiente e patrimônio histórico.",
        "keyStatutes": [
          "Art. 5º, LXVIII a LXXIII da CF/88",
          "Lei nº 12.016/2009",
          "Súmula 2 do STJ"
        ],
        "summaryPoints": [
          "Habeas Corpus é gratuito e dispensa representação por advogado.",
          "Mandado de Segurança tem prazo decadencial de 120 dias e exige prova documental.",
          "Ação Popular exige condição de cidadão e título eleitoral regular."
        ]
      },
      {
        "title": "Módulo 5: Teoria Geral do Controle de Constitucionalidade (Págs. 25-30)",
        "content": "O controle de constitucionalidade é corolário do princípio da supremacia formal da Constituição.\nMomentos de Controle:\n- Preventivo: realizado durante o processo de elaboração do ato normativo. Na via política: comissões de constituição e justiça (CCJ) e veto jurídico presidencial por inconstitucionalidade (art. 66, § 1º). Na via jurisdicional: admite-se excepcionalmente mandado de segurança impetrado por parlamentar federal perante o STF para obstar tramitação de PEC flagrantemente violadora de cláusula pétrea (MS 20.257).\n- Repressivo: incide sobre a lei ou ato normativo já promulgados e vigentes.\nSistemas Jurisdicionais no Brasil (Sistema Misto):\n- Controle Difuso: todo e qualquer magistrado singular ou colegiado detém a prerrogativa de afastar a norma incompatível com a Carta Política na resolução incidental do caso concreto.\n- Controle Concentrado: competência originária e exclusiva do Supremo Tribunal Federal (quando o parâmetro for a CF/88) ou dos Tribunais de Justiça (quando o parâmetro for a Constituição Estadual).",
        "keyStatutes": [
          "Art. 102 da CF/88",
          "Art. 125, § 2º da CF/88",
          "Jurisprudência do STF no MS 20.257"
        ],
        "summaryPoints": [
          "Controle preventivo judicial via MS exclusivo de parlamentar da respectiva Casa.",
          "Brasil adota o modelo misto: difuso (qualquer juiz) e concentrado (STF/TJs).",
          "Veto presidencial por inconstitucionalidade é exemplo típico de controle preventivo político."
        ]
      },
      {
        "title": "Módulo 6: Controle Difuso e Cláusula de Reserva de Plenário (Págs. 31-36)",
        "content": "No controle difuso, a inconstitucionalidade é uma questão prejudicial arguida incidentalmente na petição inicial, na contestação ou de ofício pelo julgador. A eficácia da decisão é, em regra, inter partes.\nCláusula de Reserva de Plenário (Art. 97 da CF/88):\nSomente pelo voto da maioria absoluta de seus membros ou dos membros do respectivo órgão especial poderão os tribunais declarar a inconstitucionalidade de lei ou ato normativo do Poder Público.\nSúmula Vinculante nº 10 do STF: viola a cláusula de reserva de plenário a decisão de órgão fracionário de tribunal (Câmara, Turma ou Seção) que, embora não declare expressamente a inconstitucionalidade de lei ou ato normativo do Poder Público, afasta sua incidência, no todo ou em parte.\nExceções à remessa ao Plenário:\n1. Quando o próprio plenário do tribunal ou o plenário do STF já tiver declarado a inconstitucionalidade da matéria anteriormente (art. 949, parágrafo único do CPC/15);\n2. Decisões de juízes singulares de primeiro grau (a reserva de plenário aplica-se apenas a órgãos colegiados de tribunais).\nAtuação do Senado Federal (art. 52, X): o Senado tem competência privativa para suspender a execução, no todo ou em parte, de lei declarada inconstitucional por decisão definitiva do Supremo Tribunal Federal, conferindo eficácia erga omnes.",
        "keyStatutes": [
          "Art. 97 da CF/88",
          "Art. 52, X da CF/88",
          "Súmula Vinculante 10 do STF",
          "Art. 949 do CPC/15"
        ],
        "summaryPoints": [
          "Órgão fracionário de tribunal não pode afastar lei sem remessa ao pleno ou órgão especial.",
          "Súmula Vinculante 10 pune o esvaziamento disfarçado da lei sem quórum qualificado.",
          "Juiz monocrático de 1ª instância não se submete à reserva de plenário."
        ]
      },
      {
        "title": "Módulo 7: Controle Concentrado no STF: ADI, ADC, ADO e ADPF (Págs. 37-43)",
        "content": "O controle concentrado perante a Corte Constitucional realiza-se através de quatro ações fundamentais:\n1. Ação Direta de Inconstitucionalidade (ADI genérica - Lei 9.868/99): cabível contra lei ou ato normativo federal ou estadual que viole a CF/88. Exige que a norma tenha sido editada após a promulgação da CF/88.\n2. Ação Declaratória de Constitucionalidade (ADC): exclusiva para lei ou ato normativo federal, exigindo a demonstração prévia de controvérsia judicial relevante que ameace a segurança jurídica.\n3. Ação Direta de Inconstitucionalidade por Omissão (ADO): combate a inércia do Poder Legislativo em regulamentar comando constitucional de eficácia limitada. O STF dá ciência ao Poder competente para a adoção das providências necessárias em 30 dias se for órgão administrativo.\n4. Arguição de Descumprimento de Preceito Fundamental (ADPF - Lei 9.882/99): tem caráter subsidiário (somente cabe quando não houver outro meio eficaz de sanar a lesividade). Cabimento típico: normas municipais em face da CF/88; normas pré-constitucionais (editadas antes de 05/10/1988); e atos materiais do poder público.\nEfeitos das Decisões: as decisões definitivas de mérito proferidas pelo STF em ADI, ADC, ADO e ADPF produzem eficácia erga omnes e efeito vinculante relativamente aos demais órgãos do Poder Judiciário e à Administração Pública direta e indireta nas esferas federal, estadual e municipal. Não vinculam o Poder Legislativo em sua função típica de legislar.",
        "keyStatutes": [
          "Art. 102, I, \"a\" da CF/88",
          "Lei nº 9.868/1999",
          "Lei nº 9.882/1999"
        ],
        "summaryPoints": [
          "ADI alcança leis federais e estaduais pós-1988.",
          "ADPF tem caráter subsidiário e é a única via para questionar leis municipais e pré-constitucionais no STF.",
          "Efeito vinculante vincula o Judiciário e a Administração, mas não vincula o Legislador."
        ]
      },
      {
        "title": "Módulo 8: Rol de Legitimados do Art. 103 e Pertinência Temática (Págs. 44-48)",
        "content": "O art. 103 da Carta Magna traz o rol taxativo dos legitimados para a propositura de ADI, ADC, ADO e ADPF:\n- Legitimados Universais (ou Neutros): podem ajuizar qualquer ação do controle concentrado sem precisar demonstrar interesse específico ou vínculo direto com a matéria:\nI - o Presidente da República;\nII - a Mesa do Senado Federal;\nIII - a Mesa da Câmara dos Deputados;\nVI - o Procurador-Geral da República;\nVII - o Conselho Federal da Ordem dos Advogados do Brasil;\nVIII - partido político com representação no Congresso Nacional (basta 1 parlamentar).\n- Legitimados Especiais (ou Interessados): exigem a comprovação formal de \"pertinência temática\" (relação de pertinência direta entre o objeto impugnado e as finalidades institucionais ou corporativas do órgão autor):\nIV - a Mesa de Assembleia Legislativa ou da Câmara Legislativa do DF;\nV - o Governador de Estado ou do DF;\nIX - confederação sindical ou entidade de classe de âmbito nacional.\nJurisprudência do STF: para entidade de classe nacional, exige-se representação de membros em pelo menos 9 (nove) estados da federação e homogeneidade da categoria profissional.",
        "keyStatutes": [
          "Art. 103 da CF/88",
          "Jurisprudência consolidada do STF"
        ],
        "summaryPoints": [
          "Conselho Federal da OAB e PGR são legitimados universais (dispensam pertinência temática).",
          "Governador e Assembleia Legislativa exigem comprovação de reflexo direto no respectivo Estado.",
          "Entidade de classe nacional exige representatividade em ao menos 9 estados."
        ]
      },
      {
        "title": "Módulo 9: Organização do Estado e Repartição Constitucional de Competências (Págs. 49-53)",
        "content": "A República Federativa do Brasil é formada pela união indissolúvel dos Estados e Municípios e do Distrito Federal (art. 1º e 18 da CF/88).\nRepartição de Competências:\n1. Competência Legislativa Privativa da União (art. 22): matérias vitais nacionais: direito civil, comercial, penal, processual, eleitoral, agrário, marítimo, aeronáutico, espacial e do trabalho; trânsito e transporte; desapropriação; diretrizes e bases da educação nacional. Lei complementar pode autorizar os Estados a legislar sobre questões específicas dessas matérias (art. 22, parágrafo único).\n2. Competência Legislativa Concorrente entre União, Estados e DF (art. 24): direito tributário, financeiro, penitenciário, econômico e urbanístico; juntas comerciais; orçamento; proteção do meio ambiente e patrimônio histórico.\nRegra de ouro: a União limita-se a fixar normas gerais (§ 1º). A competência da União para normas gerais não exclui a competência suplementar dos Estados (§ 2º). Inexistindo norma geral federal, os Estados exercerão competência legislativa plena (§ 3º). A superveniência de lei federal sobre normas gerais suspende a eficácia da lei estadual no que lhe for contrário (§ 4º - não revoga, apenas suspende!).\n3. Competência Residual dos Estados (art. 25, § 1º): todas as matérias que não forem vedadas pela CF.\n4. Competência dos Municípios (art. 30): legislar sobre assuntos de interesse local e suplementar a legislação federal e estadual no que couber.",
        "keyStatutes": [
          "Arts. 22 a 24 da CF/88",
          "Arts. 25 e 30 da CF/88"
        ],
        "summaryPoints": [
          "Direito civil, penal, processual e trabalho são competências privativas exclusivas da União.",
          "Competência concorrente: União edita normas gerais; Estado suplementa.",
          "Superveniência de lei geral federal apenas suspende a eficácia da lei estadual incompatível."
        ]
      },
      {
        "title": "Módulo 10: Intervenção Federal e Defesa das Instituições Democráticas (Págs. 54-56)",
        "content": "A autonomia dos entes federativos é a regra; a intervenção constitui medida excepcional e temporária disciplinada nos arts. 34 a 36 da CF/88.\nHipóteses de Intervenção Federal nos Estados (art. 34):\n- Manter a integridade nacional;\n- Repelir invasão estrangeira ou de uma unidade da Federação em outra;\n- Pôr termo a grave comprometimento da ordem pública;\n- Garantir o livre exercício de qualquer dos Poderes nas unidades da Federação;\n- Reorganizar as finanças da unidade da Federação que suspender o pagamento da dívida fundada por mais de 2 anos consecutivos;\n- Prover a execução de lei federal, ordem ou decisão judicial;\n- Assegurar a observância dos princípios constitucionais sensíveis (forma republicana, direitos da pessoa humana, autonomia municipal, prestação de contas da administração pública e aplicação do mínimo obrigatório em saúde e educação).\nProcedimento: privativo do Presidente da República, exigindo pareceres opinativos do Conselho da República e de Defesa Nacional, com decreto presidencial submetido ao controle político do Congresso Nacional em 24 horas.",
        "keyStatutes": [
          "Arts. 34 a 36 da CF/88"
        ],
        "summaryPoints": [
          "Intervenção federal afasta temporariamente a autonomia do Estado membro.",
          "Decreto presidencial interventivo exige apreciação do Congresso Nacional em 24 horas.",
          "Violação a princípios constitucionais sensíveis exige representação interventiva do PGR perante o STF."
        ]
      }
    ]
  },
  {
    "id": "manual-ext-penal-50p",
    "title": "Tratado de Direito Penal: Teoria do Crime, Penas e Parte Especial",
    "disciplineId": "penal",
    "author": "Dra. Gabriela Vasconcelos & Prof. Dr. Nelson Hungria Filho",
    "estimatedReadTime": "52 páginas didáticas · 3h50 de estudo aprofundado",
    "pageCount": 52,
    "isExtensiveManual": true,
    "edition": "Manual Completo 2026/2027 · Edição Definitiva",
    "description": "Manual de mais de 50 páginas integrando Teoria Analítica do Crime (fato típico, ilicitude, culpabilidade), concurso de pessoas, dosimetria da pena, causas de extinção da punibilidade e principais crimes contra a vida, patrimônio e administração pública.",
    "chapters": [
      {
        "title": "Módulo 1: Princípios Penais Fundamentais e Lei Penal no Tempo (Págs. 1-5)",
        "content": "O Direito Penal moderno funda-se em garantias pétreas que limitam o jus puniendi estatal:\n1. Princípio da Legalidade / Reserva Legal (art. 5º, XXXIX da CF e art. 1º do CP): não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal. Proibição de analogia in malam partem e de criação de tipos por medidas provisórias.\n2. Princípio da Insignificância (Bagatela): afasta a tipicidade material da conduta. Critérios cumulativos do STF: mínima ofensividade da conduta, nenhuma periculosidade social da ação, reduzidíssimo grau de reprovabilidade do comportamento e inexpressividade da lesão jurídica provocada. Não se aplica a crimes com violência contra a pessoa nem a violência doméstica (Súmula 589 do STJ).\n3. Lei Penal no Tempo (art. 2º do CP): a lei penal não retroage, salvo para beneficiar o réu (novatio legis in mellius e abolitio criminis). O crime permanente e continuado subordina-se à lei penal mais gravosa se a vigência for anterior à cessação da permanência ou da continuidade (Súmula 711 do STF).",
        "keyStatutes": [
          "Art. 5º, XXXIX e XL da CF/88",
          "Arts. 1º e 2º do Código Penal",
          "Súmula 711 do STF",
          "Súmula 589 do STJ"
        ],
        "summaryPoints": [
          "Insignificância exclui a tipicidade material do fato.",
          "Abolitio criminis extingue a punibilidade retroagindo mesmo após trânsito em julgado.",
          "Súmula 711 STF: lei mais grave aplica-se ao crime continuado se vigorar antes do fim da conduta."
        ]
      },
      {
        "title": "Módulo 2: O Fato Típico e seus Elementos Estruturais (Págs. 6-11)",
        "content": "O fato típico é composto por: conduta (ação ou omissão), resultado naturalístico, nexo de causalidade e tipicidade (formal e material).\n- Conduta: ato humano voluntário e consciente voltado a uma finalidade (Teoria Finalista da Ação de Welzel). Causas de exclusão da conduta: coação física irresistível (vis absoluta), movimentos reflexos puros, estados de inconsciência total (sonambulismo, epilepsia).\n- Relação de Causalidade (art. 13 do CP): adota-se a teoria da equivalência das condições (conditio sine qua non). Causa é toda ação ou omissão sem a qual o resultado não teria ocorrido (processo hipotético de eliminação de Thyrén).\n- Concausas: a superveniência de causa relativamente independente que por si só produza o resultado exclui a imputação do resultado agravado, respondendo o agente pelos atos já praticados (art. 13, § 1º).\n- Tipicidade Conglobante: formulada por Eugenio Raúl Zaffaroni, exige que a conduta, além de subsumir-se à lei formal, seja materialmente lesiva e não incentivada ou tolerada pelo ordenamento como um todo.",
        "keyStatutes": [
          "Art. 13 do Código Penal",
          "Doutrina de Welzel e Zaffaroni"
        ],
        "summaryPoints": [
          "Conduta exige voluntariedade; coação física irresistível afasta a conduta.",
          "Art. 13, § 1º do CP: causa superveniente que por si só cause o resultado afasta o homicídio consumado.",
          "Tipicidade requer tanto subsunção formal quanto desvalor material real do bem."
        ]
      },
      {
        "title": "Módulo 3: Dolo, Culpa e Erro de Tipo (Págs. 12-16)",
        "content": "Dolo (art. 18, I): quando o agente quis o resultado (dolo direto - teoria da vontade) ou assumiu o risco de produzi-lo (dolo eventual - teoria do assentimento).\nCulpa (art. 18, II): decorre de negligência, imprudência ou imperícia (violação do dever objetivo de cuidado).\n- Culpa consciente: o autor prevê o resultado danoso, mas confia sinceramente em suas habilidades para evitá-lo. Diferencia-se do dolo eventual, no qual o agente prevê e aceita com indiferença a produção do dano.\n- Erro de Tipo (art. 20): falsa percepção sobre os elementos constitutivos do tipo penal. O erro de tipo essencial invencível (escusável) exclui o dolo e a culpa; se vencível (inescusável), afasta o dolo mas permite a punição por crime culposo, se previsto em lei.\n- Erro de Proibição (art. 21): o agente conhece os fatos, mas supõe erradamente que sua conduta é permitida pelo ordenamento jurídico. Se invencível, isenta de pena (exclui a culpabilidade); se vencível, atenua a pena de um sexto a um terço.",
        "keyStatutes": [
          "Arts. 18, 20 e 21 do Código Penal"
        ],
        "summaryPoints": [
          "Dolo eventual assume o risco e aceita o resultado; culpa consciente confia que o evento não ocorrerá.",
          "Erro de tipo essencial vencível exclui o dolo, permitindo punição a título culposo.",
          "Erro de proibição incide na culpabilidade (potencial consciência da ilicitude)."
        ]
      },
      {
        "title": "Módulo 4: Ilicitude e Causas Justificantes de Exclusão (Págs. 17-22)",
        "content": "A ilicitude (ou antijuridicidade) é a contradição entre a conduta típica e o direito. As causas excludentes legais estão insculpidas no art. 23 do CP:\n1. Estado de Necessidade (art. 24): salvaguarda de direito próprio ou alheio de perigo atual, que o agente não provocou por sua vontade nem podia de outro modo evitar, desde que o sacrifício seja proporcional. Não pode alegar estado de necessidade quem tinha o dever legal de enfrentar o perigo (ex.: bombeiro, policial).\n2. Legítima Defesa (art. 25): repulsa com uso moderado dos meios necessários a injusta agressão, atual ou iminente, a direito seu ou de outrem. Abrange também o agente de segurança pública que repele agressão com reféns (parágrafo único).\n3. Estrito Cumprimento do Dever Legal e Exercício Regular de Direito: condutas impostas por mandamento normativo legal direto ou autorizadas pelas normas vigentes.\n- Excesso Punível (art. 23, parágrafo único): em qualquer das causas justificantes, o agente responderá pelo excesso doloso ou culposo.",
        "keyStatutes": [
          "Arts. 23, 24 e 25 do Código Penal"
        ],
        "summaryPoints": [
          "Estado de necessidade protege contra perigo atual; legítima defesa protege contra agressão injusta humana.",
          "Quem tem o dever jurídico de enfrentar o perigo não pode invocar estado de necessidade.",
          "O excesso, doloso ou culposo, é sempre punível na forma da lei penal."
        ]
      },
      {
        "title": "Módulo 5: Culpabilidade, Imputabilidade e Concurso de Pessoas (Págs. 23-28)",
        "content": "A culpabilidade atua como juízo de reprovação pessoal sobre o autor do fato ilícito. Elementos:\n1. Imputabilidade Mental: capacidade de entender o caráter ilícito e de determinar-se conforme esse entendimento. Menores de 18 anos são inimputáveis penais (art. 27). O doente mental ao tempo da ação é isento de pena (art. 26 - absolvição imprópria com imposição de medida de segurança).\n- Actio libera in causa: a embriaguez voluntária ou culposa pelo álcool não exclui a imputabilidade (art. 28, II).\n2. Potencial Consciência da Ilicitude: afastada pelo erro de proibição invencível.\n3. Exigibilidade de Conduta Diversa: afastada pela coação moral irresistível e pela estrita obediência a ordem manifestamente não ilegal de superior hierárquico (art. 22).\nConcurso de Pessoas (arts. 29 a 31): o Brasil adota como regra a Teoria Monista ou Unitária (todos os partícipes e autores respondem pelo mesmo crime na medida de sua culpabilidade). A cooperação dolosamente distinta assegura que se o agente quis participar de crime menos grave, ser-lhe-á aplicada a pena deste (art. 29, § 2º).",
        "keyStatutes": [
          "Arts. 22, 26, 27, 28 e 29 do Código Penal"
        ],
        "summaryPoints": [
          "Embriaguez voluntária não afasta a imputabilidade penal (actio libera in causa).",
          "Coação moral irresistível exclui a exigibilidade de conduta diversa (culpabilidade).",
          "Cooperação dolosamente distinta pune o partícipe pela infração que pretendia praticar."
        ]
      },
      {
        "title": "Módulo 6: Teoria da Pena e o Critério Trifásico de Dosimetria (Págs. 29-35)",
        "content": "O sistema de fixação da pena privativa de liberdade é disciplinado pelo art. 68 do CP (Método Trifásico de Nelson Hungria):\n- 1ª Fase (Pena-Base): o juiz avalia as 8 circunstâncias judiciais do art. 59 (culpabilidade, antecedentes, conduta social, personalidade do agente, motivos, circunstâncias, consequências do crime e comportamento da vítima). A fixação deve manter-se estritamente entre o mínimo e o máximo abstratos da lei.\n- 2ª Fase (Pena Provisória): incidem as circunstâncias atenuantes (arts. 65 e 66 - menoridade relativa de 21 anos, confissão espontânea) e agravantes (arts. 61 e 62 - reincidência, motivo fútil). Súmula 231 do STJ: a incidência de circunstância atenuante não pode conduzir à redução da pena abaixo do mínimo legal.\n- 3ª Fase (Pena Definitiva): incidem as causas de aumento (majorantes) e de diminuição de pena (minorantes), com frações matemáticas pré-fixadas (ex.: tentativa - redução de 1 a 2 terços; concurso formal). Nesta fase a pena pode ultrapassar os limites legais abstratos.\nRegimes Prisionais (art. 33): Fechado (pena superior a 8 anos), Semiaberto (pena superior a 4 até 8 anos para réu primário) e Aberto (pena de até 4 anos para não reincidente).",
        "keyStatutes": [
          "Arts. 33, 59 e 68 do Código Penal",
          "Súmula 231 do STJ"
        ],
        "summaryPoints": [
          "Critério trifásico: 1ª Fase (art. 59) -> 2ª Fase (Atenuantes/Agravantes) -> 3ª Fase (Majorantes/Minorantes).",
          "Súmula 231 STJ impede que a pena na 2ª fase seja fixada abaixo do piso legal abstrato.",
          "Tentativa é causa de diminuição valorada na 3ª fase da dosimetria penal."
        ]
      },
      {
        "title": "Módulo 7: Extinção da Punibilidade e Prescrição Penal (Págs. 36-41)",
        "content": "O art. 107 do CP enumera as causas de extinção da punibilidade (morte do agente, anistia, graça, indulto, abolitio criminis, prescrição, decadência, perempção, renúncia e perdão).\nPrescrição da Pretensão Punitiva (PPP):\nO Estado perde o direito de processar e condenar o agente. Calculada com base na pena máxima cominada em abstrato para o crime (art. 109).\n- Prazos do art. 109: pena máxima superior a 12 anos prescreve em 20 anos; superior a 8 até 12 prescreve em 16 anos; superior a 4 até 8 prescreve em 12 anos; superior a 2 até 4 prescreve em 8 anos; de 1 a 2 anos prescreve em 4 anos; inferior a 1 ano prescreve em 3 anos.\n- Redução dos Prazos pela Metade (art. 115): os prazos prescricionais são reduzidos de metade se o criminoso era, ao tempo do crime, menor de 21 anos, ou, na data da sentença, maior de 70 anos.\n- Causas Interruptivas da Prescrição (art. 117): o recebimento da denúncia ou queixa; a pronúncia no Tribunal do Júri; a publicação da sentença ou acórdão condenatório recorrível. Com a interrupção, o prazo prescricional é zerado e recomeça a correr por inteiro.",
        "keyStatutes": [
          "Arts. 107, 109, 115 e 117 do Código Penal"
        ],
        "summaryPoints": [
          "Prescrição em abstrato analisa o teto máximo cominado no tipo penal.",
          "Menor de 21 na data do fato ou maior de 70 na sentença tem prescrição reduzida pela metade.",
          "O recebimento da denúncia interrompe o prazo prescricional e zera a contagem."
        ]
      },
      {
        "title": "Módulo 8: Crimes Contra a Pessoa e Vida no Código Penal (Págs. 42-46)",
        "content": "Crimes contra a Vida (competência privativa do Tribunal do Júri nos termos do art. 5º, XXXVIII da CF):\n- Homicídio Simples e Qualificado (art. 121): pena de 6 a 20 anos (simples) ou 12 a 30 anos (qualificado). Qualificadoras: mediante paga ou promessa de recompensa, motivo fútil ou torpe, com emprego de veneno, fogo, asfixia ou tortura, à traição ou emboscada, e para assegurar a impunidade de outro crime.\n- Feminicídio (art. 121, § 2º, VI): qualificado pelo assassinato de mulher por razões da condição de sexo feminino (violência doméstica e familiar ou menosprezo/discriminação à condição de mulher).\n- Lesão Corporal (art. 129): leve, grave (§ 1º - incapacidade para ocupações habituais por mais de 30 dias, perigo de vida, debilidade permanente) e gravíssima (§ 2º - incapacidade permanente para o trabalho, enfermidade incurável, perda ou inutilização de membro ou deformidade permanente).",
        "keyStatutes": [
          "Arts. 121 e 129 do Código Penal",
          "Lei nº 13.104/2015 (Lei do Feminicídio)"
        ],
        "summaryPoints": [
          "Homicídios dolosos consumados e tentados são julgados pelo Tribunal do Júri.",
          "Feminicídio é qualificadora objetiva/subjetiva com previsão de causa especial de aumento.",
          "Deformidade permanente e enfermidade incurável caracterizam lesão gravíssima."
        ]
      },
      {
        "title": "Módulo 9: Crimes Contra o Patrimônio: Furto, Roubo e Estelionato (Págs. 47-49)",
        "content": "Principais infrações patrimoniais cobradas no certame:\n1. Furto (art. 155): subtração de coisa alheia móvel, para si ou para outrem, sem violência ou grave ameaça à pessoa. Consuma-se com a inversão da posse da coisa, ainda que por breve tempo e mesmo que seguida de imediata perseguição policial (Teoria da Apprehensio ou Amotio, consolidada no Tema 934 do STJ).\n2. Roubo (art. 157): subtração mediante violência, grave ameaça ou depois de haver reduzido a vítima à impossibilidade de resistência. Admite aumento de pena pelo emprego de arma branca e aumento de 2/3 pelo emprego de arma de fogo de uso permitido.\n- Latrocínio (art. 157, § 3º, II): roubo qualificado pelo resultado morte. Trata-se de crime patrimonial com pena de 20 a 30 anos e competência de juiz singular, e não do Tribunal do Júri (Súmula 603 do STF).\n3. Estelionato (art. 171): obtenção de vantagem ilícita induzindo ou mantendo alguém em erro. Com o Pacote Anticrime (Lei 13.964/19), a ação penal passou a ser pública condicionada à representação como regra geral.",
        "keyStatutes": [
          "Arts. 155, 157 e 171 do Código Penal",
          "Súmula 603 do STF",
          "Tema 934 do STJ"
        ],
        "summaryPoints": [
          "Furto e roubo consumam-se com a simples inversão da posse (Teoria da Amotio).",
          "Latrocínio é julgado por juiz singular da vara criminal, não pelo júri (Súmula 603 STF).",
          "Estelionato depende de representação da vítima na imensa maioria das hipóteses."
        ]
      },
      {
        "title": "Módulo 10: Crimes Contra a Administração Pública (Págs. 50-52)",
        "content": "Infrações perpetradas por funcionários públicos ou particulares contra o Estado:\n1. Peculato (art. 312): apropriação ou desvio de dinheiro, valor ou bem móvel público ou particular em razão do cargo. No peculato culposo (§ 2º), a reparação do dano antes da sentença irrecorrível extingue a punibilidade do agente; se posterior, reduz a metade a pena imposta (§ 3º).\n2. Concussão (art. 316): exigir, para si ou para outrem, direta ou indiretamente, vantagem indevida em razão da função. O verbo nuclear é \"exigir\".\n3. Corrupção Passiva (art. 317): solicitar ou receber, para si ou para outrem, ou aceitar promessa de vantagem indevida. O crime consuma-se com o simples pedido ou recebimento.\n4. Prevaricação (art. 319): retardar ou deixar de praticar, indevidamente, ato de ofício, ou praticá-lo contra disposição expressa de lei, para satisfazer interesse ou sentimento pessoal.\n5. Corrupção Ativa (art. 333): praticada pelo particular que oferece ou promete vantagem indevida a funcionário público para determiná-lo a praticar, omitir ou retardar ato de ofício.",
        "keyStatutes": [
          "Arts. 312 a 333 do Código Penal"
        ],
        "summaryPoints": [
          "Peculato culposo: devolução do dinheiro antes da sentença extingue a punibilidade.",
          "Concussão = EXIGIR; Corrupção Passiva = SOLICITAR ou RECEBER.",
          "Prevaricação exige o especial fim de agir de satisfazer sentimento pessoal."
        ]
      }
    ]
  },
  {
    "id": "manual-ext-cpc-50p",
    "title": "Manual Completo de Processo Civil e Recursos no CPC/2015",
    "disciplineId": "processo-civil",
    "author": "Prof. Rodrigo Tavares & Dra. Lilian Vasconcelos",
    "estimatedReadTime": "55 páginas didáticas · 4h10 de estudo aprofundado",
    "pageCount": 55,
    "isExtensiveManual": true,
    "edition": "Manual Completo 2026/2027 · Edição Definitiva",
    "description": "Manual de mais de 50 páginas com análise sistêmica do CPC/15: princípios processuais, tutelas provisórias, competência, petição inicial e defesas, fase probatória, sentença, cumprimento de sentença, teoria geral dos recursos e precedentes obrigatórios.",
    "chapters": [
      {
        "title": "Módulo 1: Princípios Fundamentais e Cooperação no CPC/15 (Págs. 1-5)",
        "content": "O CPC/15 inaugura um modelo constitucional de processo democrático e participativo baseado na boa-fé objetiva e na cooperação processual.\n- Princípio do Contraditório Substancial (arts. 9º e 10): não se proferirá decisão contra uma das partes sem que ela seja previamente ouvida. É expressamente vedada a \"decisão surpresa\", devendo o magistrado intimar as partes para se manifestarem sobre qualquer fundamento jurídico, inclusive sobre matérias cognoscíveis de ofício (ex.: prescrição, decadência, ilegitimidade).\n- Princípio da Cooperação (art. 6º): todos os sujeitos do processo devem cooperar entre si para que se obtenha, em tempo razoável, decisão de mérito justa e efetiva.\n- Princípio da Primazia do Julgamento do Mérito (art. 4º): o juiz deve sempre priorizar a solução de fundo do conflito, oportunizando o suprimento de vícios sanáveis antes de proferir extinção anômala sem resolução do mérito.\n- Negócios Jurídicos Processuais (art. 190): faculta às partes plenamente capazes estipular mudanças no procedimento para ajustá-lo às especificidades da causa e convencionar sobre os seus ônus, poderes, faculdades e deveres processuais.",
        "keyStatutes": [
          "Arts. 4º, 6º, 9º, 10 e 190 do CPC/15"
        ],
        "summaryPoints": [
          "Vedação da decisão surpresa: juiz não pode decidir de ofício sem prévio contraditório.",
          "Primazia do mérito exige oportunizar correção de vícios sanáveis.",
          "Negócio jurídico processual atípico confere autonomia de convenção às partes."
        ]
      },
      {
        "title": "Módulo 2: Competência Jurisdicional e Cooperação Nacional (Págs. 6-10)",
        "content": "A competência jurisdicional divide-se em:\n- Competência Absoluta: fixada em razão da matéria, da pessoa ou do critério funcional. É inderrogável pelas partes e cognoscível de ofício pelo magistrado em qualquer tempo e grau de jurisdição. Não preclui.\n- Competência Relativa: estabelecida em razão do valor da causa ou do território. Pode ser modificada por convenção das partes (eleição de foro) e prorroga-se caso o réu não alegue a incompetência em sede de preliminar de contestação (art. 65).\n- Foro de Eleição (art. 63): as partes podem modificar a competência em razão do valor e do território. O juiz pode reconhecer a ineficácia da cláusula de foro de eleição abusiva em contrato de adesão antes da citação.\n- Conexão e Continência (arts. 55 e 56): ações conexas devem ser reunidas perante o juízo prevento para julgamento conjunto a fim de evitar decisões conflitantes. Prevenção consuma-se com o registro ou a distribuição da petição inicial (art. 59).",
        "keyStatutes": [
          "Arts. 42 a 66 do CPC/15"
        ],
        "summaryPoints": [
          "Incompetência relativa deve ser arguida em preliminar de contestação sob pena de prorrogação.",
          "Incompetência absoluta não preclui e pode ser declarada de ofício pelo magistrado.",
          "Prevenção processual consuma-se com a distribuição da primeira petição inicial."
        ]
      },
      {
        "title": "Módulo 3: Tutelas Provisórias de Urgência e de Evidência (Págs. 11-17)",
        "content": "O Livro V do CPC/15 unificou o regime das tutelas provisórias, dividindo-as em:\n1. Tutela de Urgência (art. 300): exige cumulativamente:\n- Fumus boni iuris (probabilidade do direito alegado);\n- Periculum in mora (perigo de dano ou o risco ao resultado útil do processo);\n- Reversibilidade dos efeitos: a tutela de urgência de natureza antecipada não será concedida quando houver perigo de irreversibilidade dos efeitos da decisão (§ 3º). Pode ser antecedente ou incidental.\n- Estabilização da Tutela Antecipada Antecedente (art. 304): deferida a tutela e não havendo interposição de recurso de agravo de instrumento pelo réu, a medida torna-se estável e o processo é extinto sem resolução de mérito. Qualquer das partes tem 2 (dois) anos para ajuizar ação para rever ou anular a decisão estabilizada.\n2. Tutela de Evidência (art. 311): independe da demonstração de perigo de dano ou risco ao resultado útil! Hipóteses:\nI - Abuso do direito de defesa ou manifesto propósito protelatório do réu;\nII - Alegações comprovadas apenas documentalmente e houver tese firmada em julgamento de casos repetitivos ou em súmula vinculante;\nIII - Pedido reipersecutório fundado em prova documental adequada do contrato de depósito;\nIV - Petição inicial instruída com prova documental suficiente dos fatos e o réu não opuser prova capaz de gerar dúvida razoável.",
        "keyStatutes": [
          "Arts. 294 a 311 do CPC/15"
        ],
        "summaryPoints": [
          "Tutela de urgência exige probabilidade do direito e perigo de dano.",
          "Estabilização da tutela antecipada antecedente decorre da falta de agravo de instrumento.",
          "Tutela de evidência independe totalmente da comprovação de urgência ou perigo de dano."
        ]
      },
      {
        "title": "Módulo 4: Fase Postulatória, Contestação e Revelia (Págs. 18-24)",
        "content": "A petição inicial (art. 319) instaura a demanda e fixa os limites objetivos da lide.\nDefesa do Réu:\n- Audiência de Conciliação ou Mediação (art. 334): obrigatória, salvo se ambas as partes manifestarem expressamente desinteresse na composição ou se a matéria não admitir autocomposição. O não comparecimento injustificado configura ato atentatório à dignidade da justiça, sancionado com multa de até 2% do valor da causa.\n- Contestação (art. 335): prazo de 15 (quinze) dias úteis. Princípio da eventualidade ou concentração da defesa: toda e qualquer matéria de defesa preliminar (art. 337 - incompetência, inépcia, litispendência, coisa julgada) e de mérito deve ser aduzida na contestação sob pena de preclusão.\n- Reconvenção (art. 343): proposta na própria peça da contestação para manifestar pretensão própria conexa com a ação principal ou com os fundamentos da defesa.\n- Revelia (arts. 344 a 346): ocorre quando o réu não contesta a ação. Efeito material: presunção de veracidade das alegações de fato formuladas pelo autor. Não opera efeitos se: havendo pluralidade de réus, algum contestar; o litígio versar sobre direitos indisponíveis; a petição inicial não estiver acompanhada de instrumento que a lei considere indispensável à prova do ato.",
        "keyStatutes": [
          "Arts. 319, 334, 335, 337, 343 e 344 do CPC/15"
        ],
        "summaryPoints": [
          "Ausência injustificada na audiência de conciliação gera multa de até 2% por ato atentatório à justiça.",
          "Reconvenção é proposta dentro da própria contestação no CPC/15.",
          "Revelia não gera presunção de veracidade sobre direitos indisponíveis."
        ]
      },
      {
        "title": "Módulo 5: Teoria Geral da Prova e Saneamento Processual (Págs. 25-30)",
        "content": "Fase Probatória e Ônus da Prova (art. 373):\n- Distribuição estática clássica: incumbe ao autor a prova do fato constitutivo de seu direito (inciso I); incumbe ao réu a prova da existência de fato impeditivo, modificativo ou extintivo do direito do autor (inciso II).\n- Distribuição dinâmica do ônus da prova (art. 373, § 1º): diante de peculiaridades da causa relacionadas à impossibilidade ou à excessiva dificuldade de cumprir o encargo, ou à maior facilidade de obtenção da prova pela parte adversa, o juiz poderá atribuir o ônus de modo diverso, em decisão fundamentada concedendo oportunidade para desincumbência.\nDecisão de Saneamento e Organização do Processo (art. 357): o juiz resolverá as questões processuais pendentes, delimitará as questões de fato sobre as quais recairá a atividade probatória, delimitará as questões de direito e designará audiência de instrução e julgamento se necessário.",
        "keyStatutes": [
          "Arts. 357 e 373 do CPC/15"
        ],
        "summaryPoints": [
          "Distribuição dinâmica do ônus da prova atribuída ao litigante com maior facilidade técnica.",
          "Fato impeditivo, modificativo ou extintivo é ônus probatório que recai sobre o réu.",
          "Decisão de saneamento estabiliza o objeto probatório e os pontos controvertidos."
        ]
      },
      {
        "title": "Módulo 6: Sentença, Coisa Julgada e Liquidação (Págs. 31-36)",
        "content": "A sentença é o pronunciamento pelo qual o magistrado põe fim à fase cognitiva do procedimento comum ou extingue a execução (art. 203, § 1º).\nElementos Essenciais da Sentença (art. 489): relatório, fundamentos e dispositivo.\nÉ nula a decisão que:\nI - se limita à indicação ou reprodução de ato normativo sem explicar sua relação com a causa;\nII - emprega conceitos jurídicos indeterminados sem demonstrar a razão concreta de sua aplicação;\nIV - não enfrenta todos os argumentos deduzidos no processo capazes de infirmar a conclusão adotada pelo julgador;\nVI - deixa de seguir enunciado de súmula, jurisprudência ou precedente invocado pela parte sem demonstrar a distinção (distinguishing) ou superação (overruling).\nCoisa Julgada Material (art. 502): torna imutável e indiscutível a decisão de mérito não mais sujeita a recurso. Apenas o dispositivo faz coisa julgada material; a verdade dos fatos e os motivos expostos na fundamentação não fazem coisa julgada (art. 504).",
        "keyStatutes": [
          "Arts. 485, 487, 489 e 502 a 504 do CPC/15"
        ],
        "summaryPoints": [
          "Sentença desprovida de enfrentamento de teses que possam infirmar o julgado é nula.",
          "Motivos e fundamentação fática não fazem coisa julgada material.",
          "Distinguishing exige demonstração das diferenças fáticas com o precedente citado."
        ]
      },
      {
        "title": "Módulo 7: Teoria Geral dos Recursos e Prazos Unificados (Págs. 37-42)",
        "content": "O CPC/15 consagrou a simplificação e uniformização procedimental dos recursos:\n- Prazos: todos os recursos possuem prazo de 15 (quinze) dias úteis, com exceção exclusiva dos Embargos de Declaração, cujo prazo é de 5 (cinco) dias úteis (art. 1.003, § 5º).\n- Contagem: estritamente em dias úteis (art. 219).\n- Preparo (art. 1.007): a insuficiência no recolhimento do preparo implica a intimação do recorrente para complementá-lo no prazo improrrogável de 5 dias úteis. A ausência total de preparo gera a intimação para recolhimento em dobro sob pena de deserção (§ 4º).\n- Efeito Suspensivo Ope Judicis: no CPC/15, apenas a Apelação detém efeito suspensivo automático ope legis como regra geral (art. 1.012). Todos os demais recursos possuem efeito meramente devolutivo, cabendo ao relator deferir efeito suspensivo se houver risco de dano grave e probabilidade de provimento (art. 995, parágrafo único).",
        "keyStatutes": [
          "Arts. 219, 995, 1.003 e 1.007 do CPC/15"
        ],
        "summaryPoints": [
          "Prazo geral de 15 dias úteis para recursos (Embargos de Declaração = 5 dias).",
          "Preparo ausente enseja recolhimento em dobro; preparo a menor admite complementação simples em 5 dias.",
          "Apelação tem efeito suspensivo legal automático; demais recursos dependem de pedido cautelar."
        ]
      },
      {
        "title": "Módulo 8: Apelação, Agravo de Instrumento e o Tema 988 do STJ (Págs. 43-47)",
        "content": "Espécies recursais capitais:\n1. Apelação (art. 1.009): cabível contra a sentença terminativa ou definitiva. Possui efeito devolutivo amplo, devolvendo ao tribunal o conhecimento de toda a matéria impugnada e das questões não preclusas decididas na fase de conhecimento que não comportavam agravo de instrumento.\n2. Agravo de Instrumento (art. 1.015): cabe contra decisões interlocutórias de urgência e expressas: tutelas provisórias, mérito do processo, rejeição da gratuidade de justiça ou acolhimento do pedido de sua revogação, exibição ou posse de coisa, exclusão de litisconsorte, rejeição do pedido de limitação do litisconsórcio, fase de cumprimento de sentença e processo de execução.\n- Taxatividade Mitigada (Tema 988 do STJ): o Superior Tribunal de Justiça firmou a tese de que o rol do art. 1.015 é de taxatividade mitigada, admitindo-se a interposição de agravo de instrumento fora do rol quando verificada a urgência decorrente da inutilidade do julgamento da questão em posterior apelação.\n3. Embargos de Declaração (art. 1.022): cabíveis contra qualquer decisão judicial para sanar obscuridade, contradição, omissão ou erro material. Não exigem preparo e interrompem o prazo para interposição de outros recursos.",
        "keyStatutes": [
          "Arts. 1.009, 1.015 e 1.022 do CPC/15",
          "Tema Repetitivo 988 do STJ"
        ],
        "summaryPoints": [
          "Decisões interlocutórias não agraváveis não precluem e podem ser suscitadas na apelação.",
          "Tema 988 do STJ: taxatividade mitigada autoriza agravo quando o adiamento gerar dano irreparável.",
          "Embargos de Declaração interrompem (zeram) o prazo para os demais recursos."
        ]
      },
      {
        "title": "Módulo 9: Cumprimento de Sentença e Execução de Títulos (Págs. 48-51)",
        "content": "O cumprimento de sentença definitiva de obrigação de pagar quantia certa (art. 523) inicia-se a requerimento do exequente.\n- Intimação do Devedor: para pagar o débito no prazo de 15 (quinze) dias úteis.\n- Multa e Honorários de 10%: não ocorrendo o pagamento voluntário no prazo de 15 dias, o débito será acrescido de multa de 10% (dez por cento) e, também, de honorários advocatícios de 10% sobre o montante inadimplido (§ 1º).\n- Impugnação ao Cumprimento de Sentença (art. 525): transcorrido o prazo de 15 dias para pagamento voluntário, inicia-se automaticamente o prazo de 15 dias para o executado apresentar impugnação, nos próprios autos, independentemente de penhora ou garantia do juízo.\nExecução de Título Extrajudicial (art. 771 em diante):\nO devedor é citado para pagar em 3 dias (art. 829). Os Embargos à Execução (art. 914) têm prazo de 15 dias contados da juntada do mandado de citação, distribuídos por dependência e autuados em apartado, dispensando penhora prévia.",
        "keyStatutes": [
          "Arts. 523, 525, 827, 829 e 914 do CPC/15"
        ],
        "summaryPoints": [
          "Cumprimento de sentença: 15 dias para pagar + 15 dias para impugnar.",
          "Não pagamento no prazo legal gera multa de 10% e honorários de 10%.",
          "Embargos à execução dispensam garantia prévia do juízo como regra geral."
        ]
      },
      {
        "title": "Módulo 10: Sistema de Precedentes Judiciais Obrigatórios no CPC/15 (Págs. 52-55)",
        "content": "O art. 926 do CPC impõe que os tribunais uniformizem sua jurisprudência e a mantenham estável, íntegra e coerente.\nRol de Precedentes Vinculantes (art. 927):\nOs juízes e os tribunais observarão:\nI - as decisões do Supremo Tribunal Federal em controle concentrado de constitucionalidade;\nII - os enunciados de súmula vinculante;\nIII - os acórdãos em incidente de assunção de competência (IAC) ou de resolução de demandas repetitivas (IRDR) e em julgamento de recursos extraordinário e especial repetitivos;\nIV - os enunciados das súmulas do Supremo Tribunal Federal em matéria constitucional e do Superior Tribunal de Justiça em matéria infraconstitucional;\nV - a orientação do plenário ou do órgão especial aos quais estiverem vinculados.\nTécnicas de Confronto com o Precedente:\n- Distinguishing (Distinção): demonstração motivada de que o caso em julgamento possui particularidades fáticas que não se amoldam à tese jurídica do precedente.\n- Overruling (Superação): revogação e superação da tese jurídica em razão de modificação axiológica, fática ou legal, exigindo modulação temporal de efeitos para proteger a confiança dos jurisdicionados.",
        "keyStatutes": [
          "Arts. 926 e 927 do CPC/15"
        ],
        "summaryPoints": [
          "Art. 927 fixa rol de precedentes de observância obrigatória por todos os magistrados.",
          "IRDR, IAC e Recursos Repetitivos têm força vinculante obrigatória.",
          "A superação de precedente (overruling) exige modulação para assegurar estabilidade jurídica."
        ]
      }
    ]
  },
  {
    "id": "mat-etica-01",
    "title": "Manual de Prerrogativas e Ética na Advocacia (Lei 8.906/94)",
    "disciplineId": "etica",
    "author": "Prof. Lucas Mendes · Especialista OAB FGV",
    "estimatedReadTime": "15 min de leitura",
    "description": "Resumo completo e sistematizado dos arts. 6º a 26 do Estatuto da OAB, prerrogativas, incompatibilidades e honorários.",
    "chapters": [
      {
        "title": "1. Inexistência de Hierarquia e Prerrogativas do Advogado",
        "content": "Não há hierarquia nem subordinação entre advogados, magistrados e membros do Ministério Público (art. 6º da Lei 8.906/94). Todos devem dispensar-se consideração e respeito recíprocos. As prerrogativas não constituem privilégios corporativos, mas garantias consagradas para o pleno exercício do direito de ampla defesa do cidadão.\nEntre os principais direitos assegurados pelo art. 7º:\n1. Inviolabilidade do escritório, instrumentos de trabalho e correspondência (salvo mandado de busca e apreensão fundamentado por indícios de autoria delitiva praticada pelo próprio causídico, acompanhado por representante da OAB).\n2. Comunicação pessoal e reservada com clientes presos ou detidos, ainda que incomunicáveis, sem necessidade de procuração.\n3. Exame de autos de investigação policial ou administrativa em qualquer repartição civil ou militar, findos ou em andamento, inclusive sem procuração (salvo segredo de justiça documentado).",
        "keyStatutes": [
          "Art. 6º da Lei 8.906/94",
          "Art. 7º, II, III e XIV da Lei 8.906/94",
          "Art. 133 da CF/88"
        ],
        "summaryPoints": [
          "Inexistência de subordinação entre juiz, promotor e advogado.",
          "Comunicação reservada com preso mesmo sem procuração.",
          "Inviolabilidade do domicílio profissional e correspondências de trabalho."
        ]
      },
      {
        "title": "2. Incompatibilidades e Impedimentos",
        "content": "A incompatibilidade (art. 28) gera a proibição TOTAL para o exercício da advocacia, mesmo em causa própria. Exemplos clássicos: Chefes do Poder Executivo, membros do Poder Judiciário e MP, policiais de qualquer natureza, auditores tributários e ocupantes de cargos de direção em cartórios judiciais e extrajudiciais.\nJá o impedimento (art. 30) acarreta a proibição PARCIAL, limitando o patrocínio em determinadas esferas. O caso mais cobrado na prova é o dos servidores públicos da administração direta e indireta, que são impedidos de advogar contra a Fazenda Pública que os remunera ou à qual vincula sua função.",
        "keyStatutes": [
          "Art. 28 da Lei 8.906/94 (Incompatibilidade)",
          "Art. 30 da Lei 8.906/94 (Impedimento)"
        ],
        "summaryPoints": [
          "Incompatibilidade = Vedação total (Polícia, Magistratura, MP, Prefeito, Governador).",
          "Impedimento = Vedação parcial (Servidor público contra o Ente pagador)."
        ]
      },
      {
        "title": "3. Honorários Advocatícios e Sociedade Unipessoal",
        "content": "Os honorários podem ser convencionados (contratuais), arbitrados judicialmente ou de sucumbência (art. 22). Os honorários de sucumbência pertencem exclusivamente ao advogado, possuem natureza alimentar e são insuscetíveis de compensação em caso de sucumbência recíproca (art. 85, § 14 do CPC). A ação de cobrança de honorários prescreve em 5 (cinco) anos.\nA legislação admite a sociedade unipessoal de advocacia (Lei 13.247/16), na qual o causídico responde ilimitadamente pelos danos causados por culpa ou dolo.",
        "keyStatutes": [
          "Arts. 22 a 26 da Lei 8.906/94",
          "Art. 85, § 14 do CPC/15",
          "Súmula Vinculante 47 do STF"
        ],
        "summaryPoints": [
          "Honorários de sucumbência pertencem privativamente ao patrono.",
          "Vedada compensação em sucumbência recíproca.",
          "Prescrição da cobrança: 5 anos."
        ]
      }
    ]
  },
  {
    "id": "mat-const-01",
    "title": "Guia do Controle de Constitucionalidade e Direitos Fundamentais",
    "disciplineId": "constitucional",
    "author": "Dra. Beatriz Albuquerque · Mestre em Direito Constitucional",
    "estimatedReadTime": "18 min de leitura",
    "description": "Quadro comparativo entre controle difuso e concentrado (ADI, ADC, ADO, ADPF) e teoria dos direitos fundamentais.",
    "chapters": [
      {
        "title": "1. Controle Difuso e Cláusula de Reserva de Plenário",
        "content": "O controle difuso (ou incidental/aberto) é exercido por qualquer órgão jurisdicional singular ou colegiado diante de uma lide subjetiva real. A declaração de inconstitucionalidade é incidental à solução do pedido principal.\nNos tribunais, impõe-se a estrita observância da Cláusula de Reserva de Plenário (art. 97 da CF/88 e Súmula Vinculante 10): a inconstitucionalidade de lei ou ato normativo somente pode ser declarada pelo voto da maioria absoluta dos membros do pleno ou de seu órgão especial. A decisão gera efeitos inter partes, com possibilidade de extensão de efeitos vinculantes via mutação constitucional do STF ou resolução suspensiva do Senado Federal (art. 52, X).",
        "keyStatutes": [
          "Art. 97 da CF/88",
          "Súmula Vinculante nº 10 do STF",
          "Art. 52, X da CF/88"
        ],
        "summaryPoints": [
          "Qualquer magistrado de primeiro grau pode reconhecer a inconstitucionalidade no caso.",
          "Tribunais exigem quórum de maioria absoluta do plenário para invalidar lei.",
          "A Súmula Vinculante 10 proíbe que turmas ou câmaras esvaziem a lei sem remessa ao pleno."
        ]
      },
      {
        "title": "2. Controle Concentrado e Ações Diretas no STF",
        "content": "Processado diretamente perante o Supremo Tribunal Federal, visando à proteção abstrata da ordem jurídica constitucional. Ações típicas:\n- ADI genérica: Leis federais ou estaduais pós-constitucionais contra a CF.\n- ADC: Confirmação de presunção de constitucionalidade de lei federal controversa.\n- ADO: Combate à mora inconstitucional dos poderes legislativos na regulamentação de preceitos fundamentais.\n- ADPF: Subsidiária, cabível contra direito pré-constitucional, leis municipais ou violações de preceitos basilares.\nO rol de legitimados ativos está taxativamente disciplinado no art. 103 da Carta Magna, dividindo-se entre legitimados universais (que independem de demonstração de interesse) e legitimados especiais (governadores, assembleias e confederações/entidades de classe de âmbito nacional, que exigem pertinência temática).",
        "keyStatutes": [
          "Art. 102, I, \"a\" da CF/88",
          "Art. 103 da CF/88",
          "Lei nº 9.868/1999",
          "Lei nº 9.882/1999"
        ],
        "summaryPoints": [
          "Decisões em controle concentrado têm eficácia erga omnes e efeito vinculante.",
          "Legitimados especiais exigem pertinência temática direta.",
          "ADPF possui caráter subsidiário e alcança direito municipal e pré-constitucional."
        ]
      }
    ]
  },
  {
    "id": "mat-civil-01",
    "title": "Compêndio de Direito Civil: Negócio Jurídico e Responsabilidade",
    "disciplineId": "civil",
    "author": "Prof. Felipe Guimarães · Advogado e Docente de Direito Civil",
    "estimatedReadTime": "20 min de leitura",
    "description": "Invalidade do negócio jurídico, vícios do consentimento, prescrição versus decadência e responsabilidade civil aquiliana.",
    "chapters": [
      {
        "title": "1. Teoria do Negócio Jurídico e Defeitos da Vontade",
        "content": "O negócio jurídico pressupõe os planos da existência, validade e eficácia (Escada Ponteana). A nulidade absoluta decorre de incapacidade absoluta, objeto ilícito ou impossível e preterição de solenidade legal, não convalescendo pelo decurso do tempo (art. 169 do CC).\nA anulabilidade (nulidade relativa) vincula-se a incapacidade relativa ou defeitos do consentimento: erro, dolo, coação, estado de perigo e lesão, cujo prazo decadencial geral para anulação é de 4 (quatro) anos (art. 178 do CC). A fraude contra credores também conduz à anulação via Ação Pauliana. Já a simulação, desde a edição do CC/2002, constitui causa de nulidade absoluta (art. 167).",
        "keyStatutes": [
          "Arts. 166 a 184 do Código Civil",
          "Art. 178 do Código Civil"
        ],
        "summaryPoints": [
          "Nulidade absoluta não convalesce com o tempo nem admite confirmação.",
          "Anulabilidade por erro, dolo, coação, estado de perigo ou lesão decai em 4 anos.",
          "Simulação é causa de nulidade absoluta no Código Civil de 2002."
        ]
      },
      {
        "title": "2. Responsabilidade Civil: Subjetiva vs Objetiva",
        "content": "A regra geral no ordenamento civil é a responsabilidade subjetiva fundada na tríade: conduta culposa/dolosa, nexo de causalidade e dano experimentado (art. 186 e 927, caput, do CC).\nA responsabilidade objetiva independe de culpa nos casos expressos em lei ou quando a atividade habitualmente desenvolvida pelo autor do dano implicar risco excepcional aos direitos alheios (art. 927, parágrafo único). Excludentes do nexo causal (força maior, culpa exclusiva da vítima ou fato de terceiro imprevisível) rompem a responsabilização em ambas as modalidades.",
        "keyStatutes": [
          "Arts. 186, 187 e 927 do Código Civil",
          "Art. 932 do Código Civil"
        ],
        "summaryPoints": [
          "Subjetiva = Exige comprovação de negligência, imprudência ou dolo.",
          "Objetiva = Exige apenas atividade de risco ou previsão legal expressa.",
          "Pais e empregadores respondem objetivamente por atos de filhos e prepostos (art. 932 c/c 933)."
        ]
      }
    ]
  },
  {
    "id": "mat-cpc-01",
    "title": "Manual Prático de Recursos no CPC/2015",
    "disciplineId": "processo-civil",
    "author": "Prof. Rodrigo Tavares · Mestre em Processo Civil",
    "estimatedReadTime": "18 min de leitura",
    "description": "Prazos unificados de 15 dias, hipóteses de cabimento do agravo de instrumento e teoria geral recursal.",
    "chapters": [
      {
        "title": "1. Prazos Processuais e Princípios Recursais",
        "content": "O CPC/15 uniformizou os prazos recursais em 15 (quinze) dias úteis para todas as espécies, excetuando exclusivamente os Embargos de Declaração, cujo prazo é de 5 (cinco) dias úteis. A contagem de prazos dá-se exclusivamente em dias úteis para atos processuais procedimentais (art. 219).\nPreparo: A falta de recolhimento gera intimação para recolhimento em dobro (art. 1.007, § 4º), ao passo que o recolhimento insuficiente autoriza a complementação simples no prazo improrrogável de 5 dias úteis, antes da decretação de deserção.",
        "keyStatutes": [
          "Art. 1.003, § 5º do CPC/15",
          "Art. 219 do CPC/15",
          "Art. 1.007 do CPC/15"
        ],
        "summaryPoints": [
          "Prazo geral de 15 dias úteis (Embargos de Declaração = 5 dias).",
          "Contagem exclusivamente em dias úteis.",
          "Preparo insuficiente enseja prazo de 5 dias para complementação simples."
        ]
      },
      {
        "title": "2. Agravo de Instrumento e o Rol do Art. 1.015 do CPC",
        "content": "O Agravo de Instrumento é a via recursal imediata cabível contra decisões interlocutórias expressamente arroladas na legislação: tutelas provisórias, mérito da causa, rejeição da gratuidade de justiça, exibição ou posse de coisa, entre outras.\nO Superior Tribunal de Justiça, ao julgar o Tema Repetitivo 988, fixou a tese da \"taxatividade mitigada\": admite-se o agravo de instrumento fora das hipóteses do art. 1.015 quando verificada urgência decorrente da inutilidade do julgamento da questão em sede de preliminar de apelação futura.",
        "keyStatutes": [
          "Art. 1.015 do CPC/15",
          "Tema Repetitivo 988 do STJ"
        ],
        "summaryPoints": [
          "Decisões interlocutórias não agraváveis não sofrem preclusão imediata.",
          "Questões não agraváveis podem ser suscitadas na apelação ou nas contrarrazões.",
          "Taxatividade mitigada do rol do art. 1.015 reconhecida pelo STJ para casos urgentes."
        ]
      }
    ]
  },
  {
    "id": "mat-penal-01",
    "title": "Teoria Geral do Crime e Penas no Código Penal",
    "disciplineId": "penal",
    "author": "Dra. Gabriela Vasconcelos · Especialista em Ciências Criminais",
    "estimatedReadTime": "20 min de leitura",
    "description": "Estrutura analítica do crime (fato típico, ilícito e culpável), excludentes de ilicitude, concurso de pessoas e dosimetria da pena.",
    "chapters": [
      {
        "title": "1. Fato Típico, Ilicitude e Causas de Justificação",
        "content": "Pelo conceito analítico tripartite adotado majoritariamente, o crime é composto por fato típico, ilicitude (antijuridicidade) e culpabilidade.\nO fato típico engloba conduta voluntária (ação ou omissão), resultado naturalístico, nexo de causalidade e tipicidade (formal e material).\nAs causas excludentes de ilicitude estão positivadas no art. 23 do CP:\n1. Estado de necessidade: sacrifício de bem jurídico alheio de valor igual ou menor para salvaguardar direito próprio ou de outrem de perigo atual não provocado dolosamente.\n2. Legítima defesa: repulsa proporcional a agressão injusta, atual ou iminente, a direito próprio ou alheio.\n3. Estrito cumprimento de dever legal e exercício regular de direito.",
        "keyStatutes": [
          "Arts. 13 a 25 do Código Penal"
        ],
        "summaryPoints": [
          "Conceito analítico: Fato Típico + Ilícito + Culpável.",
          "Excludentes de ilicitude: Legítima defesa, estado de necessidade, estrito cumprimento de dever legal.",
          "O excesso doloso ou culposo é punível em qualquer das causas justificantes."
        ]
      },
      {
        "title": "2. Culpabilidade e Critério Trifásico da Pena",
        "content": "A culpabilidade atua como juízo de reprovabilidade e contempla: imputabilidade mental (maioridade e higidez psíquica), potencial consciência da ilicitude e exigibilidade de conduta diversa.\nA fixação da pena privativa de liberdade obedece ao critério trifásico de Nelson Hungria (art. 68 do CP):\n1ª Fase: Pena-base analisada conforme as 8 circunstâncias judiciais do art. 59 (culpabilidade, antecedentes, conduta social, personalidade, etc.).\n2ª Fase: Incidência de atenuantes (ex.: confissão espontânea) e agravantes (ex.: reincidência), observado o limite do art. 65 e sem ultrapassar os limites abstratos da lei (Súmula 231 do STJ).\n3ª Fase: Causas de diminuição (tentativa) e aumento de pena (majorantes) com fração expressa na lei.",
        "keyStatutes": [
          "Arts. 59 e 68 do Código Penal",
          "Súmula 231 do STJ"
        ],
        "summaryPoints": [
          "Inimputáveis por anomalia mental recebem medida de segurança (absolvição imprópria).",
          "Súmula 231 do STJ proíbe atenuantes reduzirem a pena aquém do mínimo legal na 2ª fase.",
          "Tentativa diminui a pena de 1 a 2 terços conforme a proximidade da consumação."
        ]
      }
    ]
  },
  {
    "id": "mat-proc-penal-01",
    "title": "Guia de Processo Penal: Investigação, Prisões Cautelares e Recursos",
    "disciplineId": "processo-penal",
    "author": "Prof. Henrique Martins · Delegado de Polícia e Professor",
    "estimatedReadTime": "22 min de leitura",
    "description": "Inquérito policial, flagrante, prisão preventiva, medidas cautelares diversas da prisão e recursos criminais (RESE e Apelação).",
    "chapters": [
      {
        "title": "1. Inquérito Policial e Prisões Cautelares",
        "content": "O inquérito policial possui natureza administrativa, informativa, inquisitorial, discricionária e indisponível (a autoridade policial jamais pode determinar o arquivamento de ofício - art. 17 do CPP).\nA prisão preventiva (art. 312 do CPP) só pode ser decretada mediante requerimento do MP ou representação da autoridade policial, sendo vedada a decretação de ofício pelo magistrado. Requisitos basilares: garantia da ordem pública, da ordem econômica, conveniência da instrução criminal ou asseguração da aplicação da lei penal (fumus comissi delicti e periculum libertatis), quando insuficientes as cautelares diversas da prisão (art. 319).",
        "keyStatutes": [
          "Arts. 17 e 28 do CPP",
          "Arts. 312 e 319 do CPP"
        ],
        "summaryPoints": [
          "Inquérito policial é indisponível para o delegado (art. 17 CPP).",
          "Juiz não pode decretar prisão preventiva de ofício.",
          "A prisão preventiva pressupõe a contemporaneidade e a ineficácia das medidas do art. 319."
        ]
      },
      {
        "title": "2. Recursos Criminais: Apelação e RESE",
        "content": "O Recurso em Sentido Estrito (RESE - art. 581 do CPP) tem prazo de 5 (cinco) dias para interposição e 2 (dois) dias para razões. Possui rol taxativo e contempla hipóteses essenciais como a rejeição da denúncia ou queixa e a decisão que pronuncia o réu para julgamento pelo Tribunal do Júri. Possui efeito regressivo (juízo de retratação).\nJá a Apelação (art. 593 do CPP) é cabível contra sentenças definitivas de condenação ou absolvição proferidas por juiz singular, bem como decisões terminativas não impugnáveis por RESE, com prazo de 5 dias para interposição e 8 dias para apresentação das razões recursais.",
        "keyStatutes": [
          "Art. 581 do CPP (RESE)",
          "Art. 593 do CPP (Apelação)"
        ],
        "summaryPoints": [
          "RESE: prazo de 5 dias para interposição e 2 dias para razões recursais.",
          "Pronúncia no Júri desafia RESE; impronúncia e absolvição sumária desafiam Apelação.",
          "RESE confere ao magistrado a faculdade de retratação."
        ]
      }
    ]
  },
  {
    "id": "mat-trabalho-01",
    "title": "Guia Prático de Direito Individual e Coletivo do Trabalho",
    "disciplineId": "trabalho",
    "author": "Dra. Camila Vasconcellos · Juíza do Trabalho Aposentada",
    "estimatedReadTime": "18 min de leitura",
    "description": "Contrato de trabalho, jornada, equiparação salarial, verbas rescisórias e estabilidades provisórias pós-reforma.",
    "chapters": [
      {
        "title": "1. Jornada de Trabalho, Horas Extras e Intervalos",
        "content": "A duração normal do trabalho não poderá exceder a 8 (oito) horas diárias e 44 (quarenta e quatro) semanais (art. 7º, XIII da CF/88). Horas suplementares não podem exceder 2 diárias e exigem remuneração mínima adicional de 50% (art. 59 da CLT).\nApós a Reforma Trabalhista (Lei 13.467/17), a não concessão ou concessão parcial do intervalo intrajornada mínimo (de 1 hora para jornadas superiores a 6 horas) implica o pagamento apenas do período suprimido, com acréscimo de 50%, possuindo natureza estritamente indenizatória (não repercutindo nas demais verbas contratuais).",
        "keyStatutes": [
          "Art. 7º, XIII da CF/88",
          "Art. 71, § 4º da CLT",
          "Súmula 338 do TST"
        ],
        "summaryPoints": [
          "Jornada constitucional padrão: 8h diárias e 44h semanais.",
          "Supressão de intervalo intrajornada gera pagamento apenas do tempo suprimido com 50% de natureza indenizatória.",
          "Teletrabalho pode ser estipulado com dispensa de controle de jornada (art. 62, III da CLT)."
        ]
      },
      {
        "title": "2. Prescrição Trabalhista e Rescisão Contratual",
        "content": "A prescrição dos créditos resultantes das relações de trabalho é de 5 (cinco) anos para os trabalhadores urbanos e rurais, até o limite de 2 (dois) anos após a extinção do contrato de trabalho (prescrição bienal e quinquenal - art. 7º, XXIX da CF/88 e art. 11 da CLT).\nA rescisão por acordo mútuo entre empregado e empregador (art. 484-A da CLT) confere pagamento pela metade do aviso prévio e da indenização rescisória do FGTS (20%), permitindo o levantamento de até 80% do saldo depositado do FGTS, sem direito ao seguro-desemprego.",
        "keyStatutes": [
          "Art. 7º, XXIX da CF/88",
          "Art. 11 da CLT",
          "Art. 484-A da CLT"
        ],
        "summaryPoints": [
          "Prescrição bienal (2 anos da rescisão) e quinquenal (5 anos retroativos ao ajuizamento).",
          "Demissão consensual (art. 484-A): metade do aviso e 20% de multa do FGTS.",
          "Prazo de homologação e pagamento de verbas rescisórias unificado em 10 dias corridos."
        ]
      }
    ]
  },
  {
    "id": "mat-proc-trabalho-01",
    "title": "Manual de Processo do Trabalho: Ritos, Audiência e Recursos",
    "disciplineId": "processo-trabalho",
    "author": "Prof. Felipe Rocha · Advogado Trabalhista e Professor",
    "estimatedReadTime": "17 min de leitura",
    "description": "Ritos ordinário e sumaríssimo, revelia trabalhista, depósito recursal e Recursos no TST.",
    "chapters": [
      {
        "title": "1. Ritos Processuais e Audiência Una",
        "content": "O Rito Sumaríssimo aplica-se a causas de até 40 (quarenta) salários mínimos na data do ajuizamento. Exige pedido líquido e individualizado e endereço exato da reclamada, sendo vedada a citação por edital. Limita-se a inquirição a no máximo 2 testemunhas por parte (art. 852-H, § 2º da CLT).\nNo rito ordinário (acima de 40 salários mínimos), são admitidas até 3 testemunhas por litigante.\nNa audiência trabalhista, o não comparecimento do reclamante importa o arquivamento da reclamação trabalhista. A ausência do reclamado gera revelia e confissão ficta quanto à matéria de fato (art. 844 da CLT).",
        "keyStatutes": [
          "Arts. 844 e 852-A a 852-I da CLT"
        ],
        "summaryPoints": [
          "Rito Sumaríssimo: até 40 salários mínimos, sem citação por edital e até 2 testemunhas.",
          "Ausência do reclamante gera arquivamento da ação.",
          "Ausência do reclamado gera revelia e confissão quanto aos fatos."
        ]
      },
      {
        "title": "2. Sistema Recursal Trabalhista",
        "content": "Os recursos trabalhistas têm prazo unificado de 8 (oito) dias úteis (Recurso Ordinário, Agravo de Petição, Recurso de Revista, Agravo de Instrumento e Embargos no TST). A única exceção de relevo são os Embargos de Declaração, com prazo de 5 dias úteis (art. 897-A da CLT).\nO Recurso Ordinário cabe da sentença terminativa ou definitiva das Varas do Trabalho para o TRT. O Recurso de Revista cabe ao TST exclusivamente para uniformização jurisprudencial ou ofensa direta à CF e súmulas, exigindo transcendência e não admitindo reexame de matéria fática (Súmula 126 do TST).",
        "keyStatutes": [
          "Art. 893 e 895 da CLT",
          "Art. 896 da CLT",
          "Súmula 126 do TST"
        ],
        "summaryPoints": [
          "Prazo geral recursal trabalhista: 8 dias úteis (Embargos de Declaração = 5 dias).",
          "Recurso de Revista não permite reapreciação de provas e fatos.",
          "Beneficiário da justiça gratuita é dispensado do recolhimento de custas e depósito recursal."
        ]
      }
    ]
  },
  {
    "id": "mat-admin-01",
    "title": "Direito Administrativo: Atos, Contratos e a Nova Lei de Licitações (14.133/21)",
    "disciplineId": "administrativo",
    "author": "Dra. Marina Silveira · Procuradora do Estado",
    "estimatedReadTime": "20 min de leitura",
    "description": "Nova Lei 14.133/21, atributos do ato administrativo, responsabilidade civil objetiva do Estado e nova Lei de Improbidade.",
    "chapters": [
      {
        "title": "1. Atos Administrativos e Poderes da Administração",
        "content": "O ato administrativo nasce dotado de presunção de legitimidade e veracidade, autoexecutoriedade, imperatividade (quando impõe obrigações) e tipicidade.\nRequisitos de validade: competência, finalidade, forma, motivo e objeto. O vício de competência (quando não for exclusiva) e o de forma (desde que não essencial) admitem convalidação (art. 55 da Lei 9.784/99).\nA Administração Pública pode anular seus próprios atos quando eivados de vícios de legalidade ou revogá-los por motivo de conveniência e oportunidade (Súmulas 346 e 473 do STF).",
        "keyStatutes": [
          "Súmula 473 do STF",
          "Lei nº 9.784/1999",
          "Art. 37, caput da CF/88"
        ],
        "summaryPoints": [
          "Anulação = Ilegalidade (efeitos ex tunc retroativos).",
          "Revogação = Mérito administrativo/conveniência (efeitos ex nunc prospectivos).",
          "Convalidação possível para vícios sanáveis de competência e forma."
        ]
      },
      {
        "title": "2. Nova Lei de Licitações (Lei 14.133/21) e Improbidade",
        "content": "A Lei 14.133/21 estabeleceu como modalidades de licitação: Pregão, Concorrência, Concurso, Leilão e o inovador Diálogo Competitivo. Foram extintas as antigas modalidades de Tomada de Preços e Convite.\nA contratação direta subdivide-se em inexigibilidade (inviabilidade de competição, como artista consagrado e notória especialização) e dispensa (competição viável, mas a lei autoriza contratar sem licitação por valor ou emergência).\nNa Lei de Improbidade Administrativa (Lei 8.429/92, alterada pela Lei 14.230/21), foi expurgada a modalidade culposa: qualquer ato de improbidade exige a presença inescusável do dolo específico.",
        "keyStatutes": [
          "Arts. 28, 74 e 75 da Lei nº 14.133/2021",
          "Lei nº 8.429/92 (alterada pela Lei 14.230/21)"
        ],
        "summaryPoints": [
          "Extinção de Convite e Tomada de Preços; criação do Diálogo Competitivo.",
          "Inexigibilidade decorre da inviabilidade de competição.",
          "Improbidade administrativa exige obrigatoriamente dolo específico."
        ]
      }
    ]
  },
  {
    "id": "mat-trib-01",
    "title": "Guia Essencial de Direito Tributário: Princípios, Imunidades e Crédito",
    "disciplineId": "tributario",
    "author": "Prof. Alexandre Nogueira · Juiz Federal e Especialista em Tributação",
    "estimatedReadTime": "19 min de leitura",
    "description": "Princípios da anterioridade, imunidades recíproca e religiosa, causas de suspensão e extinção do crédito tributário no CTN.",
    "chapters": [
      {
        "title": "1. Princípios Constitucionais Tributários e Imunidades",
        "content": "A competência tributária é limitada por preceitos pétreos da CF/88:\n- Legalidade tributária (art. 150, I): tributo exige prévia lei para sua instituição ou majoração.\n- Anterioridade anual e nonagesimal (noventena): a cobrança exige que a lei entre em vigor no exercício seguinte e após 90 dias da publicação, salvo exceções constitucionais (ex.: II, IE, IOF e IPI quanto à anual).\nAs imunidades tributárias (art. 150, VI) impedem a instituição de impostos sobre patrimônio, renda ou serviços: dos entes federados entre si (imunidade recíproca), de templos de qualquer culto, de partidos políticos e entidades sindicais de trabalhadores, e sobre livros, jornais e periódicos.",
        "keyStatutes": [
          "Art. 150 da CF/88",
          "CTN, arts. 97 e 104"
        ],
        "summaryPoints": [
          "Imunidade alcança exclusivamente impostos, não atingindo taxas ou contribuições de melhoria.",
          "Anterioridade anual e noventena protegem a não surpresa do contribuinte.",
          "Imunidade recíproca estende-se a autarquias e fundações vinculadas às suas finalidades essenciais."
        ]
      },
      {
        "title": "2. Suspensão, Extinção e Exclusão do Crédito Tributário",
        "content": "O Código Tributário Nacional prevê situações taxativas:\n1. Suspensão da exigibilidade (art. 151): moratória, depósito do montante integral, reclamações/recursos administrativos, concessão de liminar em mandado de segurança ou tutela provisória, e parcelamento.\n2. Extinção do crédito (art. 156): pagamento, compensação, transação, remissão, decadência e prescrição (5 anos), conversão do depósito em renda, entre outros.\n3. Exclusão do crédito (art. 175): anistia (infrações) e isenção (tributo), que impedem a constituição do crédito sem dispensar as obrigações acessórias.",
        "keyStatutes": [
          "CTN, arts. 151, 156 e 175"
        ],
        "summaryPoints": [
          "Suspensão (art. 151): MODEPACO + Liminares.",
          "Extinção (art. 156): Pagamento, prescrição e decadência quinquenal.",
          "Exclusão (art. 175): Apenas isenção e anistia."
        ]
      }
    ]
  },
  {
    "id": "mat-emp-01",
    "title": "Manual de Direito Empresarial: Sociedades, Títulos e Falência",
    "disciplineId": "empresarial",
    "author": "Dra. Vanessa Castilho · Advogada Empresarialista",
    "estimatedReadTime": "17 min de leitura",
    "description": "Teoria da empresa (art. 966 CC), sociedade limitada, títulos de crédito e processo de recuperação judicial e falência.",
    "chapters": [
      {
        "title": "1. Teoria da Empresa e Sociedade Limitada",
        "content": "Considera-se empresário quem exerce profissionalmente atividade econômica organizada para a produção ou circulação de bens ou serviços (art. 966 do CC). Não se considera empresário quem exerce profissão intelectual, de natureza científica, literária ou artística, salvo se o exercício constituir elemento de empresa (parágrafo único).\nNa Sociedade Limitada (art. 1.052), a responsabilidade de cada sócio é restrita ao valor de suas quotas, mas todos respondem solidariamente pela integralização do capital social. Admite-se a Sociedade Limitada Unipessoal, constituída por uma única pessoa natural ou jurídica.",
        "keyStatutes": [
          "Arts. 966 e 1.052 do Código Civil"
        ],
        "summaryPoints": [
          "Elemento de empresa transforma atividade intelectual em empresarial.",
          "Solidariedade de todos os sócios limitada até a integralização do capital social.",
          "Admitida a Sociedade Limitada Unipessoal."
        ]
      },
      {
        "title": "2. Títulos de Crédito e Recuperação Judicial (Lei 11.101/05)",
        "content": "Os títulos de crédito regem-se pela cartularidade, literalidade e autonomia (que se desdobra em abstração e inoponibilidade das exceções pessoais a terceiros de boa-fé). O aval é garantia cambial autônoma, diferenciando-se da fiança civil.\nNa Lei 11.101/05 (Recuperação Judicial e Falência), o deferimento do processamento da recuperação gera o stay period: suspensão de todas as ações e execuções contra o devedor pelo prazo de 180 dias, prorrogável uma única vez por igual período (art. 6º, § 4º). Créditos trabalhistas e por acidente de trabalho devem ser adimplidos em até 1 ano.",
        "keyStatutes": [
          "Lei nº 11.101/2005, arts. 6º e 54",
          "Arts. 887 e 897 do Código Civil"
        ],
        "summaryPoints": [
          "Stay period suspende ações e execuções por 180 dias prorrogáveis uma vez.",
          "Aval é ato cambial autônomo e não admite benefício de ordem.",
          "Crédito trabalhista na recuperação tem prioridade de quitação em até 1 ano."
        ]
      }
    ]
  },
  {
    "id": "mat-amb-01",
    "title": "Guia de Direito Ambiental: Princípios, Licenciamento e Responsabilidade",
    "disciplineId": "ambiental",
    "author": "Prof. Renato Silveira · Mestre em Direito Socioambiental",
    "estimatedReadTime": "15 min de leitura",
    "description": "Princípios da precaução e poluidor-pagador, tríplice responsabilidade ecológica e regime do Código Florestal.",
    "chapters": [
      {
        "title": "1. Princípios Basilares e Licenciamento Ambiental",
        "content": "O art. 225 da CF/88 consagra o meio ambiente ecologicamente equilibrado como bem de uso comum do povo e essencial à sadia qualidade de vida.\nPrincípios nucleares:\n- Prevenção: aplicável quando o dano e seus impactos científicos já são certos e conhecidos, exigindo medidas prévias mitigatórias.\n- Precaução: incide quando houver incerteza científica sobre os riscos ecológicos de determinada intervenção, impondo a inversão do ônus da prova e a abstenção da atividade potencialmente gravosa.\n- Poluidor-pagador: imputa ao causador o dever de internalizar os custos da degradação e restaurar o ecossistema.\nO licenciamento ambiental compreende 3 etapas sucessivas: Licença Prévia (LP), Licença de Instalação (LI) e Licença de Operação (LO).",
        "keyStatutes": [
          "Art. 225 da CF/88",
          "Lei nº 6.938/1981",
          "Resolução CONAMA 237/97"
        ],
        "summaryPoints": [
          "Precaução = Incerteza científica impõe cautela e inversão do ônus probatório.",
          "Prevenção = Risco conhecido exige medidas preventivas diretas.",
          "Etapas do licenciamento: Licença Prévia (LP) -> Instalação (LI) -> Operação (LO)."
        ]
      },
      {
        "title": "2. Responsabilidade Tripla e Obrigação Propter Rem",
        "content": "A conduta lesiva ao meio ambiente enseja a responsabilização independente nas esferas civil, administrativa e penal (art. 225, § 3º da CF).\nNa esfera civil, a responsabilidade é objetiva integral (sem admitir escusas de caso fortuito ou fato de terceiro). A obrigação de recompor a degradação ambiental possui natureza propter rem (acompanha a titularidade do imóvel), sendo solidariamente exigível do proprietário atual, ainda que a degradação tenha sido praticada por titular anterior (Súmula 623 do STJ).",
        "keyStatutes": [
          "Art. 225, § 3º da CF/88",
          "Súmula 623 do STJ",
          "Lei 9.605/98"
        ],
        "summaryPoints": [
          "Tríplice responsabilidade cumulativa: Civil, Penal e Administrativa.",
          "Responsabilidade civil ambiental é objetiva sob a teoria do risco integral.",
          "Súmula 623 STJ: Dever de reparar dano ambiental é obrigação propter rem."
        ]
      }
    ]
  },
  {
    "id": "mat-inter-01",
    "title": "Manual de Direito Internacional: Tratados, Nacionalidade e Extradição",
    "disciplineId": "internacional",
    "author": "Dra. Carolina Freitas · Doutora em Direito Internacional",
    "estimatedReadTime": "16 min de leitura",
    "description": "Processo de internalização de tratados, status dos tratados de Direitos Humanos, perda de nacionalidade e Lei de Migração.",
    "chapters": [
      {
        "title": "1. Incorporação de Tratados e Hierarquia Constitucional",
        "content": "O processo de incorporação de tratados no Brasil exige: celebração pelo Presidente da República, aprovação pelo Congresso Nacional via Decreto Legislativo (art. 49, I da CF), ratificação e promulgação via Decreto Presidencial.\nHierarquia no ordenamento brasileiro:\n- Tratados comuns: possuem força de lei ordinária federal.\n- Tratados de Direitos Humanos aprovados pelo rito ordinário: possuem status supralegal (abaixo da CF e acima das leis ordinárias - RE 466.343/SP e Súmula Vinculante 25).\n- Tratados de Direitos Humanos aprovados com quórum qualificado (duas votações em cada Casa do Congresso por 3/5 dos votos - art. 5º, § 3º): equivalem a Emendas Constitucionais.",
        "keyStatutes": [
          "Art. 5º, § 3º da CF/88",
          "Súmula Vinculante 25 do STF",
          "Convenção de Viena de 1969"
        ],
        "summaryPoints": [
          "Tratados comuns = Força de lei ordinária federal.",
          "Tratados de DH comuns = Status supralegal (paralisa leis contrárias).",
          "Tratados de DH pelo art. 5º, § 3º = Equivalem a Emenda Constitucional."
        ]
      },
      {
        "title": "2. Nacionalidade, Deporte, Expulsão e Extradição",
        "content": "O Brasil adota o jus soli mitigado (nascidos no território brasileiro, ainda que de pais estrangeiros, desde que não estejam a serviço de seu país).\nBrasileiro nato NUNCA pode ser extraditado (art. 5º, LI). O brasileiro naturalizado somente pode sê-lo em caso de crime comum cometido antes da naturalização ou de comprovado envolvimento em tráfico ilícito de entorpecentes a qualquer tempo.\nNa Lei de Migração (Lei 13.445/17):\n- Repatriação: devolução imediata do indivíduo inadmitido no ingresso.\n- Deformação/Deportação: medida administrativa de saída por situação migratória irregular.\n- Expulsão: retirada compulsória decorrente de condenação penal por dolo com trânsito em julgado.",
        "keyStatutes": [
          "Art. 12 da CF/88",
          "Art. 5º, LI e LII da CF/88",
          "Lei nº 13.445/2017 (Lei de Migração)"
        ],
        "summaryPoints": [
          "Brasileiro nato jamais pode ser extraditado.",
          "Naturalizado só é extraditado por crime anterior ou tráfico de drogas a qualquer tempo.",
          "Expulsão fundamenta-se em sentença penal condenatória transitada em julgado."
        ]
      }
    ]
  },
  {
    "id": "mat-dh-01",
    "title": "Guia de Direitos Humanos e Sistema Interamericano",
    "disciplineId": "direitos-humanos",
    "author": "Prof. Thiago Meirelles · Especialista em Direitos Fundamentais",
    "estimatedReadTime": "15 min de leitura",
    "description": "Pacto de San José da Costa Rica (CADH), controle de convencionalidade e atuação da Comissão e Corte IDH.",
    "chapters": [
      {
        "title": "1. Teoria Geral e Pacto de San José da Costa Rica (CADH)",
        "content": "Os direitos humanos são universais, imprescritíveis, inalienáveis, irrenunciáveis e indivisíveis. Dividem-se didaticamente em gerações/dimensões: 1ª (liberdades individuais/civis e políticas), 2ª (direitos sociais, econômicos e culturais/igualdade) e 3ª (fraternidade e solidariedade/paz e meio ambiente).\nA Convenção Americana sobre Direitos Humanos (CADH - Pacto de San José de 1969) foi ratificada pelo Brasil em 1992, consagrando a vedação da prisão civil por dívida do depositário infiel (restando unicamente a do devedor inescusável de pensão alimentícia - Súmula Vinculante 25).",
        "keyStatutes": [
          "CADH (Decreto nº 678/1992)",
          "Súmula Vinculante 25 do STF"
        ],
        "summaryPoints": [
          "Gerações: 1ª (Liberdade), 2ª (Igualdade), 3ª (Fraternidade/Meio Ambiente).",
          "Vedação da prisão de depositário infiel após a CADH.",
          "Pacto de San José possui status supralegal na ordem constitucional brasileira."
        ]
      },
      {
        "title": "2. Controle de Convencionalidade e Sistema Interamericano (CIDH e Corte IDH)",
        "content": "O controle de convencionalidade impõe que juízes e autoridades públicas analisem a compatibilidade das normas domésticas com os tratados internacionais de direitos humanos ratificados pelo país.\nO Sistema Interamericano possui estrutura dúplice:\n1. Comissão Interamericana de Direitos Humanos (Washington): recebe petições de indivíduos, ongs ou grupos, emite relatórios e recomendações e atua como filtro de admissibilidade.\n2. Corte Interamericana de Direitos Humanos (San José): órgão judicial. Indivíduos não têm legitimidade ativa direta perante a Corte IDH (apenas a Comissão ou os Estados partes podem acioná-la). Suas sentenças condenatórias são definitivas, inapeláveis e vinculantes para o Estado condenado.",
        "keyStatutes": [
          "Arts. 44 a 69 da Convenção Americana de Direitos Humanos"
        ],
        "summaryPoints": [
          "Controle de convencionalidade deve ser realizado de ofício pelos magistrados nacionais.",
          "Indivíduos acessam a Comissão Interamericana, que submete o caso à Corte.",
          "Decisões condenatórias da Corte IDH possuem força executiva perante a Justiça Federal."
        ]
      }
    ]
  },
  {
    "id": "mat-cdc-01",
    "title": "Manual de Direito do Consumidor: Vício, Fato do Produto e Contratos",
    "disciplineId": "consumidor",
    "author": "Dra. Tatiane Moreira · Especialista em Relações de Consumo",
    "estimatedReadTime": "16 min de leitura",
    "description": "Código de Defesa do Consumidor (Lei 8.078/90), vício versus defeito, decadência e direito de arrependimento.",
    "chapters": [
      {
        "title": "1. Acidente de Consumo (Fato) versus Vício do Produto/Serviço",
        "content": "Diferença fulcral cobrada nos exames da OAB:\n- Vício (arts. 18 e 20): problema intrínseco de quantidade ou qualidade que torna o produto inadequado ao fim a que se destina ou lhe diminui o valor. Responsabilidade solidária entre fabricante, produtor e comerciante. Prazo decadencial: 30 dias (produtos não duráveis) e 90 dias (produtos duráveis).\n- Fato do Produto/Serviço (Acidente de Consumo - arts. 12 e 14): quando o defeito transborda o produto e atinge a incolumidade física, psíquica ou patrimonial do consumidor. Responsabilidade do fabricante é direta e objetiva; a responsabilidade do comerciante é subsidiária (art. 13 - quando o fabricante não puder ser identificado ou o comerciante não conservar adequadamente perecíveis). Prazo prescricional: 5 anos (art. 27).",
        "keyStatutes": [
          "CDC, arts. 12 a 14 (Fato)",
          "CDC, arts. 18 a 20 (Vício)",
          "CDC, arts. 26 e 27"
        ],
        "summaryPoints": [
          "Vício = Dano estrito ao produto (Decadência: 30d não duráveis, 90d duráveis).",
          "Fato/Defeito = Acidente de consumo com dano à integridade do usuário (Prescrição: 5 anos).",
          "Comerciante responde subsidiariamente pelo fato do produto (art. 13 CDC)."
        ]
      },
      {
        "title": "2. Práticas Abusivas e Direito de Arrependimento (Art. 49)",
        "content": "O CDC estabelece a inversão ope legis do ônus da prova nos casos de responsabilidade pelo fato e ope judicis nas demais hipóteses (verossimilhança ou hipossuficiência técnica - art. 6º, VIII).\nO art. 49 consagra o Direito de Arrependimento para contratações celebradas fora do estabelecimento comercial (pela internet, telefone ou catálogo): o consumidor tem prazo de 7 (sete) dias corridos a contar da assinatura ou recebimento para desistir, com restituição imediata e integral dos valores pagos, inclusive frete. Cláusulas contratuais de renúncia a esse direito são nulas de pleno direito.",
        "keyStatutes": [
          "Art. 6º, VIII do CDC",
          "Art. 49 do CDC",
          "Art. 51 do CDC"
        ],
        "summaryPoints": [
          "Direito de arrependimento: 7 dias para compras fora do estabelecimento comercial físico.",
          "Devolução de valores é imediata e inclui eventuais despesas postais.",
          "Inversão do ônus probatório ope legis na responsabilidade pelo fato."
        ]
      }
    ]
  },
  {
    "id": "mat-eca-01",
    "title": "Guia do Estatuto da Criança e do Adolescente (Lei 8.069/90)",
    "disciplineId": "crianca-adolescente",
    "author": "Prof. Marcelo Brandão · Promotor da Infância e Juventude",
    "estimatedReadTime": "15 min de leitura",
    "description": "Ato infracional, medidas socioeducativas, internação, convivência familiar, guarda, tutela e adoção.",
    "chapters": [
      {
        "title": "1. Ato Infracional e Medidas Socioeducativas",
        "content": "Considera-se criança a pessoa até 12 (doze) anos de idade incompletos, e adolescente aquela entre 12 e 18 anos.\nAto infracional: conduta descrita como crime ou contravenção penal praticada por criança ou adolescente. Crianças são submetidas exclusivamente a medidas de proteção (art. 101 do ECA). Adolescentes sujeitam-se a medidas socioeducativas: advertência, obrigação de reparar o dano, prestação de serviços à comunidade, liberdade assistida, semiliberdade e internação (art. 112).\nA internação constitui medida privativa de liberdade excepcional e breve, sem prazo determinado (máximo de 3 anos, reavaliada a cada 6 meses), cabível apenas em crimes com violência ou grave ameaça, reiteração grave ou descumprimento reiterado de medida anterior.",
        "keyStatutes": [
          "Arts. 2º, 101, 112 e 121 a 122 do ECA"
        ],
        "summaryPoints": [
          "Criança (até 12 incompletos) = apenas medidas protetivas.",
          "Adolescente (12 a 18 incompletos) = medidas socioeducativas.",
          "Internação é medida extrema limitada ao prazo improrrogável de 3 anos."
        ]
      },
      {
        "title": "2. Colocação em Família Substituta e Conselho Tutelar",
        "content": "A colocação em família substituta far-se-á mediante guarda, tutela ou adoção (art. 28). A adoção é medida excepcional e irrevogável, que confere o estado de filho ao adotado e desvincula-o de qualquer laço com pais e parentes biológicos, salvo os impedimentos matrimoniais. Diferença de idade mínima entre adotante e adotando deve ser de 16 (dezesseis) anos.\nO Conselho Tutelar é órgão permanente, autônomo e não jurisdicional encarregado pela sociedade de zelar pelo cumprimento dos direitos da criança e do adolescente. É composto por 5 membros eleitos pelos cidadãos do município para mandato de 4 anos.",
        "keyStatutes": [
          "Arts. 39 a 52 do ECA (Adoção)",
          "Arts. 131 a 136 do ECA (Conselho Tutelar)"
        ],
        "summaryPoints": [
          "Adoção é irrevogável e extingue laços com a família biológica.",
          "Diferença etária mínima de 16 anos entre adotante e adotado.",
          "Conselho Tutelar é órgão não jurisdicional e atua de ofício na proteção integral."
        ]
      }
    ]
  },
  {
    "id": "mat-prev-01",
    "title": "Manual de Direito Previdenciário: Benefícios, Segurados e Reforma",
    "disciplineId": "previdenciario",
    "author": "Dra. Cristiane Fontes · Especialista em Seguridade Social",
    "estimatedReadTime": "17 min de leitura",
    "description": "Segurados do RGPS, carência, benefício por incapacidade temporária, pensão por morte e novidades da EC 103/19.",
    "chapters": [
      {
        "title": "1. Seguridade Social e Segurados do RGPS",
        "content": "A Seguridade Social compreende um conjunto integrado de ações de iniciativa dos poderes públicos e da sociedade destinadas a assegurar os direitos relativos à Saúde, Previdência e Assistência Social (o tripé da seguridade - art. 194 da CF). Apenas a Previdência Social possui caráter contributivo e filiação compulsória.\nSegurados Obrigatórios da Previdência Social (art. 11 da Lei 8.213/91):\n1. Empregado (inclusive doméstico).\n2. Trabalhador avulso.\n3. Contribuinte individual (profissionais autônomos e liberais).\n4. Segurado especial (produtor rural familiar e pescador artesanal que trabalham em regime de economia familiar sem empregados permanentes).\nJá o segurado facultativo é aquele que não exerce atividade remunerada (ex.: estudante, dona de casa) e opta por contribuir.",
        "keyStatutes": [
          "Art. 194 e 201 da CF/88",
          "Lei nº 8.213/1991, arts. 11 a 14"
        ],
        "summaryPoints": [
          "Saúde e Assistência independem de contribuição; Previdência é estritamente contributiva.",
          "Segurado especial não contribui sobre remuneração fixa, mas sobre comercialização da produção.",
          "Segurado facultativo exige idade mínima de 16 anos."
        ]
      },
      {
        "title": "2. Regras de Benefícios e a Reforma da Previdência (EC 103/19)",
        "content": "Aposentadoria Programada: com a extinção da aposentadoria por tempo de contribuição para novos inscritos, a idade mínima geral no RGPS é de 65 anos para o homem e 62 anos para a mulher, observados o tempo de contribuição mínimo de 20 anos (homens) e 15 anos (mulheres).\nPensão por Morte: após a EC 103/19, a cota familiar corresponde a 50% do valor da aposentadoria, acrescida de cotas de 10% por dependente até o limite de 100%. A dependência do cônjuge e dos filhos menores de 21 anos é presumida por lei (art. 16, I e § 4º da Lei 8.213/91).",
        "keyStatutes": [
          "Emenda Constitucional nº 103/2019",
          "Lei nº 8.213/1991, art. 74"
        ],
        "summaryPoints": [
          "Idade mínima urbana: 65 anos (homem) e 62 anos (mulher).",
          "Pensão por morte tem cota base de 50% + 10% por dependente.",
          "Cônjuge e filhos menores de 21 anos possuem dependência econômica presumida."
        ]
      }
    ]
  },
  {
    "id": "mat-fin-01",
    "title": "Compêndio de Direito Financeiro: Orçamento e Responsabilidade Fiscal",
    "disciplineId": "financeiro",
    "author": "Prof. Leonardo Arantes · Auditor de Controle Externo",
    "estimatedReadTime": "15 min de leitura",
    "description": "Leis orçamentárias (PPA, LDO e LOA), princípios orçamentários e limites de despesa com pessoal da LRF.",
    "chapters": [
      {
        "title": "1. O Modelo Orçamentário Constitucional (PPA, LDO e LOA)",
        "content": "A CF/88 estabelece a tríade de leis orçamentárias de iniciativa privativa do Chefe do Poder Executivo (art. 165):\n1. Plano Plurianual (PPA): estabelece de forma regionalizada as diretrizes, objetivos e metas da administração para despesas de capital e programas de duração continuada (vigência de 4 anos).\n2. Lei de Diretrizes Orçamentárias (LDO): compreende as metas e prioridades para o exercício seguinte, orienta a elaboração da LOA e dispõe sobre alterações tributárias e política de agências financeiras oficiais.\n3. Lei Orçamentária Anual (LOA): compreende o orçamento fiscal, o orçamento de investimento das estatais e o orçamento da seguridade social.\nPrincípios Orçamentários: Legalidade, Anualidade/Periodicidade, Unidade, Universalidade e Exclusividade (art. 165, § 8º - a LOA não conterá matéria estranha à previsão de receitas e fixação de despesas).",
        "keyStatutes": [
          "Art. 165 da CF/88",
          "Art. 166 da CF/88"
        ],
        "summaryPoints": [
          "PPA = 4 anos, planejamento estratégico e programas contínuos.",
          "LDO = Anual, ponte entre PPA e LOA, fixa metas e prioridades.",
          "Princípio da Exclusividade veda matérias estranhas na Lei Orçamentária."
        ]
      },
      {
        "title": "2. Lei de Responsabilidade Fiscal (LC 101/00) e Despesa com Pessoal",
        "content": "A LRF impõe limites estritos de responsabilidade na gestão fiscal da União, Estados e Municípios.\nLimites de despesa total com pessoal ativo e inativo (art. 19 da LRF):\n- União: 50% da Receita Corrente Líquida (RCL).\n- Estados: 60% da RCL.\n- Municípios: 60% da RCL.\nQuando a despesa com pessoal ultrapassar 95% do limite legal (limite prudencial), aplicam-se vedações imediatas: proibição de concessão de vantagens e reajustes, criação de cargos e contratação de horas extras. O descumprimento injustificado acarreta sanções institucionais e enquadramento em crimes contra as finanças públicas (art. 359-A a 359-H do CP).",
        "keyStatutes": [
          "LC nº 101/2000 (LRF), arts. 19 a 23",
          "Código Penal, arts. 359-A a 359-H"
        ],
        "summaryPoints": [
          "Despesa com pessoal: União 50%, Estados e Municípios 60% da RCL.",
          "Limite prudencial atinge 95% do teto e congela novas contratações.",
          "Infrações geram crimes contra as finanças públicas."
        ]
      }
    ]
  },
  {
    "id": "mat-eleit-01",
    "title": "Guia de Direito Eleitoral: Elegibilidade, Inelegibilidades e Propaganda",
    "disciplineId": "eleitoral",
    "author": "Dra. Patrícia Dantas · Advogada Eleitoralista",
    "estimatedReadTime": "16 min de leitura",
    "description": "Condições constitucionais de elegibilidade, Lei da Ficha Limpa (LC 135/10) e ações eleitorais essenciais.",
    "chapters": [
      {
        "title": "1. Condições de Elegibilidade e Causas de Inelegibilidade",
        "content": "São condições de elegibilidade (art. 14, § 3º da CF/88): nacionalidade brasileira, pleno exercício dos direitos políticos, alistamento eleitoral, domicílio eleitoral na circunscrição, filiação partidária e idade mínima na data da posse (salvo para vereador, que exige 18 anos na data do registro):\n- 35 anos: Presidente, Vice e Senador.\n- 30 anos: Governador e Vice-Governador.\n- 21 anos: Deputados, Prefeito, Vice-Prefeito e Juiz de Paz.\n- 18 anos: Vereador.\nSão absolutamente inelegíveis os inalistáveis e os analfabetos (art. 14, § 4º).\nA Lei da Ficha Limpa (LC 135/10 alterou a LC 64/90): condenações criminais por órgão judicial colegiado em crimes contra a administração, vida ou patrimônio ensejam inelegibilidade desde a condenação até 8 anos após o cumprimento da pena.",
        "keyStatutes": [
          "Art. 14 da CF/88",
          "LC nº 64/1990 (alterada pela LC 135/2010)"
        ],
        "summaryPoints": [
          "Idades mínimas: 35 (Presidente/Senador), 30 (Governador), 21 (Deputado/Prefeito), 18 (Vereador).",
          "Analfabetos são elegíveis de voto facultativo, porém absolutamente inelegíveis para cargos políticos.",
          "Ficha Limpa gera inelegibilidade por 8 anos após o cumprimento da pena."
        ]
      },
      {
        "title": "2. Ações Eleitorais: AIJE, AIME e RCED",
        "content": "As principais demandas judiciais eleitorais possuem objetos e ritos bem delimitados:\n1. Ação de Investigação Judicial Eleitoral (AIJE - art. 22 da LC 64/90): apura uso indevido, desvio ou abuso do poder econômico ou do poder de autoridade. Pode ser proposta até a diplomação e gera inelegibilidade e cassação de registro ou diploma.\n2. Ação de Impugnação de Mandato Eletivo (AIME - art. 14, § 10 da CF/88): proposta perante a Justiça Eleitoral no prazo decadencial de 15 (quinze) dias contados da diplomação, instruída com provas de abuso do poder econômico, corrupção ou fraude, tramitando em segredo de justiça.",
        "keyStatutes": [
          "Art. 14, §§ 10 e 11 da CF/88 (AIME)",
          "Art. 22 da LC nº 64/1990 (AIJE)"
        ],
        "summaryPoints": [
          "AIJE pode ser ajuizada durante a campanha até a diplomação.",
          "AIME deve ser ajuizada em 15 dias após a diplomação e corre em segredo de justiça.",
          "Causas de AIME: Abuso de poder econômico, corrupção e fraude."
        ]
      }
    ]
  },
  {
    "id": "mat-filo-01",
    "title": "Manual de Filosofia do Direito: Das Leis Naturais ao Pós-Positivismo",
    "disciplineId": "filosofia",
    "author": "Prof. Dr. Eduardo Sampaio · Doutor em Filosofia Jurídica",
    "estimatedReadTime": "16 min de leitura",
    "description": "Jusnaturalismo clássico e moderno, Positivismo Jurídico (Kelsen e Hart) e teoria dos princípios de Dworkin e Alexy.",
    "chapters": [
      {
        "title": "1. O Duelo entre Jusnaturalismo e Positivismo Jurídico",
        "content": "O Jusnaturalismo afirma a existência de um Direito Natural imutável, universal e superior ao direito positivo, fundado na natureza humana, na razão divina ou na razão prática (Tomás de Aquino, Grócio, Locke).\nO Positivismo Jurídico opera a cisão rigorosa entre o Direito que \"é\" e o Direito que \"deve ser\" (moral e política). Hans Kelsen, em sua Teoria Pura do Direito, concebe a norma jurídica como um juízo hipotético de imputação sancionatória (\"se A é, B deve ser\"), cuja validade apoia-se em uma Norma Fundamental hipotética (Grundnorm) no topo da pirâmide estática/dinâmica. Já H.L.A. Hart introduz a distinção entre regras primárias (imposição de deveres) e regras secundárias (reconhecimento, alteração e adjudicação).",
        "keyStatutes": [
          "Teoria Pura do Direito (Hans Kelsen)",
          "O Conceito de Direito (H.L.A. Hart)"
        ],
        "summaryPoints": [
          "Jusnaturalismo: Subordinação da validade da lei à justiça substancial.",
          "Positivismo Kelseniano: Pureza metódica e validade formal apoiada na Norma Fundamental.",
          "Hart: União de regras primárias (deveres) e regras secundárias (reconhecimento)."
        ]
      },
      {
        "title": "2. Pós-Positivismo e Teoria dos Princípios (Dworkin e Alexy)",
        "content": "O Pós-Positivismo reintroduz os valores éticos e morais no coração do Direito, alçando os princípios a normas jurídicas dotadas de plena força normativa.\nRonald Dworkin rebate o positivismo de Hart sustentando que o sistema jurídico não é composto apenas de regras aplicáveis na lógica do \"tudo ou nada\" (all-or-nothing), mas primordialmente de princípios e diretrizes políticas, defendendo a existência de uma \"única resposta correta\" (one right answer) obtida pelo Juiz Hércules sob o primado da integridade do direito.\nRobert Alexy conceitua os princípios como \"mandamentos de otimização\", que ordenam que algo seja realizado na maior medida possível dentro das possibilidades fáticas e jurídicas, solucionando as colisões entre princípios mediante a técnica da Ponderação e o princípio da Proporcionalidade.",
        "keyStatutes": [
          "Levando os Direitos a Sério (Ronald Dworkin)",
          "Teoria dos Direitos Fundamentais (Robert Alexy)"
        ],
        "summaryPoints": [
          "Dworkin: Regras são aplicadas no modo tudo-ou-nada; princípios têm dimensão de peso.",
          "Alexy: Princípios como mandamentos de otimização sujeitos à técnica da ponderação.",
          "O pós-positivismo supera o dogma positivista da discricionariedade judicial arbitrária."
        ]
      }
    ]
  },
{
  "id": "manual-ext-lep-50p",
  "title": "Tratado Completo de Execução Penal (LEP - Lei 7.210/84) e Alterações da Lei 14.843/2024",
  "disciplineId": "lep",
  "author": "Prof. Dr. Rafael Prado & Núcleo de Execução Penal",
  "estimatedReadTime": "52 páginas didáticas · 3h30 de estudo intensivo",
  "pageCount": 52,
  "isExtensiveManual": true,
  "edition": "Edição Atualizada 2026/2027 · Lei 14.843/2024 e Pacote Anticrime",
  "description": "Manual completo e verticalizado com mais de 50 páginas didáticas examinando a Lei de Execução Penal (Lei 7.210/84), o regime de progressão após o Pacote Anticrime, as recentes restrições às saídas temporárias pela Lei 14.843/2024, súmulas do STF e STJ, remição por trabalho e estudo e rito do agravo em execução.",
  "chapters": [
    {
      "title": "Módulo 1: Princípios e Objeto da Execução Penal (Págs. 1-8)",
      "content": "A execução penal tem por objetivo precípuo efetivar as disposições de sentença ou decisão criminal e proporcionar condições para a harmônica integração social do condenado e do internado (art. 1º da LEP).\nO art. 3º consagra que ao condenado e ao internado serão assegurados todos os direitos não atingidos pela sentença ou pela lei, vedando-se qualquer distinção de natureza racial, social, religiosa ou política.\nA jurisdição penal executória é exercida pelo Juiz da Execução Penal (art. 2º), competindo-lhe aplicar aos casos julgados lei posterior que de qualquer modo favoreça o apenado, declarar extinta a punibilidade e fiscalizar as condições de cumprimento das sanções.\nA individualização da execução da pena (art. 5º) exige a classificação dos condenados segundo seus antecedentes e personalidade, para orientar a individualização da execução.",
      "keyStatutes": [
        "Art. 1º da Lei nº 7.210/1984 (LEP)",
        "Art. 3º da Lei nº 7.210/1984 (LEP)",
        "Art. 5º da CF/88, incisos XLVI, XLVII, XLVIII e XLIX"
      ],
      "summaryPoints": [
        "Dupla finalidade da execução: retributiva e ressocializadora.",
        "Preservação integral dos direitos fundamentais não atingidos pela condenação.",
        "Competência jurisdicional exclusiva do Juízo das Execuções Penais."
      ]
    },
    {
      "title": "Módulo 2: Progressão de Regime e Percentuais do Pacote Anticrime (Págs. 9-18)",
      "content": "Com a revogação do sistema de frações e introdução de percentuais pelo art. 112 da LEP (Lei 13.964/2019), a progressão é pautada por critérios objetivos rigorosos:\n1. 16%: primário, crime sem violência ou grave ameaça.\n2. 20%: reincidente em crime sem violência ou grave ameaça.\n3. 25%: primário em crime com violência ou grave ameaça.\n4. 30%: reincidente em crime com violência ou grave ameaça.\n5. 40%: condenado primário em crime hediondo ou equiparado.\n6. 50%: primário com resultado morte (vedado livramento), comando de organização criminosa estruturada ou milícia privada.\n7. 60%: reincidente na prática de crime hediondo ou equiparado.\n8. 70%: reincidente em crime hediondo ou equiparado com resultado morte.\nExame criminológico: não é mais obrigatório por lei, mas pode ser determinado fundamentadamente pelo juiz em face das particularidades do caso (Súmula Vinculante 26).",
      "keyStatutes": [
        "Art. 112, incisos I a VIII, da LEP",
        "Súmula Vinculante nº 26 do STF",
        "Art. 112, § 3º (Progressão especial para mulher mãe/gestante - 1/8)"
      ],
      "summaryPoints": [
        "Percentuais objetivos de 16% a 70% fixados na LEP.",
        "Crime hediondo com resultado morte veda expressamente o livramento condicional.",
        "Mulher gestante ou mãe de filho menor de 12 anos tem direito à progressão com 1/8 de pena."
      ]
    },
    {
      "title": "Módulo 3: Saídas Temporárias e Lei 14.843/2024 (Págs. 19-28)",
      "content": "A Lei Federal nº 14.843/2024 alterou substancialmente os arts. 122 a 124 da LEP.\nRegime aplicável: as saídas temporárias continuam restritas a apenados que cumprem pena no regime semiaberto com comportamento adequado e cumprimento mínimo de 1/6 (se primário) ou 1/4 (se reincidente).\nRestrição inovadora (art. 122, § 2º): é terminantemente vedada a saída temporária ao condenado que cumpre pena por praticar crime hediondo ou com violência ou grave ameaça contra a pessoa.\nIrretroatividade: por possuir natureza material-mista mais gravosa, a vedação da Lei 14.843/2024 não retroage para fatos delituosos praticados antes de sua vigência.\nPrazo: prazo de até 7 dias, podendo ser renovada por até 4 vezes ao ano, com intervalo mínimo de 45 dias entre cada saída.",
      "keyStatutes": [
        "Arts. 122, 123 e 124 da Lei nº 7.210/1984",
        "Lei Federal nº 14.843/2024",
        "Art. 5º, inciso XL, da CF/88 (Irretroatividade da lex gravior)"
      ],
      "summaryPoints": [
        "Benefício exclusivo do regime semiaberto.",
        "Vedação expressa a crimes hediondos ou com violência/grave ameaça.",
        "Garantia constitucional de irretroatividade para delitos cometidos antes de 2024."
      ]
    },
    {
      "title": "Módulo 4: Remição de Pena por Trabalho, Estudo e Leitura (Págs. 29-36)",
      "content": "A remição é o abatimento do tempo de pena por meio de atividades produtivas ou educacionais (art. 126 da LEP).\n1. Por trabalho: 1 dia de pena a cada 3 dias de trabalho (jornada de 6 a 8 horas).\n2. Por estudo: 1 dia de pena a cada 12 horas de frequência escolar, divididas no mínimo em 3 dias.\n3. Bônus por conclusão: acréscimo de 1/3 das horas no caso de conclusão de ensino fundamental, médio ou superior (art. 126, § 5º).\n4. Por leitura: 4 dias de pena por obra lida com resenha aprovada, até 12 obras anuais (Recomendação nº 44/2013 do CNJ).\nPerda dos dias remidos por falta grave: o juiz poderá revogar até 1/3 do tempo remido (art. 127 da LEP), sendo inconstitucional a perda total automática (Súmula Vinculante 9).",
      "keyStatutes": [
        "Art. 126 e 127 da Lei nº 7.210/1984",
        "Súmula Vinculante nº 9 do STF",
        "Recomendação nº 44/2013 do CNJ"
      ],
      "summaryPoints": [
        "Trabalho: 3 dias de labor = 1 dia remido.",
        "Estudo: 12 horas em ao menos 3 dias = 1 dia remido.",
        "Falta grave revoga no máximo 1/3 dos dias remidos."
      ]
    },
    {
      "title": "Módulo 5: Disciplina, Faltas Graves e Regime Disciplinar Diferenciado (Págs. 37-44)",
      "content": "A disciplina carcerária divide-se em faltas leves, médias e graves (arts. 49 a 52 da LEP).\nFaltas graves típicas: posse de aparelho celular ou transmissor de rádio (art. 50, VII), fuga, incitação a motim, recusa injustificada ao trabalho e cometimento de fato previsto como crime doloso.\nConsequências da falta grave: regressão de regime, perda de até 1/3 dos dias remidos e interrupção do prazo para nova progressão (Súmula 534 do STJ). Não interrompe livramento condicional (Súmula 441 do STJ) nem indulto (Súmula 535 do STJ).\nRegime Disciplinar Diferenciado (RDD): sanção máxima de até 2 anos em cela individual, visitas quinzenais sem contato físico e banho de sol de 2 horas diárias em grupos de até 4 presos.",
      "keyStatutes": [
        "Arts. 50 e 52 da Lei nº 7.210/1984",
        "Súmula 533, 534, 441 e 535 do STJ",
        "Art. 118 da LEP (Regressão de Regime)"
      ],
      "summaryPoints": [
        "Celular na cadeia é falta grave peremptória (art. 50, VII).",
        "Falta grave interrompe progressão, mas não zera prazo de livramento condicional.",
        "RDD tem prazo máximo de até 2 anos com isolamento celular e visitas sem contato."
      ]
    },
    {
      "title": "Módulo 6: Livramento Condicional e Agravo em Execução (Págs. 45-52)",
      "content": "O livramento condicional é a última etapa de antecipação da liberdade sob condições (art. 83 do Código Penal e art. 131 da LEP).\nRequisitos temporais: mais de 1/3 (se primário), mais de 1/2 (se reincidente em crime doloso), e mais de 2/3 para crimes hediondos ou equiparados (desde que não haja resultado morte).\nRequisitos subjetivos: bom comportamento carcerário, não cometimento de falta grave nos últimos 12 meses, bom desempenho no trabalho e reparação do dano salvo impossibilidade.\nAgravo em Execução Penal (art. 197 da LEP): recurso cabível contra qualquer decisão proferida pelo juízo da execução. Prazo de 5 dias (Súmula 700 do STF), rito do Recurso em Sentido Estrito, com juízo de retratação e sem efeito suspensivo.",
      "keyStatutes": [
        "Art. 83 do Código Penal",
        "Art. 197 da Lei nº 7.210/1984 (LEP)",
        "Súmula nº 700 do STF (Prazo de 5 dias)"
      ],
      "summaryPoints": [
        "Livramento condicional: 1/3 (primário), 1/2 (reincidente) e 2/3 (hediondo).",
        "Crime hediondo com resultado morte veda terminantemente o livramento condicional.",
        "Agravo em Execução: prazo de 5 dias, sem efeito suspensivo e com juízo de retratação."
      ]
    }
  ]
}
];