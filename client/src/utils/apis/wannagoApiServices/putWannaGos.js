//Internal dependencies
// import { URL, KOA_PORT, BACKEND_LINK } from '../../config';
import { apiRequest } from './apiRequest.js';

export const putLinkClickedCounter = async (id, openedTimes, hostId) => {
  const endPoint = 'wannago/openedTimes';

  const options = {
    method: 'PUT',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ id, openedTimes, hostId }),
  };

  try {
    return await apiRequest(endPoint, options);
  } catch (e) {
    console.log(`Error in putOpenedTimes function in apiService. Error: ${e}`);
  }
};

export const putAttending = async (name, email, id, hostId) => {
  const endPoint = `wannago/ppl_going`;
  const options = {
    method: 'PUT',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ name, email, id, hostId }),
  };
  try {
    return await apiRequest(endPoint, options);
  } catch (e) {
    console.log(`Error in postPplGoing function in apiService. Error: ${e}`);
  }
};

export const putAttendingCounter = async (id, goingCounter, hostId) => {
  const endPoint = `wannago/goingCounter`;
  const options = {
    method: 'PUT',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ id, goingCounter, hostId }),
  };
  try {
    return await fetch(endPoint, options);
  } catch (e) {
    console.log(`Error in putGoingCounter function in apiService. Error: ${e}`);
  }
};

export const putSuggestion = async (name, msg, id, hostId) => {
  const endpoint = `wannago/suggestionMsg`;
  const options = {
    method: 'PUT',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ name, msg, id, hostId }),
  };
  try {
    return await apiRequest(endpoint, options);
  } catch (e) {
    console.log(
      `Error in postSuggestionMsg function in apiService. Error: ${e}`
    );
  }
};

export const putSuggestionsCounter = async (
  id,
  suggestionBoxCounter,
  hostId
) => {
  const endpoint = `wannago/suggestionBoxCounter`;
  const options = {
    method: 'PUT',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ id, suggestionBoxCounter, hostId }),
  };
  try {
    return await apiRequest(endpoint, options);
  } catch (e) {
    console.log(
      `Error in putSuggestionBoxCounter function in apiService. Error: ${e}`
    );
  }
};

export const putRejectionsCounter = async (id, rejectCounter, hostId) => {
  try {
    const endpoint = `wannago/rejectCounter`;
    const options = {
      method: 'PUT',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ id, rejectCounter, hostId }),
    };
    return await fetch(endpoint, options);
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

