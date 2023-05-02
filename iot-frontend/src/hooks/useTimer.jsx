import { useEffect, useState } from "react"

const useTimer = () =>{

    const [time, setTime] = useState(0)
    const [currentInterval, setCurrentInterval] = useState()

    useEffect(()=>{
        startTimer()
        return ()=>{
            clearInterval(currentInterval)
        }
    },[])

    const startTimer = () =>{
        const interval = setInterval(()=>{
            setTime(prev=>prev+1)
        },60000)
        setCurrentInterval(interval)
    }

    const resetTimer = () =>{
        clearInterval(currentInterval)
        setTime(0)
        startTimer()
    }

    return{
        time,
        resetTimer
    }
} 

export default useTimer