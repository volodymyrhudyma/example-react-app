import React, { ReactNode } from 'react';
import { Wrapper } from './styled/Button.styled';

interface IButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ children, ...rest }: IButtonProps) => (
  <Wrapper {...rest}>{children}</Wrapper>
);

export default Button;
