import { shallow } from 'enzyme';
import React from 'react';
import ListItem from '../ListItem';
import i18n from 'i18next';

describe('ListItem with Enzyme and Jest', () => {
  it('should render correctly', () => {
    const component = shallow(
      <ListItem
        t={jest.fn()}
        i18n={i18n}
        tReady={false}
        layout="TABLE"
        article={{
          avatar: '',
          author: '',
          email: '',
          isRead: false,
          jobTitle: '',
          title: '',
          desc: '',
          tags: [],
          id: 0,
        }}
        deleteArticle={jest.fn()}
        readArticle={jest.fn()}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
