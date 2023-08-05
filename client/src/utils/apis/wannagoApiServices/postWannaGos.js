//Internal dependencies
// import { URL, KOA_PORT, BACKEND_LINK } from '../../config';
import { endPoints } from '../../config';
import { createApiRequestOptions } from '../../helperFunctions';
import { wannagoLinkGenerator } from '../../helperFunctions';
import { apiRequest } from './apiRequest';
export const postWannago = async (currentUser, wannago, userToken) => {
  const dateStamp = Date.now();
  console.log('wannago', wannago);
  // console.log('userToken', userToken);
  let newWannago = {
    ...wannago,
    hostId: currentUser.uid,
    hostName: currentUser.displayName,
    dateCreated: dateStamp,
    link: wannagoLinkGenerator(currentUser.displayName, dateStamp),
  };

  const options = createApiRequestOptions('POST', newWannago);
  try {
    return await apiRequest(endPoints.postWannago, options, userToken);
  } catch (e) {
    console.log(`Error in postWannago function in apiService. Error: ${e}`);
  }
};

