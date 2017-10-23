import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import sha1 from 'sha1';
import superagent from 'superagent';

import cloudinaryApi from '../cloudinary';

class ImageDropzone extends Component {
  constructor(props) {
    super(props);
    this.uploadFile = this.uploadFile.bind(this);
  }

  uploadFile(files) {
    console.log(files)
    const file = files[0];

    const cloudName = 'jordan-janzen';
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

    const timestamp = Date.now() / 1000;
    const uploadPreset = 'gmyz0it7';

    const paramsStr = `timestamp=${timestamp}&upload_preset=${uploadPreset}${cloudinaryApi.secret}`;
    const signature = sha1(paramsStr);

    const params = {
      'api_key': cloudinaryApi.key,
      'upload_preset': uploadPreset,
      'signature': signature,
      'timestamp': timestamp,
    }

    const uploadRequest = superagent.post(url);
    uploadRequest.attach('file', file);

    Object.keys(params).forEach((key) => {
      uploadRequest.field(key, params[key])
    })

    uploadRequest.end((err, resp) => {
      if (err) {
        console.error(err);
        return;
      }

      const uploaded = resp.body;
      const image = {
        id: uploaded.public_id,
        name: uploaded.original_filename,
        url: uploaded.secure_url,
        format: uploaded.format,
      };

      this.props.addImage(image);
    })
  }

  render() {
    return (
      <div>
        <h4>Upload Images</h4>
        <Dropzone onDrop={this.uploadFile} accept={this.props.accept} />
        <h4>Uploaded Images</h4>
      </div>
    );
  }
}

ImageDropzone.propTypes = {
  addImage: PropTypes.func.isRequired,
  accept: PropTypes.string.isRequired,
}

export default ImageDropzone;