import { shallow } from 'enzyme';
import React from 'react';
import Content from '../Content';
import i18n from 'i18next';

describe('Content with Enzyme and Jest', () => {
  it('should render correctly', () => {
    const component = shallow(
      <Content
        t={jest.fn()}
        i18n={i18n}
        tReady={false}
        layout="TABLE"
        setLayout={jest.fn()}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
