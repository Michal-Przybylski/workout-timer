import styled from 'styled-components/macro';
import { Button } from 'antd';
import { FieldTimeOutlined, LoadingOutlined } from '@ant-design/icons';

export const StyledFieldTimeOutlined = styled(FieldTimeOutlined)`
  svg {
    width: 25px;
    height: 25px;
  }
`;

export const StyledLoadingOutlined = styled(LoadingOutlined)`
  svg {
    width: 25px;
    height: 25px;
  }
`;

export const StyledButton = styled(Button)`
  height: 100%;
  border-radius: 5px;
  &::before {
    opacity: 0;
  }
  &[disabled] {
    background: #1890ffad;
  }
`;
