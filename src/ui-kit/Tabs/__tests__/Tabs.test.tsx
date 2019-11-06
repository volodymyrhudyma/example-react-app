import React from 'react';
import { shallow } from 'enzyme';
import Tabs from '../Tabs';

describe('Tabs component', () => {
  it('should render correctly', () => {
    const component = shallow(<Tabs activeTabIndex={0} items={[]} />);
    expect(component).toMatchSnapshot();
  });
});
