
const { createApp, ref } = Vue;

// Create Vue Application
const app = createApp({
  data(){
    return {
      language: 'en'
    }
  }
});

app.component('navbar', {
  methods: {
    toggleMenu() {
      let nav = document.getElementById('main-nav');
      let menuBtn = document.getElementById('menu-btn');
      console.log(menuBtn);
      // nav open
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        menuBtn.innerHTML = `
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        `;
      } else {
        nav.classList.add('open');
        menuBtn.innerHTML = `
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        `;
      }
    }
  },
  template: `
    <nav id="main-nav" class="">
      <div id="nav-toggle-btn" @click="toggleMenu">
        <svg id="menu-btn" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
          viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </div>
      <div id="nav-content">
        <span class="nav-section nav-left">
          <router-link :to="{ name: 'home'}">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="nav-icon"
              viewBox="0 0 16 16">
              <path
                d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
            </svg>
            <span>Home</span>
          </router-link>
        </span>
        <span class="nav-section nav-center">
          <router-link :to="{ name: 'home', hash: '#discover'}">
            Descobre
          </router-link>
          <router-link :to="{ name: 'home', hash: '#resources'}">
            Recursos
          </router-link>
          <router-link :to="{ name: 'home', hash: '#about'}">
            Sobre
          </router-link>
          <router-link :to="{ name: 'semanamaker'}">
            Semana Maker
          </router-link>
        </span>

        <span class="nav-section nav-right">
          <!--
          <a href="" target="_blank">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M14.82 2.41C18.78 2.41 22 5.65 22 9.62C22 13.58 18.78 16.8 14.82 16.8C10.85 16.8 7.61 13.58 7.61 9.62C7.61 5.65 10.85 2.41 14.82 2.41M2 21.6H5.5V2.41H2V21.6Z" />
            </svg>
          </a>
          -->
          <div>
            <svg viewBox="0 0 24 24" class="icon">
              <path fill="currentColor"
                d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
            </svg>
            <span>PT</span>
          </div>
        </span>

      </div>
    </nav>
  `
});

// Routing
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  // history: VueRouter.createWebHashHistory(),
  history: VueRouter.createWebHistory(),
  routes: [
    { path: '/', component: HomePage, name: 'home' },
    { path: '/semanamaker', component: SemanaMakerPage, name: 'semanamaker' },
    { path: '/devboards', component: DevboardsPage, name: 'devboards' },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return savedPosition || {top:0};
  }
})




// Mount Router
app.use(router);

// Mount App
app.mount('#app');
