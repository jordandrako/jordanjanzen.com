import * as React from 'react';
import * as Styled from './Button.styles';
import { ButtonType, IButtonProps, IButtonStyleProps } from './Button.types';

const Button: React.SFC<IButtonProps> = props => {
  const {
    arrows,
    bg,
    buttonType,
    children,
    circle,
    className,
    color,
    disabled,
    href,
    icon,
    iconReverse,
    large,
    pill,
    rel,
    small,
    style,
    target,
    text,
    to,
    type,
    wide,
  } = props;

  const styleProps: IButtonStyleProps = {
    arrows,
    bg,
    buttonType,
    circle,
    color,
    disabled,
    icon,
    iconReverse,
    large,
    pill,
    small,
    wide,
  };

  const buttonText = [
    icon && (
      <Styled.buttonIcon className={`fa fa-${icon}`} aria-hidden="true" />
    ),
    text || children || 'Button',
    iconReverse && (
      <Styled.buttonIcon
        className={`fa fa-${iconReverse}`}
        aria-hidden="true"
        iconReverse={iconReverse}
      />
    ),
  ];

  const onClick = disabled ? undefined : props.onClick;

  const baseProps = {
    className,
    onClick,
    style,
    type,
  };

  const BaseButton = (
    <Styled.baseButton {...props}>{buttonText}</Styled.baseButton>
  );

  if (buttonType === ButtonType.Delete) {
    if (to) {
      return (
        <Styled.linkWrapper to={to}>
          <Styled.deleteButton
            {...styleProps}
            className={`fa fa-times-circle close ${className}`}
            onClick={onClick}
          />
        </Styled.linkWrapper>
      );
    }

    return (
      <Styled.deleteButton
        {...styleProps}
        {...baseProps}
        className={`fa fa-times-circle close ${className}`}
        onClick={onClick}
      />
    );
  }

  if (href) {
    return (
      <Styled.anchorWrapper
        href={href}
        target={target}
        rel={rel || target === '_blank' ? 'noopener noreferrer' : ''}
      >
        {BaseButton}
      </Styled.anchorWrapper>
    );
  }

  if (to) {
    return <Styled.linkWrapper to={to}>{BaseButton}</Styled.linkWrapper>;
  }

  return BaseButton;
};

export default Button;
