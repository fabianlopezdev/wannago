//Internal dependencies
import { URL, PORT } from '../../config';

export const putPplGoing = async (name, email, id) => {
  try {
    return fetch(`${URL}${PORT}/wannago/ppl_going`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ name, email, id }),
    });
  } catch (e) {
    console.log(`Error in postPplGoing function in apiService. Error: ${e}`);
  }
};

export const putSuggestionMsg = async (msg, id) => {
  try {
    return fetch(`${URL}${PORT}/wannago/suggestionMsg`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ msg, id }),
    });
  } catch (e) {
    console.log(
      `Error in postSuggestionMsg function in apiService. Error: ${e}`
    );
  }
};

