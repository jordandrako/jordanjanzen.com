import * as React from "react";
import * as styled from "./CloudImage.styles";
import { ICloudImageProps } from "./CloudImage.types";

export default class CloudImage extends React.Component<ICloudImageProps, any> {
  public static defaultProps = {
    align: null,
    angle: "0",
    background: null,
    bo: null,
    border: true,
    children: null,
    crop: "limit",
    dim: false,
    effects: null,
    format: "jpg",
    gravity: "center",
    height: "ih",
    link: false,
    opacity: "100",
    radius: "0",
    style: null,
    width: "iw"
  };

  public render(): JSX.Element {
    const {
      name,
      publicId,
      format,
      width,
      height,
      crop,
      background,
      gravity,
      opacity,
      angle,
      radius,
      bo,
      effects,
      border,
      align,
      children
    } = this.props;

    const url = `https://res.cloudinary.com/jordan-janzen/image/upload/w_${width},h_${height},c_${crop},g_${gravity},o_${opacity},a_${angle},r_${radius}${
      bo ? `,bo_${bo}` : ""
    }${background ? `,b_${background}` : ""}/${
      effects ? `${effects}/` : ""
    }${publicId}.${format}`;

    if (children) {
      return (
        <styled.Image
          background={url}
          dim={this.props.dim}
          border={this.props.border}
          className={`cloud-image ${this.props.className}`}
        >
          {children}
        </styled.Image>
      );
    }
    return (
      <styled.Img
        src={url}
        alt={name}
        border={border}
        align={align}
        onClick={this._handleClick}
        className={this.props.className}
      />
    );
  }

  private _handleClick = () => {
    this.props.link &&
      window.open(
        `https://res.cloudinary.com/jordan-janzen/image/upload/${
          this.props.publicId
        }.${this.props.format}`
      );
  };
}
