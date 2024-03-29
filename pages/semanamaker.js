const SemanaMakerPage = {
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
      if (nav.classList.contains('open')){
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

        <navbar></navbar>

        <!-- Header -->
        <header id="semanamaker-header" class="header-big">
          <!--<img src="images/header_bg.jpg" id="home-header-bg">-->
          <h1 class="header-title">Semana Maker</h1>
          <p class="header-subtitle">23 a 28 de Agosto</p>
          <p class="header-subtitle">1ª Edição - Elvas</p>
        </header>

        <!-- Body -->
        <main class="body">

          <section class="body-section">
            <div class="section-content">
              <!--<h2 class="section-title">O que é?</h2>-->
              <p class="section-text">A Semana Maker é uma semana dedicada a introduzir a população ao movimento maker através da realização de um conjunto de atividades maker que visam expandir o horizonte dos participantes.</p>
              <p class="section-text">Vem participar nas oficinas e aprende habilidades que te ajudarão a materializar as tuas ideias criativas.</p>
              <p class="section-text">Traz um amigo! Cada oficina está pensada para poder ser feita a pares ou em família.</p>
              <p class="section-text">Consulta o programa abaixo ou segue-nos nas redes sociais para estares a par das últimas novidades!</p>
              <span class="social-media-container">
                <a href="https://www.facebook.com/makeracademyorg-107133554941522/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/makeracademyorg" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/makeracademyorg/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </a>
              </span>

              <div class="events">

                <div class="event">
                  <img src="images/post_4_semana_maker_03.jpg" class="event-header-bg">
                  <div class="event-data">
                    <h2 class="event-title">Introdução à Eletrónica com Scrappy Circuits</h2>
                    <h3 class="event-date">
                      23 de Agosto <br>
                      18h <br>
                      Casa Tangente
                    </h3>

                    <p class="event-text">Aprende a criar projetos de eletrónica de forma fácil e divertida com materiais muito acessíveis.</p>
                    <p class="event-text">Esta oficina é para miúdos e graúdos, por isso encorajamos a todo aquele que se queira introduzir ao fantástico mundo da eletrónica a participar!</p>
                    <p class="event-text">Irás aprender:
                      <ul>
                        <li>Como criar um circuito elétrico básico</li>
                        <li>Como criar e ler um esquema elétrico básico</li>
                        <li>Como ligar e usar componentes tais como LEDs, botões e interruptores</li>
                        <li>Como aplicar os conhecimentos aprendidos na realização de um divertido projeto</li>
                      </ul>
                    </p>
                    <hr>
                    <p class="event-text">Inscrições limitadas (5 vagas).</p>
                    <p class="event-text">Público-alvo: Público em geral a partir dos 9 anos.</p>
                    <p class="event-text">Duração: 2h</p>
                    <a href="https://forms.gle/DdxEWrjLQWuNGX44A" target="_blank" class="section-cta disabled">Inscreve-te Já!</a>
                  </div>
                  
                </div>

                <div class="event">
                  <img src="images/post_5_semana_maker_06.jpg" class="event-header-bg">
                  <div class="event-data">
                    <h2 class="event-title">Introdução à Eletrónica Têxtil (E-Textiles)</h2>
                    <h3 class="event-date">
                      24 de Agosto <br>
                      18h <br>
                      Casa Tangente
                    </h3>

                    <p class="event-text">Vem descobrir o fantástico mundo da eletrónica têxtil criando um bordado luminoso de forma simples e divertida.</p>
                    <p class="event-text">Após terminar a oficina, terás um bonito bordado que poderás usar como decoração ou oferecer a alguém querido.</p>
                    <p class="event-text">Irás aprender:
                      <ul>
                        <li>Como costurar um bordado simples</li>
                        <li>Como fazer um circuito eletrónico básico</li>
                        <li>Como aplicar conhecimentos básicos de eletrónica na criação de uma peça de eletrónica têxtil</li>
                      </ul>
                    </p>
                    <hr>
                    <p class="event-text">Inscrições limitadas (5 vagas).</p>
                    <p class="event-text">Público-alvo: Público em geral a partir dos 12 anos.</p>
                    <p class="event-text">Duração: 2h</p>
                    <a href="https://forms.gle/fRJKbbTNEqi6sBgdA" target="_blank" class="section-cta disabled">Inscreve-te Já!</a>
                  </div>

                </div>

                <div class="event">
                  <img src="images/19I031_406.jpg" class="event-header-bg">
                  <div class="event-data">
                    <h2 class="event-title">Introdução à Computação Física</h2>
                    <h3 class="event-date">
                      25 de Agosto <br>
                      18h <br>
                      Casa Tangente
                    </h3>

                    <p class="event-text">Descobre o mundo da computação física criando um conjunto de divertidos projetos que levam a programação ao mundo físico.</p>
                    <p class="event-text">Irás aprender:
                      <ul>
                        <li>Como programar um microcontrolador de forma visual, fácil e divertida</li>
                        <li>Como criar projetos de eletrónica com som, movimento, luzes, e muito mais</li>
                      </ul>
                    </p>
                    <hr>
                    <p class="event-text">Inscrições limitadas (5 vagas).</p>
                    <p class="event-text">Público-alvo: Público em geral a partir dos 9 anos.</p>
                    <p class="event-text">Duração: 2h</p>
                    <p class="event-text">Requisitos: <strong>Deverás trazer computador portátil.</strong></p>
                    <a href="https://forms.gle/8aHKiTJ7ivU4nAb96" target="_blank" class="section-cta disabled">Inscreve-te Já!</a>
                  </div>

                </div>

              </div>
            </div>
          </section>
          <section class="body-section">
            <div class="section-content">
              <h2 class="section-title">Onde fica a Casa Tangente?</h2>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d959.4488765039536!2d-7.163317470751887!3d38.88226904268952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd171c68ad183297%3A0x92a10039e6f17101!2sR.%20de%20Martim%20Mendes%2011%2C%207350-082%20Elvas!5e1!3m2!1sen!2spt!4v1629071214708!5m2!1sen!2spt" id="g-maps" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </section>

          <section class="body-section">
            <div class="section-content">
              <h2 class="section-title">Em colaboração com</h2>
              <img src="images/logo_coletivo.jpg">
            </div>
          </section>

        </main> <!-- End of .body -->

        <footer>
          <div class="section-content">
            © makeracademy.org - Todos os direitos reservados
          </div>
        </footer>
  `
};