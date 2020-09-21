import { createContext, Dispatch, SetStateAction } from 'react';
import { TimerButton } from '../contexts/TimerButtonsContext';

// TODO change types so when visible wil be set to false then timer id shouldnt be required
export type TimerEditorData = {
  visible: boolean;
  timerId: TimerButton['id'];
};

export type TimerEditorContextType = {
  timerEditorData: TimerEditorData;
  setTimerEditorData: Dispatch<SetStateAction<TimerEditorData>>;
};

export const defaultState = { visible: false, timerId: '' };

export const TimerEditorContext = createContext<TimerEditorContextType | null>(
  null
);
