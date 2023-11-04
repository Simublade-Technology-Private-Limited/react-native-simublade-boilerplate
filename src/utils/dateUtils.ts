import moment from 'moment';
import {StringOrNull} from '../network/collections';

export enum TimeType {
  TWELVE_HOUR = 'hh:mm a',
  TWENTY_FOUR_HOUR = 'HH:mm',
  TWELVE_HOUR_HUMAN = 'h:mm a',
  TIME_DURATION = 'd hh:mm:ss',
}

export enum DateTimeType {
  BOOKING_DISPLAY_FORMAT = ' Do MMM h:mma',
}

export enum DateType {
  CALENDAR_MARKING_TYPE = 'yyyy-MM-DD',
  DASHBOARD_FILTERED_WITH_MONTH = 'Do MMM',
  DASHBOARD_FILTERED_WITH_MONTH_YEAR = 'Do MMM, yy',
  DASHBOARD_FILTERED_WITHOUT_MONTH = 'Do',
  NOTIFICATION_DATE = 'DD',
}

export enum StartEndConstants {
  START_TIME = '12:00 am',
  END_TIME = '11:59 pm',
}

export class DateUtils {
  static getDateDisplayFromTimestamp = (timestamp: string) => {
    return moment(timestamp).format(DateType.DASHBOARD_FILTERED_WITH_MONTH);
  };

  static getDateOnly = (timestamp: string) => {
    return moment(timestamp).format(TimeType.TWELVE_HOUR_HUMAN);
  };

  static getDate = (timestamp: string) => {
    return moment(timestamp).format(DateType.NOTIFICATION_DATE);
  };

  /** Considers the time provided is local to user */
  static getDisplayTime = (date: Date): string => {
    return moment(date).format(TimeType.TWELVE_HOUR);
  };

  /**Returns UTC time */
  static getISOTime = (): string => {
    return moment().toISOString();
  };

  static getUnixDateTime = () => {
    return moment().utc().valueOf();
  };

  /** Accepts UTC iso time string
   * returns local time
   */
  static getDisplayTimeFromISOString = (
    isoString?: StringOrNull,
    shouldAddExtraSecond?: boolean,
  ): string => {
    if (isoString) {
      const tempDate = moment(isoString);
      if (shouldAddExtraSecond) tempDate.add(1, 'seconds');
      return tempDate.format(TimeType.TWELVE_HOUR_HUMAN);
    } else return '';
  };

  static convertUtcToLocal = (date: string): moment.Moment => {
    const tempDate = moment(date).utc().local();
    return tempDate;
  };

  static getCurrentLocalDateTime = () => {
    return moment().utc().local();
  };

  /**
   *
   * @param month The month we need to get first day for
   * @returns UTC ISO string
   */

  static getStartDayOfMonth = (month?: number, year?: number): string => {
    const date = moment();
    if (month !== undefined) {
      date.set('month', month);
    }
    if (year !== undefined) {
      date.set('year', year);
    }
    const dateString = date.startOf('months').toISOString();

    return dateString;
  };

  /**
   *
   * @param month The month we need to get last day for
   * @returns UTC ISO string
   */
  static getEndDayOfMonth = (month?: number, year?: number) => {
    const date = moment();
    if (month !== undefined) {
      date.set('month', month);
    }
    if (year !== undefined) {
      date.set('year', year);
    }
    const dateString = date.endOf('months').toISOString();
    return dateString;
  };
}
