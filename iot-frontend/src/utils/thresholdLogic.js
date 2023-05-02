const thresholds = {
    CO2:{
      safe: '0 - 800 ppm',
      contaminated: '801 - 1000 ppm',
      dangerous: '> 1000 ppm'
    },
    ['PM2.5']:{
      safe: '0 - 35.4 µg/m3',
      contaminated: '35.5 - 150.4 µg/m3',
      dangerous: '> 150.5 µg/m3'
    },
    PM10:{
      safe: '0 - 154 µg/m3',
      contaminated: '155 - 354 µg/m3',
      dangerous: '> 355 µg/m3'
    },
    TVOC:{
      safe: '0 - 150',
      contaminated: '151 - 250',
      dangerous: '> 251'
    },
    HCHO:{
      safe: '0.00 - 0.12 mg/m3',
      contaminated: '0.121 - 0.37 mg/m3',
      dangerous: '> 0.371 mg/m3'
    },
    Ozono:{
      safe: '0 - 120 µg/m3',
      contaminated: '121 - 180 µg/m3',
      dangerous: '181 - 300 µg/m3'
    }
  }

export const thresholdReturner = (modalMide) =>
    thresholds[modalMide]