import * as React from 'react';
import Banner, { BannerAction, BannerType } from '../components/Banner';
import { SocialButton, SocialSites } from '../components/Button';
import { Page, Row } from '../components/Page';

const NotFound = () => (
  <Page title="404">
    <Row>
      <Banner
        title="Not Found"
        bannerType={BannerType.Danger}
        action={BannerAction.Home}
      >
        Sorry, I couldn't find that page.
      </Banner>
      <p>
        Think something should be here or maybe you clicked on a bugged{' '}
        <span role="img" aria-label="bug">
          🐛
        </span>{' '}
        link? Send me a tweet to let me know, thanks!<br />
        <SocialButton
          href="https://twitter.com/jordancjanzen"
          social={SocialSites.twitter}
        />
      </p>
    </Row>
  </Page>
);

export default NotFound;
