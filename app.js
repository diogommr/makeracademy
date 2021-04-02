
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
            <p id="resources-text" class="section-title uppercase">
              <strong>A collection of resources created by a maker for makers</strong>
            </p>
          </div>
          <!-- RIGHT -->
          <div id="resources" class="section-content blue-bg border">
            <a class="resource" href="/#/devboard">
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
              <p>An entire learning section dedicated to teaching Maker Habilities!</p>
            </div>
          </div>
        </section>
        <!-- Who, What Why -->
        <section class="col-2">
          <!-- LEFT -->
          <div class="section-content pink-bg border">
            <p id="about-text" class="section-title uppercase">
              Who, What, Why
            </p>
            <div class="text-block">
              <p>Hi there!</p>
              <p>My name is Diogo Ribeiro, and I am the creator of makeracademy.org.</p>
              <p>I am a designer, maker, tinkerer, and hacker from Portugal with a passion for making things that amaze, provide a unique experience, or help people in their day to day lives.</p>
              <p>I created this platform as a home for resources and tools that help fellow makers focus more on the creative process instead of the technical one.</p>
              <p>I am not an expert on all of the topics that I want to cover here, so I am looking to colaborate with other passionate creators to bring you the best content that I can.</p>
              <p>This is an ever-growing project, so stay tuned for updates and new content!</p>
            </div>
          </div>
          <!-- RIGHT -->
          <div id="about-image" class="section-content white-bg border">
            <img src="images/profile_picture.png">
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


// Routing
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/devboard', component: DevboardPage },
  ]
})



// Mount Router
app.use(router);

// Mount App
app.mount('#app');
