import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from './assets/infoSkills';
import "swiper/css"

export default function Skills ()  {
const infoSkills = data[0].tools;
    return ( 
       
        <>
        <div className='flex text-white font-light text-xl justify-between'>
            <img src='./arrowLeft.png' width={30}/>
             <p>Desplaza hacia cualquier lado</p>
            <img src='./arrowRigth.png' width={30}/>
        </div>

     <Swiper className='mt-10'
     loop
     spaceBetween={10}
     slidesPerView={3}
     >
    {infoSkills.map((t) => (
        
        <SwiperSlide>
            <div className='grid ml-auto mr-auto w-[80%]'>
                    <img src={t.img} alt=""  className='w-[100%]'/>
                    <p className='text-white ml-2'>{t.name}</p>
            </div>
                </SwiperSlide>
            )
            )
        }
     </Swiper>
        </>


    //     <div className='grid grid-cols-4 h-[50vh] mt-12 md:grid-cols-5'>
    //      {infoSkills.map((t) => {
    //          return(
    //              <div className='block ml-auto mr-auto w-[100%] h-[10vh] text-sm text-slate-700 text-center mt-[2%] shadow-sm hover:animate-spin lg:h-[12vh]'>
    //                  <img className='w-[20%] mt-3 ml-auto mr-auto' src={t.img} alt=""/>
    //                  <p>{t.name}</p>
    //              </div>
    //          )
    //      })}
    //  </div>
     );
}
    

 