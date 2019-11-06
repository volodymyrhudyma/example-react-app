import React, { ReactNode } from 'react';
import { Wrapper } from './styled/Card.styled';

interface ICardProps {
  width: string;
  height: string;
  children: ReactNode;
  padding: string;
}

const Card = ({ children, ...rest }: ICardProps) => (
  <Wrapper {...rest}>{children}</Wrapper>
);

Card.defaultProps = {
  width: 'auto',
  height: 'auto',
  padding: '3rem',
};

export default Card;
