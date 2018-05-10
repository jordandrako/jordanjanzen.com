import * as React from 'react';
import { Transition } from 'react-transition-group';
import { toTitleCase } from '../../helpers';

import { IBanner, IBannerProps } from './Banner.types';

import { Alert } from './Banner.styles';

interface IBannerState {
  closed: boolean;
}

export default class Banner extends React.Component<IBannerProps, IBannerState>
  implements IBanner {
  public static defaultProps = {
    type: 'info',
  };

  public constructor(props: any) {
    super(props);
    this.showHide = this.showHide.bind(this);

    this.state = {
      closed: false,
    };
  }

  public showHide(): void {
    this.setState({
      closed: !this.state.closed,
    });
  }

  public render(): JSX.Element {
    const { closed } = this.state;

    return (
      <Transition timeout={200} in={closed}>
        {(status: string) => (
          <Alert type={this.props.type} className={status}>
            <h4>
              {this.props.title
                ? this.props.title
                : `${toTitleCase(this.props.type)} Message`}
            </h4>
            {this._showHideButton}
            {this._bannerContent}
          </Alert>
        )}
      </Transition>
    );
  }

  private _showHideButton = (): JSX.Element => (
    <button className="showHide" onClick={this.showHide}>
      <span className="horizontal" />
      <span className="vertical" />
    </button>
  );

  private _bannerContent = (): JSX.Element => <p>{this.props.children}</p>;
}
