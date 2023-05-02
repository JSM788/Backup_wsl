import React from 'react'
import { BiChevronDown } from "react-icons/bi";

const FIltroSuperior = () => {
  return (
    <div className='max-w-6xl mx-auto flex justify-between items-center my-[10px]'>
        <p className='text-[30px] font-[600]'>Lorem</p>
        <div className='flex gap-[10px] items-center justify-center'>   
            <span>Ordenar por: </span>
            <div className='flex items-center justify-center'>
                <span>Reciente</span>
                <BiChevronDown size={25}/>
            </div>
        </div>
    </div>
  )
}

export default FIltroSuperior


