import { useEffect, useState } from "react"
import { clienteAxiosValhalla } from "../config/axios"

const useComment = (solved) =>{

    const [comment, setComment] = useState(null)
    const [loading, setLoading] = useState(solved)

    const getComment = async (id) => {
        await clienteAxiosValhalla.get(`api/alerts/${id}/comments/`)
        .then((res)=>{
            console.log(res.data)
            setComment(res.data.results[0]?.content || 'No hay comentario.')
            setLoading(false)
        })
    }

    const postComment = async (id, content) => {
        await clienteAxiosValhalla.post(`api/alerts/${id}/comments/`,{
            content: content
        })
    }

    return{
        postComment,
        getComment,
        comment,
        loading
    }
}

export default useComment