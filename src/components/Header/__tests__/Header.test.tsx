import { shallow } from 'enzyme';
import React from 'react';
import Header from '../Header';
import i18n from 'i18next';

describe('Header with Enzyme and Jest', () => {
  it('should render correctly', () => {
    const component = shallow(
      <Header t={jest.fn()} i18n={i18n} tReady={false} />
    );
    expect(component).toMatchSnapshot();
  });
});
