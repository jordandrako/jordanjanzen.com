import Loadable from 'react-loadable';
import Loading from './containers/Loading';

export function MyLoadable(opts) {
  return Loadable(
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

export default MyLoadable;
