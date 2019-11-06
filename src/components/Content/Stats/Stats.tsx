import React, { Component } from 'react';
import { Wrapper, CardWrapper } from './styled/Stats.styled';
import StatsCard from './StatsCard';
import { IArticle } from 'src/types';
import { WithTranslation } from 'react-i18next';

interface IStatsProps extends WithTranslation {
  articles: IArticle[];
  readArticle: (article: IArticle) => void;
}

class Stats extends Component<IStatsProps> {
  render() {
    const { t, articles, readArticle } = this.props;
    return (
      <Wrapper>
        <CardWrapper>
          <StatsCard
            title={t('articles.total')}
            count={articles.length}
            period={t('articles.totalPeriod')}
            type="overall"
            articles={articles}
            readArticle={readArticle}
          />
        </CardWrapper>
        <StatsCard
          title={t('articles.unread')}
          count={articles.filter(article => !article.isRead).length}
          period={t('articles.unreadPeriod')}
          type="unread"
          articles={articles}
          readArticle={readArticle}
        />
      </Wrapper>
    );
  }
}

export default Stats;
