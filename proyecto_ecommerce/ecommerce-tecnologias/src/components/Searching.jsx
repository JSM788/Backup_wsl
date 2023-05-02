import React from 'react'
import { BsSearch } from "react-icons/bs";
const Searching = () => {
    return (
        <div className='bg-[#f2f0f094] flex items-center justify-center space-x-2 px-[5px] rounded-[12px] border-[1px] border-[#d9d9d9] w-max'>
            <div className='w-[30px] h-[30px] flex items-center justify-center hover:cursor-pointer'>
                <BsSearch size={20} />
            </div>
            <div className='w-[155px] h-[40px]'>
                <input type='text' placeholder='Buscar en asus' className='bg-inherit border-none w-full h-full focus:outline-none text-[15px]' />
            </div>
        </div>
    )
}

export default Searching
