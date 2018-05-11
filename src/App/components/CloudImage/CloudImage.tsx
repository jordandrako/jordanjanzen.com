import * as React from 'react';
import * as Styled from './CloudImage.styles';
import { ICloudImageProps } from './CloudImage.types';

export default class CloudImage extends React.Component<ICloudImageProps, {}> {
  public render(): JSX.Element {
    const { align = null, border = true, children = null, name } = this.props;

    if (children) {
      return this._renderContainerImage();
    }

    return (
      <Styled.image
        src={this._getURL()}
        alt={name}
        border={border}
        align={align}
        onClick={this._handleClick}
        className={this.props.className}
      />
    );
  }

  private _getURL = (): string => {
    const {
      angle = 0,
      background = null,
      bo = null,
      crop = 'limit',
      effects = null,
      format = 'jpg',
      gravity = 'center',
      height = 'ih',
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

    return url;
  };

  private _renderContainerImage = (): JSX.Element => (
    <Styled.imageContainer
      background={this._getURL()}
      dim={this.props.dim}
      border={this.props.border}
      className={`cloud-image ${this.props.className}`}
    >
      {this.props.children}
    </Styled.imageContainer>
  );

  private _handleClick = (ev: any) => {
    this.props.link &&
      window.open(
        `https://res.cloudinary.com/jordan-janzen/image/upload/${
          this.props.publicId
        }.${this.props.format}`
      );
  };
}
