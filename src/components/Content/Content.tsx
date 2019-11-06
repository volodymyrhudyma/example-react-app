import React, { Component } from 'react';
import { Wrapper, ContentInner, TitleWrapper } from './styled/Content.styled';
import Container from 'src/ui-kit/Container';
import Title from 'src/ui-kit/Title';
import Stats from './Stats';
import List from './List';
import Tabs from 'src/ui-kit/Tabs';
import icons from 'src/constants/icons';
import { TABLE, CARD } from 'src/constants/layout';
import { WithTranslation } from 'react-i18next';

interface IContentProps extends WithTranslation {
  layout: string;
  setLayout: (layout: string) => void;
}

class Content extends Component<IContentProps> {
  onCardsViewClick = () => {
    const { setLayout } = this.props;
    setLayout(CARD);
  };
  onTableViewClick = () => {
    const { setLayout } = this.props;
    setLayout(TABLE);
  };
  render() {
    const { t, layout } = this.props;
    const activeTabIndex = layout === TABLE ? 1 : 0;
    return (
      <Wrapper>
        <Container>
          <ContentInner>
            <TitleWrapper>
              <Title type="h1">{t('articles.title')}</Title>
              <Tabs
                activeTabIndex={activeTabIndex}
                items={[
                  {
                    icon: {
                      default: icons.card,
                      active: icons.cardActive,
                    },
                    label: t('layout.cards'),
                    onClick: this.onCardsViewClick,
                  },
                  {
                    icon: {
                      default: icons.table,
                      active: icons.tableActive,
                    },
                    label: t('layout.table'),
                    onClick: this.onTableViewClick,
                  },
                ]}
              />
            </TitleWrapper>
            <Stats />
            <List />
          </ContentInner>
        </Container>
      </Wrapper>
    );
  }
}

export default Content;
