import { ButtonProps } from 'antd/lib/button';
import { CountdownProps } from 'react-countdown';
import { Timer } from '../../contexts/TimersContext';

export type Props = ButtonProps &
  Timer & {
    onComplete: CountdownProps['onComplete'];
  };
