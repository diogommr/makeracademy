
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
        <section>
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
