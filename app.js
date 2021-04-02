
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
            <a class="resource" href="/#/devboard">
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
