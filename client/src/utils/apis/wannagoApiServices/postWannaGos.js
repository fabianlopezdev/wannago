//Internal dependencies
import { URL, KOA_PORT, VERCEL_LINK } from '../../config';

export const postAwannaGo = async (wannaGo) => {
  try {
    return await fetch(`${VERCEL_LINK}/wannago`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(wannaGo),
    });
  } catch (e) {
    console.log(`Error in postAwannaGo function in apiService. Error: ${e}`);
  }
};


