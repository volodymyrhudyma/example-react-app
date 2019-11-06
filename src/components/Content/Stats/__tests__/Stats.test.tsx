import { shallow } from 'enzyme';
import React from 'react';
import Stats from '../Stats';
import i18n from 'i18next';

describe('Stats with Enzyme and Jest', () => {
  it('should render correctly', () => {
    const component = shallow(
      <Stats
        t={jest.fn()}
        i18n={i18n}
        tReady={false}
        articles={[]}
        readArticle={jest.fn()}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
