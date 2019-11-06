import React from 'react';
import { Wrapper } from './styled/Line.styled';

interface ILineProps {
  width: string;
  height: string;
}

const Line = (props: ILineProps) => <Wrapper {...props} />;

Line.defaultProps = {
  width: '100%',
  height: '4px',
};

export default Line;
