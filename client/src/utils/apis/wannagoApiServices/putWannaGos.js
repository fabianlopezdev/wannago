//Internal dependencies
import { URL, KOA_PORT } from '../../config';

export const putPplGoing = async (name, email, id) => {
  try {
    return await fetch(`${URL}${KOA_PORT}/wannago/ppl_going`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ name, email, id }),
    });
  } catch (e) {
    console.log(`Error in postPplGoing function in apiService. Error: ${e}`);
  }
};

export const putSuggestionMsg = async (name,msg, id) => {
  try {
    return await fetch(`${URL}${KOA_PORT}/wannago/suggestionMsg`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ name, msg, id }),
    });
  } catch (e) {
    console.log(
      `Error in postSuggestionMsg function in apiService. Error: ${e}`
    );
  }
};

export const putGuestLink = async (id, link) => {
  try {
    return await fetch(`${URL}${KOA_PORT}/wannago/guestLink`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ link, id }),
    });
  } catch (e) {
    console.log(
      `Error in postSuggestionMsg function in apiService. Error: ${e}`
    );
  }
};

export const putOpenedTimes = async (id, openedTimes) => {
  try {
    return await fetch(`${URL}${KOA_PORT}/wannago/openedTimes`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ id, openedTimes }),
    });
  } catch (e) {
    console.log(`Error in putOpenedTimes function in apiService. Error: ${e}`);
  }
};

export const putRejectCounter = async (id, rejectCounter) => {
  try {
    return await fetch(`${URL}${KOA_PORT}/wannago/rejectCounter`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ id, rejectCounter }),
    });
  } catch (e) {
    console.log(
      `Error in putRejectCounter function in apiService. Error: ${e}`
    );
  }
};

export const putGoingCounter = async (id, goingCounter) => {
  try {
    return await fetch(`${URL}${KOA_PORT}/wannago/goingCounter`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ id, goingCounter }),
    });
  } catch (e) {
    console.log(`Error in putGoingCounter function in apiService. Error: ${e}`);
  }
};

export const putSuggestionBoxCounter = async (id, suggestionBoxCounter) => {
  try {
    return await fetch(`${URL}${KOA_PORT}/wannago/suggestionBoxCounter`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ id, suggestionBoxCounter }),
    });
  } catch (e) {
    console.log(
      `Error in putSuggestionBoxCounter function in apiService. Error: ${e}`
    );
  }
};

