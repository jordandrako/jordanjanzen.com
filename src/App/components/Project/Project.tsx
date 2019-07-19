import * as React from 'react';
import { toTitleCase } from '../../../utilities';
import Loading from '../../containers/Loading';
import Button, { ButtonType } from '../Button';
import CloudImage from '../CloudImage';
import * as Styled from './Project.styles';
import { IProjectProps } from './Project.types';

const imageHeight = '250';

export default class Project extends React.Component<IProjectProps, {}> {
  public render(): JSX.Element {
    const { details, projectId: index } = this.props;
    if (details && details.images) {
      const firstImage: string = Object.keys(details.images)[0];
      const {
        id: imageId,
        format: imageFormat,
        name: imageName,
      } = details.images[firstImage];

      const { name: clientName, industry: clientIndustry } = details.client;
      return (
        <Styled.Item key={index} {...this.props}>
          <Styled.ThumbnailLink to={`/portfolio/${index}`}>
            <Styled.Thumbnail>
              <CloudImage
                publicId={imageId}
                format={imageFormat}
                name={imageName}
                width='600'
                height={imageHeight}
                crop='fill'
                gravity='north'
                background='rgb:000'
                effects='e_blur:80'
                dim={true}
              >
                <Styled.ProjectTitle>{details.name}</Styled.ProjectTitle>
              </CloudImage>
            </Styled.Thumbnail>
          </Styled.ThumbnailLink>
          <Styled.Details>
            <Styled.Client>
              <Styled.Subheading>Client:</Styled.Subheading>
              <p>
                {toTitleCase(clientName)}
                {clientIndustry && (
                  <>
                    <br />
                    <em>Industry: {toTitleCase(clientIndustry)}</em>
                  </>
                )}
              </p>
            </Styled.Client>
            <Styled.Skills>
              {details.year && (
                <Styled.Subheading>Year: {details.year}</Styled.Subheading>
              )}
              {details.category && (
                <Styled.Subheading>
                  Category: {toTitleCase(details.category)}
                </Styled.Subheading>
              )}
              <ul>
                {details.skills &&
                  details.skills.map(
                    skill => skill && <li key={skill}>{skill}</li>
                  )}
              </ul>
            </Styled.Skills>
          </Styled.Details>
          <Styled.Description>{details.short_desc}</Styled.Description>
          <Styled.Buttons>
            <li>
              <Button
                to={`/portfolio/${index}`}
                small={true}
                buttonType={ButtonType.Primary}
                icon='search'
              >
                More Details
              </Button>
            </li>
            {details.link !== '' ? (
              <li>
                <Button
                  href={details.link}
                  target='_blank'
                  small={true}
                  buttonType={ButtonType.Secondary}
                  icon='external-link'
                >
                  Visit Site
                </Button>
              </li>
            ) : null}
            {details.repo !== '' ? (
              <li>
                <Button
                  href={details.repo}
                  target='_blank'
                  small={true}
                  buttonType={ButtonType.Secondary}
                  icon='github'
                >
                  View Repo
                </Button>
              </li>
            ) : null}
          </Styled.Buttons>
        </Styled.Item>
      );
    }
    return <Loading isLoading={true} />;
  }
}
