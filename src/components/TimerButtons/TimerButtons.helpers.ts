import { MouseEvent } from 'react';
import {
  TimerButtonsContextType,
  TimerButton,
} from '../../contexts/TimerButtonsContext';

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

const getClickedTimerId = (
  e: MouseEvent<HTMLButtonElement>
): TimerButton['id'] => {
  const clickedTimerId = e.currentTarget.id.substr(
    e.currentTarget.id.indexOf('-') + 1
  );
  return clickedTimerId;
};

export const handleOnClick = (
  e: MouseEvent<HTMLButtonElement>,
  timers: TimerButtonsContextType['timerButtons'],
  setTimers: TimerButtonsContextType['setTimerButtons']
) => {
  getClickedTimerId(e);
  setTimers(
    timers.map((timer) => ({
      ...timer,
      isOn: timer.id === getClickedTimerId(e) ? !timer.isOn : timer.isOn,
    }))
  );
};

export const handleOnComplete = (
  timers: TimerButtonsContextType['timerButtons'],
  setTimers: TimerButtonsContextType['setTimerButtons']
) => {
  setTimers(
    timers.map((timer) => ({
      ...timer,
      isOn: false,
    }))
  );
};
