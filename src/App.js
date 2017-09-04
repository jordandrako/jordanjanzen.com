import React from 'react';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';

import Header from './components/Header';
import Main from './components/Main';

const FA = FontAwesome;

const Wrapper = styled.div`display: flex;`;

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
    <Main />
    <FA name="Rocket" size="2x" />
  </Wrapper>
);

export default App;
