import React, { FC, useState } from 'react';
import Countdown, { CountdownProps } from 'react-countdown';
import { msToHMS } from '../../utils/common';
import {
  StyledButton,
  StyledFieldTimeOutlined,
  StyledLoadingOutlined,
} from './TimerButton.sc';
import { Props } from './TimerButton.types';
import { Space, Typography } from 'antd';

const { Text } = Typography;

const countdownRenderer: CountdownProps['renderer'] = ({
  minutes,
  seconds,
}) => <span>{minutes * 60 + seconds} sec</span>;

const TimerButton: FC<Props> = ({ ms = 30000, ...rest }) => {
  const [isTimerOn, setIsTimerOn] = useState(false);
  const { minutes, seconds } = msToHMS(ms);

  return (
    <StyledButton
      type="primary"
      onClick={() => setIsTimerOn(!isTimerOn)}
      block
      {...rest}
    >
      <Space direction="vertical" size="small">
        {isTimerOn ? <StyledLoadingOutlined /> : <StyledFieldTimeOutlined />}
        <Text>
          {minutes} min {seconds} sec
        </Text>
        {isTimerOn ? (
          <Countdown
            date={Date.now() + ms}
            renderer={countdownRenderer}
            onComplete={() => setIsTimerOn(false)}
          />
        ) : (
          <Text>Start</Text>
        )}
      </Space>
    </StyledButton>
  );
};

export default TimerButton;
