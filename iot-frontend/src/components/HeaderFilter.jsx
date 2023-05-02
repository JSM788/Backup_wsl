import { DateFiltersContainer, FilterHeaderContainer, RoomTitle } from "../styles/HeaderStyle"
import { TimeBox } from "../styles/IndicadoresStyle"
import { BoxSelectAmbiente, SelectIndicadorAmbiente } from "../styles/MonitoreoStyle"

const HeaderFilter = ({
    sedes, 
    salas, 
    filtros,
    handleChange,
    currentRoom,
    pageChange,
    noInitial=false,
    displayName=false,
    children
}) => {

    return(
        <>
            <FilterHeaderContainer>
                {displayName ? <RoomTitle>{currentRoom.name}</RoomTitle> : <p></p>}
                <DateFiltersContainer>
                    <p>Filtrar datos</p>
                    <BoxSelectAmbiente>
                        <SelectIndicadorAmbiente
                            monitoreo="196px"
                            name="sede"
                            id="sede"
                            value={currentRoom.headquarter_id || filtros.sede}
                            onChange={handleChange}
                        >
                            <option value="">Todas las sedes</option>
                            {sedes.map((sedeF) => (
                                <option key={sedeF.name} value={sedeF.id}>
                                    {sedeF.name}
                                </option>
                            ))}
                        </SelectIndicadorAmbiente>
                    </BoxSelectAmbiente>
                    <BoxSelectAmbiente>
                        <SelectIndicadorAmbiente
                            monitoreo="230px"
                            name="sala"
                            id="sala"
                            value={currentRoom.id || filtros.sala}
                            disabled={!filtros.sede && !currentRoom.name}
                            onChange={(e)=>{
                                handleChange(e)
                                pageChange(e.target.value)
                            }}
                        >
                            { !noInitial && <option value="">Todas las salas</option>}
                            {/* {salas.length===0 && (<option value="">Seleccionar sala</option>)} */}
                            {salas.map((salasF) => (
                                <option key={salasF.name} value={salasF?.id}>
                                    {salasF.name}
                                </option>
                            ))}
                        </SelectIndicadorAmbiente>
                    </BoxSelectAmbiente>
                    {children}
                </DateFiltersContainer>
            </FilterHeaderContainer>           
        </>
    )

}

export default HeaderFilter