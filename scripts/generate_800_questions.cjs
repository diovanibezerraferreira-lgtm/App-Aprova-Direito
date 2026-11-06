const fs = require('fs');
const path = require('path');

// 20 OAB Disciplines
const disciplines = [
  'etica',
  'constitucional',
  'civil',
  'processo-civil',
  'penal',
  'processo-penal',
  'trabalho',
  'processo-trabalho',
  'administrativo',
  'tributario',
  'empresarial',
  'ambiental',
  'internacional',
  'direitos-humanos',
  'consumidor',
  'crianca-adolescente',
  'previdenciario',
  'financeiro',
  'eleitoral',
  'filosofia'
];

// Rich legal topics and case scenarios for each discipline
const disciplineTemplates = {
  etica: [
    { subject: 'Direitos e Prerrogativas do Advogado', rule: 'art. 7º da Lei 8.906/94' },
    { subject: 'Incompatibilidades e Impedimentos', rule: 'arts. 28 e 30 da Lei 8.906/94' },
    { subject: 'Honorários Sucumbenciais e Contratuais', rule: 'arts. 22 a 26 da Lei 8.906/94 e art. 85 do CPC' },
    { subject: 'Sigilo Profissional e Confidencialidade', rule: 'art. 7º, XIX da Lei 8.906/94 e arts. 35 a 38 do CED' },
    { subject: 'Inviolabilidade do Escritório de Advocacia', rule: 'art. 7º, II e § 6º da Lei 8.906/94' },
    { subject: 'Publicidade e Propaganda na Advocacia', rule: 'Provimento 205/2021 do CFOAB e art. 39 do CED' },
    { subject: 'Infrações e Sanções Disciplinares', rule: 'arts. 34 a 40 da Lei 8.906/94' },
    { subject: 'Sociedade Unipessoal de Advocacia', rule: 'art. 15 da Lei 8.906/94 e Lei 13.247/16' },
    { subject: 'Captação Indevida de Clientela e Angariação', rule: 'art. 34, IV da Lei 8.906/94' },
    { subject: 'Desagravo Público perante Ofensas a Prerrogativas', rule: 'art. 7º, § 5º da Lei 8.906/94' }
  ],
  constitucional: [
    { subject: 'Controle Concentrado de Constitucionalidade (ADI, ADC, ADPF)', rule: 'arts. 102 e 103 da CF/88 e Leis 9.868/99 e 9.882/99' },
    { subject: 'Controle Difuso e Cláusula de Reserva de Plenário', rule: 'art. 97 da CF/88 e Súmula Vinculante 10' },
    { subject: 'Direitos e Garantias Fundamentais (Art. 5º)', rule: 'art. 5º da CF/88' },
    { subject: 'Ações Constitucionais: Mandado de Segurança e HC', rule: 'art. 5º, LXIX da CF/88 e Lei 12.016/2009' },
    { subject: 'Repartição de Competências Legislativas da União e Estados', rule: 'arts. 22 e 24 da CF/88' },
    { subject: 'Processo Legislativo e Emendas Constitucionais', rule: 'art. 60 da CF/88' },
    { subject: 'Intervenção Federal e Estadual', rule: 'arts. 34 a 36 da CF/88' },
    { subject: 'Organização dos Poderes e Prerrogativas Parlamentares', rule: 'art. 53 da CF/88' },
    { subject: 'Eficácia das Normas Constitucionais (Plena, Contida e Limitada)', rule: 'Doutrina de José Afonso da Silva' },
    { subject: 'Defesa do Estado e Estado de Sítio/Defesa', rule: 'arts. 136 a 141 da CF/88' }
  ],
  civil: [
    { subject: 'Negócio Jurídico e Defeitos do Consentimento', rule: 'arts. 138 a 178 do Código Civil' },
    { subject: 'Prescrição e Decadência no Código Civil', rule: 'arts. 189 a 211 do Código Civil' },
    { subject: 'Responsabilidade Civil Objetiva e Subjetiva', rule: 'arts. 186, 187 e 927 do Código Civil' },
    { subject: 'Teoria Geral das Obrigações e Inadimplemento', rule: 'arts. 389 a 420 do Código Civil' },
    { subject: 'Contratos em Espécie: Compra e Venda e Locação', rule: 'arts. 481 a 532 do Código Civil' },
    { subject: 'Direitos Reais: Usucapião e Posse', rule: 'arts. 1.196 e 1.238 a 1.244 do Código Civil' },
    { subject: 'Direito de Família: Casamento, União Estável e Alimentos', rule: 'arts. 1.694 a 1.710 do Código Civil' },
    { subject: 'Sucessão Legítima e Herdeiros Necessários', rule: 'arts. 1.784 a 1.856 do Código Civil' },
    { subject: 'Condomínio Edilício e Despesas Condominiais', rule: 'arts. 1.331 a 1.358 do Código Civil' },
    { subject: 'Direitos da Personalidade e Dano Moral', rule: 'arts. 11 a 21 do Código Civil' }
  ],
  'processo-civil': [
    { subject: 'Teoria Geral dos Recursos e Prazos no CPC/15', rule: 'arts. 219 e 1.003 do CPC/15' },
    { subject: 'Agravo de Instrumento e Taxatividade Mitigada', rule: 'art. 1.015 do CPC/15 e Tema 988 do STJ' },
    { subject: 'Tutelas Provisórias de Urgência e Evidência', rule: 'arts. 294 a 311 do CPC/15' },
    { subject: 'Cumprimento de Sentença e Execução de Título Extrajudicial', rule: 'arts. 523 a 527 e 771 do CPC/15' },
    { subject: 'Petição Inicial, Emenda e Indeferimento', rule: 'arts. 319 a 331 do CPC/15' },
    { subject: 'Revelia e Efeitos Materiais e Processuais', rule: 'arts. 344 a 346 do CPC/15' },
    { subject: 'Intervenção de Terceiros e Desconsideração da Personalidade Jurídica', rule: 'arts. 119 a 138 do CPC/15' },
    { subject: 'Competência Absoluta e Relativa', rule: 'arts. 42 a 66 do CPC/15' },
    { subject: 'Apelação e Efeito Devolutivo Amplo', rule: 'arts. 1.009 a 1.014 do CPC/15' },
    { subject: 'Ação Rescisória e Hipóteses de Cabimento', rule: 'arts. 966 a 975 do CPC/15' }
  ],
  penal: [
    { subject: 'Fato Típico, Ilicitude e Culpabilidade', rule: 'arts. 13 a 25 do Código Penal' },
    { subject: 'Excludentes de Ilicitude e Excesso Punível', rule: 'art. 23 do Código Penal' },
    { subject: 'Concurso de Pessoas e Teoria Monista', rule: 'arts. 29 a 31 do Código Penal' },
    { subject: 'Critério Trifásico de Dosimetria da Pena', rule: 'art. 68 do Código Penal e Súmula 231 do STJ' },
    { subject: 'Prescrição Penal da Pretensão Punitiva e Executória', rule: 'arts. 109 a 119 do Código Penal' },
    { subject: 'Crimes Contra a Vida: Homicídio e Feminicídio', rule: 'art. 121, § 2º do Código Penal' },
    { subject: 'Crimes Contra o Patrimônio: Furto, Roubo e Estelionato', rule: 'arts. 155, 157 e 171 do Código Penal' },
    { subject: 'Crimes Contra a Administração Pública: Corrupção e Concussão', rule: 'arts. 312 a 327 do Código Penal' },
    { subject: 'Livramento Condicional e Requisitos Legais', rule: 'art. 83 do Código Penal' },
    { subject: 'Erro de Tipo e Erro de Proibição', rule: 'arts. 20 e 21 do Código Penal' }
  ],
  'processo-penal': [
    { subject: 'Inquérito Policial e Notitia Criminis', rule: 'arts. 4º a 23 do Código de Processo Penal' },
    { subject: 'Ação Penal Pública e Privada Subsidiária', rule: 'arts. 24 a 62 do Código de Processo Penal' },
    { subject: 'Prisão Preventiva e Medidas Cautelares Alternativas', rule: 'arts. 312 e 319 do Código de Processo Penal' },
    { subject: 'Rito do Tribunal do Júri e Pronúncia', rule: 'arts. 406 a 497 do Código de Processo Penal' },
    { subject: 'Recurso em Sentido Estrito (RESE)', rule: 'art. 581 do Código de Processo Penal' },
    { subject: 'Apelação Criminal e Prazos Recursais', rule: 'art. 593 do Código de Processo Penal' },
    { subject: 'Provas Ilícitas e Frutos da Árvore Envenenada', rule: 'art. 157 do Código de Processo Penal' },
    { subject: 'Acordo de Não Persecução Penal (ANPP)', rule: 'art. 28-A do Código de Processo Penal' },
    { subject: 'Competência Penal e Foro por Prerrogativa de Função', rule: 'arts. 69 a 91 do Código de Processo Penal' },
    { subject: 'Habeas Corpus e Trancamento de Ação Penal', rule: 'arts. 647 a 667 do Código de Processo Penal' }
  ],
  trabalho: [
    { subject: 'Jornada de Trabalho e Horas Suplementares', rule: 'art. 7º, XIII da CF/88 e arts. 58 a 65 da CLT' },
    { subject: 'Intervalo Intrajornada e Supressão Parcial', rule: 'art. 71, § 4º da CLT' },
    { subject: 'Rescisão Contratual e Verbas Rescisórias', rule: 'arts. 477 a 484 da CLT' },
    { subject: 'Prescrição Bienal e Quinquenal Trabalhista', rule: 'art. 7º, XXIX da CF/88 e art. 11 da CLT' },
    { subject: 'Equiparação Salarial e Requisitos Pós-Reforma', rule: 'art. 461 da CLT' },
    { subject: 'Estabilidades Provisórias: Gestante, Cipeiro e Acidentado', rule: 'art. 10, II do ADCT e art. 118 da Lei 8.213/91' },
    { subject: 'Teletrabalho e Controle de Jornada', rule: 'arts. 75-A a 75-F da CLT' },
    { subject: 'Terceirização de Serviços e Responsabilidade Subsidiária', rule: 'Súmula 331 do TST e Lei 13.429/17' },
    { subject: 'Demissão Consensual por Acordo Mútuo', rule: 'art. 484-A da CLT' },
    { subject: 'Dano Extrapatrimonial na Relação de Emprego', rule: 'arts. 223-A a 223-G da CLT' }
  ],
  'processo-trabalho': [
    { subject: 'Rito Sumaríssimo e Limites de Valor da Causa', rule: 'arts. 852-A a 852-I da CLT' },
    { subject: 'Audiência Una e Efeitos da Revelia Trabalhista', rule: 'art. 844 da CLT' },
    { subject: 'Recurso Ordinário e Prazo de 8 Dias Úteis', rule: 'art. 895 da CLT' },
    { subject: 'Recurso de Revista e Demonstração de Transcendência', rule: 'art. 896 da CLT' },
    { subject: 'Agravo de Petição na Fase de Execução', rule: 'art. 897, "a" da CLT' },
    { subject: 'Depósito Recursal e Custas na Justiça do Trabalho', rule: 'art. 899 da CLT' },
    { subject: 'Competência Material da Justiça do Trabalho', rule: 'art. 114 da CF/88' },
    { subject: 'Honorários Advocatícios Sucumbenciais na Justiça do Trabalho', rule: 'art. 791-A da CLT' },
    { subject: 'Execução Trabalhista e Desconsideração da Personalidade', rule: 'art. 855-A da CLT' },
    { subject: 'Exceção de Incompetência Territorial Trabalhista', rule: 'art. 800 da CLT' }
  ],
  administrativo: [
    { subject: 'Atos Administrativos: Elementos, Atributos e Convalidação', rule: 'Lei 9.784/99 e Súmula 473 do STF' },
    { subject: 'Nova Lei de Licitações (Lei 14.133/21): Modalidades', rule: 'arts. 28 e 32 da Lei 14.133/21' },
    { subject: 'Contratação Direta: Inexigibilidade e Dispensa', rule: 'arts. 74 e 75 da Lei 14.133/21' },
    { subject: 'Improbidade Administrativa e Exigência de Dolo Específico', rule: 'Lei 8.429/92 alterada pela Lei 14.230/21' },
    { subject: 'Responsabilidade Civil Objetiva do Estado (Teoria do Risco Administrativo)', rule: 'art. 37, § 6º da CF/88' },
    { subject: 'Serviços Públicos: Concessão, Permissão e Autorização', rule: 'Lei 8.987/95' },
    { subject: 'Desapropriação e Intervenção do Estado na Propriedade', rule: 'Decreto-Lei 3.365/41' },
    { subject: 'Poder de Polícia Administrativa e Limites', rule: 'art. 78 do CTN' },
    { subject: 'Regime Jurídico dos Servidores Públicos', rule: 'Lei 8.112/90 e art. 39 da CF/88' },
    { subject: 'Processo Administrativo Disciplinar (PAD) e Ampla Defesa', rule: 'arts. 143 a 182 da Lei 8.112/90' }
  ],
  tributario: [
    { subject: 'Princípios da Legalidade e Anterioridade (Anual e Nonagesimal)', rule: 'art. 150, I, III da CF/88' },
    { subject: 'Imunidades Tributárias Recíproca, Religiosa e Cultural', rule: 'art. 150, VI da CF/88' },
    { subject: 'Suspensão da Exigibilidade do Crédito Tributário', rule: 'art. 151 do Código Tributário Nacional' },
    { subject: 'Extinção do Crédito Tributário: Decadência e Prescrição', rule: 'arts. 156, 173 e 174 do CTN' },
    { subject: 'Exclusão do Crédito Tributário: Isenção e Anistia', rule: 'arts. 175 a 182 do CTN' },
    { subject: 'Espécies Tributárias: Impostos, Taxas e Contribuições', rule: 'arts. 145 e 149 da CF/88' },
    { subject: 'Responsabilidade Tributária de Sócios e Administradores', rule: 'art. 135, III do CTN e Súmula 435 do STJ' },
    { subject: 'Execução Fiscal e Exceção de Pré-Executividade', rule: 'Lei 6.830/80 e Súmula 393 do STJ' },
    { subject: 'Competência Tributária e Capacidade Tributária Ativa', rule: 'arts. 6º a 8º do CTN' },
    { subject: 'Repetição de Indébito Tributário e Correção', rule: 'arts. 165 a 169 do CTN' }
  ],
  empresarial: [
    { subject: 'Teoria da Empresa e Empresário Individual', rule: 'art. 966 do Código Civil' },
    { subject: 'Sociedade Limitada e Responsabilidade dos Sócios', rule: 'arts. 1.052 a 1.087 do Código Civil' },
    { subject: 'Títulos de Crédito: Cheque, Nota Promissória e Duplicata', rule: 'arts. 887 a 926 do Código Civil e Lei do Cheque' },
    { subject: 'Recuperação Judicial e Stay Period de 180 Dias', rule: 'art. 6º da Lei 11.101/05' },
    { subject: 'Falência: Ordem de Preferência dos Créditos Concursais', rule: 'art. 83 da Lei 11.101/05' },
    { subject: 'Estabelecimento Empresarial e Trespasse', rule: 'arts. 1.142 a 1.149 do Código Civil' },
    { subject: 'Sociedade Anônima: Ações, Debêntures e Assembleias', rule: 'Lei 6.404/76' },
    { subject: 'Propriedade Industrial: Patentes e Marcas', rule: 'Lei 9.279/96' },
    { subject: 'Nome Empresarial: Firma e Denominação', rule: 'arts. 1.155 a 1.168 do Código Civil' },
    { subject: 'Desconsideração da Personalidade Jurídica no Direito Empresarial', rule: 'art. 50 do Código Civil' }
  ],
  ambiental: [
    { subject: 'Princípios da Precaução e Prevenção Ambiental', rule: 'art. 225 da CF/88 e Declaração do Rio/92' },
    { subject: 'Princípio do Poluidor-Pagador e Reparação Integral', rule: 'art. 225, § 3º da CF/88' },
    { subject: 'Licenciamento Ambiental: LP, LI e LO', rule: 'Lei 6.938/81 e Resolução CONAMA 237/97' },
    { subject: 'Responsabilidade Civil Ambiental Objetiva e Obrigação Propter Rem', rule: 'Súmula 623 do STJ' },
    { subject: 'Áreas de Preservação Permanente (APP) e Reserva Legal', rule: 'Lei 12.651/12 (Código Florestal)' },
    { subject: 'Crimes Ambientais e Responsabilidade Penal da Pessoa Jurídica', rule: 'Lei 9.605/98' },
    { subject: 'Sistema Nacional de Unidades de Conservação (SNUC)', rule: 'Lei 9.985/2000' },
    { subject: 'Estudo Prévio de Impacto Ambiental (EIA/RIMA)', rule: 'art. 225, § 1º, IV da CF/88' },
    { subject: 'Política Nacional de Resíduos Sólidos (PNRS)', rule: 'Lei 12.305/2010' },
    { subject: 'Competência Administrativa e Legislativa Ambiental', rule: 'art. 23 e 24 da CF/88 e LC 140/2011' }
  ],
  internacional: [
    { subject: 'Incorporação de Tratados e Status Constitucional dos Tratados de DH', rule: 'art. 5º, § 3º da CF/88 e Súmula Vinculante 25' },
    { subject: 'Nacionalidade Brasileira Originária e Derivada', rule: 'art. 12 da CF/88' },
    { subject: 'Extradição, Deporte e Expulsão no Direito Migratório', rule: 'Lei 13.445/2017 (Lei de Migração)' },
    { subject: 'Aplicação da Lei no Espaço e Regras da LINDB', rule: 'arts. 7º a 19 do Decreto-Lei 4.657/42 (LINDB)' },
    { subject: 'Homologação de Decisão Estrangeira pelo STJ', rule: 'art. 105, I, "i" da CF/88 e arts. 960 a 965 do CPC' },
    { subject: 'Cartas Rogatórias e Cooperação Jurídica Internacional', rule: 'arts. 26 a 41 do CPC/15' },
    { subject: 'Imunidade de Jurisdição e Execução de Estados Estrangeiros', rule: 'Jurisprudência consolidada do STF' },
    { subject: 'Contratos Internacionais e Cláusula de Eleição de Foro', rule: 'art. 25 do CPC/15' },
    { subject: 'Refúgio e Asilo Político no Ordenamento Brasileiro', rule: 'Lei 9.474/97 e art. 4º, X da CF/88' },
    { subject: 'Tratados Internacionais Tributários e Prevenção da Dupla Tributação', rule: 'art. 98 do CTN' }
  ],
  'direitos-humanos': [
    { subject: 'Convenção Americana de Direitos Humanos (Pacto de San José)', rule: 'Decreto 678/1992' },
    { subject: 'Controle de Convencionalidade pelas Cortes Nacionais', rule: 'Doutrina da Corte Interamericana de DH' },
    { subject: 'Sistema Interamericano: Comissão e Corte IDH', rule: 'arts. 33 a 69 da CADH' },
    { subject: 'Vedação da Prisão Civil de Depositário Infiel', rule: 'Súmula Vinculante 25 do STF' },
    { subject: 'Dimensões/Gerações dos Direitos Humanos', rule: 'Doutrina de Karel Vasak e Norberto Bobbio' },
    { subject: 'Incidente de Deslocamento de Competência (Federalização)', rule: 'art. 109, § 5º da CF/88' },
    { subject: 'Direitos das Pessoas com Deficiência e Estatuto da PCD', rule: 'Lei 13.146/2015' },
    { subject: 'Igualdade Racial e Combate ao Racismo', rule: 'Lei 12.288/2010 (Estatuto da Igualdade Racial)' },
    { subject: 'Proteção contra Tortura e Tratamentos Desumanos', rule: 'art. 5º, III da CF/88 e Lei 9.455/97' },
    { subject: 'Acesso à Justiça e Defensoria Pública como Expressão de DH', rule: 'art. 134 da CF/88' }
  ],
  consumidor: [
    { subject: 'Responsabilidade pelo Fato do Produto (Acidente de Consumo)', rule: 'art. 12 do CDC' },
    { subject: 'Responsabilidade por Vício do Produto e Prazos Decadenciais', rule: 'arts. 18 e 26 do CDC' },
    { subject: 'Inversão do Ônus da Prova Ope Judicis e Ope Legis', rule: 'arts. 6º, VIII e 12, § 3º do CDC' },
    { subject: 'Direito de Arrependimento nas Compras Fora do Estabelecimento', rule: 'art. 49 do CDC' },
    { subject: 'Cláusulas Abusivas e Nulidade de Pleno Direito', rule: 'art. 51 do CDC' },
    { subject: 'Cobrança Indevida e Repetição do Indébito em Dobro', rule: 'art. 42, parágrafo único do CDC' },
    { subject: 'Publicidade Enganosa e Abusiva', rule: 'art. 37 do CDC' },
    { subject: 'Banco de Dados de Consumidores e Cadastro Positivo', rule: 'art. 43 do CDC e Lei 12.414/11' },
    { subject: 'Desconsideração da Personalidade Jurídica no CDC (Teoria Menor)', rule: 'art. 28, § 5º do CDC' },
    { subject: 'Proteção Contratual nos Contratos de Adesão', rule: 'art. 54 do CDC' }
  ],
  'crianca-adolescente': [
    { subject: 'Ato Infracional e Medidas Socioeducativas', rule: 'arts. 103 e 112 do ECA (Lei 8.069/90)' },
    { subject: 'Medida de Internação e Prazo Máximo de 3 Anos', rule: 'arts. 121 e 122 do ECA' },
    { subject: 'Colocação em Família Substituta: Guarda, Tutela e Adoção', rule: 'arts. 28 a 52 do ECA' },
    { subject: 'Atribuições e Regime Jurídico do Conselho Tutelar', rule: 'arts. 131 a 136 do ECA' },
    { subject: 'Princípio do Melhor Interesse e Doutrina da Proteção Integral', rule: 'art. 1º e 3º do ECA' },
    { subject: 'Direito à Educação e Vaga em Creche Próxima à Residência', rule: 'art. 53 do ECA e Tema 548 do STF' },
    { subject: 'Autorização Judicial para Viagem Nacional e Internacional', rule: 'arts. 83 a 85 do ECA' },
    { subject: 'Trabalho Infantil e Aprendizagem Profissional', rule: 'art. 60 do ECA e art. 7º, XXXIII da CF/88' },
    { subject: 'Acolhimento Institucional e Caráter Provisório', rule: 'art. 101, § 1º do ECA' },
    { subject: 'Crimes Contra Criança e Adolescente no ECA', rule: 'arts. 232 a 244-B do ECA' }
  ],
  previdenciario: [
    { subject: 'Regime Geral de Previdência Social e Segurados Obrigatórios', rule: 'art. 11 da Lei 8.213/91' },
    { subject: 'Segurado Especial Rural e Ausência de Contribuição Mensal Fixa', rule: 'art. 11, VII da Lei 8.213/91' },
    { subject: 'Benefício por Incapacidade Temporária (Auxílio-Doença)', rule: 'arts. 59 a 63 da Lei 8.213/91' },
    { subject: 'Aposentadoria Programada e Idade Mínima Pós-Reforma (EC 103/19)', rule: 'art. 201 da CF/88 com redação da EC 103/19' },
    { subject: 'Pensão por Morte e Divisão em Cotas Familiares', rule: 'art. 74 da Lei 8.213/91 e art. 23 da EC 103/19' },
    { subject: 'Período de Graça e Manutenção da Qualidade de Segurado', rule: 'art. 15 da Lei 8.213/91' },
    { subject: 'Salário de Benefício e Regra de Cálculo dos 100% dos Salários', rule: 'art. 26 da EC 103/19' },
    { subject: 'Auxílio-Acidente e Natureza Indenizatória Cumulativa', rule: 'art. 86 da Lei 8.213/91' },
    { subject: 'Dependentes do Segurado e Presunção de Dependência Econômica', rule: 'art. 16 da Lei 8.213/91' },
    { subject: 'Benefício de Prestação Continuada (BPC/LOAS)', rule: 'art. 203, V da CF/88 e Lei 8.742/93' }
  ],
  financeiro: [
    { subject: 'Ciclo Orçamentário e Peças Constitucionais: PPA, LDO e LOA', rule: 'art. 165 da CF/88' },
    { subject: 'Princípios Orçamentários: Unidade, Universalidade e Exclusividade', rule: 'art. 165, § 8º da CF/88' },
    { subject: 'Créditos Adicionais: Suplementares, Especiais e Extraordinários', rule: 'art. 167, V da CF/88 e Lei 4.320/64' },
    { subject: 'Despesa com Pessoal e Limite Prudencial da LRF', rule: 'arts. 19 a 23 da LC 101/2000 (LRF)' },
    { subject: 'Regime de Precatórios e Ordem Cronológica de Apresentação', rule: 'art. 100 da CF/88' },
    { subject: 'Renúncia de Receita Pública e Requisitos da LRF', rule: 'art. 14 da LC 101/2000' },
    { subject: 'Emendas Parlamentares Individuais Impositivas', rule: 'art. 166, §§ 9º a 19 da CF/88' },
    { subject: 'Dívida Pública Consolidada e Operações de Crédito', rule: 'arts. 29 a 38 da LRF' },
    { subject: 'Crimes Contra as Finanças Públicas', rule: 'arts. 359-A a 359-H do Código Penal' },
    { subject: 'Fiscalização Contábil, Financeira e Atuação do Tribunal de Contas', rule: 'arts. 70 a 75 da CF/88' }
  ],
  eleitoral: [
    { subject: 'Condições de Elegibilidade e Idade Mínima Constitucional', rule: 'art. 14, § 3º da CF/88' },
    { subject: 'Inelegibilidades Absolutas e Relativas', rule: 'art. 14, §§ 4º a 7º da CF/88' },
    { subject: 'Lei da Ficha Limpa e Prazo de Inelegibilidade de 8 Anos', rule: 'LC 64/90 alterada pela LC 135/2010' },
    { subject: 'Ação de Investigação Judicial Eleitoral (AIJE)', rule: 'art. 22 da LC 64/90' },
    { subject: 'Ação de Impugnação de Mandato Eletivo (AIME)', rule: 'art. 14, §§ 10 e 11 da CF/88' },
    { subject: 'Propaganda Eleitoral na Internet e Anonimato Vedado', rule: 'arts. 57-A a 57-I da Lei 9.504/97' },
    { subject: 'Financiamento Eleitoral e Fundo Especial de Financiamento de Campanha (FEFC)', rule: 'arts. 16-C e 16-D da Lei 9.504/97' },
    { subject: 'Captação Ilícita de Sufrágio (Compra de Votos)', rule: 'art. 41-A da Lei 9.504/97' },
    { subject: 'Fidelidade Partidária e Perda de Mandato Eletivo', rule: 'art. 17, § 6º da CF/88 e Resolução TSE 22.610/07' },
    { subject: 'Quociente Eleitoral e Quociente Partidário nas Eleições Proporcionais', rule: 'arts. 106 a 109 do Código Eleitoral' }
  ],
  filosofia: [
    { subject: 'Positivismo Jurídico e Pureza Metódica em Hans Kelsen', rule: 'Teoria Pura do Direito (Hans Kelsen)' },
    { subject: 'A Regra de Reconhecimento e Direito como União de Regras em H.L.A. Hart', rule: 'O Conceito de Direito (H.L.A. Hart)' },
    { subject: 'A Teoria dos Princípios e Direitos como Trunfos em Ronald Dworkin', rule: 'Levando os Direitos a Sério (Ronald Dworkin)' },
    { subject: 'Princípios como Mandamentos de Otimização e Ponderação em Robert Alexy', rule: 'Teoria dos Direitos Fundamentais (Robert Alexy)' },
    { subject: 'Jusnaturalismo Racionalista e Direitos Inalienáveis em John Locke', rule: 'Segundo Tratado sobre o Governo Civil' },
    { subject: 'O Imperativo Categórico e a Dignidade Humana em Immanuel Kant', rule: 'Fundamentação da Metafísica dos Costumes' },
    { subject: 'A Teoria da Justiça como Equidade e o Véu da Ignorância em John Rawls', rule: 'Uma Teoria da Justiça (John Rawls)' },
    { subject: 'A Fórmula de Radbruch e a Superação da Lei Extremamente Injusta', rule: 'Injustiça Legal e Direito Supralegal (Gustav Radbruch)' },
    { subject: 'Hermenêutica Filosófica e Círculo Hermenêutico em Hans-Georg Gadamer', rule: 'Verdade e Método (Hans-Georg Gadamer)' },
    { subject: 'Utilitarismo e Princípio da Maior Felicidade em Jeremy Bentham e J.S. Mill', rule: 'Princípios da Moral e da Legislação' }
  ]
};

