import React, { useState } from 'react';


export default function Nav () {
  const [showSidebar, setShowSidebar] = useState(false);


 
  return (
   <div className='flex'> 
   {showSidebar ? (
      <img
      src='./close.png'
        className="flex text-4xl text-white items-center w-[10%] cursor-pointer fixed right-1 top-6 z-50"
        onClick={() => setShowSidebar(!showSidebar)}
      />
        
    
    ) : (
      <img
      src='./menu.png'
        className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-5 z-50"
        onClick={() => setShowSidebar(!showSidebar)}
      />
    )}
    <div  className={`flex top-0 right-0 w-[50vw] bg-[#191919] ease-in-out duration-300 text-white fixed h-full z-40 ${
    showSidebar ? "translate-x-0 " : "translate-x-full"
  }`}>
 <ul className='grid text-lg font-light underline w-[51%] mx-auto mt-[80%] max-h-[60vh]'>
  <li>INICIO</li>
  <li>SKILSS</li>
  <li>PROYECTOS</li>
  <li>CV</li>
  <li>CONTACTO</li>
 </ul>

</div> 
</div>
  );}
