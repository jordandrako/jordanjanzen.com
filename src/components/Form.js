import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors, theme, typography } from '../theme/variables';

const Form = styled.form`
  max-width: 480px;
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
  padding: 1em;
  border: 3px double ${colors.black};

  input,
  select,
  textarea {
    border: 2px solid ${colors.black};
    padding: 0.5em 1em;
    margin-bottom: 1em;
  }
  input,
  textarea {
    background: transparent;
    outline: none;
    :focuc {
      outline: none;
    }
  }
  .checkbox {
    width: 20px;
    position: relative;
    margin: 20px auto;
    label {
      width: 20px;
      height: 20px;
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      background: linear-gradient(top, #222 0%, #45484d 100%);
      border-radius: 4px;
      box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.5), 0px 1px 0px rgba(255, 255, 255, 0.4);
      &:after {
        content: '';
        width: 9px;
        height: 5px;
        position: absolute;
        top: 4px;
        left: 4px;
        border: 3px solid #000;
        border-top: none;
        border-right: none;
        background: transparent;
        opacity: 0;
        transform: rotate(-45deg);
      }
      &:hover::after {
        opacity: 0.3;
      }
    }
    input[type='checkbox'] {
      visibility: hidden;
      &:checked + label:after {
        opacity: 1;
      }
    }
  }
`;

Form.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Form;
