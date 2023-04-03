import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import { data } from './assets/infoSkills';
import Image from 'next/image';




export default function Skills() {
  const infoSkills = data[0].tools;
  return (


      <ReactCarousel
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      swipeable={true}
      emulateTouch={true}
      >
           {infoSkills.map((t) => {
              return(
        <div className='mb-10 text-lg underline text-white font-light bg-[#19191965] shadow-md shadow-[#090909] rounded-lg w-[35%]  mx-auto sm:w-[20%] lg:w-[10%]'
        key={t.name}
        >
                    <div className='cursor-grabbing'>
                      <Image  src={t.img} alt="img not found"    width={500}  height={500}/>
                      <p>{t.name}</p>
                    </div>
            </div>
              )
            })}
      </ReactCarousel>



  );
}
    

 