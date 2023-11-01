import React from 'react';
import LazyLoad from 'react-lazyload';
import { BoxApresentation } from './style';
import corredoraImg from './www.jpeg';

function ResumeTextComponent() {
  return (
    <LazyLoad height={200} offset={100}>
      <BoxApresentation>
        <h2>Um Pouco Sobre Mim!</h2>
        <div className="fade-in">
          <p>
          Uma estudante de 21 anos apaixonada por esportes. Nos últimos seis meses, tenho me dedicado como atleta amadora na corrida, com planos de evoluir para o triathlon. Meu objetivo é transformar minha paixão em uma carreira profissional, e estou em busca de parceiros para tornar esse sonho realidade. Vamos juntos fazer do esporte a minha vida!
          </p>
          <img src={corredoraImg} alt="Corredora" />
        </div>
      </BoxApresentation>
    </LazyLoad>
  );
}

export default ResumeTextComponent;