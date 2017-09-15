import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';

import Main from '../Main';
import PageTitle from '../PageTitle';

const Home = () => (
  <DocumentTitle title="Jordan Janzen">
    <Main>
      <PageTitle title="Home" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vero eius ut doloremque
        nam ea modi cumque, labore, amet, praesentium sapiente. Voluptatem consequuntur reiciendis
        ipsa fugit, aperiam qui eum quo, sit veniam temporibus laudantium adipisci aliquam explicabo
        expedita commodi doloribus laboriosam, cupiditate rerum illo similique? Enim, provident.
        Veritatis praesentium odio deserunt, quam qui eaque officiis omnis dolores non tempore natus
        repellat ad fuga cum. Veniam corporis dolorum eum animi cumque magni, aut a amet repellat
        in. Explicabo minima omnis rem.
      </p>
    </Main>
  </DocumentTitle>
);

Home.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Home;
