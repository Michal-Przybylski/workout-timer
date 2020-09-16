import styled from 'styled-components';
import { Button } from 'antd';

export const StyledButton = styled(Button)`
  height: 100%;
  border-radius: 5px;
  &::before {
    opacity: 0;
  }
`;

export const Timebox = styled.p`
  margin: 0;
  padding: 0;
`;
