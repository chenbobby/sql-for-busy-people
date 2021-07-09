import React, { ReactElement } from 'react';
import Classroom from './components/Classroom';
import NavBar from './components/NavBar';


const App: React.FC = (): ReactElement => {
  return (
    <>
      <NavBar />
      <Classroom />
    </>
  );
}

export default App;
