//Internal dependencies
import { URL, KOA_PORT, BACKEND_LINK } from '../../config';

export const postAwannaGo = async (wannaGo) => {
  try {
    return await fetch(`${BACKEND_LINK}/wannago`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(wannaGo),
    });
  } catch (e) {
    console.log(`Error in postAwannaGo function in apiService. Error: ${e}`);
  }
};




