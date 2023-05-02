const convertorArray = {
    CO2: 'CO2',
    PM2: 'PM2.5',
    PM10: 'PM10',
    TVOC: 'TVOC',
    Temperatura: 'TEMPERATURE',
    Ozono: 'OZONE',
    Humedad: 'HUMIDITY',
  }

export const convert = (str) => convertorArray[str] || str