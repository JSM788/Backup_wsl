import React from 'react'
import ClaimBook from '../svgComponents/LibroReclamos';
import Tiktok from '../svgComponents/Tiktok';
import Facebook from '../svgComponents/Facebook';
import Twitter from '../svgComponents/Twitter';
import Instagram from '../svgComponents/Instagram';
import { BsChevronUp } from "react-icons/bs";


const Footer = () => {
  return (
    

    <section className='bg-[#0A0B0D] mt-[40px] pb-[10px]'>

    <footer className='max-w-6xl my-0 mx-auto h-[336px] flex flex-col justify-evenly'>

    <div className='flex justify-between'>

      <div className='flex justify-center items-center w-[50px] h-[50px] bg-gray-800 px-[60px]'> 
        <p className='text-white'>Logo</p>
    </div>

    <ul className={`flex gap-[25px] text-white uppercase translate-x-20 items-center cursor-pointer`}>
        <li>nosotros</li>
        <li>productos</li>
        <li>soporte</li>
        <li>faqs</li>
        <li>contacto</li>
    </ul>

    <div className='flex'>

    <ul className='flex gap-[20px] translate-x-[-30px] items-center'>
        <li className='w-[30px] h-[30px] flex justify-center items-center rounded-[50%] border-[1px] border-[#787878]'>
            <Facebook color='#787878'/>
        </li>
        <li className='w-[30px] h-[30px] flex justify-center items-center rounded-[50%] border-[1px] border-[#787878]'>
            <Tiktok/>
        </li>
        <li className='w-[30px] h-[30px] flex justify-center items-center rounded-[50%] border-[1px] border-[#787878]'>
            <Twitter/>
        </li>
        <li className='w-[30px] h-[30px] flex justify-center items-center rounded-[50%] border-[1px] border-[#787878]'>
            <Instagram/>
        </li>
    </ul>

    <div className='w-[48px] h-[48px] flex justify-center items-center rounded-[50%]  bg-[#ffffff15]'>
        <BsChevronUp size={25} color='white'/>
    </div>
    </div>

    </div>

    <div className='flex justify-center items-center'>
    <ClaimBook/>
    </div>

    <hr className='opacity-30'/>

    <div className='flex justify-center text-white gap-[20px] capitalize'>

    <p>&copy; Logo Inc. Todos los derechos reservados</p>
    <p>condiciones de uso</p>
    <p>políticas de privacidad</p>

    </div>

    </footer>
    </section>
  )
}

export default Footer
