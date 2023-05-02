import { Advice, ColorfulSpan, Low, PeaksFlex } from "../styles/EstadisticasStyle"
import { getWeekDay } from "../utils/getDay"
import { peakCorrector } from "../utils/peakString"
import PatternPhrase from "./PatternPhrase"

const PredictiveAdviceBox = ({article,indicator, patterns}) =>{

    return(
        <>
            <PeaksFlex>
                {
                    patterns.length>0 ? (
                        <>
                            {
                                patterns.map(pattern=>(
                                    <Advice>
                                        <PatternPhrase 
                                            pattern={pattern}
                                            indicator={indicator}
                                            article={article} 
                                        />
                                    </Advice>
                                ))
                            }
                        </>
                        
                    ):(
                        <Advice full>
                            <p>
                                Lo sentimos, por el momento necesitamos recolectar más
                                datos para detectar los patrones recurrentes en el indicador 
                                de {peakCorrector(indicator)}.
                            </p>
                        </Advice>
                    )
                }
            </PeaksFlex>
        </>
    )
}

export default PredictiveAdviceBox