import * as React from 'react';
import { getFileExtension, toTitleCase } from '../../helpers';
import Button, { ButtonType } from '../Button';
import * as styled from './PageTitle.styles';
import { IPageTitleProps } from './PageTitle.types';

const fileExtention = getFileExtension();
const PageTitle = (props: IPageTitleProps) => {
  const ext = props.ext === true && fileExtention;
  const title = [toTitleCase(props.title), ext];

  return (
    <styled.Title>
      <ul>
        <li>
          <i className="fa fa-file-code-o file" aria-hidden="true" />
          <h1>{title}</h1>
          <Button
            to="/"
            buttonType={ButtonType.delete}
            aria-hidden="true"
            style={{ margin: 0 }}
          />
        </li>
      </ul>
    </styled.Title>
  );
};

export default PageTitle;
