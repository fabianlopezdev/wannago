//Internal dependencies
import { URL, KOA_PORT } from '../../config';

export const deleteWannaGo = async (id) => {
  try {
    return fetch(`${URL}${KOA_PORT}/wannago/delete`, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ id }),
    });
  } catch (e) {
    console.log(`Error in deleteWannaGo function in apiService. Error: ${e}`);
  }
};

