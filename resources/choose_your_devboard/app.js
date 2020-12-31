let app = new Vue({
  el: '#app',
  data: {
    deviceWidth: window.screen.width,
    sidebarVisible: false,
    modalOpen: false,
    modalBoard: null,
    toScale: false,
    showDetails: false,
    filters: {},
    boardFilters: [
      {
        title: 'Communications',
        id: 'communications',
        options: [
          {
            name: 'Wi-Fi',
            id: 'wifi'
          },
          {
            name: 'Bluetooth',
            id: 'bluetooth'
          },
          {
            name: 'LoRa',
            id: 'lora'
          },
          {
            name: 'I2C',
            id: 'i2c'
          },
          {
            name: 'SPI',
            id: 'spi'
          },
          {
            name: 'UART',
            id: 'uart'
          }
        ]
      },
      {
        title: 'Operating Voltage',
        id: 'operatingVoltage',
        options: [
          {
            name: '3.3V',
            id: '3.3'
          },
          {
            name: '5V',
            id: '5'
          }
        ]
      },
      {
        title: 'I/O',
        id: 'io',
        options: [
          {
            name: 'DAC (Analog Outputs)',
            id: 'dac'
          },
          {
            name: 'ADC (Analog Inputs)',
            id: 'analogPins'
          },
          {
            name: 'PWM',
            id: 'pwmPins'
          },
          {
            name: 'Interrupts',
            id: 'interrupts'
          },
          {
            name: 'USB Port',
            id: 'usb'
          }
        ]
      },
      {
        title: 'Features',
        id: 'features',
        options: [
          {
            name: 'HID',
            id: 'hid'
          }
        ]
      },
      {
        title: 'Programmable Via',
        id: 'software',
        options: [
          {
            name: 'Arduino IDE',
            id: 'arduino'
          },
          {
            name: 'Python',
            id: 'python'
          },
          {
            name: 'Javascript',
            id: 'javascript'
          },
          {
            name: 'Lua',
            id: 'lua'
          },
          {
            name: 'Block-Based',
            id: 'blockLanguages'
          },
        ]
      },
      {
        title: 'Footprint',
        id: 'footprint',
        options: [
          {
            name: 'Soldered Headers',
            id: 'solderedHeaders'
          }
        ]
      }
    ],
    boards: boardsDB
  },
  methods: {
    filterBoards: function(section, spec, event){
      let boards = this.boards;
      let filters = this.filters;
      let filter = event.target;

      // Activate checkmark
      if (filter.checked){

        // if filters[section] doesn't exist, create it
        if (!filters[section]) {
          filters[section] = [];
        }
        if (!filters[section].includes(spec)) {
          // spec not in section
          filters[section].push(spec);
        }
      }
      // Deactivate checkmark
      else {
        let index = filters[section].indexOf(spec);
        filters[section].splice(index, 1);
      }

      // Are there any active filters?
      let activeFilters = 0;
      for (key in filters){
        // console.log(filters[key].length);
        if (filters[key].length > 0){
          if (key === 'operatingVoltage' || key === 'software') {
            // operatingVoltage filters all count as the same
            activeFilters += 1;
          } else {
            // other filters sum individually
            activeFilters += filters[key].length;
          }
        }
      }

      if (activeFilters){
        // console.log(`-> filters active`);

        // for each board
        for (let i = 0; i < boards.length; i++) {
          console.warn(`-> BOARD ` + i);
          let board = boards[i];
          let matchedFilters = {};

          // for each filter section(key):
          for (let section in filters) {
            console.warn(section);

            // loop each filter option (spec)
            for (let a = 0; a < filters[section].length; a++) {
              if (section === 'operatingVoltage') {
                // check if board has spec
                let match = filters[section].includes(String(board.specs[section]));
                console.debug(section + ' -> ' + board.specs[section] + ' | ' + match);
                if (match){
                  if (!matchedFilters[board.specs[section]]){
                    matchedFilters[board.specs[section]] = true;
                  }
                }
              } else if (section === 'software') {
                // check if board has spec
                let match = Boolean(board.specs[section][filters[section][a]]);

                console.debug(filters[section][a] + ' -> ' + board.specs[section][filters[section][a]] + ' | ' + match);

                if (match) {
                  if (!matchedFilters['software']) {
                    matchedFilters['software'] = [];
                    // console.log(filters[section][a]);
                  }
                  matchedFilters['software'].push(filters[section][a]);
                }
              } else {
                // check if board has spec
                let match = Boolean(board.specs[section][filters[section][a]]);

                console.debug(filters[section][a] + ' -> ' + board.specs[section][filters[section][a]] + ' | ' + match);

                if (match) {
                  if (!matchedFilters[filters[section][a]]) {
                    matchedFilters[filters[section][a]] = true;
                  }
                }
              }
            }
          }

          // does the amount of active filters match the matched filters?
          if (Object.keys(matchedFilters).length === activeFilters){
            matchedAllFilters = true;
          } else {
            matchedAllFilters = false;
          }

          // does board have all filter specs?
          if (matchedAllFilters){
            board.visible = true;
          } else {
            board.visible = false;
          }

          // console.log('filters: ' + activeFilters + ' | matchedFilters: ' + JSON.stringify(matchedFilters) + ' (' + Object.keys(matchedFilters).length + ')');

        }
      } else {
        // console.log(`filters empty`);
        // make all boards visible
        for (let i = 0; i < boards.length; i++) {
          let board = boards[i];
          board.visible = true;
        }
      }

    },
    onResize: function(event){
      this.deviceWidth = window.screen.width;
    },
    toggleSidebar: function(event){
      this.sidebarVisible = !this.sidebarVisible;
    },
    openModal: function(board, event){
      // console.log(board.name);
      this.modalBoard = board;
      this.modalOpen = true;
    },
    closeModal: function(){
      this.modalOpen = false;
    },
    galleryPrev: function(event){
      const galleryWrapper = event.target.parentElement.parentElement;
      const gallery = galleryWrapper.getElementsByClassName("gallery-cont")[0];
      const galleryImages = gallery.getElementsByClassName("gallery-img");
      const scrollIncrement = gallery.scrollWidth / galleryImages.length;
      gallery.scrollLeft === 0 ? gallery.scrollLeft = gallery.scrollWidth - scrollIncrement : gallery.scrollLeft -= scrollIncrement;
    },
    galleryNext: function(event){
      const galleryWrapper = event.target.parentElement.parentElement;
      const gallery = galleryWrapper.getElementsByClassName("gallery-cont")[0];
      const galleryImages = gallery.getElementsByClassName("gallery-img");
      const scrollIncrement = gallery.scrollWidth / galleryImages.length;
      gallery.scrollLeft === gallery.scrollWidth - scrollIncrement ? gallery.scrollLeft = 0 : gallery.scrollLeft += scrollIncrement;
    }
  },
  filters: {
    ifenate: function (str) {
      return str.toLowerCase()
        .replace(/[-_]+/g, ' ')
        .replace(/[^\w\s]/g, '')
        .replace(/ (.)/g, function ($1) { return '-'+$1; })
        .replace(/ /g, '')+'-check';
    }
  },
  mounted() {
    // Register an event listener when the Vue component is ready
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    // Unregister the event listener before destroying this Vue instance
    window.removeEventListener('resize', this.onResize)
  },
  computed: {
    computedModalOpenClass(){
      if (this.modalOpen || this.sidebarVisible){
        return "modal-open";
      }
    }
  }
})
