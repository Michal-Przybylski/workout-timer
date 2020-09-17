import React, { useState, useMemo } from 'react';
import TimerButtons from '../TimerButtons/TimerButtons';
import { Normalize } from 'styled-normalize';
import { AppContainer, GlobalStyles } from './App.sc';
import { TimersContext, defaultState } from '../../contexts/TimersContext';
import 'antd/dist/antd.css';

const App = () => {
  const [timers, setTimers] = useState(defaultState);
  const providerValue = useMemo(() => ({ timers, setTimers }), [
    timers,
    setTimers,
  ]);

  return (
    <>
      <Normalize />
      <GlobalStyles />
      <AppContainer>
        <TimersContext.Provider value={providerValue}>
          <TimerButtons />
        </TimersContext.Provider>
      </AppContainer>
    </>
  );
};

export default App;
