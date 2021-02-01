import React, { useState, useEffect } from 'react';

import CircleComponent from './components/Circle'
import LineComponent from './components/Line'

import './styles.css'

function App() {

  const [circleVal, setCircleVal] = useState<number>(15)
  const [lineVal, setLineVal] = useState<number>(15)

  const setCircle = () => {
    setCircleVal(circleVal + 5)
  }

  
  const setLine = () => {
    setLineVal(lineVal + 5)
  }

  return (
      <div className='main-container'>
        <CircleComponent currentValue={circleVal} />
        <button onClick={setCircle}>Set circle val</button>
        <LineComponent currentValue={lineVal} />
        <button onClick={setLine}>Set line val</button>
      </div>
  );
}

export default App;
