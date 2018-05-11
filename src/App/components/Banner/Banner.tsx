import * as React from 'react';
import { Transition } from 'react-transition-group';
import { toTitleCase } from '../../../utilities';
import * as Styled from './Banner.styles';
import {
  BannerAction,
  BannerType,
  IBanner,
  IBannerProps,
} from './Banner.types';

interface IBannerState {
  closed: boolean;
}

export default class Banner extends React.Component<IBannerProps, IBannerState>
  implements IBanner {
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
    const { type = BannerType.Info, title } = this.props;

    return (
      <Transition timeout={200} in={closed}>
        {(status: string) => (
          <Styled.root type={type} className={status}>
            <h4>
              {title ? title : `${toTitleCase(BannerType[type])} Message`}
            </h4>
            {this._showHideButton}
            {this._bannerContent}
            {this._actionButton}
          </Styled.root>
        )}
      </Transition>
    );
  }

  private _showHideButton = (): JSX.Element => (
    <Styled.showHide onClick={this.showHide}>
      <span className="horizontal" />
      <span className="vertical" />
    </Styled.showHide>
  );

  private _bannerContent = (): JSX.Element => <p>{this.props.children}</p>;

  private _bannerAction = (): void => {
    const { action } = this.props;
    if (action) {
      if (typeof action !== 'function') {
        if (action === BannerAction.Reload) {
          return; // TODO: make reload function
        }
      }
      action();
    }
  };

  private _actionButton = () => {
    const { action, actionText } = this.props;
    if (action) {
      return (
        <Styled.actionButton
          text={actionText || 'Action'}
          onClick={this._bannerAction}
        />
      );
    }
    return undefined;
  };
}
