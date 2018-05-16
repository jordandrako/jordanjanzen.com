import * as React from 'react';
import * as Styled from './Button.styles';
import {
  ButtonType as bType,
  IButtonProps,
  IButtonStyleProps,
} from './Button.types';

export default class Button extends React.Component<IButtonProps, {}> {
  public constructor(props: IButtonProps) {
    super(props);
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

    if (this.props.buttonType === bType.Delete) {
      if (this.props.to) {
        return (
          <Styled.linkWrapper to={this.props.to}>
            <Styled.DeleteButton
              {...styleProps}
              className="fa fa-times-circle close"
              onClick={this.props.onClick}
            />
          </Styled.linkWrapper>
        );
      }
      return (
        <Styled.DeleteButton
          {...styleProps}
          className="fa fa-times-circle close"
          onClick={this.props.onClick}
        />
      );
    }

    if (this.props.href) {
      return (
        <Styled.anchorWrapper
          href={this.props.href}
          target={this.props.target}
          rel={
            this.props.rel || this.props.target === '_blank'
              ? 'noopener noreferrer'
              : ''
          }
        >
          <Styled.BaseButton {...styleProps}>
            {this.props.text || this.props.children || 'Button'}
          </Styled.BaseButton>
        </Styled.anchorWrapper>
      );
    }

    if (this.props.to) {
      return (
        <Styled.linkWrapper to={this.props.to}>
          <Styled.BaseButton {...styleProps}>
            {this.props.text || this.props.children || 'Button'}
          </Styled.BaseButton>
        </Styled.linkWrapper>
      );
    }

    return (
      <Styled.BaseButton
        {...styleProps}
        type={this.props.type ? this.props.type : undefined}
        onClick={this.props.onClick}
      >
        {this.props.text || this.props.children || 'Button'}
      </Styled.BaseButton>
    );
  }
}
