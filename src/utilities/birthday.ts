import * as moment from 'moment';

export const birthday = (date: string, format: string = 'YYYYMMDD'): number => {
  const Moment = moment(date, format);
  return Math.floor((moment().unix() - Moment.unix()) / 3.15569e7);
};
