import styled from "styled-components";


export const Div = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
background-color: rgba(47, 79, 79);
width:100vw;
height:20vh;
h3{
   font-size:25px;
   padding-bottom:30px;
   box-sizing:border-box;
   color:white;

}
div{
    
}
a{
    font-size:40px;
    width:20px;
    margin:10px 10px;
    color: white; 
    text-decoration: none;
    padding:10px 10px;
    :hover{
        color :rgba(47, 79, 79);
        background-color:white;
        border-radius:50%;
    }
  
}
`
