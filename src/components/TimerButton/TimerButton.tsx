import React, { FC, useState } from 'react';
import Countdown, { CountdownProps } from 'react-countdown';
import { FieldTimeOutlined, LoadingOutlined } from '@ant-design/icons';
import { msToHMS } from '../../utils/common';
import { Timebox, StyledButton } from './TimerButton.sc';
import { Props } from './TimerButton.types';

const countdownRenderer: CountdownProps['renderer'] = ({
  minutes,
  seconds,
}) => <span>{minutes * 60 + seconds} sec</span>;

const TimerButton: FC<Props> = ({ ms = 30000, disabled }) => {
  const [isTimerOn, setIsTimerOn] = useState(false);
  const { minutes, seconds } = msToHMS(ms);

  return (
    <StyledButton
      type="primary"
      icon={isTimerOn ? <LoadingOutlined /> : <FieldTimeOutlined />}
      onClick={() => setIsTimerOn(!isTimerOn)}
      block
      disabled={disabled}
    >
      <Timebox>
        {minutes} min {seconds} sec
      </Timebox>
      {isTimerOn && (
        <Countdown
          date={Date.now() + ms}
          renderer={countdownRenderer}
          onComplete={() => setIsTimerOn(false)}
        />
      )}
    </StyledButton>
  );
};

export default TimerButton;
