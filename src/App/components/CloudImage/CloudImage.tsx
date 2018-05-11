import * as React from 'react';
import * as Styled from './CloudImage.styles';
import { ICloudImageProps } from './CloudImage.types';

export default class CloudImage extends React.Component<ICloudImageProps, {}> {
  public render(): JSX.Element {
    const {
      align = null,
      angle = 0,
      background = null,
      bo = null,
      border = true,
      children = null,
      crop = 'limit',
      effects = null,
      format = 'jpg',
      gravity = 'center',
      height = 'ih',
      name,
      opacity = '100',
      publicId,
      radius = '0',
      width = 'iw',
    } = this.props;

    const url = `https://res.cloudinary.com/jordan-janzen/image/upload/w_${width},h_${height},c_${crop},g_${gravity},o_${opacity},a_${angle},r_${radius}${
      bo ? `,bo_${bo}` : ''
    }${background ? `,b_${background}` : ''}/${
      effects ? `${effects}/` : ''
    }${publicId}.${format}`;

    if (children) {
      return (
        <Styled.imageContainer
          background={url}
          dim={this.props.dim}
          border={this.props.border}
          className={`cloud-image ${this.props.className}`}
        >
          {children}
        </Styled.imageContainer>
      );
    }
    return (
      <Styled.image
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
