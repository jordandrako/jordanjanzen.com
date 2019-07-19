import * as React from 'react';
import DocumentTitle from 'react-document-title';
import { styled } from '../../styling';
import Banner, { BannerAction, BannerType } from '../components/Banner';
import { Row } from '../components/Page';
import StyledLoader from '../components/Spinner/Spinner';

const Float = styled.div`
  display: flex;
  flex: 1;
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
      <Float>
        <StyledLoader />
      </Float>
    );
  }
  // Handle the error state
  return (
    <DocumentTitle title='😥 Sorry'>
      <Row>
        <Banner bannerType={BannerType.Danger} action={BannerAction.Reload}>
          There seems to have been a problem loading this page...
        </Banner>
      </Row>
    </DocumentTitle>
  );
};

export default Loading;
