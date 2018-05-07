import { adjustHue, transparentize } from "polished";
import styled from "styled-components";
import { palette } from "../../theme/theme";
import { ICloudImageStyleProps } from "./CloudImage.types";

export const Image = styled.div`
  background: ${(props: ICloudImageStyleProps) =>
      props.dim
        ? `linear-gradient(135deg,
          ${transparentize(0.5, `${adjustHue(-30, palette.blue)}`)} 0%,
          ${transparentize(0.5, `${palette.blue}`)}
          100%),`
        : null}
    url(${props => props.background}) no-repeat;
  background-size: cover;
  background-position: center top;
  width: 100%;
  height: 100%;
  border: ${props => (props.border ? `3px solid ${palette.black}` : "none")};
  border-radius: ${props => {
    if (props.radius === "max") {
      return "50%";
    }
    return "0";
  }};
`;

export const Img = styled.img`
  border: ${(props: ICloudImageStyleProps) =>
    props.border ? `3px solid ${palette.black}` : "none"};
  border-radius: ${props => {
    if (props.radius === "max") {
      return "50%";
    }
    return "0";
  }};
  cursor: ${(props: ICloudImageStyleProps) => (props.link ? "pointer" : null)};
  ${(props: ICloudImageStyleProps) => {
    if (props.align) {
      return `float: ${props.align}; margin-bottom: 1em;`;
    }
    return null;
  }};
  ${(props: ICloudImageStyleProps) => {
    if (props.align === "left") {
      return `margin-right: 1em;`;
    }
    if (props.align === "right") {
      return `margin-left: 1em;`;
    }
    return null;
  }};
`;
