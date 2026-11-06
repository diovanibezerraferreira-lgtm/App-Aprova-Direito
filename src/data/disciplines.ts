import { Discipline } from '../types';

export const OAB_DISCIPLINES: Discipline[] = [
  {
    id: 'etica',
    name: 'Ética Profissional',
    shortName: 'Ética',
    iconName: 'Scale',
    oabWeight: 8,
    category: 'fundamental',
    description: 'Estatuto da Advocacia (Lei nº 8.906/94), Código de Ética e Disciplina e Regulamento Geral. Matéria decisiva para a aprovação na 1ª fase.',
    keyTopics: [
      'Direitos e Prerrogativas do Advogado',
      'Incompatibilidades e Impedimentos',
      'Infrações e Sanções Disciplinares',
      'Honorários Advocatícios',
      'Publicidade e Propaganda na Advocacia'
    ],
    keyArticles: ['Lei 8.906/94, arts. 6º e 7º', 'CED, arts. 2º a 7º', 'Regulamento Geral OAB']
  },
  {
    id: 'constitucional',
    name: 'Direito Constitucional',
    shortName: 'Constitucional',
    iconName: 'Landmark',
    oabWeight: 6,
    category: 'fundamental',
    description: 'Normas fundamentais, direitos e garantias, organização do Estado, repartição de competências e controle de constitucionalidade.',
    keyTopics: [
      'Controle Concentrado e Difuso de Constitucionalidade',
      'Ações Constitucionais (MS, HC, HD, MI, ACP)',
      'Organização dos Poderes (Executivo, Legislativo, Judiciário)',
      'Direitos e Garantias Fundamentais (Art. 5º)',
      'Processo Legislativo e Emendas Constitucionais'
    ],
    keyArticles: ['CF/88, art. 5º', 'CF/88, arts. 102 e 103', 'Lei 9.868/99 e Lei 9.882/99']
  },
  {
    id: 'civil',
    name: 'Direito Civil',
    shortName: 'Civil',
    iconName: 'BookOpen',
    oabWeight: 6,
    category: 'material',
    description: 'Parte Geral, Obrigações, Contratos, Responsabilidade Civil, Direitos Reais, Família e Sucessões.',
    keyTopics: [
      'Negócio Jurídico e Defeitos da Vontade',
      'Teoria Geral dos Contratos e Inadimplemento',
      'Responsabilidade Civil Objetiva e Subjetiva',
      'Direito de Família e Regimes de Bens',
      'Sucessão Legítima e Testamentária'
    ],
    keyArticles: ['CC/02, arts. 166 a 184', 'CC/02, arts. 389 a 420', 'CC/02, arts. 927 a 954']
  },
  {
    id: 'processo-civil',
    name: 'Processo Civil',
    shortName: 'Proc. Civil',
    iconName: 'Scroll',
    oabWeight: 6,
    category: 'processual',
    description: 'Normas fundamentais, competência, tutela provisória, procedimento comum, cumprimento de sentença, execução e recursos.',
    keyTopics: [
      'Recursos no CPC (Apelação, Agravo de Instrumento, EDcl)',
      'Tutelas Provisórias de Urgência e Evidência',
      'Cumprimento de Sentença e Execução de Título Extrajudicial',
      'Fase Postulatória e Revelia',
      'Intervenção de Terceiros e Litisconsórcio'
    ],
    keyArticles: ['CPC/15, arts. 294 a 311', 'CPC/15, arts. 994 a 1044', 'CPC/15, art. 523']
  },
  {
    id: 'penal',
    name: 'Direito Penal',
    shortName: 'Penal',
    iconName: 'ShieldAlert',
    oabWeight: 6,
    category: 'material',
    description: 'Teoria do crime, imputabilidade, dosimetria da pena, crimes contra a pessoa, patrimônio e administração pública.',
    keyTopics: [
      'Tipicidade, Ilicitude e Culpabilidade',
      'Concurso de Pessoas e de Crimes',
      'Extinção da Punibilidade e Prescrição',
      'Crimes contra a Vida e contra o Patrimônio',
      'Crimes contra a Administração Pública'
    ],
    keyArticles: ['CP, arts. 13 a 25', 'CP, arts. 59 a 68', 'CP, arts. 107 a 119']
  },
  {
    id: 'processo-penal',
    name: 'Processo Penal',
    shortName: 'Proc. Penal',
    iconName: 'FileCheck',
    oabWeight: 6,
    category: 'processual',
    description: 'Inquérito policial, ação penal, competência, provas, prisão preventiva, medidas cautelares, rito do júri e recursos.',
    keyTopics: [
      'Inquérito Policial e Ação Penal Pública/Privada',
      'Prisão em Flagrante, Preventiva e Liberdade Provisória',
      'Rito do Tribunal do Júri e Procedimento Comum',
      'Recursos: Apelação, RESE, Carta Testemunhável e HC',
      'Provas Ilícitas e Cadeia de Custódia'
    ],
    keyArticles: ['CPP, arts. 311 a 315', 'CPP, arts. 406 a 497', 'CPP, arts. 581 e 593']
  },
  {
    id: 'trabalho',
    name: 'Direito do Trabalho',
    shortName: 'Trabalho',
    iconName: 'Briefcase',
    oabWeight: 5,
    category: 'material',
    description: 'Contrato individual de trabalho, jornada de trabalho, remuneração, alteração e rescisão, estabilidades e direito coletivo.',
    keyTopics: [
      'Jornada de Trabalho e Horas Extras',
      'Rescisão Contratual e Verbas Rescisórias',
      'Estabilidade Provisória (Gestante, Cipeiro, Acidentado)',
      'FGTS e Aviso Prévio Proporcional',
      'Direito Coletivo do Trabalho e Negociação Coletiva'
    ],
    keyArticles: ['CLT, arts. 58 a 75', 'CLT, arts. 477 a 500', 'Súmulas do TST (331, 338, 244)']
  },
  {
    id: 'processo-trabalho',
    name: 'Processo do Trabalho',
    shortName: 'Proc. Trabalho',
    iconName: 'Gavel',
    oabWeight: 5,
    category: 'processual',
    description: 'Competência da Justiça do Trabalho, petição inicial trabalhista, audiência una, defesas, recursos e execução.',
    keyTopics: [
      'Rito Ordinário, Sumaríssimo e Sumário',
      'Audiência Trabalhista e Efeitos da Revelia',
      'Recurso Ordinário, Agravo de Petição e Recurso de Revista',
      'Depósito Recursal e Custas Processuais',
      'Execução Trabalhista e Bacenjud'
    ],
    keyArticles: ['CLT, arts. 840 a 852', 'CLT, arts. 893 a 900', 'Súmula 218 e 393 do TST']
  },
  {
    id: 'administrativo',
    name: 'Direito Administrativo',
    shortName: 'Administrativo',
    iconName: 'Building',
    oabWeight: 5,
    category: 'material',
    description: 'Princípios constitucionais, regime jurídico administrativo, atos administrativos, licitações, contratos e improbidade.',
    keyTopics: [
      'Nova Lei de Licitações (Lei 14.133/21)',
      'Atos Administrativos: Elementos, Atributos e Extinção',
      'Responsabilidade Civil do Estado',
      'Improbidade Administrativa (Lei 8.429/92 alterada)',
      'Poderes da Administração e Desapropriação'
    ],
    keyArticles: ['Lei 14.133/2021', 'Lei 8.429/1992', 'CF/88, art. 37, § 6º']
  },
  {
    id: 'tributario',
    name: 'Direito Tributário',
    shortName: 'Tributário',
    iconName: 'Receipt',
    oabWeight: 5,
    category: 'material',
    description: 'Sistema Tributário Nacional, princípios constitucionais, espécies tributárias, obrigação tributária, crédito e ações.',
    keyTopics: [
      'Princípios e Imunidades Tributárias',
      'Suspensão, Extinção e Exclusão do Crédito Tributário',
      'Responsabilidade Tributária e Prescrição/Decadência',
      'Espécies Tributárias (Impostos, Taxas, Contribuições)',
      'Ações Tributárias (Anulatória, Declaratória, Repetição, Embargos)'
    ],
    keyArticles: ['CTN, arts. 151, 156 e 175', 'CF/88, arts. 150 e 153 a 156']
  },
  {
    id: 'empresarial',
    name: 'Direito Empresarial',
    shortName: 'Empresarial',
    iconName: 'Coins',
    oabWeight: 4,
    category: 'material',
    description: 'Teoria da empresa, sociedades limitadas e anônimas, títulos de crédito, falência e recuperação judicial.',
    keyTopics: [
      'Recuperação Judicial e Falência (Lei 11.101/05)',
      'Sociedades Limitadas e Sociedades Anônimas',
      'Títulos de Crédito (Cheque, Duplicata, Nota Promissória)',
      'Estabelecimento Empresarial e Trespasse',
      'Desconsideração da Personalidade Jurídica'
    ],
    keyArticles: ['Lei 11.101/05', 'CC/02, arts. 966 a 1.051', 'Lei 6.404/76']
  },
  {
    id: 'ambiental',
    name: 'Direito Ambiental',
    shortName: 'Ambiental',
    iconName: 'Trees',
    oabWeight: 2,
    category: 'especial',
    description: 'Princípios do direito ambiental, Política Nacional do Meio Ambiente, licenciamento, responsabilidade tripla e Código Florestal.',
    keyTopics: [
      'Princípios: Poluidor-Pagador, Prevenção e Precaução',
      'Licenciamento Ambiental e EIA/RIMA',
      'Responsabilidade Civil, Administrativa e Penal Ambiental',
      'Áreas de Preservação Permanente (APP) e Reserva Legal'
    ],
    keyArticles: ['CF/88, art. 225', 'Lei 6.938/81', 'Lei 9.605/98']
  },
  {
    id: 'internacional',
    name: 'Direito Internacional',
    shortName: 'Internacional',
    iconName: 'Globe',
    oabWeight: 2,
    category: 'especial',
    description: 'Tratados internacionais, nacionalidade, condição jurídica do estrangeiro, homologação de sentença estrangeira e extradição.',
    keyTopics: [
      'Tratados: Negociação, Ratificação e Vigência',
      'Nacionalidade Originária e Derivada',
      'Extradição, Deporte e Expulsão',
      'Lei de Introdução às Normas do Direito Brasileiro (LINDB)'
    ],
    keyArticles: ['CF/88, art. 12', 'LINDB, arts. 7º a 19', 'Lei de Migração (Lei 13.445/17)']
  },
  {
    id: 'direitos-humanos',
    name: 'Direitos Humanos',
    shortName: 'Dir. Humanos',
    iconName: 'HeartHandshake',
    oabWeight: 2,
    category: 'fundamental',
    description: 'Sistemas global e interamericano de proteção aos Direitos Humanos, Pacto de San José da Costa Rica e precedentes da Corte IDH.',
    keyTopics: [
      'Pacto de San José da Costa Rica (CADH)',
      'Controle de Convencionalidade no Brasil',
      'Sistema Interamericano: Comissão e Corte IDH',
      'Teoria Geral dos Direitos Humanos e Gerações/Dimensões'
    ],
    keyArticles: ['Convenção Americana sobre Direitos Humanos (Decreto 678/92)', 'CF/88, art. 5º, § 3º']
  },
  {
    id: 'consumidor',
    name: 'Direito do Consumidor',
    shortName: 'Consumidor',
    iconName: 'ShoppingBag',
    oabWeight: 2,
    category: 'especial',
    description: 'Código de Defesa do Consumidor (Lei nº 8.078/90), responsabilidade pelo fato e vício, práticas abusivas e proteção contratual.',
    keyTopics: [
      'Responsabilidade pelo Fato do Produto/Serviço (Acidente de Consumo)',
      'Responsabilidade por Vício do Produto/Serviço',
      'Inversão do Ônus da Prova (Art. 6º, VIII)',
      'Práticas e Cláusulas Abusivas',
      'Direito de Arrependimento nas Compras Fora do Estabelecimento'
    ],
    keyArticles: ['CDC, arts. 12, 14, 18', 'CDC, art. 49 e 51']
  },
  {
    id: 'crianca-adolescente',
    name: 'Direito da Criança e do Adolescente',
    shortName: 'ECA',
    iconName: 'Users',
    oabWeight: 2,
    category: 'especial',
    description: 'Estatuto da Criança e do Adolescente (Lei nº 8.069/90), medidas socioeducativas, guarda, tutela, adoção e Conselho Tutelar.',
    keyTopics: [
      'Ato Infracional e Medidas Socioeducativas (Internação, Semiliberdade)',
      'Princípio do Melhor Interesse da Criança',
      'Direito à Convivência Familiar e Adoção',
      'Atribuições e Funcionamento do Conselho Tutelar'
    ],
    keyArticles: ['Lei 8.069/90 (ECA), arts. 112 a 125', 'ECA, arts. 39 a 52']
  },
  {
    id: 'previdenciario',
    name: 'Direito Previdenciário',
    shortName: 'Previdenciário',
    iconName: 'ShieldCheck',
    oabWeight: 2,
    category: 'especial',
    description: 'Seguridade Social, Regime Geral de Previdência Social (RGPS), segurados obrigatórios, carência e benefícios previdenciários.',
    keyTopics: [
      'Aposentadorias após a Reforma da Previdência (EC 103/19)',
      'Benefícios por Incapacidade (Auxílio por Incapacidade Temporária)',
      'Pensão por Morte e Regras de Cálculo',
      'Segurados Obrigatórios e Facultativos do INSS'
    ],
    keyArticles: ['Lei 8.213/91', 'EC 103/2019', 'CF/88, arts. 194 e 201']
  },
  {
    id: 'financeiro',
    name: 'Direito Financeiro',
    shortName: 'Financeiro',
    iconName: 'DollarSign',
    oabWeight: 2,
    category: 'especial',
    description: 'Finanças públicas, leis orçamentárias (PPA, LDO, LOA), Lei de Responsabilidade Fiscal (LRF) e despesas públicas.',
    keyTopics: [
      'Ciclo Orçamentário e Peças: PPA, LDO e LOA',
      'Princípios Orçamentários (Unidade, Universalidade, Exclusividade)',
      'Limites da Lei de Responsabilidade Fiscal (LC 101/00)',
      'Precatórios e Emendas Parlamentares Impositivas'
    ],
    keyArticles: ['CF/88, arts. 165 a 169', 'LC 101/2000 (LRF)']
  },
  {
    id: 'eleitoral',
    name: 'Direito Eleitoral',
    shortName: 'Eleitoral',
    iconName: 'Vote',
    oabWeight: 2,
    category: 'especial',
    description: 'Direitos políticos, alistabilidade, elegibilidade, causas de inelegibilidade (Lei da Ficha Limpa) e propaganda eleitoral.',
    keyTopics: [
      'Condições de Elegibilidade e Inelegibilidades (LC 64/90 e LC 135/10)',
      'Ações Eleitorais: RCED, AIJE, AIME',
      'Propaganda Política e Eleitoral na Internet',
      'Financiamento de Campanha e Prestação de Contas'
    ],
    keyArticles: ['CF/88, art. 14', 'LC 64/90 (Lei das Inelegibilidades)', 'Lei 9.504/97']
  },
  {
    id: 'filosofia',
    name: 'Filosofia do Direito',
    shortName: 'Filosofia',
    iconName: 'Lightbulb',
    oabWeight: 2,
    category: 'fundamental',
    description: 'Teoria da justiça, jusnaturalismo vs positivismo, hermenêutica jurídica e pensadores clássicos (Kant, Hart, Kelsen, Dworkin).',
    keyTopics: [
      'Positivismo Jurídico de Hans Kelsen e H.L.A. Hart',
      'A Teoria dos Princípios e Regras de Ronald Dworkin',
      'Imperativo Categórico e Justiça em Immanuel Kant',
      'Pós-positivismo e Argumentação Jurídica (Robert Alexy)'
    ],
    keyArticles: ['Teoria Pura do Direito (Kelsen)', 'O Império do Direito (Dworkin)']
  }
];
