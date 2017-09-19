import styled from 'styled-components';

import { colors, typography } from '../theme/variables';

const StyledForm = styled.div`
  max-width: 480px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1em;
  border: 3px double ${colors.black};

  form {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  input:not([type='checkbox']),
  select,
  textarea {
    font-family: ${typography.monospace};
    line-height: 1.6;
    border: 2px solid ${colors.black};
    padding: 0.5em 1em;
    margin-bottom: 1em;
    background: transparent;
    outline: none;
    :focus {
      outline: none;
    }
  }
`;

export default StyledForm;
