import reactLoadable from 'react-loadable';
import Loading from './containers/Loading';

export default function myLoadable(opts) {
  return reactLoadable(
    Object.assign(
      {
        loading: Loading,
        delay: 200,
        timeout: 5000
      },
      opts
    )
  );
}
