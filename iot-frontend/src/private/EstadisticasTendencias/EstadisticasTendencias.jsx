import { useState } from "react"
import { useOutletContext, useParams } from "react-router-dom"
import NavEstadisticas from "../../components/NavEstadisticas"
import { Advice, BlueExtra, ButtonExtra, ButtonFlex, ContentFlex, EstadisticaBox, EstadisticasPageWrapper, EstadisticaTopFlex, FindingsFlex, Low, Mid, MiniFlex, OptionalFlex, PaginationButton, PeaksFlex, Safe, TendenciaBox, TendenciaFlex, TitleFlex } from "../../styles/EstadisticasStyle"
import StatisticsGraph from "../../components/StatisticsGraph"
import useStatistics from "../../hooks/useStatistics"
import Hallazgos from "../../assets/svg/Hallazgos.svg"
import Picos from "../../assets/svg/Nivel_alto.svg"
import Predictivos from "../../assets/svg/Predictivos.svg"
import ImageIcon from "../../assets/svg/ImageIcon.svg"
import { titleGetter } from "../../utils/statisticsLogic"
import { useEffect } from "react"
import useFindings from "../../hooks/useFindings"
import WeeklyPeaks from "../../components/WeeklyPeaks"
import PatternsModal from "../../components/PatternsModal"
import { dayDifference } from "../../utils/dayDifference"
import { ContainerAnimationPage } from "../../animation/Animacion"
import useMeasurables from "../../hooks/useMeasurable"
import PeakAdviceBox from "../../components/PeakAdviceBox"
import domtoimage from 'dom-to-image'
import PredictiveAdviceBox from "../../components/PredictiveAdviceBox"

