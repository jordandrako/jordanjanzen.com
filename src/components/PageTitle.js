import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import Button from './Button';

import { toTitleCase, getFileExtension } from '../helpers';
import { colors, typography } from '../theme/variables';
import { mediaMax } from '../theme/style-utils';

const Title = styled.header`
  background: ${darken(0.05, colors.black)};
  border-bottom: 2px solid ${colors.darkblack};
  width: 100%;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;

  ul {
    margin: 0;
    padding: 0;
    width: 100%;

    li {
      padding: 15px 0 15px 15px;
      display: inline-flex;
      align-items: center;
      color: ${colors.white};

      h1,
      h4 {
        display: inline-block;
        margin: 0 1em;
        font-family: ${typography.monospace};
        font-size: 1rem;
        font-weight: 300;
        text-shadow: 0 2px 3px rgba(0, 0, 0, 0.45);
      }

      .file {
        color: ${colors.yellow};
      }
    }

    li:last-child {
      background: ${lighten(0.05, colors.black)};
      color: ${colors.lightwhite};
      padding: 15px;
      border-top: 3px solid ${colors.lightblue};
      box-shadow: 2px 0 0 ${colors.darkblack};
      text-shadow: 0 2px 3px rgba(0, 0, 0, 0.45);

      h1 {
        font-size: 1.15rem;
      }

      ${mediaMax.tablet`
        display: inline-flex;
        background: transparent;
        border: none;
        width: 100%;
        padding: 6px 8px;
        justify-content: space-between;

        h1 {
          font-size: 1rem;
        }

      `};
    }
  }
`;

const fileExtention = getFileExtension();
const PageTitle = (props) => {
  const ext = props.ext === true && fileExtention;
  const title = [toTitleCase(props.title), ext];

  return (
    <Title>
      <ul>
        <li>
          <i className="fa fa-file-code-o file" aria-hidden="true" />
          <h1>{title}</h1>
          <Button
            to="/"
            type="delete"
            aria-hidden="true"
            style={{ margin: 0 }}
          />
        </li>
      </ul>
    </Title>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  ext: PropTypes.bool,
};

PageTitle.defaultProps = {
  ext: true,
};

export default PageTitle;
