import React from 'react';
import { Wrapper } from './styled/Icon.styled';

export interface IIconProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Icon = (props: IIconProps) => <Wrapper {...props} />;

Icon.defaultProps = {
  alt: 'Icon',
  width: 24,
  height: 24,
};

export default Icon;
