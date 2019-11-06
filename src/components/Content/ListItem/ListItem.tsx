import React, { Component } from 'react';
import {
  Wrapper,
  CardInner,
  UserWrapper,
  AvatarWrapper,
  DetailsWrapper,
  FullName,
  Email,
  Position,
  TeaserWrapper,
  TitleWrapper,
  TextWrapper,
  TagsWrapper,
  ActionsWrapper,
  DeleteWrapper,
  ReadWrapper,
  ReadMarkWrapper,
  LimitWidth,
  EndWrapper,
} from './styled/ListItem.styled';
import Card from 'src/ui-kit/Card';
import Avatar from 'src/ui-kit/Avatar';
import icons from 'src/constants/icons';
import Title from 'src/ui-kit/Title';
import Icon from 'src/ui-kit/Icon';
import Button from 'src/ui-kit/Button';
import Tag from 'src/ui-kit/Tag';
import Dot from 'src/ui-kit/Dot';
import { CARD } from 'src/constants/layout';
import { IArticle } from 'src/types';
import { WithTranslation } from 'react-i18next';

interface IListItemProps extends WithTranslation {
  layout: string;
  article: IArticle;
  readArticle: (article: IArticle) => void;
  deleteArticle: (id: number) => void;
}

class ListItem extends Component<IListItemProps> {
  readArticle = () => {
    const { readArticle, article } = this.props;
    readArticle(article);
  };
  deleteArticle = () => {
    const { deleteArticle, article } = this.props;
    deleteArticle(article.id);
  };
  render() {
    const { t, layout, article } = this.props;
    const isCard = layout === CARD;
    const isArticleRead = article.isRead;
    return (
      <Wrapper isCard={isCard}>
        <Card
          padding={isCard ? '3rem' : '1.5rem'}
          width={isCard ? '300px' : 'auto'}
          height={isCard ? '100%' : 'auto'}
        >
          <CardInner isCard={isCard}>
            <UserWrapper isCard={isCard}>
              <AvatarWrapper>
                <Avatar src={icons.articleAvatar} />
              </AvatarWrapper>
              <DetailsWrapper isCard={isCard}>
                <FullName>
                  <Title type="h4">
                    <LimitWidth>{article.author}</LimitWidth>
                  </Title>
                </FullName>
                <Email>{article.email}</Email>
                <Position>{article.jobTitle}r</Position>
              </DetailsWrapper>
            </UserWrapper>
            <TeaserWrapper isCard={isCard}>
              <TitleWrapper isCard={isCard}>
                <Title type="h4">{article.title}</Title>
              </TitleWrapper>
              <TextWrapper>{article.desc}</TextWrapper>
            </TeaserWrapper>
            <EndWrapper>
              <TagsWrapper isCard={isCard}>
                {article.tags &&
                  article.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
              </TagsWrapper>
              <ActionsWrapper isCard={isCard}>
                <DeleteWrapper onClick={this.deleteArticle}>
                  <Icon src={icons.delete} />
                </DeleteWrapper>
                {!isArticleRead && (
                  <ReadWrapper>
                    <Button onClick={this.readArticle}>
                      {t('articles.readOne')}
                    </Button>
                  </ReadWrapper>
                )}
              </ActionsWrapper>
            </EndWrapper>
            {!isArticleRead && (
              <ReadMarkWrapper>
                <Dot />
              </ReadMarkWrapper>
            )}
          </CardInner>
        </Card>
      </Wrapper>
    );
  }
}

export default ListItem;
