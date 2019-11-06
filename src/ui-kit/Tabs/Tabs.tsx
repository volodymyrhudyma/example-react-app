import React from 'react';
import { Wrapper, Label, TabItem, IconWrapper } from './styled/Tabs.styled';
import { ITabItem } from 'src/types';
import Icon from '../Icon/Icon';

interface ITabsProps {
  items: ITabItem[];
  activeTabIndex: number;
}

const Tabs = ({ items, activeTabIndex }: ITabsProps) => (
  <Wrapper>
    {items.map((item, index) => {
      const isActive = activeTabIndex === index;
      const icon = isActive ? item.icon.active : item.icon.default;
      return (
        <TabItem key={item.label} isActive={isActive} onClick={item.onClick}>
          <IconWrapper>
            <Icon src={icon} width={15} height={15} />
          </IconWrapper>
          <Label>{item.label}</Label>
        </TabItem>
      );
    })}
  </Wrapper>
);

export default Tabs;
