import React from 'react';
import styled from 'styled-components';
import TimerButton from './components/TimerButton/TimerButton';
import { Normalize } from 'styled-normalize';
import GridRow from './components/GridRow/GridRow';
import GridCols from './components/GridCols/GridCols';
import 'antd/dist/antd.css';

const AppContainer = styled.div`
  margin: 100px 100px;
`;

const App = () => (
  <>
    <Normalize />
    <AppContainer>
      <GridRow>
        <GridCols>
          <TimerButton minutes={0} seconds={4}></TimerButton>
          <TimerButton minutes={0} seconds={4}></TimerButton>
          <TimerButton minutes={0} seconds={4}></TimerButton>
          <TimerButton minutes={0} seconds={4}></TimerButton>
          <TimerButton minutes={0} seconds={4}></TimerButton>
          <TimerButton minutes={0} seconds={4}></TimerButton>
          <TimerButton minutes={0} seconds={4}></TimerButton>
          <TimerButton minutes={0} seconds={4}></TimerButton>
          <TimerButton minutes={0} seconds={4}></TimerButton>
          <TimerButton minutes={0} seconds={4}></TimerButton>
        </GridCols>
      </GridRow>
    </AppContainer>
  </>
);

export default App;
