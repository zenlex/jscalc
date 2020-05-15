import React from 'react';
import './App.css';
import Keypad from './components/keypad'
import DisplayContainer from './components/display'

function App() {
  return (
    <div className="App">
        <DisplayContainer />
        <Keypad/>
    </div>
  );
}

export default App;
