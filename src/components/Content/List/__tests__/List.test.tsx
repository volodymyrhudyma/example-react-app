import { shallow } from 'enzyme';
import React from 'react';
import List from '../List';
import i18n from 'i18next';
import Article from '../../../Content/ListItem';

describe('List with Enzyme and Jest', () => {
  let wrapper: any = null;
  const fetchArticles = jest.fn();
  const articles = [
    {
      avatar: '',
      author: '',
      email: '',
      isRead: false,
      jobTitle: '',
      title: '',
      desc: '',
      tags: [],
      id: 0,
    },
    {
      avatar: '',
      author: '',
      email: '',
      isRead: false,
      jobTitle: '',
      title: '',
      desc: '',
      tags: [],
      id: 0,
    },
  ];
  beforeEach(() => {
    wrapper = shallow(
      <List
        t={jest.fn()}
        i18n={i18n}
        tReady={false}
        layout="TABLE"
        fetchArticles={fetchArticles}
        fetching={false}
        error={undefined}
        data={articles}
      />
    );
  });
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should fetch all articles', () => {
    expect(fetchArticles).toHaveBeenCalled();
  });
  it('should show 2 Article components if 2 articles are returned by API', () => {
    expect(wrapper.find(Article).length).toBe(2);
  });
});
