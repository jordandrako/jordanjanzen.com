import * as reactLoadable from 'react-loadable';
import Loading from './containers/Loading';

const Loader = (opts: any) =>
  reactLoadable({
    delay: 200,
    loading: Loading,
    timeout: 5000,
    ...opts,
  });

export default Loader;
