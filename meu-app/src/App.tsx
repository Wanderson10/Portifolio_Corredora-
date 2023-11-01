import React from 'react';
import { GlobalStyle } from './styles/globalStyles';

import HeaderComponent from './components/Header/header';
import ResumeTextComponent from './components/ContainerApresentation';
import MyWins from './components/MyWins/myWins';
import EndComponent from './components/endComponents/end';


function App() {
  return (
    <>
    <GlobalStyle/>
   <HeaderComponent/>
   <ResumeTextComponent/>
   <MyWins/>
   <EndComponent/>

   </>
  );
}

export default App;
