const ResourcesPage = {
  data() {
    return {
      title: 'Resources - Maker Academy'
    }
  },
  mounted() {
    document.title = this.title;
  },
  template: `

        <navbar></navbar>

        <!-- Body -->
        <main class="body page-resources">

          j

          
        </main> <!-- End of .body -->

        <footer>
          <div class="section-content">
            © makeracademy.org - Todos os direitos reservados
          </div>
        </footer>
  `
};