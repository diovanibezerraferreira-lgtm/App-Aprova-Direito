import json

civil_manual = {
  "id": "manual-ext-civil-50p",
  "title": "Tratado Extensivo de Direito Civil: Da LINDB às Sucessões",
  "disciplineId": "civil",
  "author": "Corpo Docente de Direito Civil · Aprova Direito",
  "estimatedReadTime": "56 páginas didáticas · 4h15 de estudo aprofundado",
  "pageCount": 56,
  "isExtensiveManual": True,
  "edition": "Tratado Completo 2026/2027 · Edição Definitiva OAB & Concursos",
  "description": "Manual exaustivo com mais de 50 páginas didáticas abrangendo todos os livros do Código Civil de 2002 e a LINDB. Aborda Parte Geral, Teoria Geral das Obrigações, Contratos em Espécie, Responsabilidade Civil, Direitos Reais, Direito de Família e Sucessões, com jurisprudência vinculante do STJ e STF, enunciados das Jornadas de Direito Civil e análise dos pontos mais cobrados na 1ª e 2ª Fase.",
  "chapters": [
    {
      "title": "Módulo 1: LINDB, Fontes do Direito e Eficácia da Norma no Tempo e Espaço (Págs. 1-6)",
      "content": """A Lei de Introdução às Normas do Direito Brasileiro (Decreto-Lei nº 4.657/1942, alterada pela Lei 12.376/2010 e Lei 13.655/2018) constitui lex legum ou norma de sobredireito, regulando a vigência, aplicação, interpretação e eficácia das leis em geral.

1. Vigência da Lei (Art. 1º):
Salvo disposição expressa em contrário, a lei começa a vigorar em todo o país 45 (quarenta e cinco) dias após oficialmente publicada. No exterior, a obrigatoriedade da lei brasileira ocorre 3 (três) meses após as publicações. O período entre a publicação e a entrada em vigor denomina-se vacatio legis, cuja contagem inclui a data da publicação e do último dia, entrando em vigor no primeiro dia útil subsequente se o prazo findar em feriado ou final de semana.

2. Princípio da Continuidade da Lei (Art. 2º):
Não se destinando à vigência temporária, a lei terá vigor até que outra a modifique ou revogue. A revogação pode ser total (ab-rogação) ou parcial (derrogação). Pode ser expressa (quando a lei nova declara revogada a anterior) ou tácita/indireta (quando a lei nova for com ela incompatível ou regular inteiramente a matéria). A lei nova que estabeleça disposições gerais ou especiais a par das já existentes não revoga nem modifica a lei anterior (§ 2º).

3. Repristinação (Art. 2º, § 3º):
Salvo disposição em contrário, a lei revogada não se restaura por ter a lei revogadora perdido a sua vigência. No direito brasileiro, o efeito repristinatório tácito é vedado. A repristinação exige manifestação expressa do legislador.

4. Segurança Jurídica e Direito Intertemporal (Art. 6º):
A lei em vigor terá efeito imediato e geral, respeitados o ato jurídico perfeito (já consumado segundo a lei vigente ao tempo em que se efetuou), o direito adquirido (aquele que o seu titular, ou alguém por ele, possa exercer, como também aquele cujo começo do exercício tenha termo pré-fixo, ou condição inalterável) e a coisa julgada (a decisão judicial de que já não caiba recurso).

5. Mecanismos de Integração Normativa (Art. 4º):
Quando a lei for omissa, o juiz decidirá o caso de acordo com a analogia (analogia legis e analogia juris), os costumes (praeter legem) e os princípios gerais de direito. A equidade não é meio originário de integração, aplicando-se apenas quando expressamente autorizada por lei (art. 140, parágrafo único do CPC/15).

6. Regime Público da LINDB (Arts. 20 a 30):
Introduzidos pela Lei nº 13.655/2018, impõem que decisões nas esferas administrativa, controladora e judicial não podem se basear em valores jurídicos abstratos sem a demonstração das consequências práticas da decisão (art. 20), exigindo motivação substancial e consideração das dificuldades reais do gestor (art. 22).""",
      "keyStatutes": [
        "Decreto-Lei nº 4.657/1942 (LINDB), arts. 1º a 6º",
        "LINDB, arts. 20 a 30 (Segurança na Gestão Pública)",
        "Art. 5º, XXXVI da CF/88 (Ato jurídico perfeito e coisa julgada)"
      ],
      "summaryPoints": [
        "Vacatio legis geral no Brasil é de 45 dias; no exterior é de 3 meses.",
        "Repristinação tácita é expressamente proibida no ordenamento jurídico pátrio.",
        "Analogia, costumes e princípios gerais são os meios primários de integração da lacuna legal.",
        "Art. 20 veda decisões baseadas em abstrações sem análise dos efeitos práticos."
      ]
    },
    {
      "title": "Módulo 2: Teoria Geral das Pessoas Naturais, Capacidade e Direitos da Personalidade (Págs. 7-11)",
      "content": """1. Início e Fim da Personalidade Civil (Arts. 2º e 6º do CC):
A personalidade civil da pessoa natural começa do nascimento com vida (respiração comprovada pelo teste de docimasia hidrostática de Galeno); mas a lei põe a salvo, desde a concepção, os direitos do nascituro (teoria concepcionista predominante na jurisprudência do STJ quanto aos alimentos gravídicos e indenização por dano moral).
A existência da pessoa natural termina com a morte: morte real (parada encefálica conforme critérios do CFM), morte simultânea ou comoriência (art. 8º - presumem-se simultaneamente mortos os indivíduos se não se puder averiguar qual precedeu o outro, impedindo a sucessão entre si) e morte presumida (com ou sem decretação de ausência, nos termos do art. 7º do CC).

2. Teoria das Incapacidades e Estatuto da Pessoa com Deficiência (Arts. 3º e 4º do CC):
Com a vigência do Estatuto da Pessoa com Deficiência (Lei nº 13.146/2015), houve profunda revolução dogmática:
- Incapazes absolutos (Art. 3º): são APENAS os menores de 16 (dezesseis) anos. A pessoa com deficiência intelectual ou mental NUNCA é absolutamente incapaz.
- Relativamente incapazes (Art. 4º):
I - os maiores de dezesseis e menores de dezoito anos;
II - os ébrios habituais e os viciados em tóxico;
III - aqueles que, por causa transitória ou permanente, não puderem exprimir sua vontade;
IV - os pródigos.
A incapacidade absoluta acarreta a nulidade do negócio jurídico (art. 166, I), enquanto a incapacidade relativa acarreta a mera anulabilidade (art. 171, I).

3. Emancipação (Art. 5º, Parágrafo Único):
Cessa a incapacidade para os menores:
a) Voluntária: por concessão dos pais (ou de um deles na falta do outro), mediante instrumento público, independentemente de homologação judicial, se o menor tiver 16 anos completos;
b) Judicial: por sentença do juiz, ouvido o tutor, se o menor tiver 16 anos e estiver sob tutela;
c) Legal: pelo casamento, pelo exercício de emprego público efetivo, pela colação de grau em curso de ensino superior, ou pelo estabelecimento civil ou comercial, ou pela existência de relação de emprego, desde que, em função deles, o menor com 16 anos completos tenha economia própria.
Atenção OAB: A emancipação voluntária não exime os pais da responsabilidade civil solidária pelos atos ilícitos praticados pelo filho emancipado (Súmula do STJ).

4. Direitos da Personalidade (Arts. 11 a 21):
São intransmissíveis e irrenunciáveis, não podendo o seu exercício sofrer limitação voluntária, salvo hipóteses legais. São imprescritíveis, impenhoráveis e vitalícios.
O art. 20 tutela a imagem e voz: salvo autorização ou se necessárias à administração da justiça ou à manutenção da ordem pública, a divulgação de escritos ou imagem cabe indenização sem necessidade de provar o prejuízo econômico (Súmula 403 do STJ: 'Independe de prova do prejuízo a indenização pela publicação não autorizada de imagem de pessoa com fins econômicos ou comerciais').
O STF julgou a ADI 4815, pacificando que biografias não autorizadas dispensam consentimento prévio do biografado, prestigiando a liberdade de manifestação e informação.""",
      "keyStatutes": [
        "Código Civil, arts. 2º a 10 (Personalidade, Nascituro e Morte)",
        "Código Civil, arts. 3º e 4º (Estatuto da Pessoa com Deficiência)",
        "Código Civil, art. 5º, parágrafo único (Emancipação)",
        "Súmula 403 do STJ (Dano moral por uso indevido de imagem)"
      ],
      "summaryPoints": [
        "Incapazes absolutos no Brasil são única e exclusivamente os menores de 16 anos.",
        "Comoriência presume mortes simultâneas, não havendo transferência hereditária entre si.",
        "Emancipação voluntária exige 16 anos e escritura pública, mas não exclui responsabilidade parental por ilícitos.",
        "Súmula 403 STJ: uso não comercial de imagem dispensa comprovação do dano (dano in re ipsa)."
      ]
    },
    {
      "title": "Módulo 3: Pessoas Jurídicas, Desconsideração da Personalidade e Domicílio (Págs. 12-16)",
      "content": """1. Classificação das Pessoas Jurídicas (Arts. 40 a 44 do CC):
- Direito Público Interno: União, Estados, DF, Territórios, Municípios, Autarquias e Fundações Públicas de direito público.
- Direito Público Externo: Estados estrangeiros e todas as pessoas regidas pelo direito internacional público (ONU, OEA, etc.).
- Direito Privado: Associações (união de pessoas para fins não econômicos), Sociedades (visam lucro e partilha de resultados), Fundações (patrimônio personalizado afetado a uma finalidade de interesse social), Organizações Religiosas, Partidos Políticos e Empresas Individuais de Responsabilidade Limitada (EIRELI - revogada, substituída pela Sociedade Limitada Unipessoal).

2. Desconsideração da Personalidade Jurídica (Art. 50 do CC e Lei da Liberdade Econômica - Lei 13.874/2019):
O art. 50 do Código Civil consagrou a Teoria Maior da desconsideração, exigindo a comprovação do abuso da personalidade jurídica caracterizado pelo desvio de finalidade ou pela confusão patrimonial.
A Lei nº 13.874/2019 delimitou com precisão cirúrgica:
- Desvio de finalidade (§ 1º): é a utilização da pessoa jurídica com o propósito de lesar credores e para a prática de atos ilícitos de qualquer natureza. A mera expansão ou alteração da atividade econômica não configura desvio.
- Confusão patrimonial (§ 2º): cumprimento repetitivo pela sociedade de obrigações do sócio ou do administrador ou vice-versa; transferência de ativos ou passivos sem efetivas contraprestações; outros atos de descumprimento da autonomia patrimonial.
- Teoria Menor (Art. 28, § 5º do CDC e Lei 9.605/98): aplicável nas relações de consumo e no direito ambiental, onde basta o mero inadimplemento da sociedade e a frustração do crédito do consumidor ou vítima para atingir os bens pessoais dos sócios.
- Desconsideração Inversa: pacificada pelo art. 133, § 2º do CPC/15 e jurisprudência do STJ, atinge o patrimônio da empresa por dívidas particulares do sócio que transfere fraudulentamente seus bens para o ente societário.

3. Domicílio Civil (Arts. 70 a 78 do CC):
Domicílio da pessoa natural é o lugar onde ela estabelece a sua residência com ânimo definitivo. Havendo multiplicidade de residências onde viva alternadamente, considera-se domicílio qualquer uma delas.
Domicílio necessário ou legal:
- Do incapaz: o do seu representante ou assistente;
- Do servidor público: o lugar onde exercer permanentemente suas funções;
- Do militar: onde servir (Exército) ou sede do comando (Marinha/Aeronáutica);
- Do marítimo: onde o navio estiver matriculado;
- Do preso: o lugar em que cumpre a sentença.""",
      "keyStatutes": [
        "Código Civil, art. 50 (Teoria Maior com redação da Lei 13.874/19)",
        "Código de Processo Civil, arts. 133 a 137 (Incidente de Desconsideração)",
        "Código Civil, arts. 70 a 78 (Domicílio voluntário e legal)"
      ],
      "summaryPoints": [
        "Teoria Maior do CC exige comprovação cabal de desvio de finalidade ou confusão patrimonial.",
        "Mera insolvência no Código Civil NÃO autoriza a desconsideração (diferente do CDC, que adota a Teoria Menor).",
        "Incidente de desconsideração (IDPJ) suspende o processo principal e assegura ampla defesa.",
        "Domicílio do preso é o estabelecimento penal onde cumpre sua pena."
      ]
    },
    {
      "title": "Módulo 4: Bens e Teoria Geral do Negócio Jurídico: Defeitos e Invalidade (Págs. 17-22)",
      "content": """1. Classificação dos Bens (Arts. 79 a 103 do CC):
- Bens Imóveis por determinação legal (Art. 80): consideram-se imóveis para os efeitos legais os direitos reais sobre imóveis e as ações que os asseguram; e o direito à sucessão aberta (herança é bem imóvel mesmo composta só de bens móveis).
- Bens Móveis por força de lei (Art. 83): as energias que tenham valor econômico (energia elétrica); os direitos reais sobre objetos móveis; e os direitos pessoais de caráter patrimonial e respectivas ações.
- Bens Públicos (Arts. 98 a 103): de uso comum do povo (rios, praças, ruas); de uso especial (prédios de repartições, escolas públicas, hospitais); e dominicais (patrimônio disponível da Administração sem destinação pública). Bens públicos não estão sujeitos a usucapião (Súmula 340 do STF e arts. 183, § 3º e 191, parágrafo único da CF/88).

2. Teoria do Negócio Jurídico - Escada Ponteana:
O negócio jurídico desdobra-se em três planos:
a) Plano da Existência: substantivos (partes, vontade, objeto e forma);
b) Plano da Validade (Art. 104): adjetivos (agente capaz, vontade livre e de boa-fé, objeto lícito, possível, determinado ou determinável, e forma prescrita ou não defesa em lei);
c) Plano da Eficácia: elementos acidentais (condição, termo e encargo).

3. Elementos Acidentais (Arts. 121 a 137 do CC):
- Condição (Art. 121): cláusula que subordina os efeitos do negócio a evento futuro e incerto. Pode ser suspensiva (enquanto não se realizar, não se adquire o direito) ou resolutiva (realizada, extingue-se o direito). São vedadas condições puramente potestativas (ao arbítrio exclusivo de uma das partes).
- Termo (Art. 131): evento futuro e certo. O termo inicial (dies a quo) suspende o exercício, mas não a aquisição do direito.
- Encargo ou Modo (Art. 136): ônus imposto ao beneficiário de ato de liberalidade (doação/testamento). O encargo não suspende a aquisição nem o exercício do direito, salvo quando expressamente imposto no negócio como condição suspensiva.

4. Defeitos do Negócio Jurídico:
- Erro ou Ignorância (Arts. 138 a 144): falsa percepção da realidade pelo próprio declarante. Deve ser substancial e escusável/cognoscível. Anulável em 4 anos.
- Dolo (Arts. 145 a 150): induzimento malicioso praticado pela outra parte ou terceiro. O dolo principal vicia o negócio (anulável); o dolo acidental gera apenas perdas e danos (art. 146).
- Coação (Arts. 151 a 155): fundado temor de dano iminente e considerável à sua pessoa, família ou bens. A coação física (vis absoluta) gera inexistência; a coação moral (vis compulsiva) gera anulabilidade.
- Estado de Perigo (Art. 156): premido da necessidade de salvar-se, ou a pessoa de sua família, de grave dano conhecido pela outra parte, assume obrigação excessivamente onerosa (ex.: cheque-caução em hospital). Anulável em 4 anos.
- Lesão (Art. 157): sob premente necessidade ou por inexperiência, obriga-se a prestação manifestamente desproporcional ao valor da prestação oposta. Dispensa o dolo de aproveitamento da outra parte. Não se decreta a anulação se for oferecido suplemento suficiente.
- Fraude contra Credores (Arts. 158 a 165): alienação gratuita ou onerosa de bens por devedor já insolvente ou por ela reduzido à insolvência (eventus damni e consilium fraudis). Anulável pela Ação Pauliana no prazo decadencial de 4 anos.
- Simulação (Art. 167): causa de NULIDADE ABSOLUTA (não prescreve e não convalesce). Ocorre conluio entre as partes para aparentar negócio inexistente ou encobrir negócio diverso (simulação relativa dissimulada).

5. Nulidade Absoluta x Nulidade Relativa (Anulabilidade):
- Nulidade Absoluta (Art. 166): ofende interesse público; pronunciável de ofício pelo juiz; pode ser arguida pelo MP e qualquer interessado; não se convalida pelo decurso do tempo (art. 169 - imprescritível); eficácia ex tunc.
- Anulabilidade (Art. 171): ofende interesse privado das partes; não pode ser pronunciada de ofício; prazo decadencial geral de 2 anos (art. 179) ou de 4 anos nos vícios de consentimento (art. 178); admite confirmação expressa ou tácita.""",
      "keyStatutes": [
        "Código Civil, arts. 104, 121 a 137 (Existência, Validade e Eficácia)",
        "Código Civil, arts. 138 a 165 (Vícios do Consentimento e Sociais)",
        "Código Civil, arts. 166 a 184 (Invalidade e Simulação)"
      ],
      "summaryPoints": [
        "Simulação gera Nulidade Absoluta e é imprescritível (CC/02, art. 167).",
        "Erro, dolo, coação, estado de perigo, lesão e fraude contra credores geram anulabilidade no prazo de 4 anos (art. 178).",
        "Herança aberta é bem imóvel por determinação legal, exigindo outorga uxória para cessão.",
        "Encargo não suspende a aquisição nem o exercício do direito."
      ]
    },
    {
      "title": "Módulo 5: Prescrição e Decadência: Distinções Científicas e Prazos do Código Civil (Págs. 23-27)",
      "content": """1. Distinção Científica Fundamental (Critério de Agnelo Amorim Filho):
- Prescrição: extingue a pretensão de exigir uma prestação em juízo (direito subjetivo a uma prestação). Aplica-se a direitos violados que dão origem a ações condenatórias.
- Decadência: extingue o próprio direito potestativo (ao qual não corresponde uma prestação, mas um estado de sujeição da contraparte). Aplica-se a ações constitutivas ou desconstitutivas (anulatórias).

2. Regras Fundamentais da Prescrição (Arts. 189 a 204 do CC):
- Início da contagem: teoria da actio nata (o prazo prescricional nasce com a violação do direito, mas o STJ adota a vertente subjetiva: inicia-se quando o titular tem ciência inequívoca da lesão e de sua autoria).
- Renúncia da prescrição: só pode ser feita após consumada e sem prejuízo a terceiro (art. 191).
- Prazos fixados por lei: os prazos de prescrição NÃO podem ser alterados por acordo das partes (art. 192).
- Suspensão e Interrupção da Prescrição:
  - Não corre prescrição: entre cônjuges na constância da sociedade conjugal; entre ascendentes e descendentes durante o poder familiar; contra os incapazes absolutos (menores de 16 anos - art. 198, I).
  - Interrupção (Art. 202): só pode ocorrer UMA ÚNICA VEZ por despacho que ordenar a citação, protesto cambial, protesto judicial ou ato inequívoco de reconhecimento da dívida pelo devedor. Interrompida, o prazo recomeça por inteiro a correr da data do ato que a interrompeu.

3. Prazos Prescricionais em Espécie (Arts. 205 e 206 do CC):
- Prazo Geral (Art. 205): 10 (dez) anos, quando a lei não lhe haja fixado prazo menor (ex.: responsabilidade civil por inadimplemento contratual - tese fixada pela Corte Especial do STJ nos EREsp 1.280.825/RJ).
- Prazos Especiais (Art. 206):
  - 1 ano: pretensão dos hospedeiros e dos segurados contra a seguradora;
  - 2 anos: pretensão para haver prestações alimentares, a contar da data em que se vencerem;
  - 3 anos: pretensão de reparação civil extracontratual/aquiliana (art. 206, § 3º, V); pretensão de cobrança de aluguéis de prédio rústico ou urbano; pretensão de enriquecimento sem causa;
  - 4 anos: pretensão relativa à tutela;
  - 5 anos: cobrança de dívidas líquidas constantes de instrumento público ou particular (art. 206, § 5º, I); pretensão dos profissionais liberais por honorários.

4. Decadência (Arts. 207 a 211):
Salvo disposição legal em contrário, não se aplicam à decadência as normas que impedem, suspendem ou interrompem a prescrição.
- Decadência Legal: fixada por lei, de ordem pública. O juiz deve conhecê-la de ofício e as partes não podem renunciar.
- Decadência Convencional: fixada pelas partes em contrato. O juiz não pode conhecer de ofício e a parte beneficiada pode renunciar.""",
      "keyStatutes": [
        "Código Civil, arts. 189 a 206 (Prescrição e Prazos)",
        "Código Civil, arts. 207 a 211 (Decadência)",
        "STJ, EREsp 1.280.825/RJ (Prescrição decenal no descumprimento de contrato)"
      ],
      "summaryPoints": [
        "Inadimplemento contratual prescreve em 10 anos (art. 205); reparação extracontratual prescreve em 3 anos (art. 206, § 3º, V).",
        "A prescrição pode ser interrompida uma única vez no Código Civil.",
        "Prescrição não corre contra menores de 16 anos.",
        "Prazos prescricionais são imutáveis pela vontade das partes."
      ]
    },
    {
      "title": "Módulo 6: Teoria Geral das Obrigações, Pagamento e Inadimplemento (Págs. 28-33)",
      "content": """1. Estrutura da Relação Obrigacional:
A obrigação é um vínculo jurídico composto por Débito (Schuld - dever de prestar) e Responsabilidade (Haftung - sujeição patrimonial). Em regra coincidem, mas há débito sem responsabilidade (obrigação natural / dívida de jogo) e responsabilidade sem débito (fiador / avalista).

2. Modalidades de Obrigações:
- Obrigação de Dar Coisa Certa (Arts. 233 a 242): abrange os acessórios embora não mencionados. Deteriorada a coisa sem culpa do devedor, a obrigação se resolve; com culpa, responde pelo equivalente mais perdas e danos.
- Obrigação de Dar Coisa Incerta (Arts. 243 a 246): determinada pelo gênero e quantidade. A concentração (escolha) pertence ao devedor, se o contrário não resultar do título. Antes da escolha, o devedor não pode alegar perda ou deterioração da coisa, ainda que por força maior (genus nunquam perit).
- Obrigações Solidárias (Arts. 264 a 285): a solidariedade NÃO se presume; resulta da lei ou da vontade das partes (art. 265). Na solidariedade passiva, o credor pode exigir de um ou de todos os devedores o pagamento integral. O devedor que pagou a dívida por inteiro tem direito de regresso contra os demais pela quota de cada um.

3. Transmissão das Obrigações:
- Cessão de Crédito (Arts. 286 a 298): negócio pelo qual o credor transfere seu crédito a outrem. Não exige consentimento do devedor, mas só produz efeito em relação a ele a partir da notificação (art. 290). Salvo estipulação em contrário, o cedente garante apenas a existência do crédito (pro soluto), e não a solvência do devedor (pro solvendo).
- Assunção de Dívida / Cessão de Débito (Arts. 299 a 303): exige anuência EXPRESSA do credor. O silêncio do credor importa em recusa (salvo na hipótese de adquirente de imóvel hipotecado que notifica o credor hipotecário, art. 303).

4. Adimplemento e Extinção das Obrigações:
- Quem deve pagar: qualquer interessado (fiador, avalista, coproprietário) que se sub-roga nos direitos do credor; ou terceiro não interessado (paga em nome e à conta do devedor, não se sub-rogando, tendo apenas direito de reembolso se pagar em nome próprio).
- Objeto do pagamento: princípio do nominalismo e vedação ao pagamento parcelado sem pacto prévio (o credor não é obrigado a receber prestação diversa da que lhe é devida, ainda que mais valiosa - art. 313).
- Imputação do Pagamento, Dação em Pagamento (entrega de bem diverso com aceitação do credor), Compensação (dívidas líquidas, vencidas e de coisas fungíveis), Novação (criação de obrigação nova para extinguir a anterior com animus novandi) e Remissão (perdão da dívida aceito pelo devedor).

5. Inadimplemento das Obrigações (Arts. 389 a 420):
- Inadimplemento Absoluto: a prestação não foi cumprida e tornou-se inútil ao credor. Resolve-se em perdas e danos (danos emergentes + lucros cessantes), juros de mora, correção monetária e honorários advocatícios (art. 389).
- Mora (Art. 394): atraso culposo no cumprimento da prestação ainda útil ao credor. Mora ex re (dies interpellat pro homine - termo certo da dívida positiva e líquida); e Mora ex persona (exige notificação ou interpelação judicial/extrajudicial quando não há termo fixado).
- Cláusula Penal (Arts. 408 a 416): prefixação das perdas e danos. Pode ser compensatória (para o caso de total inadimplemento) ou moratória (para atraso). O valor da penalidade não pode exceder o da obrigação principal (art. 412) e deve ser reduzido equitativamente pelo juiz se a obrigação for cumprida em parte ou a penalidade for manifestamente excessiva (art. 413 - norma cogente).
- Arras ou Sinal (Arts. 417 a 420): confirmatórias (início de pagamento e garantia de cumprimento; se a parte que deu as arras desistir, perde-as; se a que recebeu desistir, devolve-as mais o equivalente); ou penitenciais (previstas para assegurar o direito de arrependimento, sem direito a indenização suplementar).""",
      "keyStatutes": [
        "Código Civil, arts. 265 a 285 (Solidariedade Obrigacional)",
        "Código Civil, arts. 286 a 303 (Cessão de Crédito e Assunção de Débito)",
        "Código Civil, arts. 389 a 420 (Perdas e Danos, Mora e Cláusula Penal)"
      ],
      "summaryPoints": [
        "A solidariedade nunca se presume: decorre exclusivamente da lei ou do contrato.",
        "Na assunção de dívida, o silêncio do credor equivale a recusa (consentimento deve ser expresso).",
        "Redução da cláusula penal manifestamente excessiva é dever oficioso do magistrado (art. 413).",
        "Arras penitenciais vedam qualquer pleito de indenização suplementar (art. 420)."
      ]
    },
    {
      "title": "Módulo 7: Teoria Geral dos Contratos e Contratos em Espécie (Págs. 34-39)",
      "content": """1. Princípios Contratuais Fundamentais:
- Autonomia Privada: liberdade de contratar (com quem) e de conformação contratual (conteúdo), limitada pela função social e pela ordem pública.
- Função Social do Contrato (Art. 421): a liberdade contratual será exercida nos limites da função social da empresa e do contrato. Nas relações privadas, prevalecerá a intervenção mínima e a presunção de paridade (redação da Lei da Liberdade Econômica).
- Boa-Fé Objetiva (Art. 422): os contratantes são obrigados a guardar, assim na conclusão do contrato, como em sua execução, os princípios de probidade e boa-fé. Gera deveres anexos (lealdade, informação, cooperação e proteção). Figuras parcelares: nemo potest venire contra factum proprium (vedação ao comportamento contraditório), suppressio (perda de um direito pela inércia qualificada), surrectio (surgimento de um direito pelo hábito reiterado), tu quoque e duty to mitigate the loss (dever de mitigar o próprio prejuízo).

2. Vícios Redibitórios e Evicção:
- Vícios Redibitórios (Arts. 441 a 446): defeitos ocultos que tornam a coisa imprópria ao uso ou lhe diminuam o valor em contratos comutativos. O adquirente pode rejeitar a coisa (ação redibitória) ou pedir abatimento no preço (ação quanti minoris / estimatória). Prazos decadenciais: 30 dias para bem móvel e 1 ano para bem imóvel.
- Evicção (Arts. 447 a 457): perda da posse ou da propriedade de um bem para terceiro por força de decisão judicial ou ato administrativo anterior à alienação. O alienante responde de pleno direito, mesmo de boa-fé. Para excluir a responsabilidade pela evicção exige-se cláusula expressa e que o adquirente tenha sido informado do risco e o assumido.

3. Extinção do Contrato:
- Resolução: extinção por inadimplemento culposo ou por onerosidade excessiva (teoria da imprevisão - arts. 478 a 480: acontecimentos extraordinários e imprevisíveis).
- Resilição: extinção pela vontade das partes. Pode ser bilateral (distrato - art. 472, deve seguir a mesma forma do contrato se esta for exigida pela lei) ou unilateral (denúncia notificada à outra parte, nos contratos por tempo indeterminado).
- Rescisão: termo técnico utilizado para anulação de contrato viciado por lesão ou estado de perigo.
- Exceção do Contrato Não Cumprido (Exceptio non adimpleti contractus - Art. 476): nenhum dos contratantes, antes de cumprida a sua obrigação, pode exigir o implemento da do outro.

4. Principais Contratos em Espécie:
- Compra e Venda (Arts. 481 a 532): transferência do domínio mediante preço. Regras capitais da OAB:
  a) Venda de ascendente a descendente (Art. 496): é ANULÁVEL (prazo decadencial de 2 anos, Súmula 494 STF), salvo se os outros descendentes e o cônjuge do alienante expressamente consentirem.
  b) Venda entre cônjuges (Art. 499): lícita a compra e venda entre cônjuges com relação a bens excluídos da comunhão.
  c) Venda ad mensuram x ad corpus (Art. 500): se a área do imóvel não corresponder às dimensões pactuadas, cabe complemento da área, e não sendo possível, rescisão ou abatimento do preço (ad mensuram).
- Doação (Arts. 538 a 564): negócio de liberalidade. Doação de ascendente a descendente importa em adiantamento de legítima (art. 544). É nula a doação de todos os bens sem reserva de parte ou renda suficiente para a subsistência (doação inoficiosa / art. 548) e a doação quanto à parte que exceder a que o doador poderia dispor em testamento (art. 549). Revogação por ingratidão do donatário (art. 557) ou por inexecução de encargo.
- Locação Predial Urbana (Lei 8.245/91): ação de despejo, revisional e renovatória comercial (5 anos de contrato escrito e 3 anos no mesmo ramo).
- Comodato (empréstimo gratuito de coisas infungíveis) e Mútuo (empréstimo oneroso ou gratuito de coisas fungíveis). Fiança (garantia pessoal que exige vênia conjugal, salvo na separação absoluta de bens - Súmula 332 STJ).""",
      "keyStatutes": [
        "Código Civil, arts. 421 a 424 (Função Social e Boa-Fé Objetiva)",
        "Código Civil, arts. 441 a 457 (Vícios Redibitórios e Evicção)",
        "Código Civil, arts. 481 a 504 (Compra e Venda e Restrições)"
      ],
      "summaryPoints": [
        "Venda de ascendente a descendente sem outorga é ato anulável no prazo de 2 anos.",
        "Boa-fé objetiva vincula todas as fases contratuais, inclusive pré e pós-contratual.",
        "Fiança prestada sem outorga conjugal é nula de pleno direito (Súmula 332 do STJ).",
        "Evicção independe de culpa ou má-fé do alienante."
      ]
    },
    {
      "title": "Módulo 8: Responsabilidade Civil Subjetiva, Objetiva e Teoria do Dano (Págs. 40-45)",
      "content": """1. Pressupostos da Responsabilidade Civil:
A responsabilidade civil visa restaurar o equilíbrio patrimonial e moral rompido pelo dano. Requisitos clássicos:
a) Conduta humana (ação ou omissão voluntária);
b) Culpa em sentido amplo (dolo ou negligência, imprudência e imperícia - exigida na responsabilidade subjetiva);
c) Nexo de causalidade (liame entre o fato e o dano - o direito civil brasileiro adotou a Teoria da Causalidade Adequada ou do Dano Direto e Imediato, art. 403 do CC);
d) Dano (lesão a bem jurídico patrimonial ou extrapatrimonial).

2. Responsabilidade Subjetiva x Objetiva:
- Responsabilidade Subjetiva (Regra Geral - Art. 186): aquele que, por ação ou omissão voluntária, negligência ou imprudência, violar direito e causar dano a outrem, comete ato ilícito e fica obrigado a reparar (art. 927, caput).
- Responsabilidade Objetiva (Exceção Expressa - Art. 927, Parágrafo Único): haverá obrigação de reparar o dano, independentemente de culpa, nos casos especificados em lei, ou quando a atividade normalmente desenvolvida pelo autor do dano implicar, por sua natureza, risco para os direitos de outrem (Teoria do Risco Criado).

3. Responsabilidade por Fato de Terceiro (Art. 932 do CC):
São também responsáveis pela reparação civil:
I - os pais, pelos filhos menores que estiverem sob sua autoridade e em sua companhia;
II - o tutor e o curador, pelos pupilos e curatelados;
III - o empregador ou comitente, por seus empregados no exercício do trabalho que lhes competir, ou em razão dele (Súmula 341 STF: 'É presumida a culpa do patrão ou comitente pelo ato culposo do empregado ou preposto' - hoje responsabilidade objetiva pelo art. 933);
IV - os donos de hotéis, hospedarias, escolas pelos seus hóspedes e alunos;
V - os que gratuitamente houverem participado nos produtos do crime.
Atenção OAB: A responsabilidade dos sujeitos do art. 932 é OBJETIVA perante a vítima (art. 933), cabendo ação regressiva contra o causador direto do dano, salvo se for descendente seu, absoluta ou relativamente incapaz (art. 934).

4. Responsabilidade pelo Fato das Coisas e dos Animais:
- Dono ou detentor do animal (Art. 936): ressarcirá o dano por este causado se não provar culpa exclusiva da vítima ou força maior (responsabilidade objetiva).
- Queda de coisas de edifício (Effusum et deiectum - Art. 938): aquele que habitar prédio ou parte dele responde pelo dano proveniente das coisas que dele caírem ou forem lançadas em lugar indevido (responsabilidade objetiva do morador/condomínio).

5. Excludentes do Nexo Causal:
- Culpa exclusiva da vítima (rompe o nexo; se for concorrente, a indenização será fixada tendo em conta a gravidade da culpa - art. 945);
- Fato exclusivo de terceiro (se o terceiro criar situação autônoma e imprevisível; na súmula 187 do STF, o transportador responde perante o passageiro mesmo por ato culposo de terceiro, cabendo ação regressiva);
- Caso fortuito ou força maior (evento imprevisível e inevitável; distingue-se fortuito interno - inerente à atividade, que não exclui a responsabilidade, como estouro de pneu ou roubo em banco - de fortuito externo - fato totalmente estranho à atividade, que rompe o nexo causal).

6. Espécies de Danos:
- Dano Material: danos emergentes (o que efetivamente perdeu) e lucros cessantes (o que razoavelmente deixou de lucrar).
- Dano Moral: lesão aos direitos da personalidade, dignidade, dor psíquica profunda. Pode ser in re ipsa (presumido, como inscrição indevida em cadastro de inadimplentes - Súmula 385 STJ; ou veiculação indevida de imagem - Súmula 403 STJ).
- Dano Estético: deformidade física permanente. É perfeitamente cumulável a indenização por dano material, dano moral e dano estético oriundos do mesmo fato (Súmula 387 do STJ).
- Teoria da Perda de uma Chance: quando a conduta ilícita retira da vítima a probabilidade real e séria de obter um ganho ou evitar um prejuízo.""",
      "keyStatutes": [
        "Código Civil, arts. 186, 187, 927 a 954 (Responsabilidade Civil)",
        "Súmula 387 do STJ (Cumulação de dano moral e estético)",
        "Súmula 385 do STJ (Restrição de dano moral por prévia anotação regular)"
      ],
      "summaryPoints": [
        "Responsabilidade dos pais, empregadores e educadores perante terceiros é objetiva (arts. 932 e 933).",
        "Dono de animal responde objetivamente pelos danos causados por este (art. 936).",
        "Súmula 387 do STJ: é plenamente lícita a cumulação de dano estético, moral e material.",
        "Fortuito interno não afasta o dever de indenizar do fornecedor de serviços ou produtos."
      ]
    },
    {
      "title": "Módulo 9: Direitos Reais: Posse, Propriedade e Usucapião (Págs. 46-51)",
      "content": """1. Teoria da Posse:
O Código Civil brasileiro adotou primordialmente a Teoria Objetiva de Ihering (Art. 1.196): considera-se possuidor todo aquele que tem de fato o exercício, pleno ou não, de algum dos poderes inerentes à propriedade (usar, gozar, dispor ou reaver). Dispensa o animus domini como elemento estrutural da posse geral.
- Fâmulo da Posse ou Detentor (Art. 1.198): aquele que, achando-se em relação de dependência para com outro, conserva a posse em nome deste e em cumprimento de ordens ou instruções suas (ex.: caseiro, motorista particular). O detentor NÃO tem posse e não pode manejar interditos possessórios em nome próprio.
- Classificação da Posse:
  a) Direta (de quem tem a coisa fisicamente sob custódia temporária - locatário) e Indireta (do proprietário locador);
  b) Justa (não violenta, não clandestina e não precária) e Injusta (adquirida com violência, clandestinidade ou precariedade - vício da precariedade não convalesce);
  c) De Boa-fé (se o possuidor ignora o vício ou obstáculo que impede a aquisição da coisa) e De Má-fé.
- Efeitos da Posse:
  - Benfeitorias necessárias e úteis: o possuidor de boa-fé tem direito de indenização e de retenção pelas necessárias e úteis, podendo levantar as voluptuárias. O possuidor de má-fé só tem direito às necessárias, sem direito de retenção nem de levantar voluptuárias (arts. 1.219 e 1.220).

2. Propriedade e Ações Petitórias:
A propriedade confere a faculdade de usar, gozar e dispor da coisa, e o direito de reavê-la do poder de quem quer que injustamente a possua ou detenha (art. 1.228).
Ação Reivindicatória é ação petitória fundada no domínio (jus possidendi), que não se confunde com as ações possessórias fundadas na posse fática (jus possessionis: reintegração para esbulho, manutenção para turbação e interdito proibitório para ameaça).

3. Modalidades de Usucapião de Imóveis:
- Usucapião Extraordinário (Art. 1.238): posse mansa, pacífica e ininterrupta por 15 (quinze) anos, INDEPENDENTEMENTE de título e de boa-fé. Reduz-se para 10 (dez) anos se o possuidor tiver estabelecido no imóvel a sua moradia habitual ou realizado obras ou serviços de caráter produtivo.
- Usucapião Ordinário (Art. 1.242): posse de 10 (dez) anos com JUSTO TÍTULO e BOA-FÉ. Reduz-se para 5 (cinco) anos se o imóvel houver sido adquirido, onerosamente, com base no registro constante do cartório, cancelada posteriormente, desde que os moradores tenham nele sua morada ou realizado investimentos.
- Usucapião Especial Urbano / Constitucional (Art. 1.240 CC e Art. 183 CF): imóvel urbano de até 250 m², posse contínua por 5 (cinco) anos, utilizando-o para moradia sua ou de sua família, desde que não seja proprietário de outro imóvel urbano ou rural.
- Usucapião Especial Rural / Pro Labore (Art. 1.239 CC e Art. 191 CF): área de terra em zona rural não superior a 50 hectares, posse de 5 (cinco) anos ininterruptos, tornando-a produtiva pelo seu trabalho e tendo nela sua moradia, não sendo proprietário de outro imóvel.
- Usucapião Familiar / Por Abandono do Lar (Art. 1.240-A): 2 (dois) anos de posse ininterrupta e direta de imóvel urbano de até 250 m², cuja copropriedade dividia com ex-cônjuge ou ex-companheiro que abandonou o lar, utilizando-o para moradia sua e de sua família, não sendo proprietário de outro imóvel.

4. Direitos Reais sobre Coisas Alheias:
Superfície (substituiu a enfiteuse), Servidões, Usufruto (instituído em favor de pessoa determinada, inalienável, mas o exercício pode ser cedido a título oneroso ou gratuito), Direito do Promitente Comprador de Imóvel registrado (direito real à aquisição que enseja Ação de Adjudicação Compulsória - Súmula 239 do STJ: 'O direito à adjudicação compulsória não se condiciona ao registro do compromisso de compra e venda no cartório de imóveis').""",
      "keyStatutes": [
        "Código Civil, arts. 1.196 a 1.224 (Teoria da Posse)",
        "Código Civil, arts. 1.238 a 1.244 (Modalidades de Usucapião)",
        "Súmula 239 do STJ (Adjudicação compulsória dispensa registro)"
      ],
      "summaryPoints": [
        "Usucapião extraordinário exige 15 anos de posse e dispensa boa-fé e justo título.",
        "Usucapião familiar exige 2 anos de posse direta contra ex-cônjuge que abandonou o lar (art. 1.240-A).",
        "Caseiro é mero detentor (fâmulo da posse) e não adquire direito de posse nem usucapião.",
        "Súmula 239 STJ: promessa de compra e venda sem registro autoriza adjudicação compulsória."
      ]
    },
    {
      "title": "Módulo 10: Direito de Família e Direito das Sucessões (Págs. 52-56)",
      "content": """1. Casamento e Regime de Bens:
- Impedimentos Matrimoniais (Art. 1.521): geram a NULIDADE do casamento (art. 1.548). Entre ascendentes e descendentes; afins em linha reta (sogro/nora mesmo após o divórcio); cônjuge sobrevivente com o condenado por homicídio ou tentativa contra o seu consorte.
- Causas Suspensivas (Art. 1.523): geram a imposição do regime da separação obrigatória de bens (art. 1.641, I).
- Regimes de Bens:
  a) Comunhão Parcial (Regime Legal Supletivo - Art. 1.658): comunicam-se os bens adquiridos onerosamente na constância do casamento (aquestos), excluindo-se os doados/herdados antes ou durante o casamento com cláusula de incomunicabilidade e os bens particulares anteriores.
  b) Comunhão Universal (Art. 1.667): comunicam-se todos os bens presentes e futuros e suas dívidas passivas, com raras exceções (bens doados com incomunicabilidade e dívidas anteriores).
  c) Separação Obrigatória de Bens (Art. 1.641): imposta às pessoas com mais de 70 anos e aos que casarem sem observar causas suspensivas. Súmula 377 do STF: 'No regime de separação legal de bens, comunicam-se os adquiridos na constância do casamento, desde que comprovado o esforço comum' (conforme modulação do STJ e recente julgamento do STF no Tema 1236, que autorizou a renúncia da separação obrigatória por escritura pública).
  d) Participação Final nos Aquestos: cada cônjuge possui patrimônio próprio e lhe cabe apuração dos aquestos na dissolução.

2. Alimentos e Prisão Civil:
Alimentos são irrenunciáveis na constância do poder familiar, imprescritíveis no direito de pedir, mas as prestações vencidas prescrevem em 2 anos (art. 206, § 2º).
A prisão civil do devedor de alimentos (art. 528 do CPC e art. 5º, LXVII da CF/88) alcança até 3 (três) meses em regime fechado, referente às 3 (três) últimas parcelas anteriores ao ajuizamento e as que vencerem no curso do processo (Súmula 309 do STJ).

3. Direito das Sucessões:
Abertura da sucessão ocorre no instante da morte, momento em que a herança se transmite desde logo aos herdeiros legítimos e testamentários (Princípio da Saisine - Art. 1.784).
- Herdeiros Necessários (Art. 1.845): são os descendentes, os ascendentes e o cônjuge (e companheiro equiparado pelo STF no Tema 809 - inconstitucionalidade do art. 1.790). A eles pertence de pleno direito a metade dos bens da herança (legítima de 50%).
- Ordem de Vocação Hereditária (Art. 1.829):
  I - Aos descendentes, em concorrência com o cônjuge sobrevivente, salvo se casado sob o regime da comunhão universal, ou no da separação obrigatória de bens; ou se, no regime da comunhão parcial, o autor da herança não houver deixado bens particulares (concorre APENAS nos bens particulares deixados pelo de cujus, conforme pacificado pela Segunda Seção do STJ);
  II - Aos ascendentes, em concorrência com o cônjuge (independentemente do regime de bens);
  III - Ao cônjuge sobrevivente, em sua totalidade (se não houver descendentes nem ascendentes);
  IV - Aos colaterais até o quarto grau (irmãos, sobrinhos, tios, primos e tios-avôs - mais próximos excluem os mais remotos, com direito de representação aos filhos de irmãos).
- Indignidade e Deserdação:
  - Indignidade (Art. 1.814): decorre de crimes dolosos contra a vida ou honra do autor da herança. Opera-se por sentença judicial declaratória;
  - Deserdação (Arts. 1.961 a 1.965): privação da legítima dos herdeiros necessários por ato de vontade em testamento, nos casos expressos da lei (injúria grave, desamparo em alienação mental).""",
      "keyStatutes": [
        "Código Civil, arts. 1.639 a 1.688 (Regimes de Bens no Casamento)",
        "Código Civil, arts. 1.784 a 1.856 (Sucessão em Geral e Vocação Hereditária)",
        "Súmula 309 do STJ (Prisão civil das 3 últimas parcelas alimentares)",
        "STF, Tema 809 (Equiparação do companheiro ao cônjuge sucessório)"
      ],
      "summaryPoints": [
        "Princípio de Saisine transmite posse e propriedade da herança no exato instante da morte.",
        "Cônjuge sobrevivente concorre com descendentes na comunhão parcial apenas sobre os bens particulares.",
        "Prisão civil por alimentos alcança as 3 parcelas anteriores e vincendas (Súmula 309 STJ).",
        "STF equiparou companheiro ao cônjuge para todos os efeitos sucessórios (inconstitucionalidade do art. 1.790)."
      ]
    }
  ]
}

