import React from 'react';
import '@splidejs/react-splide/css/core';
import { Options, Splide, SplideSlide } from '@splidejs/react-splide';
import { data } from './assets/infoSkills';






export default function Skills() {
  const infoSkills = data[0].tools;
  return (
    <div className='bg-white'>
      <Splide className=''>
        {infoSkills.map((s) => (
          <SplideSlide>
            <div className='text-white p-8 bg-[#18181b] bg-opacity-40 shadow-sm rounded-br-lg rounded-tl-lg shadow-[#070707] w-[80%] mx-auto'>
            <div className='text-center'>
            <img src={s.img} className='w-[50%] shadow-lg shadow-[#0000002d] mx-auto'/>
            <p className='mt-10 mx-auto text-center'>
              {s.name}
            </p>
            </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>

    //      <div className='grid grid-cols-4 h-[50vh] mt-12 md:grid-cols-5'>
    //       {infoSkills.map((t) => {
    //           return(
    //               <div className='block ml-auto mr-auto w-[100%] h-[10vh] text-sm text-slate-700 text-center mt-[2%] shadow-sm hover:animate-spin lg:h-[12vh]'>
    //                   <img className='w-[20%] mt-3 ml-auto mr-auto' src={t.img} alt=""/>
    //                   <p>{t.name}</p>
    //               </div>
    //           )
    //       })}
    //   </div>
  );
}
    

 