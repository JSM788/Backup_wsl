const options = {
    temperature:[
      {
        value: 'NORMAL',
        content:'Bajo'
      },
      {
        value: 'LOW',
        content:'Normal'
      },
      {
        value: 'HIGH',
        content:'Alto'
      }
    ],
    humidity:[
      {
        value: 'NORMAL',
        content:'Seco'
      },
      {
        value: 'LOW',
        content:'Normal'
      },
      {
        value: 'HIGH',
        content:'Humedad alta'
      }
    ],
    pir:[
      {
        value: 'LOW',
        content:'Desocupado'
      },
      {
        value: 'HIGH',
        content:'Ocupado'
      }
    ]
  }

export const optionArray = (indicator) =>
    options[indicator] || {content: 'error'}