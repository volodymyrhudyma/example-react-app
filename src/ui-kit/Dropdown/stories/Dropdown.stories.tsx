import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Dropdown from '../Dropdown';

storiesOf('Dropdown', module).add('default', () => (
  <div style={{ position: 'relative', width: '200px' }}>
    <Dropdown
      close={action('Close')}
      action={action('Action')}
      buttonText="Mark All as Read"
    />
  </div>
));
