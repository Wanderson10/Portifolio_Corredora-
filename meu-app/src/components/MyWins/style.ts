import styled from "styled-components";
import img1 from "./img1.jpeg"
import img2 from "./im2.jpeg"
import img3 from "./img3.jpeg"
import img4 from "./img4.jpeg"



export const Div = styled.div`
  width: 100vw;

  display: flex;

  align-items: center;
  flex-direction: column;
  background-color: rgba(117, 214, 233) ; 



h2{
    font-size:30px;
    display:flex;
    background-color: rgba(47, 79, 79, 0.5);
    width: 100vw;
    height:60px;
    align-items:center;
    justify-content: center;
    margin-top:50px;
    margin-bottom:15px;
    color:white;
}

ul{
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    width:100%;
    height:100%;
  
    :hover{

cursor:pointer;
height:80vh;
border:none;
background-color:transparent;

}
}

li{
  display :flex;
  justify-content:center;
  align-items:center;

  margin-bottom:15px;
  width:60vw;
  height:40vh;
  border: 3px solid white;
  border-radius:30px;

  
}

#li1{
 background-image:url(${img2});
 background-repeat: no-repeat;
 background-position:50% 7%;
 background-size:cover;
 
}

#li2{
 background-image:url(${img4});
 background-repeat: no-repeat;
 background-position:50% 15%;
 background-size:cover;

 
 :hover{

  cursor:pointer;

 }
}


#li3{
 background-image:url(${img1});
 background-repeat: no-repeat;
 background-position:50% 40%;
 background-size:cover;

 
 :hover{
 
  cursor:pointer;

 }
}



#li4{
 background-image:url(${img3});
 background-repeat: no-repeat;
 background-position:50% 35%;
 background-size:cover;

 
 :hover{

  cursor:pointer;

 }
}


p{
  padding:10px 15px;
  color:white;
  border:white 2px solid;
  border-radius:10px;
  background-color: rgba(47, 79, 79, 0.8);
 
  
 
}



`