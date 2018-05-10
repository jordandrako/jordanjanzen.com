import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import sha1 from 'sha1';
import superagent from 'superagent';
import styled from 'styled-components';

import { semanticColors, fonts } from '../../../styling/theme';

const Zone = styled(Dropzone)`
  height: 100px;
  border: 3px dashed ${semanticColors.textColor};
  margin-bottom: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:before {
    content: 'Upload Files Here';
    font-family: ${fonts.monospace};
    font-weight: 700;
    color: ${semanticColors.textColor};
    opacity: 0.7;
  }
`;

class ImageDropzone extends Component {
  constructor(props) {
    super(props);
    this.uploadFile = this.uploadFile.bind(this);
  }

  uploadFile(files) {
    const { cloudinary } = this.props;
    console.log(files);
    const file = files[0];

    const cloudName = 'jordan-janzen';
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

    const timestamp = Date.now() / 1000;
    const uploadPreset = 'gmyz0it7';

    const paramsStr = `timestamp=${timestamp}&upload_preset=${uploadPreset}${cloudinary.secret}`;
    const signature = sha1(paramsStr);

    const params = {
      api_key: cloudinary.key,
      upload_preset: uploadPreset,
      signature,
      timestamp
    };

    const uploadRequest = superagent.post(url);
    uploadRequest.attach('file', file);

    Object.keys(params).forEach((key) => {
      uploadRequest.field(key, params[key]);
    });

    console.log(uploadRequest.resp);

    uploadRequest.end((err, resp) => {
      if (err) {
        console.error(err);
        return;
      }

      const uploaded = resp.body;
      console.log(resp.body);
      const image = {
        id: uploaded.public_id,
        name: uploaded.original_filename,
        url: uploaded.secure_url,
        format: uploaded.format
      };

      this.props.addImage(image);
    });
  }

  public render(): JSX.Element {
    return (
      <div>
        <h4>Upload Images</h4>
        <Zone onDrop={this.uploadFile} accept={this.props.accept} />
        <h4>Uploaded Images</h4>
      </div>
    );
  }
}

ImageDropzone.propTypes = {
  addImage: PropTypes.func.isRequired,
  accept: PropTypes.string.isRequired,
  cloudinary: PropTypes.shape({
    key: PropTypes.string,
    secret: PropTypes.string
  })
};

ImageDropzone.defaultProps = {
  cloudinary: {
    key: undefined,
    secrect: undefined
  }
};

export default ImageDropzone;
