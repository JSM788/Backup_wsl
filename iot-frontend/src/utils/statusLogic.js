
const values = {
    DANGEROUS:{
        value: "Malo",
        color: "#F0142F"
    },
    CONTAMINATED:{
        value: "Regular",
        color: "#FEBC2D"
    },
    EXCELLENT:{
        value: "Bueno",
        color: "#57D2A9"
    }
}

export const returner = (status) => values[status] || {
    value: 'error',
    color: '#000',
}

const alertValues = {
    HIGH:{
        value: "Malo",
        color: "#F0142F"
    },
    NORMAL:{
        value: "Regular",
        color: "#FEBC2D"
    },
    LOW:{
        value: "Bueno",
        color: "#57D2A9"
    }
}

export const alertReturner = (status) => alertValues[status] || {
    value: 'error',
    color: '#7E84A3',
}