//Internal dependencies
// import { URL, KOA_PORT, BACKEND_LINK } from '../../config';
import { endPoints} from '../../config';
import { apiRequest } from './apiRequest';
import { createApiRequestOptions } from '../../helperFunctions';
export const deleteWannago = async (_id, userToken) => {
  const options = createApiRequestOptions('DELETE', {
    _id, userToken
  })
  try {
    const WG = await apiRequest(endPoints.delete, options, userToken);
    return WG;
  } catch (e) {
    console.log(`Error in deleteWannaGo function in apiService. Error: ${e}`);
  }
};


