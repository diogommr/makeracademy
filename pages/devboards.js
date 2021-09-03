const DevboardsPage = {
  data() {
    return {
      title: 'Semana Maker | Maker Academy'
    }
  },
  mounted() {
    document.title = this.title;
  },
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
    },
    toggleLanguageSelector() {
      let languagesCont = document.getElementById('language-selector-languages');
      languagesCont.classList.toggle('open');
    }
  },
  template: `
        <nav id="main-nav-resource" class="">
          <div id="nav-content-mobile">
            <router-link :to="{ name: 'home'}">
              <strong>makeracademy</strong>
            </router-link>
          </div>
          <div id="nav-content">
            <span class="nav-section nav-left">
              <router-link :to="{ name: 'home'}">
                <span>makeracademy</span>
              </router-link>
              <span>&gt;</span>
              <router-link :to="{ name: 'home', hash: '#resources'}">
                Recursos
              </router-link>
              <span>&gt;</span>
              <span><strong>DevBoards Reference</strong></span>
            </span>
            <span class="nav-section nav-center">
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
              <div id="language-selector">
                <div id="language-selector-toggle-btn" @click="toggleLanguageSelector">
                  <svg viewBox="0 0 24 24" class="icon">
                    <path fill="currentColor"
                      d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                  </svg>
                </div>
                <div id="language-selector-languages" class="open">
                
                  <button class="language-selector-language">EN</button>
                  <!--
                  <button class="language-selector-language">ES</button>
                  <button class="language-selector-language">PT</button>
                  -->
                </div>
              </div>
            </span>

          </div>
        </nav>
        
        <!-- Body -->
        <iframe class="full-page-embed" src="https://devboards.pythonanywhere.com/en/"></iframe>
  `
};