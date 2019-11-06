import React from 'react';
import { Wrapper, IconWrapper } from './styled/NavbarItem.styled';
import { IMenuItem } from 'src/types';
import Icon from '../Icon/Icon';

interface INavbarItemProps {
  item: IMenuItem;
  isActive: boolean;
}

const NavbarItem = ({ item, isActive }: INavbarItemProps) => (
  <Wrapper href={item.link} className={isActive ? 'active' : ''}>
    <IconWrapper>
      <Icon src={item.icon} />
    </IconWrapper>
  </Wrapper>
);

export default NavbarItem;
