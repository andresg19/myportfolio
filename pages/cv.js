import React from 'react';


export default function Cv () {
   
    const handleViewCv = (e) => {
        window.open('./CV-Andrés-Germain.pdf')
    }

    return ( 
        <div className='w-[40%] text-white text-lg ml-auto mr-auto mt-[50%] animate-bounce sm:w-[20%] sm:mt-[20%] lg:w-[15%]'>
            <p className='text-center mb-5 underline'>Descargar CV</p>
            <img
            className='w-[100%] cursor-pointer' 
            src="/pdfdown.png" alt="" onClick={handleViewCv}/>
        </div>
     );
     
}