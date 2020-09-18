import React, { useState, useMemo } from 'react';
import { Normalize } from 'styled-normalize';
import { AppContainer, GlobalStyles } from './App.sc';
import {
  TimerButtonsContext,
  defaultState as defaultStateTimerButtons,
} from '../../contexts/TimerButtonsContext';
import {
  TimerEditorContext,
  defaultState as defaultStateTimerEditor,
} from '../../contexts/TimerEditorContext';
import TimerButtons from '../TimerButtons/TimerButtons';
import TimerEditor from '../TimerEditor/TimerEditor';
import 'antd/dist/antd.css';

const App = () => {
  const [timerButtons, setTimerButtons] = useState(defaultStateTimerButtons);
  const providerTimerButtons = useMemo(
    () => ({ timerButtons, setTimerButtons }),
    [timerButtons, setTimerButtons]
  );

  const [timerEditorIsVisible, setTimerEditorIsVisible] = useState(
    defaultStateTimerEditor
  );
  const providerTimerEditorIsVisible = useMemo(
    () => ({ timerEditorIsVisible, setTimerEditorIsVisible }),
    [timerEditorIsVisible, setTimerEditorIsVisible]
  );

  return (
    <>
      <Normalize />
      <GlobalStyles />
      <AppContainer>
        <TimerButtonsContext.Provider value={providerTimerButtons}>
          <TimerEditorContext.Provider value={providerTimerEditorIsVisible}>
            <TimerButtons />
            <TimerEditor />
          </TimerEditorContext.Provider>
        </TimerButtonsContext.Provider>
      </AppContainer>
    </>
  );
};

export default App;
