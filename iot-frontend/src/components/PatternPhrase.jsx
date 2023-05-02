import { ColorfulSpan } from "../styles/EstadisticasStyle"
import { getWeekDay } from "../utils/getDay"

const tempHum = {
    L:{
        value:"bajo",
        color: "#FEBC2D"
    },
    N:{
        value:"normal",
        color: "#57D2A9"
    },
    H:{
        value:"alto",
        color: "#F0142F"
    }     
}

const rest = {
    L:{
        value:"seguro",
        color: "#57D2A9"
    },
    N:{
        value:"contaminado",
        color: "#FEBC2D"
    },
    H:{
        value:"peligroso",
        color: "#F0142F"
    }
}

const PatternPhrase = ({pattern, indicator, article}) =>{

    const translater = (val) =>{
        if(indicator=="Temperatura"||indicator=="Humedad"){
            return tempHum[val]
        }
        return rest[val]
    }

    const statusValues = (str) => str.split("_").map(val => translater(val))

    const values = statusValues(pattern.status)

    return (
        <>
            <strong>Los {getWeekDay(pattern.day_week+1).toLowerCase()}</strong>
            <ColorfulSpan color="#96d2ff">{article.toLowerCase()} {indicator}</ColorfulSpan>
            {`tiende a subir desde las ${pattern.hour} de`}
            <ColorfulSpan color={values?.[0]?.color}>{values?.[0]?.value}</ColorfulSpan>
            a
            <ColorfulSpan color={values?.[1]?.color}>{values?.[1]?.value}.</ColorfulSpan>
        </>
    )
}

export default PatternPhrase