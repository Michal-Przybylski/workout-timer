import React, { FC } from 'react';
import { Row } from 'antd';
import { Props } from './GridRow.types';

const defaultGutter: Props['gutter'] = [15, 15];

const GridRow: FC<Props> = ({ gutter = defaultGutter, children, ...rest }) => {
  return (
    <Row gutter={gutter} {...rest}>
      {children}
    </Row>
  );
};

export default GridRow;
