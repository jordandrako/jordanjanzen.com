import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors, typography } from '../theme/variables';

const Alert = styled.div`
  background: ${props => props.type === 'info' && colors.lightblack};
  background: ${props => props.type === 'alert' && colors.yellow};
  background: ${props => props.type === 'success' && colors.green};
  background: ${props => props.type === 'error' && colors.red};
  padding: 2em;
  margin: 1.5em;
  border-radius: 0.25em;
  border: inset solid 3px rgba(255, 255, 255, 0.5);
  font-family: ${typography.monospace};
  position: relative;
  .action {
    position: absolute;
    top: .5em;
    right: .5em;
    width: 2em;
    height: 2em;
    background: black;
  }
  h4 {
    margin: 0;
  }
`;

const Banner = props => (
  <Alert type={props.type}>
    <h4>{props.text}</h4>
    <span className="action" />
  </Alert>
);

Banner.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Banner;
