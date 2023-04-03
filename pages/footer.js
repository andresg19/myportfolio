import React, { useRef, useState } from 'react';
import swal from "sweetalert"
import emailjs from '@emailjs/browser';
import swaal from 'sweetalert';
import Image from 'next/image';



export default function Footer () {
    const form = useRef();
    const [input, setInput] = useState({
      email : "",
      message : ""
    })

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
        .send(
          "service_pnwe6gb",
          "template_lmj2k5k",
            input,
            "UcXhrFVfZhUn4qCR8"
          )
          .then(
            (result) => {
              console.log(result.text);
              swal({
                title: "Mensaje enviado con exito ",
                type: "success",
                icon: "success",
                buttons: false,
                timer: 800,
              })
              
              setInput({
                email: "",
                message: ""
              });
              window.location.reload()
    
            },
            (error) => {
              console.log(error.text);
              swal({
                title: "Error al enviar el mensaje",
                icon: "Warning",
              });
            }
          );
      };


    return ( 
        <div className='grid mt-40 py-5 lg:flex'>
        <div className='mt-[7%] text-white'>
		<h1 className='font-light text-center text-2xl lg:ml-5'>Andrés Germain dev</h1>
       <br />
       <a href="https://www.linkedin.com/in/andres-germain-dev/">
       <Image width={500} height={500} 
       className=' w-[15%] mx-auto sm:w-[10%] lg:w-[25%]' 
       src="/linke.png" alt="linkeding img not found" />
       </a>
       <br />
       <a href="https://github.com/andresg19">
       <Image width={500} height={500} 
       className=' w-[15%] mx-auto sm:w-[10%] lg:w-[25%]' 
       src="/gith.png" alt="github img not found" />
       </a>
      </div>
 <div className='grid mt-[5%] text-white w-[50%] mx-auto lg:mr-2 lg:w-[15%] '>
        <h1 className='text-lg text-center lg:mx-auto'>CONTACTO</h1>
        <form
        onSubmit={sendEmail}
         className='block lg:mx-auto'>
          <input 
          className='flex mt-2 text-white font-light shadow-lg rounded-md mx-auto bg-[#191919bd]'
          type="text" 
          placeholder='Email'
          name='email'
          onChange={(e) =>  setInput({
            ...input,
            [e.target.name] : e.target.value
          })}/>
          <textarea
          className='flex bg-[#191919bd] text-white font-light shadow-md shadow-[#191919] mt-2 rounded-md sm:mx-auto '
          rows={4} 
          cols={25} 
          type="text"
          name='message'
          placeholder='Inserte su mensaje'
          onChange={(e) => setInput({
            ...input,
            [e.target.name] : e.target.value
          })}
          />
          <button
          className='flex mt-2 text-white bg-[#19191998] mx-auto rounded-md' 
          type='submit'
          >
            Enviar
          </button>
        </form>
      </div>
    
        </div>
     );
}
 
