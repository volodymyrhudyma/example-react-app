import React, { Component } from 'react';
import { GlobalStyle } from 'src/styled';
import { Wrapper, ContentWrapper } from './styled/App.styled';
import Navbar from 'src/ui-kit/Navbar';
import { menuItems } from 'src/constants/navbar';
import Header from 'src/components/Header';
import Content from 'src/components/Content';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <GlobalStyle />
        <Navbar items={menuItems} />
        <ContentWrapper>
          <Header />
          <Content />
        </ContentWrapper>
      </Wrapper>
    );
  }
}

export default App;
