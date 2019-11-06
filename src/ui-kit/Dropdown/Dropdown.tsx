import React from 'react';
import { Wrapper, DropdownButton } from './styled/Dropdown.styled';
import OutsideClickHandler from 'react-outside-click-handler';

interface IDropdownProps {
  close: () => void;
  action: () => void;
  buttonText: string;
}

const Dropdown = ({ close, action, buttonText }: IDropdownProps) => (
  <Wrapper>
    <OutsideClickHandler onOutsideClick={close}>
      <DropdownButton onClick={action}>{buttonText}</DropdownButton>
    </OutsideClickHandler>
  </Wrapper>
);

export default Dropdown;
