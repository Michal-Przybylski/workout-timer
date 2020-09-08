import React from 'react';
import styled from 'styled-components';
import TimerButton from './components/TimerButton/TimerButton';
import { Normalize } from 'styled-normalize';
import Grid from './components/Grid/Grid';
import 'antd/dist/antd.css';

const AppContainer = styled.div`
  margin: 0 200px;
`;

const App = () => (
  <>
    <Normalize />
    <AppContainer>
      <TimerButton minutes={0} seconds={4}></TimerButton>
      <Grid></Grid>
    </AppContainer>
  </>
);

export default App;
