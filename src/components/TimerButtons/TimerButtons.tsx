import React, {
  FC,
  useContext,
  MouseEventHandler,
  MouseEvent,
  TouchEvent,
} from 'react';
import TimerButton from '../TimerButton/TimerButton';
import { TimerButtonsContext } from '../../contexts/TimerButtonsContext';
import { TimerEditorContext } from '../../contexts/TimerEditorContext';
import {
  shouldDisable,
  handleOnClick,
  resetTimer,
} from './TimerButtons.helpers';
import GridRow from '../GridRow/GridRow';
import GridCols from '../GridCols/GridCols';
import { useLongPress } from '../../utils/useLongPress';

const TimerButtons: FC = () => {
  const { timerButtons, setTimerButtons } = useContext(TimerButtonsContext)!;
  const { setTimerEditorIsVisible } = useContext(TimerEditorContext)!;

  const onLongPress = (e: MouseEvent | TouchEvent) => {
    resetTimer(timerButtons, setTimerButtons);
    setTimerEditorIsVisible(true);
  };

  const onClick: MouseEventHandler<HTMLButtonElement> = (e) =>
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
