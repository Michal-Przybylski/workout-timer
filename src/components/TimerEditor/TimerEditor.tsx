import React, { FC, useContext } from 'react';
import { Modal } from 'antd';
import { TimerEditorContext } from '../../contexts/TimerEditorContext';

const TimerEditor: FC = () => {
  const { timerEditorIsVisible, setTimerEditorIsVisible } = useContext(
    TimerEditorContext
  )!;
  const handleOnOk = () => {
    setTimerEditorIsVisible(false);
  };
  const handleOnCancel = () => {
    setTimerEditorIsVisible(false);
  };

  return (
    <Modal
      title="Basic Modal"
      visible={timerEditorIsVisible}
      onOk={handleOnOk}
      onCancel={handleOnCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default TimerEditor;
