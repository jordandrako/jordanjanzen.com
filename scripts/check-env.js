const checkEnv = require('check-env');
require('dotenv').load();

checkEnv([
  'REACT_APP_PROD_KEY',
  'REACT_APP_STAGING_KEY',
  'REACT_APP_CLOUDINARY_API',
  'REACT_APP_CLOUDINARY_SECRET',
]);
