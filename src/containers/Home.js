import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';
import styled from 'styled-components';
import { layout } from '../theme/variables';

import PageTitle from '../components/PageTitle';

const Main = styled.main`flex: ${layout.mainFlex};`;

const Home = () => (
  <DocumentTitle>
    <Main>
      <PageTitle title="Home" />
      <h3>TODO</h3>
      <ul>
        <li>
          <input
            type="checkbox"
            name="animate_active_link"
            id="animate_active_link"
            key="animate_active_link"
          />animate active link
        </li>
        <li>
          <input
            type="checkbox"
            name="Modernizr_integration"
            id="Modernizr_integration"
            key="Modernizr_integration"
          />Modernizr integration
        </li>
        <li>
          <input
            type="checkbox"
            name="Flexbox_layout"
            id="Flexbox_layout"
            key="Flexbox_layout"
          />Flexbox layout
        </li>
        <li>
          <input
            type="checkbox"
            name="CSS_Grid_layout"
            id="CSS_Grid_layout"
            key="CSS_Grid_layout"
          />CSS Grid layout
        </li>
        <li>
          <input
            type="checkbox"
            name="tagline_arrows"
            id="tagline_arrows"
            key="tagline_arrows"
          />tagline arrows
        </li>
        <li>
          <input
            type="checkbox"
            name="firebase_database"
            id="firebase_database"
            key="firebase_database"
          />firebase database
        </li>
        <li>
          <input type="checkbox" name="loading_icon" id="loading_icon" key="loading_icon" />loading
          icon
        </li>
      </ul>
      <h3>Inspiration</h3>
      <ul>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="http://sambedingfield.com/">
            Sam Bedingfield
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="http://wesbos.com">
            Wes Bos
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="http://ivesvh.com/">
            Ives van Hoorne
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://line25.com/inspiration/designer-portfolio-websites"
          >
            Line 25 list of 30 portfolios
          </a>
        </li>
      </ul>
    </Main>
  </DocumentTitle>
);

Home.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Home;
