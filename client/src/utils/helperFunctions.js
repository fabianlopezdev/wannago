//External dependencies
import { CLIENT_PORT, URL } from './config';
const dayjs = require('dayjs');
var advancedFormat = require('dayjs/plugin/advancedFormat');
dayjs.extend(advancedFormat);

export const dateFormatter = (date) => {
  const toFormat = dayjs(date);
  const dateTime = {
    day: toFormat.format('Do'),
    month: toFormat.format('MMM'),
    year: toFormat.format('YYYY'),
    time: toFormat.format('hh:mm a'),
    wannaGoFormat: toFormat.format('MMMM Do, YYYY'),
  };
  return dateTime;
};

export const wannagoEngagement = (wannaGo) => {
  return (
    Math.floor(
      (wannaGo.rejectCounter +
        wannaGo.goingCounter +
        wannaGo.suggestionBoxCounter) /
        wannaGo.openedTimes
    ) * 100 || 0
  );
};

export const wannagoSuccessRatio = (wannaGo) => {
  return `${Math.floor((wannaGo.goingCounter / wannaGo.openedTimes) * 100) || 0}%`;
};

export const aggregateSuccessRatio = (wannaGosOfUser) => {
  return wannaGosOfUser.reduce((acc, wannaGo) => {
      return acc + wannagoSuccessRatio(wannaGo);
    }, 0)
};

export const aggregateEngagement = (wannaGosOfUser) => {
  return wannaGosOfUser.reduce((acc, wannaGo) => {
    return acc + wannagoEngagement(wannaGo);
  }, 0);
};

export const aggregateRejections = (wannaGosOfUser) => {
  return wannaGosOfUser.reduce((acc, wannaGo) => {
    return acc + wannaGo.rejectCounter;
  }, 0);
};

export const aggregateSuggestions = (wannaGosOfUser) => {
  return wannaGosOfUser.reduce((acc, wannaGo) => {
    return acc + wannaGo.suggestionBoxCounter;
  }, 0);
};

export const aggregateAttending = (wannaGosOfUser) => {
  return wannaGosOfUser.reduce((acc, wannaGo) => {
    return acc + wannaGo.goingCounter;
  }, 0);
};

export const aggregateLinksClicked = (wannaGosOfUser) => {
  return wannaGosOfUser.reduce((acc, wannaGo) => {
    return acc + wannaGo.openedTimes;
  }, 0);
};

export const totalWannagos = (wannaGosOfUser) => {
  return wannaGosOfUser + 1;
};

//Needs testing
export const activeWannagos = (wannaGosOfUser) => {
  return wannaGosOfUser.filter(
    (wannaGo) => new Date(wannaGo.when) > Date.now()
  );
};
export const expiredWannagos = (wannaGosOfUser) => {
  return wannaGosOfUser.filter(
    (wannaGo) => new Date(wannaGo.when) < Date.now()
  );
};
export const activeWannagosCount = (wannaGosOfUser) => {
  return activeWannagos(wannaGosOfUser).length;
};
export const olderWannagosCount = (wannaGosOfUser) => {
  return expiredWannagos(wannaGosOfUser).length;
};

export const activeSortedWannagos = (wannaGosOfUser) => {
  return wannaGosOfUser
    .filter((wannaGo) => new Date(wannaGo.when) > Date.now())
    .sort((a, b) => {
      return new Date(a.when) - new Date(b.when);
    });
};

export const guestLinkGenerator = (id) =>
  `https://www.wannago.in/guest-link/${id}`;






