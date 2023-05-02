const titles = {
    CO2: {
        article: 'El',
        unit: 'ppm',
        query: 'carbon_dioxide',
    },
    ['PM2.5']: {
        article: 'El',
        unit:'ug/m3',
        query: 'pm2',
    },
    PM10: {
        article: 'El',
        unit:'ug/m3',
        query: 'pm10',
    },
    TVOC: {
        article: 'El',
        query: 'tvoc',
        unit:''
    },
    HCHO: {
        article: 'El',
        unit:'mg/m3',
        query: 'hcho',
    },
    Ozono: {
        article: 'El',
        query: 'ozone',
    },
    Temperatura: {
        article: 'La',
        unit:'C°',
        query: 'temperature',
    },
    Humedad: {
        article: 'La',
        unit:'%',
        query: 'humidity',
    },
}

export const titleGetter = (param) => titles[param] || {
    article:'error',
    unit:'error',
    query: 'error',
}