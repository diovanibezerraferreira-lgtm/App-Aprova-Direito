# -*- coding: utf-8 -*-
import json

def get_part3_questions():
    questions = []

    # ---------------------------------------------------------
    # 9. DIREITO PREVIDENCIÁRIO
    # ---------------------------------------------------------
    prev_specs = [
        ("Período de Graça e Manutenção da Qualidade de Segurado", "Médio",
         "José trabalhou com carteira assinada por 12 anos ininterruptos (mais de 130 contribuições mensais sem perda de vínculo). Foi demitido sem justa causa e permaneceu desempregado involuntariamente comprovado. O prazo máximo de manutenção da qualidade de segurado (período de graça) de José é de:",
         [("A", "12 meses a contar da cessação das contribuições."),
          ("B", "Até 36 meses, somando o prazo básico de 12 meses, mais 12 meses por ter mais de 120 contribuições sem perda, e mais 12 meses em razão do desemprego involuntário comprovado."),
          ("C", "6 meses pela regra geral dos empregados urbanos."),
          ("D", "Prazo perpétuo ante o direito adquirido à condição de segurado.")],
         "B",
         "Art. 15, II, § 1º e § 2º, da Lei nº 8.213/1991: O segurado mantém a qualidade de segurado até 12 meses após a cessação das contribuições; o prazo é prorrogado para 24 meses se tiver mais de 120 contribuições sem perda, e acrescido de mais 12 meses se comprovado desemprego involuntário (totalizando 36 meses).",
         "Lei nº 8.213/1991, art. 15, II, §§ 1º e 2º; Súmula 27 da TNU."),

        ("Segurado Especial Rural - Economia Familiar", "Fácil",
         "Joana e seu esposo cultivam hortaliças em imóvel rural de 2 módulos fiscais para a própria subsistência e comercialização de excedentes, em regime de economia familiar sem empregados permanentes. O enquadramento previdenciário de Joana é de:",
         [("A", "Contribuinte individual obrigatório."),
          ("B", "Segurada especial, dispensada de contribuição mensal fixa e com recolhimento incidente sobre a comercialização da produção rural."),
          ("C", "Segurada facultativa de baixa renda."),
          ("D", "Empregada rural por equiparação compulsória.")],
         "B",
         "Art. 11, VII, da Lei nº 8.213/1991: É segurado especial o produtor, o parceiro, o meeiro e o arrendatário rurais que exerçam suas atividades em regime de economia familiar, sem empregados permanentes, em área de até 4 módulos fiscais.",
         "Lei nº 8.213/1991, art. 11, VII; CF/88, art. 195, § 8º."),

        ("Dependentes - Classes e Presunção de Dependência", "Médio",
         "Segurado do RGPS faleceu deixando esposa, filho menor de 14 anos e seus pais idosos economicamente dependentes. De acordo com o art. 16 da Lei nº 8.213/1991, a pensão por morte será rateada entre:",
         [("A", "Esposa, filho menor e os pais em cotas iguais de 25% para cada um."),
          ("B", "Exclusivamente entre a esposa e o filho menor (dependentes de 1ª classe), cuja existência exclui do direito às prestações os dependentes das classes seguintes (pais)."),
          ("C", "Apenas a esposa como cabeça do casal conjugal."),
          ("D", "Os pais prioritariamente ante o Estatuto da Pessoa Idosa.")],
         "B",
         "Art. 16, § 4º, da Lei nº 8.213/1991: A dependência econômica das pessoas indicadas no inciso I (cônjuge/companheiro e filhos menores) é presumida e a das demais deve ser comprovada. O § 1º estabelece que a existência de dependente de qualquer das classes deste artigo exclui do direito às prestações os das classes seguintes.",
         "Lei nº 8.213/1991, art. 16, I, II e § 1º e § 4º."),

        ("Benefício de Prestação Continuada (BPC/LOAS)", "Fácil",
         "Senhor de 67 anos de idade que nunca contribuiu para a Previdência Social vive em situação de extrema vulnerabilidade social e miserabilidade comprovada. Sobre o seu direito ao BPC/LOAS:",
         [("A", "Não tem direito a nenhum benefício por ausência de carência de 180 contribuições."),
          ("B", "Tem direito ao Benefício de Prestação Continuada (BPC) no valor de 1 salário-mínimo mensal, de natureza assistencial, independentemente de prévia contribuição previdenciária."),
          ("C", "Recebe aposentadoria por idade com gratificação natalina de 13º salário."),
          ("D", "O benefício assistencial é vitalício e se transfere como pensão aos herdeiros.")],
         "B",
         "Art. 203, V, da CF/88 e Art. 20 da Lei nº 8.742/1993 (LOAS): A assistência social garante um salário-mínimo de benefício mensal à pessoa com deficiência e ao idoso com 65 anos ou mais que comprovem não possuir meios de prover à própria manutenção nem de tê-la provida por sua família, independentemente de contribuição.",
         "CF/88, art. 203, V; Lei nº 8.742/1993, art. 20."),

        ("Auxílio-Acidente - Natureza Indenizatória", "Médio",
         "Empregado sofreu acidente de trabalho que acarretou a amputação de um dedo da mão, resultando em sequela definitiva que reduziu sua capacidade habitual de trabalho. Após a alta médica e cessação do auxílio por incapacidade temporária, ele tem direito ao:",
         [("A", "Auxílio-acidente, benefício de natureza estritamente indenizatória que pode ser cumulado com o salário do trabalho."),
          ("B", "Aposentadoria por incapacidade permanente com adicional de 25%."),
          ("C", "Apenas indenização cível da empresa sem prestação previdenciária."),
          ("D", "Pensão alimentícia vitalícia paga pelo INSS.")],
         "A",
         "Art. 86 da Lei nº 8.213/1991: O auxílio-acidente será concedido, como indenização, ao segurado quando, após consolidação das lesões decorrentes de acidente de qualquer natureza, resultarem sequelas que impliquem redução da capacidade para o trabalho que habitualmente exercia.",
         "Lei nº 8.213/1991, art. 86, caput e § 2º; Súmula 507 do STJ.")
    ]

    for i, item in enumerate(prev_specs):
        questions.append({
            "id": f"q-prev-{i+1:03d}",
            "disciplineId": "previdenciario",
            "subject": item[0],
            "difficulty": item[1],
            "statement": item[2],
            "options": [{"id": o[0], "text": o[1]} for o in item[3]],
            "correctOptionId": item[4],
            "explanation": item[5],
            "legalFoundation": item[6],
            "examReference": "Simulado Preparatório OAB · Direito Previdenciário"
        })

    # ---------------------------------------------------------
    # 10. DIREITO FINANCEIRO
    # ---------------------------------------------------------
    fin_specs = [
        ("Princípio da Exclusividade Orçamentária", "Fácil",
         "Lei Orçamentária Anual (LOA) de determinado Estado incluiu artigo alterando as alíquotas do Código Tributário Estadual e outro dispondo sobre a reorganização de carreiras da Polícia Militar. Os referidos artigos violam o:",
         [("A", "Princípio da universalidade orçamentária."),
          ("B", "Princípio da exclusividade orçamentária, que proíbe a inclusão na LOA de matéria estranha à previsão da receita e à fixação da despesa, ressalvada a autorização para créditos suplementares e operações de crédito."),
          ("C", "Princípio da anualidade das contas públicas."),
          ("D", "Princípio da publicidade formal das leis ordinárias.")],
         "B",
         "Art. 165, § 8º, da CF/88: A lei orçamentária anual não conterá dispositivo estranho à previsão da receita e à fixação da despesa, não se incluindo na proibição a autorização para abertura de créditos suplementares e contratação de operações de crédito (Princípio da Exclusividade).",
         "CF/88, art. 165, § 8º."),

        ("Créditos Adicionais - Extraordinários e Calamidade", "Médio",
         "Diante de severa enchente que destruiu hospitais e pontes, o Governador necessita abrir créditos adicionais para socorro imediato à população sem prévia autorização em lei orçamentária ordinária. A modalidade adequada e o instrumento são:",
         [("A", "Crédito suplementar por decreto executivo simples."),
          ("B", "Crédito extraordinário, aberto por medida provisória ou decreto, destinado exclusivamente a despesas imprevisíveis e urgentes, como as decorrentes de guerra, comoção interna ou calamidade pública."),
          ("C", "Crédito especial dependente de audiência pública prévia."),
          ("D", "Operação de crédito contratada sem teto financeiro.")],
         "B",
         "Art. 167, § 3º, da CF/88 e Art. 41, III, da Lei nº 4.320/1964: Os créditos extraordinários destinam-se a atender a despesas imprevisíveis e urgentes, como as decorrentes de guerra, comoção interna ou calamidade pública, abertos por medida provisória onde couber.",
         "CF/88, art. 167, § 3º; Lei nº 4.320/1964, art. 41, III e art. 44."),

        ("Regra de Ouro Constitucional", "Difícil",
         "O Poder Executivo pretende contrair empréstimo bancário mediante operação de crédito para custear o pagamento da folha mensal de pessoal de servidores públicos da ativa. De acordo com o Art. 167, III, da CF/88 (Regra de Ouro):",
         [("A", "É permitido sem qualquer restrição, pois pagamento de pessoal é prioridade absoluta."),
          ("B", "É vedada a realização de operações de créditos que excedam o montante das despesas de capital, ressalvadas as autorizadas mediante créditos suplementares ou especiais com finalidade precisa, aprovados pelo Poder Legislativo por maioria absoluta."),
          ("C", "A operação só depende de parecer favorável do Ministério da Fazenda."),
          ("D", "Permite-se a operação se a taxa de juros for inferior à taxa Selic.")],
         "B",
         "Art. 167, III, da CF/88: É vedada a realização de operações de créditos que excedam o montante das despesas de capital, ressalvadas as autorizadas mediante créditos suplementares ou especiais com finalidade precisa, aprovados pelo Poder Legislativo por maioria absoluta de seus membros (Princípio da Não Afetação / Regra de Ouro).",
         "CF/88, art. 167, III."),

        ("LRF - Limites de Despesa com Pessoal nos Municípios", "Médio",
         "Em determinado Município, a despesa total com pessoal do Poder Executivo atingiu 58% da Receita Corrente Líquida (RCL), superando o limite máximo legal de 54%. Conforme a Lei de Responsabilidade Fiscal (LC 101/2000), a primeira medida obrigatória a ser adotada é:",
         [("A", "Exonerar de imediato os servidores públicos estáveis com mais de 20 anos de serviço."),
          ("B", "Reduzir em pelo menos 20% as despesas com cargos em comissão e funções de confiança, além de exonerar servidores não estáveis."),
          ("C", "Suspender o repasse de verbas constitucionais à Saúde e à Educação."),
          ("D", "Decretar moratória e calote na dívida pública municipal fundada.")],
         "B",
         "Art. 169, §§ 3º e 4º, da CF/88 e Arts. 19 a 23 da Lei de Responsabilidade Fiscal (LC 101/2000): Ultrapassado o limite, as medidas escalonadas são: 1º) redução de pelo menos 20% das despesas com cargos em comissão e confiança; 2º) exoneração de servidores não estáveis; 3º) apenas se insuficiente, perda de cargo de servidor estável.",
         "CF/88, art. 169, §§ 3º e 4º; LC nº 101/2000, art. 23."),

        ("Restos a Pagar - Último Ano de Mandato", "Médio",
         "Nos últimos 8 meses de seu mandato, o Prefeito celebrou contratos de prestação de serviços gerando obrigações de despesa cujas parcelas serão pagas no mandato seguinte, sem que haja suficiente disponibilidade de caixa. Essa conduta:",
         [("A", "É lícita caso o novo prefeito seja do mesmo partido político."),
          ("B", "É expressamente vedada pelo Art. 42 da Lei de Responsabilidade Fiscal, constituindo crime contra as finanças públicas sob o Art. 359-C do Código Penal."),
          ("C", "Configura mera irregularidade contábil sanável pelo Tribunal de Contas."),
          ("D", "É permitida se os contratos forem precedidos de licitação por pregão.")],
         "B",
         "Art. 42 da LRF (LC 101/2000): É vedado ao titular de Poder ou órgão contrair obrigação de despesa que não possa ser cumprida integralmente dentro do mandato, ou que tenha parcelas a serem pagas no exercício seguinte sem que haja suficiente disponibilidade de caixa. Constitui crime previsto no art. 359-C do Código Penal.",
         "LC nº 101/2000, art. 42; Código Penal, art. 359-C.")
    ]

    for i, item in enumerate(fin_specs):
        questions.append({
            "id": f"q-fin-{i+1:03d}",
            "disciplineId": "financeiro",
            "subject": item[0],
            "difficulty": item[1],
            "statement": item[2],
            "options": [{"id": o[0], "text": o[1]} for o in item[3]],
            "correctOptionId": item[4],
            "explanation": item[5],
            "legalFoundation": item[6],
            "examReference": "Simulado Preparatório OAB · Direito Financeiro"
        })

    # ---------------------------------------------------------
    # 11. DIREITO ELEITORAL
    # ---------------------------------------------------------
    eleit_specs = [
        ("Condições de Elegibilidade - Idade Mínima", "Fácil",
         "Rodrigo completou 21 anos de idade no dia da eleição municipal e pretende disputar o cargo de Prefeito de sua cidade natal, preenchendo todos os demais requisitos legais. Quanto à idade mínima exigida:",
         [("A", "Rodrigo é inelegível, pois o cargo de Prefeito exige 30 anos completos."),
          ("B", "Rodrigo é plenamente elegível, pois a idade mínima constitucional para o cargo de Prefeito é de 21 anos, aferida no dia da posse."),
          ("C", "A idade mínima para Prefeito é de 18 anos completos na convenção partidária."),
          ("D", "Rodrigo só pode concorrer a Vereador, cargo que exige 25 anos de idade.")],
         "B",
         "Art. 14, § 3º, VI, 'c', da CF/88 e Art. 11, § 2º, da Lei 9.504/97: São condições de elegibilidade a idade mínima de 21 anos para Deputado Federal, Deputado Estadual ou Distrital, Prefeito, Vice-Prefeito e juiz de paz, aferida na data da posse.",
         "CF/88, art. 14, § 3º, VI, 'c'; Lei nº 9.504/1997, art. 11, § 2º."),

        ("Inelegibilidade Reflexa - Súmula Vinculante 18 do STF", "Médio",
         "Esposa do Governador do Estado em exercício do segundo mandato divorciou-se do cônjuge no último ano de mandato dele e pretende registrar candidatura a Deputada Estadual na mesma unidade federativa. Conforme a Súmula Vinculante 18 do STF:",
         [("A", "O divórcio extingue de plano todo e qualquer impedimento eleitoral."),
          ("B", "A dissolução da sociedade conjugal, no curso do mandato, não afasta a inelegibilidade reflexa do art. 14, § 7º, da Constituição Federal para as eleições subsequentes no território de jurisdição do titular."),
          ("C", "A inelegibilidade persiste apenas para a eleição municipal da capital."),
          ("D", "A ex-cônjuge pode concorrer caso comprove separação de corpos há 90 dias.")],
         "B",
         "Súmula Vinculante 18 do STF: 'A dissolução da sociedade ou do vínculo conjugal, no curso do mandato, não afasta a inelegibilidade prevista no § 7º do artigo 14 da Constituição Federal para as eleições do período subsequente, salvo se a dissolução for decorrente de morte.'",
         "Súmula Vinculante nº 18 do STF; CF/88, art. 14, § 7º."),

        ("Lei da Ficha Limpa - Condenação por Órgão Colegiado", "Médio",
         "Prefeito foi condenado criminalmente pelo Tribunal de Justiça (órgão colegiado de 2º grau) por crime contra a administração pública à pena de 3 anos de reclusão. De acordo com a LC 64/90 com redação da LC 135/2010 (Lei da Ficha Limpa):",
         [("A", "A inelegibilidade só opera após o trânsito em julgado de recurso extraordinário no STF."),
          ("B", "O condenado torna-se inelegível desde a condenação por órgão judicial colegiado até o transcurso do prazo de 8 anos após o cumprimento da pena."),
          ("C", "A condenação em segundo grau gera inelegibilidade restrita a 2 anos."),
          ("D", "Apenas condenações do Tribunal do Júri geram inelegibilidade na Lei da Ficha Limpa.")],
         "B",
         "Art. 1º, I, 'e', da Lei Complementar nº 64/1990 (com alterações da LC 135/2010): São inelegíveis para qualquer cargo os que forem condenados, em decisão transitada em julgado ou proferida por órgão judicial colegiado, desde a condenação até o transcurso do prazo de 8 (oito) anos após o cumprimento da pena.",
         "LC nº 64/1990, art. 1º, I, 'e'; STF ADCs 29 e 30."),

        ("Ação de Impugnação de Mandato Eletivo (AIME)", "Difícil",
         "Candidato a Deputado derrotado obteve provas contundentes de que o eleito utilizou esquema milionário de corrupção e compra de votos para fraudar a eleição. O instrumento constitucional cabível após a diplomação e seu prazo são:",
         [("A", "Ação Popular perante o juízo eleitoral de 1º grau no prazo decadencial de 5 dias."),
          ("B", "Ação de Impugnação de Mandato Eletivo (AIME), proposta perante a Justiça Eleitoral no prazo de 15 dias contados da diplomação, instruída com provas de abuso do poder econômico, corrupção ou fraude, tramitando em segredo de justiça."),
          ("C", "Habeas Data contra o Tribunal Regional Eleitoral."),
          ("D", "Mandado de segurança perante a Mesa Diretora da Assembleia Legislativa.")],
         "B",
         "Art. 14, § 10 e § 11, da CF/88: O mandato eletivo poderá ser impugnado ante a Justiça Eleitoral no prazo de quinze dias contados da diplomação, instruída a ação com provas de abuso do poder econômico, corrupção ou fraude. A ação tramitará em segredo de justiça.",
         "CF/88, art. 14, §§ 10 e 11."),

        ("Doação Eleitoral por Pessoa Jurídica - ADI 4650 do STF", "Fácil",
         "Sociedade empresária multinacional pretende doar R$ 500.000,00 para a campanha eleitoral de um candidato a Senador da República. Sobre a doação pretendida:",
         [("A", "É lícita se não ultrapassar 2% do faturamento bruto do ano anterior."),
          ("B", "É inconstitucional e expressamente vedada no ordenamento jurídico brasileiro, sendo proibidas doações de pessoas jurídicas a partidos e campanhas eleitorais."),
          ("C", "Exige autorização unânime dos acionistas em assembleia geral."),
          ("D", "É permitida exclusivamente mediante cessão de debêntures da empresa.")],
         "B",
         "O Supremo Tribunal Federal julgou procedente a ADI 4650/DF, declarando a inconstitucionalidade dos dispositivos legais que autorizavam doações eleitorais por pessoas jurídicas a candidatos ou partidos políticos, consagrando o financiamento exclusivo por pessoas físicas e recursos públicos.",
         "STF, ADI 4.650/DF; Lei nº 9.504/1997, art. 23 e art. 24-A.")
    ]

    for i, item in enumerate(eleit_specs):
        questions.append({
            "id": f"q-eleit-{i+1:03d}",
            "disciplineId": "eleitoral",
            "subject": item[0],
            "difficulty": item[1],
            "statement": item[2],
            "options": [{"id": o[0], "text": o[1]} for o in item[3]],
            "correctOptionId": item[4],
            "explanation": item[5],
            "legalFoundation": item[6],
            "examReference": "Simulado Preparatório OAB · Direito Eleitoral"
        })

    # ---------------------------------------------------------
    # 12. FILOSOFIA DO DIREITO
    # ---------------------------------------------------------
    filo_specs = [
        ("Teoria Pura do Direito de Hans Kelsen", "Médio",
         "Em sua obra clássica 'Teoria Pura do Direito', Hans Kelsen propõe a depuração do objeto da ciência jurídica contra sincretismos metodológicos. O núcleo central da teoria kelseniana sustenta que:",
         [("A", "O direito deve ser fundamentado exclusivamente na moral religiosa e no direito divino."),
          ("B", "A ciência jurídica deve estudar a norma jurídica em sua pureza estrutural, separando o direito da moral, da sociologia e da política, alicerçando a validade do ordenamento na Norma Fundamental Hipotética (Grundnorm)."),
          ("C", "A validade da norma depende de sua justa aceitação psicológica pelos cidadãos."),
          ("D", "Não há qualquer distinção ontológica entre o mundo do ser (Sein) e o dever-ser (Sollen).")],
         "B",
         "Hans Kelsen concebe o direito como uma ordem coativa normativa escalonada e depurada de elementos axiológicos, sociológicos e morais, cuja unidade e validade decorrem de uma norma fundamental pressuposta (Grundnorm).",
         "Hans Kelsen, 'Teoria Pura do Direito' (Reine Rechtslehre)."),

        ("O Conceito de Direito de H. L. A. Hart - Regras de Reconhecimento", "Difícil",
         "O filósofo Herbert Hart, em 'O Conceito de Direito', supera a teoria dos comandos coativos de Austin afirmando que o sistema jurídico é a união de regras primárias e secundárias. A regra que confere critérios conclusivos de validade às demais normas é a:",
         [("A", "Regra de alteração."),
          ("B", "Regra de reconhecimento (rule of recognition), prática social compartilhada que estabelece os critérios para identificação das normas válidas do sistema."),
          ("C", "Regra de julgamento coercitivo estrito."),
          ("D", "Regra de sanção moral punitiva.")],
         "B",
         "Para H. L. A. Hart, o sistema jurídico moderno caracteriza-se pela união entre regras primárias (que impõem deveres de conduta) e regras secundárias (que conferem poderes: reconhecimento, alteração e adjudicação/julgamento), cabendo à regra de reconhecimento fornecer os critérios objetivos de validade jurídica.",
         "H. L. A. Hart, 'O Conceito de Direito' (The Concept of Law)."),

        ("Ronald Dworkin - Distinção entre Regras e Princípios", "Médio",
         "Ao criticar o positivismo jurídico hartiano na obra 'Levando os Direitos a Sério', Ronald Dworkin formula célebre distinção entre regras e princípios. Para Dworkin:",
         [("A", "Regras e princípios funcionam da mesma forma na solução de litígios judiciais."),
          ("B", "As regras aplicam-se na modalidade do 'tudo-ou-nada' (all-or-nothing), enquanto os princípios possuem uma dimensão de peso ou importância axiológica que não leva à invalidação daquele superado no caso concreto."),
          ("C", "Os princípios não pertencem ao direito, sendo meras diretrizes políticas desprovidas de força vinculante."),
          ("D", "Os juízes dispõem de discricionariedade absoluta para criar novos direitos quando a regra for omissa.")],
         "B",
         "Ronald Dworkin demonstrou que os sistemas jurídicos não são compostos apenas de regras, mas também de princípios morais e institucionais que possuem dimensão de peso (weight) e funcionam como trunfos contra o arbítrio estatal, rechaçando a discricionariedade judicial forte.",
         "Ronald Dworkin, 'Levando os Direitos a Sério' (Taking Rights Seriously)."),

        ("Robert Alexy - Princípios como Mandamentos de Otimização", "Médio",
         "Em sua 'Teoria dos Direitos Fundamentais', Robert Alexy estabelece o método da ponderação para solução de colisões entre direitos fundamentais. Para Alexy, os princípios caracterizam-se como:",
         [("A", "Regras absolutas de conduta com proibição de exceção."),
          ("B", "Mandamentos de otimização (Optimierungsgebote), normas que ordenam que algo seja realizado na maior medida possível, dentro das possibilidades fáticas e jurídicas existentes."),
          ("C", "Conselhos éticos desprovidos de eficácia normativa no processo judicial."),
          ("D", "Comandos puramente descritivos da realidade social fática.")],
         "B",
         "Robert Alexy conceitua princípios como mandamentos de otimização, orientados pela proporcionalidade em três subelementos: adequação, necessidade e proporcionalidade em sentido estrito (lei de colisão e fórmula do peso).",
         "Robert Alexy, 'Teoria dos Direitos Fundamentais' (Theorie der Grundrechte)."),

        ("A Fórmula de Radbruch e o Não-Positivismo", "Fácil",
         "Após os horrores do regime nazista e os julgamentos de Nuremberg, o jurista Gustav Radbruch formulou princípio sobre a perda da validade jurídica das leis tirânicas. A célebre 'Fórmula de Radbruch' preconiza que:",
         [("A", "A lei é a lei (Gesetz ist Gesetz) e deve ser sempre obedecida independentemente de sua injustiça moral."),
          ("B", "O direito positivo tem preferência, mas quando a lei positiva atinge um grau de injustiça insuportável ou nega deliberadamente a igualdade humana, perde o caráter de direito e não deve ser obedecida (a extrema injustiça não é direito)."),
          ("C", "Apenas as leis civis patrimoniais podem ser questionadas quanto ao mérito da justiça."),
          ("D", "A moral deve se subordinar integralmente à vontade autocrática do legislador.")],
         "B",
         "Gustav Radbruch ('Injustiça Legal e Direito Supralegal', 1946) estabeleceu que a segurança jurídica cede diante da justiça quando a contradição entre a lei positiva e a justiça atinge uma medida insuportável: a lei injusta em grau intolerável não é direito ('lex injusta non est lex').",
         "Gustav Radbruch, 'Injustiça Legal e Direito Supralegal' (1946).")
    ]

    for i, item in enumerate(filo_specs):
        questions.append({
            "id": f"q-filo-{i+1:03d}",
            "disciplineId": "filosofia",
            "subject": item[0],
            "difficulty": item[1],
            "statement": item[2],
            "options": [{"id": o[0], "text": o[1]} for o in item[3]],
            "correctOptionId": item[4],
            "explanation": item[5],
            "legalFoundation": item[6],
            "examReference": "Simulado Preparatório OAB · Filosofia do Direito"
        })

    print(f"Generated {len(questions)} questions in Part 3.")
    return questions

if __name__ == '__main__':
    qs = get_part3_questions()
    with open('scripts/part3_out.json', 'w', encoding='utf-8') as f:
        json.dump(qs, f, ensure_ascii=False, indent=2)
    print("Part 3 written successfully.")
