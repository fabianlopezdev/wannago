//External dependencies
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

export const getEngagementOfWannaGo = (wannaGo) => {
  return (
    Math.floor(
      (wannaGo.rejectCounter +
        wannaGo.goingCounter +
        wannaGo.suggestionBoxCounter) /
        wannaGo.openedTimes
    ) * 100 || 0
  );
};

export const getSuccessRatioOfWannaGo = (wannaGo) => {
  return `${Math.floor((wannaGo.goingCounter / wannaGo.openedTimes) * 100) || 0}%`;
};

export const aggregateSuccessRatio = (wannaGosOfUser) => {
  return wannaGosOfUser.reduce((acc, wannaGo) => {
      return acc + getSuccessRatioOfWannaGo(wannaGo);
    }, 0)
};

export const aggregateEngagement = (wannaGosOfUser) => {
  return wannaGosOfUser.reduce((acc, wannaGo) => {
    return acc + getEngagementOfWannaGo(wannaGo);
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

export const aggregatePplGoing = (wannaGosOfUser) => {
  return wannaGosOfUser.reduce((acc, wannaGo) => {
    return acc + wannaGo.goingCounter;
  }, 0);
};

export const aggregateOpenedTimes = (wannaGosOfUser) => {
  return wannaGosOfUser.reduce((acc, wannaGo) => {
    return acc + wannaGo.openedTimes;
  }, 0);
};

export const getTotalWannaGosCreated = (wannaGosOfUser) => {
  return wannaGosOfUser + 1;
};

//Needs testing
export const getActiveWannaGos = (wannaGosOfUser) => {
  return wannaGosOfUser.filter(
    (wannaGo) => new Date(wannaGo.when) > Date.now()
  );
};
export const getOlderWannaGos = (wannaGosOfUser) => {
  return wannaGosOfUser.filter(
    (wannaGo) => new Date(wannaGo.when) < Date.now()
  );
};
export const getNumOfActiveWannaGos = (wannaGosOfUser) => {
  return getActiveWannaGos(wannaGosOfUser).length;
};
export const getNumOfOlderWannaGos = (wannaGosOfUser) => {
  return getOlderWannaGos(wannaGosOfUser).length;
};

export const getActiveWGsAndSort = (wannaGosOfUser) => {
  return wannaGosOfUser
    .filter((wannaGo) => new Date(wannaGo.when) > Date.now())
    .sort((a, b) => {
      return new Date(a.when) - new Date(b.when);
    });
};



