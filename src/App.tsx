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
          <TimerButton ms={3000}></TimerButton>
          <TimerButton ms={30000}></TimerButton>
          <TimerButton ms={60000}></TimerButton>
          <TimerButton ms={90000}></TimerButton>
          <TimerButton ms={120000}></TimerButton>
          <TimerButton ms={240000}></TimerButton>
          <TimerButton></TimerButton>
          <TimerButton></TimerButton>
          <TimerButton></TimerButton>
        </GridCols>
      </GridRow>
    </AppContainer>
  </>
);

export default App;
