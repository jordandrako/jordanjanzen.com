import * as React from 'react';
import { getFileExtension, toTitleCase } from '../../../utilities';
import Button, { ButtonType } from '../../components/Button';
import * as Styled from './PageTitle.styles';
import { IPageTitleProps } from './PageTitle.types';

const PageTitle = (props: IPageTitleProps) => {
  const ext = props.ext && getFileExtension();
  const title = [toTitleCase(props.title), ext];

  return (
    <Styled.Title>
      <ul>
        <li>
          <i className="fa fa-file-code-o file" aria-hidden="true" />
          <h1>{title}</h1>
          <Button
            to="/"
            buttonType={ButtonType.Delete}
            aria-hidden="true"
            style={{ margin: 0 }}
          />
        </li>
      </ul>
    </Styled.Title>
  );
};

export default PageTitle;
