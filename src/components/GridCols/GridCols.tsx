import React, { FC, Children, ReactNode } from 'react';
import { Props } from './GridCols.types';
import { StyledCol } from './GridCols.sc';

const GridCols: FC<Props> = ({
  xs = 24,
  sm = 12,
  md = 8,
  lg = 6,
  xl = 4,
  xxl = 3,
  children,
  ...rest
}) => {
  const generateGridCols = (child: ReactNode) => (
    <StyledCol xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl} {...rest}>
      {child}
    </StyledCol>
  );
  const mappedChildren = Children.map(children, generateGridCols);
  return <>{mappedChildren}</>;
};

export default GridCols;
