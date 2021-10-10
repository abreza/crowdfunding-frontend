import { Day, DayValue } from '@hassanmojab/react-modern-calendar-datepicker';
import { onlyNumber } from './functionalUtils';
import jMoment from 'jalali-moment';

export const humanReadableDate = (date: DayValue) => {
  if (date === undefined || date === null) return '';
  return `${date.year}/${date.month}/${date.day}`;
};

export const initializeDate: (language: 'fa') => Day = (language) => {
  const [year, month, day] = new Date()
    .toLocaleDateString(language)
    .split('/')
    .map((a) => Number(onlyNumber(a)));

  return language === 'fa'
    ? { year, month, day }
    : { year: day, month: year, day: month };
};

export const convertToIsoString = (date: Day) => {
  const newDate = new Date(date.year, date.month, date.day);
  return newDate.toISOString();
};

export const calculateDateRange = (dayRange = 30) => ({
  from: jMoment().toISOString(),
  to: jMoment().add(dayRange, 'days').toISOString(),
});

type maximumDateType = {
  language: 'fa';
  add?: number;
  subtract?: number;
};

export const maxMinDate: ({ language, add, subtract }: maximumDateType) => Day =
  ({ language, add, subtract }) => {
    const dateA = jMoment().locale(language);
    if (add) {
      dateA.add(add, 'days');
    }
    if (subtract) {
      dateA.subtract(subtract, 'days');
    }
    const dateB = dateA.format('YYYY-MM-DD');
    return {
      year: +dateB.substring(0, 4),
      month: +dateB.substring(5, 7),
      day: +dateB.substring(8, 10),
    };
  };
