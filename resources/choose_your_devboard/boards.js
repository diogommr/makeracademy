const boardsDB = [
  // Seeeduino XIAO
  {
    visible: true,
    name: 'Seeeduino XIAO',
    coverImage: 'https://res.cloudinary.com/diogomakes/image/upload/v1609329469/Resource%20-%20Choose%20Your%20Devboard/seeeduino_xiao_01.jpg',
    imageGallery: [
      'https://res.cloudinary.com/diogomakes/image/upload/v1609330018/Resource%20-%20Choose%20Your%20Devboard/seeeduino_xiao_02.png',
      'https://res.cloudinary.com/diogomakes/image/upload/v1609330145/Resource%20-%20Choose%20Your%20Devboard/seeeduino_xiao_03.jpg',
      'https://res.cloudinary.com/diogomakes/image/upload/v1609330193/Resource%20-%20Choose%20Your%20Devboard/seeeduino_xiao_04.jpg'
    ],
    specs: {
      cpu: 'ARM Cortex M0+ (SAMD21G18)',
      clockSpeed: '48 MHz',
      flashMemory: '256 KB',
      sram: '32 KB',
      eeprom: '',
      communications: {
        wifi: false,
        bluetooth: false,
        lora: false,
        i2c: 1,
        uart: 1,
        spi: 1,
      },
      operatingVoltage: 3.3,
      io: {
        ioPinCurrent: '',
        gpioPins: 14,
        digitalPins: 11,
        pwmPins: 10,
        analogPins: 11,
        dac: 1,
        interrupts: 11,
        usb: 'Type C',
      },
      features: {
        hid: true,
        builtinLed: '13',
      },
      software: {
        arduino: 'Arduino IDE',
        python: 'CircuitPython, MicroPython'
      },
      footprint: {
        dimensions: [20, 17.5, 3.5]
      }
    },
    pinout: [
      'https://res.cloudinary.com/diogomakes/image/upload/v1609330784/Resource%20-%20Choose%20Your%20Devboard/seeeduino_xiao_pinout_01.jpg'
    ]
  },
  // Arduino UNO
  {
    visible: true,
    name: 'Arduino UNO',
    coverImage: 'https://res.cloudinary.com/diogomakes/image/upload/v1609330249/Resource%20-%20Choose%20Your%20Devboard/arduino_uno_01.jpg',
    imageGallery: [
      'https://res.cloudinary.com/diogomakes/image/upload/v1609330291/Resource%20-%20Choose%20Your%20Devboard/arduino_uno_02.jpg',
      'https://res.cloudinary.com/diogomakes/image/upload/v1609330328/Resource%20-%20Choose%20Your%20Devboard/arduino_uno_03.jpg'
    ],
    specs: {
      cpu: 'ATmega328P',
      clockSpeed: '16 MHz',
      flashMemory: '32 KB',
      sram: '2 KB',
      eeprom: '1 KB',
      communications: {
        wifi: false,
        bluetooth: false,
        lora: false,
        i2c: 2,
        uart: 1,
        spi: 1,
      },
      operatingVoltage: 5,
      io: {
        ioPinCurrent: '20 mA',
        gpioPins: '',
        digitalPins: 14,
        pwmPins: 6,
        analogPins: 6,
        interrupts: 2,
        usb: 'Type B',
      },
      features: {
        hid: false,
        builtinLed: '13 (yellow)'
      },
      software: {
        arduino: true
      },
      footprint: {
        dimensions: [74.8, 53.4, 14],
        solderedHeaders: 'female'
      }
    },
    pinout: [
      'https://res.cloudinary.com/diogomakes/image/upload/v1609330842/Resource%20-%20Choose%20Your%20Devboard/arduino_uno_pinout_01.png'
    ]
  },
  // ESP8266 NodeMCU V3 Lua
  {
    visible: true,
    name: 'ESP8266 - CP2102 NodeMCU V3 Lua',
    coverImage: 'https://res.cloudinary.com/diogomakes/image/upload/v1609330456/Resource%20-%20Choose%20Your%20Devboard/esp8266_nodemcu_v3_lua_01.jpg',
    specs: {
      cpu: 'ESP-8266 32-bit',
      clockSpeed: '80 MHz',
      flashMemory: '4 MB',
      sram: '64 KB',
      eeprom: '',
      communications: {
        wifi: '2.4GHz 802.11b/g/n',
        bluetooth: false,
        lora: false,
        i2c: 1,
        uart: 2,
        spi: 2,
      },
      operatingVoltage: 3.3,
      inputVoltage: {min: 4.5, max:10},
      io: {
        ioPinCurrent: '',
        gpioPins: '11',
        digitalPins: 11,
        pwmPins: 4,
        analogPins: 1,
        dac: 0,
        interrupts: 10,
        usb: 'Micro-USB',
        usbToSerialConverter: 'CP2102'
      },
      features: {
        hid: false,
        builtinLed: '',
      },
      software: {
        arduino: true,
        lua: true
      },
      footprint: {
        dimensions: [49, 24.5, 13],
        solderedHeaders: 'male'
      }
    },
    pinout: [
      'https://res.cloudinary.com/diogomakes/image/upload/v1609330897/Resource%20-%20Choose%20Your%20Devboard/esp8266_nodemcu_v3_lua_pinout_01.jpg'
    ]
  },
  // Adafruit METRO M0 Express
  {
    visible: true,
    name: 'Adafruit METRO M0 Express',
    coverImage: 'https://res.cloudinary.com/diogomakes/image/upload/v1609330523/Resource%20-%20Choose%20Your%20Devboard/adafruit_metro_m0_express_01.jpg',
    imageGallery: [
      'https://res.cloudinary.com/diogomakes/image/upload/v1609330614/Resource%20-%20Choose%20Your%20Devboard/adafruit_metro_m0_express_02.jpg', 'https://res.cloudinary.com/diogomakes/image/upload/v1609330661/Resource%20-%20Choose%20Your%20Devboard/adafruit_metro_m0_express_03.jpg', 'https://res.cloudinary.com/diogomakes/image/upload/v1609330696/Resource%20-%20Choose%20Your%20Devboard/adafruit_metro_m0_express_04.jpg', 'https://res.cloudinary.com/diogomakes/image/upload/v1609330736/Resource%20-%20Choose%20Your%20Devboard/adafruit_metro_m0_express_05.jpg'
    ],
    specs: {
      cpu: 'ATSAMD21G18 ARM Cortex M0',
      clockSpeed: '48 MHz',
      flashMemory: '256 KB',
      sram: '32 KB',
      eeprom: '',
      communications: {
        wifi: false,
        bluetooth: false,
        lora: false,
        i2c: 2,
        uart: 1,
        spi: 1,
      },
      operatingVoltage: 3.3,
      inputVoltage: {min: 7, max: 9},
      io: {
        ioPinCurrent: '',
        gpioPins: 25,
        digitalPins: 14,
        pwmPins: 10,
        analogPins: 6,
        dac: 1,
        interrupts: 13,
        usb: 'Micro-USB',
        usbToSerialConverter: ''
      },
      features: {
        hid: true,
        builtinLed: '13 (red)',
        builtinRGBLed: '40',
      },
      software: {
        arduino: true,
        python: 'CircuitPython',
        blockLanguages: ['MakeCode']
      },
      footprint: {
        dimensions: [71.1, 53.4, 7.1],
        solderedHeaders: 'female'
      }
    }
  }
];
