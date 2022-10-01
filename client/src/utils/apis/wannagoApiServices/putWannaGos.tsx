import { URL, KOA_PORT } from '../../config';


//////// CHECK types of things in this file

export const putPplGoing = async (name: string, email: string, id: string | null) => {
  try {
    return fetch(`${URL}${KOA_PORT}/wannago/ppl_going`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ name, email, id }),
    });
  } catch (e) {
    console.log(`Error in postPplGoing function in apiService. Error: ${e}`);
    // add some error handling for the user (e.g. alert())
  }
};

export const putSuggestionMsg = async (msg: string, id: string | null) => {
  try {
    return fetch(`${URL}${KOA_PORT}/wannago/suggestionMsg`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ msg, id }),
    });
  } catch (e) {
    console.log(`Error in postSuggestionMsg function in apiService. Error: ${e}`);
    // add some error handling for the user (e.g. alert())
  }
};

export const putGuestLink = async (id: string | null, link: string) => {
  try {
    return fetch(`${URL}${KOA_PORT}/wannago/guestLink`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ link, id }),
    });
  } catch (e) {
    console.log(`Error in postSuggestionMsg function in apiService. Error: ${e}`);
    // add some error handling for the user (e.g. alert())
  }
};

export const putOpenedTimes = async (id: string | null, openedTimes: number) => { // check these types!!!
  try {
    return fetch(`${URL}${KOA_PORT}/wannago/openedTimes`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ id, openedTimes }),
    });
  } catch (e) {
    console.log(`Error in putOpenedTimes function in apiService. Error: ${e}`);
    // add some error handling for the user (e.g. alert())
  }
};

export const putRejectCounter = async (id: string | null, rejectCounter: number) => {
  try {
    return fetch(`${URL}${KOA_PORT}/wannago/rejectCounter`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ id, rejectCounter }),
    });
  } catch (e) {
    console.log(`Error in putRejectCounter function in apiService. Error: ${e}`);
    // add some error handling for the user (e.g. alert())
  }
};

export const putGoingCounter = async (id: number, goingCounter: number) => {
  try {
    return fetch(`${URL}${KOA_PORT}/wannago/goingCounter`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ id, goingCounter }),
    });
  } catch (e) {console.log(`Error in putGoingCounter function in apiService. Error: ${e}`);
  // add some error handling for the user (e.g. alert())
  }
};

export const putSuggestionBoxCounter = async (id: string | null, suggestionBoxCounter: number) => {
  try {
    return fetch(`${URL}${KOA_PORT}/wannago/suggestionBoxCounter`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ id, suggestionBoxCounter }),
    });
  } catch (e) {
    console.log(`Error in putSuggestionBOxCounter function in apiService. Error: ${e}`);
    // add some error handling for the user (e.g. alert())
  }
};
