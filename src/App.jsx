import React from 'react';
import './App.css';
import DigitContainer from './components/digits'
import DisplayContainer from './components/display'
import ClearContainer from './components/clearkey'

function App() {
  return (
    <div className="App">
      <DisplayContainer />
      <DigitContainer />
      <ClearContainer />
    </div>
  );
}

export default App;
