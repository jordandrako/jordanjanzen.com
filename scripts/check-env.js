const checkEnv = require('check-env');
require('dotenv').load();

checkEnv(['REACT_APP_PROD_KEY', 'REACT_APP_STAGING_KEY']);
