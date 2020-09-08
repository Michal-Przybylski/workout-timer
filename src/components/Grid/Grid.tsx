import React, { FC } from 'react';
import { Row, Col } from 'antd';
import { Props } from './Grid.types';
import TimerButton from '../TimerButton/TimerButton';
import styled from 'styled-components';

const Element = styled.div`
  /* background-color: lightblue; */
  border: solid 1px black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid: FC<Props> = () => {
  return (
    <Row gutter={[15, 15]}>
      <Col xs={12} lg={6}>
        <Element>
          <TimerButton minutes={0} seconds={4}></TimerButton>
        </Element>
      </Col>
      <Col xs={12} lg={6}>
        <Element>
          <TimerButton minutes={0} seconds={4}></TimerButton>
        </Element>
      </Col>
      <Col xs={12} lg={6}>
        <Element>
          <TimerButton minutes={0} seconds={4}></TimerButton>
        </Element>
      </Col>
      <Col xs={12} lg={6}>
        <Element>
          <TimerButton minutes={0} seconds={4}></TimerButton>
        </Element>
      </Col>
      <Col xs={12} lg={6}>
        <Element>
          <TimerButton minutes={0} seconds={4}></TimerButton>
        </Element>
      </Col>
    </Row>
  );
};

export default Grid;
