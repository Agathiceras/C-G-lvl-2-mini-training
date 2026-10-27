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
    desc:'Os dados gerais do curso, o que o aluno conquista, a Aula 1 e jogos reais publicados por alunos.',
    obj:'Prepare-se para dar a Aula 1 do Code & Game 2. Nela, alunos de 10–12 anos partem de um jogo pronto no MakeCode Arcade, criam o próprio herói e publicam o primeiro projeto no Kodland Sparks.',
    offer:[['🌈','Conhecer os dados gerais do curso e o que o aluno conquista.'],['📖','Saber o que acontece na Aula 1.'],['⚡','Ver jogos reais publicados por alunos no Kodland Sparks.'],['📘','Revisar a aula e as Teacher Notes no Backoffice.']],
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
      { id:'les', e:'📖', title:'A Aula 1', blocks:[
        { t:'p', html:'O Módulo 1, «Arrancada neon. O primeiro jogo», leva o aluno de um jogo de corrida pronto, com um herói cinza, ao seu próprio jogo. Na Aula 1, ele abre o jogo pronto, muda o nome, cria um herói próprio e publica o primeiro projeto. Abra a aula:' },
        { t:'lessons', key:'m1', items:[
          { tab:'M1A1', e:'🌈', h:'Aula 1 — Começamos a nossa história', p:'Primeira aula do curso. Os alunos se conhecem, combinam como vão trabalhar juntos, abrem o jogo pronto no MakeCode Arcade, mudam o nome dele, criam um herói próprio no editor de sprites e publicam o primeiro projeto no Kodland Sparks.',
            acc:[['📚','O que você precisa saber','<ul><li>O jogo pronto abre por um link no <b>MakeCode Arcade</b>; para entrar no projeto, clique em <b>Edit Code</b>.</li><li>Para mudar o nome do jogo: o bloco roxo com o campo «Untitled».</li><li>O herói é criado num bloco de código: ao clicar nele, abre-se o <b>editor de sprites</b>, onde o aluno escolhe cores e desenha o herói.</li><li>Se o aluno não souber que herói criar, pode pedir ideias ao <b>Kodland AI</b> ou escolher um sprite pronto da galeria do MakeCode.</li><li>Publicação: no MakeCode, <b>Share</b> e copiar o link; no Sparks, <b>Publish project</b>.</li></ul>'],
                 ['🎯','Resultado-chave','<ul><li>O jogo pronto abre e roda no MakeCode Arcade.</li><li>O jogo tem nome próprio e um herói do aluno no lugar do quadrado cinza.</li><li>O link do MakeCode foi acrescentado ao projeto publicado no Sparks.</li><li>O link do projeto no Sparks foi enviado no campo de entrega do cartão.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Receba o grupo com calor, apresente-se e deixe cada aluno contar um pouco sobre si, por voz ou no chat (cerca de 30 segundos cada), valorizando os interesses em comum.</li><li>Converse sobre as regras de trabalho em equipe como uma recomendação para todos se sentirem bem, e não como uma lista de proibições.</li><li>Mostre como abrir o jogo, entrar no editor, rodar e achar o sprite do herói. Mas o nome, o visual e a história do herói são escolha do aluno.</li><li>Não avalie a qualidade artística do sprite: o importante é o jogo funcionar e o ciclo de publicação ser concluído.</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li>Confira se cada aluno abriu o jogo, entrou pelo <b>Edit Code</b> e rodou.</li><li>Se depois de uma mudança o jogo parar, ajude a desfazer as últimas ações e voltar à versão que funcionava.</li><li>A IA pode ajudar a imaginar o herói, mas <b>quem decide é o autor</b>.</li><li>Não reduza a apresentação dos projetos: ela reforça a autoria e cria a cultura do feedback positivo.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Antes de publicar, confira se o link do Share abre um jogo que funciona, e se o que vai para o Sparks é o link do <b>projeto publicado</b>.</li><li>Tarefa de casa: mudar a cor de fundo e o intervalo (1200 ms) com que os obstáculos aparecem. Desafio extra: gerar o herói com IA, convertendo a imagem para código (24×24, nome <code>hero</code>) e inserindo <code>hero.setImage(...)</code> no JavaScript.</li></ul>']] }
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'A primeira Teacher Note da aula tem o plano completo: resumo, resultado-chave, o seu papel, os tempos de cada cartão e os pontos de atenção. Pode haver também um vídeo de preparação. <b>Leia todas as Teacher Notes antes da aula.</b>' }
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
        { t:'p', html:'Antes da verificação, abra o curso no Backoffice e leia a aula no seu ritmo — os cartões de atividade e as Teacher Notes estão todos lá. Não há tempo limite.' },
        { t:'link', href:'https://bo.kodland.org/courses/2197', e:'📘', title:'Abrir o curso no Backoffice', small:'[2197] Code & Game 2 — as aulas e as Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'O conteúdo das aulas no Backoffice vai sendo atualizado com o feedback de alunos e tutores. Quando houver mudanças, você será avisado com antecedência para preparar a aula.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'A parte técnica das aulas',
    desc:'Um início forte, publicar e enviar o link em todas as aulas, e os problemas técnicos mais comuns.',
    obj:'Saiba o que garante o sucesso técnico das aulas do Code & Game 2: um início forte, a publicação no Kodland Sparks e o envio do link em <b>todas</b> as aulas, e as soluções para os problemas técnicos mais comuns.',
    needs:['sparksPublish'],
    offer:[['🚀','Fazer da A1 um início forte, com um resultado rápido e visível.'],['📤','Garantir que todos publiquem e enviem o link em todas as aulas — e conferir.'],['🌍','Explicar aos alunos por que o Sparks vale a pena.']],
    sections:[
      { id:'focus', e:'🎯', title:'Os 3 pontos que garantem o sucesso', blocks:[
        { t:'p', html:'Estes são os pontos de foco definidos pelo time de produto para o Code & Game. Abra cada um:' },
        { t:'acc', items:[
          ['🚀','A1: um início forte','<p>A primeira aula decide se o aluno quer voltar. Os objetivos são <b>conhecer o grupo</b> e chegar a um <b>resultado rápido e visível</b>.</p><ul><li>Na apresentação, chame cada aluno pelo nome e pergunte de que jogos ele gosta.</li><li>Na A1, todos precisam ver o <b>próprio herói</b> no jogo.</li><li>Garanta que <b>cada aluno termine a aula com algo funcionando</b> — mesmo que seja a versão mínima.</li></ul>'],
          ['📤','Publicar e enviar o link em todas as aulas','<p>Em <b>todas as aulas</b>, desde a Aula 1, o aluno publica o jogo no Kodland Sparks e envia o link, e você confere.</p><ul><li>O link enviado no cartão deve ser o do <b>projeto já publicado no Sparks</b>.</li><li>O link do Share do MakeCode serve para o aluno colocar no projeto do Sparks e para o teste entre colegas.</li><li>Reserve um tempo no fim da aula: a publicação não pode ser deixada para depois.</li></ul>'],
          ['🌍','Os benefícios do Sparks','<p>Explique aos alunos por que publicar vale a pena:</p><ul><li><b>Comunidade:</b> o jogo aparece no Feed e no portfólio.</li><li><b>Playtest:</b> outros jogadores testam o jogo de verdade e mostram o que está fácil ou difícil demais.</li><li><b>Feedback:</b> dos jogadores (com <b>Request feedback</b>) e da IA, que destaca pontos fortes — e ainda rende cristais.</li></ul>']
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
          ['🖼️','O herói gerado com IA não aparece (desafio extra da A1)','<p>No conversor de imagem para código: tamanho <b>24×24</b>, nome <code>hero</code> e fundo transparente. O código <code>hero.setImage(...)</code> vai em uma linha nova no final do JavaScript, sem apagar o código antigo.</p>']
        ]}
      ]},
      { id:'check', e:'✅', title:'Checklist técnico de cada aula', blocks:[
        { t:'check', title:'✅ Meu checklist técnico', groups:[
          { h:'☑️ Antes da aula', items:['Li todas as Teacher Notes da aula e vi o vídeo de preparação, quando há.','Abri o jogo pronto da aula e conferi que ele roda no MakeCode Arcade.'] },
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
    { q:'O que os alunos fazem na Aula 1?',
      o:['Programam um jogo do zero, com código em texto.','Criam um site com HTML e CSS.','Abrem o jogo pronto no MakeCode Arcade, mudam o nome, criam o próprio herói e publicam o primeiro projeto no Kodland Sparks.'],
      a:2, e:'Na Aula 1 os alunos se conhecem, abrem o jogo pronto, mudam o nome dele, criam um herói próprio no editor de sprites e publicam o primeiro projeto.' },
    { q:'Qual é o papel do assistente de IA no curso?',
      o:['Programa os jogos no lugar do aluno.','É uma ferramenta: o aluno define a tarefa, confere a resposta e decide o que levar para o projeto.','Dá a nota final do aluno.'],
      a:1, e:'O aluno confia mais tarefas à IA a cada módulo, mas quem define a tarefa e decide é ele.' },
    { q:'O que o aluno leva do curso, no fim?',
      o:['Uma prova final escrita.','Nove produtos e um projeto final (jogos, um aplicativo, um site) no portfólio do Kodland Sparks, apresentado no Demo Day.','Só o jogo do Módulo 1.'],
      a:1, e:'Todos os projetos são publicados e abrem por link; no Demo Day o aluno apresenta o projeto final.' },
    { ctx:'Na Aula 1, um aluno não sabe que herói criar.',
      q:'O que você faz?',
      o:['Deixa que ele peça ideias ao Kodland AI ou escolha um sprite pronto da galeria, lembrando que quem decide é o autor.','Escolhe o herói por ele para não perder tempo.','Avalia a qualidade artística do sprite e pede que ele refaça.'],
      a:0, e:'A IA pode ajudar a imaginar o herói, mas quem decide é o autor. Não se avalia a qualidade artística do sprite: o importante é o jogo funcionar e o ciclo de publicação ser concluído.' }
  ],
  m2:[
    { q:'Quando os alunos publicam o primeiro jogo no Kodland Sparks e enviam o link?',
      o:['Só na última aula de cada módulo.','Já na Aula 1 — e você confere se consegue abrir o link.','Só quando o jogo está perfeito.'],
      a:1, e:'Desde a Aula 1 o aluno publica o jogo e envia o link, e você confere se consegue abrir.' },
    { ctx:'Um aluno enviou no cartão o link de Share do MakeCode.',
      q:'O que você responde?',
      o:['Está certo, qualquer link serve.','O link do cartão é o do projeto publicado no Kodland Sparks; o Share do MakeCode é só técnico.','Peça que mande o arquivo pelo chat.'],
      a:1, e:'O Share do MakeCode serve para colocar no projeto do Sparks e para o teste entre colegas.' },
    { ctx:'O link de uma aluna não abre para você, e no portfólio dela o projeto aparece como “Private project”.',
      q:'O que ela deve fazer?',
      o:['Criar um projeto novo com Publish project.','Mudar o nome do projeto.','My projects → abrir o projeto → Edit → Public → Publish.'],
      a:2, e:'O projeto foi salvo como Only me. Com Edit → Public → Publish, o mesmo link passa a abrir para todos.' },
    { ctx:'Um aluno diz que o projeto dele está público, mas não aparece no Feed.',
      q:'Qual é a orientação certa?',
      o:['Filtrar o Feed pelo tipo do projeto (ou buscar pelo apelido).','Apagar e publicar de novo.','Esperar alguns dias.'],
      a:0, e:'O Feed mostra um tipo de projeto por vez. Filtrando pelo tipo certo, o projeto aparece.' },
    { ctx:'Um aluno publicou o mesmo jogo duas vezes e apareceram projetos duplicados.',
      q:'Como ele atualiza o projeto, em vez de publicar de novo?',
      o:['Publicando uma terceira vez, com outro nome.','My projects → Edit → Project link.','Apagando a conta e começando de novo.'],
      a:1, e:'Para atualizar um projeto já publicado, o caminho é My projects → Edit → Project link.' },
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
    ['📒', '<b>Antes da aula:</b> leia as Teacher Notes no Backoffice e veja o vídeo de preparação, quando há.'],
    ['📤', '<b>Desde a Aula 1:</b> todos publicam no Sparks e enviam o link do Sparks no cartão.'],
    ['🤖', '<b>A IA é uma ferramenta:</b> o aluno define a tarefa, confere a resposta e decide.'],
    ['🚀', '<b>A1:</b> conheça o grupo e chegue rápido a um resultado visível.']
  ]
};
