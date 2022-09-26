//External dependencies
const dayjs = require('dayjs');

export const dateFormatter = (date) => {
  const toFormat = dayjs(date);
  const dateTime = {
    day: toFormat.format('DD'),
    month: toFormat.format('MMMM'),
    year: toFormat.format('YYYY'),
    time: toFormat.format('hh:mmA'),
    wannaGoFormat : toFormat.format('MMMM DD YYYY'),
  };
  return dateTime;
};

