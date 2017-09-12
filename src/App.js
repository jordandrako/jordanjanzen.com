import React from 'react';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';

import Header from './components/Header';
import ContentRouter from './components/ContentRouter';

const FA = FontAwesome;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

const tagline = () => (
  <h3 className="tagline">
    Never&nbsp;
    <FA name="caret-right" size="2x" />
    &nbsp;Stop&nbsp;
    <FA name="caret-right" size="2x" />
    &nbsp;Learning&nbsp;
    <FA name="caret-right" size="2x" />
  </h3>
);

const App = () => (
  <Wrapper className="wrapper">
    <Header tagline={tagline} />
    <ContentRouter />
  </Wrapper>
);

export default App;
