import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import TimerButton from './components/TimerButton/TimerButton';
import { Normalize } from 'styled-normalize';
import GridRow from './components/GridRow/GridRow';
import GridCols from './components/GridCols/GridCols';
import 'antd/dist/antd.css';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

const AppContainer = styled.div`
  margin: 100px 100px;
`;

const App = () => (
  <>
    <Normalize />
    <GlobalStyles />
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
