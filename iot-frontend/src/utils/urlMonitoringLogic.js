
const forUrls = {
    hcho: 'hcho',
    humedad: 'humidity',
    pm:'pm2',
    pm10: 'pm10',
    tvoc: 'tvoc',
    ozono: 'ozone',
    temperatura: 'temperature'
}

export const convertedIndicator = (indicator) => 
    forUrls[indicator] || 'carbon_dioxide'