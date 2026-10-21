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
  lead: 'Arcade Remix, para alunos de 10–12 anos: um template cinza de jogo de corrida no MakeCode Arcade vira o jogo do próprio aluno, publicado no Kodland Sparks. Dois módulos: o conteúdo do curso e a parte técnica das aulas.',
  facts: [
    ['🧑‍💻', '<b>No seu ritmo.</b> O progresso fica salvo neste navegador. Cada módulo termina com uma verificação curta.'],
    ['⚡', '<b>Prática incluída.</b> Uma simulação do Kodland Sparks para treinar a publicação de projetos e os problemas mais comuns.']
  ]
};

COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Antes de começar:</b> faça primeiro a <b>formação principal do Novo Modelo Educacional (EM)</b>. Esta formação do curso vem depois e parte do que você já viu lá: o Backoffice e as Teacher Notes, o Classroom com o Follow Mode, o tour pelo Kodland Sparks e a qualidade da aula.' },
  { kind:'warn', e:'🔄', html:'<b>O conteúdo das aulas no Backoffice vai sendo atualizado.</b> Com o feedback de alunos e tutores, as aulas estão sempre sendo melhoradas. Não se preocupe: quando houver mudanças, você será avisado com antecedência para preparar a aula.' }
];

COURSE.modules = [
  { id:'m1', n:1, e:'🎮', color:'#F97316', title:'O conteúdo do curso',
    desc:'A história, as 4 primeiras aulas e projetos reais publicados por alunos.',
    obj:'Prepare-se para dar as primeiras aulas do Code & Game 2, em que os alunos fazem o remix de um template de corrida no MakeCode Arcade e publicam um beta no Kodland Sparks.',
    offer:[['🌈','Conhecer a história do Arcade Remix e como o curso é organizado.'],['📖','Saber o que acontece em cada uma das 4 primeiras aulas.'],['⚡','Ver jogos reais publicados por alunos no Kodland Sparks.'],['📘','Revisar as aulas e as Teacher Notes no Backoffice.']],
    sections:[
      { id:'ov', e:'🌈', title:'O curso', blocks:[
        { t:'meta', items:[['👦','Idade','10–12 anos'],['⏱️','Aula','90 min'],['📚','Programa','40 aulas'],['🕹️','Ferramenta','MakeCode Arcade']] },
        { t:'p', html:'Os alunos entram no <b>Creator Lab</b>, um estúdio digital, e ao longo das 4 aulas do módulo <b>“Arcade Remix: Neon Impulse”</b> transformam um template cinza de jogo de corrida no próprio jogo deles.' },
        { t:'ba', before:['Os cursos anteriores','Primeiro a teoria, código do zero, IA só mencionada de passagem.'], after:['Code & Game 2','Dedutivo desde a primeira aula (testar o template antes de mexer no código). <b>A IA entra em doses pontuais — uma por aula — sempre com um limite claro. Ela nunca decide a mecânica do jogo.</b>'] },
        { t:'callout', kind:'good', e:'🧰', html:'<b>Teste de alavanca</b> para esta idade: sem IA o projeto continuaria possível, mas visivelmente mais pobre ou menor no tempo da aula. A IA eleva o teto da ideia do aluno — ela é uma parceira de treino, não a autora.' }
      ]},
      { id:'les', e:'📖', title:'As 4 primeiras aulas', blocks:[
        { t:'p', html:'O Módulo 1 transforma o template no jogo do aluno, aula após aula, sempre no mesmo projeto. Abra cada aula:' },
        { t:'lessons', key:'m1', items:[
          { tab:'M1A1', e:'🌈', h:'Aula 1 — Arcade Remix: impulso neon (remix visual)', p:'Primeira aula do módulo. Um template cinza de corrida é transformado com a personalização do personagem (gerado com IA), do fundo e do ritmo do jogo.',
            acc:[['📚','O que você precisa saber','<ul><li>Como usar o conversor de PNG para sprite (tamanho <b>24×24</b>, nome <code>hero</code>).</li><li>O bloco <code>hero.setImage</code>.</li><li>Os blocos <code>set background color</code> e <code>every</code> (para o ritmo).</li><li>Acesso ao AI Helper pelo login → <b>Sign with Kodland</b>.</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li><b>Não use “Sign in” no MakeCode durante o teste inicial</b> — o acesso à conta faz parte da lição de casa.</li><li>Não acrescente pontuação, Game Over, VITÓRIA nem inimigos novos nesta aula.</li><li>A IA é usada <b>só para a imagem do personagem</b>, com limite claro: um único personagem, vista lateral, fundo transparente.</li></ul>'],
                 ['🎯','Objetivos de aprendizagem','<ul><li>O personagem do aluno aparece no simulador com <code>setImage</code>.</li><li>A cor de fundo é diferente da original.</li><li>O intervalo do ritmo muda de 1200 para 900 ou 1500.</li><li>O projeto roda e é compartilhado corretamente.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Mostre o caminho mínimo <b>uma vez</b>: Kodland Sparks → os dois tipos de IA → prompt → código → rodar.</li><li>Dê <b>4 minutos de exploração livre</b> antes de explicar a interface.</li><li>Encerre com um desfile de personagens.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Se o conversor integrado não carregar, existe uma alternativa pelo Railway.</li><li><b>Lição de casa:</b> criar um obstáculo de 16×16 chamado <code>block</code> e inseri-lo com <code>block.setImage</code>.</li></ul>']] },
          { tab:'M1A2', e:'🪙', h:'Aula 2 — O colecionável e a pontuação', p:'Continua o mesmo projeto da Aula 1. Entram um objeto colecionável (moeda) e uma pontuação visível na tela.',
            acc:[['📚','O que você precisa saber','<ul><li>Variáveis (<code>score</code>) e os blocos <code>overlap</code> e <code>destroy</code>.</li><li>A diferença entre a <b>IA convencional</b> (usada aqui só para gerar ideias, não imagens) e o <b>AI Helper</b> como guia metodológico.</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li>O erro mais frequente: colocar <code>coin.setImage</code> no lugar errado ou o bloco <code>set score</code> dentro de <code>on game update</code> (a pontuação zera o tempo todo).</li><li>Compare sempre o <code>kind</code> do <code>create</code> e o do <code>overlaps</code> — <b>eles precisam ser iguais</b>.</li><li>Para a lição de casa é preciso o <b>link do Sparks depois do Publish</b> — não só o Share técnico do MakeCode.</li></ul>'],
                 ['🎯','Objetivos de aprendizagem','<ul><li>O colecionável aparece com design próprio.</li><li>O contato soma +1 de forma estável.</li><li>O aluno publica o <b>primeiro beta no Kodland Sparks</b>.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Mantenha o ciclo <b>mudar → rodar → observar</b> depois de cada bloco — não deixe tudo para testar no fim.</li><li>Aceite um +1 estável como sucesso mínimo; não exija equilíbrio perfeito.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>A pontuação é zerada com <b>Advanced → Info → set score to 0</b> no início do jogo, <b>nunca dentro de laços</b>.</li><li>Não acrescente Game Over, VITÓRIA nem vidas hoje — isso é na próxima aula.</li></ul>']] },
          { tab:'M1A3', e:'🏁', h:'Aula 3 — Vitória e ajuste de velocidade com IA', p:'Entram uma condição de derrota (game over LOSE) e uma condição de vitória escolhida entre 3 opções (A, B ou C), e a velocidade do jogo é ajustada com a ajuda de uma dica do AI Helper.',
            acc:[['📚','O que você precisa saber','<ul><li>Laço e condição em termos simples: <i>o laço repete, a condição decide como termina</i>.</li><li>A diferença entre game over LOSE e WIN.</li><li>Como formular um prompt de ajuste colando o <b>JavaScript inteiro</b> do projeto.</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li><b>Não coloque o bloco LOSE dentro do <code>overlaps</code> da coleta de moedas.</b></li><li>Dê tempo real de prática individual (cerca de <b>17 minutos</b>) antes de intervir.</li><li>Ao ajustar a velocidade com IA, <b>mude um número por vez</b>.</li></ul>'],
                 ['🎯','Objetivos de aprendizagem','<ul><li>O aluno consegue a própria condição de vitória funcionando.</li><li>Ajusta a velocidade com uma justificativa.</li><li>Salva o link antes de apresentar.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Deixe cada aluno escolher a própria forma de vitória (A, B ou C) <b>sem impor uma</b>.</li><li>No desfile final, mostre as diferentes formas de vitória <b>sem comparar qual é “melhor”</b>.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Confira se o bloco de derrota substitui corretamente o reinício original.</li><li>Lembre de testar em <b>Play</b> depois de cada mudança de velocidade.</li></ul>']] },
          { tab:'M1A4', e:'🚀', h:'Aula 4 — Mecânica própria com IA e relançamento', p:'Fechamento do módulo. Cada aluno cria uma mecânica nova (vidas, escudo, mudança de velocidade…) com um prompt específico para o AI Helper, atualiza o beta já publicado no Sparks (sem criar um projeto novo) e participa de um minifestival de lançamento.',
            acc:[['📚','O que você precisa saber','<ul><li>Como diferenciar um prompt vago de um específico: <b>uma única mecânica, contexto do jogo, código completo colado, restrições claras</b>.</li><li>A diferença entre atualizar um projeto existente (<b>Edit</b>) e publicá-lo de novo do zero (<b>Publish project</b>, que cria uma duplicata indesejada).</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li><b>Uma mecânica por vez</b> — nunca várias ao mesmo tempo.</li><li>Cole sempre o JavaScript <b>completo</b> no prompt, não fragmentos.</li><li>Teste em Play depois de cada mudança; evite que os alunos criem projetos duplicados no Sparks.</li></ul>'],
                 ['🎯','Objetivos de aprendizagem','<ul><li>O aluno tem uma mecânica nova funcionando e sabe explicá-la (o que acrescentou e como muda o jogo).</li><li>Relança corretamente o mesmo projeto já publicado, com o módulo completo.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Ajude com <b>perguntas-guia</b>, sem resolver a mecânica pelo aluno.</li><li>Feche o módulo inteiro (protótipo → mecânica → lançamento) com uma celebração do grupo e desperte a curiosidade pelo Módulo 2.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Ao republicar, use o Share com a opção <b>“Update existing share link”</b> marcada.</li><li>No Sparks, vá em <b>My projects → Edit → Project link</b> — evite o botão Publish project, exceto na primeira vez.</li></ul>']] }
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'A primeira Teacher Note de cada aula tem o plano completo: história, objetivo, tempos de cada cartão e, nas primeiras aulas, um vídeo de briefing. <b>Leia todas as Teacher Notes e assista ao vídeo antes da aula.</b>' }
      ]},
      { id:'proj', e:'⚡', title:'Projetos reais de alunos', blocks:[
        { t:'p', html:'É assim que ficam os jogos do Code & Game 2 depois de publicados no Kodland Sparks. Abra-os para jogar na plataforma:' },
        { t:'projects', items:[
          { href:'https://portfolio.kodland.org/DeBohpodast/cmrn7ywpd007yqv3fvuanrprs', img:'https://portfolio.kodland.org/api/projects/cmrn7ywpd007yqv3fvuanrprs/file?variant=thumb', e:'🎮', color:'#F97316', tag:'Web App', title:'Game 3 Web', by:'DeBohpodast', desc:'Um jogo com menus claros e bem organizados — e com suporte a vários idiomas, como destacou o mentor de IA na avaliação.' },
          { href:'https://portfolio.kodland.org/DeBohpodast/cmrn729cf004mqv3fp20b1em3', img:'https://portfolio.kodland.org/api/projects/cmrn729cf004mqv3fp20b1em3/file?variant=thumb', e:'🏃', color:'#0EA5E9', tag:'Web App', title:'Crystal Dash, a 16-bit Runner', by:'DeBohpodast', desc:'Um jogo de corrida 16-bit: correr, coletar moedas, desviar de obstáculos, escolher a dificuldade e liberar novos mundos.' }
        ]},
        { t:'callout', kind:'tip', e:'🤖', html:'Os dois projetos receberam uma <b>avaliação do mentor de IA</b>, publicada pelo próprio aluno na página do projeto. Isso rende cristais e mostra ao aluno o que já está funcionando bem.' }
      ]},
      { id:'bo', e:'📘', title:'Revise as aulas no Backoffice', blocks:[
        { t:'p', html:'Antes da verificação, abra o curso no Backoffice e leia as quatro aulas no seu ritmo — os cartões de atividade e as Teacher Notes estão todos lá. Não há tempo limite.' },
        { t:'link', href:'https://bo.kodland.org/courses/2197', e:'📘', title:'Abrir o curso no Backoffice', small:'[2197] Code & Game 2 — as aulas e as Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'O conteúdo das aulas no Backoffice vai sendo atualizado com o feedback de alunos e tutores. Quando houver mudanças, você será avisado com antecedência para preparar a aula.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'A parte técnica das aulas',
    desc:'Um início forte, publicar no Kodland Sparks em todas as aulas e os problemas técnicos mais comuns.',
    obj:'Saiba o que garante o sucesso das aulas do Code & Game 2: um início forte, uma publicação correta no Kodland Sparks em <b>todas</b> as aulas e as soluções para os problemas técnicos mais comuns.',
    needs:['sparksPublish'],
    offer:[['🚀','Fazer da A1 e da A2 um início forte, com um resultado rápido e visível.'],['📤','Garantir que todos publiquem no Sparks em todas as aulas — e conferir.'],['🌍','Explicar aos alunos por que o Sparks vale a pena.'],['🏁','Fechar o Módulo 1 mostrando conquistas e despertando o interesse pelo Módulo 2.']],
    sections:[
      { id:'focus', e:'🎯', title:'Os 4 pontos que garantem o sucesso', blocks:[
        { t:'p', html:'Estes são os pontos de foco definidos pelo time de produto para o Code & Game. Abra cada um:' },
        { t:'acc', items:[
          ['🚀','A1–A2: um início forte','<p>As duas primeiras aulas decidem se o aluno quer voltar. Os objetivos são <b>conhecer o grupo</b> e chegar a um <b>resultado rápido e visível</b>.</p><ul><li>No quebra-gelo, chame cada aluno pelo nome e pergunte de que jogos ele gosta.</li><li>Na A1, todos precisam ver o <b>próprio personagem</b> rodando no simulador; na A2, a moeda somando pontos.</li><li>Garanta que <b>cada aluno termine a aula com algo funcionando</b> — mesmo que seja a versão mínima.</li></ul>'],
          ['📤','Publicar no Sparks em todas as aulas','<p>Desde a <b>Aula 1</b>, todos publicam o jogo no Kodland Sparks em <b>todas as aulas</b>, e você confere a publicação.</p><ul><li>Visibilidade <b>Public</b> (nunca <b>Only me</b>).</li><li>O link enviado no cartão é o do <b>projeto publicado no Sparks</b> — não o Share técnico do MakeCode.</li><li>Nas aulas seguintes, o aluno <b>atualiza</b> o mesmo projeto (<b>Edit</b>), sem criar duplicatas.</li></ul>'],
          ['🌍','Os benefícios do Sparks','<p>Explique aos alunos por que publicar vale a pena:</p><ul><li><b>Comunidade:</b> o jogo aparece no Feed e no portfólio público.</li><li><b>Playtest:</b> outros jogadores testam o jogo de verdade e mostram o que está fácil ou difícil demais.</li><li><b>Feedback:</b> dos jogadores (com <b>Request feedback</b>) e da IA, que destaca pontos fortes — e ainda rende cristais.</li></ul>'],
          ['🏁','Última aula do M1: conquistas e gancho para o M2','<p>Na Aula 4, mostre o que os alunos conquistaram — o template cinza virou o jogo deles, com mecânica própria — e <b>desperte o interesse pelo Módulo 2</b>.</p><ul><li>Faça o minifestival de lançamento: cada aluno mostra a mecânica que criou.</li><li>Compare a primeira e a última versão no Sparks: a evolução fica visível.</li><li>Termine com uma prévia curta e empolgante do próximo módulo.</li></ul>']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Publicar no Kodland Sparks em todas as aulas', blocks:[
        { t:'p', html:'Publicar parece simples, mas é aqui que aparecem os problemas que chegam até você: o link que não abre, o projeto que não aparece no Feed, as duplicatas. Estes são os passos de cada aula:' },
        { t:'steps', items:[
          ['Dar um nome ao projeto','Um projeto sem nome é difícil de encontrar — e na próxima aula o aluno precisa achá-lo para atualizar.'],
          ['Clicar em Publish (só na primeira vez)','O botão abre o formulário de publicação: título, descrição, seção, reações e aparência.'],
          ['Escolher Public','<b>Public</b> aparece no Feed e no portfólio público. <b>Friends only</b> só para amigos e professores. <b>Only me</b> deixa o projeto privado — ninguém mais vê, nem você.'],
          ['Ativar Request feedback','Assim outros jogadores podem deixar um feedback estruturado. Funciona só em projetos públicos.'],
          ['Copiar o link do Sparks e enviar no cartão','O link é o do <b>projeto publicado no Sparks</b>, não o do MakeCode. Publicar e enviar o link são <b>dois passos diferentes</b>.'],
          ['Nas aulas seguintes: atualizar, não duplicar','<b>My projects → Edit → Project link</b>, com <b>“Update existing share link”</b> marcado no MakeCode.']
        ]},
        { t:'sim', flag:'sparksPublish', src:'../sparks-publish/Sparks_Publish.html', e:'⚡', badge:'Simulação', title:'Publicar no Kodland Sparks', text:'Uma réplica do Kodland Sparks: você publica um projeto como uma aluna, conhece as três opções de visibilidade e resolve os dois problemas mais comuns. Cerca de 5 minutos. A verificação do módulo é liberada quando você termina.' }
      ]},
      { id:'trouble', e:'🛠️', title:'Quando algo dá errado', blocks:[
        { t:'acc', open:false, items:[
          ['🔒','O link do aluno não abre','<p>Quase sempre o projeto foi salvo como <b>Only me</b> (aparece a etiqueta <b>Private project</b>).</p><p>Peça ao aluno: <b>My projects → abrir o projeto → Edit → Public → Publish</b>. O link continua o mesmo e passa a abrir para todos.</p>'],
          ['🔍','O projeto não aparece no Feed','<p>O Feed mostra o último tipo de projeto filtrado. Peça ao aluno que <b>filtre pelo tipo do projeto</b> ou busque pelo apelido.</p>'],
          ['🔗','O aluno enviou o link do MakeCode','<p>O Share do MakeCode é só técnico. O link que vale é o do <b>projeto publicado no Sparks</b>.</p>'],
          ['👯','Apareceram projetos duplicados','<p>O aluno usou <b>Publish project</b> de novo. Para atualizar, o caminho é <b>My projects → Edit → Project link</b>, com <b>“Update existing share link”</b> marcado no MakeCode.</p>'],
          ['🔢','A pontuação zera o tempo todo','<p>O bloco <code>set score</code> está dentro de <code>on game update</code>. Ele vai no início do jogo: <b>Advanced → Info → set score to 0</b>.</p>'],
          ['🪙','A moeda não soma pontos','<p>Compare o <code>kind</code> do <code>create</code> com o do <code>overlaps</code>: eles precisam ser iguais.</p>'],
          ['🖼️','O personagem gerado com IA não aparece','<p>Confira o conversor de PNG para sprite: tamanho <b>24×24</b> e nome <code>hero</code>. Se não carregar, use a alternativa pelo Railway.</p>']
        ]}
      ]},
      { id:'check', e:'✅', title:'Checklist técnico de cada aula', blocks:[
        { t:'check', title:'✅ Meu checklist técnico', groups:[
          { h:'☑️ Antes da aula', items:['Li todas as Teacher Notes da aula e assisti ao vídeo de briefing.','Abri o template e testei o jogo antes de mexer no código.','Sei onde estão as alternativas (conversor pelo Railway, template de reserva).'] },
          { h:'🎬 Durante a aula', items:['Mantenho o ciclo mudar → rodar → observar depois de cada bloco.','Uso o Follow Mode para os cartões e compartilho só a aba da ferramenta nas demonstrações.'] },
          { h:'📤 No fim da aula', items:['Todos publicaram (ou atualizaram) o jogo como <b>Public</b>, com <b>Request feedback</b> ativado.','Todos enviaram o link do <b>Sparks</b> — não o do MakeCode — no cartão da aula.','Abri pelo menos alguns links para conferir que funcionam e que não há duplicatas.'] }
        ]}
      ]}
    ]}
];

COURSE.quiz = {
  m1:[
    { q:'Qual é a história do primeiro módulo do Code & Game 2?',
      o:['Arcade Remix: Neon Impulse — um template cinza de corrida vira o jogo do próprio aluno.','Os alunos constroem uma ilha no Minecraft.','Os alunos criam um portfólio de vídeos no Canva.'],
      a:0, e:'No Creator Lab, os alunos transformam um template cinza de corrida no próprio jogo ao longo das 4 aulas do Arcade Remix.' },
    { q:'Na Aula 1, para que a IA é usada?',
      o:['Para escrever o jogo inteiro.','Só para a imagem do personagem: um único personagem, vista lateral, fundo transparente.','Para decidir a mecânica do jogo.'],
      a:1, e:'Uma dose pontual por aula, com limite claro. A IA nunca decide a mecânica.' },
    { ctx:'Na Aula 2, a pontuação de um aluno volta a zero o tempo todo.',
      q:'Qual é a causa mais provável?',
      o:['O bloco set score está dentro de on game update.','A moeda não tem imagem.','O aluno não fez login no MakeCode.'],
      a:0, e:'A pontuação é zerada uma vez, no início do jogo (Advanced → Info → set score to 0), nunca dentro de laços.' },
    { q:'Na Aula 3, como os alunos devem ajustar a velocidade com a ajuda da IA?',
      o:['Mudando vários números de uma vez para ganhar tempo.','Colando o JavaScript inteiro no prompt e mudando um número por vez, testando em Play.','Pedindo à IA que reescreva o jogo.'],
      a:1, e:'Um número por vez, com o código completo no prompt e teste em Play depois de cada mudança.' },
    { q:'Na Aula 4, como o aluno relança o jogo no Sparks?',
      o:['Com Publish project, criando um projeto novo.','Atualizando o mesmo projeto: My projects → Edit → Project link, com “Update existing share link” marcado.','Enviando o arquivo pelo chat.'],
      a:1, e:'Publish project de novo cria uma duplicata. O caminho certo é atualizar o projeto já publicado.' }
  ],
  m2:[
    { q:'Em quais aulas os alunos publicam o jogo no Kodland Sparks?',
      o:['Só na última aula de cada módulo.','Em todas as aulas, desde a Aula 1.','Só quando o jogo está perfeito.'],
      a:1, e:'Desde a Aula 1, em todas as aulas — e você confere se a publicação está correta.' },
    { ctx:'Um aluno enviou no cartão o link de Share do MakeCode.',
      q:'O que você responde?',
      o:['Está certo, qualquer link serve.','O link que vale é o do projeto publicado no Kodland Sparks.','Peça que mande o arquivo pelo chat.'],
      a:1, e:'O Share do MakeCode é só técnico. O link enviado é o do projeto publicado no Sparks.' },
    { ctx:'O link de uma aluna não abre para você, e no portfólio dela o projeto aparece como “Private project”.',
      q:'O que ela deve fazer?',
      o:['My projects → abrir o projeto → Edit → Public → Publish.','Criar um projeto novo com Publish project.','Mudar o nome do projeto.'],
      a:0, e:'O projeto foi salvo como Only me. Com Edit → Public, o mesmo link passa a abrir para todos.' },
    { q:'Qual destas NÃO é uma vantagem do Kodland Sparks que você deve explicar aos alunos?',
      o:['Outros jogadores testam o jogo e deixam reações e feedback.','A IA destaca pontos fortes do projeto, e publicar rende cristais.','O Sparks corrige o código do aluno automaticamente.'],
      a:2, e:'Comunidade, playtest e feedback de jogadores e da IA são os benefícios. O Sparks não corrige o projeto pelo aluno.' },
    { q:'O que deve acontecer na última aula do Módulo 1?',
      o:['Uma prova escrita sobre os blocos do MakeCode.','Mostrar o que os alunos conquistaram e despertar o interesse pelo Módulo 2.','Começar o projeto do Módulo 2 para ganhar tempo.'],
      a:1, e:'Celebre o lançamento, mostre a evolução do jogo no Sparks e termine com uma prévia empolgante do próximo módulo.' }
  ]
};

COURSE.done = {
  title: 'Módulos concluídos!',
  html: `<p>Você está quase lá! Volte à página da formação no LMS, onde você acessou esta formação. O teste DST está logo abaixo da formação.</p>
    <p>👉 <b>Você precisa fazer e passar no teste DST para que a formação seja considerada concluída.</b> Se você não fizer o DST, a formação vai continuar incompleta e pode expirar.</p>
    <p>A nota mínima para passar é <b>80%</b>.</p>
    <p>Boa sorte! ❤️</p>`,
  nexts: [
    ['📒', '<b>Antes de cada aula:</b> leia as Teacher Notes no Backoffice e assista ao vídeo de briefing.'],
    ['📤', '<b>Em todas as aulas:</b> todos publicam (ou atualizam) no Sparks como Public e enviam o link do Sparks no cartão.'],
    ['👯', '<b>Sem duplicatas:</b> para atualizar, My projects → Edit → Project link.'],
    ['🚀', '<b>A1–A2:</b> conheça o grupo e chegue rápido a um resultado visível.']
  ]
};
