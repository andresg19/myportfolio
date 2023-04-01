import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import { data } from './assets/infoSkills';




export default function Skills() {
  const infoSkills = data[0].tools;
  return (


      <ReactCarousel
      showArrows={false}
      showStatus={false}
      showThumbs={true}
      swipeable={true}
      emulateTouch={true}
      >
           {infoSkills.map((t) => {
              return(
        <div className='mb-10 text-lg underline text-white font-light bg-[#19191965] shadow-md shadow-[#090909] rounded-lg w-[35%]  mx-auto sm:w-[20%] lg:w-[10%]'
        key={t.name}
        >
                    <div className='cursor-grabbing'>
                      <img  src={t.img} alt=""/>
                      <p>{t.name}</p>
                    </div>
            </div>
              )
            })}
      </ReactCarousel>



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
    

 