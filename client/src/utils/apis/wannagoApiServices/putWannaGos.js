//Internal dependencies
// import { URL, KOA_PORT, BACKEND_LINK } from '../../config';

export const putLinkClickedCounter = async (id, openedTimes, hostId) => {
  console.log('id:', id);
  console.log('openedTimes:', openedTimes);
  try {
    // return await fetch(`https://wannago-ito3.vercel.app/wannago/openedTimes`, {
      return await fetch(`http://localhost:4020/wannago/openedTimes`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ id, openedTimes, hostId }),
      });
  } catch (e) {
    console.log(`Error in putOpenedTimes function in apiService. Error: ${e}`);
  }
};

export const putAttending = async (name, email, id, hostId) => {
  try {
    return await fetch(
      // `https://wannago-ito3.vercel.app/wannago/ppl_going`
      `http://localhost:4020/wannago/ppl_going`,
      {
        method: 'PUT',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ name, email, id, hostId }),
      }
    );
  } catch (e) {
    console.log(`Error in postPplGoing function in apiService. Error: ${e}`);
  }
};

export const putAttendingCounter = async (id, goingCounter, hostId) => {
  try {
    return await fetch(
      // `https://wannago-ito3.vercel.app/wannago/goingCounter`
      `http://localhost:4020/wannago/goingCounter`,
      {
        method: 'PUT',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ id, goingCounter, hostId }),
      }
    );
  } catch (e) {
    console.log(`Error in putGoingCounter function in apiService. Error: ${e}`);
  }
};

export const putSuggestion = async (name, msg, id, hostId) => {
  try {
    return await fetch(
      // `https://wannago-ito3.vercel.app/wannago/suggestionMsg`
      `http://localhost:4020/wannago/suggestionMsg`,
      {
        method: 'PUT',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ name, msg, id, hostId }),
      }
    );
  } catch (e) {
    console.log(
      `Error in postSuggestionMsg function in apiService. Error: ${e}`
    );
  }
};

export const putSuggestionsCounter = async (id, suggestionBoxCounter, hostId) => {
  try {
    return await fetch(
      // `https://wannago-ito3.vercel.app/wannago/suggestionBoxCounter`
      `http://localhost:4020/wannago/suggestionBoxCounter`,
      {
        method: 'PUT',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ id, suggestionBoxCounter, hostId }),
      }
    );
  } catch (e) {
    console.log(
      `Error in putSuggestionBoxCounter function in apiService. Error: ${e}`
    );
  }
};

export const putRejectionsCounter = async (id, rejectCounter, hostId) => {
  try {
    return await fetch(
      // `https://wannago-ito3.vercel.app/wannago/rejectCounter`
      `http://localhost:4020/wannago/rejectCounter`,
      {
        method: 'PUT',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ id, rejectCounter, hostId }),
      }
    );
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












