const EstadisticasTendencias = () =>{

    const { id:room } = useParams()

    const [fechaInicio, fechaFinal, currentHead] = useOutletContext()

    const [indicator, setIndicator] = useState('CO2')
    // const [localDate, setLocalDate] = useState(fechaInicio)
    const [weeklyOpen, setWeeklyOpen] = useState(false)
    const [patternsOpen, setPatternsOpen] = useState(false)

    const [page, setPage] = useState(0)
    const [totalPages,setTotalPages] = useState()
    const [pagination, setPagination] = useState(false)

    const { article, unit, query:queryIndicator } = titleGetter(indicator)

    const diff = dayDifference(fechaInicio,fechaFinal)

    const enablePaginationMode = (days) =>{
        setTotalPages(Math.ceil(days/20))
        setPagination(true)
    }

    const disablePaginationMode = () =>{
        setTotalPages(1)
        setPagination(false)
    }

    useEffect(()=>{
        // setLocalDate(fechaInicio)
        setPage(0)
        if(diff>31) enablePaginationMode(diff)      
        else disablePaginationMode()
    },[indicator, fechaInicio, fechaFinal])

    const { data, isDate } = useStatistics(queryIndicator, room, fechaInicio, fechaFinal, pagination, page)

    const { daily, peaks, weeklyPeaks, patterns } = useFindings(queryIndicator, room)

    const { measurables } = useMeasurables(room)

    const { HIGH, NORMAL, LOW } = daily
    
    const indicatorString = `${article==='El' ? indicator : indicator.toLocaleLowerCase()}`

    const lengthUnit = diff>0 ? 'Día' : 'Hora'

    const averageUnit = diff>0 ? 'diarios' : 'por cada hora'

    const handleDownload = async () => {
        const node = document.getElementById('asd')
        await domtoimage.toPng(node)
        .then((dataUrl) => {
            var img = new Image()
            img.src = dataUrl
            const date = new Date()
            const a = document.createElement('a')
            a.setAttribute('href', img.src)
            a.setAttribute('download', date + ' ' + indicator);   
            a.click()
        })
        .catch(error => {
            console.error('Ocurrió un problema.', error);
        });
    }

    const hourConverter = (hour) =>{
        const converted = hour < 1 ? `${Math.floor(hour*60)} minutos` : `${Math.round(Number(hour))} horas`
        return converted
    }

    return(
        <>
            <ContainerAnimationPage>
            { weeklyOpen && (
                <WeeklyPeaks 
                    close={()=>setWeeklyOpen(false)}
                    peaks={weeklyPeaks}
                    unit={unit}
                />
            )}
            { patternsOpen && (
                <PatternsModal 
                    close={()=>setPatternsOpen(false)}
                    patterns={patterns}
                    indicator={indicator}
                    article={article}
                />
            )}
            <EstadisticasPageWrapper>
                <EstadisticaTopFlex>
                    <p>Total: {data.length} datos <span>(Promedios {averageUnit})</span></p>
                    <NavEstadisticas
                        measurables={measurables}
                        indicator={indicator}
                        setIndicator={setIndicator}
                    />
                </EstadisticaTopFlex>               
                <EstadisticaBox id="asd">
                    <TitleFlex>
                        <h1>{indicator} {unit && `(${unit})`} / {lengthUnit}</h1>
                        <MiniFlex>
                            <ButtonExtra 
                                onClick={()=>handleDownload()}
                            >
                                <img src={ImageIcon} alt="icon"/>
                                <p>Descargar</p>
                            </ButtonExtra>
                            { totalPages>1 && (
                                <OptionalFlex>
                                    <ButtonFlex>
                                        <PaginationButton 
                                            onClick={()=>setPage(prev=>prev-1)}
                                            disabled={page+1<=1}    
                                        >
                                            <i className={ "fas fa-chevron-left list__arrow" }/>
                                        </PaginationButton>
                                        <PaginationButton 
                                            onClick={()=>setPage(prev=>prev+1)}
                                            disabled={page+1>=totalPages}    
                                        >
                                            <i className={ "fas fa-chevron-right list__arrow" }/>
                                        </PaginationButton>
                                    </ButtonFlex>
                                    <span>{page+1} de {totalPages}</span>
                                </OptionalFlex>
                            )}
                        </MiniFlex>
                    </TitleFlex>                   
                    <StatisticsGraph name={indicator} items={data} short isDate={isDate}/>
                </EstadisticaBox>
                <TendenciaFlex>
                    <TendenciaBox>
                        <TitleFlex>
                            <p>Datos del día de hoy</p>
                            <BlueExtra>En tiempo real</BlueExtra>
                        </TitleFlex>
                        <ContentFlex>
                            <img src={Hallazgos} alt="icon"/>
                            <FindingsFlex>
                                <Advice>{article} {indicatorString} se mantuvo <Safe>{article === 'El' ? 'bueno' : 'buena'}</Safe> por {hourConverter(+LOW?.hours)}</Advice>
                                <Advice>{article} {indicatorString} se mantuvo <Mid>{article === 'El' ? 'regular' : 'regular'}</Mid> por {hourConverter(+NORMAL?.hours)}</Advice>
                                <Advice>{article} {indicatorString} se mantuvo <Low>{article === 'El' ? 'malo' : 'mala'}</Low> por {hourConverter(+HIGH?.hours)}</Advice>
                            </FindingsFlex>                           
                        </ContentFlex>
                    </TendenciaBox>
                    <TendenciaBox>
                        <TitleFlex>
                            <p>Niveles más altos</p>
                            <MiniFlex>
                                <BlueExtra>Últimos 30 días</BlueExtra>
                                <ButtonExtra onClick={()=>setWeeklyOpen(true)}>Ver más</ButtonExtra>
                            </MiniFlex>
                        </TitleFlex>
                        <ContentFlex>
                            <img src={Picos} alt="icon"/>
                            <PeakAdviceBox
                                article={article}
                                unit={unit}
                                peaks={peaks}
                                indicator={indicator}
                            />                        
                        </ContentFlex>                 
                    </TendenciaBox>
                    <TendenciaBox>
                        <TitleFlex>
                            <p>Hallazgos predictivos</p>
                            <MiniFlex>
                                <BlueExtra>Patrones recurrentes</BlueExtra>
                                <ButtonExtra onClick={()=>setPatternsOpen(true)}>Ver más</ButtonExtra>
                            </MiniFlex>
                        </TitleFlex>
                        <ContentFlex>
                            <img src={Predictivos} alt="icon"/>
                            <PredictiveAdviceBox
                                patterns={patterns}
                                article={article}
                                indicator={indicator}
                            />                                                   
                        </ContentFlex>
                    </TendenciaBox>
                </TendenciaFlex>
            </EstadisticasPageWrapper>
            </ContainerAnimationPage>
        </>
    )
}

export default EstadisticasTendencias
