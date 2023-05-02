import React from 'react'

const Categoria = () => {
    return (
        <div className='flex gap-[5px] items-center justify-start my-[12.5px]'>
            <div className='w-[20px] h-[20px] flex justify-center items-center ml-[5px]'>
                <input type={'checkbox'} className='w-full h-full ' />
            </div>
            <label className='text-[#787878]'>Categoria</label>
        </div>

    )
}

export default Categoria
