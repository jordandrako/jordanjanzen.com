import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { toTitleCase } from '../helpers';
import { colors, theme, typography } from '../theme/variables';

const Title = styled.header`
  border-bottom: 3px solid ${colors.black};
  width: 100%;
  margin-bottom: 2em;

  h2 {
    color: ${theme.secondaryColor};
    display: inline-block;
    width: 100%;
    font-family: ${typography.monospace};
    text-align: center;

    &:before {
      content: '<';
      display: inline-block;
      padding-right: 0.25em;
    }

    &:after {
      content: '/>';
      display: inline-block;
      padding-left: 0.25em;
    }
  }
`;

const PageTitle = (props) => {
  const title = toTitleCase(props.title);

  return (
    <Title>
      <h2>{title}</h2>
    </Title>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
