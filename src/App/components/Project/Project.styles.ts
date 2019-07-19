import { adjustHue } from 'polished';
import { Link } from 'react-router-dom';
import { fonts, palette, screenSizes, styled } from '../../../styling';
import { imageContainer } from '../CloudImage/CloudImage.styles';

export const imageHeight = '250';

export const Item = styled.li`
  width: calc(50% - 1em);
  min-width: 300px;
  border: 5px double ${palette.themeDark};
  padding: 1em;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 0.5em 1em;
  flex-grow: 1;

  @media (max-width: ${screenSizes.tablet}) {
    width: 100%;
  }
`;

export const ThumbnailLink = styled(Link)`
  h2 {
    line-height: 1.6;
    text-shadow: none;
    color: unset;
  }
  border: none;
`;

// export const ThumbnailArea = styled.div`
//   height: ${imageHeight}px;
// `;

export const Thumbnail = styled.section`
  margin-bottom: 0;
  height: ${imageHeight}px;
  > .cloud-image {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4em 2em;
    border-width: 5px;
    height: 100%;

    @media (max-width: ${screenSizes.phone}) {
      padding: 2em 0;
    }
  }
`;

export const ProjectImage = styled(imageContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4em 2em;
  border-width: 5px;
  height: 100%;

  @media (max-width: ${screenSizes.phone}) {
    padding: 2em 0;
  }
`;

export const ProjectTitle = styled.h2`
  font-family: ${fonts.monospace};
  font-size: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  margin: 0;
  background: ${palette.themePrimary};
  background: linear-gradient(
    135deg,
    ${adjustHue(-20, palette.themePrimary)} 0,
    ${palette.themePrimary} 100%
  );
  padding: 0.33em 0.5em;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.33);

  @media (max-width: ${screenSizes.phone}) {
    font-size: 1.2rem;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: space-between;
  padding: 1em;
  margin-bottom: 1em;
  background: ${palette.themeDark};
  color: ${palette.themeLight};
`;

export const Description = styled.p`
  margin-top: auto;
`;

export const Subheading = styled.h4`
  margin-bottom: 0.15em;
`;

export const Client = styled.div`
  font-size: 0.8rem;
  max-width: 50%;
`;

export const Buttons = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding: 0;
    margin: 0.5em 0.5em 0 0;

    a {
      border-bottom: 0;
    }
  }
`;

export const Skills = styled.div`
  font-size: 0.8rem;
  text-align: right;
  max-width: 50%;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 0.75rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;

    li {
      display: inline-block;
      background: ${palette.lightblack};
      color: ${palette.lightwhite};
      padding: 0.15em 0.5em;
      margin: 0 0 3px 3px;
    }
  }
`;
