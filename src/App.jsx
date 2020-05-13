import React from 'react';
import './App.css';
import DigitContainer from './components/digits'
import DisplayContainer from './components/display'
import ClearContainer from './components/clearkey'
import OpsContainer from './components/operations'
import EqualsContainer from './components/equals'

function App() {
  return (
    <div className="App">
        <DisplayContainer />
        <div className="keypad">
          <DigitContainer/>
          <EqualsContainer />
          <OpsContainer />
          <ClearContainer />
          
        </div>
    </div>
  );
}

export default App;
