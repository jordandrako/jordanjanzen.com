import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { toTitleCase } from '../../../utilities';
import { ButtonType } from '../Button';
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

class Banner
  extends React.Component<IBannerProps & RouteComponentProps<any>, IBannerState>
  implements IBanner {
  public constructor(props: IBannerProps & RouteComponentProps<any>) {
    super(props);

    this.state = {
      closed: false,
    };
  }

  public showHide = (): void => {
    this.setState({
      closed: !this.state.closed,
    });
  };

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
            {this._showHideButton()}
            {this._bannerContent()}
            {this._actionButton()}
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

  // private _bannerAction = (): void => {
  //   const { action, history, location } = this.props;
  //   let click;
  //   let text;
  //   switch (action) {
  //     case BannerAction.Reload:
  //       click = history.push(location.pathname);
  //       text = 'Reload';
  //       break;
  //     case BannerAction.Home:
  //       click = history.push('/');
  //       text = 'Go Home';
  //       break;
  //     case BannerAction.Back:
  //       click = history.goBack();
  //       text = 'Go Back';
  //       break;
  //     default:
  //       return;
  //   }
  // };

  private _actionButton = (): JSX.Element | undefined => {
    const { action, actionText, customAction, history } = this.props;
    const renderButton = action !== undefined || customAction !== undefined;
    let click: () => void;
    let text;
    switch (action) {
      case BannerAction.Reload:
        click = () => history.push(location.pathname);
        text = '🔄 Reload';
        break;
      case BannerAction.Home:
        click = () => history.push('/');
        text = '🏠 Go Home';
        break;
      case BannerAction.Back:
        click = () => history.goBack();
        text = '🔙 Go Back';
        break;
      default:
        return;
    }
    return renderButton ? (
      <Styled.actionButton
        buttonType={ButtonType.Subtle}
        text={actionText || text}
        onClick={click}
        small={true}
      />
    ) : (
      undefined
    );
  };
}

export default withRouter(Banner);
