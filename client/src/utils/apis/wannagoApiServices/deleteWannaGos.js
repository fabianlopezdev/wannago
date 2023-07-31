//Internal dependencies
// import { URL, KOA_PORT, BACKEND_LINK } from '../../config';

import { apiRequest } from './apiRequest';

export const deleteWannago = async (_id, userToken) => {
  const options = {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ _id }),
  };
  try {
    const WG = await apiRequest(`wannago/delete`, options, userToken);
    return WG;
  } catch (e) {
    console.log(`Error in deleteWannaGo function in apiService. Error: ${e}`);
  }
};


