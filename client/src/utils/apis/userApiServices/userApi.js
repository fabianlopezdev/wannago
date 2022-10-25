//Internal dependencies
import { URL, KOA_PORT, VERCEL_LINK } from '../../config';

export const postUser = async (user) => {
  try {
    const userToPost = await fetch(`${VERCEL_LINK}/user`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(user),
    });
    return await userToPost.json();
  } catch (e) {
    console.log(`Error in postAuser function in apiServices. Error: ${e}`);
  }
};

export const getUserById = async (id) => {
  try {
    const user = await fetch(`${VERCEL_LINK}/user/${id}`);
    return await user.json();
  } catch (e) {
    console.log(
      `Error in getWannaGoByParams function in apiService. Error: ${e}`
    );
  }
};

export const putOwnerToWannaGo = async (wannaGoId, userId) => {
  try {
    return await fetch(`${VERCEL_LINK}/wannago/owner`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ wannaGoId, userId }),
    });
  } catch (e) {
    console.log(
      `Error in postSuggestionMsg function in apiService. Error: ${e}`
    );
  }
};






