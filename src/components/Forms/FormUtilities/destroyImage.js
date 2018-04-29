import superagent from 'superagent';
import sha1 from 'sha1';

function destroyImage(id, cloudinary) {
  // TODO: move cloudName to db
  const cloudName = 'jordan-janzen';
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`;

  const timestamp = Date.now() / 1000;

  const paramsStr = `timestamp=${timestamp}${cloudinary.secret}`;
  const signature = sha1(paramsStr);

  const params = {
    public_id: id,
    timestamp,
    api_key: cloudinary.key,
    signature
  };

  const uploadRequest = superagent.post(url);
  // .send(`public_id=${id}`)
  // .send(`timestamp=${timestamp}`)
  // .send(`api_key=${cloudinary.key}`)
  // .send(`signature=${signature}`);

  Object.keys(params).forEach((key) => {
    uploadRequest.field(key, params[key]);
  });

  uploadRequest.end((err, resp) => {
    if (err) {
      console.error(err);
      return;
    }

    return resp.body;
  });
}

export default destroyImage;
