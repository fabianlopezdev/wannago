//External dependencies
import { URL_GENERATED_LINK } from './config';


export const dateFormatter = (date) => {
  const dateTime = {
    day: new Date(date).getDate(),
    month: new Date(date).getMonth() + 1,
    year: new Date(date).getFullYear(),
    time: new Date(date).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }),
    wannaGoFormat: new Date(date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }),
  };
  return dateTime;
};


export const wannagoEngagement = (wannaGo) => {
  return (
    Math.floor(
      (wannaGo.rejectionsCount +
        wannaGo.attendeesCount +
        wannaGo.suggestionsCount) /
        wannaGo.clickCount
    ) * 100 || 0
  );
};

export const wannagoSuccessRatio = (wannaGo) => {
  return `${
    Math.floor((wannaGo.attendeesCount / wannaGo.clickCount) * 100) || 0
  }%`;
};

export const aggregateSuccessRatio = (wannaGosOfUser) => {
  return wannaGosOfUser.reduce((acc, wannaGo) => {
    return acc + wannagoSuccessRatio(wannaGo);
  }, 0);
};

export const aggregateEngagement = (wannaGosOfUser) => {
  return wannaGosOfUser.reduce((acc, wannaGo) => {
    return acc + wannagoEngagement(wannaGo);
  }, 0);
};

export const aggregateRejections = (wannaGosOfUser) => {
  return wannaGosOfUser.reduce((acc, wannaGo) => {
    return acc + wannaGo.rejectionsCount;
  }, 0);
};

export const aggregateSuggestions = (wannaGosOfUser) => {
  return wannaGosOfUser.reduce((acc, wannaGo) => {
    return acc + wannaGo.suggestionsCount;
  }, 0);
};

export const aggregateAttending = (wannaGosOfUser) => {
  return wannaGosOfUser.reduce((acc, wannaGo) => {
    return acc + wannaGo.attendeesCount;
  }, 0);
};

export const aggregateLinksClicked = (wannaGosOfUser) => {
  return wannaGosOfUser.reduce((acc, wannaGo) => {
    return acc + wannaGo.clickCount;
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
  if (!wannaGosOfUser) return [];
  return wannaGosOfUser
    .filter((wannaGo) => new Date(wannaGo.when) > Date.now())
    .sort((a, b) => {
      return new Date(a.when) - new Date(b.when);
    });
};

export function slugify(str) {
  // Replace spaces with dashes and make all letters lowercase
  return str.replace(/\s+/g, '-').toLowerCase();
}

export const wannagoLinkGenerator = (userName, id) => {
  return `${URL_GENERATED_LINK}/${slugify(userName)}/wannago-id/${id}/`;
};

export const createApiRequestOptions = (method, data) => {
  return {
    method,
    headers: {
      'Content-type': 'application/json; charset=UTF-8' ,
    },
    body: JSON.stringify(data),
  };
}





