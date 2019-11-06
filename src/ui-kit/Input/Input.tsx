import React, { ChangeEvent } from 'react';
import { Wrapper, StyledInput, IconWrapper } from './styled/Input.styled';
import Icon from '../Icon/Icon';
import icons from 'src/constants/icons';

interface IInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: IInputProps) => (
  <Wrapper>
    <IconWrapper>
      <Icon src={icons.search} width={20} height={20} />
    </IconWrapper>
    <StyledInput {...props} />
  </Wrapper>
);

Input.defaultProps = {
  type: 'text',
};

export default Input;
