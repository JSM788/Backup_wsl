import { BackdropGray, Modal, ModalClose, ModalHeader, ModalTitle, PeakDataBox, PeakGrid } from "../styles/EstadisticasStyle"

const days = {
    0: 'Lunes',
    1: 'Martes',
    2: 'Miércoles',
    3: 'Jueves',
    4: 'Viernes',
    5: 'Sábado',
    6: 'Domingo'
}

const colorReturner = (val) =>{
    if(val==='HIGH') return '#F0142F';
    if(val==='NORMAL') return '#FEBC2D'
    if(val==='LOW') return '#57D2A9'
    return 'black'
}

const WeeklyPeaks = ({
    close,
    unit,
    peaks
}) =>{

    return(
        <>
            <BackdropGray/>
            <Modal>
                <ModalHeader>
                    <ModalTitle>NIVELES MÁS ALTOS</ModalTitle>
                    <ModalClose onClick={()=>close()}>X</ModalClose>
                </ModalHeader>  
                <PeakGrid>
                {
                    Object.keys(days).map((day)=>(
                        <PeakDataBox 
                            key={day}
                            color={colorReturner(peaks?.status?.[day])}
                        >
                            <p>{days[day]} {new Date(peaks?.created_at?.[day])?.getDate() || ""}</p>
                            <p>{+peaks?.value?.[day]?.toFixed(2) || "-"}  {unit}</p>
                        </PeakDataBox>                       
                    ))
                }
                </PeakGrid>
            </Modal>
        </>   
    )
}

export default WeeklyPeaks