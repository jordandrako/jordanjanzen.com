import * as React from 'react';
import { IProjectProps } from '.';
import { toTitleCase } from '../../../utilities';
import Loading from '../../containers/Loading';
import Button, { ButtonType } from '../Button';
import CloudImage from '../CloudImage';
import * as Styled from './Project.styles';

const imageHeight = '250';

export default class Project extends React.Component<IProjectProps, {}> {
  public constructor(props: IProjectProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { details, index } = this.props;
    if (details.images) {
      const firstImage = Object.keys(details.images)[0];
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
                width="600"
                height={imageHeight}
                crop="fill"
                gravity="north"
                background="rgb:000"
                effects="e_blur:80"
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
                <br />
                {clientIndustry ? (
                  <em>Industry: {toTitleCase(clientIndustry)}</em>
                ) : null}
              </p>
            </Styled.Client>
            <Styled.Skills>
              <Styled.Subheading>
                Category: {toTitleCase(details.category)}
              </Styled.Subheading>
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
              >
                <i className="fa fa-search" aria-hidden="true" /> More Details
              </Button>
            </li>
            {details.link !== '' ? (
              <li>
                <Button
                  href={details.link}
                  target="_blank"
                  small={true}
                  buttonType={ButtonType.Secondary}
                >
                  <i className="fa fa-external-link" aria-hidden="true" /> Visit
                  Site
                </Button>
              </li>
            ) : null}
            {details.repo !== '' ? (
              <li>
                <Button
                  href={details.repo}
                  target="_blank"
                  small={true}
                  buttonType={ButtonType.Secondary}
                >
                  <i className="fa fa-github" aria-hidden="true" /> View Repo
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
