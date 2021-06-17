
const { createApp, ref } = Vue;

// Create Vue Application
const app = createApp({
  data(){
    return {
      language: 'en'
    }
  }
});

// Components
app.component('navbar', {
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">makeracademy.org</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/semanamaker">Semana Maker</a>
            </li>
          </ul>
          <!--
          <span class="navbar-text">
            redes sociais
          </span>
          -->
        </div>
      </div>
    </nav>
  `
});

// Page Components
const HomePage = {
  data(){
    return {
      message: 'SUP!'
    }
  },
  template: `
    <navbar></navbar>

    <!-- Header -->
    <!--
    <header class="container-fluid hero">
      <h1 class="text-center display-2 fw-bold">makeracademy</h1>
      <p></p>
    </header>
    -->

    <!-- Body -->
    <main class="container-fluid">

      <section id="section-mission" class="container-fluid">

        <div className="container-md p-5 d-flex flex-column">

          <h2 class="section-title text-center mb-5">Missão</h2>

          <p>A makeracademy.org surge com um único propósito: Empoderar os Cidadãos.</p>
          <p>O nosso objetivo é contribuir para a democratização do fazer, proporcionando os conhecimentos necessários para permitir a qualquer pessoa materializar as suas ideias criativas.</p>

          <img src="images/closed_hands.svg" style="max-width: 300px;" class="m-auto mt-5" />

        </div>        

      </section>

      <section id="section-services" class="container-fluid">

        <div className="container-md p-5">

          <div className="row gx-5 ">
            <h2 class="section-title text-center mb-5">Serviços</h2>

            <div class=" card-body col col-2">
              <h3 class="card-title">Workshops</h3>
              <p class="card-text">Dinamizamos atividades que visam equipar o público com habilidades maker nos âmbitos de eletrónica e computação física, literacia digital, <em>e-textiles</em>, criação multimédia, programação e muitos mais!</p>
            </div>

            <div class=" card-body col col-2">
              <h3 class="card-title">Consultoria</h3>
              <p class="card-text">Prestamos consultoria na implementação de soluções maker no posto de trabalho, em educação e a projetos pessoais.</p>
            </div>

          </div>
          </div>

      </section>
      
    </main> <!-- End of .container -->
    
    <footer class="container-fluid">
      <div class="container-md p-5">
        <p>© 2020 Todos os direitos reservados</p>
      </div>
    </footer>
  `
};

const DevboardPage = {
  template: `
    <div id="devboard-page" class="resource-page">
      <nav class="resource-page-nav">
        <a href="/" class="back-btn"><span style="margin-top: -4px">☜</span></a>
      </nav>
      <iframe src="https://makeracademy-devboard.netlify.app/" class="resource-page-body"></iframe>
    </div>
  `    
};

const SemanaMakerPage = {
  template: `
    <navbar></navbar>

    <!-- Header -->
    <header class="container-fluid">
      <h1 class="text-center display-2 fw-bold">Semana Maker</h1>
    </header>

    <!-- Body -->
    <main class="container-md pt-4">

      <p>Na sequência do processo de criação de um espaço maker em Elvas, a makeracademy.org e o designer Jorge Moita fizeram uma parceria com o grupo Um Coletivo para a realização de um conjunto de atividades <a href="https://pt.wikipedia.org/wiki/Cultura_maker" target="_blank">maker</a> no sentido de informar a população sobre este movimento e cujas peças resultantes serão expostas durante o Festival A Salto.</p>
      <p>Durante a Semana Maker serão também realizadas um conjunto de exposições no espaço A Carpintaria Makerspace (<a href="https://pt.wikipedia.org/wiki/Hackerspace" target="_blank">espaço maker</a> temporário criado para o evento) nas quais os visitantes poderão aprender sobre o movimento e a cultura maker.</p>
      <p>O programa ainda não está 100% fechado, por isso consulta esta página regularmente para estares a par das últimas novidades!</p>

      <h2 class="text-center m-5">Programa</h2>

      <!-- Section -->
      <section class="row header mb-5 ">

        <div class="col col-md-4">
          <div class="date">
            <p class="fs-4 mb-0">23 de Agosto</p>
            <p class="text-muted">segunda</p>
          </div>
        </div>

        <div class="col col-md-8">
          <div class="event card card-body event-workshop">
            <!-- Hora e Local -->
            <p class="event-time fs-4 mb-2">10h - Espaço a definir</p>

            <!-- Título do evento -->
            <h2 class="event-title fw-bold mb-3">Introdução à Eletrónica e à Computação Física</h2>

            <!-- Vídeo de apresentação -->
            <!--
            <div class="event-video">

            </div>
            -->
            <img src="images/19I031_406_optimized.jpg" class="mb-3">

            <!-- Descrição -->
            <p>Aprende a criar projetos de eletrónica de forma fácil e divertida.</p>
            <p>Nesta oficina, irás participar na criação de uma peça que será exposta ao público durante o Festival A Salto.</p>
            <p>Irás aprender:
              <ul>
                <li>Como criar um circuito elétrico básico</li>
                <li>Como programar um microcontrolador de forma visual, fácil e divertida</li>
                <li>Como criar projetos de eletrónica com som, movimento, luzes, e muito mais</li>
              </ul>
            </p>
            <p>Deverás trazer:
              <ul>
                <li>Computador Portátil</li>
              </ul>
            </p>
            <hr class="mt-0">
            <p>Inscrições limitadas (5 vagas).</p>
            <p>Público-alvo: Público em geral a partir dos 6 anos (crianças deverão ir acompanhadas por um adulto)</p>
            <p>Bilhete: 15€</p>
            <p>Duração: 2h a 3h</p>
            <a href="#" target="_blank" class="btn btn-primary event-cta disabled">Inscrições disponíveis em breve</a>

          </div> <!-- end of event -->
        </div> <!-- end of .col -->

      </section>

      <!-- Section -->
      <section class="row header mb-5">

        <div class="col col-md-4">
          <div class="date">
            <p class="fs-4 mb-0">24 de Agosto</p>
            <p class="text-muted">terça</p>
          </div>
        </div>

        <div class="col col-md-8">
          <div class="event card card-body event-workshop">
            <!-- Hora e Local -->
            <p class="event-time fs-4 mb-1">10h - Espaço a definir</p>

            <!-- Título do evento -->
            <h2 class="event-title fw-bold mb-3">Introdução à Eletrónica Têxtil (E-Textiles) </h2>

            <!-- Vídeo de apresentação -->
            <!--
            <div class="event-video">

            </div>
            -->

            <!-- Descrição -->
            <p>Vem descobrir o fantástico mundo da eletrónica têxtil criando um bordado interativo de forma simples e divertida.</p>
            <p>Nesta oficina irás aprender:
              <ul>
                <li>Como costurar um bordado simples</li>
                <li>Como fazer um circuito eletrónico básico</li>
                <li>Como aplicar conhecimentos básicos de eletrónica na criação de uma peça têxtil interativa</li>
              </ul>
            </p>
            <hr class="mt-0">
            <p>Inscrições limitadas (5 vagas).</p>
            <p>Público-alvo: Público em geral a partir dos 10 anos</p>
            <p>Bilhete: 30€</p>
            <p>Duração: 2h a 3h</p>
            <a href="#" target="_blank" class="btn btn-primary event-cta disabled">Inscrições disponíveis em breve</a>

          </div> <!-- end of event -->
        </div> <!-- end of .col -->

      </section>

      <!-- Section -->
      <section class="row header mb-5">

        <div class="col col-md-4">
          <div class="date">
            <p class="fs-4 mb-0">25 de Agosto</p>
            <p class="text-muted">quarta</p>
          </div>
        </div>

        <div class="col col-md-8">
          <div class="event card card-body event-workshop">
            <!-- Hora e Local -->
            <p class="event-time fs-4 mb-1">10h - Espaço a definir</p>

            <!-- Título do evento -->
            <h2 class="event-title fw-bold mb-3">Introdução à Eletrónica e à Computação Física</h2>

            <!-- Vídeo de apresentação -->
            <!--
            <div class="event-video">

            </div>
            -->

            <!-- Descrição -->
            <p>Aprende a criar projetos de eletrónica de forma fácil e divertida.</p>
            <p>Nesta oficina, irás participar na criação de uma peça que será exposta ao público durante o Festival A Salto.</p>
            <p>Irás aprender:
              <ul>
                <li>Como criar um circuito elétrico básico</li>
                <li>Como programar um microcontrolador de forma visual, fácil e divertida</li>
                <li>Como criar projetos de eletrónica com som, movimento, luzes, e muito mais</li>
              </ul>
            </p>
            <p>Deverás trazer:
              <ul>
                <li>Computador Portátil</li>
              </ul>
            </p>
            <hr class="mt-0">
            <p>Inscrições limitadas (5 vagas).</p>
            <p>Público-alvo: Público em geral a partir dos 6 anos (crianças deverão ir acompanhadas por um adulto)</p>
            <p>Bilhete: 15€</p>
            <p>Duração: 2h a 3h</p>
            <a href="#" target="_blank" class="btn btn-primary event-cta disabled">Inscrições disponíveis em breve</a>

          </div> <!-- end of event -->
        </div> <!-- end of .col -->

      </section>

      <!-- Section -->
      <section class="row header mb-5">

        <div class="col col-md-4">
          <div class="date">
            <p class="fs-4 mb-0">28 de Agosto</p>
            <p class="text-muted">sábado</p>
          </div>
        </div>

        <div class="col col-md-8">
          <div class="event card card-body event-exhibition">
            <!-- Hora e Local -->
            <p class="event-time fs-4 mb-1">10h-12:30h, 15h-19h - A Carpintaria Makerspace</p>

            <!-- Título do evento -->
            <h2 class="event-title fw-bold mb-3">Mostra de Trabalhos</h2>

            <!-- Vídeo de apresentação -->
            <!--
            <div class="event-video">

            </div>
            -->

            <!-- Descrição -->
            <p>Exposição das peças criadas nas oficinas durante a Semana Maker.</p>
            <p>Exposição de projetos criados por makers locais.</p>

          </div> <!-- end of event -->
        </div> <!-- end of .col -->

      </section>
      
    </main> <!-- End of .container -->
    
    <footer class="container-fluid">
      <div class="container">
        <br><br><br><br><br>
      </div>
    </footer>
  `
};


// Routing
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  // history: VueRouter.createWebHashHistory(),
  history: VueRouter.createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/semanamaker', component: SemanaMakerPage },
  ]
})



// Mount Router
app.use(router);

// Mount App
app.mount('#app');
