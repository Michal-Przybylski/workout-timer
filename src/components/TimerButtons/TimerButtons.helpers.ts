import { MouseEvent } from 'react';
import {
  TimerButtonsContextType,
  TimerButton,
} from '../../contexts/TimerButtonsContext';
import { TargetType } from '../../utils/useLongPress';

export const shouldDisable = (
  timers: TimerButtonsContextType['timerButtons'],
  isOn: TimerButton['isOn']
) => {
  if (isOn) {
    return false;
  }
  const findTimerIsOn = timers.find((timer) => timer.isOn);
  if (findTimerIsOn === undefined) {
    return false;
  }
  return true;
};

export const getClickedTimerId = (
  currentTarget: TargetType
): TimerButton['id'] => {
  const clickedTimerId = currentTarget.id.substr(
    currentTarget.id.indexOf('-') + 1
  );
  return clickedTimerId;
};

export const handleOnClick = (
  e: MouseEvent<HTMLElement>,
  timerButtons: TimerButtonsContextType['timerButtons'],
  setTimerButtons: TimerButtonsContextType['setTimerButtons']
) => {
  const clickedTimerId = getClickedTimerId(e.currentTarget);
  setTimerButtons(
    timerButtons.map((timer) => {
      if (timer.id === clickedTimerId) {
        return {
          ...timer,
          isOn: !timer.isOn,
        };
      }
      return timer;
    })
  );
};

export const resetTimer = (
  timerButtons: TimerButtonsContextType['timerButtons'],
  setTimerButtons: TimerButtonsContextType['setTimerButtons']
) => {
  setTimerButtons(
    timerButtons.map((timer) => ({
      ...timer,
      isOn: false,
    }))
  );
};
