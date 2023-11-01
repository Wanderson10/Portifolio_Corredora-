import React from 'react';
import { GlobalStyle } from './styles/globalStyles';

import HeaderComponent from './components/Header/header';
import ResumeTextComponent from './components/ContainerApresentation';
import MyWins from './components/MyWins/myWins';
import EndComponent from './components/endComponents/end';
import GraficsComponents from './components/MyGrafics/graficts';


function App() {
  return (
    <>
    <GlobalStyle/>
   <HeaderComponent/>
   <ResumeTextComponent/>
   <GraficsComponents/>
   <MyWins/>
   <EndComponent/>

   </>
  );
}

export default App;
