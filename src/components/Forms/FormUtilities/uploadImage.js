import superagent from 'superagent';
import sha1 from 'sha1';

function uploadImage(files, cloudinary) {
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

  let image = {};

  uploadRequest.end((err, resp) => {
    if (err) {
      console.error(err);
      return;
    }

    const uploaded = resp.body;

    image = {
      id: uploaded.public_id,
      name: uploaded.original_filename,
      url: uploaded.secure_url,
      format: uploaded.format
    };
  });
  return image;
}

export default uploadImage;
