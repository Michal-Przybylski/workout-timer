import { Dispatch, SetStateAction } from 'react';
import { ModalProps } from 'antd/lib/modal';

export type Props = Pick<ModalProps, 'onCancel' | 'visible'> & {
  setVisible: Dispatch<SetStateAction<boolean>>;
};
