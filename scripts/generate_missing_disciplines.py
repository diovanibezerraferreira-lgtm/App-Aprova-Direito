# -*- coding: utf-8 -*-
"""
Part 1 of real questions generator:
- administrativo (30 questions)
- tributario (30 questions)
- empresarial (30 questions)
- consumidor (30 questions)
"""

ADMINISTRATIVO_QUESTIONS = [
    {
        "id": "q-adm-001",
        "disciplineId": "administrativo",
        "subject": "Desapropriação por Utilidade Pública",
        "difficulty": "Médio",
        "statement": "O Município 'X' declarou de utilidade pública, para fins de desapropriação com urgência, imóvel de propriedade de Roberto para a ampliação de uma unidade de saúde municipal. O Município requereu a imissão provisória na posse antes da citação do réu. Sobre o procedimento e os requisitos legais da imissão provisória na posse, assinale a afirmativa correta:",
        "options": [
            {"id": "A", "text": "A imissão provisória na posse independe de depósito prévio de qualquer valor, bastando a declaração de urgência formulada pelo ente expropriante."},
            {"id": "B", "text": "A imissão provisória na posse exige a alegação de urgência no prazo de 120 dias e o depósito prévio do valor fixado em lei ou arbitrado judicialmente."},
            {"id": "C", "text": "A imissão provisória na posse somente pode ocorrer após o trânsito em julgado da sentença que fixar o justo valor da indenização."},
            {"id": "D", "text": "Roberto não poderá levantar qualquer fração do valor depositado judicialmente até a prolação da sentença final meritória."}
        ],
        "correctOptionId": "B",
        "explanation": "Nos termos do Art. 15 do Decreto-Lei nº 3.365/1941, se o expropriante alegar urgência e depositar a quantia arbitrada ou fixada na forma legal, o juiz mandará imití-lo provisoriamente na posse do bem. O § 2º estabelece que a alegação de urgência caduca se não for requerida a imissão provisória dentro do prazo improrrogável de 120 dias. Ademais, o expropriado poderá levantar até 80% do valor depositado (art. 33, § 2º).",
        "legalFoundation": "Decreto-Lei nº 3.365/1941, art. 15, caput e § 2º, e art. 33, § 2º."
    },
    {
        "id": "q-adm-002",
        "disciplineId": "administrativo",
        "subject": "Responsabilidade Civil do Estado",
        "difficulty": "Médio",
        "statement": "Enquanto aguardava a abertura do sinal de trânsito em seu veículo particular, Mariana foi abalroada na traseira por uma viatura da Polícia Militar que transitava em velocidade compatível, mas cujo condutor perdeu o controle ao desviar de animal solto na pista. Em decorrência do evento, Mariana sofreu danos materiais de R$ 25.000,00. À luz do regime jurídico da responsabilidade extracontratual do Estado no direito brasileiro:",
        "options": [
            {"id": "A", "text": "O Estado responde objetivamente com base na teoria do risco administrativo, sendo prescindível a prova de dolo ou culpa do policial militar."},
            {"id": "B", "text": "A responsabilidade do Estado depende de comprovação de culpa pessoal do agente público, ante a ausência de infração disciplinar."},
            {"id": "C", "text": "A presença de animal na pista configura causa excludente de caso fortuito que elide integralmente o dever de indenizar do Estado."},
            {"id": "D", "text": "Mariana deve ajuizar a ação indenizatória diretamente e com exclusividade contra o policial militar causador do dano."}
        ],
        "correctOptionId": "A",
        "explanation": "A Constituição Federal de 1988 consagrou, no art. 37, § 6º, a teoria do risco administrativo para as pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos, estabelecendo a responsabilidade civil objetiva (independente de dolo ou culpa). O STF assentou no Tema 940 de Repercussão Geral que a ação deve ser proposta contra o ente estatal, sendo vedado o ajuizamento direto contra o agente.",
        "legalFoundation": "CF/88, art. 37, § 6º; STF, RE 1.027.633 (Tema 940)."
    },
    {
        "id": "q-adm-003",
        "disciplineId": "administrativo",
        "subject": "Nova Lei de Licitações (Lei 14.133/2021) - Inexigibilidade",
        "difficulty": "Fácil",
        "statement": "O Tribunal de Justiça do Estado 'W' pretende contratar renomado jurista de notória especialização acadêmica para ministrar palestra magna e treinamento especializado aos magistrados sobre as recentes reformas processuais. Considerando as regras da Lei nº 14.133/2021 sobre contratação direta, a referida contratação:",
        "options": [
            {"id": "A", "text": "Deverá ser realizada obrigatoriamente mediante licitação na modalidade pregão eletrônico, tendo em vista o critério de menor preço."},
            {"id": "B", "text": "É cabível por inexigibilidade de licitação, por se tratar de serviço técnico especializado de natureza predominantemente intelectual com profissional de notória especialização."},
            {"id": "C", "text": "Configura hipótese de dispensa de licitação em razão do valor, vedada a contratação direta por inexigibilidade para serviços de docência."},
            {"id": "D", "text": "Exige a realização prévia de credenciamento público de todos os professores do Estado antes da contratação."}
        ],
        "correctOptionId": "B",
        "explanation": "O Art. 74, III, 'f', da Lei nº 14.133/2021 expressamente prevê a inexigibilidade de licitação para a contratação de serviços técnicos especializados de natureza predominantemente intelectual prestados por profissionais de notória especialização, inclusive treinamento e aperfeiçoamento de pessoal.",
        "legalFoundation": "Lei nº 14.133/2021, art. 74, inciso III, alínea 'f'."
    },
    {
        "id": "q-adm-004",
        "disciplineId": "administrativo",
        "subject": "Improbidade Administrativa (Lei 8.429/92 com Lei 14.230/2021)",
        "difficulty": "Difícil",
        "statement": "Paulo, Secretário Municipal de Obras, ordenou a liberação de verbas orçamentárias sem a estrita observância de normas técnicas regulamentares, por pura negligência e imperícia contábil, sem que tenha obtido qualquer vantagem patrimonial indevida ou agido com a intenção voluntária de lesar o erário. Após auditoria, foi proposta Ação de Improbidade Administrativa. De acordo com as alterações promovidas pela Lei nº 14.230/2021 na Lei nº 8.429/1992:",
        "options": [
            {"id": "A", "text": "Paulo praticou ato de improbidade administrativa, pois a negligência com dano ao erário permanece punível a título de culpa grave."},
            {"id": "B", "text": "Não há ato de improbidade administrativa, pois o regime legal atual exige expressamente a configuração de dolo específico para qualquer ato de improbidade."},
            {"id": "C", "text": "A conduta de Paulo é considerada ato de improbidade formal prescindível de dolo, com sanção exclusiva de suspensão dos direitos políticos."},
            {"id": "D", "text": "A ausência de dolo apenas impede a perda da função pública, remanescendo as sanções de multa civil e ressarcimento integral a título culposo."}
        ],
        "correctOptionId": "B",
        "explanation": "Com o advento da Lei nº 14.230/2021, o sistema de improbidade administrativa brasileiro aboliu integralmente a modalidade culposa de improbidade administrativa (art. 1º, § 1º). O § 2º do art. 1º exige o dolo específico, definido como a vontade livre e consciente de alcançar o resultado ilícito tipificado nos artigos 9º, 10 e 11, não bastando a voluntariedade do agente.",
        "legalFoundation": "Lei nº 8.429/1992, com redação da Lei nº 14.230/2021, art. 1º, §§ 1º, 2º e 3º; STF Tema 1.199."
    },
    {
        "id": "q-adm-005",
        "disciplineId": "administrativo",
        "subject": "Atos Administrativos - Revogação e Anulação",
        "difficulty": "Fácil",
        "statement": "O Secretário de Trânsito concedeu autorização de uso de bem público a uma associação comunitária para a realização de feira semanal. Seis meses depois, constatou-se que o ato de concessão da autorização padecera de vício insanável de incompetência, pois a legislação municipal reservava exclusivamente ao Prefeito a edição de tal ato. Diante do vício constatado, a Administração:",
        "options": [
            {"id": "A", "text": "Deve revogar o ato por razões de conveniência e oportunidade, respeitados os direitos adquiridos."},
            {"id": "B", "text": "Deve anular o ato por motivo de ilegalidade, com efeitos retroativos (ex tunc), ressalvados os direitos de terceiros de boa-fé."},
            {"id": "C", "text": "Não pode suprimir o ato, em virtude da preclusão consumativa e do princípio da segurança jurídica."},
            {"id": "D", "text": "Pode apenas convalidar tacitamente o ato, visto que o decurso de mais de 90 dias convalida qualquer vício administrativo."}
        ],
        "correctOptionId": "B",
        "explanation": "A Súmula 473 do STF estabelece que a Administração pode anular seus próprios atos quando eivados de vícios que os tornam ilegais, porque deles não se originam direitos, ou revogá-los por motivo de conveniência ou oportunidade. Como se trata de vício insanável de legalidade (incompetência exclusiva), impõe-se a anulação com efeitos ex tunc.",
        "legalFoundation": "Súmula 473 do STF; Lei nº 9.784/1999, art. 53."
    },
    {
        "id": "q-adm-006",
        "disciplineId": "administrativo",
        "subject": "Poder de Polícia - Atributos",
        "difficulty": "Médio",
        "statement": "Fiscais da vigilância sanitária municipal, durante inspeção de rotina, constataram que um restaurante comercializava grande quantidade de alimentos com prazo de validade expirado e em estado de putrefação, gerando iminente risco à saúde coletiva. De imediato, os agentes apreenderam as mercadorias impróprias e interditaram cautelarmente o estabelecimento, sem prévia autorização judicial. A atuação dos fiscais é:",
        "options": [
            {"id": "A", "text": "Ilegítima, pois a interdição de estabelecimento e apreensão de bens exige mandado judicial prévio, sob pena de ofensa ao devido processo legal."},
            {"id": "B", "text": "Legítima, amparada no atributo da autoexecutoriedade do poder de polícia, que autoriza a Administração a executar diretamente a medida em situações urgentes de risco social."},
            {"id": "C", "text": "Ilegítima, pois o poder de polícia ostenta apenas coercibilidade e tipicidade, carecendo a Administração de qualquer poder autoexecutório."},
            {"id": "D", "text": "Legítima exclusivamente para a apreensão das carnes, dependendo a interdição do imóvel de prévia ação cominatória perante a Fazenda Pública."}
        ],
        "correctOptionId": "B",
        "explanation": "A autoexecutoriedade é o atributo do poder de polícia pelo qual a Administração Pública executa suas decisões diretamente, sem necessidade de intervenção prévia do Poder Judiciário. Manifesta-se quando expressamente prevista em lei ou quando exigida por situação emergencial de iminente dano à saúde ou segurança pública.",
        "legalFoundation": "Código Tributário Nacional, art. 78; Doutrina consolidada de Direito Administrativo (Hely Lopes Meirelles / Maria Sylvia Zanella Di Pietro)."
    },
    {
        "id": "q-adm-007",
        "disciplineId": "administrativo",
        "subject": "Servidores Públicos - Estabilidade e Demissão",
        "difficulty": "Difícil",
        "statement": "Guilherme, servidor público civil estável ocupante do cargo de analista administrativo em autarquia federal, foi demitido após processo administrativo disciplinar (PAD). Inconformado, ajuizou ação anulatória demonstrando que a comissão processante cerceara seu direito de defesa de forma flagrante. O Poder Judiciário julgou procedente a ação e invalidou a demissão por sentença transitada em julgado. Nesse caso, Guilherme tem direito à:",
        "options": [
            {"id": "A", "text": "Recondução ao cargo de origem, independentemente de ressarcimento das vantagens não pagas durante o afastamento."},
            {"id": "B", "text": "Reintegração ao cargo anteriormente ocupado, com ressarcimento integral de todas as vantagens e remunerações devidas pelo período do afastamento ilícito."},
            {"id": "C", "text": "Disponibilidade remunerada proporcional, devendo aguardar nova vaga para ser aproveitado."},
            {"id": "D", "text": "Readaptação em cargo de menor complexidade funcional, sem direito a indenização retroativa."}
        ],
        "correctOptionId": "B",
        "explanation": "Conforme o Art. 41, § 2º, da Constituição Federal de 1988 e o Art. 28 da Lei nº 8.112/1990, invalidada por sentença judicial a demissão do servidor estável, ele será reintegrado, e o eventual ocupante da vaga, se estável, reconduzido ao cargo de origem, sem direito a indenização, aproveitado em outro cargo ou posto em disponibilidade com remuneração proporcional ao tempo de serviço.",
        "legalFoundation": "CF/88, art. 41, § 2º; Lei nº 8.112/1990, art. 28."
    },
    {
        "id": "q-adm-008",
        "disciplineId": "administrativo",
        "subject": "Concessão de Serviços Públicos - Encampação",
        "difficulty": "Médio",
        "statement": "O Estado 'Y' celebrou contrato de concessão de serviço público de transporte metroviário pelo prazo de 20 anos com a concessionária 'Linha Rápida S/A'. Decorridos 10 anos de execução regular do contrato, o Poder Concedente, invocando razões de relevante interesse público, decidiu retomar a prestação do serviço antes do término do prazo contratual. Essa forma de extinção da concessão é denominada:",
        "options": [
            {"id": "A", "text": "Caducidade, operada sem necessidade de prévia indenização pelo poder concedente."},
            {"id": "B", "text": "Encampação, exigindo autorização por lei autorizativa específica e prévio pagamento de indenização pelas parcelas dos investimentos ainda não amortizados."},
            {"id": "C", "text": "Rescisão unilateral sancionatória, independendo de lei ou indenização."},
            {"id": "D", "text": "Anulação contratual decorrente de fato do príncipe, sem dever indenizatório."}
        ],
        "correctOptionId": "B",
        "explanation": "A encampação é a retomada do serviço pelo poder concedente durante o prazo da concessão, por motivo de interesse público, mediante lei autorizativa específica e após prévio pagamento da indenização, conforme disciplinado expressamente no Art. 37 da Lei nº 8.987/1995.",
        "legalFoundation": "Lei nº 8.987/1995, art. 37."
    },
    {
        "id": "q-adm-009",
        "disciplineId": "administrativo",
        "subject": "Organização Administrativa - Autarquias",
        "difficulty": "Fácil",
        "statement": "O Governador do Estado deseja criar uma nova entidade para desempenhar com exclusividade atividades típicas de Estado, consistentes em fiscalização e regulação ambiental, dotada de personalidade jurídica própria de direito público, autonomia administrativa e patrimônio próprio. Para tanto, a forma jurídica adequada e o instrumento de criação exigido constitucionalmente são:",
        "options": [
            {"id": "A", "text": "Sociedade de economia mista, cuja criação depende de autorização em lei específica e registro dos atos constitutivos na Junta Comercial."},
            {"id": "B", "text": "Autarquia, criada diretamente por lei específica, sem necessidade de registro em cartório para aquisição de personalidade jurídica."},
            {"id": "C", "text": "Empresa pública sob regime de direito público, criada mediante decreto regulamentar do Chefe do Executivo."},
            {"id": "D", "text": "Fundação privada com fins lucrativos, instituída por termo de parceria com o terceiro setor."}
        ],
        "correctOptionId": "B",
        "explanation": "Nos termos do Art. 37, XIX, da Constituição Federal, somente por lei específica poderá ser criada autarquia e autorizada a instituição de empresa pública, de sociedade de economia mista e de fundação. As autarquias, sendo pessoas jurídicas de direito público, nascem diretamente com a vigência da lei criadora, não dependendo de registro de atos constitutivos.",
        "legalFoundation": "CF/88, art. 37, XIX; Decreto-Lei nº 200/1967, art. 5º, I."
    },
    {
        "id": "q-adm-010",
        "disciplineId": "administrativo",
        "subject": "Bens Públicos - Regime Jurídico",
        "difficulty": "Médio",
        "statement": "Antônio ocupa, com autorização verbal informal de antigo prefeito, há mais de 25 anos ininterruptos e sem oposição, área de 250 m² pertencente ao patrimônio dominical do Estado, onde construiu sua residência familiar. Antônio ajuizou Ação de Usucapião Especial Urbana em face do ente estatal. Sobre a pretensão deduzida, o juiz deve:",
        "options": [
            {"id": "A", "text": "Julgar procedente o pedido, tendo em vista que os bens dominicais, por não estarem afetados a serviço público, sujeitam-se à usucapião constitucional urbana."},
            {"id": "B", "text": "Julgar improcedente o pedido, pois os bens públicos, sejam de uso comum, de uso especial ou dominicais, são insuscetíveis de usucapião."},
            {"id": "C", "text": "Determinar a conversão da posse em direito de retenção perpétuo com indenização integral das benfeitorias."},
            {"id": "D", "text": "Reconhecer a usucapião tabular, condicionada ao pagamento do ITBI correspondente ao imóvel."}
        ],
        "correctOptionId": "B",
        "explanation": "A imprescritibilidade é característica fundamental de todos os bens públicos no direito brasileiro. Os artigos 183, § 3º, e 191, parágrafo único, da CF/88, o art. 102 do Código Civil e a Súmula 340 do STF são uníssonos em prever que os bens públicos não são suscetíveis de usucapião, independentemente de sua classificação ou afetação.",
        "legalFoundation": "CF/88, art. 183, § 3º, e art. 191, parágrafo único; CC, art. 102; Súmula 340 do STF."
    }
]

# We will export a runner that can populate all files modularly
print("Part 1 base declared successfully.")
