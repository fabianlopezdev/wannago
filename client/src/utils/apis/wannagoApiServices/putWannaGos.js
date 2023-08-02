//Internal dependencies
// import { URL, KOA_PORT, BACKEND_LINK } from '../../config';
import { endPoints } from '../../config';
import { apiRequest } from './apiRequest.js';

export const putTrackClick = async (id, openedTimes, hostId) => {
  const options = {
    method: 'PUT',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ id, openedTimes, hostId }),
  };

  try {
    return await apiRequest(endPoints.putTrackClick, options);
  } catch (e) {
    console.log(`Error in putOpenedTimes function in apiService. Error: ${e}`);
  }
};

export const putAddAttendees = async (name, email, id, hostId) => {
  const options = {
    method: 'PUT',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ name, email, id, hostId }),
  };
  try {
    return await apiRequest(endPoints.putAddAttendees, options);
  } catch (e) {
    console.log(`Error in postPplGoing function in apiService. Error: ${e}`);
  }
};

export const putIncrementAttendeesCount = async (id, goingCounter, hostId) => {
  const options = {
    method: 'PUT',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ id, goingCounter, hostId }),
  };
  try {
    return await apiRequest(endPoints.putIncrementAttendeesCount, options);
  } catch (e) {
    console.log(`Error in putGoingCounter function in apiService. Error: ${e}`);
  }
};

export const putStoreSuggestion = async (name, msg, id, hostId) => {
  const options = {
    method: 'PUT',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ name, msg, id, hostId }),
  };
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
  suggestionBoxCounter,
  hostId
) => {
  const options = {
    method: 'PUT',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ id, suggestionBoxCounter, hostId }),
  };
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
  rejectCounter,
  hostId
) => {
  try {
    const options = {
      method: 'PUT',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ id, rejectCounter, hostId }),
    };
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

