import React from 'react';
import { shallow } from 'enzyme';
import NavbarItem from '../NavbarItem';

describe('NavbarItem component', () => {
  it('should render correctly', () => {
    const component = shallow(
      <NavbarItem
        isActive={false}
        item={{
          icon: 'test',
          link: '/test',
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
