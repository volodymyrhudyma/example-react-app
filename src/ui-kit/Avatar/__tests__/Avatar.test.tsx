import React from 'react';
import { shallow } from 'enzyme';
import Avatar from '../Avatar';

describe('Avatar component', () => {
  it('should render correctly', () => {
    const component = shallow(<Avatar src="avatar" />);
    expect(component).toMatchSnapshot();
  });
});
