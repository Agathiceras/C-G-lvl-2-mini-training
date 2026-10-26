/* ============================================================
   EM course training · Code & Game 2 [2197] · PORTUGUESE (Brazil)
   Translate only the text inside quotes / backticks. Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names and the 'yes' / 'no' answer keys unchanged.
   ============================================================ */
window.COURSE = { lang: 'pt' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'Formação de curso EM',
  footer: 'kodland · Novo Modelo Educacional · Formação de curso',
  devLink: '🛠 Developer',
  logoSub: 'Novo Modelo Educacional',
  navHome: '← Início',
  navBackModule: '← Voltar ao módulo',
  moduleN: 'Módulo {n}',
  badgeStart: 'Começar →',
  badgeLocked: '🔒 Conclua o Módulo {n}',
  badgeDone: '✓ Concluído · {score}%',
  progLabel: 'módulos concluídos',
  progAllDone: 'Módulos concluídos 🎉',
  eyebrow: '{course} · Módulo {n} de {total}',
  ctaTitle: 'Verificação do módulo',
  ctaText: '{n} perguntas curtas. Acerte 70% ou mais para passar.',
  lockSim: '🔒 Conclua a simulação de publicação no Kodland Sparks (acima) para liberar a verificação.',
  startCheck: 'Começar a verificação →',
  retake: '🔁 Refazer a verificação',
  qmeta: '{e} Verificação do Módulo {n} · Pergunta {i} de {total}',
  fbRight: '✅ <b>Correto!</b> ',
  fbWrong: '❌ <b>Não exatamente.</b> ',
  nextQuestion: 'Próxima pergunta →',
  seeResult: 'Ver meu resultado →',
  passedTitle: 'Você passou!',
  failTitle: 'Quase lá',
  scoreLine: 'Você acertou <b>{score} de {n}</b>.',
  failText: 'É preciso acertar 70% ou mais. Revise o módulo e tente de novo — você pode refazer quantas vezes precisar.',
  nextUnlocked: '<b>Módulo {n} · {title}</b> foi liberado.',
  goModule: 'Ir para o Módulo {n} →',
  allDoneText: 'Você concluiu os dois módulos desta formação.',
  seeNext: 'Ver o próximo passo →',
  reviewModule: '📖 Revisar o módulo',
  homeDoneTitle: 'Módulos concluídos!',
  homeDoneText: 'Falta um último passo: o teste DST na página da formação no LMS.',
  homeDoneBtn: 'Ver o que fazer agora →',
  doneBadge: '✓ Concluído',
  doneBack: 'Voltar aos módulos',
  lockedTitle: 'Ainda bloqueado',
  lockedModule: 'Conclua primeiro o Módulo {n}.',
  lockedStep: 'Conclua o passo anterior para liberar este.',
  ok: 'OK',
  linkOpen: 'Abrir ↗',
  projPlay: '▶ Abrir no Kodland Sparks ↗',
  simOpen: '▶ Abrir a simulação aqui',
  simClose: '✕ Fechar a simulação',
  simNewTab: 'Abrir em outra aba ↗',
  simDone: '✅ Simulação concluída',
  simTodo: '○ Simulação pendente',
  checkTag: 'Marque',
  mythTag: 'Mito',
  mythTap: 'Toque para ver a realidade →',
  mythReality: 'Realidade ✓',
  sortWrong: '✗ Não exatamente.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'cg2';
COURSE.code = '2197';
COURSE.title = 'Code & Game 2';
COURSE.color = '#F97316';

COURSE.home = {
  kicker: '🎓 Formação de curso · [2197]',
  title: 'Code & Game <span class="hl">2</span>',
  lead: 'Para alunos de 10–12 anos: dos blocos a uma engine de verdade, com jogos, um aplicativo e um site, tudo publicado no portfólio do Kodland Sparks. Dois módulos: o conteúdo do curso e a parte técnica das aulas.',
  facts: [
    ['🧑‍💻', '<b>No seu ritmo.</b> O progresso fica salvo neste navegador. Cada módulo termina com uma verificação curta.'],
    ['⚡', '<b>Prática incluída.</b> Uma simulação do Kodland Sparks para treinar a publicação de projetos e os problemas mais comuns.']
  ]
};

COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Antes de começar:</b> faça primeiro a <b>formação principal do Novo Modelo Educacional (EM)</b>. Esta formação do curso vem depois e parte do que você já viu lá: o Backoffice e as Teacher Notes, o Classroom com o Follow Mode, o tour pelo Kodland Sparks e a qualidade da aula.' },
  { kind:'warn', e:'🔄', html:'<b>O conteúdo das aulas no Backoffice é atualizado continuamente.</b> A partir do feedback de alunos e tutores, as aulas passam por melhorias constantes. Não se preocupe: quando houver mudanças, você será avisado com antecedência para preparar a aula.' }
];

