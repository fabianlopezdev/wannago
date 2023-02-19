//Internal dependencies
// import { URL, KOA_PORT, BACKEND_LINK } from '../../config';

export const putLinkClickedCounter = async (id, openedTimes) => {
  try {
    return await fetch(`https://wannago-ito3.vercel.app/wannago/openedTimes`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ id, openedTimes }),
    });
  } catch (e) {
    console.log(`Error in putOpenedTimes function in apiService. Error: ${e}`);
  }
};

export const putAttending = async (name, email, id) => {
  try {
    return await fetch(`https://wannago-ito3.vercel.app/wannago/ppl_going`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ name, email, id }),
    });
  } catch (e) {
    console.log(`Error in postPplGoing function in apiService. Error: ${e}`);
  }
};

export const putAttendingCounter = async (id, goingCounter) => {
  try {
    return await fetch(`https://wannago-ito3.vercel.app/wannago/goingCounter`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ id, goingCounter }),
    });
  } catch (e) {
    console.log(`Error in putGoingCounter function in apiService. Error: ${e}`);
  }
};

export const putSuggestion = async (name,msg, id) => {
  try {
    return await fetch(
      `https://wannago-ito3.vercel.app/wannago/suggestionMsg`,
      {
        method: 'PUT',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ msg, id }),
      }
    );
  } catch (e) {
    console.log(
      `Error in postSuggestionMsg function in apiService. Error: ${e}`
    );
  }
};

export const putSuggestionsCounter = async (id, suggestionBoxCounter) => {
  try {
    return await fetch(
      `https://wannago-ito3.vercel.app/wannago/suggestionBoxCounter`,
      {
        method: 'PUT',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ id, suggestionBoxCounter }),
      }
    );
  } catch (e) {
    console.log(
      `Error in putSuggestionBoxCounter function in apiService. Error: ${e}`
    );
  }
};

export const putRejectionsCounter = async (id, rejectCounter) => {
  try {
    return await fetch(
      `https://wannago-ito3.vercel.app/wannago/rejectCounter`,
      {
        method: 'PUT',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ id, rejectCounter }),
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





























