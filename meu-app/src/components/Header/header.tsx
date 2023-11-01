import { MainTitle,Header,MainTitle2 } from "./style"
import { FaInstagram,FaTiktok,FaWhatsapp } from 'react-icons/fa';

import React from 'react';

function HeaderComponent(){
    return ( 

    
    <Header>
<div>

<div className="div_title_icons">
<MainTitle>Atleta</MainTitle>
 


</div> 

 
 <MainTitle2>Ana Julia </MainTitle2>

 </div>

 <div className="DivIcons">
<a className="icons" href="https://www.instagram.com/srt_julia/?igshid=NGVhN2U2NjQ0Yg%3D%3D" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
 <a  href="https://www.tiktok.com/@correanaju?_t=8gzt9QeLYo9&_r=1" target="_blank" rel="noopener noreferrer" className="icons"><FaTiktok/></a>
<a  className="icons" href="https://wa.me/5551993736115" target="_blank" rel="noopener noreferrer"><FaWhatsapp/></a>
</div>

    </Header>
   

    )
}

export default HeaderComponent