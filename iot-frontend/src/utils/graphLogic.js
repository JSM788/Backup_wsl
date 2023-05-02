const indicators = {
    CO2:{
        dangerLine: 1000,
        contaminatedLine: 800,
        minData: 400,
        maxData: 1200,
    },
    HCHO:{
        dangerLine: 0.37,
        contaminatedLine: 0.12,
        minData: 0,
        maxData: 1,
    },
    Humedad:{
        dangerLine: 70,
        safeLine: 30,
        minData: 20,
        maxData: 100,
    },
    PM10:{
        dangerLine: 354,
        contaminatedLine: 154,
        minData: 5,
        maxData: 500,
    },
    ['PM2.5']:{
        dangerLine: 150.4,
        contaminatedLine: 35.4,
        minData: 8,
        maxData: 300,
    },
    Temperatura:{
        dangerLine: 28,
        safeLine: 17,
        minData: 0,
        maxData: 34,
    },
    TVOC:{
        dangerLine: 250,
        contaminatedLine: 150,
        minData: 20,
        maxData: 300,
    }
}

export const graphReturner = (indicator) =>
    indicators[indicator] || {
      dangerLine: 0,
      contaminatedLine: 0,
      minData: 0,
      maxData: 0,
    }
