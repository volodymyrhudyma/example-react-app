import { shallow } from 'enzyme';
import React from 'react';
import Empty from '../Empty';
import i18n from 'i18next';

describe('Empty with Enzyme and Jest', () => {
  it('should render correctly', () => {
    const component = shallow(
      <Empty t={jest.fn()} i18n={i18n} tReady={false} />
    );
    expect(component).toMatchSnapshot();
  });
});