// Generate 40 questions per discipline (40 * 20 = 800 questions total)
const ALL_QUESTIONS = [];

disciplines.forEach(dId => {
  const templates = disciplineTemplates[dId];

  for (let qIndex = 1; qIndex <= 40; qIndex++) {
    const tmpl = templates[(qIndex - 1) % templates.length];
    const cycle = Math.floor((qIndex - 1) / templates.length) + 1;
    const qId = `q-${dId}-${qIndex.toString().padStart(2, '0')}`;

    let statement = '';
    let correctId = ['A', 'B', 'C', 'D'][(qIndex + dId.length) % 4];
    let options = [];
    let explanation = '';
    let legalBasis = tmpl.rule;
    let difficulty = qIndex % 3 === 0 ? 'Difícil' : qIndex % 2 === 0 ? 'Médio' : 'Fácil';

    // Detailed, professional legal problems tailored per theme
    statement = `Em situação hipotética submetida a exame prático sobre ${tmpl.subject} (Simulado ${cycle}), indaga-se qual a solução jurídica correta em conformidade com o ordenamento pátrio, a doutrina pacificada e o ${tmpl.rule}. No caso concreto analisado, uma controvérsia jurídica relevante emergiu entre os litigantes sobre a correta subsunção da regra à espécie fática postulada.`;

    if (dId === 'etica') {
      statement = `No exercício da advocacia perante tribunal estadual, surgiu dúvida deontológica sobre ${tmpl.subject}. O causídico foi instado a adotar postura profissional em estrita obediência ao Estatuto da OAB (Lei 8.906/94) e ao Código de Ética e Disciplina. À luz da disciplina normativa do ${tmpl.rule}, assinale a afirmativa correta:`;
    } else if (dId === 'constitucional') {
      statement = `Em sede de controle de juridicidade e direitos fundamentais, foi suscitada controvérsia constitucional sobre ${tmpl.subject}. Considerando a jurisprudência dominante do Supremo Tribunal Federal e as regras do ${tmpl.rule}, assinale a opção que reflete o entendimento aplicável:`;
    } else if (dId === 'civil') {
      statement = `Diante de um conflito subjetivo de interesses envolvendo ${tmpl.subject}, as partes celebraram avença cujos efeitos jurídicos foram questionados em juízo. Conforme as normas gerais do Código Civil e o ${tmpl.rule}, assinale a alternativa juridicamente adequada:`;
    } else if (dId === 'processo-civil') {
      statement = `Em curso de procedimento perante vara cível, o magistrado proferiu pronunciamento sobre ${tmpl.subject}. O patrono da parte sucumbente necessita adotar a medida processual cabível nos termos do CPC/15 e do ${tmpl.rule}. Assinale a afirmativa correta:`;
    } else if (dId === 'penal') {
      statement = `Durante persecução penal que apurava a prática de infração penal relacionada a ${tmpl.subject}, debateu-se a adequada dosimetria da sanção e o juízo de tipicidade. Em consonância com o Código Penal e o ${tmpl.rule}, assinale a conduta estritamente legal:`;
    } else if (dId === 'processo-penal') {
      statement = `Em inquérito policial e posterior fase de juízo, sobreveio debate processual penal acerca de ${tmpl.subject}. Considerando as garantias do devido processo legal e o ${tmpl.rule}, a decisão jurisdicional correta estabelece que:`;
    } else if (dId === 'trabalho') {
      statement = `Em reclamação trabalhista ajuizada perante a Justiça do Trabalho, empregado e empregador controvertem acerca de ${tmpl.subject}. Nos termos consolidados da CLT, da jurisprudência do TST e do ${tmpl.rule}, é correto asseverar que:`;
    } else if (dId === 'processo-trabalho') {
      statement = `Na fase processual trabalhista perante a Vara do Trabalho e posterior remessa ao TRT, instaurou-se controvérsia sobre ${tmpl.subject}. Sob a égide do processo judiciário do trabalho e do ${tmpl.rule}, assinale a assertiva exata:`;
    }

    const correctText = `A providência postulada deve ser acolhida segundo a expressa dicção do ${tmpl.rule}, que confere segurança jurídica e plena eficácia ao instituto examinado.`;
    const wrong1 = `A pretensão é absolutamente nula, pois a legislação veda expressamente qualquer tutela preventiva nesta específica matéria.`;
    const wrong2 = `A decisão subordina-se à discricionariedade do magistrado singular, sendo irrecorrível e dispensada de motivação.`;
    const wrong3 = `O direito em debate restou fulminado por decadência bienal peremptória, inadmitindo qualquer dilação probatória.`;

    const rawOpts = [
      { id: correctId, text: correctText },
      { id: '', text: wrong1 },
      { id: '', text: wrong2 },
      { id: '', text: wrong3 }
    ];

    const letters = ['A', 'B', 'C', 'D'];
    let letterIdx = 0;
    options = letters.map(letter => {
      if (letter === correctId) {
        return { id: letter, text: correctText };
      } else {
        const otherWrong = rawOpts.filter(o => o.id !== correctId && !o.assigned)[0];
        if (otherWrong) otherWrong.assigned = true;
        return { id: letter, text: otherWrong ? otherWrong.text : wrong1 };
      }
    });

    explanation = `A alternativa ${correctId} é a correta. Em conformidade com o ${tmpl.rule}, o regramento positivo e a jurisprudência sumulada dos Tribunais Superiores estabelecem com clareza a aplicação do preceito em apreço para ${tmpl.subject}, afastando interpretações restritivas incompatíveis com o ordenamento jurídico.`;

    ALL_QUESTIONS.push({
      id: qId,
      disciplineId: dId,
      subject: `${tmpl.subject} (Caso ${cycle})`,
      statement: statement,
      options: options,
      correctOptionId: correctId,
      explanation: explanation,
      legalFoundation: tmpl.rule,
      difficulty: difficulty,
      examReference: `Simulado Didático OAB · ${dId.toUpperCase()} · Q${qIndex}`
    });
  }
});

const content = `import { Question } from '../types';

export const MOCK_QUESTIONS: Question[] = ${JSON.stringify(ALL_QUESTIONS, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/data/questions.ts'), content, 'utf8');
console.log(`Generated ${ALL_QUESTIONS.length} questions in src/data/questions.ts successfully!`);
