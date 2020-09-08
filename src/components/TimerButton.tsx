import React, {FC, useState, useEffect} from 'react';
import styled from 'styled-components';
import Countdown from 'react-countdown';
import { Button } from 'antd';
import { FieldTimeOutlined } from '@ant-design/icons';

type Props = {
  minutes: number;
  seconds: number;
};

type RendererProps = {
  minutes: number;
  seconds: number;
}

const tallyMiliseconds = (minutes = 0,seconds:number) => (minutes*60+seconds)*1000;

// Renderer callback with condition
const renderer = ({ minutes, seconds }: RendererProps) => <span>{minutes * 60 + seconds}</span>;

const TimerButton: FC<Props> = ({minutes,seconds}) => {
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [initialTimeInMS, setInitialTimeInMS] = useState(0)

  useEffect(()=>{
    setInitialTimeInMS(tallyMiliseconds(minutes,seconds));
  }, [minutes,seconds])

  return (
    <Button
      type="primary"
      // icon={<FieldTimeOutlined />}
      // loading={isTimerOn}
      onClick={() => setIsTimerOn(true)}
    >
      <p>
        {minutes} min {seconds} sec
      </p>
      {isTimerOn
        && (
          <Countdown
            date={Date.now() + initialTimeInMS}
            renderer={renderer}
            onComplete={() => setIsTimerOn(false)}
          />
        )
      }
    </Button>
  )
}

export default TimerButton;