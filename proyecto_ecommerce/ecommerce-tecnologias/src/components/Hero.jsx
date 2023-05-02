import React, { useEffect, useState, useRef } from 'react'
import '../index.css'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { images } from '../helpers/imagenes'
const Hero = () => {
    const sliderI = useRef(null);


    const Next = () => {
        const slider = sliderI.current;
        const sliderFirst = slider.children[0];

        slider.style.marginLeft = `-200%`
        slider.style.transition = `margin-left 150ms linear`
        setTimeout(() => {
            slider.style.transition = `none`;
            slider.insertAdjacentElement('beforeend', sliderFirst);
            slider.style.marginLeft = `-100%`
        }, 150);
    };

    const Prev = () => {
        const slider = sliderI.current;
        const sliderFirst = slider.children[0];
        const sliderLast = slider.children[slider.children.length - 1];
        slider.style.marginLeft = `0`
        slider.style.transition = `margin-left 150ms linear`
        setTimeout(()=> {
            slider.style.transition = `none`;
            slider.insertAdjacentElement('afterbegin', sliderLast);
            slider.style.marginLeft = `-100%`
        },150)
        
    }

    useEffect(()=> {
        setInterval(()=> {
            Next();
        }, 5000)
    },[])


    return (
        <>
            <section id='cont' className='max-w-[1440px] my-0 mx-auto relative overflow-hidden'>

                <div ref={sliderI} className='h-[400px] flex w-[400%] ml-[-100%]'>
                    {
                        images?.length > 0 && images.map((item, index) => {
                            return (
                                <div className='w-full'>
                                    <img src={item.img} alt='img' className='block w-[100%] h-full object-fill' />
                                </div>
                            )
                        })
                    }

                </div>

                <button className='w-[40px] h-[40px] bg-[#ffffffa0] absolute top-[50%] flex justify-center items-center rounded-[50%] cursor-pointer border-none hover:bg-[#fff] left-[10px]'
                    onClick={()=> Prev()}
                ><BsChevronLeft size={25} /></button>
                <button className='w-[40px] h-[40px] bg-[#ffffffa0] absolute top-[50%] flex justify-center items-center rounded-[50%] cursor-pointer border-none hover:bg-[#fff] right-[10px]'
                    onClick={() => Next()}
                ><BsChevronRight size={25} /></button>
            </section>

            <div className='flex justify-center gap-2 mt-2'>
                <div className='w-[40px] h-[40px] bg-slate-400 rounded-[50%] flex justify-center items-center'>x</div>
                <div className='w-[40px] h-[40px] bg-slate-400 rounded-[50%] flex justify-center items-center'>x</div>
                <div className='w-[40px] h-[40px] bg-slate-400 rounded-[50%] flex justify-center items-center'>x</div>
                <div className='w-[40px] h-[40px] bg-slate-400 rounded-[50%] flex justify-center items-center'>x</div>
            </div>

        </>
    )
}

export default Hero



