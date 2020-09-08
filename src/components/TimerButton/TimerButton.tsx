import React, { FC, useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import { FieldTimeOutlined } from '@ant-design/icons';
import { tallyMiliseconds } from '../../utils/common';
import { ButtonContent, Timebox, StyledButton } from './TimerButton.sc';
import { Props, RendererProps } from './TimerButton.types';

const renderer = ({ minutes, seconds }: RendererProps) => (
  <span>{minutes * 60 + seconds}</span>
);

const TimerButton: FC<Props> = ({ minutes, seconds }) => {
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [initialTimeInMS, setInitialTimeInMS] = useState(0);

  useEffect(() => {
    setInitialTimeInMS(tallyMiliseconds(minutes, seconds));
  }, [minutes, seconds]);

  return (
    <StyledButton
      type="primary"
      icon={<FieldTimeOutlined />}
      loading={isTimerOn}
      onClick={() => setIsTimerOn(true)}
    >
      <ButtonContent>
        <Timebox>
          {minutes} min {seconds} sec
        </Timebox>
        {isTimerOn && (
          <Countdown
            date={Date.now() + initialTimeInMS}
            renderer={renderer}
            onComplete={() => setIsTimerOn(false)}
          />
        )}
      </ButtonContent>
    </StyledButton>
  );
};

export default TimerButton;