empresarial_manual = {
  "id": "manual-ext-emp-50p",
  "title": "Tratado Extensivo de Direito Empresarial: Teoria da Empresa, Sociedades, Títulos, Recuperação e Falência",
  "disciplineId": "empresarial",
  "author": "Coordenação Acadêmica de Direito Empresarial · Aprova Direito",
  "estimatedReadTime": "54 páginas didáticas · 4h00 de estudo aprofundado",
  "pageCount": 54,
  "isExtensiveManual": True,
  "edition": "Tratado Completo 2026/2027 · Atualizado pela Lei 14.112/20 e Marco Legal das Startups",
  "description": "Manual definitivo com mais de 50 páginas didáticas, esgotando o Direito Empresarial contemporâneo. Analisa a Teoria da Empresa, Registro e Junta Comercial, Estabelecimento e Trespasse, Sociedades em Comum, Sociedade Limitada no Código Civil, Sociedade Anônima (Lei 6.404/76), Títulos de Crédito (Cheque, Duplicata, Nota Promissória), Recuperação Judicial e Falência atualizada pela Lei nº 14.112/2020.",
  "chapters": [
    {
      "title": "Módulo 1: Teoria da Empresa, Conceito de Empresário e Atividades Excluídas (Págs. 1-5)",
      "content": """1. Evolução Histórica do Direito Comercial ao Direito Empresarial:
O Direito Comercial nasceu na Idade Média como direito corporativo subjetivo dos comerciantes matriculados nas corporações de ofício (1ª Fase). Com o Código Napoleônico de 1807, passou ao sistema dos Atos de Comércio (2ª Fase - adotado no Código Comercial Brasileiro de 1850).
Com o Código Civil de 2002, o Brasil adotou expressamente a Teoria da Empresa, inspirada no Código Civil Italiano de 1942 (3ª Fase), unificando as obrigações civis e mercantis sob o prisma da atividade econômica organizada.

2. Conceito Legal de Empresário (Art. 966 do Código Civil):
'Considera-se empresário quem exerce profissionalmente atividade econômica organizada para a produção ou a circulação de bens ou de serviços.'
Elementos constitutivos indispensáveis:
a) Profissionalismo: habitualidade, pessoalidade e monopólio das informações da atividade mercantil;
b) Atividade Econômica: intuito de lucro e assunção do risco inerente ao mercado;
c) Organização: articulação racional dos quatro fatores de produção clássicos (capital, mão de obra, insumos e tecnologia);
d) Produção ou Circulação de Bens ou Serviços: introdução de utilidades no mercado.

3. Exclusões Legais da Condição de Empresário (Art. 966, Parágrafo Único):
NÃO se considera empresário quem exerce profissão intelectual, de natureza científica, literária ou artística, ainda com o concurso de auxiliares ou colaboradores, salvo se o exercício da profissão constituir elemento de empresa.
Exemplos da jurisprudência:
- Advogados, médicos, dentistas, arquitetos, escritores e pintores são profissionais intelectuais liberais (sociedades simples, regidas pelo direito civil), e NÃO empresários.
- Elemento de Empresa: quando a atividade intelectual passa a ser mero componente de uma organização econômica mais ampla que independe da pessoa física do criador (ex.: médico que funda hospital ou clínica de diagnósticos com dezenas de especialidades e UTI).

4. O Produtor Rural e o Empresário Rural (Art. 971 do CC):
O produtor rural que exerça atividade agrária pode requerer inscrição no Registro Público de Empresas Mercantis (Junta Comercial). A inscrição é FACULTATIVA. Antes da inscrição, rege-se pelas normas civis ordinárias. Uma vez inscrito, equipara-se, para todos os efeitos, ao empresário mercantil, submetendo-se à falência e podendo pleitear recuperação judicial (segundo entendimento pacificado do STJ e positivado pelo art. 48, § 2º da Lei 11.101/05 alterada pela Lei 14.112/20).""",
      "keyStatutes": [
        "Código Civil, art. 966 e parágrafo único (Teoria da Empresa e Exclusões)",
        "Código Civil, art. 971 (Faculdade de Registro do Produtor Rural)",
        "Lei nº 11.101/2005, art. 48 (Recuperação do Produtor Rural)"
      ],
      "summaryPoints": [
        "Empresário é quem exerce atividade econômica organizada de produção ou circulação de bens/serviços.",
        "Profissionais intelectuais não são empresários, salvo se houver elemento de empresa.",
        "Inscrição do produtor rural na Junta Comercial tem natureza declaratória para fins de recuperação judicial.",
        "Sociedades de advogados NUNCA podem revestir forma mercantil (art. 16 do Estatuto da OAB)."
      ]
    },
    {
      "title": "Módulo 2: Empresário Individual, Sociedade Unipessoal e Capacidade Empresarial (Págs. 6-10)",
      "content": """1. Capacidade para Exercer Empresa (Arts. 972 a 976 do CC):
Podem exercer a atividade de empresário os que estiverem em pleno gozo da capacidade civil e não forem legalmente impedidos.
- Menor e Incapaz: o incapaz não pode INICIAR atividade empresarial. Porém, o menor ou incapaz pode CONTINUAR a empresa antes exercida por ele enquanto capaz, por seus pais ou pelo autor de herança, mediante autorização judicial expressa (art. 974). A autorização pode ser revogada a qualquer tempo pelo juiz.
- Proteção ao patrimônio do incapaz: o alvará judicial indicará os bens que o incapaz já possuía antes da sucessão, os quais não responderão pelo resultado da empresa continuada (art. 974, § 2º).

2. Impedimentos ao Exercício da Empresa (Art. 973 do CC):
A pessoa legalmente impedida de exercer atividade própria de empresário (ex.: magistrados, membros do Ministério Público, servidores públicos federais ativos da Lei 8.112/90, militares da ativa e falidos não reabilitados) que praticar atos empresariais responde pelas obrigações contraídas.
Atenção OAB: A prática de atos empresariais por pessoa impedida NÃO acarreta a nulidade dos negócios celebrados perante terceiros de boa-fé, mas gera sanções disciplinares, administrativas ou criminais para o infrator.

3. Empresário Individual x Sociedade Unipessoal:
- Empresário Individual (EI): pessoa física que exerce empresa em nome próprio. Não há separação patrimonial entre o patrimônio pessoal civil e o patrimônio do negócio. Responde com todos os seus bens presentes e futuros de forma ILIMITADA pelas dívidas do negócio.
- Extinção da EIRELI e Ascensão da Sociedade Limitada Unipessoal (SLU): a Lei nº 14.195/2021 revogou expressamente a Empresa Individual de Responsabilidade Limitada (EIRELI), transferindo compulsoriamente os entes para a modalidade de Sociedade Limitada constituída por uma única pessoa (art. 1.052, § 1º do CC), sem exigência de capital mínimo de 100 salários mínimos e com efetiva blindagem de responsabilidade patrimonial limitada ao capital social subscrito.""",
      "keyStatutes": [
        "Código Civil, arts. 972 a 976 (Capacidade Empresarial e Continuação por Incapaz)",
        "Código Civil, art. 1.052, §§ 1º e 2º (Sociedade Limitada Unipessoal)",
        "Lei nº 14.195/2021 (Desburocratização e Extinção da EIRELI)"
      ],
      "summaryPoints": [
        "Incapaz nunca pode iniciar empresa, mas pode continuar empresa herdada com autorização judicial.",
        "Servidor público impedido que exerce empresa responde integralmente pelas dívidas contraídas.",
        "Empresário Individual responde com patrimônio pessoal ilimitadamente.",
        "Sociedade Limitada Unipessoal não exige capital mínimo e assegura responsabilidade limitada."
      ]
    },
    {
      "title": "Módulo 3: Estabelecimento Empresarial e Contrato de Trespasse (Págs. 11-15)",
      "content": """1. Conceito e Natureza do Estabelecimento (Arts. 1.142 a 1.149 do CC):
Considera-se estabelecimento todo complexo de bens organizado, para exercício da empresa, por empresário, ou por sociedade empresária (art. 1.142). É uma universalidade de fato (universitas facti), composta por bens corpóreos (imóveis, máquinas, mercadorias) e bens incorpóreos (marca registrada no INPI, patente, ponto comercial, nome empresarial e aviamento).
- Aviamento: sobrevalor ou capacidade que o conjunto organizado de bens tem de gerar lucros superiores à soma isolada dos seus bens. Não é bem autônomo, mas atributo do estabelecimento.
- Ponto Comercial e Ação Renovatória (Lei nº 8.245/91, art. 51): o locatário empresário tem direito à renovação compulsória do contrato de locação não residencial se:
  a) O contrato a renovar tenha sido celebrado por escrito e com prazo determinado;
  b) O prazo mínimo do contrato ou a soma dos prazos ininterruptos dos contratos escritos seja de 5 (cinco) anos;
  c) O locatário esteja explorando seu comércio, no mesmo ramo, pelo prazo mínimo e ininterrupto de 3 (três) anos.
  Prazo decadencial da Ação Renovatória: deve ser ajuizada entre 1 (um) ano e 6 (seis) meses antes do término do contrato a renovar (art. 51, § 5º da Lei 8.245/91).

2. Contrato de Trespasse (Alienação do Estabelecimento):
O trespasse é a alienação onerosa ou gratuita do complexo do estabelecimento comercial. Não se confunde com a cessão de quotas ou ações sociais (na cessão de quotas transfere-se a participação societária; no trespasse aliena-se a própria empresa/acervo de bens operacionais).
- Eficácia perante terceiros (Art. 1.144): o contrato de trespasse só produz efeitos quanto a terceiros depois de averbado à margem da inscrição do empresário na Junta Comercial e publicado na imprensa oficial.
- Proteção dos credores (Art. 1.145): se ao alienante não restarem bens suficientes para solver o seu passivo, a eficácia da alienação do estabelecimento depende do pagamento de todos os credores, ou do consentimento destes, de modo expresso ou tácito, em 30 (trinta) dias a partir de sua notificação. O trespasse sem anuência dos credores em estado de insolvência constitui hipótese de decretação de falência (art. 94, III, 'c' da Lei 11.101/05).
- Responsabilidade pelas dívidas anteriores (Art. 1.146): o adquirente do estabelecimento responde pelo pagamento dos débitos anteriores à transferência, desde que regularmente contabilizados, continuando o devedor primitivo solidariamente obrigado pelo prazo de 1 (um) ano, a partir, quanto aos créditos vencidos, da publicação, e, quanto aos outros, da data do vencimento.
- Cláusula de Não Restabelecimento (Art. 1.147): não havendo autorização expressa no contrato, o alienante do estabelecimento NÃO pode fazer concorrência ao adquirente nos 5 (cinco) anos subsequentes à transferência. Em caso de arrendamento ou usufruto, a proibição persistirá durante o prazo do contrato.""",
      "keyStatutes": [
        "Código Civil, arts. 1.142 a 1.149 (Estabelecimento e Trespasse)",
        "Lei nº 8.245/1991, arts. 51 e 71 (Locação Empresarial e Ação Renovatória)",
        "Lei nº 11.101/2005, art. 94, III, 'c' (Trespasse irregular como ato de falência)"
      ],
      "summaryPoints": [
        "Trespasse exige averbação na Junta Comercial e publicação para eficácia perante terceiros.",
        "Se o alienante ficar insolvente, credores devem assentir expressa ou tacitamente em 30 dias.",
        "Devedor primitivo responde solidariamente por 1 ano pelas dívidas contabilizadas.",
        "Cláusula de não concorrência implícita veda restabelecimento pelo prazo de 5 anos."
      ]
    },
    {
      "title": "Módulo 4: Nome Empresarial e Registro Público de Empresas Mercantis (Págs. 16-20)",
      "content": """1. Nome Empresarial (Arts. 1.155 a 1.168 do CC):
O nome empresarial é a designação sob a qual o empresário individual e a sociedade empresária exercem suas atividades e assinam os atos jurídicos da empresa.
Distingue-se de:
- Marca: sinal distintivo de produtos ou serviços, registrado no INPI (propriedade industrial, Lei 9.279/96);
- Título de Estabelecimento: designação do local físico (ex.: 'Padaria Estrela').
Espécies de Nome Empresarial:
a) Firma (ou Razão Social): composta pelo nome civil de um, alguns ou todos os sócios (ex.: 'Silva & Oliveira Ltda.'). É obrigatória para o empresário individual e facultativa para sociedades de responsabilidade limitada;
b) Denominação: composta por elemento fantasia ou termo inventado, acompanhado obrigatoriamente da indicação do objeto social (ex.: 'Estrela Comércio de Alimentos Ltda.'). É obrigatória para Sociedades Anônimas.

2. Princípios do Nome Empresarial:
- Princípio da Veracidade (Art. 1.165): a firma não pode conter nomes de pessoas que não sejam sócios. Se o sócio cujo nome consta da firma falecer, retirar-se ou for excluído, o nome deve ser obrigatoriamente alterado.
- Princípio da Novidade (Art. 1.163): o nome empresarial deve distinguir-se de qualquer outro já registrado na mesma base territorial da Junta Comercial.

3. Proteção ao Nome Empresarial (Art. 1.166 do CC):
A inscrição do empresário ou dos atos constitutivos na Junta Comercial assegura o uso exclusivo do nome nos limites do respectivo Estado da Federação. Para estender a proteção a todo o território nacional, a sociedade deve registrar o nome empresarial nas Juntas Comerciais de cada um dos demais Estados da Federação ou obter registro da marca perante o INPI.

4. Registro Público de Empresas Mercantis (Lei nº 8.934/1994):
Compreende o Departamento Nacional de Registro Empresarial e Integração (DREI - órgão normativo e fiscalizador federal) e as Juntas Comerciais (órgãos executores estaduais).
Atos do Registro: Matrícula (leiloeiros, tradutores juramentados), Arquivamento (atos constitutivos, alterações e dissoluções de sociedades) e Autenticação (livros fiscais e contábeis obrigatórios).""",
      "keyStatutes": [
        "Código Civil, arts. 1.155 a 1.168 (Nome Empresarial e Princípios)",
        "Lei Federal nº 8.934/1994 (Registro Público de Empresas Mercantis)",
        "Instruções Normativas do DREI"
      ],
      "summaryPoints": [
        "Firma utiliza nomes civis dos sócios; denominação pode utilizar expressão de fantasia.",
        "Princípio da veracidade exige exclusão imediata do nome de sócio retirante ou falecido.",
        "Proteção do nome empresarial no registro da Junta Comercial limita-se ao respectivo Estado.",
        "S/A utiliza obrigatoriamente denominação integrada por 'Companhia' ou 'Sociedade Anônima'."
      ]
    },
    {
      "title": "Módulo 5: Teoria Geral do Direito Societário e Sociedades Não Personificadas (Págs. 21-25)",
      "content": """1. Classificação Geral das Sociedades:
- Sociedade Simples (Art. 997 do CC): constituída para exploração de atividade econômica intelectual, científica, literária ou cooperativa. Registrada no Cartório de Registro Civil de Pessoas Jurídicas (RCPJ).
- Sociedade Empresária (Art. 982 do CC): constituída para exploração de atividade econômica organizada voltada à produção ou circulação de bens ou serviços. Registrada na Junta Comercial. Atenção OAB: As Sociedades Anônimas são SEMPRE empresárias, qualquer que seja o seu objeto (art. 982, parágrafo único); as Cooperativas são SEMPRE simples.

2. Sociedades Personificadas x Não Personificadas:
A sociedade adquire personalidade jurídica com a inscrição de seus atos constitutivos no órgão de registro próprio (Junta Comercial para empresárias, RCPJ para simples - art. 985 do CC). Antes do registro, são sociedades não personificadas.

3. Sociedade em Comum (Arts. 986 a 990 do CC):
É a sociedade fática ou irregular que opera no comércio sem o arquivamento de seus atos constitutivos na Junta Comercial.
Regras fundamentais de prova e responsabilidade:
- Prova da existência da sociedade (Art. 987): terceiros podem provar a existência da sociedade por qualquer meio em direito admitido (testemunhas, notas fiscais, e-mails); os sócios, contudo, em relações entre si ou com terceiros, somente por prova ESCRITA podem provar a existência da sociedade.
- Responsabilidade dos sócios (Art. 990): todos os sócios respondem solidária e ILIMITADAMENTE pelas obrigações sociais. O sócio que contratou pela sociedade perde o benefício de ordem patrimonial, respondendo imediatamente com seus bens particulares.

4. Sociedade em Conta de Participação - SCP (Arts. 991 a 996 do CC):
Sociedade não personificada sui generis constituída por duas categorias de sócios:
a) Sócio Ostensivo: único que pratica os atos constitutivos e comerciais em seu nome individual e sob sua exclusiva responsabilidade. Perante terceiros, apenas o sócio ostensivo se obriga (responsabilidade ilimitada e direta);
b) Sócio Participante (ou Oculto): contribui com capital e fiscaliza a gestão, participando dos lucros e perdas nos termos do contrato interno. Não se obriga perante terceiros, salvo se tomar parte nas relações com estes.
O eventual registro do contrato social da SCP na Junta Comercial NÃO lhe confere personalidade jurídica (art. 993, parágrafo único). A falência do sócio ostensivo acarreta a dissolução da sociedade e liquidação da conta (art. 994).""",
      "keyStatutes": [
        "Código Civil, arts. 981 a 985 (Classificação das Sociedades)",
        "Código Civil, arts. 986 a 990 (Sociedade em Comum e Responsabilidade)",
        "Código Civil, arts. 991 a 996 (Sociedade em Conta de Participação)"
      ],
      "summaryPoints": [
        "S/A é sempre empresária; Cooperativa é sempre simples (art. 982, parágrafo único).",
        "Na sociedade em comum, os sócios respondem solidária e ilimitadamente pelas obrigações.",
        "Sócios de sociedade de fato só podem provar a existência do ente mediante documento escrito.",
        "Na SCP, apenas o sócio ostensivo responde e atua perante terceiros."
      ]
    },
    {
      "title": "Módulo 6: Sociedade Limitada: Quotas, Administração e Dissolução Parcial (Págs. 26-31)",
      "content": """1. Estrutura da Sociedade Limitada (Arts. 1.052 a 1.087 do CC):
É o tipo societário mais utilizado no Brasil. Pode ser constituída por uma ou mais pessoas (Sociedade Limitada Unipessoal).
- Responsabilidade dos Sócios (Art. 1.052): a responsabilidade de cada sócio é restrita ao valor de suas quotas, mas TODOS respondem solidariamente pela integralização do capital social. Uma vez integralizado todo o capital social, os sócios não respondem pelas dívidas da sociedade, salvo fraude, desvio de finalidade ou confusão patrimonial (art. 50 do CC).
- Quotas Sociais: representam a fração do capital. É vedada a contribuição que consista em prestação de serviços na sociedade limitada (art. 1.055, § 2º - serviços só são permitidos na Sociedade Simples pura).

2. Cessão de Quotas (Art. 1.057 do CC):
Na omissão do contrato social, o sócio pode ceder sua quota, total ou parcialmente, a quem seja sócio, independentemente de audiência dos outros; ou a terceiro, estranho à sociedade, se não houver oposição de titulares de mais de um quarto (25%) do capital social.
A responsabilidade do sócio cedente perante a sociedade e terceiros pelas obrigações anteriores persiste solidariamente com o cessionário pelo prazo de 2 (dois) anos após a averbação da alteração contratual (art. 1.003, parágrafo único e art. 1.057).

3. Administração da Sociedade Limitada (Arts. 1.060 a 1.065 do CC):
A sociedade limitada é administrada por uma ou mais pessoas designadas no contrato social ou em ato separado.
- Administrador não sócio: a designação de administrador não sócio depende de aprovação de 2/3 dos sócios enquanto o capital não estiver integralizado, e de mais da metade do capital após a integralização (quóruns alterados pela Lei nº 14.451/2022).
- Quóruns de Deliberação (Art. 1.076 alterado pela Lei 14.451/22):
  - Modificação do contrato social, fusão, incorporação e dissolução da sociedade: maioria dos votos presentes (mais da metade do capital social presente na assembleia/reunião).

4. Dissolução Parcial da Sociedade e Apuração de Haveres (Arts. 1.028 a 1.031 do CC e Arts. 599 a 609 do CPC/15):
A dissolução parcial visa à preservação da empresa, desvinculando um dos sócios sem extinguir a pessoa jurídica:
- Hipóteses: morte do sócio, exercício do direito de retirada / recesso (por dissentir de alteração contratual nos termos do art. 1.077) e exclusão de sócio por justa causa (falta grave no cumprimento de suas obrigações - art. 1.085).
- Apuração de Haveres: balanço especial de determinação avaliando o patrimônio líquido da empresa a preço de saída/mercado (art. 606 do CPC/15), apurando o valor das quotas a ser pago em até 90 (noventa) dias após a liquidação, salvo estipulação em contrário no contrato social (art. 1.031, § 2º).""",
      "keyStatutes": [
        "Código Civil, arts. 1.052 a 1.087 (Sociedade Limitada)",
        "Lei Federal nº 14.451/2022 (Redução dos Quóruns de Deliberação na Ltda.)",
        "CPC/2015, arts. 599 a 609 (Procedimento Especial de Dissolução Parcial)"
      ],
      "summaryPoints": [
        "Integralizado o capital social, os sócios da limitada não respondem pelas dívidas sociais.",
        "Sócio cedente de quotas responde solidariamente pelas obrigações por 2 anos após o registro.",
        "É proibida a contribuição de capital mediante prestação de serviços na Limitada.",
        "Quóruns de deliberação para alteração de contrato foram reduzidos pela Lei 14.451/22 para maioria simples."
      ]
    },
    {
      "title": "Módulo 7: Sociedade Anônima (Lei 6.404/76): Capital, Ações e Governança (Págs. 32-37)",
      "content": """1. Características da Sociedade por Ações (Lei nº 6.404/1976):
Sociedade de capital com natureza sempre mercantil. O capital social divide-se em ações livremente negociáveis, e a responsabilidade dos acionistas é estritamente limitada ao preço de emissão das ações subscritas ou adquiridas (art. 1º).
- Companhia Aberta: possui valores mobiliários admitidos à negociação em bolsa ou mercado de balcão, fiscalizada pela Comissão de Valores Mobiliários (CVM).
- Companhia Fechada: não negocia suas ações no mercado público de capitais.

2. Ações e Valores Mobiliários:
- Ações Ordinárias (ON): conferem ao titular direito de voto nas assembleias gerais da companhia.
- Ações Preferenciais (PN): conferem vantagens financeiras ou patrimoniais (prioridade na distribuição de dividendos e no reembolso do capital), podendo suprimir ou restringir o direito de voto. Nas companhias abertas, o número de ações preferenciais sem direito de voto não pode ultrapassar 50% do total das ações emitidas.
- Partes Beneficiárias: títulos negociáveis sem valor nominal que atribuem aos titulares direito de participação nos lucros anuais da companhia (vedada sua emissão por companhias abertas).
- Debêntures: títulos de dívida emitidos pela sociedade anônima que conferem aos titulares direito de crédito contra a companhia, remunerados por juros e correção.
- Commercial Papers (Notas Comerciais) e Bônus de Subscrição.

3. Órgãos da Sociedade Anônima:
- Assembleia Geral (AGO e AGE): órgão deliberativo soberano composto por todos os acionistas.
  - Assembleia Geral Ordinária (AGO): realizada obrigatoriamente nos 4 (quatro) primeiros meses após o término do exercício social para tomar as contas dos administradores, examinar balanço e eleger fiscais.
- Conselho de Administração: órgão deliberativo colegiado, obrigatório nas companhias abertas, de capital autorizado e sociedades de economia mista. Eleito pela assembleia geral.
- Diretoria: órgão executivo de representação legal e operacional da companhia, composto por pessoas naturais residentes no país eleitas pelo Conselho de Administração.
- Conselho Fiscal: órgão de fiscalização contábil e de gestão que funciona de forma permanente ou a pedido de acionistas na AGO.

4. Deveres e Responsabilidades dos Administradores (Arts. 153 a 158 da Lei 6.404/76):
O administrador deve empregar, no exercício de suas funções, o cuidado e a diligência que todo homem ativo e probo costuma empregar na administração de seus próprios negócios (dever de diligência - art. 153).
Deveres capitais: dever de lealdade (art. 155), vedação ao conflito de interesses (art. 156) e dever de informar (art. 157 - divulgação de Fato Relevante perante a CVM). O uso indevido de informação privilegiada não divulgada ao mercado enseja crime de 'insider trading' (art. 27-D da Lei 6.385/76).""",
      "keyStatutes": [
        "Lei nº 6.404/1976 (Lei das Sociedades por Ações), arts. 1º a 180",
        "Lei nº 6.385/1976 (Mercado de Valores Mobiliários e CVM)",
        "Art. 27-D da Lei 6.385/76 (Crime de Insider Trading)"
      ],
      "summaryPoints": [
        "Responsabilidade do acionista é limitada ao preço de emissão das ações.",
        "Conselho de Administração é obrigatório nas companhias abertas e de capital autorizado.",
        "AGO deve ser realizada nos 4 primeiros meses seguintes ao encerramento do exercício social.",
        "Insider trading pune o uso e repasse de informação relevante ainda não pública para auferir vantagem."
      ]
    },
    {
      "title": "Módulo 8: Títulos de Crédito: Princípios Cartulares e Títulos em Espécie (Págs. 38-43)",
      "content": """1. Teoria Geral dos Títulos de Crédito (Arts. 887 a 926 do CC):
'O título de crédito, documento necessário ao exercício do direito literal e autônomo nele contido, somente produz efeito quando preenche os requisitos da lei' (Conceito clássico de Cesare Vivante acolhido no art. 887).
Princípios Cambiais Fundamentais:
a) Cartularidade: o direito material está materializado na cártula (cártula física ou duplicata escritural/eletrônica regulada pela Lei 13.775/2018). Para executar ou cobrar, exige-se a apresentação do título original;
b) Literalidade: só tem validade o que está expressamente escrito no título. Declarações verbais não produzem efeitos cambiais;
c) Autonomia das Obrigações Cambiais: cada obrigação que se insere no título (saque, endosso, aval) é independente das demais. Se uma obrigação for nula por vício de capacidade, as outras permanecem plenamente válidas (desdobra-se nos subprincípios da Abstração e da Inoponibilidade das Exceções Pessoais a terceiros de boa-fé).

2. Institutos Cambiais:
- Endosso: declaração cambial de transferência da titularidade do crédito e da garantia de pagamento.
  - Endosso em branco: não indica o nome do endossatário (o título passa a circular como ao portador);
  - Endosso em preto: indica o beneficiário da transmissão.
  - Endosso impróprio: endosso-mandato (apenas legitima a cobrança) e endosso-pauperativo/caução.
- Aval: garantia pessoal formal prestada por terceiro ou coobrigado no título.
  Diferença crucial entre Aval e Fiança (Tema constante na OAB):
  - O aval é obrigação autônoma, solidária e pura, não admitindo benefício de ordem; a fiança é obrigação acessória e subsidiária (admite benefício de ordem).
  - O avalista responde mesmo que a obrigação afiançada seja nula (salvo vício de forma).
  - O art. 1.647, III do CC exige outorga uxória para o aval, salvo no regime de separação absoluta; todavia, o STJ pacificou no Tema 472 que para os títulos de crédito inominados ou regidos por leis especiais (como nota promissória e cheque regidos pela Lei Uniforme de Genebra), a ausência de vênia conjugal não invalida o aval perante terceiros.

3. Títulos de Crédito em Espécie:
- Cheque (Lei nº 7.357/1985): ordem de pagamento à vista sacada contra instituição financeira.
  - Prazos de apresentação: 30 dias se da mesma praça (mesmo município); 60 dias se de praças diferentes.
  - Prazo prescricional da execução do cheque: prescreve em 6 (seis) meses contados da expiração do prazo de apresentação (art. 59).
  - Ação monitória fundada em cheque prescrito: prazo de 5 anos (Súmula 503 do STJ).
  - Cheque pós-datado: tem eficácia cambial plena à vista perante o banco sacado (art. 32), mas a apresentação antecipada que causa devolução sem fundos gera dano moral in re ipsa (Súmula 370 do STJ).
- Duplicata (Lei nº 5.474/1968): título causal emitido exclusivamente com base em compra e venda mercantil ou prestação de serviços. Duplicata sem causa é 'fria' e configura crime (art. 172 do Código Penal). Exige aceite, protesto e comprovante de entrega das mercadorias para execução sem aceite.
- Nota Promissória (Decreto nº 57.663/1966 - LUG): promessa de pagamento em que o emitente promete pagar diretamente ao beneficiário. Prescreve em 3 anos da data do vencimento.""",
      "keyStatutes": [
        "Código Civil, arts. 887 a 926 (Teoria Geral dos Títulos de Crédito)",
        "Lei nº 7.357/1985 (Lei do Cheque)",
        "Lei nº 5.474/1968 (Lei das Duplicatas)",
        "Súmula 370 do STJ (Dano moral por apresentação antecipada de cheque)"
      ],
      "summaryPoints": [
        "Aval é garantia autônoma e solidária sem benefício de ordem (diferente da fiança).",
        "Cheque prescreve para execução em 6 meses contados do fim do prazo de apresentação.",
        "Súmula 370 STJ: apresentação antecipada de cheque pós-datado gera dever de indenizar.",
        "Duplicata é título estritamente causal: exige emissão embasada em efetiva fatura mercantil."
      ]
    },
    {
      "title": "Módulo 9: Teoria da Insolvência e Recuperação Judicial e Extrajudicial (Págs. 44-49)",
      "content": """1. Princípios da Lei nº 11.101/2005 (Reformada pela Lei nº 14.112/2020):
A Lei de Recuperação de Empresas e Falência tem como princípio basilar a preservação da empresa, a manutenção da fonte produtora, o emprego dos trabalhadores e os interesses dos credores (art. 47).
- Sujeitos atingidos: aplica-se ao empresário individual e à sociedade empresária. NÃO se aplica a empresas públicas e sociedades de economia mista, instituições financeiras, cooperativas de crédito e operadoras de planos de saúde (art. 2º).

2. Requisitos para Pedido de Recuperação Judicial (Art. 48):
O devedor deve exercer regularmente suas atividades há mais de 2 (dois) anos e atender aos seguintes requisitos cumulativos:
I - não ser falido (ou estar reabilitado);
II - não ter, há menos de 5 (cinco) anos, obtido concessão de recuperação judicial;
III - não ter, há menos de 5 (cinco) anos, obtido concessão de recuperação judicial especial para microempresas e EPP;
IV - não ter sido condenado por crime falimentar.

3. Procedimento da Recuperação Judicial:
- Deferimento do Processamento pelo Juiz (Art. 52):
  - Nomeação do Administrador Judicial;
  - Suspensão de todas as ações e execuções contra o devedor pelo prazo de 180 (cento e oitenta) dias (Stay Period - Art. 6º, § 4º), prorrogável por igual período UMA ÚNICA VEZ em caso de ausência de culpa do devedor.
  - Apresentação do Plano de Recuperação Judicial no prazo improrrogável de 60 (sessenta) dias, sob pena de convolação em falência (art. 53).
- Créditos Submetidos e Não Submetidos:
  - Submetem-se à recuperação: todos os créditos existentes na data do pedido, ainda que não vencidos (art. 49).
  - NÃO se submetem à recuperação (Art. 49, §§ 3º e 4º): o credor fiduciário (alienação fiduciária em garantia de bens móveis ou imóveis), o arrendador mercantil (leasing), o adiantamento de contrato de câmbio (ACC) e as execuções fiscais da Fazenda Pública (art. 6º, § 7º-B).
- Assembleia Geral de Credores (AGC) e Quóruns de Aprovação (Art. 45): dividida em 4 classes: Classe I (Trabalhistas), Classe II (Garantia Real), Classe III (Quirografários e Privilegiados) e Classe IV (Microempresas e EPP).
- 'Cram Down' (Aprovação Judicial Forçada - Art. 58, § 1º): o juiz pode conceder a recuperação mesmo contra a rejeição de uma classe na AGC se atendidos os requisitos de aprovação substancial.
- Financiamento do Devedor em Recuperação (DIP Financing - Arts. 69-A a 69-F inseridos pela Lei 14.112/20): autoriza a captação de novos recursos no mercado com garantia e prioridade absoluta no recebimento como crédito extraconcursal.""",
      "keyStatutes": [
        "Lei nº 11.101/2005, arts. 47 a 74 (Recuperação Judicial)",
        "Lei nº 14.112/2020 (Modernização da Lei de Falências e DIP Financing)",
        "Lei nº 11.101/2005, art. 6º (Stay Period de 180 dias prorrogável)"
      ],
      "summaryPoints": [
        "Stay Period suspende execuções contra a empresa por 180 dias prorrogável uma única vez.",
        "Plano de recuperação deve ser juntado no prazo improrrogável de 60 dias sob pena de falência.",
        "Credor com garantia fiduciária (alienação fiduciária) não se submete à recuperação judicial.",
        "DIP Financing permite tomada de novos empréstimos com status prioritário de crédito extraconcursal."
      ]
    },
    {
      "title": "Módulo 10: Processo Falimentar, Efeitos e Ordem dos Créditos Concursais (Págs. 50-54)",
      "content": """1. Hipóteses de Decretação da Falência (Art. 94 da Lei 11.101/05):
Será decretada a falência do devedor que:
I - Impontualidade Injustificada: sem relevante razão de direito, não paga, no vencimento, obrigação líquida materializada em título ou títulos executivos protestados cuja soma ultrapasse o equivalente a 40 (quarenta) salários mínimos na data do pedido;
II - Execução Frustrada: executado por qualquer quantia líquida, não paga, não deposita e não nomeia à penhora bens suficientes dentro do prazo legal;
III - Prática de Atos de Falência: procede à liquidação precipitada, realiza negócio simulado, transfere estabelecimento sem consentimento dos credores (trespasse irregular), simula dívidas, ausenta-se do país deixando prepostos sem fundos ou abandona o estabelecimento.
Defesa do devedor: contestação no prazo de 10 (dez) dias, podendo elidir a falência efetuando o depósito elisivo do valor total da dívida com juros e honorários (art. 98, parágrafo único).

2. Efeitos da Sentença que Decreta a Falência (Arts. 99 a 114):
- Perda da administração e disposição dos bens da massa falida subjetiva e objetiva (indisponibilidade patrimonial);
- Suspensão do direito de retenção sobre bens da massa;
- Vencimento antecipado de todas as dívidas do falido com abatimento proporcional dos juros contratuais;
- Fixação do Termo Legal da Falência: período retroativo (não superior a 90 dias contados do primeiro protesto ou do pedido de falência) para verificação de atos prejudiciais aos credores.

3. Ineficácia e Revogação de Atos Praticados Antes da Falência:
- Atos Ineficazes de Pleno Direito (Art. 129): independem da prova de fraude ou má-fé (ex.: pagamento de dívidas não vencidas realizado dentro do termo legal; pagamento de dívidas vencidas por forma não prevista no contrato, como entrega de mercadorias no lugar de dinheiro; constituição de garantia real dentro do termo legal para dívida anterior).
- Ação Revocatória Falimentar (Art. 130): cabível para revogar atos praticados com manifesto intuito de fraudar credores (consilium fraudis e eventus damni), no prazo decadencial de 3 (três) anos da decretação da falência.

4. Classificação dos Créditos na Falência (Arts. 83 e 84 com as alterações da Lei 14.112/20):
A classificação dos créditos na falência é matéria campeã de cobrança em certames jurídicos:
1º Lugar - Créditos Extraconcursais (Art. 84): pagos com precedência absoluta sobre todos os demais:
  - Remunerações devidas ao administrador judicial e seus auxiliares;
  - Despesas indispensáveis à administração da falência e custas judiciais;
  - Recursos fornecidos pelo financiador na recuperação judicial (DIP Financing);
  - Obrigações resultantes de atos jurídicos válidos praticados durante a recuperação ou após a falência.
2º Lugar - Créditos Concursais (Art. 83 - Ordem Obrigatória de Pagamento):
  I - Créditos trabalhistas de natureza estritamente salarial, limitados a 150 (cento e cinquenta) salários-mínimos por credor, e os decorrentes de acidentes de trabalho (sem limite de valor);
  II - Créditos gravados com Garantia Real (hipoteca, penhor, alienação fiduciária convertida), limitados ao valor do bem dado em garantia;
  III - Créditos Tributários (impostos, taxas e contribuições), independentemente da sua data, vedada a inclusão de multas tributárias;
  IV - Créditos Quirografários (títulos ordinários, fornecedores e o saldo excedente aos 150 salários mínimos dos créditos trabalhistas);
  V - Multas contratuais e penas pecuniárias por infração das leis administrativas ou penais (inclusive as multas tributárias);
  VI - Créditos Subordinados (previstos em lei ou contrato, e os créditos dos sócios e administradores sem vínculo empregatício).""",
      "keyStatutes": [
        "Lei nº 11.101/2005, art. 94 (Hipóteses de Falência)",
        "Lei nº 11.101/2005, arts. 83 e 84 (Ordem Concursal da Lei 14.112/20)",
        "Lei nº 11.101/2005, arts. 129 e 130 (Ação Revocatória e Ineficácia de Atos)"
      ],
      "summaryPoints": [
        "Falência por impontualidade exige dívida líquida em títulos protestados superior a 40 salários mínimos.",
        "Prazo de resposta é de 10 dias, cabendo depósito elisivo para afastar a quebra.",
        "Créditos extraconcursais (art. 84) são pagos antes de todos os créditos concursais.",
        "Na ordem concursal: 1º Trabalhista (limite 150 SM), 2º Garantia Real, 3º Tributário, 4º Quirografário, 5º Multas, 6º Subordinados."
      ]
    }
  ]
}

