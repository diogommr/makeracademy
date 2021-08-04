
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
      title: 'Maker Academy'
    }
  },
  mounted() {
    document.title = this.title;
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
  data() {
    return {
      title: 'Maker Academy | Semana Maker'
    }
  },
  mounted() {
    document.title = this.title;
    gtag('config', 'G-1YHC69NMEF', {
      'page_title': 'Semana Maker',
      'page_path': '/semanamaker'
    });
  },
  methods: {
    workshopEnrollment(workshopName) {
      gtag('event', 'workshop_enrollment', {
        'event_label': workshopName,
        'event_category': 'engagement',
        'value': 1
      });
    }
  },
  template: `
    <navbar></navbar>

    <!-- Header -->
    <header class="container-fluid">
      <h1 class="text-center display-2 fw-bold">Semana Maker</h1>
    </header>

    <!-- Body -->
    <main class="container-md pt-4">

      <p>Na sequência do processo de criação de um espaço maker em Elvas, a makeracademy.org irá realizar um conjunto de atividades <a href="https://pt.wikipedia.org/wiki/Cultura_maker" target="_blank">maker</a> no sentido de informar a população sobre este movimento.</p>
      <p>O programa ainda não está 100% fechado, por isso consulta esta página regularmente para estares a par das últimas novidades, ou segue-nos nas redes sociais!</p>

      <p class="social-networks">
        <a href="https://www.facebook.com/makeracademyorg-107133554941522" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#1877F2" class="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/makeracademyorg/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" width="32" alt="" />
        </a>
        <a href="https://twitter.com/makeracademyorg" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#29A4D9" class="bi bi-twitter" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
          </svg>
        </a>
      </p>

      <h2 class="text-center m-5">Programa</h2>

      <!-- Section -->
      <section class="row header mb-5">

        <div class="col col-md-4">
          <div class="date">
            <p class="fs-4 mb-0">23 de Agosto</p>
            <p class="text-muted">segunda</p>
          </div>
        </div>

        <div class="col col-md-8">
          <div class="event card card-body event-workshop">
            <!-- Hora e Local -->
            <p class="event-time fs-4 mb-1">10h - Casa Tangente</p>

            <!-- Título do evento -->
            <h2 class="event-title fw-bold mb-3">Introdução à Eletrónica com Scrappy Circuits</h2>

            <!-- Vídeo de apresentação -->
            <!--
            <div class="event-video">

            </div>
            -->
            <img src="images/_MG_8295.jpg" class="mb-3">

            <!-- Descrição -->
            <p>Aprende a criar projetos de eletrónica de forma fácil e divertida com materiais muito acessíveis.</p>
            <p>Esta oficina é para miúdos e graúdos, por isso encorajamos a todo aquele que se queira introduzir ao fantástico mundo da eletrónica a participar!</p>
            <p>Irás aprender:
              <ul>
                <li>Como criar um circuito elétrico básico</li>
                <li>Como criar e ler um esquema elétrico básico</li>
                <li>Como ligar e usar componentes tais como LEDs, motores, botões e interruptores, e muitos mais</li>
              </ul>
            </p>
            <hr class="mt-0">
            <p>Inscrições limitadas (5 vagas).</p>
            <p>Público-alvo: Público em geral a partir dos 9 anos.</p>
            <p>Preço: 15€</p>
            <p>Duração: 2h30m</p>
            <a href="https://forms.gle/DdxEWrjLQWuNGX44A" target="_blank" class="btn btn-primary event-cta" @click="workshopEnrollment('Introdução à Eletrónica e à Computação Física')">Inscreve-te Já!</a>

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
            <p class="event-time fs-4 mb-1">10h - Casa Tangente</p>

            <!-- Título do evento -->
            <h2 class="event-title fw-bold mb-3">Introdução à Eletrónica Têxtil (E-Textiles)</h2>

            <!-- Vídeo de apresentação -->
            <!--
            <div class="event-video">

            </div>
            -->
            <img src="images/15_done_.jpg" class="mb-3">

            <!-- Descrição -->
            <p>Vem descobrir o fantástico mundo da eletrónica têxtil criando um bordado luminoso de forma simples e divertida.</p>
            <p>Após terminar a oficina, terás um bonito bordado que poderás usar como decoração ou oferecer a alguém querido.</p>
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
            <p>Preço: 30€</p>
            <p>Duração: 2h30m</p>
            <a href="https://forms.gle/fRJKbbTNEqi6sBgdA" target="_blank" class="btn btn-primary event-cta" @click="workshopEnrollment('Introdução à Eletrónica Têxtil')">Inscreve-te Já!</a>

          </div> <!-- end of event -->
        </div> <!-- end of .col -->

      </section>

      <!-- Section -->
      <section class="row header mb-5 ">

        <div class="col col-md-4">
          <div class="date">
            <p class="fs-4 mb-0">25 de Agosto</p>
            <p class="text-muted">quarta</p>
          </div>
        </div>

        <div class="col col-md-8">
          <div class="event card card-body event-workshop">
            <!-- Hora e Local -->
            <p class="event-time fs-4 mb-2">10h - Espaço a definir</p>

            <!-- Título do evento -->
            <h2 class="event-title fw-bold mb-3">Introdução à Computação Física</h2>

            <!-- Vídeo de apresentação -->
            <!--
            <div class="event-video">

            </div>
            -->
            <img src="images/19I031_406_optimized.jpg" class="mb-3">

            <!-- Descrição -->
            <p>Descobre o mundo da computação física criando um conjunto de divertidos projetos que levam a programação ao mundo físico.</p>
            <p>Irás aprender:
              <ul>
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
            <p>Público-alvo: Público em geral a partir dos 9 anos</p>
            <p>Preço: 10€</p>
            <p>Duração: 1h30m</p>
            <a href="#" target="_blank" class="btn btn-primary event-cta disabled" @click="workshopEnrollment('Introdução à Eletrónica e à Computação Física')">Inscrições disponíveis em breve</a>

          </div> <!-- end of event -->
        </div> <!-- end of .col -->

      </section>

      <!-- Section -->
      <!--
      <section class="row header mb-5">

        <div class="col col-md-4">
          <div class="date">
            <p class="fs-4 mb-0">28 de Agosto</p>
            <p class="text-muted">sábado</p>
          </div>
        </div>

        <div class="col col-md-8">
          <div class="event card card-body event-exhibition">

            <p class="event-time fs-4 mb-1">10h-12:30h, 15h-19h - Tv. da Alcáçova nº1</p>

            <h2 class="event-title fw-bold mb-3">Mostra de Trabalhos</h2>

            <p>Exposição das peças criadas nas oficinas durante a Semana Maker.</p>

          </div> 
        </div> 

      </section>
      -->
      
    </main> <!-- End of .container -->
    
    <footer class="container-fluid">
      <div class="container-md p-5">
        <p>© 2020 Todos os direitos reservados</p>
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
