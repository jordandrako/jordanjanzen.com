import * as React from 'react';
import * as superagent from 'superagent';
import * as Styled from './Dropzone.styles';
import { IDropzoneProps } from './Dropzone.types';
const sha1 = require('sha1');

class ImageDropzone extends React.Component<IDropzoneProps, {}> {
  public constructor(props: IDropzoneProps) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div>
        <h4>Upload Images</h4>
        <Styled.zone onDrop={this._uploadFile} accept={this.props.accept} />
        <h4>Uploaded Images</h4>
      </div>
    );
  }

  private _uploadFile = (files: any[]): void => {
    const cloudinary = {
      api: process.env.REACT_APP_CLOUDINARY_API,
      secret: process.env.REACT_APP_CLOUDINARY_SECRET,
    };

    const file = files[0];

    const cloudName = 'jordan-janzen';
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

    const timestamp = Date.now() / 1000;
    const uploadPreset = 'gmyz0it7';

    const paramsStr = `timestamp=${timestamp}&upload_preset=${uploadPreset}${
      cloudinary.secret
    }`;
    const signature = sha1(paramsStr);

    // Disable tslint since the Cloudinary API requires these in a specific order.
    // tslint:disable:object-literal-sort-keys
    const params = {
      api_key: cloudinary.api,
      upload_preset: uploadPreset,
      signature,
      timestamp,
    };
    // tslint:enable

    const uploadRequest = superagent.post(url);
    uploadRequest.attach('file', file);

    Object.keys(params).forEach(key => {
      uploadRequest.field(key, params[key]);
    });

    uploadRequest.end((err, resp) => {
      if (err) {
        // throw err;
        return;
      }

      const uploaded = resp.body;

      const image = {
        format: uploaded.format,
        id: uploaded.public_id,
        name: uploaded.original_filename,
        url: uploaded.secure_url,
      };

      this.props.addImage(image);
    });
  };
}

export default ImageDropzone;
