//Internal dependencies
import { URL, KOA_PORT, BACKEND_LINK } from '../../config';

export const deleteWannaGo = async (id) => {
  try {
    return await fetch(`${BACKEND_LINK}/wannago/delete`, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ id }),
    });
  } catch (e) {
    console.log(`Error in deleteWannaGo function in apiService. Error: ${e}`);
  }
};




