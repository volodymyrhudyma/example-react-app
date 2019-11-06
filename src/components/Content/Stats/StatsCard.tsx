import React, { Component, SyntheticEvent } from 'react';
import {
  CardHeading,
  CardBody,
  ActionsWrapper,
  Count,
  Period,
} from './styled/StatsCard.styled';
import icons from 'src/constants/icons';
import Title from 'src/ui-kit/Title';
import Card from 'src/ui-kit/Card';
import Icon from 'src/ui-kit/Icon';
import Dropdown from 'src/ui-kit/Dropdown';
import { IArticle } from 'src/types';
import { withTranslation, WithTranslation } from 'react-i18next';

interface IStatsCardProps extends WithTranslation {
  title: string;
  count: number;
  period: string;
  type: string;
  articles: IArticle[];
  readArticle: (article: IArticle) => void;
}

interface IStatsCardState {
  dropdownShown: boolean;
}

class StatsCard extends Component<IStatsCardProps, IStatsCardState> {
  constructor(props: IStatsCardProps) {
    super(props);
    this.state = {
      dropdownShown: false,
    };
  }
  toggleDropdown = (e?: SyntheticEvent) => {
    if (e) {
      e.preventDefault();
    }
    this.setState(({ dropdownShown }) => ({
      dropdownShown: !dropdownShown,
    }));
  };
  onReadAllClick = async () => {
    const { articles, readArticle } = this.props;
    for (const article of articles) {
      await readArticle(article);
    }
    console.log('toggle');
    this.toggleDropdown();
  };
  render() {
    const { t, title, count, period, type } = this.props;
    const { dropdownShown } = this.state;
    return (
      <Card width="300px">
        <CardHeading>
          <Title type="h6">{title}</Title>
          <ActionsWrapper href="#" onClick={this.toggleDropdown}>
            <Icon src={icons.more} />
          </ActionsWrapper>
          {dropdownShown && (
            <Dropdown
              close={this.toggleDropdown}
              action={this.onReadAllClick}
              buttonText={t('articles.readAll')}
            />
          )}
        </CardHeading>
        <CardBody>
          <Count type={type}>{count}</Count>
          <Period>{period}</Period>
        </CardBody>
      </Card>
    );
  }
}

export default withTranslation()(StatsCard);
