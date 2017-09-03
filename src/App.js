import React from 'react';
import FontAwesome from 'react-fontawesome';
import Header from './components/Header';
import Main from './components/Main';

const FA = FontAwesome;

// const tagline = () => (
//   <h3 className="tagline">
//     Never&nbsp;
//     <FA name="caret-right" size="2x" />
//     &nbsp;Stop&nbsp;
//     <FA name="caret-right" size="2x" />
//     &nbsp;Learning&nbsp;
//     <FA name="caret-right" size="2x" />
//   </h3>
// );

const App = () => (
  <wrapper>
    <Header tagline="Never Stop Learning" />
    <Main />
    <FA name="Rocket" size="2x" />
  </wrapper>
);

export default App;
