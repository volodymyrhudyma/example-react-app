import React, { Component, ChangeEvent } from 'react';
import { Wrapper, HeaderInner } from './styled/Header.styled';
import Input from 'src/ui-kit/Input';
import Avatar from 'src/ui-kit/Avatar';
import icons from 'src/constants/icons';
import Container from 'src/ui-kit/Container';
import { WithTranslation } from 'react-i18next';

interface IHeaderState {
  query: string;
}

class Header extends Component<WithTranslation, IHeaderState> {
  constructor(props: WithTranslation) {
    super(props);
    this.state = {
      query: '',
    };
  }
  onInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.setState({
      query: value,
    });
  };
  render() {
    const { t } = this.props;
    const { query } = this.state;
    return (
      <Wrapper>
        <Container>
          <HeaderInner>
            <Input
              value={query}
              onChange={this.onInput}
              placeholder={t('search.placeholder')}
            />
            <Avatar src={icons.headerAvatar} />
          </HeaderInner>
        </Container>
      </Wrapper>
    );
  }
}

export default Header;
