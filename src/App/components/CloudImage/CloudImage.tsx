import * as React from 'react';
import * as Styled from './CloudImage.styles';
import { ICloudImageProps, ICloudImageStyleProps } from './CloudImage.types';

export default class CloudImage extends React.Component<ICloudImageProps, {}> {
  public static defaultProps = {
    angle: 0,
    border: true,
    crop: 'limit',
    effects: null,
    format: 'jpg',
    gravity: 'center',
    height: 'ih',
    opacity: '100',
    radius: '0',
    width: 'iw',
  };

  private _styleProps: ICloudImageStyleProps;

  public constructor(props: ICloudImageProps) {
    super(props);

    this._styleProps = {
      align: this.props.align,
      background: this.props.background,
      border: !!this.props.border,
      dim: !!this.props.dim,
      link: !!this.props.link,
      radius: this.props.radius,
    };
  }

  public render(): JSX.Element {
    const { children, name, style } = this.props;

    if (children) {
      return this._renderContainerImage();
    }

    return (
      <Styled.image
        {...this._styleProps}
        src={this._getURL()}
        alt={name}
        onClick={this._handleClick}
        className={this.props.className}
        style={{ ...style }}
      />
    );
  }

  private _getURL = (): string => {
    const {
      angle,
      background,
      bo,
      crop,
      effects,
      format,
      gravity,
      height,
      opacity,
      publicId,
      radius,
      width,
    } = this.props;

    const url = `https://res.cloudinary.com/jordan-janzen/image/upload/w_${width},h_${height},c_${crop},g_${gravity},o_${opacity},a_${angle},r_${radius}${
      bo ? `,bo_${bo}` : ''
    }${background ? `,b_${background}` : ''}/${
      effects ? `${effects}/` : ''
    }${publicId}.${format}`;

    return url;
  };

  private _renderContainerImage = (): JSX.Element => {
    const { children, className, style } = this.props;
    return (
      <Styled.imageContainer
        {...this._styleProps}
        background={this._getURL()}
        className={`cloud-image ${className}`}
        style={{ ...style }}
      >
        {children}
      </Styled.imageContainer>
    );
  };

  private _handleClick = (ev: any) => {
    this.props.link &&
      window.open(
        `https://res.cloudinary.com/jordan-janzen/image/upload/${
          this.props.publicId
        }.${this.props.format}`
      );
  };
}
