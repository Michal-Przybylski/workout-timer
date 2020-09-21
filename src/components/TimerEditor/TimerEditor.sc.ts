import { CSSProperties } from 'react';
import { Modal } from 'antd';
import styled from 'styled-components/macro';

export const bodyStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const StyledModal = styled(Modal)`
  height: 40%;

  .ant-modal-content {
    height: 100%;
  }

  .ant-modal-header {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
