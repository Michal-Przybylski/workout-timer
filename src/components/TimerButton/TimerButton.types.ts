import { ButtonProps } from 'antd/lib/button';
import { CountdownProps } from 'react-countdown';
import { TimerButton } from '../../contexts/TimerButtonsContext';

export type Props = ButtonProps &
  TimerButton & {
    onComplete: CountdownProps['onComplete'];
  };
