import React from 'react';
import { Wrapper, LogoWrapper, ItemsWrapper } from './styled/Navbar.styled';
import { IMenuItem } from 'src/types';
import NavbarItem from '../NavbarItem/NavbarItem';
import Icon from '../Icon/Icon';
import icons from 'src/constants/icons';

interface INavbarProps {
  items: IMenuItem[];
}

const Navbar = ({ items }: INavbarProps) => (
  <Wrapper>
    <LogoWrapper href="/">
      <Icon src={icons.logo} height={42} width={30} />
    </LogoWrapper>
    <ItemsWrapper>
      {items.map((item, index) => (
        <NavbarItem key={item.icon} item={item} isActive={index === 0} />
      ))}
    </ItemsWrapper>
  </Wrapper>
);

export default Navbar;
