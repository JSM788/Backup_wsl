import usePeaks from "../hooks/usePeaks"
import { Advice, Low, Mid, PeaksFlex } from "../styles/EstadisticasStyle"
import { peakCorrector } from "../utils/peakString"

const PeakAdviceBox = ({article, peaks, unit, indicator}) => {

    const { peakValues } = usePeaks(article, peaks, unit, indicator)
    
    console.log(peakValues)

    return(
        <PeaksFlex>
            {
                peakValues[0] || peakValues[1] ? (
                    <AllPeakAdvices
                        arr={peakValues}
                    />
                ) : (
                    <Advice full>
                        <p>
                            En los últimos 30 días, {article.toLowerCase()} {peakCorrector(indicator)} no
                            obtuvo niveles altos, malos ni regulares.
                        </p>
                    </Advice>
                )
            }
        </PeaksFlex>  
    )
}

const AllPeakAdvices = ({arr}) =>{
    return arr.map((elem, index)=> elem[0] && (
            <Advice key={elem}>
                {elem[0]} {index==0 ? <Low>{elem[1]} ({elem[2]})</Low> : <Mid>{elem[1]} ({elem[2]})</Mid>}             
            </Advice>
    ))
}

export default PeakAdviceBox