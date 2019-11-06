import React from 'react';
import { shallow } from 'enzyme';
import Tag from '../Tag';

describe('Tag component', () => {
  it('should render correctly', () => {
    const component = shallow(<Tag>Tag</Tag>);
    expect(component).toMatchSnapshot();
  });
});
