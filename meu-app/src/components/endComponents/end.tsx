import { FaInstagram,FaTiktok,FaWhatsapp } from 'react-icons/fa';
import { Div } from './style';
import React from 'react';


function EndComponent (){
    return (
        <Div>
            <h3>Contatos</h3>


    <div>
            <a href="https://www.instagram.com/srt_julia/?igshid=NGVhN2U2NjQ0Yg%3D%3D" target="_blank" rel="noopener noreferrer">
  <FaInstagram/>
</a>

<a href="https://www.tiktok.com/@correanaju?_t=8gzt9QeLYo9&_r=1" target="_blank" rel="noopener noreferrer">
  <FaTiktok/>
</a>

<a href="https://wa.me/5551993736115" target="_blank" rel="noopener noreferrer">
  <FaWhatsapp/>
</a>
                
            </div>
        </Div>
    )
}


export default EndComponent