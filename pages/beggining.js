import React from 'react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image'

const Beggining = () => {
    return ( 
        <div className="grid grid-cols-2 divide-x">
        <div className='border-none min-h-[40vh]'>
        <Image src='/avatar-maker.png' alt='img not found' width={500} height={500} className='mx-auto w-[80%] lg:w-[35%]'/>
       </div>
        <div className='text-2xl border-none mt-[12%] lg:text-4xl'>
        <Typewriter
  options={{
    autoStart: true,
    strings:['Hola!', 'me llamo Andrés', 'soy un', 'Full Stack Developer'],
    loop: true,
  }}
/>

        </div>
      </div>
       
     );
}
 
export default Beggining;