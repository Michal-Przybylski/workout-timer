import { TimersContextType, Timer } from '../../contexts/TimersContext';

export const shouldDisable = (
  timers: TimersContextType['timers'],
  isOn: Timer['isOn']
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

export const handleOnClick = (
  timers: TimersContextType['timers'],
  setTimers: TimersContextType['setTimers'],
  id: Timer['id']
) => {
  setTimers(
    timers.map((timer) => ({
      ...timer,
      isOn: timer.id === id ? !timer.isOn : timer.isOn,
    }))
  );
};

export const handleOnComplete = (
  timers: TimersContextType['timers'],
  setTimers: TimersContextType['setTimers']
) => {
  setTimers(
    timers.map((timer) => ({
      ...timer,
      isOn: false,
    }))
  );
};
