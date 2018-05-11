import * as Loadable from 'react-loadable';

export function asyncLoader(opts: Loadable.Options<any, any>) {
  return Loadable({ ...opts });
}
