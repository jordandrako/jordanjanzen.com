import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';

import Main from '../components/Main';
import PageTitle from '../components/PageTitle';

const Todo = props => (
  <DocumentTitle title="Jordan Janzen | todo">
    <Main>
      <PageTitle title="Todo" />
      <h3>Checklist</h3>
      <ul>
        <li>
          <input
            type="checkbox"
            name="finish_variables"
            id="finish_variables"
            key="finish_variables"
          />finish variables
        </li>
        <li>
          <input
            type="checkbox"
            name="react_router_transitions"
            id="react_router_transitions"
            key="react_router_transitions"
          />react router transitions
        </li>
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

Todo.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Todo;