COURSE.modules = [
  { id:'m1', n:1, e:'🎮', color:'#F97316', title:'O conteúdo do curso',
    desc:'Os dados gerais do curso, o que o aluno conquista, as 4 primeiras aulas e jogos reais publicados por alunos.',
    obj:'Prepare-se para dar as primeiras aulas do Code & Game 2. Nelas, alunos de 10–12 anos partem de um jogo pronto no MakeCode Arcade e o transformam em um projeto autoral, publicado no Kodland Sparks.',
    offer:[['🌈','Conhecer os dados gerais do curso e o que o aluno conquista.'],['📖','Saber o que acontece em cada uma das 4 primeiras aulas.'],['⚡','Ver jogos reais publicados por alunos no Kodland Sparks.'],['📘','Revisar as aulas e as Teacher Notes no Backoffice.']],
    sections:[
      { id:'ov', e:'🌈', title:'O curso', blocks:[
        { t:'meta', items:[['👦','Idade','10–12 anos'],['⏱️','Aula','90 min'],['📚','Programa','40 aulas · 10 módulos'],['🕹️','Módulo 1','MakeCode Arcade']] },
        { t:'trio', items:[
          ['🧱','Dos blocos a uma engine de verdade','Os primeiros jogos são montados com blocos, e o resultado aparece já na primeira aula. Depois vêm o código em texto num jogo 3D, um aplicativo, um site próprio, uma engine de jogos de verdade e um jogo do zero. Cada degrau é um pouco mais alto que o anterior.'],
          ['🤖','A IA é uma ferramenta do criador','O assistente de IA trabalha em todos os módulos e, a cada módulo, o aluno confia mais tarefas a ele: primeiro arte e ideias; depois dicas sobre a fase e o código; em seguida, ajuda para montar o aplicativo, o site e o jogo do zero. Quem define a tarefa é o aluno, e é ele quem confere a resposta e decide o que levar para o projeto.'],
          ['🌐','Um portfólio que dá para abrir','Todos os projetos são publicados e abrem por link, então é fácil mostrá-los para os amigos. Esse já é o primeiro portfólio de criador do aluno, e ele cresce a cada módulo.']
        ]},
        { t:'callout', kind:'good', e:'📣', html:'Cada módulo termina com uma <b>mostra de projetos</b>: o aluno apresenta o jogo, explica como ele funciona e por que fez desse jeito. No final do curso, vem o <b>Demo Day</b>.' }
      ]},
      { id:'goals', e:'🎓', title:'Qual é o resultado para o aluno', blocks:[
        { t:'p', html:'Ao final do curso, o aluno vai alcançar estas conquistas:' },
        { t:'cards', cols:2, items:[
          ['🧱','Cria projetos','Nove produtos e o projeto final: jogos, um aplicativo e um site. Tudo fica no portfólio do Kodland Sparks.'],
          ['🚀','Leva a ideia até o Demo Day','Percorre sozinho o caminho da ideia ao lançamento e apresenta o projeto para a turma, explicando com tranquilidade como tudo funciona.'],
          ['⌨️','Escreve código','Primeiro com blocos, depois em texto: variáveis, condições, laços, eventos e funções.'],
          ['🤖','Usa a IA como ferramenta','Define a tarefa, confere a resposta do assistente de IA e decide o que levar para o projeto — em vez de copiar a resposta.'],
          ['💡','Criatividade e trabalho em equipe','O modelo pronto da aula é só o ponto de partida: o herói, a mecânica, o estilo e as regras são do aluno. Os alunos jogam os projetos uns dos outros, testam e dão sugestões.'],
          ['🗣️','Comunicação e pensamento crítico','Apresenta o jogo e explica as próprias decisões. Encontra e corrige bugs, ajusta o equilíbrio do jogo e compara opções.']
        ]}
      ]},
      { id:'les', e:'📖', title:'As 4 primeiras aulas', blocks:[
        { t:'p', html:'O Módulo 1, «Arrancada neon. O primeiro jogo», leva o aluno de um jogo de corrida pronto, com um herói cinza, ao seu próprio jogo: com herói personalizado, pontuação, regras de vitória e derrota e uma mecânica única. Abra cada aula:' },
        { t:'lessons', key:'m1', items:[
          { tab:'M1A1', e:'🌈', h:'Aula 1 — Começamos a nossa história', p:'Primeira aula do curso. Os alunos se conhecem, combinam como vão trabalhar juntos, abrem o jogo pronto no MakeCode Arcade, mudam o nome dele, criam um herói próprio no editor de sprites e publicam o primeiro projeto no Kodland Sparks.',
            acc:[['📚','O que você precisa saber','<ul><li>O jogo pronto abre por um link no <b>MakeCode Arcade</b>; para entrar no projeto, clique em <b>Edit Code</b>.</li><li>Para mudar o nome do jogo: o bloco roxo com o campo «Untitled».</li><li>O herói é criado num bloco de código: ao clicar nele, abre-se o <b>editor de sprites</b>, onde o aluno escolhe cores e desenha o herói.</li><li>Se o aluno não souber que herói criar, pode pedir ideias ao <b>Kodland AI</b> ou escolher um sprite pronto da galeria do MakeCode.</li><li>Publicação: no MakeCode, <b>Share</b> e copiar o link; no Sparks, <b>Publish project</b>.</li></ul>'],
                 ['🎯','Resultado-chave','<ul><li>O jogo pronto abre e roda no MakeCode Arcade.</li><li>O jogo tem nome próprio e um herói do aluno no lugar do quadrado cinza.</li><li>O link do MakeCode foi acrescentado ao projeto publicado no Sparks.</li><li>O link do projeto no Sparks foi enviado no campo de entrega do cartão.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Receba o grupo com calor, apresente-se e deixe cada aluno contar um pouco sobre si, por voz ou no chat (cerca de 30 segundos cada), valorizando os interesses em comum.</li><li>Converse sobre as regras de trabalho em equipe como uma recomendação para todos se sentirem bem, e não como uma lista de proibições.</li><li>Mostre como abrir o jogo, entrar no editor, rodar e achar o sprite do herói. Mas o nome, o visual e a história do herói são escolha do aluno.</li><li>Não avalie a qualidade artística do sprite: o importante é o jogo funcionar e o ciclo de publicação ser concluído.</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li>Confira se cada aluno abriu o jogo, entrou pelo <b>Edit Code</b> e rodou.</li><li>Se depois de uma mudança o jogo parar, ajude a desfazer as últimas ações e voltar à versão que funcionava.</li><li>A IA pode ajudar a imaginar o herói, mas <b>quem decide é o autor</b>.</li><li>Não reduza a apresentação dos projetos: ela reforça a autoria e cria a cultura do feedback positivo.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Antes de publicar, confira se o link do Share abre um jogo que funciona, e se o que vai para o Sparks é o link do <b>projeto publicado</b>.</li><li>Tarefa de casa: mudar a cor de fundo e o intervalo (1200 ms) com que os obstáculos aparecem. Desafio extra: gerar o herói com IA, convertendo a imagem para código (24×24, nome <code>hero</code>) e inserindo <code>hero.setImage(...)</code> no JavaScript.</li></ul>']] },
          { tab:'M1A2', e:'🪙', h:'Aula 2 — A caça aos pontos', p:'Os alunos voltam ao mesmo jogo e acrescentam um objetivo para o herói: coletar itens e contar pontos. Aprendem variáveis e eventos, vêem a pontuação na tela e fazem o toque no item somar pontos.',
            acc:[['📚','O que você precisa saber','<ul><li>Pontuação: um <b>número que o jogo guarda e muda</b> (a variável <code>score</code>).</li><li>Tocar no item é um <b>evento</b>: depois dele, o número muda.</li><li>No tratamento do toque, os tipos <code>Player</code> e <code>Food</code> precisam coincidir; depois de <code>change score by 1</code>, vem <code>destroy otherSprite</code>, senão o item continua na tela.</li><li>O assistente <b>Kodland AI</b> oferece opções de item para coletar, mas a decisão é do aluno.</li></ul>'],
                 ['🎯','Resultado-chave','<ul><li>O jogo mostra a pontuação, que começa em 0.</li><li>Na tela aparecem e se movem itens para coletar.</li><li>Tocar no item aumenta a pontuação e tira o item da tela.</li><li>O projeto é publicado no Sparks e o link é entregue na aula.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>No começo, converse sobre a lição de casa e confira se todos abrem o projeto da aula anterior. Se o projeto não roda, entregue o link do projeto pronto.</li><li>Conduza a prática em passos curtos, testando com <b>Play</b>: primeiro a pontuação, depois o item, depois o evento de toque.</li><li>Não reduza o trabalho a copiar blocos: deixe o aluno escolher <b>o que</b> o herói vai coletar e ver como a escolha muda o jogo.</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li>O bloco <code>set score to 0</code> deve ficar onde o jogo se prepara para começar.</li><li>Se houver bugs, compare a posição dos blocos com os passos do cartão.</li><li>Antes da entrega, confira se o link do MakeCode abre o jogo e se o campo de resposta tem o link do projeto <b>publicado no Sparks</b>.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>O fluxo é o mesmo da Aula 1: Share no MakeCode → Publish project no Sparks → enviar o link do Sparks.</li><li>Lição de casa: tornar a mecânica de coleta mais interessante.</li></ul>']] },
          { tab:'M1A3', e:'🏁', h:'Aula 3 — Novos desafios', p:'Os alunos aprimoram o jogo: escolhem uma condição de vitória, configuram a vitória e a derrota, testam o ritmo do jogo e publicam o resultado. Entendem como as condições do código decidem o fim do jogo.',
            acc:[['📚','O que você precisa saber','<ul><li>Uma <b>condição</b> no código é uma regra que decide o que acontece: o jogador precisa cumprir algo para vencer.</li><li>A vitória pode ser por <b>pontos, tempo, sobrevivência</b> ou uma variante própria.</li><li>A derrota acontece, por exemplo, no <b>choque com um obstáculo</b>.</li><li>O aluno testa as configurações escolhidas rodando o jogo.</li></ul>'],
                 ['🎯','Resultado-chave','<ul><li>O jogo tem uma condição de vitória clara.</li><li>O jogo encerra a rodada corretamente na vitória e no choque com o obstáculo.</li><li>A condição de vitória é alcançável e o ritmo do jogo foi testado.</li><li>O projeto está publicado no Sparks e o link foi entregue.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Confira se os projetos abrem e defina o foco da aula: o jogo precisa ter condições de vitória e de derrota claras.</li><li>Ajude cada aluno a escolher uma condição possível, mas deixe tempo para ele decidir sozinho.</li><li>Na prática, oriente com perguntas, apoie a depuração e proponha um desafio extra a quem terminar.</li><li>No final, confirme que publicaram, entregaram o link e deram feedback positivo uns aos outros.</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li>Ajude a escolher uma condição que dê para implementar e para <b>cumprir</b>.</li><li>Sugira que o aluno mude sozinho primeiro a reação ao choque; dê a solução pronta só se ele travar.</li><li>Lembre de testar <b>a vitória e a derrota</b> rodando o jogo.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Se o projeto de um aluno não roda, entregue o link do projeto pronto.</li><li>Antes da mostra, confira a publicação no Sparks e o envio do link.</li><li>Lição de casa: ajustar uma dificuldade justa, com os parâmetros de aparição e de velocidade dos obstáculos.</li></ul>']] },
          { tab:'M1A4', e:'🚀', h:'Aula 4 — Preparação para o lançamento', p:'Aula final do módulo. Os alunos acrescentam ao jogo uma mecânica própria (com a ajuda da IA), testam os projetos uns dos outros em duplas, publicam o resultado no Sparks e mostram para a equipe.',
            acc:[['📚','O que você precisa saber','<ul><li>Uma boa pergunta à IA tem <b>contexto</b> (em que plataforma está o projeto e o que ele já tem), <b>limites</b> (o que pode e não pode mudar) e uma <b>ideia</b> clara. Um pedido vago, como «faça meu jogo mais legal», não ajuda.</li><li>Ideias de mecânica: 3 vidas, momento de invulnerabilidade, aceleração, pontos em dobro, câmera lenta.</li><li>Teste em dupla: o testador <b>não avalia o gosto artístico</b>, mas aponta o que pode atrapalhar o jogo (inicia? as telas de fim aparecem? a meta é clara? o controle é confortável?).</li></ul>'],
                 ['🎯','Resultado-chave','<ul><li>O jogo tem uma mecânica própria funcionando.</li><li>O projeto foi testado por outro aluno.</li><li>O jogo está publicado no Kodland Sparks.</li><li>O aluno consegue mostrar e explicar brevemente a solução dele.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Ajude a escolher uma ideia que dê para concluir e lembre: <b>a IA sugere opções, e a decisão é do aluno</b>.</li><li>Organize a troca de links para o teste e acompanhe a publicação.</li><li>Se o número de alunos for ímpar, teste você mesmo um projeto e entregue ao aluno um projeto pronto para testar.</li><li>No final, faça uma reflexão sobre o módulo e lembre que, em casa, o jogo pode ser melhorado com o feedback dos testes.</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li>Reduza uma ideia grande demais a <b>uma única mecânica</b> e peça que o aluno rode o jogo depois de cada mudança importante.</li><li>Não deixe a IA substituir a decisão do autor: o aluno escolhe a ideia e confere o resultado.</li><li>Se o jogo quebrar, peça para desfazer as últimas ações e voltar à versão que funcionava.</li><li>Ninguém é obrigado a apresentar: o aluno pode mandar o link do projeto no chat.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Para testar, cada aluno faz o <b>Share</b> no MakeCode e troca o link com a dupla.</li><li>Antes de encerrar, confira se o link do Sparks leva a um jogo que funciona.</li></ul>']] }
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'A primeira Teacher Note de cada aula tem o plano completo: resumo, resultado-chave, o seu papel, os tempos de cada cartão e os pontos de atenção. Em algumas aulas também há um vídeo de preparação. <b>Leia todas as Teacher Notes antes da aula.</b>' }
      ]},
      { id:'proj', e:'⚡', title:'Projetos reais de alunos', blocks:[
        { t:'p', html:'É assim que ficam os jogos do Code & Game 2 depois de publicados no Kodland Sparks. Abra-os para jogar na plataforma:' },
        { t:'projects', items:[
          { href:'https://portfolio.kodland.org/DeBohpodast/cmrn7ywpd007yqv3fvuanrprs', img:'https://portfolio.kodland.org/api/projects/cmrn7ywpd007yqv3fvuanrprs/file?variant=thumb', e:'🎮', color:'#F97316', tag:'Web App', title:'Game 3 Web', by:'DeBohpodast', desc:'Um jogo com menus claros e bem organizados — e com suporte a vários idiomas, como destacou o tutor de IA na avaliação.' },
          { href:'https://portfolio.kodland.org/DeBohpodast/cmrn729cf004mqv3fp20b1em3', img:'https://portfolio.kodland.org/api/projects/cmrn729cf004mqv3fp20b1em3/file?variant=thumb', e:'🏃', color:'#0EA5E9', tag:'Web App', title:'Crystal Dash, a 16-bit Runner', by:'DeBohpodast', desc:'Um jogo de corrida 16-bit: correr, coletar moedas, desviar de obstáculos, escolher a dificuldade e liberar novos mundos.' }
        ]},
        { t:'callout', kind:'tip', e:'🤖', html:'Os dois projetos receberam uma <b>avaliação do tutor de IA</b>, publicada pelo próprio aluno na página do projeto. Isso rende cristais e mostra ao aluno o que já está funcionando bem.' }
      ]},
      { id:'bo', e:'📘', title:'Revise as aulas no Backoffice', blocks:[
        { t:'p', html:'Antes da verificação, abra o curso no Backoffice e leia as quatro aulas no seu ritmo — os cartões de atividade e as Teacher Notes estão todos lá. Não há tempo limite.' },
        { t:'link', href:'https://bo.kodland.org/courses/2197', e:'📘', title:'Abrir o curso no Backoffice', small:'[2197] Code & Game 2 — as aulas e as Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'O conteúdo das aulas no Backoffice vai sendo atualizado com o feedback de alunos e tutores. Quando houver mudanças, você será avisado com antecedência para preparar a aula.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'A parte técnica das aulas',
    desc:'Um início forte, publicar e enviar o link em todas as aulas, e os problemas técnicos mais comuns.',
    obj:'Saiba o que garante o sucesso técnico das aulas do Code & Game 2: um início forte, a publicação no Kodland Sparks e o envio do link em <b>todas</b> as aulas, e as soluções para os problemas técnicos mais comuns.',
    needs:['sparksPublish'],
    offer:[['🚀','Fazer da A1 e da A2 um início forte, com um resultado rápido e visível.'],['📤','Garantir que todos publiquem e enviem o link em todas as aulas — e conferir.'],['🌍','Explicar aos alunos por que o Sparks vale a pena.'],['🏁','Fechar o Módulo 1 mostrando conquistas e despertando o interesse pelo Módulo 2.']],
    sections:[
      { id:'focus', e:'🎯', title:'Os 4 pontos que garantem o sucesso', blocks:[
        { t:'p', html:'Estes são os pontos de foco definidos pelo time de produto para o Code & Game. Abra cada um:' },
        { t:'acc', items:[
          ['🚀','A1–A2: um início forte','<p>As duas primeiras aulas decidem se o aluno quer voltar. Os objetivos são <b>conhecer o grupo</b> e chegar a um <b>resultado rápido e visível</b>.</p><ul><li>Na apresentação, chame cada aluno pelo nome e pergunte de que jogos ele gosta.</li><li>Na A1, todos precisam ver o <b>próprio herói</b> no jogo; na A2, os itens somando pontos.</li><li>Garanta que <b>cada aluno termine a aula com algo funcionando</b> — mesmo que seja a versão mínima.</li></ul>'],
          ['📤','Publicar e enviar o link em todas as aulas','<p>Em <b>todas as aulas</b>, desde a Aula 1, o aluno publica o jogo no Kodland Sparks e envia o link, e você confere.</p><ul><li>O link enviado no cartão deve ser o do <b>projeto já publicado no Sparks</b>.</li><li>O link do Share do MakeCode serve para o aluno colocar no projeto do Sparks e para o teste entre colegas.</li><li>Reserve um tempo no fim da aula: a publicação não pode ser deixada para depois.</li></ul>'],
          ['🌍','Os benefícios do Sparks','<p>Explique aos alunos por que publicar vale a pena:</p><ul><li><b>Comunidade:</b> o jogo aparece no Feed e no portfólio.</li><li><b>Playtest:</b> outros jogadores testam o jogo de verdade e mostram o que está fácil ou difícil demais.</li><li><b>Feedback:</b> dos jogadores (com <b>Request feedback</b>) e da IA, que destaca pontos fortes — e ainda rende cristais.</li></ul>'],
          ['🏁','Última aula do M1: conquistas e gancho para o M2','<p>Na Aula 4, mostre o que os alunos conquistaram — do jogo pronto ao jogo deles, com mecânica própria — e <b>desperte o interesse pelo Módulo 2</b>.</p><ul><li>Faça o desfile de projetos: cada aluno mostra a mecânica que criou e como ela muda a partida.</li><li>Lembre as habilidades do módulo: criar a partir de um modelo, melhorar com ideias próprias, usar a IA como ajudante, testar e publicar.</li><li>Encerre com uma prévia curta e envolvente do próximo módulo.</li></ul>']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Publicar no Kodland Sparks em todas as aulas', blocks:[
        { t:'p', html:'Publicar parece simples, mas é aqui que aparecem os problemas que chegam até você: o link que não abre, o projeto que não aparece no Feed, as duplicatas. Estes são os passos de cada publicação:' },
        { t:'steps', items:[
          ['Preparar o jogo no MakeCode','No MakeCode, clique em <b>Share</b> e copie o link do jogo. Confira se o link abre e se o jogo funciona.'],
          ['Publicar no Sparks','No Sparks, no menu superior, clique em <b>Publish project</b> (ao lado de Feed, My projects e Studio). Preencha o cartão do projeto: título, descrição curta e o link do MakeCode.'],
          ['Escolher a visibilidade','<b>Public</b> aparece no Feed e no portfólio público. <b>Friends only</b> só para amigos e professores. <b>Only me</b> deixa o projeto privado — ninguém mais consegue abrir o link, nem você. O essencial é garantir que <b>o tutor tenha acesso ao link</b>.'],
          ['Ativar Request feedback (se o aluno quiser)','Assim outros jogadores podem deixar um feedback estruturado. Funciona só em projetos públicos.'],
          ['Copiar o link do Sparks e enviar no cartão','O link é o endereço da página do projeto: em <b>My projects</b>, o aluno abre o <b>projeto publicado</b> e copia o link da <b>barra de endereço do navegador</b>. Deve ser o do <b>projeto publicado no Sparks</b>, não o do MakeCode. Vale lembrar: publicar no Sparks e enviar o link na plataforma são <b>dois passos diferentes</b>.']
        ]},
        { t:'sim', flag:'sparksPublish', src:'sparks-publish/Sparks_Publish.html', e:'⚡', badge:'Simulação', title:'Publicar no Kodland Sparks', text:'Uma réplica do Kodland Sparks: você publica um projeto como uma aluna, conhece as três opções de visibilidade e resolve os dois problemas mais comuns. Cerca de 5 minutos. A verificação do módulo é liberada quando você termina.' }
      ]},
      { id:'trouble', e:'🛠️', title:'Quando algo dá errado', blocks:[
        { t:'acc', open:false, items:[
          ['🔒','O link do aluno não abre','<p>Quase sempre o projeto foi salvo como <b>Only me</b> (aparece a etiqueta <b>Private project</b>).</p><p>Peça ao aluno: <b>My projects → abrir o projeto → Edit → Public → Publish</b>. O link continua o mesmo e passa a abrir para todos.</p>'],
          ['🔍','O projeto não aparece no Feed','<p>O Feed mostra o último tipo de projeto filtrado. Peça ao aluno que <b>filtre pelo tipo do projeto</b> ou busque pelo apelido.</p>'],
          ['🔗','O aluno enviou o link do MakeCode','<p>O Share do MakeCode é só técnico: serve para colocar no projeto do Sparks e para o teste entre colegas. O link que vale no cartão é o do <b>projeto publicado no Sparks</b>.</p>'],
          ['👯','Apareceram projetos duplicados','<p>O aluno publicou de novo em vez de atualizar o projeto. Para atualizar, o caminho é <b>My projects → Edit → Project link</b>.</p>'],
          ['📂','O projeto do aluno não abre ou não roda','<p>Entregue o link do projeto pronto da aula. Se o jogo parar depois de uma mudança, peça para usar o botão de desfazer até voltar à versão que funcionava — e tentar de novo.</p>'],
          ['🔢','A pontuação zera o tempo todo ou o item não soma','<p>Confira se o <code>set score to 0</code> está onde o jogo se prepara para começar, e não em um laço. No toque, os tipos <code>Player</code> e <code>Food</code> precisam coincidir, e depois do <code>change score by 1</code> vem o <code>destroy otherSprite</code>.</p>'],
          ['🖼️','O herói gerado com IA não aparece (desafio extra da A1)','<p>No conversor de imagem para código: tamanho <b>24×24</b>, nome <code>hero</code> e fundo transparente. O código <code>hero.setImage(...)</code> vai em uma linha nova no final do JavaScript, sem apagar o código antigo.</p>']
        ]}
      ]},
      { id:'check', e:'✅', title:'Checklist técnico de cada aula', blocks:[
        { t:'check', title:'✅ Meu checklist técnico', groups:[
          { h:'☑️ Antes da aula', items:['Li todas as Teacher Notes da aula e vi o vídeo de preparação, quando há.','Abri o jogo pronto da aula e sei onde está o link do projeto de reserva.'] },
          { h:'🎬 Durante a aula', items:['Peço que rodem o jogo (Play) depois de cada mudança.','Uso o Follow Mode para os cartões e compartilho só a aba da ferramenta nas demonstrações.'] },
          { h:'📤 No fim da aula', items:['Todos publicaram o jogo no Sparks.','Todos enviaram o link do <b>Sparks</b> — não o do MakeCode — no cartão da aula.','Abri pelo menos alguns links para conferir se estão funcionando e se não há duplicatas.'] }
        ]}
      ]}
    ]}
];

COURSE.quiz = {
  m1:[
    { q:'Para quem é o Code & Game 2 e quanto dura cada aula?',
      o:['Para alunos de 10–12 anos, com aulas de 90 minutos em grupo.','Para alunos de 6–7 anos, com aulas de 30 minutos.','Para alunos de 15–17 anos, com aulas de 120 minutos.'],
      a:0, e:'O Code & Game 2 é para alunos de 10–12 anos, com 40 aulas de 90 minutos em grupo.' },
    { q:'Como o curso evolui ao longo dos módulos?',
      o:['Os alunos escrevem código em texto desde a primeira aula, sem nenhum modelo.','Começa com jogos em blocos, com resultado já na primeira aula, e depois passa ao código em texto, a um aplicativo, a um site, a uma engine e a um jogo do zero.','Todos os módulos usam exatamente a mesma ferramenta.'],
      a:1, e:'Dos blocos a uma engine de verdade: cada degrau é um pouco mais alto que o anterior.' },
    { q:'Qual é o papel do assistente de IA no curso?',
      o:['Programa os jogos no lugar do aluno.','É uma ferramenta: o aluno define a tarefa, confere a resposta e decide o que levar para o projeto.','Dá a nota final do aluno.'],
      a:1, e:'O aluno confia mais tarefas à IA a cada módulo, mas quem define a tarefa e decide é ele.' },
    { q:'O que o aluno leva do curso, no fim?',
      o:['Uma prova final escrita.','Nove produtos e um projeto final (jogos, um aplicativo, um site) no portfólio do Kodland Sparks, apresentado no Demo Day.','Só o jogo do Módulo 1.'],
      a:1, e:'Todos os projetos são publicados e abrem por link; no Demo Day o aluno apresenta o projeto final.' },
    { q:'Como cada módulo termina?',
      o:['Com uma mostra de projetos: o aluno apresenta o jogo, explica como funciona e por que fez desse jeito.','Com uma prova de sintaxe.','Sem nenhuma atividade de fechamento.'],
      a:0, e:'Cada módulo termina com uma mostra de projetos, que ensina a comunicar e a dar feedback.' }
  ],
  m2:[
    { q:'Em quais aulas os alunos publicam o jogo no Kodland Sparks e enviam o link?',
      o:['Só na última aula de cada módulo.','Em todas as aulas, desde a Aula 1.','Só quando o jogo está perfeito.'],
      a:1, e:'Desde a Aula 1, em todas as aulas — e você confere se consegue abrir o link.' },
    { ctx:'Um aluno enviou no cartão o link de Share do MakeCode.',
      q:'O que você responde?',
      o:['Está certo, qualquer link serve.','O link do cartão é o do projeto publicado no Kodland Sparks; o Share do MakeCode é só técnico.','Peça que mande o arquivo pelo chat.'],
      a:1, e:'O Share do MakeCode serve para colocar no projeto do Sparks e para o teste entre colegas.' },
    { ctx:'O link de uma aluna não abre para você, e no portfólio dela o projeto aparece como “Private project”.',
      q:'O que ela deve fazer?',
      o:['My projects → abrir o projeto → Edit → Public → Publish.','Criar um projeto novo com Publish project.','Mudar o nome do projeto.'],
      a:0, e:'O projeto foi salvo como Only me. Com Edit → Public → Publish, o mesmo link passa a abrir para todos.' },
    { ctx:'Um aluno diz que o projeto dele está público, mas não aparece no Feed.',
      q:'Qual é a orientação certa?',
      o:['Filtrar o Feed pelo tipo do projeto (ou buscar pelo apelido).','Apagar e publicar de novo.','Esperar até a próxima aula.'],
      a:0, e:'O Feed mostra um tipo de projeto por vez. Filtrando pelo tipo certo, o projeto aparece.' },
    { q:'Como você mostra os cartões da aula e as demonstrações?',
      o:['Compartilhando a tela inteira, com tudo aberto.','Com o Follow Mode para os cartões e compartilhando só a aba da ferramenta nas demonstrações.','Sem compartilhar nada: os alunos leem sozinhos.'],
      a:1, e:'Follow Mode para os cartões; nas demonstrações, só a aba da ferramenta.' }
  ]
};

COURSE.done = {
  title: 'Módulos concluídos!',
  html: `<p>Você está quase lá! Volte à página da formação no LMS, onde você acessou esta formação. O teste DST está logo abaixo da formação.</p>
    <p>👉 <b>Você precisa fazer e passar no teste DST para que a formação seja considerada concluída.</b> Se você não fizer o DST, a formação vai continuar incompleta e pode expirar.</p>
    <p>A nota mínima para passar é <b>80%</b>.</p>
    <p>Boa sorte! ❤️</p>`,
  nexts: [
    ['📒', '<b>Antes de cada aula:</b> leia as Teacher Notes no Backoffice e veja o vídeo de preparação, quando há.'],
    ['📤', '<b>Em todas as aulas:</b> todos publicam no Sparks e enviam o link do Sparks no cartão.'],
    ['🤖', '<b>A IA é uma ferramenta:</b> o aluno define a tarefa, confere a resposta e decide.'],
    ['🚀', '<b>A1–A2:</b> conheça o grupo e chegue rápido a um resultado visível.']
  ]
};
