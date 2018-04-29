import reactLoadable from 'react-loadable';
import Loading from './containers/Loading';

export default function myLoadable(opts) {
  return reactLoadable(
    Object.assign(
      {
        delay: 200,
        loading: Loading,
        timeout: 5000
      },
      opts
    )
  );
}
