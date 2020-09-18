import React, { FC } from 'react';
import Countdown, { CountdownProps } from 'react-countdown';
import { msToHMS } from '../../utils/msToHMS';
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

const TimerButton: FC<Props> = ({
  ms = 30000,
  isOn = false,
  id,
  onComplete,
  ...rest
}) => {
  const { minutes, seconds } = msToHMS(ms);

  return (
    <StyledButton id={`timerButton-${id}`} type="primary" block {...rest}>
      <Space direction="vertical">
        {isOn ? <StyledLoadingOutlined /> : <StyledFieldTimeOutlined />}
        <Text ellipsis={true}>
          {minutes} min {seconds} sec
        </Text>
        {isOn ? (
          <Countdown
            date={Date.now() + ms}
            renderer={countdownRenderer}
            onComplete={onComplete}
          />
        ) : (
          <Text>Start</Text>
        )}
      </Space>
    </StyledButton>
  );
};

export default TimerButton;
