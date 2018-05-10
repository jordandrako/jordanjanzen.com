import styled from 'styled-components';

import { palette, fonts } from '../styling/theme';
import { Row } from '../styling/grid';

const StyledForm = styled(Row)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1em;
  margin: 0 0 2em;
  border: 5px double ${palette.black};

  &:last-child {
    margin-bottom: 0;
  }

  form {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  input:not([type='checkbox']),
  select,
  textarea {
    font-family: ${fonts.monospace};
    font-size: 0.8rem;
    line-height: 1.6;
    border: 2px solid ${palette.black};
    padding: 0.5em 1em;
    margin-bottom: 1em;
    background: transparent;
    outline: none;

    :focus {
      outline: none;
      border-color: ${palette.blue};
    }
  }
  textarea {
    resize: none;
  }
`;

export default StyledForm;
