import React from 'react';
import { storiesOf } from '@storybook/react';

import NavbarItem from '../NavbarItem';
import icons from 'src/constants/icons';

storiesOf('NavbarItem', module)
  .add('default', () => (
    <NavbarItem
      isActive={false}
      item={{
        icon: icons.dashboard,
        link: '/dashboard',
      }}
    />
  ))
  .add('active', () => (
    <NavbarItem
      isActive={true}
      item={{
        icon: icons.dashboard,
        link: '/dashboard',
      }}
    />
  ));
