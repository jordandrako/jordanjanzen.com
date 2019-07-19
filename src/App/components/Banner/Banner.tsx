import { History } from 'history';
import * as React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
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

class Banner extends React.Component<IBannerProps, IBannerState>
  implements IBanner {
  public static defaultProps = {
    bannerType: BannerType.Info,
    in: true,
  };

  public static getDerivedStateFromProps(
    nextProps: IBannerProps,
    prevState: IBannerState
  ): IBannerState | null {
    if (!nextProps.in !== prevState.closed) {
      return {
        closed: !nextProps.in,
      };
    }
    return null;
  }

  public constructor(props: IBannerProps) {
    super(props);

    this.state = {
      closed: !this.props.in,
    };
  }

  public showHide = (): void => {
    this.setState(prevState => ({
      closed: !prevState.closed,
    }));
  };

  public render(): JSX.Element {
    const { closed } = this.state;
    const { bannerType, title } = this.props;

    return (
      <Route>
        {(routeProps: RouteComponentProps<any>) => (
          <Transition timeout={200} in={closed}>
            {(status: string) => (
              <Styled.root bannerType={bannerType} className={status}>
                <h4>
                  {title
                    ? title
                    : `${toTitleCase(BannerType[bannerType])} Message`}
                </h4>
                {this._showHideButton()}
                {this._bannerContent()}
                {this._actionButton(routeProps.history)}
              </Styled.root>
            )}
          </Transition>
        )}
      </Route>
    );
  }

  private _showHideButton = (): JSX.Element => (
    <Styled.showHide onClick={this.showHide}>
      <span className='horizontal' />
      <span className='vertical' />
    </Styled.showHide>
  );

  private _bannerContent = (): JSX.Element => <p>{this.props.children}</p>;

  private _actionButton = (history: History): JSX.Element | null => {
    const { action, actionText, customAction } = this.props;
    const renderButton = action !== undefined || customAction !== undefined;
    let click: () => void;
    let text;
    switch (action) {
      case BannerAction.Reload:
        click = () => history.push(window.location.pathname);
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
        return null;
    }
    return renderButton ? (
      <Styled.actionButton
        buttonType={ButtonType.Subtle}
        text={actionText || text}
        onClick={click}
        small={true}
      />
    ) : null;
  };
}

export default Banner;
