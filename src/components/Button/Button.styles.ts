import { Link } from "react-router-dom";
import styled from "../../theme/styled-components";
import { fonts, palette, semanticColors } from "../../theme/theme";
import { ButtonType as type, IButtonStyleProps } from "./Button.types";

const buttonTextColor = (props: IButtonStyleProps) =>
  props.color || semanticColors.buttonText;

const buttonBackground = (props: IButtonStyleProps) => {
  if (props.bg) {
    return props.bg;
  }

  let color = semanticColors.buttonColor;

  switch (props.buttonType) {
    case type.success || type.submit:
      color = palette.green;
      break;
    case type.warn:
      color = palette.red;
      break;
    case type.login:
      color = palette.lightblack;
      break;
    case type.cta:
      color = palette.blue;
    default:
      break;
  }

  return color;
};

const borderRadius = (props: IButtonStyleProps) => {
  if (props.circle || props.buttonType === type.delete || props.del) {
    return "100%";
  } else if (props.pill) {
    return "5em";
  }
  return 0;
};

export const Btn = styled.button`
  border: none;
  border-radius: ${borderRadius};
  padding: ${(props: IButtonStyleProps) =>
    !!props.arrows ? "0.25em 0.8em 0.25em 1.5em" : ".5em .8em"};
  position: relative;
  color: ${(props: IButtonStyleProps) => {
    if (props.buttonType === type.cta) {
      return palette.lightwhite;
    } else if (props.color) {
      return props.color;
    }
    return semanticColors.buttonText;
  }};
  font-family: ${fonts.monospace};
  background: ${buttonBackground};
  display: flex;
  justify-content: space-around;

  opacity: ${(props: IButtonStyleProps) =>
    props.buttonType === type.secondary ? 0.75 : 1};
  transform: translateY(0);

  width: ${(props: IButtonStyleProps) => (props.wide ? "100%" : "auto")};
  font-size: ${(props: IButtonStyleProps) => {
    if (props.small) {
      return ".8rem";
    } else if (props.large) {
      return "1.7rem";
    }
    return "1.1rem";
  }};

  transition: all 0.25s ease-in-out;

  &:hover {
    opacity: 1;
    transform: translateY(-2px);
  }

  &.disabled {
    background: ${palette.grey};
    color: ${palette.black};
  }

  i.fa {
    padding-right: 0.75em;
    margin-right: auto;
    align-self: flex-start;
  }

  i.fa.right {
    padding-right: 0;
    padding-left: 0.75em;
  }

  &:before,
  &:after {
    content: "";
    display: ${(props: IButtonStyleProps) =>
      !!props.arrows ? "block" : "none"};
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

export const DelBtn = styled.button`
  font-size: 20px;
  margin: 0 0.5em;
  padding: 0;
  width: 20px;
  height: 20px;
  line-height: 20px;
  opacity: 0.85;
  color: ${palette.red};
  background: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    opacity: 1;
  }
`;

export const A = styled.a`
  border-bottom: 0;
  line-height: 1;
  text-shadow: none;
`;

export const BtnLink = styled(Link)`
  border-bottom: 0;
  line-height: 1;
  text-shadow: none;
`;
