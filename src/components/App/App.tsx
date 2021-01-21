import React, { useState, useMemo } from 'react';
import 'antd/dist/antd.css';
import { Normalize } from 'styled-normalize';
import { Button } from 'antd';
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
import SignInScreen from '../SignInScreen/SignInScreen';

const App = () => {
  const [timerButtons, setTimerButtons] = useState(defaultStateTimerButtons);
  const providerTimerButtons = useMemo(
    () => ({ timerButtons, setTimerButtons }),
    [timerButtons, setTimerButtons]
  );

  const [timerEditorData, setTimerEditorData] = useState(
    defaultStateTimerEditor
  );
  const providerTimerEditorData = useMemo(
    () => ({ timerEditorData, setTimerEditorData }),
    [timerEditorData, setTimerEditorData]
  );

  const [visible, setVisible] = useState(false);

  return (
    <>
      <Normalize />
      <GlobalStyles lockScroll={timerEditorData.visible} />
      <AppContainer>
        <TimerButtonsContext.Provider value={providerTimerButtons}>
          <TimerEditorContext.Provider value={providerTimerEditorData}>
            <Button type="primary" onClick={() => setVisible(true)}>
              Login
            </Button>
            <TimerButtons />
            <TimerEditor />
            <SignInScreen
              onCancel={() => setVisible(false)}
              visible={visible}
              setVisible={setVisible}
            />
          </TimerEditorContext.Provider>
        </TimerButtonsContext.Provider>
      </AppContainer>
    </>
  );
};

export default App;
