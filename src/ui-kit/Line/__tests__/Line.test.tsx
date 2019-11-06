import React from 'react';
import { shallow } from 'enzyme';
import Line from '../Line';

describe('Line component', () => {
  it('should render correctly', () => {
    const component = shallow(<Line />);
    expect(component).toMatchSnapshot();
  });
});
