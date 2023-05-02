import { BackdropGray, Modal, ModalClose, ModalHeader, ModalTitle, PatternBox } from "../styles/EstadisticasStyle"
import { peakCorrector } from "../utils/peakString"
import PatternPhrase from "./PatternPhrase"

const PatternsModal = ({
    close,
    patterns,
    indicator,
    article
}) =>{
    return(
        <>
            <BackdropGray/>
            <Modal>
                <ModalHeader>
                    <ModalTitle>PATRONES RECURRENTES</ModalTitle>
                    <ModalClose onClick={()=>close()}>X</ModalClose>
                </ModalHeader>
                <PatternBox>
                    <ul>
                    {
                        patterns.length>0 ? (
                            patterns.map(elem=>(
                                <li key={elem}>
                                    <PatternPhrase
                                        pattern={elem}
                                        indicator={indicator}
                                        article={article}
                                    />
                                </li>
                            ))
                        ):(
                            <p>
                                Lo sentimos, por el momento necesitamos recolectar más
                                datos para detectar los patrones recurrentes en el indicador 
                                de {peakCorrector(indicator)}.
                            </p>
                        )
                    }
                    </ul>
                </PatternBox>
            </Modal>
        </>   
    )
}

export default PatternsModal