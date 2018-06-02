import { isLoggedIn } from 'base';
import * as React from 'react';
import DocumentTitle from 'react-document-title';
import { palette } from 'styling';
import Loading from '../../../containers/Loading';
import Button, { ButtonType } from '../../Button';
import CloudImage from '../../CloudImage';
import { IProjectSingleProps } from '../Project.types';
import * as Styled from './ProjectSingle.styles';

interface IProjectSingleState {
  delete?: string;
}

export default class ProjectSingle extends React.Component<
  IProjectSingleProps,
  IProjectSingleState
> {
  public static getDerivedStateFromProps(
    nextProps: IProjectSingleProps,
    prevState: IProjectSingleState
  ) {
    if (nextProps.index !== prevState.delete) {
      return { delete: undefined };
    }
    return null;
  }
  constructor(props: IProjectSingleProps) {
    super(props);
    this.state = {
      delete: undefined,
    };
  }

  public render(): JSX.Element {
    const { projects, details, index, isMobile } = this.props;

    const total = Object.keys(projects).length - 1;

    const current = Object.keys(projects).indexOf(index);

    const nextIndex = current === total ? 0 : current + 1;

    const prevIndex = current === 0 ? total : current - 1;

    const prevId = Object.keys(projects)[nextIndex];

    const nextId = Object.keys(projects)[prevIndex];

    if (details && index) {
      return (
        <DocumentTitle title={`${details.name} | Jordan Janzen`}>
          <div key={index}>
            <Styled.ClickOutside to="/portfolio" />
            <Styled.Container>
              <Styled.Single>
                <Styled.Frame>
                  <Styled.Title>{details.name || 'Project'}</Styled.Title>
                  <Button
                    to="/portfolio"
                    buttonType={ButtonType.Delete}
                    style={{ margin: 0 }}
                  />
                </Styled.Frame>
                <Styled.Content>
                  <p>{details.long_desc}</p>
                  {Object.keys(details.images).map((image, imageIndex) => (
                    <CloudImage
                      key={details.images[image].id}
                      name={`Feature ${imageIndex} ${details.images[image].id}`}
                      publicId={details.images[image].id}
                      format={details.images[image].format}
                      width={isMobile ? '400' : '800'}
                      crop="limit"
                      link={true}
                    />
                  ))}
                </Styled.Content>
                <Styled.Frame>
                  <Button
                    to={`/portfolio/${prevId}`}
                    small={true}
                    buttonType={ButtonType.Secondary}
                    icon="arrow-left"
                  >
                    {isMobile ? '' : 'prev'}
                  </Button>
                  {details.link !== '' ? (
                    <Button
                      href={details.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      small={true}
                      buttonType={ButtonType.Secondary}
                      icon={!isMobile && 'external-link'}
                    >
                      Visit Site
                    </Button>
                  ) : null}
                  {details.repo !== '' ? (
                    <Button
                      href={details.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      small={true}
                      buttonType={ButtonType.Secondary}
                      icon={!isMobile && 'github'}
                    >
                      View Repo
                    </Button>
                  ) : null}
                  {isLoggedIn() && !isMobile ? (
                    <Button
                      small={true}
                      buttonType={ButtonType.Secondary}
                      bg={palette.red}
                      onClick={this._handleDelete}
                    >
                      {this.state.delete ? 'Confirm?' : 'Delete'}
                    </Button>
                  ) : null}
                  <Button
                    to={`/portfolio/${nextId}`}
                    small={true}
                    buttonType={ButtonType.Secondary}
                    iconReverse="arrow-right"
                  >
                    {isMobile ? '' : 'next'}
                  </Button>
                </Styled.Frame>
              </Styled.Single>
            </Styled.Container>
          </div>
        </DocumentTitle>
      );
    }
    return <Loading isLoading={true} />;
  }

  private _removeProject = (key: string) => {
    this.setState(prevState => ({
      ...prevState,
      delete: undefined,
    }));
    this.props.removeProject(key);
    return this.props.history.push('/portfolio');
  };

  private _handleDelete = () => {
    const { index } = this.props;
    if (this.state.delete === undefined) {
      return this.setState({ delete: index });
    }
    return this._removeProject(index);
  };
}
