import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Tabs from '../Tabs';
import icons from 'src/constants/icons';

storiesOf('Tabs', module).add('default', () => (
  <Tabs
    activeTabIndex={0}
    items={[
      {
        icon: {
          default: icons.card,
          active: icons.cardActive,
        },
        label: 'Cards',
        onClick: action('Card click'),
      },
      {
        icon: {
          default: icons.table,
          active: icons.tableActive,
        },
        label: 'Table',
        onClick: action('Table click'),
      },
    ]}
  />
));
