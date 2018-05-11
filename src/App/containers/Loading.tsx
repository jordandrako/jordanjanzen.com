import * as React from 'react';
import DocumentTitle from 'react-document-title';
import Banner, { BannerAction, BannerType } from '../components/Banner';
import StyledLoader from '../../components/StyledLoader';
import { styled } from '../../styling';
import { Main, MainContainer, Row } from './grid';
import PageTitle from './PageTitle';

const Load = styled(Main)`
  align-items: center;
  justify-content: center;
`;

interface ILoadingProps {
  isLoading: boolean;
}

const Loading = (props: ILoadingProps) => {
  // Handle the loading state
  if (props.isLoading) {
    return (
      <DocumentTitle title="Loading...">
        <MainContainer>
          <PageTitle title="Loading..." ext={false} />
          <Load>
            <StyledLoader />
          </Load>
        </MainContainer>
      </DocumentTitle>
    );
  }
  // Handle the error state
  return (
    <DocumentTitle title="😥 Sorry">
      <MainContainer>
        <PageTitle title="😥 Sorry" ext={false} />
        <Main>
          <Row>
            <Banner type={BannerType.Danger} action={BannerAction.Reload}>
              There seems to have been a problem loading this page...
            </Banner>
          </Row>
        </Main>
      </MainContainer>
    </DocumentTitle>
  );
};

export default Loading;
