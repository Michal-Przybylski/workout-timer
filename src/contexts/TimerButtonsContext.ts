import React, { createContext } from 'react';

export type TimerButton = {
  id: string;
  isOn: boolean;
  ms: number;
};

export type TimerButtonsContextType = {
  timerButtons: TimerButton[];
  setTimerButtons: React.Dispatch<React.SetStateAction<TimerButton[]>>;
};

export const defaultState = [
  {
    id: '1',
    isOn: false,
    ms: 30000,
  },
  {
    id: '2',
    isOn: false,
    ms: 60000,
  },
  {
    id: '3',
    isOn: false,
    ms: 90000,
  },
  {
    id: '4',
    isOn: false,
    ms: 120000,
  },
  {
    id: '5',
    isOn: false,
    ms: 3000,
  },
  {
    id: '6',
    isOn: false,
    ms: 3000,
  },
  {
    id: '7',
    isOn: false,
    ms: 3000,
  },
  {
    id: '8',
    isOn: false,
    ms: 3000,
  },
  {
    id: '9',
    isOn: false,
    ms: 3000,
  },
];

export const TimerButtonsContext = createContext<TimerButtonsContextType | null>(
  null
);
