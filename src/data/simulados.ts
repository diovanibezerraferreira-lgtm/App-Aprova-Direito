import { SimuladoConfig, DisciplineId } from '../types';

export interface DisciplineSimuladoWeight {
  disciplineId: DisciplineId;
  count: number;
}

// Distribuição oficial de questões do Exame de Ordem Unificado (1ª Fase FGV - Total 80 Questões)
export const OFFICIAL_OAB_DISTRIBUTION: DisciplineSimuladoWeight[] = [
  { disciplineId: 'etica', count: 8 },
  { disciplineId: 'constitucional', count: 6 },
  { disciplineId: 'civil', count: 6 },
  { disciplineId: 'processo-civil', count: 6 },
  { disciplineId: 'penal', count: 6 },
  { disciplineId: 'processo-penal', count: 6 },
  { disciplineId: 'trabalho', count: 5 },
  { disciplineId: 'processo-trabalho', count: 5 },
  { disciplineId: 'administrativo', count: 5 },
  { disciplineId: 'tributario', count: 5 },
  { disciplineId: 'empresarial', count: 4 },
  { disciplineId: 'direitos-humanos', count: 2 },
  { disciplineId: 'internacional', count: 2 },
  { disciplineId: 'ambiental', count: 2 },
  { disciplineId: 'crianca-adolescente', count: 2 },
  { disciplineId: 'consumidor', count: 2 },
  { disciplineId: 'filosofia', count: 2 },
  { disciplineId: 'previdenciario', count: 2 },
  { disciplineId: 'financeiro', count: 2 },
  { disciplineId: 'eleitoral', count: 2 }
];

export interface ExtendedSimuladoConfig extends SimuladoConfig {
  category: 'oab-oficial' | 'concursos' | 'blocos' | 'rapidos' | 'disciplina';
  badge?: string;
}

