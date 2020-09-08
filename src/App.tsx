import React from 'react';
import TimerButton from './components/TimerButton';
import { Normalize } from 'styled-normalize';
import 'antd/dist/antd.css';

const App = () => (
  <>
    <Normalize />
    <div className="App">
      <TimerButton minutes={2} seconds={3}></TimerButton>
    </div>
  </>
);

export default App;
