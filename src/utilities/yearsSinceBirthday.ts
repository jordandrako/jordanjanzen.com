import * as moment from 'moment';

/**
 * Calculates the age, or years since a date, rounded down.
 * @param {string | number} date The birthday to calculate age.
 * @param {string} format The format of the date used. @default 'YYYYMMDD'
 */
export const yearsSinceBirthday = (
  date: string | number,
  format: string = 'YYYYMMDD'
): number => {
  const Moment = moment(date, format);
  return Math.floor((moment().unix() - Moment.unix()) / 3.15569e7);
};
