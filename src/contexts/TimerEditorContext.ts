import React, { createContext } from 'react';

export type TimerEditorContextType = {
  timerEditorIsVisible: boolean;
  setTimerEditorIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const defaultState = false;

export const TimerEditorContext = createContext<TimerEditorContextType | null>(
  null
);
