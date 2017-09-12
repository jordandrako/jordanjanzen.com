import React from 'react';
import DocumentTitle from 'react-document-title';

import Main from '../components/Main';
import PageTitle from '../components/PageTitle';

const Portfolio = () => (
  <DocumentTitle title="Jordan Janzen | Portfolio">
    <Main>
      <PageTitle title="Portfolio" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quasi et eveniet, aut,
        eligendi pariatur voluptatum facilis officia, ad expedita nihil neque optio totam error
        nobis atque odio doloribus tempora.
      </p>
    </Main>
  </DocumentTitle>
);

export default Portfolio;
