
const { createApp, ref } = Vue;

// Create Vue Application
const app = createApp({
  data(){
    return {
      language: 'en'
    }
  }
});

// Page Components
const HomePage = {
  data(){
    return {
      message: 'SUP!'
    }
  },
  template: `
    <div id="home-page">
      <div class="page-content page-center border">
        <header class="col-1 border">
          <h1>
            <p>Diogo's</p>
            <p>Maker Academy</p>
          </h1>
        </header>
        <!-- Resources -->
        <section class="col-2">
          <!-- LEFT -->
          <div class="section-content white-bg border">
            <p id="resources-text" class="section-title uppercase">A collection of resources created by a maker for makers
            </p>
          </div>
          <!-- RIGHT -->
          <div id="resources" class="section-content blue-bg border">
            <a class="resource" href="/devboard">
              <img src="images/new.svg" class="new">
              <img src="images/devboards_graphic.svg" class="resource-image">
              <p class="resource-type">reference</p>
              <h3 class="resource-title">DevBoards</h3>
            </a>
          </div>
        </section>
        <!-- Learning -->
        <section id="school-section" class="border">
          <div class="section-content border">
            <div class="border">
              <p class="section-title uppercase">Comming Soon</p>
            </div>
            <div class="border">
              <p>An entire learning section dedicated to teaching Maker Abilities!</p>
            </div>
          </div>
        </section>
        <!-- About -->
        <section id="about-section" class="col-3">
          <!-- COL 1 -->
          <div class="about-graphic section-content white-bg border">
            <img src="images/profile_picture.png">
          </div>
          <div class="section-content pink-bg border">
            <p id="about-text" class="section-title uppercase">Who</p>
            <div class="text-block">
              <p>Hi there!</p>
              <p>My name is Diogo Ribeiro, and I am the creator of makeracademy.org.</p>
              <p>I am a designer, maker, tinkerer, and hacker from Portugal with a passion for making things that amaze, provide a unique experience, or help people in their day-to-day lives.</p>
            </div>
          </div>
          <!-- COL 2 -->
          <div class="about-graphic section-content white-bg border">
            <img src="images/galaxy.svg">
          </div>
          <div class="section-content pink-bg border">
            <p id="about-text" class="section-title uppercase">What</p>
            <div class="text-block">
              <p>Wouldn't it be nice to have a platform where you can learn any creative ability without having to do hours of research on the Internet?</p>
              <p>And have all of the resources you need in the same place to use as a reference when working on your projects?</p>
              <p>That is what you can expect to find here ;)</p>
            </div>
          </div>
          <!-- COL 3 -->
          <div class="about-graphic section-content white-bg border">
            <img src="images/filter.svg">
          </div>
          <div class="section-content pink-bg border">
            <p id="about-text" class="section-title uppercase">Why</p>
            <div class="text-block">
              <p>You can pretty much find any information on the Internet these days.</p>
              <p>But sometimes, that information is written in a language that only people with technical knowledge can understand.</p>
              <p>My goal is to "translate" complex information and concepts into resources and classes that allow anyone to develop their creative skills and make any sort of project, no matter their previous knowledge.</p>
            </div>
          </div>
          
        </section>
        <!-- Roadmap -->
        <section id="roadmap-section" class="border">
          <div class="section-content border">
            <div class="border">
              <p class="section-title uppercase">Roadmap</p>
            </div>
            <div class="border">
              <p class="section-subtitle">Here are my plans for the near future of the platform</p>
              <div class="roadmap">
                <!-- Stop -->
                <div class="roadmap-stop">
                  <div class="roadmap-stop-image">
                    DOM
                  </div>
                  <p>Add Resource</p>
                  <p>DOM Reference</p>
                </div>
                <img src="images/arrow.svg" class="roadmap-arrow">
                <!-- Stop -->
                <div class="roadmap-stop">
                  <div class="roadmap-stop-image">
                    <img src="images/cards.svg">
                  </div>
                  <p>Add Resource</p>
                  <p>Printable Handouts</p>
                </div>
                <img src="images/arrow.svg" class="roadmap-arrow">
                <!-- Stop -->
                <div class="roadmap-stop">
                  <div class="roadmap-stop-image">
                    { }
                  </div>
                  <p>Add Resource</p>
                  <p>Languages Reference</p>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </div>
    </div>
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
    <div id="semanamaker-page">
      <div class="page-content page-center">
        <header>
          <h1>
            Semana Maker <br>
            2021
          </h1>
        </header>

        <p>Na sequência do processo de criação de um espaço maker em Elvas, a makeracademy.org e o designer Jorge Moita fizeram uma parceria com o grupo Um Coletivo para a realização de um conjunto de atividades maker no sentido de informar a população sobre este movimento e cujas peças resultantes serão expostas durante o Festival A Salto.</p>
        <p>Durante a Semana Maker serão também realizadas um conjunto de exposições no espaço A Carpintaria Makerspace (espaço maker temporário criado para o evento) nas quais os visitantes poderão aprender sobre o movimento e a cultura maker.</p>

        <h2>Programa</h2>

        <section>
          <p class="event-date">
            23 de Agosto <br>
            (segunda)
          </p>
          <div class="event event-workshop">
            <p class="event-info">10h - Espaço a definir</p>

            <h3 class="event-title">
              Oficina | Introdução à Eletrónica e à Computação Física
            </h3>

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
            <hr>
            <p>Inscrições limitadas (5 vagas).</p>
            <p>Público-alvo: Público em geral a partir dos 6 anos (crianças deverão ir acompanhadas por um adulto)</p>
            <p>Bilhete: 15€</p>
            <p>Duração: 2h a 3h</p>
          </div>
        </section>

        <section>
          <p class="event-date">
            24 de Agosto <br>
            (terça)
          </p>
          <div class="event event-workshop">
            <p class="event-info">10h - Espaço a definir</p>

            <h3 class="event-title">
              Oficina | Introdução à Eletrónica Têxtil (E-Textiles)
            </h3>

            <p>Vem descobrir o fantástico mundo da eletrónica têxtil criando um bordado interativo de forma simples e divertida.</p>
            <p>Nesta oficina irás aprender:
              <ul>
                <li>Como costurar um bordado simples</li>
                <li>Como fazer um circuito eletrónico básico</li>
                <li>Como aplicar conhecimentos básicos de eletrónica na criação de uma peça têxtil interativa</li>
              </ul>
            </p>
            <hr>
            <p>Inscrições limitadas (5 vagas).</p>
            <p>Público-alvo: Público em geral a partir dos 10 anos</p>
            <p>Bilhete: 30€</p>
            <p>Duração: 2h a 3h</p>
          </div>
        </section>

        <section>
          <p class="event-date">
            25 de Agosto <br>
            (quarta)
          </p>
          <div class="event event-workshop">
            <p class="event-info">10h - Espaço a definir</p>

            <h3 class="event-title">
              Oficina | Introdução à Eletrónica e à Computação Física
            </h3>

            <p>Segunda edição da oficina.</p>
          </div>
        </section>

        <section>
          <p class="event-date">
            26 de Agosto <br>
            (quinta)
          </p>
          <div class="event event-workshop">
            <p class="event-info">10h - Espaço a definir</p>

            <h3 class="event-title">
              Oficina | Introdução à Eletrónica com Scrappy Circuits
            </h3>

            <p>Vem aprender a construir circuitos de eletrónica utilizando materiais do dia-a-dia.</p>
            <p>Nesta oficina, irás aprender todas as bases que precisas sobre eletrónica para poder avançar com a criação de projetos mais complexos.</p>
            <hr>
            <p>Inscrições limitadas (6 vagas).</p>
            <p>Público-alvo: Público em geral a partir dos 6 anos (crianças deverão ir acompanhadas por um adulto)</p>
            <p>Bilhete: 15€</p>
            <p>Duração: 2h</p>
          </div>
        </section>

        <!-- Festival A Salto -->
        <section>
          <p class="event-date">
            27 de Agosto <br>
            (sexta)
          </p>
          <div class="event event-asalto">
            <p class="event-info">A Carpintaria Makerspace</p>

            <h3 class="event-title">
              Festival A Salto | Mostra de Trabalhos
            </h3>

            <p>Exposição das peças criadas nas oficinas durante a Semana Maker.</p>
            <p>Exposição de projetos criados por makers locais.</p>
          </div>
        </section>

        <section>
          <p class="event-date">
            28 de Agosto <br>
            (sábado)
          </p>
          <div class="event event-asalto">
            <p class="event-info">A Carpintaria Makerspace</p>

            <h3 class="event-title">
              Festival A Salto | Instalação
            </h3>

            <p>Intervenção no espaço no contexto de residência artística.</p>
          </div>
        </section>
      </div>
    </div>
  `
};


// Routing
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  // history: VueRouter.createWebHashHistory(),
  history: VueRouter.createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/devboard', component: DevboardPage },
    { path: '/semanamaker', component: SemanaMakerPage },
  ]
})



// Mount Router
app.use(router);

// Mount App
app.mount('#app');
