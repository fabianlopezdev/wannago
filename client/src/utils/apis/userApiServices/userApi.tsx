import { URL, KOA_PORT } from '../../config';

export const postUser = async (user: any) => {
  try {
    const userToPost = await fetch(`${URL}${KOA_PORT}/user`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(user),
    });
    return userToPost.json();
  } catch (e) {
    console.log(`Error in postAuser function in apiServices. Error: ${e}`);
    // add some error handling for the user (e.g. alert())
  }
};

export const getUserById = async (id: string | null) => {
  try {
    const user = await fetch(`${URL}${KOA_PORT}/user/${id}`);
    return user.json();
  } catch (e) {
    console.log(`Error in getWannaGoByParams function in apiService. Error: ${e}`);
    // add some error handling for the user (e.g. alert())
  }
};

export const putOwnerToWannaGo = async (wannaGoId: string, userId: string) => {
  try {
    return fetch(`${URL}${KOA_PORT}/wannago/owner`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ wannaGoId, userId }),
    });
  } catch (e) {
    console.log(`Error in postSuggestionMsg function in apiService. Error: ${e}`);
    // add some error handling for the user (e.g. alert())
  }
};
