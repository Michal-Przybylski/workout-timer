import React, { FC, useContext, MouseEventHandler } from 'react';
import TimerButton from '../TimerButton/TimerButton';
import { TimerButtonsContext } from '../../contexts/TimerButtonsContext';
import { TimerEditorContext } from '../../contexts/TimerEditorContext';
import {
  shouldDisable,
  handleOnClick,
  resetTimer,
  getClickedTimerId,
} from './TimerButtons.helpers';
import GridRow from '../GridRow/GridRow';
import GridCols from '../GridCols/GridCols';
import { useLongPress, TargetType } from '../../utils/useLongPress';

const TimerButtons: FC = () => {
  const { timerButtons, setTimerButtons } = useContext(TimerButtonsContext)!;
  const { setTimerEditorData } = useContext(TimerEditorContext)!;

  const onLongPress = (currentTarget: TargetType) => {
    resetTimer(timerButtons, setTimerButtons);
    setTimerEditorData({
      visible: true,
      timerId: getClickedTimerId(currentTarget),
    });
  };

  const onClick: MouseEventHandler<HTMLElement> = (e) =>
    handleOnClick(e, timerButtons, setTimerButtons);

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };

  const LongPressProps = useLongPress(onLongPress, onClick, defaultOptions);

  const ArrayOfTimerButtons = timerButtons.map((timerButton) => (
    <TimerButton
      key={timerButton.id}
      onComplete={() => resetTimer(timerButtons, setTimerButtons)}
      disabled={shouldDisable(timerButtons, timerButton.isOn)}
      {...timerButton}
      {...LongPressProps}
    ></TimerButton>
  ));

  return (
    <GridRow>
      <GridCols>{ArrayOfTimerButtons}</GridCols>
    </GridRow>
  );
};

export default TimerButtons;
