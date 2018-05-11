import * as React from 'react';
import Button, { ButtonType } from '../Button';
import * as Styled from './Spinner.styles';
import codeLoader from '/src/images/codeLoader.svg';

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
