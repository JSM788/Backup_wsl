import React, { useEffect, useRef } from 'react'
import { MdTransitEnterexit } from "react-icons/md";

const PopUpPrivacyPolicy = ({title = 'prueba', content = 'Lorem Ipsum', setShow}) => {
    const policyI = useRef(null);
    
    useEffect(() => {
        const policy = policyI.current;

        setTimeout(() => {
            policy.style.width = `75%`;
            policy.style.height = `80%`;
            policy.style.transition = `all 150ms linear`
        }, 300);

    }, [])

    return (
        <>
            <div className='max-w-[100%] opacity-50 bg-[#000] h-screen fixed top-0 w-[100%] left-0 right-0 m-auto flex'>
            </div>
            <div ref={policyI} className='fixed w-[0px] h-[0px] bg-white bottom-0 top-0 left-0 right-0 m-auto'>
                {/* Aqui iria un componente para mostrar una PopUp */}
                <div className='h-[100%] overflow-y-scroll relative'>
                    <div className='mx-[40px]'>
                        <div className='flex items-center justify-between sticky top-0 bg-white'>
                        <p className='text-[30px] my-[20px] capitalize'>{title}</p>
                        <button className='flex items-center justify-center border-[#6c5a5a] border-[1px]'
                            onClick ={ ()=> setShow(false) }
                        >
                            <MdTransitEnterexit size={25}/>
                        </button>
                        </div>
                      
                        <p>{content}</p>

                    </div>
                </div>

            </div>
        </>
    )
}

export default PopUpPrivacyPolicy
