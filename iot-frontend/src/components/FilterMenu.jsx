import { useEffect, useState } from "react"
import { DefaultValueBox, FilterContainer, FilterDateButton, FilterBox } from "../styles/AlertasStyle"
import ExcelImg from "../assets/svg/excel.svg";
import { CSVStyledLink, Reporte, TimeBox } from "../styles/IndicadoresStyle"
import { fifteenAgo, thirtyAgo, today } from "../utils/todayFilter";

const FilterMenu = ({getReport}) =>{

    const [startDate, setStartDate] = useState(today)
    const [finishDate, setFinishDate] = useState(today)

    const defaultSetter = (date) =>{
        setStartDate(date)
        setFinishDate(today)
    }

    return(
        <FilterContainer>
            <h2>Reporte de alertas</h2>
            <FilterBox>
                <DefaultValueBox>
                    <FilterDateButton act={startDate===today} onClick={()=>defaultSetter(today)}>Hoy</FilterDateButton>
                    <FilterDateButton act={startDate===fifteenAgo && finishDate===today} onClick={()=>defaultSetter(fifteenAgo)}>15 días</FilterDateButton>
                    <FilterDateButton act={startDate===thirtyAgo && finishDate===today} onClick={()=>defaultSetter(thirtyAgo)}>30 días</FilterDateButton>
                </DefaultValueBox>
                <TimeBox>
                    <input
                        type="date"
                        name="startDate"
                        max={today}
                        value={startDate}
                        onKeyDown={(e) => e.preventDefault()}
                        onChange={(e)=>{
                            setStartDate(e.target.value)              
                        }}
                    />
                    <input 
                        type="date"
                        name="finishDate"
                        min={startDate}
                        max={today}
                        value={finishDate}
                        onKeyDown={(e) => e.preventDefault()}
                        onChange={(e)=>{
                          setFinishDate(e.target.value)              
                        }}
                        width={'auto'}/>
                </TimeBox>
                <Reporte 
                    dark
                    pad
                    full
                    onClick={()=>getReport(startDate, finishDate)}
                >
                    <img src={ExcelImg} alt="icon" />
                    &nbsp;GENERAR REPORTE
                </Reporte>
            </FilterBox>
        </FilterContainer>
    )
}

export default FilterMenu