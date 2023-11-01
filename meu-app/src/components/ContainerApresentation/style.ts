import styled, { keyframes } from 'styled-components';
import corredoraImg from './banner.jpg';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const BoxApresentation = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f0f4f7; 
  background-image: url(${corredoraImg});
  background-size: cover;

  .fade-in {
    animation: ${fadeIn} 2s forwards;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  img {
    width: 100%; /* Ajusta o tamanho da imagem para preencher a largura do contêiner */
    max-width: 300px; /* Tamanho máximo da imagem */
    border-radius: 10px;
    margin-top: 20px; /* Adiciona um espaço entre a imagem e o texto */
  }

  div {
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
  }

  p {
    font-size: 20px; /* Tamanho menor para o texto */
    margin-top: 20px; /* Espaço acima do parágrafo */
    color: white;
    background-color: rgba(47, 79, 79, 0.5);
    padding: 10px;
    border-radius: 10px;
    margin: 10px; /* Adiciona espaço ao redor do parágrafo */
  }

  h2 {
    
    font-size: 25px; /* Tamanho menor para o título */
    margin-top:20px;
    margin-bottom: 20px; /* Adiciona espaço abaixo do título */
    width: 100%;
    height: 40px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(47, 79, 79, 0.5);
    border-radius: 10px;
    box-sizing:border-box;
  }

  @media (min-width: 768px) {
    
    h2 {
      font-size: 30px; 
    }
  }
`;