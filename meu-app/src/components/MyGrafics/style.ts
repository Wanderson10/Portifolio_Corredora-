import styled from "styled-components";



export const Div = styled.div`
width:100vw;
height:100vh;
background-color: rgba(117, 214, 233) ; 
padding-top:15px;
gap: 1px;



h3{
    font-size:30px;
    display:flex;
    justify-content:center;
    margin-bottom:30px;
    padding-top:10px  10px;
    align-items:center;
    width: 100%;
    height: 40px;
    background-color: rgba(47, 79, 79, 0.5);
    color:white;
    font-weight:bold;
    box-sizing:border-box;
}

h4{
    font-size:30px;
}

p{
    
    font-size: 20px; /* Tamanho menor para o texto */
    margin-top: 20px; /* Espaço acima do parágrafo */
    color: white;
    background-color: rgba(47, 79, 79, 0.5);
    padding: 10px;
    border-radius: 10px;
    margin: 10px; /* Adiciona espaço ao redor do parágrafo */

}


@media (max-width: 768px) {
    
    p {
      font-size: 15px; 
      color :white;
      padding: 5px;
    }
  }


`
