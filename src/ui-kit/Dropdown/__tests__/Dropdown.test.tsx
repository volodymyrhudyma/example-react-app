import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from '../Dropdown';

describe('Dropdown component', () => {
  it('should render correctly', () => {
    const component = shallow(
      <Dropdown
        close={jest.fn()}
        action={jest.fn()}
        buttonText="Mark All as Read"
      />
    );
    expect(component).toMatchSnapshot();
  });
});
