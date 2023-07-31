//Internal dependencies
// import { URL, KOA_PORT, BACKEND_LINK } from '../../config';
import { guestLinkGenerator } from '../../helperFunctions';
import { apiRequest} from './apiRequest'
export const postWannago = async (currentUser, wannago, userToken) => {
  
  const dateStamp = Date.now();

  console.log('userToken', userToken)
  let newWannago = {
    ...wannago,
    hostId: currentUser.uid,
    hostName: currentUser.displayName,
    dateCreated: dateStamp,
    guestLink: guestLinkGenerator(dateStamp),
  };
 
  const endpoint = `wannago`;
  const options = {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(newWannago),
  };
  try {
    return await apiRequest(
     endpoint, options, userToken
    );
  } catch (e) {
    console.log(`Error in postWannago function in apiService. Error: ${e}`);
  }
};





