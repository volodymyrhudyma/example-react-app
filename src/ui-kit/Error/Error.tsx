import React from 'react';
import { Wrapper } from './styled/Error.styled';

interface IErrorProps {
  message: string;
}

const Error = ({ message }: IErrorProps) => <Wrapper>{message}</Wrapper>;

export default Error;
