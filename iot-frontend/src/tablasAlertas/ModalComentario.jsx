import { useEffect } from "react"
import { useState } from "react"
import useComment from "../hooks/useComment"
import { ModalBackground, ModalClose, ModalContainer, ModalDescription, ModalInput, ModalSubmit, ModalTitle } from "../styles/AlertasStyle"

const ModalComentario = ({id, close, reload, solved=false}) => {

    const [text, setText] = useState('')

    const { postComment, getComment, loading, comment } = useComment(solved)

    const returner = () =>{return comment || text }

    const handlePost = (content) =>{
        postComment(id, content)
        reload()
        close()
    }

    useEffect(()=>{
        if(solved) getComment(id)
    },[])

    return(
        <>
            <ModalBackground/>        
            <ModalContainer>
                <ModalClose onClick={()=>close()}>✖</ModalClose>
                <ModalTitle>SOLUCIÓN DEL CASO</ModalTitle>
                <ModalDescription>
                    {!solved ? 'Añadir comentario sobre las acciones realizadas.':'Comentario sobre las acciones realizadas.'}
                </ModalDescription>
                {!loading && <ModalInput 
                    placeholder={'Escribir...'} 
                    disabled={solved} 
                    value={returner()} 
                    onChange={(e)=>setText(e.target.value)}/>
                }
                <br/>
                {!solved && 
                    <ModalSubmit 
                        onClick={()=>handlePost(text)}
                    >
                        GUARDAR COMENTARIO
                    </ModalSubmit>
                }
            </ModalContainer>
        </>    
    )
}

export default ModalComentario