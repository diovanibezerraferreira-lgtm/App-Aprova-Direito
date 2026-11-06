const fs = require('fs');
const path = require('path');

const MATERIALS = [
  {
    id: 'mat-etica-01',
    title: 'Manual de Prerrogativas e Ética na Advocacia (Lei 8.906/94)',
    disciplineId: 'etica',
    author: 'Prof. Lucas Mendes · Especialista OAB FGV',
    estimatedReadTime: '15 min de leitura',
    description: 'Resumo completo e sistematizado dos arts. 6º a 26 do Estatuto da OAB, prerrogativas, incompatibilidades e honorários.',
    chapters: [
      {
        title: '1. Inexistência de Hierarquia e Prerrogativas do Advogado',
        content: `Não há hierarquia nem subordinação entre advogados, magistrados e membros do Ministério Público (art. 6º da Lei 8.906/94). Todos devem dispensar-se consideração e respeito recíprocos. As prerrogativas não constituem privilégios corporativos, mas garantias consagradas para o pleno exercício do direito de ampla defesa do cidadão.
Entre os principais direitos assegurados pelo art. 7º:
1. Inviolabilidade do escritório, instrumentos de trabalho e correspondência (salvo mandado de busca e apreensão fundamentado por indícios de autoria delitiva praticada pelo próprio causídico, acompanhado por representante da OAB).
2. Comunicação pessoal e reservada com clientes presos ou detidos, ainda que incomunicáveis, sem necessidade de procuração.
3. Exame de autos de investigação policial ou administrativa em qualquer repartição civil ou militar, findos ou em andamento, inclusive sem procuração (salvo segredo de justiça documentado).`,
        keyStatutes: ['Art. 6º da Lei 8.906/94', 'Art. 7º, II, III e XIV da Lei 8.906/94', 'Art. 133 da CF/88'],
        summaryPoints: [
          'Inexistência de subordinação entre juiz, promotor e advogado.',
          'Comunicação reservada com preso mesmo sem procuração.',
          'Inviolabilidade do domicílio profissional e correspondências de trabalho.'
        ]
      },
      {
        title: '2. Incompatibilidades e Impedimentos',
        content: `A incompatibilidade (art. 28) gera a proibição TOTAL para o exercício da advocacia, mesmo em causa própria. Exemplos clássicos: Chefes do Poder Executivo, membros do Poder Judiciário e MP, policiais de qualquer natureza, auditores tributários e ocupantes de cargos de direção em cartórios judiciais e extrajudiciais.
Já o impedimento (art. 30) acarreta a proibição PARCIAL, limitando o patrocínio em determinadas esferas. O caso mais cobrado na prova é o dos servidores públicos da administração direta e indireta, que são impedidos de advogar contra a Fazenda Pública que os remunera ou à qual vincula sua função.`,
        keyStatutes: ['Art. 28 da Lei 8.906/94 (Incompatibilidade)', 'Art. 30 da Lei 8.906/94 (Impedimento)'],
        summaryPoints: [
          'Incompatibilidade = Vedação total (Polícia, Magistratura, MP, Prefeito, Governador).',
          'Impedimento = Vedação parcial (Servidor público contra o Ente pagador).'
        ]
      },
      {
        title: '3. Honorários Advocatícios e Sociedade Unipessoal',
        content: `Os honorários podem ser convencionados (contratuais), arbitrados judicialmente ou de sucumbência (art. 22). Os honorários de sucumbência pertencem exclusivamente ao advogado, possuem natureza alimentar e são insuscetíveis de compensação em caso de sucumbência recíproca (art. 85, § 14 do CPC). A ação de cobrança de honorários prescreve em 5 (cinco) anos.
A legislação admite a sociedade unipessoal de advocacia (Lei 13.247/16), na qual o causídico responde ilimitadamente pelos danos causados por culpa ou dolo.`,
        keyStatutes: ['Arts. 22 a 26 da Lei 8.906/94', 'Art. 85, § 14 do CPC/15', 'Súmula Vinculante 47 do STF'],
        summaryPoints: [
          'Honorários de sucumbência pertencem privativamente ao patrono.',
          'Vedada compensação em sucumbência recíproca.',
          'Prescrição da cobrança: 5 anos.'
        ]
      }
    ]
  },
  {
    id: 'mat-const-01',
    title: 'Guia do Controle de Constitucionalidade e Direitos Fundamentais',
    disciplineId: 'constitucional',
    author: 'Dra. Beatriz Albuquerque · Mestre em Direito Constitucional',
    estimatedReadTime: '18 min de leitura',
    description: 'Quadro comparativo entre controle difuso e concentrado (ADI, ADC, ADO, ADPF) e teoria dos direitos fundamentais.',
    chapters: [
      {
        title: '1. Controle Difuso e Cláusula de Reserva de Plenário',
        content: `O controle difuso (ou incidental/aberto) é exercido por qualquer órgão jurisdicional singular ou colegiado diante de uma lide subjetiva real. A declaração de inconstitucionalidade é incidental à solução do pedido principal.
Nos tribunais, impõe-se a estrita observância da Cláusula de Reserva de Plenário (art. 97 da CF/88 e Súmula Vinculante 10): a inconstitucionalidade de lei ou ato normativo somente pode ser declarada pelo voto da maioria absoluta dos membros do pleno ou de seu órgão especial. A decisão gera efeitos inter partes, com possibilidade de extensão de efeitos vinculantes via mutação constitucional do STF ou resolução suspensiva do Senado Federal (art. 52, X).`,
        keyStatutes: ['Art. 97 da CF/88', 'Súmula Vinculante nº 10 do STF', 'Art. 52, X da CF/88'],
        summaryPoints: [
          'Qualquer magistrado de primeiro grau pode reconhecer a inconstitucionalidade no caso.',
          'Tribunais exigem quórum de maioria absoluta do plenário para invalidar lei.',
          'A Súmula Vinculante 10 proíbe que turmas ou câmaras esvaziem a lei sem remessa ao pleno.'
        ]
      },
      {
        title: '2. Controle Concentrado e Ações Diretas no STF',
        content: `Processado diretamente perante o Supremo Tribunal Federal, visando à proteção abstrata da ordem jurídica constitucional. Ações típicas:
- ADI genérica: Leis federais ou estaduais pós-constitucionais contra a CF.
- ADC: Confirmação de presunção de constitucionalidade de lei federal controversa.
- ADO: Combate à mora inconstitucional dos poderes legislativos na regulamentação de preceitos fundamentais.
- ADPF: Subsidiária, cabível contra direito pré-constitucional, leis municipais ou violações de preceitos basilares.
O rol de legitimados ativos está taxativamente disciplinado no art. 103 da Carta Magna, dividindo-se entre legitimados universais (que independem de demonstração de interesse) e legitimados especiais (governadores, assembleias e confederações/entidades de classe de âmbito nacional, que exigem pertinência temática).`,
        keyStatutes: ['Art. 102, I, "a" da CF/88', 'Art. 103 da CF/88', 'Lei nº 9.868/1999', 'Lei nº 9.882/1999'],
        summaryPoints: [
          'Decisões em controle concentrado têm eficácia erga omnes e efeito vinculante.',
          'Legitimados especiais exigem pertinência temática direta.',
          'ADPF possui caráter subsidiário e alcança direito municipal e pré-constitucional.'
        ]
      }
    ]
  },
  {
    id: 'mat-civil-01',
    title: 'Compêndio de Direito Civil: Negócio Jurídico e Responsabilidade',
    disciplineId: 'civil',
    author: 'Prof. Felipe Guimarães · Advogado e Docente de Direito Civil',
    estimatedReadTime: '20 min de leitura',
    description: 'Invalidade do negócio jurídico, vícios do consentimento, prescrição versus decadência e responsabilidade civil aquiliana.',
    chapters: [
      {
        title: '1. Teoria do Negócio Jurídico e Defeitos da Vontade',
        content: `O negócio jurídico pressupõe os planos da existência, validade e eficácia (Escada Ponteana). A nulidade absoluta decorre de incapacidade absoluta, objeto ilícito ou impossível e preterição de solenidade legal, não convalescendo pelo decurso do tempo (art. 169 do CC).
A anulabilidade (nulidade relativa) vincula-se a incapacidade relativa ou defeitos do consentimento: erro, dolo, coação, estado de perigo e lesão, cujo prazo decadencial geral para anulação é de 4 (quatro) anos (art. 178 do CC). A fraude contra credores também conduz à anulação via Ação Pauliana. Já a simulação, desde a edição do CC/2002, constitui causa de nulidade absoluta (art. 167).`,
        keyStatutes: ['Arts. 166 a 184 do Código Civil', 'Art. 178 do Código Civil'],
        summaryPoints: [
          'Nulidade absoluta não convalesce com o tempo nem admite confirmação.',
          'Anulabilidade por erro, dolo, coação, estado de perigo ou lesão decai em 4 anos.',
          'Simulação é causa de nulidade absoluta no Código Civil de 2002.'
        ]
      },
      {
        title: '2. Responsabilidade Civil: Subjetiva vs Objetiva',
        content: `A regra geral no ordenamento civil é a responsabilidade subjetiva fundada na tríade: conduta culposa/dolosa, nexo de causalidade e dano experimentado (art. 186 e 927, caput, do CC).
A responsabilidade objetiva independe de culpa nos casos expressos em lei ou quando a atividade habitualmente desenvolvida pelo autor do dano implicar risco excepcional aos direitos alheios (art. 927, parágrafo único). Excludentes do nexo causal (força maior, culpa exclusiva da vítima ou fato de terceiro imprevisível) rompem a responsabilização em ambas as modalidades.`,
        keyStatutes: ['Arts. 186, 187 e 927 do Código Civil', 'Art. 932 do Código Civil'],
        summaryPoints: [
          'Subjetiva = Exige comprovação de negligência, imprudência ou dolo.',
          'Objetiva = Exige apenas atividade de risco ou previsão legal expressa.',
          'Pais e empregadores respondem objetivamente por atos de filhos e prepostos (art. 932 c/c 933).'
        ]
      }
    ]
  },
  {
    id: 'mat-cpc-01',
    title: 'Manual Prático de Recursos no CPC/2015',
    disciplineId: 'processo-civil',
    author: 'Prof. Rodrigo Tavares · Mestre em Processo Civil',
    estimatedReadTime: '18 min de leitura',
    description: 'Prazos unificados de 15 dias, hipóteses de cabimento do agravo de instrumento e teoria geral recursal.',
    chapters: [
      {
        title: '1. Prazos Processuais e Princípios Recursais',
        content: `O CPC/15 uniformizou os prazos recursais em 15 (quinze) dias úteis para todas as espécies, excetuando exclusivamente os Embargos de Declaração, cujo prazo é de 5 (cinco) dias úteis. A contagem de prazos dá-se exclusivamente em dias úteis para atos processuais procedimentais (art. 219).
Preparo: A falta de recolhimento gera intimação para recolhimento em dobro (art. 1.007, § 4º), ao passo que o recolhimento insuficiente autoriza a complementação simples no prazo improrrogável de 5 dias úteis, antes da decretação de deserção.`,
        keyStatutes: ['Art. 1.003, § 5º do CPC/15', 'Art. 219 do CPC/15', 'Art. 1.007 do CPC/15'],
        summaryPoints: [
          'Prazo geral de 15 dias úteis (Embargos de Declaração = 5 dias).',
          'Contagem exclusivamente em dias úteis.',
          'Preparo insuficiente enseja prazo de 5 dias para complementação simples.'
        ]
      },
      {
        title: '2. Agravo de Instrumento e o Rol do Art. 1.015 do CPC',
        content: `O Agravo de Instrumento é a via recursal imediata cabível contra decisões interlocutórias expressamente arroladas na legislação: tutelas provisórias, mérito da causa, rejeição da gratuidade de justiça, exibição ou posse de coisa, entre outras.
O Superior Tribunal de Justiça, ao julgar o Tema Repetitivo 988, fixou a tese da "taxatividade mitigada": admite-se o agravo de instrumento fora das hipóteses do art. 1.015 quando verificada urgência decorrente da inutilidade do julgamento da questão em sede de preliminar de apelação futura.`,
        keyStatutes: ['Art. 1.015 do CPC/15', 'Tema Repetitivo 988 do STJ'],
        summaryPoints: [
          'Decisões interlocutórias não agraváveis não sofrem preclusão imediata.',
          'Questões não agraváveis podem ser suscitadas na apelação ou nas contrarrazões.',
          'Taxatividade mitigada do rol do art. 1.015 reconhecida pelo STJ para casos urgentes.'
        ]
      }
    ]
  },
  {
    id: 'mat-penal-01',
    title: 'Teoria Geral do Crime e Penas no Código Penal',
    disciplineId: 'penal',
    author: 'Dra. Gabriela Vasconcelos · Especialista em Ciências Criminais',
    estimatedReadTime: '20 min de leitura',
    description: 'Estrutura analítica do crime (fato típico, ilícito e culpável), excludentes de ilicitude, concurso de pessoas e dosimetria da pena.',
    chapters: [
      {
        title: '1. Fato Típico, Ilicitude e Causas de Justificação',
        content: `Pelo conceito analítico tripartite adotado majoritariamente, o crime é composto por fato típico, ilicitude (antijuridicidade) e culpabilidade.
O fato típico engloba conduta voluntária (ação ou omissão), resultado naturalístico, nexo de causalidade e tipicidade (formal e material).
As causas excludentes de ilicitude estão positivadas no art. 23 do CP:
1. Estado de necessidade: sacrifício de bem jurídico alheio de valor igual ou menor para salvaguardar direito próprio ou de outrem de perigo atual não provocado dolosamente.
2. Legítima defesa: repulsa proporcional a agressão injusta, atual ou iminente, a direito próprio ou alheio.
3. Estrito cumprimento de dever legal e exercício regular de direito.`,
        keyStatutes: ['Arts. 13 a 25 do Código Penal'],
        summaryPoints: [
          'Conceito analítico: Fato Típico + Ilícito + Culpável.',
          'Excludentes de ilicitude: Legítima defesa, estado de necessidade, estrito cumprimento de dever legal.',
          'O excesso doloso ou culposo é punível em qualquer das causas justificantes.'
        ]
      },
      {
        title: '2. Culpabilidade e Critério Trifásico da Pena',
        content: `A culpabilidade atua como juízo de reprovabilidade e contempla: imputabilidade mental (maioridade e higidez psíquica), potencial consciência da ilicitude e exigibilidade de conduta diversa.
A fixação da pena privativa de liberdade obedece ao critério trifásico de Nelson Hungria (art. 68 do CP):
1ª Fase: Pena-base analisada conforme as 8 circunstâncias judiciais do art. 59 (culpabilidade, antecedentes, conduta social, personalidade, etc.).
2ª Fase: Incidência de atenuantes (ex.: confissão espontânea) e agravantes (ex.: reincidência), observado o limite do art. 65 e sem ultrapassar os limites abstratos da lei (Súmula 231 do STJ).
3ª Fase: Causas de diminuição (tentativa) e aumento de pena (majorantes) com fração expressa na lei.`,
        keyStatutes: ['Arts. 59 e 68 do Código Penal', 'Súmula 231 do STJ'],
        summaryPoints: [
          'Inimputáveis por anomalia mental recebem medida de segurança (absolvição imprópria).',
          'Súmula 231 do STJ proíbe atenuantes reduzirem a pena aquém do mínimo legal na 2ª fase.',
          'Tentativa diminui a pena de 1 a 2 terços conforme a proximidade da consumação.'
        ]
      }
    ]
  },
  {
    id: 'mat-proc-penal-01',
    title: 'Guia de Processo Penal: Investigação, Prisões Cautelares e Recursos',
    disciplineId: 'processo-penal',
    author: 'Prof. Henrique Martins · Delegado de Polícia e Professor',
    estimatedReadTime: '22 min de leitura',
    description: 'Inquérito policial, flagrante, prisão preventiva, medidas cautelares diversas da prisão e recursos criminais (RESE e Apelação).',
    chapters: [
      {
        title: '1. Inquérito Policial e Prisões Cautelares',
        content: `O inquérito policial possui natureza administrativa, informativa, inquisitorial, discricionária e indisponível (a autoridade policial jamais pode determinar o arquivamento de ofício - art. 17 do CPP).
A prisão preventiva (art. 312 do CPP) só pode ser decretada mediante requerimento do MP ou representação da autoridade policial, sendo vedada a decretação de ofício pelo magistrado. Requisitos basilares: garantia da ordem pública, da ordem econômica, conveniência da instrução criminal ou asseguração da aplicação da lei penal (fumus comissi delicti e periculum libertatis), quando insuficientes as cautelares diversas da prisão (art. 319).`,
        keyStatutes: ['Arts. 17 e 28 do CPP', 'Arts. 312 e 319 do CPP'],
        summaryPoints: [
          'Inquérito policial é indisponível para o delegado (art. 17 CPP).',
          'Juiz não pode decretar prisão preventiva de ofício.',
          'A prisão preventiva pressupõe a contemporaneidade e a ineficácia das medidas do art. 319.'
        ]
      },
      {
        title: '2. Recursos Criminais: Apelação e RESE',
        content: `O Recurso em Sentido Estrito (RESE - art. 581 do CPP) tem prazo de 5 (cinco) dias para interposição e 2 (dois) dias para razões. Possui rol taxativo e contempla hipóteses essenciais como a rejeição da denúncia ou queixa e a decisão que pronuncia o réu para julgamento pelo Tribunal do Júri. Possui efeito regressivo (juízo de retratação).
Já a Apelação (art. 593 do CPP) é cabível contra sentenças definitivas de condenação ou absolvição proferidas por juiz singular, bem como decisões terminativas não impugnáveis por RESE, com prazo de 5 dias para interposição e 8 dias para apresentação das razões recursais.`,
        keyStatutes: ['Art. 581 do CPP (RESE)', 'Art. 593 do CPP (Apelação)'],
        summaryPoints: [
          'RESE: prazo de 5 dias para interposição e 2 dias para razões recursais.',
          'Pronúncia no Júri desafia RESE; impronúncia e absolvição sumária desafiam Apelação.',
          'RESE confere ao magistrado a faculdade de retratação.'
        ]
      }
    ]
  },
  {
    id: 'mat-trabalho-01',
    title: 'Guia Prático de Direito Individual e Coletivo do Trabalho',
    disciplineId: 'trabalho',
    author: 'Dra. Camila Vasconcellos · Juíza do Trabalho Aposentada',
    estimatedReadTime: '18 min de leitura',
    description: 'Contrato de trabalho, jornada, equiparação salarial, verbas rescisórias e estabilidades provisórias pós-reforma.',
    chapters: [
      {
        title: '1. Jornada de Trabalho, Horas Extras e Intervalos',
        content: `A duração normal do trabalho não poderá exceder a 8 (oito) horas diárias e 44 (quarenta e quatro) semanais (art. 7º, XIII da CF/88). Horas suplementares não podem exceder 2 diárias e exigem remuneração mínima adicional de 50% (art. 59 da CLT).
Após a Reforma Trabalhista (Lei 13.467/17), a não concessão ou concessão parcial do intervalo intrajornada mínimo (de 1 hora para jornadas superiores a 6 horas) implica o pagamento apenas do período suprimido, com acréscimo de 50%, possuindo natureza estritamente indenizatória (não repercutindo nas demais verbas contratuais).`,
        keyStatutes: ['Art. 7º, XIII da CF/88', 'Art. 71, § 4º da CLT', 'Súmula 338 do TST'],
        summaryPoints: [
          'Jornada constitucional padrão: 8h diárias e 44h semanais.',
          'Supressão de intervalo intrajornada gera pagamento apenas do tempo suprimido com 50% de natureza indenizatória.',
          'Teletrabalho pode ser estipulado com dispensa de controle de jornada (art. 62, III da CLT).'
        ]
      },
      {
        title: '2. Prescrição Trabalhista e Rescisão Contratual',
        content: `A prescrição dos créditos resultantes das relações de trabalho é de 5 (cinco) anos para os trabalhadores urbanos e rurais, até o limite de 2 (dois) anos após a extinção do contrato de trabalho (prescrição bienal e quinquenal - art. 7º, XXIX da CF/88 e art. 11 da CLT).
A rescisão por acordo mútuo entre empregado e empregador (art. 484-A da CLT) confere pagamento pela metade do aviso prévio e da indenização rescisória do FGTS (20%), permitindo o levantamento de até 80% do saldo depositado do FGTS, sem direito ao seguro-desemprego.`,
        keyStatutes: ['Art. 7º, XXIX da CF/88', 'Art. 11 da CLT', 'Art. 484-A da CLT'],
        summaryPoints: [
          'Prescrição bienal (2 anos da rescisão) e quinquenal (5 anos retroativos ao ajuizamento).',
          'Demissão consensual (art. 484-A): metade do aviso e 20% de multa do FGTS.',
          'Prazo de homologação e pagamento de verbas rescisórias unificado em 10 dias corridos.'
        ]
      }
    ]
  },
  {
    id: 'mat-proc-trabalho-01',
    title: 'Manual de Processo do Trabalho: Ritos, Audiência e Recursos',
    disciplineId: 'processo-trabalho',
    author: 'Prof. Felipe Rocha · Advogado Trabalhista e Professor',
    estimatedReadTime: '17 min de leitura',
    description: 'Ritos ordinário e sumaríssimo, revelia trabalhista, depósito recursal e Recursos no TST.',
    chapters: [
      {
        title: '1. Ritos Processuais e Audiência Una',
        content: `O Rito Sumaríssimo aplica-se a causas de até 40 (quarenta) salários mínimos na data do ajuizamento. Exige pedido líquido e individualizado e endereço exato da reclamada, sendo vedada a citação por edital. Limita-se a inquirição a no máximo 2 testemunhas por parte (art. 852-H, § 2º da CLT).
No rito ordinário (acima de 40 salários mínimos), são admitidas até 3 testemunhas por litigante.
Na audiência trabalhista, o não comparecimento do reclamante importa o arquivamento da reclamação trabalhista. A ausência do reclamado gera revelia e confissão ficta quanto à matéria de fato (art. 844 da CLT).`,
        keyStatutes: ['Arts. 844 e 852-A a 852-I da CLT'],
        summaryPoints: [
          'Rito Sumaríssimo: até 40 salários mínimos, sem citação por edital e até 2 testemunhas.',
          'Ausência do reclamante gera arquivamento da ação.',
          'Ausência do reclamado gera revelia e confissão quanto aos fatos.'
        ]
      },
      {
        title: '2. Sistema Recursal Trabalhista',
        content: `Os recursos trabalhistas têm prazo unificado de 8 (oito) dias úteis (Recurso Ordinário, Agravo de Petição, Recurso de Revista, Agravo de Instrumento e Embargos no TST). A única exceção de relevo são os Embargos de Declaração, com prazo de 5 dias úteis (art. 897-A da CLT).
O Recurso Ordinário cabe da sentença terminativa ou definitiva das Varas do Trabalho para o TRT. O Recurso de Revista cabe ao TST exclusivamente para uniformização jurisprudencial ou ofensa direta à CF e súmulas, exigindo transcendência e não admitindo reexame de matéria fática (Súmula 126 do TST).`,
        keyStatutes: ['Art. 893 e 895 da CLT', 'Art. 896 da CLT', 'Súmula 126 do TST'],
        summaryPoints: [
          'Prazo geral recursal trabalhista: 8 dias úteis (Embargos de Declaração = 5 dias).',
          'Recurso de Revista não permite reapreciação de provas e fatos.',
          'Beneficiário da justiça gratuita é dispensado do recolhimento de custas e depósito recursal.'
        ]
      }
    ]
  },
  {
    id: 'mat-admin-01',
    title: 'Direito Administrativo: Atos, Contratos e a Nova Lei de Licitações (14.133/21)',
    disciplineId: 'administrativo',
    author: 'Dra. Marina Silveira · Procuradora do Estado',
    estimatedReadTime: '20 min de leitura',
    description: 'Nova Lei 14.133/21, atributos do ato administrativo, responsabilidade civil objetiva do Estado e nova Lei de Improbidade.',
    chapters: [
      {
        title: '1. Atos Administrativos e Poderes da Administração',
        content: `O ato administrativo nasce dotado de presunção de legitimidade e veracidade, autoexecutoriedade, imperatividade (quando impõe obrigações) e tipicidade.
Requisitos de validade: competência, finalidade, forma, motivo e objeto. O vício de competência (quando não for exclusiva) e o de forma (desde que não essencial) admitem convalidação (art. 55 da Lei 9.784/99).
A Administração Pública pode anular seus próprios atos quando eivados de vícios de legalidade ou revogá-los por motivo de conveniência e oportunidade (Súmulas 346 e 473 do STF).`,
        keyStatutes: ['Súmula 473 do STF', 'Lei nº 9.784/1999', 'Art. 37, caput da CF/88'],
        summaryPoints: [
          'Anulação = Ilegalidade (efeitos ex tunc retroativos).',
          'Revogação = Mérito administrativo/conveniência (efeitos ex nunc prospectivos).',
          'Convalidação possível para vícios sanáveis de competência e forma.'
        ]
      },
      {
        title: '2. Nova Lei de Licitações (Lei 14.133/21) e Improbidade',
        content: `A Lei 14.133/21 estabeleceu como modalidades de licitação: Pregão, Concorrência, Concurso, Leilão e o inovador Diálogo Competitivo. Foram extintas as antigas modalidades de Tomada de Preços e Convite.
A contratação direta subdivide-se em inexigibilidade (inviabilidade de competição, como artista consagrado e notória especialização) e dispensa (competição viável, mas a lei autoriza contratar sem licitação por valor ou emergência).
Na Lei de Improbidade Administrativa (Lei 8.429/92, alterada pela Lei 14.230/21), foi expurgada a modalidade culposa: qualquer ato de improbidade exige a presença inescusável do dolo específico.`,
        keyStatutes: ['Arts. 28, 74 e 75 da Lei nº 14.133/2021', 'Lei nº 8.429/92 (alterada pela Lei 14.230/21)'],
        summaryPoints: [
          'Extinção de Convite e Tomada de Preços; criação do Diálogo Competitivo.',
          'Inexigibilidade decorre da inviabilidade de competição.',
          'Improbidade administrativa exige obrigatoriamente dolo específico.'
        ]
      }
    ]
  },
  {
    id: 'mat-trib-01',
    title: 'Guia Essencial de Direito Tributário: Princípios, Imunidades e Crédito',
    disciplineId: 'tributario',
    author: 'Prof. Alexandre Nogueira · Juiz Federal e Especialista em Tributação',
    estimatedReadTime: '19 min de leitura',
    description: 'Princípios da anterioridade, imunidades recíproca e religiosa, causas de suspensão e extinção do crédito tributário no CTN.',
    chapters: [
      {
        title: '1. Princípios Constitucionais Tributários e Imunidades',
        content: `A competência tributária é limitada por preceitos pétreos da CF/88:
- Legalidade tributária (art. 150, I): tributo exige prévia lei para sua instituição ou majoração.
- Anterioridade anual e nonagesimal (noventena): a cobrança exige que a lei entre em vigor no exercício seguinte e após 90 dias da publicação, salvo exceções constitucionais (ex.: II, IE, IOF e IPI quanto à anual).
As imunidades tributárias (art. 150, VI) impedem a instituição de impostos sobre patrimônio, renda ou serviços: dos entes federados entre si (imunidade recíproca), de templos de qualquer culto, de partidos políticos e entidades sindicais de trabalhadores, e sobre livros, jornais e periódicos.`,
        keyStatutes: ['Art. 150 da CF/88', 'CTN, arts. 97 e 104'],
        summaryPoints: [
          'Imunidade alcança exclusivamente impostos, não atingindo taxas ou contribuições de melhoria.',
          'Anterioridade anual e noventena protegem a não surpresa do contribuinte.',
          'Imunidade recíproca estende-se a autarquias e fundações vinculadas às suas finalidades essenciais.'
        ]
      },
      {
        title: '2. Suspensão, Extinção e Exclusão do Crédito Tributário',
        content: `O Código Tributário Nacional prevê situações taxativas:
1. Suspensão da exigibilidade (art. 151): moratória, depósito do montante integral, reclamações/recursos administrativos, concessão de liminar em mandado de segurança ou tutela provisória, e parcelamento.
2. Extinção do crédito (art. 156): pagamento, compensação, transação, remissão, decadência e prescrição (5 anos), conversão do depósito em renda, entre outros.
3. Exclusão do crédito (art. 175): anistia (infrações) e isenção (tributo), que impedem a constituição do crédito sem dispensar as obrigações acessórias.`,
        keyStatutes: ['CTN, arts. 151, 156 e 175'],
        summaryPoints: [
          'Suspensão (art. 151): MODEPACO + Liminares.',
          'Extinção (art. 156): Pagamento, prescrição e decadência quinquenal.',
          'Exclusão (art. 175): Apenas isenção e anistia.'
        ]
      }
    ]
  },
  {
    id: 'mat-emp-01',
    title: 'Manual de Direito Empresarial: Sociedades, Títulos e Falência',
    disciplineId: 'empresarial',
    author: 'Dra. Vanessa Castilho · Advogada Empresarialista',
    estimatedReadTime: '17 min de leitura',
    description: 'Teoria da empresa (art. 966 CC), sociedade limitada, títulos de crédito e processo de recuperação judicial e falência.',
    chapters: [
      {
        title: '1. Teoria da Empresa e Sociedade Limitada',
        content: `Considera-se empresário quem exerce profissionalmente atividade econômica organizada para a produção ou circulação de bens ou serviços (art. 966 do CC). Não se considera empresário quem exerce profissão intelectual, de natureza científica, literária ou artística, salvo se o exercício constituir elemento de empresa (parágrafo único).
Na Sociedade Limitada (art. 1.052), a responsabilidade de cada sócio é restrita ao valor de suas quotas, mas todos respondem solidariamente pela integralização do capital social. Admite-se a Sociedade Limitada Unipessoal, constituída por uma única pessoa natural ou jurídica.`,
        keyStatutes: ['Arts. 966 e 1.052 do Código Civil'],
        summaryPoints: [
          'Elemento de empresa transforma atividade intelectual em empresarial.',
          'Solidariedade de todos os sócios limitada até a integralização do capital social.',
          'Admitida a Sociedade Limitada Unipessoal.'
        ]
      },
      {
        title: '2. Títulos de Crédito e Recuperação Judicial (Lei 11.101/05)',
        content: `Os títulos de crédito regem-se pela cartularidade, literalidade e autonomia (que se desdobra em abstração e inoponibilidade das exceções pessoais a terceiros de boa-fé). O aval é garantia cambial autônoma, diferenciando-se da fiança civil.
Na Lei 11.101/05 (Recuperação Judicial e Falência), o deferimento do processamento da recuperação gera o stay period: suspensão de todas as ações e execuções contra o devedor pelo prazo de 180 dias, prorrogável uma única vez por igual período (art. 6º, § 4º). Créditos trabalhistas e por acidente de trabalho devem ser adimplidos em até 1 ano.`,
        keyStatutes: ['Lei nº 11.101/2005, arts. 6º e 54', 'Arts. 887 e 897 do Código Civil'],
        summaryPoints: [
          'Stay period suspende ações e execuções por 180 dias prorrogáveis uma vez.',
          'Aval é ato cambial autônomo e não admite benefício de ordem.',
          'Crédito trabalhista na recuperação tem prioridade de quitação em até 1 ano.'
        ]
      }
    ]
  },
  {
    id: 'mat-amb-01',
    title: 'Guia de Direito Ambiental: Princípios, Licenciamento e Responsabilidade',
    disciplineId: 'ambiental',
    author: 'Prof. Renato Silveira · Mestre em Direito Socioambiental',
    estimatedReadTime: '15 min de leitura',
    description: 'Princípios da precaução e poluidor-pagador, tríplice responsabilidade ecológica e regime do Código Florestal.',
    chapters: [
      {
        title: '1. Princípios Basilares e Licenciamento Ambiental',
        content: `O art. 225 da CF/88 consagra o meio ambiente ecologicamente equilibrado como bem de uso comum do povo e essencial à sadia qualidade de vida.
Princípios nucleares:
- Prevenção: aplicável quando o dano e seus impactos científicos já são certos e conhecidos, exigindo medidas prévias mitigatórias.
- Precaução: incide quando houver incerteza científica sobre os riscos ecológicos de determinada intervenção, impondo a inversão do ônus da prova e a abstenção da atividade potencialmente gravosa.
- Poluidor-pagador: imputa ao causador o dever de internalizar os custos da degradação e restaurar o ecossistema.
O licenciamento ambiental compreende 3 etapas sucessivas: Licença Prévia (LP), Licença de Instalação (LI) e Licença de Operação (LO).`,
        keyStatutes: ['Art. 225 da CF/88', 'Lei nº 6.938/1981', 'Resolução CONAMA 237/97'],
        summaryPoints: [
          'Precaução = Incerteza científica impõe cautela e inversão do ônus probatório.',
          'Prevenção = Risco conhecido exige medidas preventivas diretas.',
          'Etapas do licenciamento: Licença Prévia (LP) -> Instalação (LI) -> Operação (LO).'
        ]
      },
      {
        title: '2. Responsabilidade Tripla e Obrigação Propter Rem',
        content: `A conduta lesiva ao meio ambiente enseja a responsabilização independente nas esferas civil, administrativa e penal (art. 225, § 3º da CF).
Na esfera civil, a responsabilidade é objetiva integral (sem admitir escusas de caso fortuito ou fato de terceiro). A obrigação de recompor a degradação ambiental possui natureza propter rem (acompanha a titularidade do imóvel), sendo solidariamente exigível do proprietário atual, ainda que a degradação tenha sido praticada por titular anterior (Súmula 623 do STJ).`,
        keyStatutes: ['Art. 225, § 3º da CF/88', 'Súmula 623 do STJ', 'Lei 9.605/98'],
        summaryPoints: [
          'Tríplice responsabilidade cumulativa: Civil, Penal e Administrativa.',
          'Responsabilidade civil ambiental é objetiva sob a teoria do risco integral.',
          'Súmula 623 STJ: Dever de reparar dano ambiental é obrigação propter rem.'
        ]
      }
    ]
  },
  {
    id: 'mat-inter-01',
    title: 'Manual de Direito Internacional: Tratados, Nacionalidade e Extradição',
    disciplineId: 'internacional',
    author: 'Dra. Carolina Freitas · Doutora em Direito Internacional',
    estimatedReadTime: '16 min de leitura',
    description: 'Processo de internalização de tratados, status dos tratados de Direitos Humanos, perda de nacionalidade e Lei de Migração.',
    chapters: [
      {
        title: '1. Incorporação de Tratados e Hierarquia Constitucional',
        content: `O processo de incorporação de tratados no Brasil exige: celebração pelo Presidente da República, aprovação pelo Congresso Nacional via Decreto Legislativo (art. 49, I da CF), ratificação e promulgação via Decreto Presidencial.
Hierarquia no ordenamento brasileiro:
- Tratados comuns: possuem força de lei ordinária federal.
- Tratados de Direitos Humanos aprovados pelo rito ordinário: possuem status supralegal (abaixo da CF e acima das leis ordinárias - RE 466.343/SP e Súmula Vinculante 25).
- Tratados de Direitos Humanos aprovados com quórum qualificado (duas votações em cada Casa do Congresso por 3/5 dos votos - art. 5º, § 3º): equivalem a Emendas Constitucionais.`,
        keyStatutes: ['Art. 5º, § 3º da CF/88', 'Súmula Vinculante 25 do STF', 'Convenção de Viena de 1969'],
        summaryPoints: [
          'Tratados comuns = Força de lei ordinária federal.',
          'Tratados de DH comuns = Status supralegal (paralisa leis contrárias).',
          'Tratados de DH pelo art. 5º, § 3º = Equivalem a Emenda Constitucional.'
        ]
      },
      {
        title: '2. Nacionalidade, Deporte, Expulsão e Extradição',
        content: `O Brasil adota o jus soli mitigado (nascidos no território brasileiro, ainda que de pais estrangeiros, desde que não estejam a serviço de seu país).
Brasileiro nato NUNCA pode ser extraditado (art. 5º, LI). O brasileiro naturalizado somente pode sê-lo em caso de crime comum cometido antes da naturalização ou de comprovado envolvimento em tráfico ilícito de entorpecentes a qualquer tempo.
Na Lei de Migração (Lei 13.445/17):
- Repatriação: devolução imediata do indivíduo inadmitido no ingresso.
- Deformação/Deportação: medida administrativa de saída por situação migratória irregular.
- Expulsão: retirada compulsória decorrente de condenação penal por dolo com trânsito em julgado.`,
        keyStatutes: ['Art. 12 da CF/88', 'Art. 5º, LI e LII da CF/88', 'Lei nº 13.445/2017 (Lei de Migração)'],
        summaryPoints: [
          'Brasileiro nato jamais pode ser extraditado.',
          'Naturalizado só é extraditado por crime anterior ou tráfico de drogas a qualquer tempo.',
          'Expulsão fundamenta-se em sentença penal condenatória transitada em julgado.'
        ]
      }
    ]
  },
  {
    id: 'mat-dh-01',
    title: 'Guia de Direitos Humanos e Sistema Interamericano',
    disciplineId: 'direitos-humanos',
    author: 'Prof. Thiago Meirelles · Especialista em Direitos Fundamentais',
    estimatedReadTime: '15 min de leitura',
    description: 'Pacto de San José da Costa Rica (CADH), controle de convencionalidade e atuação da Comissão e Corte IDH.',
    chapters: [
      {
        title: '1. Teoria Geral e Pacto de San José da Costa Rica (CADH)',
        content: `Os direitos humanos são universais, imprescritíveis, inalienáveis, irrenunciáveis e indivisíveis. Dividem-se didaticamente em gerações/dimensões: 1ª (liberdades individuais/civis e políticas), 2ª (direitos sociais, econômicos e culturais/igualdade) e 3ª (fraternidade e solidariedade/paz e meio ambiente).
A Convenção Americana sobre Direitos Humanos (CADH - Pacto de San José de 1969) foi ratificada pelo Brasil em 1992, consagrando a vedação da prisão civil por dívida do depositário infiel (restando unicamente a do devedor inescusável de pensão alimentícia - Súmula Vinculante 25).`,
        keyStatutes: ['CADH (Decreto nº 678/1992)', 'Súmula Vinculante 25 do STF'],
        summaryPoints: [
          'Gerações: 1ª (Liberdade), 2ª (Igualdade), 3ª (Fraternidade/Meio Ambiente).',
          'Vedação da prisão de depositário infiel após a CADH.',
          'Pacto de San José possui status supralegal na ordem constitucional brasileira.'
        ]
      },
      {
        title: '2. Controle de Convencionalidade e Sistema Interamericano (CIDH e Corte IDH)',
        content: `O controle de convencionalidade impõe que juízes e autoridades públicas analisem a compatibilidade das normas domésticas com os tratados internacionais de direitos humanos ratificados pelo país.
O Sistema Interamericano possui estrutura dúplice:
1. Comissão Interamericana de Direitos Humanos (Washington): recebe petições de indivíduos, ongs ou grupos, emite relatórios e recomendações e atua como filtro de admissibilidade.
2. Corte Interamericana de Direitos Humanos (San José): órgão judicial. Indivíduos não têm legitimidade ativa direta perante a Corte IDH (apenas a Comissão ou os Estados partes podem acioná-la). Suas sentenças condenatórias são definitivas, inapeláveis e vinculantes para o Estado condenado.`,
        keyStatutes: ['Arts. 44 a 69 da Convenção Americana de Direitos Humanos'],
        summaryPoints: [
          'Controle de convencionalidade deve ser realizado de ofício pelos magistrados nacionais.',
          'Indivíduos acessam a Comissão Interamericana, que submete o caso à Corte.',
          'Decisões condenatórias da Corte IDH possuem força executiva perante a Justiça Federal.'
        ]
      }
    ]
  },
  {
    id: 'mat-cdc-01',
    title: 'Manual de Direito do Consumidor: Vício, Fato do Produto e Contratos',
    disciplineId: 'consumidor',
    author: 'Dra. Tatiane Moreira · Especialista em Relações de Consumo',
    estimatedReadTime: '16 min de leitura',
    description: 'Código de Defesa do Consumidor (Lei 8.078/90), vício versus defeito, decadência e direito de arrependimento.',
    chapters: [
      {
        title: '1. Acidente de Consumo (Fato) versus Vício do Produto/Serviço',
        content: `Diferença fulcral cobrada nos exames da OAB:
- Vício (arts. 18 e 20): problema intrínseco de quantidade ou qualidade que torna o produto inadequado ao fim a que se destina ou lhe diminui o valor. Responsabilidade solidária entre fabricante, produtor e comerciante. Prazo decadencial: 30 dias (produtos não duráveis) e 90 dias (produtos duráveis).
- Fato do Produto/Serviço (Acidente de Consumo - arts. 12 e 14): quando o defeito transborda o produto e atinge a incolumidade física, psíquica ou patrimonial do consumidor. Responsabilidade do fabricante é direta e objetiva; a responsabilidade do comerciante é subsidiária (art. 13 - quando o fabricante não puder ser identificado ou o comerciante não conservar adequadamente perecíveis). Prazo prescricional: 5 anos (art. 27).`,
        keyStatutes: ['CDC, arts. 12 a 14 (Fato)', 'CDC, arts. 18 a 20 (Vício)', 'CDC, arts. 26 e 27'],
        summaryPoints: [
          'Vício = Dano estrito ao produto (Decadência: 30d não duráveis, 90d duráveis).',
          'Fato/Defeito = Acidente de consumo com dano à integridade do usuário (Prescrição: 5 anos).',
          'Comerciante responde subsidiariamente pelo fato do produto (art. 13 CDC).'
        ]
      },
      {
        title: '2. Práticas Abusivas e Direito de Arrependimento (Art. 49)',
        content: `O CDC estabelece a inversão ope legis do ônus da prova nos casos de responsabilidade pelo fato e ope judicis nas demais hipóteses (verossimilhança ou hipossuficiência técnica - art. 6º, VIII).
O art. 49 consagra o Direito de Arrependimento para contratações celebradas fora do estabelecimento comercial (pela internet, telefone ou catálogo): o consumidor tem prazo de 7 (sete) dias corridos a contar da assinatura ou recebimento para desistir, com restituição imediata e integral dos valores pagos, inclusive frete. Cláusulas contratuais de renúncia a esse direito são nulas de pleno direito.`,
        keyStatutes: ['Art. 6º, VIII do CDC', 'Art. 49 do CDC', 'Art. 51 do CDC'],
        summaryPoints: [
          'Direito de arrependimento: 7 dias para compras fora do estabelecimento comercial físico.',
          'Devolução de valores é imediata e inclui eventuais despesas postais.',
          'Inversão do ônus probatório ope legis na responsabilidade pelo fato.'
        ]
      }
    ]
  },
  {
    id: 'mat-eca-01',
    title: 'Guia do Estatuto da Criança e do Adolescente (Lei 8.069/90)',
    disciplineId: 'crianca-adolescente',
    author: 'Prof. Marcelo Brandão · Promotor da Infância e Juventude',
    estimatedReadTime: '15 min de leitura',
    description: 'Ato infracional, medidas socioeducativas, internação, convivência familiar, guarda, tutela e adoção.',
    chapters: [
      {
        title: '1. Ato Infracional e Medidas Socioeducativas',
        content: `Considera-se criança a pessoa até 12 (doze) anos de idade incompletos, e adolescente aquela entre 12 e 18 anos.
Ato infracional: conduta descrita como crime ou contravenção penal praticada por criança ou adolescente. Crianças são submetidas exclusivamente a medidas de proteção (art. 101 do ECA). Adolescentes sujeitam-se a medidas socioeducativas: advertência, obrigação de reparar o dano, prestação de serviços à comunidade, liberdade assistida, semiliberdade e internação (art. 112).
A internação constitui medida privativa de liberdade excepcional e breve, sem prazo determinado (máximo de 3 anos, reavaliada a cada 6 meses), cabível apenas em crimes com violência ou grave ameaça, reiteração grave ou descumprimento reiterado de medida anterior.`,
        keyStatutes: ['Arts. 2º, 101, 112 e 121 a 122 do ECA'],
        summaryPoints: [
          'Criança (até 12 incompletos) = apenas medidas protetivas.',
          'Adolescente (12 a 18 incompletos) = medidas socioeducativas.',
          'Internação é medida extrema limitada ao prazo improrrogável de 3 anos.'
        ]
      },
      {
        title: '2. Colocação em Família Substituta e Conselho Tutelar',
        content: `A colocação em família substituta far-se-á mediante guarda, tutela ou adoção (art. 28). A adoção é medida excepcional e irrevogável, que confere o estado de filho ao adotado e desvincula-o de qualquer laço com pais e parentes biológicos, salvo os impedimentos matrimoniais. Diferença de idade mínima entre adotante e adotando deve ser de 16 (dezesseis) anos.
O Conselho Tutelar é órgão permanente, autônomo e não jurisdicional encarregado pela sociedade de zelar pelo cumprimento dos direitos da criança e do adolescente. É composto por 5 membros eleitos pelos cidadãos do município para mandato de 4 anos.`,
        keyStatutes: ['Arts. 39 a 52 do ECA (Adoção)', 'Arts. 131 a 136 do ECA (Conselho Tutelar)'],
        summaryPoints: [
          'Adoção é irrevogável e extingue laços com a família biológica.',
          'Diferença etária mínima de 16 anos entre adotante e adotado.',
          'Conselho Tutelar é órgão não jurisdicional e atua de ofício na proteção integral.'
        ]
      }
    ]
  },
  {
    id: 'mat-prev-01',
    title: 'Manual de Direito Previdenciário: Benefícios, Segurados e Reforma',
    disciplineId: 'previdenciario',
    author: 'Dra. Cristiane Fontes · Especialista em Seguridade Social',
    estimatedReadTime: '17 min de leitura',
    description: 'Segurados do RGPS, carência, benefício por incapacidade temporária, pensão por morte e novidades da EC 103/19.',
    chapters: [
      {
        title: '1. Seguridade Social e Segurados do RGPS',
        content: `A Seguridade Social compreende um conjunto integrado de ações de iniciativa dos poderes públicos e da sociedade destinadas a assegurar os direitos relativos à Saúde, Previdência e Assistência Social (o tripé da seguridade - art. 194 da CF). Apenas a Previdência Social possui caráter contributivo e filiação compulsória.
Segurados Obrigatórios da Previdência Social (art. 11 da Lei 8.213/91):
1. Empregado (inclusive doméstico).
2. Trabalhador avulso.
3. Contribuinte individual (profissionais autônomos e liberais).
4. Segurado especial (produtor rural familiar e pescador artesanal que trabalham em regime de economia familiar sem empregados permanentes).
Já o segurado facultativo é aquele que não exerce atividade remunerada (ex.: estudante, dona de casa) e opta por contribuir.`,
        keyStatutes: ['Art. 194 e 201 da CF/88', 'Lei nº 8.213/1991, arts. 11 a 14'],
        summaryPoints: [
          'Saúde e Assistência independem de contribuição; Previdência é estritamente contributiva.',
          'Segurado especial não contribui sobre remuneração fixa, mas sobre comercialização da produção.',
          'Segurado facultativo exige idade mínima de 16 anos.'
        ]
      },
      {
        title: '2. Regras de Benefícios e a Reforma da Previdência (EC 103/19)',
        content: `Aposentadoria Programada: com a extinção da aposentadoria por tempo de contribuição para novos inscritos, a idade mínima geral no RGPS é de 65 anos para o homem e 62 anos para a mulher, observados o tempo de contribuição mínimo de 20 anos (homens) e 15 anos (mulheres).
Pensão por Morte: após a EC 103/19, a cota familiar corresponde a 50% do valor da aposentadoria, acrescida de cotas de 10% por dependente até o limite de 100%. A dependência do cônjuge e dos filhos menores de 21 anos é presumida por lei (art. 16, I e § 4º da Lei 8.213/91).`,
        keyStatutes: ['Emenda Constitucional nº 103/2019', 'Lei nº 8.213/1991, art. 74'],
        summaryPoints: [
          'Idade mínima urbana: 65 anos (homem) e 62 anos (mulher).',
          'Pensão por morte tem cota base de 50% + 10% por dependente.',
          'Cônjuge e filhos menores de 21 anos possuem dependência econômica presumida.'
        ]
      }
    ]
  },
  {
    id: 'mat-fin-01',
    title: 'Compêndio de Direito Financeiro: Orçamento e Responsabilidade Fiscal',
    disciplineId: 'financeiro',
    author: 'Prof. Leonardo Arantes · Auditor de Controle Externo',
    estimatedReadTime: '15 min de leitura',
    description: 'Leis orçamentárias (PPA, LDO e LOA), princípios orçamentários e limites de despesa com pessoal da LRF.',
    chapters: [
      {
        title: '1. O Modelo Orçamentário Constitucional (PPA, LDO e LOA)',
        content: `A CF/88 estabelece a tríade de leis orçamentárias de iniciativa privativa do Chefe do Poder Executivo (art. 165):
1. Plano Plurianual (PPA): estabelece de forma regionalizada as diretrizes, objetivos e metas da administração para despesas de capital e programas de duração continuada (vigência de 4 anos).
2. Lei de Diretrizes Orçamentárias (LDO): compreende as metas e prioridades para o exercício seguinte, orienta a elaboração da LOA e dispõe sobre alterações tributárias e política de agências financeiras oficiais.
3. Lei Orçamentária Anual (LOA): compreende o orçamento fiscal, o orçamento de investimento das estatais e o orçamento da seguridade social.
Princípios Orçamentários: Legalidade, Anualidade/Periodicidade, Unidade, Universalidade e Exclusividade (art. 165, § 8º - a LOA não conterá matéria estranha à previsão de receitas e fixação de despesas).`,
        keyStatutes: ['Art. 165 da CF/88', 'Art. 166 da CF/88'],
        summaryPoints: [
          'PPA = 4 anos, planejamento estratégico e programas contínuos.',
          'LDO = Anual, ponte entre PPA e LOA, fixa metas e prioridades.',
          'Princípio da Exclusividade veda matérias estranhas na Lei Orçamentária.'
        ]
      },
      {
        title: '2. Lei de Responsabilidade Fiscal (LC 101/00) e Despesa com Pessoal',
        content: `A LRF impõe limites estritos de responsabilidade na gestão fiscal da União, Estados e Municípios.
Limites de despesa total com pessoal ativo e inativo (art. 19 da LRF):
- União: 50% da Receita Corrente Líquida (RCL).
- Estados: 60% da RCL.
- Municípios: 60% da RCL.
Quando a despesa com pessoal ultrapassar 95% do limite legal (limite prudencial), aplicam-se vedações imediatas: proibição de concessão de vantagens e reajustes, criação de cargos e contratação de horas extras. O descumprimento injustificado acarreta sanções institucionais e enquadramento em crimes contra as finanças públicas (art. 359-A a 359-H do CP).`,
        keyStatutes: ['LC nº 101/2000 (LRF), arts. 19 a 23', 'Código Penal, arts. 359-A a 359-H'],
        summaryPoints: [
          'Despesa com pessoal: União 50%, Estados e Municípios 60% da RCL.',
          'Limite prudencial atinge 95% do teto e congela novas contratações.',
          'Infrações geram crimes contra as finanças públicas.'
        ]
      }
    ]
  },
  {
    id: 'mat-eleit-01',
    title: 'Guia de Direito Eleitoral: Elegibilidade, Inelegibilidades e Propaganda',
    disciplineId: 'eleitoral',
    author: 'Dra. Patrícia Dantas · Advogada Eleitoralista',
    estimatedReadTime: '16 min de leitura',
    description: 'Condições constitucionais de elegibilidade, Lei da Ficha Limpa (LC 135/10) e ações eleitorais essenciais.',
    chapters: [
      {
        title: '1. Condições de Elegibilidade e Causas de Inelegibilidade',
        content: `São condições de elegibilidade (art. 14, § 3º da CF/88): nacionalidade brasileira, pleno exercício dos direitos políticos, alistamento eleitoral, domicílio eleitoral na circunscrição, filiação partidária e idade mínima na data da posse (salvo para vereador, que exige 18 anos na data do registro):
- 35 anos: Presidente, Vice e Senador.
- 30 anos: Governador e Vice-Governador.
- 21 anos: Deputados, Prefeito, Vice-Prefeito e Juiz de Paz.
- 18 anos: Vereador.
São absolutamente inelegíveis os inalistáveis e os analfabetos (art. 14, § 4º).
A Lei da Ficha Limpa (LC 135/10 alterou a LC 64/90): condenações criminais por órgão judicial colegiado em crimes contra a administração, vida ou patrimônio ensejam inelegibilidade desde a condenação até 8 anos após o cumprimento da pena.`,
        keyStatutes: ['Art. 14 da CF/88', 'LC nº 64/1990 (alterada pela LC 135/2010)'],
        summaryPoints: [
          'Idades mínimas: 35 (Presidente/Senador), 30 (Governador), 21 (Deputado/Prefeito), 18 (Vereador).',
          'Analfabetos são elegíveis de voto facultativo, porém absolutamente inelegíveis para cargos políticos.',
          'Ficha Limpa gera inelegibilidade por 8 anos após o cumprimento da pena.'
        ]
      },
      {
        title: '2. Ações Eleitorais: AIJE, AIME e RCED',
        content: `As principais demandas judiciais eleitorais possuem objetos e ritos bem delimitados:
1. Ação de Investigação Judicial Eleitoral (AIJE - art. 22 da LC 64/90): apura uso indevido, desvio ou abuso do poder econômico ou do poder de autoridade. Pode ser proposta até a diplomação e gera inelegibilidade e cassação de registro ou diploma.
2. Ação de Impugnação de Mandato Eletivo (AIME - art. 14, § 10 da CF/88): proposta perante a Justiça Eleitoral no prazo decadencial de 15 (quinze) dias contados da diplomação, instruída com provas de abuso do poder econômico, corrupção ou fraude, tramitando em segredo de justiça.`,
        keyStatutes: ['Art. 14, §§ 10 e 11 da CF/88 (AIME)', 'Art. 22 da LC nº 64/1990 (AIJE)'],
        summaryPoints: [
          'AIJE pode ser ajuizada durante a campanha até a diplomação.',
          'AIME deve ser ajuizada em 15 dias após a diplomação e corre em segredo de justiça.',
          'Causas de AIME: Abuso de poder econômico, corrupção e fraude.'
        ]
      }
    ]
  },
  {
    id: 'mat-filo-01',
    title: 'Manual de Filosofia do Direito: Das Leis Naturais ao Pós-Positivismo',
    disciplineId: 'filosofia',
    author: 'Prof. Dr. Eduardo Sampaio · Doutor em Filosofia Jurídica',
    estimatedReadTime: '16 min de leitura',
    description: 'Jusnaturalismo clássico e moderno, Positivismo Jurídico (Kelsen e Hart) e teoria dos princípios de Dworkin e Alexy.',
    chapters: [
      {
        title: '1. O Duelo entre Jusnaturalismo e Positivismo Jurídico',
        content: `O Jusnaturalismo afirma a existência de um Direito Natural imutável, universal e superior ao direito positivo, fundado na natureza humana, na razão divina ou na razão prática (Tomás de Aquino, Grócio, Locke).
O Positivismo Jurídico opera a cisão rigorosa entre o Direito que "é" e o Direito que "deve ser" (moral e política). Hans Kelsen, em sua Teoria Pura do Direito, concebe a norma jurídica como um juízo hipotético de imputação sancionatória ("se A é, B deve ser"), cuja validade apoia-se em uma Norma Fundamental hipotética (Grundnorm) no topo da pirâmide estática/dinâmica. Já H.L.A. Hart introduz a distinção entre regras primárias (imposição de deveres) e regras secundárias (reconhecimento, alteração e adjudicação).`,
        keyStatutes: ['Teoria Pura do Direito (Hans Kelsen)', 'O Conceito de Direito (H.L.A. Hart)'],
        summaryPoints: [
          'Jusnaturalismo: Subordinação da validade da lei à justiça substancial.',
          'Positivismo Kelseniano: Pureza metódica e validade formal apoiada na Norma Fundamental.',
          'Hart: União de regras primárias (deveres) e regras secundárias (reconhecimento).'
        ]
      },
      {
        title: '2. Pós-Positivismo e Teoria dos Princípios (Dworkin e Alexy)',
        content: `O Pós-Positivismo reintroduz os valores éticos e morais no coração do Direito, alçando os princípios a normas jurídicas dotadas de plena força normativa.
Ronald Dworkin rebate o positivismo de Hart sustentando que o sistema jurídico não é composto apenas de regras aplicáveis na lógica do "tudo ou nada" (all-or-nothing), mas primordialmente de princípios e diretrizes políticas, defendendo a existência de uma "única resposta correta" (one right answer) obtida pelo Juiz Hércules sob o primado da integridade do direito.
Robert Alexy conceitua os princípios como "mandamentos de otimização", que ordenam que algo seja realizado na maior medida possível dentro das possibilidades fáticas e jurídicas, solucionando as colisões entre princípios mediante a técnica da Ponderação e o princípio da Proporcionalidade.`,
        keyStatutes: ['Levando os Direitos a Sério (Ronald Dworkin)', 'Teoria dos Direitos Fundamentais (Robert Alexy)'],
        summaryPoints: [
          'Dworkin: Regras são aplicadas no modo tudo-ou-nada; princípios têm dimensão de peso.',
          'Alexy: Princípios como mandamentos de otimização sujeitos à técnica da ponderação.',
          'O pós-positivismo supera o dogma positivista da discricionariedade judicial arbitrária.'
        ]
      }
    ]
  }
];

const fileContent = `import { StudyMaterial } from '../types';

export const STUDY_MATERIALS: StudyMaterial[] = ${JSON.stringify(MATERIALS, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/data/studyMaterials.ts'), fileContent, 'utf8');
console.log(`Generated ${MATERIALS.length} study materials in src/data/studyMaterials.ts successfully!`);
