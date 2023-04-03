import Image from 'next/image';
import React, { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

export default function Nav () {
  const [showSidebar, setShowSidebar] = useState(false);

const scrollToTop = () => {
    scroll.scrollToTop(); 
};
 
  return (
   <div className='flex'> 
   {showSidebar ? (
      <Image
      width={50}
      height={50}
      src='/close.png'
      alt='img not found'
        className="flex text-4xl text-white items-center w-[10%] cursor-pointer fixed right-1 top-6 z-50 lg:w-[3%]"
        onClick={() => setShowSidebar(!showSidebar)}
      />
        
    
    ) : (
      <Image
      width={50}
      height={50}
      src='/menu.png'
      alt='img not found'
        className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-5 z-50 animate-pulse"
        onClick={() => setShowSidebar(!showSidebar)}
      />
    )}
    <div  className={`flex top-0 right-0 w-[50vw] shadow-md shadow-black bg-black bg-opacity-95 ease-in-out duration-300 text-white fixed h-full z-40 lg:w-[25vw] ${
    showSidebar ? "translate-x-0 " : "translate-x-full"
  }`}>
 <ul className='grid text-lg font-light underline w-[51%] mx-auto mt-[80%] max-h-[60vh] lg:mt-[60%]'>

  <li onClick={scrollToTop}>INICIO</li>
  <Link
    activeClass="active"
    to="skills"
    spy={true}
    smooth={true}
    offset={-250}
    duration={500}
>
  <li>SKILSS</li>
</Link>
<Link
    activeClass="active"
    to="proyectos"
    spy={true}
    smooth={true}
    offset={-250}
    duration={500}
> 
  <li>PROYECTOS</li>
</Link>
<Link
    activeClass="active"
    to="cv"
    spy={true}
    smooth={true}
    offset={-250}
    duration={500}
> 
  <li>CV</li>
</Link>
<Link
    activeClass="active"
    to="contacto"
    spy={true}
    smooth={true}
    duration={500}
> 
  <li>CONTACTO</li>
</Link>
 </ul>

</div> 
</div>
  );}
