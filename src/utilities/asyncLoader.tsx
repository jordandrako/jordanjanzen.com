import * as Loadable from 'react-loadable';
import Loading from '../components/containers/Loading';

export function asyncLoader(opts: Loadable.Options<any, any>) {
  return Loadable({ ...opts });
}
