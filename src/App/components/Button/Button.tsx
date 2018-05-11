import * as React from 'react';
import * as styled from './Button.styles';
import {
  ButtonType as bType,
  IButtonProps,
  IButtonStyleProps,
} from './Button.types';

export default class Button extends React.Component<IButtonProps, {}> {
  private _button: any;

  public constructor(props: IButtonProps) {
    super(props);
    this._button = React.createRef();
  }

  public focus(): void {
    if (this._button.current) {
      this._button.current.focus();
    }
  }

  public render(): JSX.Element {
    const styleProps: IButtonStyleProps = {
      arrows: this.props.arrows,
      bg: this.props.bg,
      buttonType: this.props.buttonType,
      circle: this.props.circle,
      color: this.props.color,
      del: this.props.del,
      large: this.props.large,
      pill: this.props.pill,
      small: this.props.small,
      wide: this.props.wide,
    };

    if (this.props.buttonType === bType.delete) {
      if (this.props.to) {
        return (
          <styled.LinkButton to={this.props.to} innerRef={this._button}>
            <styled.DeleteButton
              {...styleProps}
              className="fa fa-times-circle close"
            />
          </styled.LinkButton>
        );
      }
      return (
        <styled.DeleteButton
          {...styleProps}
          className="fa fa-times-circle close"
          innerRef={this._button}
        />
      );
    }

    if (this.props.href) {
      return (
        <styled.AnchorButton
          href={this.props.href}
          target={this.props.target}
          rel={
            this.props.rel || this.props.target === '_blank'
              ? 'noopener noreferrer'
              : ''
          }
          innerRef={this._button}
        >
          <styled.BaseButton {...styleProps}>
            {this.props.text || this.props.children || 'Button'}
          </styled.BaseButton>
        </styled.AnchorButton>
      );
    }

    if (this.props.to) {
      return (
        <styled.LinkButton to={this.props.to}>
          <styled.BaseButton {...styleProps}>
            {this.props.text || this.props.children || 'Button'}
          </styled.BaseButton>
        </styled.LinkButton>
      );
    }

    return (
      <styled.BaseButton
        {...styleProps}
        type={this.props.type ? this.props.type : undefined}
      >
        {this.props.text || this.props.children || 'Button'}
      </styled.BaseButton>
    );
  }
}
