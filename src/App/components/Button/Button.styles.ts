import { Link } from 'react-router-dom';
import { fonts, palette, semanticColors, styled } from 'styling';
import { ButtonType, IButtonStyleProps } from './Button.types';

const buttonTextColor = (props: IButtonStyleProps) => {
  if (props.disabled) {
    return palette.grey;
  }
  if (props.color) {
    return props.color;
  }
  if (props.buttonType === ButtonType.Cta) {
    return palette.lightwhite;
  }
  if (props.buttonType === ButtonType.Subtle) {
    return palette.white;
  }
  return semanticColors.buttonText;
};

const buttonBackground = (props: IButtonStyleProps) => {
  if (props.disabled) {
    return palette.white;
  }
  if (props.bg) {
    return props.bg;
  }

  let color;

  switch (props.buttonType) {
    case ButtonType.Success || ButtonType.Submit:
      color = palette.green;
      break;
    case ButtonType.Warn:
      color = palette.red;
      break;
    case ButtonType.Login:
      color = palette.lightblack;
      break;
    case ButtonType.Cta:
      color = palette.blue;
      break;
    case ButtonType.Subtle:
      color = palette.grey;
      break;
    default:
      color = semanticColors.buttonBackground;
      break;
  }

  return color;
};

const borderRadius = (props: IButtonStyleProps) => {
  if (props.circle || props.buttonType === ButtonType.Delete) {
    return '100%';
  }
  if (props.pill) {
    return '5em';
  }
  return 0;
};

export const baseButton = styled.button`
  border: none;
  border-radius: ${borderRadius};
  padding: ${(props: IButtonStyleProps) =>
    !!props.arrows ? '0.25em 0.8em 0.25em 1.5em' : '.5em .8em'};
  position: relative;
  ${props => !!props.arrows && 'left: -.25em;'}
  color: ${buttonTextColor};
  font-family: ${fonts.monospace};
  background: ${buttonBackground};
  display: flex;
  justify-content: space-around;

  opacity: ${(props: IButtonStyleProps) =>
    props.buttonType === ButtonType.Secondary ? 0.75 : 1};
  transform: translateY(0);

  width: ${(props: IButtonStyleProps) => (props.wide ? '100%' : 'auto')};
  font-size: ${(props: IButtonStyleProps) => {
    if (props.small) {
      return '.8rem';
    }
    if (props.large) {
      return '1.7rem';
    }
    return '1.1rem';
  }};

  transition: ${(props: IButtonStyleProps) =>
    !props.disabled && 'all 0.25s ease-in-out'};

  &:hover {
    opacity: ${(props: IButtonStyleProps) => !props.disabled && '1'};
    transform: ${(props: IButtonStyleProps) =>
      !props.disabled && 'translateY(-2px)'};
  }

  &:before,
  &:after {
    content: '';
    display: ${(props: IButtonStyleProps) =>
      !!props.arrows ? 'block' : 'none'};
    position: absolute;
    top: 50%;
    width: 1.2em;
    height: 1.2em;
    transition: all 0.25s ease-in;
  }

  &:before {
    transform: translateY(-50%) scaleX(0.75) rotate(45deg);
    background: ${(props: IButtonStyleProps) =>
      (props.arrows as string) || buttonTextColor};
    left: -0.6em;
  }

  &:after {
    transform: translateY(-50%) scaleX(0.75) rotate(45deg);
    background: ${buttonBackground};
    right: -0.6em;
  }
`;

export const buttonIcon = styled.i`
  padding: ${(props: IButtonStyleProps) =>
    props.iconReverse ? '0 0 0 0.75em' : '0 0.75em 0 0'};
  margin: ${(props: IButtonStyleProps) =>
    props.iconReverse ? '0 0 0 auto' : '0 auto 0 0'};
`;

export const deleteButton = styled.button`
  font-size: 20px;
  margin: 0 0.5em;
  padding: 0;
  width: 20px;
  height: 20px;
  line-height: 20px;
  opacity: 0.85;
  color: ${(props: IButtonStyleProps) =>
    props.disabled ? palette.grey : palette.red};
  background: ${palette.black};
  border: none;
  border-radius: 50%;
  cursor: ${(props: IButtonStyleProps) => !props.disabled && 'pointer'};
  transition: all 0.25s ease;

  &:hover {
    opacity: ${(props: IButtonStyleProps) => !props.disabled && '1'};
  }
`;

export const anchorWrapper = styled.a`
  border-bottom: 0;
  line-height: 1;
  text-shadow: none;
`;

export const linkWrapper = styled(Link)`
  border-bottom: 0;
  line-height: 1;
  text-shadow: none;
`;
