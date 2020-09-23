import React, { FC, useContext, useState, useEffect } from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';
import {
  TimerEditorContext,
  TimerEditorContextType,
} from '../../contexts/TimerEditorContext';
import {
  TimerButtonsContext,
  TimerButtonsContextType,
} from '../../contexts/TimerButtonsContext';
import { msToHMS } from '../../utils/msToHMS';
import { StyledModal, bodyStyle } from './TimerEditor.sc';

const timeFormat = 'mm:ss';

const disabledSeconds = [0];
let disabledMinutes: number[] = [];
const fillDisabledMinutes = () => {
  for (let i = 1; i < 50; i++) {
    disabledMinutes.push(i + 10);
  }
};
fillDisabledMinutes();

const getTimerButtonMs = (
  timerButtons: TimerButtonsContextType['timerButtons'],
  timerEditorData: TimerEditorContextType['timerEditorData']
) => timerButtons.find((timer) => timer.id === timerEditorData.timerId)?.ms;

// TODO: try to extrack functions out of this FC, crete separate file for helpers
const TimerEditor: FC = () => {
  const [isOpenTimePicker, setIsOpenTimePicker] = useState(true);
  const { timerEditorData, setTimerEditorData } = useContext(
    TimerEditorContext
  )!;
  const { timerButtons, setTimerButtons } = useContext(TimerButtonsContext)!;

  useEffect(() => {
    if (timerEditorData) {
      setIsOpenTimePicker(true);
    }
  }, [timerEditorData]);

  const handleOnCancel = () => {
    setTimerEditorData({ visible: false, timerId: '' });
    setIsOpenTimePicker(false);
  };

  const handleOnChange = () => {
    setIsOpenTimePicker(false);
    setTimerEditorData({ visible: false, timerId: '' });
  };

  const handleOnSelect = (time: moment.Moment | null) => {
    setTimerButtons(
      timerButtons.map((timer) => {
        if (timer.id === timerEditorData.timerId && time) {
          const momentDateObj = time.toObject();
          const minutes = momentDateObj.minutes;
          const seconds = momentDateObj.seconds;
          const ms = (minutes * 60 + seconds) * 1000;
          return {
            ...timer,
            ms: ms,
          };
        }
        return timer;
      })
    );
  };

  const generateTimePickerDefaultValue = () => {
    const ms = getTimerButtonMs(timerButtons, timerEditorData);
    if (!ms) {
      return '00:00';
    }
    const { minutes, seconds } = msToHMS(ms);
    const fixedTimeUnit = (time: number) =>
      time.toString().length === 1 ? `0${time}` : time;
    return `${fixedTimeUnit(minutes)}:${fixedTimeUnit(seconds)}`;
  };

  return (
    <StyledModal
      title="Timer editor"
      bodyStyle={bodyStyle}
      centered
      closable={false}
      destroyOnClose={true}
      footer={null}
      width="25%"
      visible={timerEditorData.visible}
      onCancel={handleOnCancel}
    >
      <TimePicker
        inputReadOnly
        autoFocus
        hideDisabledOptions
        open={isOpenTimePicker}
        showNow={false}
        disabledMinutes={() => disabledMinutes}
        disabledSeconds={() => disabledSeconds}
        onSelect={handleOnSelect}
        onChange={handleOnChange}
        format={timeFormat}
        placeholder={generateTimePickerDefaultValue()}
      />
    </StyledModal>
  );
};

export default TimerEditor;
