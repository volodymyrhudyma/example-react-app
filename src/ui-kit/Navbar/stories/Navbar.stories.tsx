import React from 'react';
import { storiesOf } from '@storybook/react';

import Navbar from '../Navbar';
import icons from 'src/constants/icons';

storiesOf('Navbar', module).add('default', () => (
  <Navbar
    items={[
      {
        icon: icons.dashboard,
        link: '#',
      },
      {
        icon: icons.meetings,
        link: '#',
      },
      {
        icon: icons.settings,
        link: '#',
      },
    ]}
  />
));
