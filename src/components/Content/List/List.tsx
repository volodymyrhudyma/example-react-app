import React, { Component } from 'react';
import {
  Wrapper,
  LineWrapper,
  ListHeading,
  ListBody,
} from './styled/List.styled';
import Title from 'src/ui-kit/Title';
import Line from 'src/ui-kit/Line';
import Article from 'src/components/Content/ListItem';
import { CARD } from 'src/constants/layout';
import { IArticle } from 'src/types';
import Loader from 'src/ui-kit/Loader';
import Error from 'src/ui-kit/Error';
import Empty from 'src/components/Empty';
import { WithTranslation } from 'react-i18next';

interface IListProps extends WithTranslation {
  layout: string;
  fetchArticles: () => void;
  fetching: boolean;
  error?: string;
  data: IArticle[];
}

class List extends Component<IListProps> {
  componentDidMount() {
    const { fetchArticles } = this.props;
    fetchArticles();
  }
  render() {
    const { t, layout, fetching, error, data } = this.props;
    return (
      <Wrapper>
        <ListHeading>
          <Title type="h5">{t('articles.period')}</Title>
          <LineWrapper>
            <Line width="50px" />
          </LineWrapper>
        </ListHeading>
        <ListBody flex={layout === CARD}>
          {fetching ? (
            <Loader />
          ) : error ? (
            <Error message={t('resource.error')} />
          ) : data.length > 0 ? (
            data.map(article => <Article key={article.id} article={article} />)
          ) : (
            <Empty />
          )}
        </ListBody>
      </Wrapper>
    );
  }
}

export default List;
