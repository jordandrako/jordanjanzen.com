import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { toTitleCase } from '../helpers';
import { colors, theme, typography } from '../theme/variables';

const Title = styled.header`
  background: ${colors.black};
  border-bottom: 2px solid ${colors.darkblack};
  width: 100%;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;

  ul {
    margin: 0;
    padding: 0;

    li {
      padding: 15px 0 15px 15px;
      display: inline-flex;
      align-items: center;
      color: ${colors.white};
      border-right: 1px solid ${colors.darkblack};

      h1,
      h4 {
        display: inline-block;
        margin: 0 1em;
        font-family: ${typography.monospace};
        font-size: 1rem;
        font-weight: 300;
        text-shadow: 0 2px 3px rgba(0, 0, 0, 0.45);
      }

      .file,
      .close {
      }

      .file {
        color: ${colors.yellow};
      }

      .close {
        opacity: 0.7;
        color: ${colors.red};
        cursor: pointer;
        transition: all 0.15s ease-in;
        &:hover {
          opacity: 1;
        }
      }
    }
    li:last-child {
      background: rgba(255, 255, 255, 0.1);
      color: ${colors.lightwhite};
      padding: 15px;

      text-shadow: 0 2px 3px rgba(0, 0, 0, 0.45);
      h1 {
        font-size: 1.15rem;
      }
    }
  }
`;
// TODO: Add breadcrumbs
const PageTitle = (props) => {
  const title = toTitleCase(props.title);

  return (
    <Title>
      <ul>
        <li>
          <i className="fa fa-file-code-o file" aria-hidden="true" />
          <h4>{'PreviousPage.js'}</h4>
        </li>
        <li>
          <i className="fa fa-file-code-o file" aria-hidden="true" />
          <h1>{`${title}.js`}</h1>
          <i className="fa fa-times-circle close" aria-hidden="true" />
        </li>
      </ul>
    </Title>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
