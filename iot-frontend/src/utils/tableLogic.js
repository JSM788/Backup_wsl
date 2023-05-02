const values = {
    Temperatura:{
        safe: 'Normal',
        contaminated: 'Nivel Bajo',
        dangerous: 'Nivel Alto'
    },
    Humedad:{
        safe: 'Normal',
        contaminated: 'Seco',
        dangerous: 'Humedad alta'
    }
}

export const tableReturner = (a) =>
    values[a] ?? {
        safe: 'Bueno',
        contaminated: 'Regular',
        dangerous: 'Malo'
    }