import styled, { keyframes } from 'styled-components';
import img from "./img/ana1.jpeg";


const typeAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;
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
export const Header = styled.header`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  align-items: center;
  color: #fff;
  font-family: 'Arial', sans-serif;

  p {
    font-size: 25px;
    margin: 20px 0;
  }

  .DivIcons {
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${typeAnimation} 2s steps(40, end);
  }

  .icons {
    transition: all 0.3s ease-in-out;
    background-color: #2f4f4f;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    margin: 5px;
    align-items: center;
    width: 50px;
    height: 50px;
    color: #fff;
    animation: ${fadeIn} 1s ease-in-out;

    :hover {
      
      cursor: pointer;
      width: 50px;
      height: 50px;
      color :rgba(47, 79, 79);
        background-color:white;
        border-radius:50%;
    }
  
  }

  .div_title_icons {
    margin-top: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const MainTitle = styled.h1`
  display: flex;
  justify-content: center;
  overflow: hidden;
  border-right: 2px solid #add8e6;
  white-space: nowrap;
  color: #add8e6;
  background-color: rgba(47, 79, 79, 0.5);
  width: 100vw;
  animation: ${typeAnimation} 2s steps(40, end), ${fadeIn} 1s ease-in-out; /* Animações aplicadas */
  font-size: 75px;
`;

export const MainTitle2 = styled.h1`
  display: flex;
  justify-content: center;
  overflow: hidden;
  border-right: 2px solid #add8e6;
  white-space: nowrap;
  margin: 0;
  color: #add8e6;
 
  background-color: rgba(47, 79, 79, 0.5);
  width: 100vw;
  animation: ${typeAnimation} 2s steps(40, end), ${fadeIn} 1s ease-in-out; /* Animações aplicadas */
  font-size: 75px;
`;