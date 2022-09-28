//Internal dependencies
import { URL, KOA_PORT } from '../../config';

export const postAwannaGo = async (wannaGo) => {
  try {
    return fetch(`${URL}${KOA_PORT}/wannago`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(wannaGo),
    });
  } catch (e) {
    console.log(`Error in postAwannaGo function in apiService. Error: ${e}`);
  }
};



