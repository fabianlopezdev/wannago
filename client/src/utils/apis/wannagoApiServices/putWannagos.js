//Internal dependencies
// import { URL, KOA_PORT, BACKEND_LINK } from '../../config';
import { endPoints } from '../../config';
import { createApiRequestOptions } from '../../helperFunctions';
import { apiRequest } from './apiRequest.js';

export const putTrackClick = async (id, clickCount, hostId) => {
  const options = createApiRequestOptions('PUT', { id, clickCount, hostId });

  try {
    return await apiRequest(endPoints.putTrackClick, options);
  } catch (e) {
    console.log(`Error in putOpenedTimes function in apiService. Error: ${e}`);
  }
};

export const putAddAttendees = async (name, email, id, hostId) => {
  const options = createApiRequestOptions('PUT', { name, email, id, hostId });
  try {
    return await apiRequest(endPoints.putAddAttendees, options);
  } catch (e) {
    console.log(`Error in postPplGoing function in apiService. Error: ${e}`);
  }
};

export const putIncrementAttendeesCount = async (
  id,
  attendeesCount,
  hostId
) => {
  const options = createApiRequestOptions('PUT', {
    id,
    attendeesCount,
    hostId,
  });
  try {
    return await apiRequest(endPoints.putIncrementAttendeesCount, options);
  } catch (e) {
    console.log(`Error in putGoingCounter function in apiService. Error: ${e}`);
  }
};

export const putStoreSuggestion = async (name, msg, id, hostId) => {
  const options = createApiRequestOptions('PUT', { name, msg, id, hostId });

  try {
    return await apiRequest(endPoints.putStoreSuggestions, options);
  } catch (e) {
    console.log(
      `Error in postSuggestionMsg function in apiService. Error: ${e}`
    );
  }
};

export const putIncrementSuggestionsCount = async (
  id,
  suggestionsCount,
  hostId
) => {
  const options = createApiRequestOptions('PUT', {
    id,
    suggestionsCount,
    hostId,
  });

  try {
    return await apiRequest(endPoints.putIncrementSuggesionsCount, options);
  } catch (e) {
    console.log(
      `Error in putSuggestionBoxCounter function in apiService. Error: ${e}`
    );
  }
};

export const putIncrementRejectionsCount = async (
  id,
  rejectionsCount,
  hostId
) => {
  try {
    const options = createApiRequestOptions('PUT', {
      id,
      rejectionsCount,
      hostId,
    });
    return await apiRequest(endPoints.putIncrementRejectionsCount, options);
  } catch (e) {
    console.log(
      `Error in putRejectCounter function in apiService. Error: ${e}`
    );
  }
};

// export const putGuestLink = async (id, link) => {
//   try {
//     return await fetch(`https://wannago-ito3.vercel.app/wannago/guestLink`, {
//       method: 'PUT',
//       headers: { 'Content-type': 'application/json; charset=UTF-8' },
//       body: JSON.stringify({ link, id }),
//     });
//   } catch (e) {
//     console.log(
//       `Error in postSuggestionMsg function in apiService. Error: ${e}`
//     );
//   }
// };

