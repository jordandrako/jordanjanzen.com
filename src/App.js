import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  const tagline = 'Never  Stop   Learning± ';

  return (
    <wrapper>
      <Header tagline={tagline} />
      <Main />
    </wrapper>
  );
};

export default App;
