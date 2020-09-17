import React, { FC, useContext, MouseEvent } from 'react';
import TimerButton from '../TimerButton/TimerButton';
import { TimerButtonsContext } from '../../contexts/TimerButtonsContext';
import {
  shouldDisable,
  handleOnClick,
  handleOnComplete,
} from './TimerButtons.helpers';
import GridRow from '../GridRow/GridRow';
import GridCols from '../GridCols/GridCols';

const TimerButtons: FC = () => {
  const { timerButtons, setTimerButtons } = useContext(TimerButtonsContext)!;

  const ArrayOfTimerButtons = timerButtons.map((timerButton) => (
    <TimerButton
      key={timerButton.id}
      onClick={(e: MouseEvent<HTMLButtonElement>) =>
        handleOnClick(e, timerButtons, setTimerButtons)
      }
      onComplete={() => handleOnComplete(timerButtons, setTimerButtons)}
      disabled={shouldDisable(timerButtons, timerButton.isOn)}
      {...timerButton}
    ></TimerButton>
  ));

  return (
    <GridRow>
      <GridCols>{ArrayOfTimerButtons}</GridCols>
    </GridRow>
  );
};

export default TimerButtons;
