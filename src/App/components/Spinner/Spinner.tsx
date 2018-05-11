import * as React from 'react';
import codeLoader from '../../../images/codeLoader.svg';
import Button, { ButtonType } from '../Button';
import * as Styled from './Spinner.styles';

const StyledLoader = () => (
  <Styled.loader>
    <Styled.frame>
      <Button to="#" buttonType={ButtonType.Delete} />
    </Styled.frame>
    <object type="image/svg+xml" data={codeLoader}>
      loading...
    </object>
    <Styled.scrollbar />
  </Styled.loader>
);

export default StyledLoader;
