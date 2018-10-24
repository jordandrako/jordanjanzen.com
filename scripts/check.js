const branch = require('git-branch');
const fs = require('fs');
const path = require('path');

const isProduction =
  process.argv.indexOf('--production') > -1 || process.argv.indexOf('-p') > -1;
const all = process.argv.indexOf('--all') > -1;
const writeBranch = process.argv.indexOf('--branch') > -1;
const checkEnv = process.argv.indexOf('--env') > -1;

const gitBranch = branch.sync();
const envPath = path.resolve(process.cwd(), '.env');
const requiredEnv = [
  'REACT_APP_PROD_KEY',
  'REACT_APP_STAGING_KEY',
  'REACT_APP_CLOUDINARY_API',
  'REACT_APP_CLOUDINARY_SECRET',
];

const isMaster = branch => {
  if (branch !== 'master') {
    throw new Error(
      `Production scripts must be run from the master branch! Branch: ${branch}`
    );
  }
  return true;
};

const getEnvArr = () => {
  let envString;
  if (fs.existsSync(envPath)) {
    envString = fs.readFileSync(envPath, 'utf8');
  } else {
    throw new Error('.env file not found!');
  }
  let envArr;
  if (envString.indexOf('\r\n') > -1) {
    envArr = envString.split('\r\n');
  } else {
    envArr = envString.split('\n');
  }
  return envArr;
};

const setEnvBranch = (value, env, branchVar = 'REACT_APP_BRANCH') => {
  const branch = branchVar + '=';
  const envValue = branch + value;
  const envArr = Array.isArray(env) ? env : getEnvArr();
  const matchIndexes = [];
  envArr.forEach((env, i) => {
    if (env.indexOf(branch) > -1) {
      matchIndexes.push(i);
    }
  });
  const index = matchIndexes.length > 0 ? matchIndexes[0] : -1;
  if (index > -1) {
    envArr[index] = envValue;
  } else {
    envArr.push(envValue);
  }
  return envArr;
};

const writeEnv = env => {
  const envString = env.join('\n');
  fs.writeFileSync(envPath, envString);
};

const branchFuncs = () => {
  const env = getEnvArr();
  const newEnv = setEnvBranch(gitBranch, env);
  writeEnv(newEnv);
};

const envFuncs = () => {
  const envArr = getEnvArr();
  const isPresent = [];
  let isNotPresent = [];
  requiredEnv.forEach(req => {
    const test = new RegExp(req, 'g');
    envArr.forEach(env => {
      if (env.match(test)) {
        isPresent.push(req);
      } else {
        isNotPresent.push(req);
      }
    });
  });
  isNotPresent = isNotPresent.filter(
    (el, i, arr) => arr.indexOf(el) === i && !isPresent.includes(el)
  );
  if (isPresent.length !== requiredEnv.length) {
    const message = 'MISSING ENV VARIABLES: ' + isNotPresent.join(', ') + '.';
    throw new Error(message);
  }
};

const allFuncs = () => {
  envFuncs();
  branchFuncs();
};

if (writeBranch) {
  branchFuncs();
}

if (checkEnv) {
  envFuncs();
}

if (all || isProduction) {
  if (isProduction) {
    isMaster(gitBranch);
  }
  allFuncs();
}
