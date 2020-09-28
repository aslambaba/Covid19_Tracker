import React, { useState } from 'react';
import MainGrids from './MainGrids';
import BottomBar from './BottomBar';
function App() {

  const screenConfig = useState(0);

  return (
    <div className="App">
        <MainGrids currentScreen={screenConfig[0]} />
        <BottomBar screenConfig={screenConfig} />
    </div>
  );
}

export default App;
