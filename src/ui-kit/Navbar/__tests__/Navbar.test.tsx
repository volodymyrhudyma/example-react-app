import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../Navbar';

describe('Navbar component', () => {
  it('should render correctly', () => {
    const component = shallow(
      <Navbar
        items={[
          {
            icon: 'test',
            link: '/test',
          },
        ]}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
