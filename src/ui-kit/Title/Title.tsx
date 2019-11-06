import React, { ReactNode } from 'react';
import { Wrapper } from './styled/Title.styled';

interface ITitleProps {
  type: string;
  children: ReactNode;
}

const Title = ({ type, children }: ITitleProps) => (
  <Wrapper component={type}>{children}</Wrapper>
);

Title.defaultProps = {
  type: 'h1',
};

export default Title;
