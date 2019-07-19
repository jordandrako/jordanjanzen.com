import * as React from 'react';
import { getFileExtension, toTitleCase } from '../../../../utilities';
import Button, { ButtonType } from '../../Button';
import * as Styled from './PageTitle.styles';
import { IPageTitleProps } from './PageTitle.types';

const extension = getFileExtension();
const PageTitle = (props: IPageTitleProps) => {
  const { ext = true, prevPage } = props;
  const showBreadCrumb = prevPage && prevPage.name !== '404';
  const prevPageName = prevPage && [
    toTitleCase(prevPage.name),
    ext && extension,
  ];
  const prevPagePath = prevPage && prevPage.path ? prevPage.path : '/';
  const title = [toTitleCase(props.title), ext && extension];

  return (
    <Styled.titleBar>
      <Styled.titleList>
        {showBreadCrumb && (
          <Styled.titleItem>
            <Styled.breadCrumb to={prevPagePath}>
              <Styled.titleText>{prevPageName}</Styled.titleText>
            </Styled.breadCrumb>
          </Styled.titleItem>
        )}
        <Styled.currentItem>
          <Styled.titleIcon
            className='fa fa-file-code-o file'
            aria-hidden='true'
          />
          <Styled.currentText>{title}</Styled.currentText>
          <Button
            to='/'
            buttonType={ButtonType.Delete}
            aria-hidden='true'
            style={{ margin: 0 }}
          />
        </Styled.currentItem>
        {process.env.REACT_APP_BRANCH !== 'master' && (
          <Styled.devItem>
            <span>Branch: {process.env.REACT_APP_BRANCH}</span>
          </Styled.devItem>
        )}
      </Styled.titleList>
    </Styled.titleBar>
  );
};

export default PageTitle;
