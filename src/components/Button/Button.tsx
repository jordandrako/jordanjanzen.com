import * as React from 'react';
import * as styled from './Button.styles';
import {
  ButtonType as bType,
  IButtonProps,
  IButtonStyleProps,
} from './Button.types';

export default class Button extends React.Component<IButtonProps, {}> {
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
          <styled.BtnLink to={this.props.to}>
            <styled.DelBtn
              {...styleProps}
              className="fa fa-times-circle close"
            />
          </styled.BtnLink>
        );
      }
      return (
        <styled.DelBtn {...styleProps} className="fa fa-times-circle close" />
      );
    }

    if (this.props.href) {
      return (
        <styled.A
          href={this.props.href}
          target={this.props.target}
          rel={
            this.props.rel || this.props.target === '_blank'
              ? 'noopener noreferrer'
              : ''
          }
        >
          <styled.Btn {...styleProps}>
            {this.props.text || this.props.children || 'Button'}
          </styled.Btn>
        </styled.A>
      );
    }

    if (this.props.to) {
      return (
        <styled.BtnLink to={this.props.to}>
          <styled.Btn {...styleProps}>
            {this.props.text || this.props.children || 'Button'}
          </styled.Btn>
        </styled.BtnLink>
      );
    }

    return (
      <styled.Btn
        {...styleProps}
        type={this.props.type ? this.props.type : undefined}
      >
        {this.props.text || this.props.children || 'Button'}
      </styled.Btn>
    );
  }
}
