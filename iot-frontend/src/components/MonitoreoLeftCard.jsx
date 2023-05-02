import { BsArrowClockwise } from "react-icons/bs"
import { Herramientas } from "../styles/IndicadoresStyle"
import { BoxAmbiente, BoxEstado, BoxResumen, ProgessEstadoAmbiente, ProgressAmbiente, ProgressSvg, ResumenAmbiente, TablaAmbiente } from "../styles/MonitoreoStyle"
import { BtnActualizar } from "../styles/TablasStyle"
import TablaIndicadoresAmbientes from "../tablasCO2/TablaIndicadoresAmbientes"
import { returner } from "../utils/statusLogic"
import SalaVerde from "../assets/svg/emojiVerde.svg";
import SalaAmarilla from "../assets/svg/emojiAmarillo.svg";
import SalaRojo from "../assets/svg/emojiRojo.svg";

const MonitoreoLeftCard = ({data}) =>{

    const { color, value } = returner(data?.general_status)

    return data ? (    
        <ResumenAmbiente>    
            <BoxAmbiente>
                <BoxResumen>
                    <h3>{data.room}</h3>
                    <p>Promedio del día</p>
                    {/* <Herramientas>                 
                        <BtnActualizar onClick={()=>getDataUltimo()}>
                            <BsArrowClockwise size={"24px"}/>
                            Actualizar
                        </BtnActualizar>
                    </Herramientas> */}
                </BoxResumen>
                <BoxEstado>
                    <ProgressAmbiente
                    porcentage={100}
                    color={color}
                    >
                    <ProgressSvg>
                        {data.general_status==="EXCELLENT" && <img src={SalaVerde} alt="estado" />}
                        {data.general_status==="CONTAMINATED" && <img src={SalaAmarilla} alt="estado" />}
                        {data.general_status==="DANGEROUS" && <img src={SalaRojo} alt="estado" />}
                    </ProgressSvg>
                    </ProgressAmbiente>
                    <ProgessEstadoAmbiente colorsi1={color}>
                    {value}
                    </ProgessEstadoAmbiente>
                </BoxEstado>
            </BoxAmbiente>
            <TablaAmbiente>
                <TablaIndicadoresAmbientes last={data} />
            </TablaAmbiente>
        </ResumenAmbiente>
    ) : null
}

export default MonitoreoLeftCard