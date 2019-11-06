import React from 'react';
import { shallow } from 'enzyme';
import Dot from '../Dot';

describe('Dot component', () => {
  it('should render correctly', () => {
    const component = shallow(<Dot />);
    expect(component).toMatchSnapshot();
  });
});
