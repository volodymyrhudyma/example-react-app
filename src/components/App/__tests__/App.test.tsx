import { shallow } from 'enzyme';
import React from 'react';
import App from '../App';

describe('App with Enzyme and Jest', () => {
  it('should render correctly', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
