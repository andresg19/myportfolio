import Image from 'next/image';
import React from 'react';


export default function Cv () {
   
    const handleViewCv = (e) => {
        window.open('./CV-Andrés-Germain.pdf')
    }

    return ( 
        <div className='w-[40%] text-white text-lg ml-auto mr-auto mt-[50%] animate-bounce sm:w-[20%] sm:mt-[20%] lg:w-[15%]'>
            <p className='text-center mb-5 underline'>Descargar CV</p>
            <Image
            className='w-[100%] cursor-pointer' 
            width={500}
            height={500}
            src="/pdfdown.png" alt="img not found" onClick={handleViewCv}/>
        </div>
     );
     
}