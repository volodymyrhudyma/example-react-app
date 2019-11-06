import React from 'react';
import { storiesOf } from '@storybook/react';

import Error from '../Error';

storiesOf('Error', module).add('default', () => (
  <Error message="Something went wrong" />
));
