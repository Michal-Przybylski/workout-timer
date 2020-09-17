import React, { FC, useContext } from 'react';
import TimerButton from '../TimerButton/TimerButton';
import { TimersContext } from '../../contexts/TimersContext';
import {
  shouldDisable,
  handleOnClick,
  handleOnComplete,
} from './TimerButtons.helpers';
import GridRow from '../GridRow/GridRow';
import GridCols from '../GridCols/GridCols';

const TimerButtons: FC = () => {
  const { timers, setTimers } = useContext(TimersContext)!;

  const ArrayOfTimerButtons = timers.map((timer) => (
    <TimerButton
      key={timer.id}
      onClick={() => handleOnClick(timers, setTimers, timer.id)}
      onComplete={() => handleOnComplete(timers, setTimers)}
      disabled={shouldDisable(timers, timer.isOn)}
      {...timer}
    ></TimerButton>
  ));

  return (
    <GridRow>
      <GridCols>{ArrayOfTimerButtons}</GridCols>
    </GridRow>
  );
};

export default TimerButtons;