# Read existing study materials
with open('src/data/studyMaterials.ts', 'r', encoding='utf-8') as f:
    text = f.read()

prefix = 'export const STUDY_MATERIALS: StudyMaterial[] = '
data_str = text.split(prefix)[1].strip()
if data_str.endswith(';'):
    data_str = data_str[:-1]

materials = json.loads(data_str)

# Deduplicate existing materials by id
seen_ids = set()
unique_materials = []
for m in materials:
    if m['id'] not in seen_ids:
        seen_ids.add(m['id'])
        unique_materials.append(m)

# Remove any previous version of civil or emp manuals if present
unique_materials = [m for m in unique_materials if m['id'] not in ('manual-ext-civil-50p', 'manual-ext-emp-50p')]

# Insert both new extensive manuals right after the existing extensive manuals
extensive_idx = 0
for idx, m in enumerate(unique_materials):
    if m.get('isExtensiveManual'):
        extensive_idx = idx + 1

unique_materials.insert(extensive_idx, civil_manual)
unique_materials.insert(extensive_idx + 1, empresarial_manual)

print(f"Total materials after addition: {len(unique_materials)}")

with open('src/data/studyMaterials.ts', 'w', encoding='utf-8') as f:
    f.write("import { StudyMaterial } from '../types';\n\nexport const STUDY_MATERIALS: StudyMaterial[] = ")
    f.write(json.dumps(unique_materials, ensure_ascii=False, indent=2))
    f.write(";\n")

print("Successfully written updated study materials to src/data/studyMaterials.ts!")