export const SIMULADO_PRESETS: ExtendedSimuladoConfig[] = [
  // --- 1. EXAMES OFICIAIS OAB FGV ---
  {
    id: 'simulado-oab-41',
    title: 'Simulado Oficial 41º Exame de Ordem Unificado',
    description: 'Prova completa com 80 questões no padrão FGV com a distribuição oficial das 20 disciplinas e 5 horas de duração real.',
    disciplineId: 'todas',
    questionCount: 80,
    timeLimitMinutes: 300,
    level: 'Prova Oficial FGV',
    category: 'oab-oficial',
    badge: 'Mais Recente'
  },
  {
    id: 'simulado-oab-40',
    title: 'Simulado Oficial 40º Exame de Ordem Unificado',
    description: '80 questões cobrindo todo o edital da OAB com foco na matriz de relevância de Ética, Constitucional e Civil.',
    disciplineId: 'todas',
    questionCount: 80,
    timeLimitMinutes: 300,
    level: 'Prova Oficial FGV',
    category: 'oab-oficial',
    badge: 'Oficial'
  },
  {
    id: 'simulado-oab-39',
    title: 'Simulado Oficial 39º Exame de Ordem Unificado',
    description: 'Treino exaustivo de 5 horas com cronômetro regressivo para adaptação à pressão temporal do dia da prova.',
    disciplineId: 'todas',
    questionCount: 80,
    timeLimitMinutes: 300,
    level: 'Prova Oficial FGV',
    category: 'oab-oficial',
    badge: 'Oficial'
  },
  {
    id: 'simulado-oab-38',
    title: 'Simulado Oficial 38º Exame de Ordem Unificado',
    description: 'Gabarito completo e distribuição rigorosa de 80 questões multidisciplinares com fundamentação jurídica detalhada.',
    disciplineId: 'todas',
    questionCount: 80,
    timeLimitMinutes: 300,
    level: 'Prova Oficial FGV',
    category: 'oab-oficial'
  },

  // --- 2. CONCURSOS JURÍDICOS ---
  {
    id: 'simulado-concurso-magistratura',
    title: 'Simulado Carreira: Magistratura Estadual',
    description: '50 questões aprofundadas com ênfase em Direito Civil, Processo Civil, Constitucional, Penal, Consumidor e ECA.',
    disciplineId: 'todas',
    questionCount: 50,
    timeLimitMinutes: 150,
    level: 'Nível Superior / Juiz',
    category: 'concursos',
    badge: 'Magistratura'
  },
  {
    id: 'simulado-concurso-mp',
    title: 'Simulado Carreira: Ministério Público Estadual',
    description: '50 questões focadas em Direito Penal, Processo Penal, Interesses Difusos e Coletivos, Ambiental, Constitucional e Administrativo.',
    disciplineId: 'todas',
    questionCount: 50,
    timeLimitMinutes: 150,
    level: 'Nível Superior / Promotor',
    category: 'concursos',
    badge: 'Ministério Público'
  },
  {
    id: 'simulado-concurso-defensoria',
    title: 'Simulado Carreira: Defensoria Pública (DPE/DPU)',
    description: '40 questões com forte incidência em Direitos Humanos, Execução Penal, Processo Penal, Infância/Juventude e Consumidor.',
    disciplineId: 'todas',
    questionCount: 40,
    timeLimitMinutes: 120,
    level: 'Nível Superior / Defensor',
    category: 'concursos',
    badge: 'Defensoria'
  },
  {
    id: 'simulado-concurso-delegado',
    title: 'Simulado Carreira: Delegado de Polícia Civil',
    description: '40 questões voltadas para Direito Penal, Processo Penal, Prisões Cautelares, Legislação Penal Especial e Constitucional.',
    disciplineId: 'todas',
    questionCount: 40,
    timeLimitMinutes: 120,
    level: 'Nível Superior / Delegado',
    category: 'concursos',
    badge: 'Delegado de Polícia'
  },
  {
    id: 'simulado-concurso-tribunais',
    title: 'Simulado Carreira: Analista Judiciário dos Tribunais (TJ/TRF/TRT)',
    description: '30 questões direcionadas para Processo Civil, Processo Penal, Direito do Trabalho, Constitucional e Administrativo.',
    disciplineId: 'todas',
    questionCount: 30,
    timeLimitMinutes: 90,
    level: 'Analista Judiciário',
    category: 'concursos',
    badge: 'Tribunais'
  },

  // --- 3. BLOCOS TEMÁTICOS & DESAFIOS ESPECIAIS ---
  {
    id: 'simulado-pegadinhas-fgv',
    title: 'Desafio Pegadinhas Clássicas da FGV (25 Questões)',
    description: 'Questões com alto percentual de distratores bem elaborados para treinar a atenção contra as armadilhas recorrentes da banca.',
    disciplineId: 'todas',
    questionCount: 25,
    timeLimitMinutes: 50,
    level: 'Nível Difícil',
    category: 'blocos',
    badge: 'Alto Índice de Erro'
  },
  {
    id: 'simulado-diagnostico-30',
    title: 'Simulado Diagnóstico de Entrada (30 Questões)',
    description: 'Avaliação inicial para mapear seus pontos fortes e matérias prioritárias de estudo em todas as áreas.',
    disciplineId: 'todas',
    questionCount: 30,
    timeLimitMinutes: 60,
    level: 'Diagnóstico',
    category: 'blocos',
    badge: 'Nivelamento'
  },
  {
    id: 'simulado-bloco-penal',
    title: 'Desafio Ciências Criminais (12 Questões)',
    description: 'Questões combinadas de Direito Penal e Processo Penal. Tipicidade, dosimetria, inquérito, prisões cautelares e recursos.',
    disciplineId: 'penal',
    questionCount: 12,
    timeLimitMinutes: 30,
    level: 'Bloco Temático',
    category: 'blocos'
  },
  {
    id: 'simulado-bloco-trabalhista',
    title: 'Desafio Trabalhista Completo (10 Questões)',
    description: 'Questões práticas de Direito Material e Processual do Trabalho: jornada, rescisão contratual, ritos e recursos na Justiça do Trabalho.',
    disciplineId: 'trabalho',
    questionCount: 10,
    timeLimitMinutes: 25,
    level: 'Bloco Temático',
    category: 'blocos'
  },
  {
    id: 'simulado-bloco-civel',
    title: 'Desafio Cível & Processual (12 Questões)',
    description: 'Questões essenciais de Direito Civil e Processo Civil: negócio jurídico, contratos, responsabilidade civil, recursos e tutelas provisórias.',
    disciplineId: 'civil',
    questionCount: 12,
    timeLimitMinutes: 30,
    level: 'Bloco Temático',
    category: 'blocos'
  },
  {
    id: 'simulado-bloco-publico',
    title: 'Desafio Direito Público (15 Questões)',
    description: 'Controle de constitucionalidade, nova lei de licitações 14.133/21, sistema tributário nacional e orçamento público.',
    disciplineId: 'constitucional',
    questionCount: 15,
    timeLimitMinutes: 40,
    level: 'Bloco Temático',
    category: 'blocos'
  },
  {
    id: 'simulado-bloco-transversais',
    title: 'Desafio Disciplinas Transversais (16 Questões)',
    description: 'Gabarite as matérias complementares da 1ª fase: Direitos Humanos, Ambiental, Consumidor, ECA, Filosofia, Eleitoral e Previdenciário.',
    disciplineId: 'todas',
    questionCount: 16,
    timeLimitMinutes: 40,
    level: 'Estratégico',
    category: 'blocos'
  },

  // --- 4. SPRINTS & TREINOS RÁPIDOS ---
  {
    id: 'simulado-meia-prova-40',
    title: 'Simulado Meia-Prova OAB (40 Questões)',
    description: 'Simulação intermediária com 40 questões e 2h30min de duração. Excelente para testar ritmo e fixação no meio da semana.',
    disciplineId: 'todas',
    questionCount: 40,
    timeLimitMinutes: 150,
    level: 'Avançado',
    category: 'rapidos'
  },
  {
    id: 'simulado-sprint-20',
    title: 'Simulado Sprint OAB (20 Questões)',
    description: 'Sessão diária focada de 45 minutos cobrindo disciplinas basilares para manter a consistência de resolução.',
    disciplineId: 'todas',
    questionCount: 20,
    timeLimitMinutes: 45,
    level: 'Foco Diário',
    category: 'rapidos'
  },
  {
    id: 'simulado-express-10',
    title: 'Simulado Express (10 Questões)',
    description: 'Treino rápido de 20 minutos com questões interdisciplinares para momentos de estudo focado e intervalos.',
    disciplineId: 'todas',
    questionCount: 10,
    timeLimitMinutes: 20,
    level: 'Rápido',
    category: 'rapidos'
  },

  // --- 5. DESAFIOS POR DISCIPLINA ESPECÍFICA (20 MATÉRIAS) ---
  {
    id: 'simulado-disc-etica',
    title: 'Desafio OAB: Ética Profissional (20 Questões)',
    description: 'Treino intensivo sobre o Estatuto da OAB (Lei 8.906/94), Prerrogativas, Honorários e Código de Ética.',
    disciplineId: 'etica',
    questionCount: 20,
    timeLimitMinutes: 40,
    level: 'Essencial OAB',
    category: 'disciplina'
  },
  {
    id: 'simulado-disc-constitucional',
    title: 'Desafio OAB: Direito Constitucional (20 Questões)',
    description: 'Controle de constitucionalidade, ações constitucionais, direitos fundamentais e repartição de competências.',
    disciplineId: 'constitucional',
    questionCount: 20,
    timeLimitMinutes: 45,
    level: 'Fundamental',
    category: 'disciplina'
  },
  {
    id: 'simulado-disc-civil',
    title: 'Desafio OAB: Direito Civil (20 Questões)',
    description: 'Parte geral, obrigações, contratos, responsabilidade civil, família e sucessões.',
    disciplineId: 'civil',
    questionCount: 20,
    timeLimitMinutes: 45,
    level: 'Material',
    category: 'disciplina'
  },
  {
    id: 'simulado-disc-processo-civil',
    title: 'Desafio OAB: Processo Civil (20 Questões)',
    description: 'Recursos no CPC/15, tutelas de urgência, cumprimento de sentença e precedentes obrigatórios.',
    disciplineId: 'processo-civil',
    questionCount: 20,
    timeLimitMinutes: 45,
    level: 'Processual',
    category: 'disciplina'
  },
  {
    id: 'simulado-disc-penal',
    title: 'Desafio OAB: Direito Penal (20 Questões)',
    description: 'Teoria do crime, tipicidade, excludentes, concurso de pessoas e crimes contra a pessoa e patrimônio.',
    disciplineId: 'penal',
    questionCount: 20,
    timeLimitMinutes: 45,
    level: 'Material',
    category: 'disciplina'
  },
  {
    id: 'simulado-disc-processo-penal',
    title: 'Desafio OAB: Processo Penal (20 Questões)',
    description: 'Inquérito policial, ação penal pública, prisões cautelares, Tribunal do Júri e recursos criminais.',
    disciplineId: 'processo-penal',
    questionCount: 20,
    timeLimitMinutes: 45,
    level: 'Processual',
    category: 'disciplina'
  },
  {
    id: 'simulado-disc-lep',
    title: 'Desafio OAB & Concursos: Lei de Execução Penal (LEP) (20 Questões)',
    description: 'Lei nº 7.210/1984, progressão pós-Pacote Anticrime, saídas temporárias (Lei 14.843/2024), remição e RDD.',
    disciplineId: 'lep',
    questionCount: 20,
    timeLimitMinutes: 45,
    level: 'Execução Penal',
    category: 'disciplina'
  },
  {
    id: 'simulado-disc-trabalho',
    title: 'Desafio OAB: Direito do Trabalho (20 Questões)',
    description: 'CLT pós-reforma, jornada de trabalho, verbas rescisórias, equiparação e estabilidades.',
    disciplineId: 'trabalho',
    questionCount: 20,
    timeLimitMinutes: 45,
    level: 'Material',
    category: 'disciplina'
  },
  {
    id: 'simulado-disc-processo-trabalho',
    title: 'Desafio OAB: Processo do Trabalho (20 Questões)',
    description: 'Ritos ordinário e sumaríssimo, audiência trabalhista, recurso ordinário e execução no TST.',
    disciplineId: 'processo-trabalho',
    questionCount: 20,
    timeLimitMinutes: 45,
    level: 'Processual',
    category: 'disciplina'
  },
  {
    id: 'simulado-disc-administrativo',
    title: 'Desafio OAB: Direito Administrativo (20 Questões)',
    description: 'Nova Lei 14.133/21, atos administrativos, responsabilidade do Estado e nova Lei de Improbidade.',
    disciplineId: 'administrativo',
    questionCount: 20,
    timeLimitMinutes: 45,
    level: 'Material',
    category: 'disciplina'
  },
  {
    id: 'simulado-disc-tributario',
    title: 'Desafio OAB: Direito Tributário (20 Questões)',
    description: 'Imunidades tributárias, espécies de tributos, crédito tributário, decadência e prescrição no CTN.',
    disciplineId: 'tributario',
    questionCount: 20,
    timeLimitMinutes: 45,
    level: 'Material',
    category: 'disciplina'
  },
  {
    id: 'simulado-disc-empresarial',
    title: 'Desafio OAB: Direito Empresarial (20 Questões)',
    description: 'Sociedades limitadas, títulos de crédito, recuperação judicial e processo de falência.',
    disciplineId: 'empresarial',
    questionCount: 20,
    timeLimitMinutes: 45,
    level: 'Material',
    category: 'disciplina'
  },
  {
    id: 'simulado-disc-ambiental',
    title: 'Desafio OAB: Direito Ambiental (15 Questões)',
    description: 'Princípios da precaução, licenciamento, responsabilidade ecológica tripla e Código Florestal.',
    disciplineId: 'ambiental',
    questionCount: 15,
    timeLimitMinutes: 30,
    level: 'Especializada',
    category: 'disciplina'
  },
  {
    id: 'simulado-disc-internacional',
    title: 'Desafio OAB: Direito Internacional (15 Questões)',
    description: 'Tratados internacionais, extradição, homologação de sentença estrangeira e Lei de Migração.',
    disciplineId: 'internacional',
    questionCount: 15,
    timeLimitMinutes: 30,
    level: 'Especializada',
    category: 'disciplina'
  },
  {
    id: 'simulado-disc-direitos-humanos',
    title: 'Desafio OAB: Direitos Humanos (15 Questões)',
    description: 'Pacto de San José da Costa Rica, controle de convencionalidade e Sistema Interamericano.',
    disciplineId: 'direitos-humanos',
    questionCount: 15,
    timeLimitMinutes: 30,
    level: 'Fundamental',
    category: 'disciplina'
  },
  {
    id: 'simulado-disc-consumidor',
    title: 'Desafio OAB: Direito do Consumidor (15 Questões)',
    description: 'CDC, responsabilidade pelo fato e vício, direito de arrependimento e práticas abusivas.',
    disciplineId: 'consumidor',
    questionCount: 15,
    timeLimitMinutes: 30,
    level: 'Especializada',
    category: 'disciplina'
  },
  {
    id: 'simulado-disc-crianca-adolescente',
    title: 'Desafio OAB: ECA (15 Questões)',
    description: 'Ato infracional, medidas socioeducativas, internação, acolhimento e adoção no ECA.',
    disciplineId: 'crianca-adolescente',
    questionCount: 15,
    timeLimitMinutes: 30,
    level: 'Especializada',
    category: 'disciplina'
  },
  {
    id: 'simulado-disc-previdenciario',
    title: 'Desafio OAB: Direito Previdenciário (15 Questões)',
    description: 'Segurados do RGPS, benefícios, pensão por morte e regras da Reforma da Previdência (EC 103/19).',
    disciplineId: 'previdenciario',
    questionCount: 15,
    timeLimitMinutes: 30,
    level: 'Especializada',
    category: 'disciplina'
  },
  {
    id: 'simulado-disc-financeiro',
    title: 'Desafio OAB: Direito Financeiro (15 Questões)',
    description: 'PPA, LDO, LOA, Lei de Responsabilidade Fiscal e regras constitucionais de precatórios.',
    disciplineId: 'financeiro',
    questionCount: 15,
    timeLimitMinutes: 30,
    level: 'Especializada',
    category: 'disciplina'
  },
  {
    id: 'simulado-disc-eleitoral',
    title: 'Desafio OAB: Direito Eleitoral (15 Questões)',
    description: 'Condições de elegibilidade, causas de inelegibilidade, Lei da Ficha Limpa e ações eleitorais.',
    disciplineId: 'eleitoral',
    questionCount: 15,
    timeLimitMinutes: 30,
    level: 'Especializada',
    category: 'disciplina'
  },
  {
    id: 'simulado-disc-filosofia',
    title: 'Desafio OAB: Filosofia do Direito (15 Questões)',
    description: 'Jusnaturalismo, positivismo kelseniano, Dworkin, Robert Alexy e hermenêutica filosófica.',
    disciplineId: 'filosofia',
    questionCount: 15,
    timeLimitMinutes: 30,
    level: 'Fundamental',
    category: 'disciplina'
  }
];
