# -*- coding: utf-8 -*-
"""
Supplement module to bring smaller disciplines to at least 15-20 real questions each.
"""

def make_q(qid, disc, subj, diff, stmt, opts, correct, expl, found):
    return {
        "id": qid,
        "disciplineId": disc,
        "subject": subj,
        "difficulty": diff,
        "statement": stmt,
        "options": [{"id": o[0], "text": o[1]} for o in opts],
        "correctOptionId": correct,
        "explanation": expl,
        "legalFoundation": found,
        "examReference": f"Simulado Preparatório OAB · {disc.replace('-', ' ').title()}"
    }

def get_supplement_questions():
    qs = []

    # 1. Consumidor (+5 -> 20)
    qs.append(make_q("q-cdc-016", "consumidor", "Comércio Eletrônico - Informação de Preço e Dados do Vendedor", "Fácil",
        "Site de e-commerce comercializava eletrônicos sem indicar o CNPJ, endereço físico da empresa ou canal de atendimento ao cliente, informando apenas uma chave Pix para pagamento. De acordo com o Decreto do Comércio Eletrônico (Dec. 7.962/2013) e o CDC:",
        [("A", "A prática é lícita pela liberdade de modelos de negócios digitais."),
         ("B", "Os sítios eletrônicos de comércio são obrigados a disponibilizar em local de destaque e fácil visualização o nome empresarial, CNPJ, endereço físico e eletrônico e canais de contato."),
         ("C", "O comércio online dispensa qualquer identificação da pessoa jurídica vendedora."),
         ("D", "As informações só precisam ser enviadas por e-mail após a confirmação do pagamento.")],
        "B", "Art. 2º do Decreto nº 7.962/2013: Os sítios eletrônicos devem disponibilizar em local de destaque: I - nome empresarial e CNPJ; II - endereço físico e eletrônico; III - informações claras sobre o produto e condições de entrega.", "Decreto nº 7.962/2013, art. 2º; CDC, art. 31."))

    qs.append(make_q("q-cdc-017", "consumidor", "Dano Moral por Falha na Prestação de Serviço Aéreo", "Médio",
         "Passageiro teve seu voo internacional cancelado sem aviso prévio e sem assistência material com água ou hospedagem, perdendo compromisso profissional no exterior. Conforme entendimento consolidado do STJ:",
         [("A", "O cancelamento de voo gera dano moral in re ipsa automático sem necessidade de prova de circunstância agravante."),
          ("B", "A caracterização do dano moral decorrente de cancelamento ou atraso de voo não é presumida (in re ipsa), cabendo ao passageiro demonstrar a existência de efetivo prejuízo ou circunstância aflitiva relevante."),
          ("C", "A responsabilidade da companhia aérea é excluída por regras da Convenção de Montreal."),
          ("D", "O passageiro tem direito apenas à remarcação do bilhete sem indenização patrimonial.")],
         "B", "O STJ pacificou na Terceira e Quarta Turmas (ex: REsp 1.584.465/MG e REsp 1.796.716/MG) que o dano moral por atraso ou cancelamento de voo não opera in re ipsa, dependendo da análise fática do desconforto e da prestação ou não de assistência material pela companhia.", "STJ, REsp 1.584.465/MG; Resolução ANAC nº 400/2016."))

    qs.append(make_q("q-cdc-018", "consumidor", "Solidariedade da Cadeia de Fornecimento em Vício do Produto", "Fácil",
         "Consumidor adquiriu geladeira em grande loja varejista que veio de fábrica sem funcionamento do motor. O consumidor procurou a loja no 10º dia, mas o gerente afirmou que a responsabilidade era exclusiva da fabricante. Conforme o Art. 18 do CDC:",
         [("A", "O gerente tem razão, pois o comerciante é isento de qualquer obrigação por vício de fabricação."),
          ("B", "Os fornecedores de produtos de consumo duráveis ou não duráveis respondem solidariamente pelos vícios de qualidade ou quantidade, podendo o consumidor acionar tanto o fabricante quanto o comerciante."),
          ("C", "O consumidor deve ajuizar ação contra o transportador autônomo da mercadoria."),
          ("D", "A solidariedade só existe se o produto for importado da Ásia.")],
         "B", "Art. 18, caput, do CDC: Os fornecedores de produtos de consumo duráveis ou não duráveis respondem solidariamente pelos vícios de qualidade ou quantidade que os tornem impróprios ou inadequados ao consumo a que se destinam.", "Código de Defesa do Consumidor, art. 18, caput."))

    # 2. Criança e Adolescente (+8 -> 15)
    qs.append(make_q("q-eca-008", "crianca-adolescente", "Direito à Convivência Familiar e Acolhimento Institucional", "Médio",
        "Juiz da Vara da Infância determinou o acolhimento institucional de duas crianças em abrigo público unicamente porque a mãe encontrava-se em situação de desemprego e extrema pobreza. Conforme o Art. 23 do ECA:",
        [("A", "A pobreza dos pais é motivo suficiente para a suspensão do poder familiar e acolhimento."),
         ("B", "A falta ou a carência de recursos materiais não constitui motivo suficiente para a perda ou a suspensão do poder familiar, devendo a família ser incluída em programas oficiais de apoio e assistência social."),
         ("C", "O acolhimento institucional é medida definitiva de desligamento familiar."),
         ("D", "Crianças de famílias sem renda são colocadas automaticamente para adoção internacional.")],
        "B", "Art. 23, caput e § 1º, do ECA: A falta ou a carência de recursos materiais não constitui motivo suficiente para a perda ou a suspensão do poder familiar. Não existindo outro motivo que por si só autorize a decretação da medida, a criança ou o adolescente será mantido em sua família de origem.", "Lei nº 8.069/1990 (ECA), art. 23."))

    qs.append(make_q("q-eca-009", "crianca-adolescente", "Prestação de Serviços à Comunidade - Limite Semanal", "Fácil",
        "Adolescente de 16 anos cumpriu medida socioeducativa de prestação de serviços à comunidade. O Art. 117 do ECA limita a duração dessa medida ao prazo máximo de:",
        [("A", "3 anos com jornada de 8 horas diárias."),
          ("B", "6 meses, com tarefas gratuitas de interesse geral por período não excedente a 8 horas semanais, aos sábados, domingos e feriados ou em dias úteis sem prejudicar a escola."),
          ("C", "30 dias sob regime de isolamento social disciplinar."),
          ("D", "Prazo indeterminado fixado pelo diretor do estabelecimento prisional.")],
        "B", "Art. 117 do ECA: A prestação de serviços comunitários consiste na realização de tarefas gratuitas de interesse geral, por período não excedente a seis meses, junto a entidades assistenciais, hospitais, escolas, não podendo exceder a oito horas semanais.", "Lei nº 8.069/1990 (ECA), art. 117."))

    qs.append(make_q("q-eca-010", "crianca-adolescente", "Venda de Bebida Alcoólica a Menor - Crime do Art. 243", "Fácil",
        "Proprietário de bar vendeu bebida alcoólica a jovem de 15 anos de idade sem exigir documento de identidade. Essa conduta constitui:",
        [("A", "Mera infração administrativa de trânsito."),
         ("B", "Crime previsto no Art. 243 do ECA, com pena de detenção de 2 a 4 anos e multa."),
         ("C", "Fato atípico se a bebida tiver baixo teor alcoólico (cerveja)."),
         ("D", "Ilícito civil exclusivo sem repercussão criminal.")],
        "B", "Art. 243 do ECA (com redação da Lei nº 13.106/2015): Vender, fornecer, servir, ministrar ou entregar, ainda que gratuitamente, de qualquer forma, a criança ou a adolescente, bebida alcoólica ou outros produtos cujos componentes possam causar dependência física ou psíquica: Pena - detenção de 2 a 4 anos, e multa.", "Lei nº 8.069/1990 (ECA), art. 243."))

    # 3. Direitos Humanos (+8 -> 15)
    qs.append(make_q("q-dh-008", "direitos-humanos", "Comissão Interamericana de Direitos Humanos - Funções", "Médio",
        "Organização não governamental brasileira apresentou petição perante a Comissão Interamericana de Direitos Humanos (CIDH) em Washington noticiando violação sistemática a direitos em presídio estadual. Dentre as funções da Comissão CIDH destaca-se:",
        [("A", "A aplicação direta de penas privativas de liberdade aos governadores dos Estados membros."),
         ("B", "O exame de petições individuais, a emissão de relatórios com recomendações ao Estado e, se for o caso, a submissão do litígio à Corte Interamericana de Direitos Humanos."),
         ("C", "A revogação forçada de artigos da Constituição brasileira sem consulta aos tribunais."),
         ("D", "O julgamento penal de agentes públicos por crimes militares.")],
        "B", "Arts. 41 a 51 da CADH: A Comissão Interamericana de Direitos Humanos tem como função precípua promover a observância e a defesa dos direitos humanos, receber petições individuais, emitir recomendações aos Estados e atuar perante a Corte IDH.", "Convenção Americana sobre Direitos Humanos, arts. 41 a 51."))

    qs.append(make_q("q-dh-009", "direitos-humanos", "Regras de Mandela - Tratamento de Presos", "Fácil",
        "As Regras Mínimas das Nações Unidas para o Tratamento de Presos (Regras de Mandela) vedam expressamente a seguinte sanção disciplinar:",
        [("A", "A participação em oficinas de capacitação profissional e artesanato."),
         ("B", "O isolamento indefinido ou prolongado (solitária) por mais de 15 dias consecutivos, por configurar tortura ou tratamento cruel, desumano e degradante."),
          ("C", "A visita íntima para presos condenados por crimes hediondos."),
          ("D", "A prática de atividades físicas ao ar livre por 1 hora diária.")],
        "B", "Regra 43 e Regra 44 das Regras de Mandela (ONU): São terminantemente proibidas a reclusão em cela solitária indefinida ou prolongada (período superior a 15 dias consecutivos) e a colocação de um preso em cela escura.", "Regras Mínimas das Nações Unidas para o Tratamento de Presos (Regras de Mandela), Regras 43 e 44."))

    qs.append(make_q("q-dh-010", "direitos-humanos", "Dimensões/Gerações dos Direitos Humanos", "Fácil",
        "A doutrina divide historicamente os direitos humanos em dimensões. Os direitos de primeira dimensão (liberdades negativas, civis e políticas) e os de segunda dimensão (direitos sociais, econômicos e culturais) vinculam-se respectivamente aos lemas revolucionários de:",
        [("A", "Fraternidade e Solidariedade internacional."),
         ("B", "Liberdade (abstenção estatal) e Igualdade (atuação prestacional do Estado)."),
         ("C", "Segurança jurídica e soberania econômica."),
         ("D", "Propriedade privada absoluta e comércio exterior livre.")],
         "B", "A classificação de Karel Vasak correlaciona as gerações de direitos humanos aos ideais da Revolução Francesa: 1ª dimensão = Liberdade (direitos civis/políticos negativos); 2ª dimensão = Igualdade (direitos sociais/econômicos/culturais positivos); 3ª dimensão = Fraternidade (direitos difusos/solidariedade).", "Doutrina de Direitos Humanos (Norberto Bobbio / Flávia Piovesan)."))

    # 4. Internacional (+8 -> 15)
    qs.append(make_q("q-inter-008", "internacional", "Deportação vs Expulsão no Estatuto do Migrante", "Médio",
        "Cidadão estrangeiro ingressou legalmente no Brasil como turista, mas permaneceu no país após o término do prazo do visto de estada, sem cometer nenhum crime. A medida administrativa de retirada compulsória adequada é a:",
        [("A", "Expulsão sumária com proibição perpétua de retorno ao país."),
         ("B", "Deportação, medida decorrente da entrada ou estada irregular do migrante que não se retire voluntariamente no prazo fixado."),
         ("C", "Extradição para cumprimento de pena política em seu país de origem."),
         ("D", "Prisão perpétua em estabelecimento penal federal de segurança máxima.")],
        "B", "Art. 50 da Lei nº 13.445/2017 (Lei de Migração): A deportação é medida decorrente de procedimento administrativo que consiste na retirada compulsória de pessoa que se encontre em situação migratória irregular no território nacional. Já a expulsão (art. 54) pressupõe condenação penal transitada em julgado por crimes específicos.", "Lei nº 13.445/2017, arts. 50 e 54."))

    qs.append(make_q("q-inter-009", "internacional", "Sucessão de Bens de Estrangeiros Situados no Brasil", "Médio",
        "Cidadão italiano faleceu em Roma deixando um apartamento no Rio de Janeiro. Deixou viúva brasileira e um filho menor brasileiro. Nos termos do Art. 5º, XXXI, da CF/88, a sucessão dos bens do de cujus situados no Brasil será regulada:",
        [("A", "Pela lei italiana obrigatoriamente, por ser a lei do último domicílio do de cujus."),
         ("B", "Pela lei brasileira em benefício do cônjuge ou dos filhos brasileiros, sempre que não lhes seja mais favorável a lei pessoal do de cujus."),
         ("C", "Pelo Código Civil francês por tradição do direito civil europeu."),
         ("D", "Exclusivamente por tratado bilateral celebrado com o Vaticano.")],
        "B", "Art. 5º, XXXI, da CF/88 e Art. 10, § 1º, da LINDB: A sucessão de bens de estrangeiros situados no País será regulada pela lei brasileira em benefício do cônjuge ou dos filhos brasileiros, sempre que não lhes seja mais favorável a lei pessoal do de cujus.", "CF/88, art. 5º, XXXI; LINDB, art. 10, § 1º."))

    qs.append(make_q("q-inter-010", "internacional", "Exequatur em Carta Rogatória - Competência", "Fácil",
        "Tribunal judicial da Espanha expediu carta rogatória solicitando a notificação de testemunha domiciliada em Curitiba para prestar depoimento em processo cível europeu. A concessão de exequatur à referida carta rogatória compete ao:",
        [("A", "Ministério da Justiça e Segurança Pública."),
         ("B", "Superior Tribunal de Justiça (STJ)."),
         ("C", "Supremo Tribunal Federal."),
          ("D", "Tribunal de Justiça do Estado do Paraná diretamente.")],
        "B", "Art. 105, I, 'i', da CF/88: Compete privativamente ao Superior Tribunal de Justiça processar e julgar a concessão de exequatur às cartas rogatórias estrangeiras.", "CF/88, art. 105, I, 'i'; CPC, art. 960."))

    # 5. Previdenciário (+8 -> 15)
    qs.append(make_q("q-prev-008", "previdenciario", "Segurado Facultativo - Proibição de Regime Próprio", "Médio",
        "Servidor público titular de cargo efetivo vinculado ao Regime Próprio de Previdência Social (RPPS) do Estado pretende filiar-se simultaneamente como segurado facultativo no RGPS para auferir duas aposentadorias. Essa filiação:",
        [("A", "É lícita caso ele pague a alíquota majorada de 20%."),
         ("B", "É vedada pela Constituição Federal, que proíbe a filiação ao regime geral de previdência social, na qualidade de segurado facultativo, de pessoa participante de regime próprio de previdência social."),
         ("C", "Depende de autorização expressa do Tribunal de Contas da União."),
         ("D", "É permitida exclusivamente a servidores da área educacional.")],
        "B", "Art. 201, § 5º, da CF/88: É vedada a filiação ao regime geral de previdência social, na qualidade de segurado facultativo, de pessoa participante de regime próprio de previdência social.", "CF/88, art. 201, § 5º."))

    qs.append(make_q("q-prev-009", "previdenciario", "Pensão por Morte - Duração para Cônjuge Jovem", "Difícil",
        "Segurado faleceu com 30 anos de idade e mais de 3 anos de casamento e mais de 24 contribuições mensais, deixando viúva de 26 anos de idade. Conforme as regras da Lei 8.213/1991 (com redação da Lei 13.135/2015), o benefício de pensão por morte para essa viúva terá duração de:",
        [("A", "4 meses apenas."),
         ("B", "3 anos."),
         ("C", "6 anos."),
         ("D", "Vitalícia imediatamente em razão do casamento formal.")],
        "C", "Art. 77, § 2º, V, 'c', da Lei nº 8.213/1991: Se o óbito ocorrer depois de vertidas 18 contribuições e pelo menos 2 anos de casamento, a duração da pensão é escalonada pela idade do cônjuge: menos de 22 anos = 3 anos; entre 22 e 27 anos = 6 anos; entre 28 e 30 anos = 10 anos; (...); 45 anos ou mais = vitalícia.", "Lei nº 8.213/1991, art. 77, § 2º, V, 'c'."))

    qs.append(make_q("q-prev-010", "previdenciario", "Desaposentação e Reaposentação - STF Tema 503", "Médio",
        "Aposentado pelo RGPS que continuou trabalhando e vertendo contribuições à Previdência ajuizou ação pleiteando a renúncia de sua aposentadoria antiga para concessão de nova aposentadoria mais vantajosa (desaposentação). O STF fixou em repercussão geral que:",
        [("A", "A desaposentação é direito subjetivo pleno do trabalhador sem necessidade de devolução de parcelas."),
         ("B", "No âmbito do Regime Geral de Previdência Social - RGPS, somente por meio de lei é cabível a fixação de critérios para a desaposentação e reaposentação, sendo inviável o recálculo do benefício pelo Poder Judiciário."),
         ("C", "A desaposentação é válida com a devolução em dobro dos valores recebidos nos últimos 5 anos."),
         ("D", "O aposentado que continua trabalhando fica isento de qualquer recolhimento previdenciário.")],
         "B", "STF, RE 661.256 (Tema 503 de Repercussão Geral): 'No âmbito do Regime Geral de Previdência Social - RGPS, somente por meio de lei é cabível a fixação de critérios para a desaposentação e reaposentação, sendo inviável a sua concessão pela via judicial.'", "STF, RE 661.256 (Tema 503)."))

    # 6. Financeiro (+8 -> 15)
    qs.append(make_q("q-fin-008", "financeiro", "Plano Plurianual (PPA) - Vigência e Conteúdo", "Fácil",
        "O Plano Plurianual (PPA) é a lei orçamentária de planejamento de médio prazo. Sobre o seu período de vigência e abrangência constitucional:",
        [("A", "Tem vigência de 1 ano coincidente com o ano civil solar."),
         ("B", "Tem vigência de 4 anos, iniciando-se no segundo ano do mandato do Chefe do Executivo e encerrando-se no final do primeiro ano do mandato subsequente, estabelecendo as diretrizes, objetivos e metas para as despesas de capital."),
         ("C", "Tem vigência decenal e vincula todos os municípios do país obrigatoriamente."),
         ("D", "É aprovado por decreto privativo sem votação no Congresso Nacional.")],
        "B", "Art. 165, § 1º, da CF/88 e Art. 35, § 2º, I, do ADCT: O PPA vigora por quatro anos (do 2º ano de mandato até o 1º ano do mandato seguinte), conferindo continuidade às políticas públicas estruturantes e despesas de capital.", "CF/88, art. 165, § 1º; ADCT, art. 35, § 2º, I."))

    qs.append(make_q("q-fin-009", "financeiro", "Lei de Diretrizes Orçamentárias (LDO) - Anexo de Metas Fiscais", "Médio",
        "A Lei de Diretrizes Orçamentárias (LDO), além de orientar a elaboração da LOA e dispor sobre alterações tributárias, deve conter, segundo o Art. 4º da LRF:",
        [("A", "Apenas a lista com os nomes de todos os servidores comissionados do Estado."),
         ("B", "O Anexo de Metas Fiscais, em que serão estabelecidas metas anuais relativas a receitas, despesas, resultados nominal e primário e montante da dívida pública para o exercício e os dois seguintes."),
         ("C", "A autorização compulsória para emissão de moeda pelo Banco Central."),
         ("D", "O plano de privatização de empresas privadas deficitárias.")],
        "B", "Art. 4º, § 1º, da Lei Complementar nº 101/2000 (LRF): Integrará o projeto de lei de diretrizes orçamentárias Anexo de Metas Fiscais, em que serão estabelecidas metas anuais, em valores correntes e constantes, relativas a receitas, despesas, resultados nominal e primário e montante da dívida pública.", "LC nº 101/2000, art. 4º, § 1º."))

    qs.append(make_q("q-fin-010", "financeiro", "Renúncia de Receita e Requisitos da LRF", "Difícil",
        "Governador sancionou lei estadual concedendo isenção tributária geral de IPVA sem estimativa de impacto orçamentário-financeiro e sem medidas de compensação por aumento de outros tributos. Conforme o Art. 14 da LRF:",
        [("A", "A concessão é plenamente válida pela soberania política do Governador."),
         ("B", "A renúncia de receita fiscal é ilegal se desacompanhada de estimativa do impacto orçamentário-financeiro no exercício em que deva iniciar sua vigência e nos dois seguintes, e da demonstração de que não afetará as metas fiscais ou de medidas compensatórias."),
         ("C", "A LRF não se aplica a impostos estaduais incidentes sobre veículos."),
         ("D", "A renúncia só gera nulidade se houver parecer desfavorável da OAB.")],
        "B", "Art. 14 da LC 101/2000: A concessão ou ampliação de incentivo ou benefício de natureza tributária da qual decorra renúncia de receita deverá estar acompanhada de estimativa do impacto orçamentário-financeiro no exercício em que deva iniciar sua vigência e nos dois seguintes e atender a condições fiscais estritas.", "LC nº 101/2000, art. 14."))

    # 7. Eleitoral (+8 -> 15)
    qs.append(make_q("q-eleit-008", "eleitoral", "Ação de Impugnação de Registro de Candidatura (AIRC)", "Médio",
        "Após a publicação do edital contendo os pedidos de registro de candidaturas para as eleições municipais, partido adversário pretende impugnar a candidatura de candidato ficha-suja. O prazo e a legitimidade para propor a AIRC são:",
        [("A", "Prazo de 15 dias após a diplomação pelo Presidente da Câmara."),
         ("B", "Prazo de 5 dias contados da publicação do edital, por qualquer candidato, partido político, coligação ou pelo Ministério Público Eleitoral."),
         ("C", "Prazo de 24 horas exclusivamente pelo Delegado de Polícia local."),
         ("D", "Prazo de 30 dias por qualquer cidadão eleitor em nome próprio.")],
        "B", "Art. 3º da Lei Complementar nº 64/1990: Caberá a qualquer candidato, a partido político, coligação ou ao Ministério Público, no prazo de 5 (cinco) dias contados da publicação do edital relativo ao pedido de registro, impugná-lo em petição fundamentada.", "LC nº 64/1990, art. 3º."))

    qs.append(make_q("q-eleit-009", "eleitoral", "Propaganda Eleitoral na Internet e Impulsionamento", "Fácil",
        "Durante campanha eleitoral, cidadão eleitor comum não filiado a partido contratou pessoalmente empresa de publicidade para impulsionar postagens pagas na internet elogiando seu candidato preferido. Conforme a Lei das Eleições (Lei 9.504/1997):",
        [("A", "O impulsionamento de conteúdo na internet é livre e gratuito a qualquer pessoa física."),
         ("B", "É vedado o impulsionamento de conteúdos e a realização de propaganda paga na internet por pessoa natural, sendo o impulsionamento permitido exclusivamente a candidatos, partidos ou coligações e contratado diretamente com provedores."),
         ("C", "O cidadão pode impulsionar desde que não mencione o número do candidato."),
         ("D", "A propaganda é autorizada mediante prévio registro na Justiça do Trabalho.")],
        "B", "Art. 57-C da Lei nº 9.504/1997: É vedada a veiculação de qualquer tipo de propaganda eleitoral paga na internet, excetuado o impulsionamento de conteúdos, desde que identificado de forma inequívoca como tal e contratado exclusivamente por partidos, coligações e candidatos e seus representantes.", "Lei nº 9.504/1997, art. 57-C, caput e § 1º."))

    qs.append(make_q("q-eleit-010", "eleitoral", "Cláusula de Desempenho / Barreira (EC 97/2017)", "Difícil",
        "Partido político obteve apenas 0,5% dos votos válidos na eleição para a Câmara dos Deputados em todo o território nacional. Em decorrência da cláusula de barreira instituída pela Emenda Constitucional nº 97/2017, esse partido:",
        [("A", "Tem seu registro partidário cancelado e os deputados eleitos perdem o mandato."),
         ("B", "Não terá direito aos recursos do Fundo Partidário nem ao acesso gratuito ao rádio e à televisão, mas os parlamentares eleitos mantêm o mandato e podem migrar para outra legenda sem perda de mandato por infidelidade."),
         ("C", "É incorporado compulsoriamente ao partido mais votado do país."),
         ("D", "Fica proibido de registrar candidaturas por 20 anos.")],
        "B", "Art. 17, § 3º e § 5º, da CF/88 (EC 97/2017): Somente terão direito a recursos do fundo partidário e acesso gratuito ao rádio e à televisão os partidos que atingirem a cláusula de desempenho. Os eleitos por legenda que não a atingir podem filiar-se a outro partido sem perda do mandato.", "CF/88, art. 17, §§ 3º e 5º."))

    # 8. Filosofia (+8 -> 15)
    qs.append(make_q("q-filo-008", "filosofia", "Teoria Tridimensional do Direito de Miguel Reale", "Fácil",
        "O jurista brasileiro Miguel Reale formulou a 'Teoria Tridimensional do Direito', de ampla repercussão na epistemologia jurídica nacional. Segundo Reale, o fenômeno jurídico é a integração dialética e dinâmica de:",
        [("A", "Poder, Coação e Soberania."),
         ("B", "Fato, Valor e Norma (o fato social integrado pelo valor moral que culmina na norma jurídica em uma dialética de implicação e polaridade)."),
         ("C", "Crime, Pena e Execução carcerária."),
         ("D", "Estado, Governo e Mercado financeiro.")],
        "B", "Miguel Reale desenvolveu a Teoria Tridimensional Específica do Direito: a experiência jurídica pressupõe a conjunção indissociável de três fatores: um fato subjacente (econômico, histórico, social); um valor que confere sentido a esse fato; e a regra ou norma que integra o fato ao valor.", "Miguel Reale, 'Teoria Tridimensional do Direito' (1968)."))

    qs.append(make_q("q-filo-009", "filosofia", "Norberto Bobbio - Ordenamento Jurídico e Coerência", "Médio",
        "Em 'Teoria do Ordenamento Jurídico', Norberto Bobbio estuda as antinomias jurídicas e os critérios para sua resolução. Diante do conflito entre o critério cronológico (lei posterior derroga anterior) e o critério hierárquico (lei superior derroga inferior), prevalece:",
        [("A", "O critério cronológico sempre, em virtude do princípio democrático."),
         ("B", "O critério hierárquico (lex superior derogat legi inferiori), que é mais forte que o cronológico (antinomia de segundo grau)."),
         ("C", "O critério da especialidade unicamente se a lei for penal."),
         ("D", "A discricionariedade do juiz para escolher qualquer das duas leis livremente.")],
        "B", "Norberto Bobbio analisa as antinomias de segundo grau (conflito entre os próprios critérios de solução de antinomias): o conflito entre o critério hierárquico e o cronológico é resolvido em favor do critério hierárquico (a lei superior anterior prevalece sobre a lei ordinária posterior).", "Norberto Bobbio, 'Teoria do Ordenamento Jurídico'."))

    qs.append(make_q("q-filo-010", "filosofia", "Jusnaturalismo Racionalista - Hugo Grócio", "Fácil",
        "No limiar da modernidade, o jurista holandês Hugo Grócio formulou a célebre frase 'etsi Deus non daretur' (mesmo que Deus não existisse), marcando a transição do direito natural teológico medieval para o:",
        [("A", "Positivismo kelseniano puro sem valores éticos."),
         ("B", "Jusnaturalismo racionalista ou laico, que fundamenta o direito natural na própria razão humana e na natureza sociável do homem, independentemente de revelação divina."),
         ("C", "Marxismo soviético revolucionário."),
         ("D", "Realismo jurídico escandinavo psicológico.")],
        "B", "Hugo Grócio (em 'De Jure Belli ac Pacis', 1625) laicizou o direito natural, sustentando que suas normas derivam da razão humana e seriam válidas mesmo na hipótese impensável de Deus não existir (etsi Deus non daretur), inaugurando a escola do jusracionalismo moderno.", "Hugo Grócio, 'Do Direito da Guerra e da Paz' (1625)."))

    print(f"Generated {len(qs)} supplement questions.")
    return qs

if __name__ == '__main__':
    qs = get_supplement_questions()
    print("Supplement count:", len(qs))
