import { ButtonProps } from 'antd/lib/button';

export type Props = Pick<ButtonProps, 'disabled'> & {
  ms?: number;
};
