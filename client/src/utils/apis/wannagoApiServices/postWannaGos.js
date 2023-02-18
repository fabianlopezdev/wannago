//Internal dependencies
// import { URL, KOA_PORT, BACKEND_LINK } from '../../config';
import { guestLinkGenerator } from '../../helperFunctions';

export const postWannago = async (currentUser, wannago, setWannago) => {
  const dateStamp = Date.now();
  let newWannago = {
    ...wannago,
    hostId: currentUser.uid,
    hostName: currentUser.displayName,
    dateCreated: dateStamp,
    guestLink: guestLinkGenerator(dateStamp),
  };
  setWannago(newWannago);
  setTimeout(console.log('wannago', wannago), 10000);
  try {
    // return await fetch(`https://wannago-ito3.vercel.app/wannago`, 
    return await fetch(`http://localhost:4020/wannago`, 
    {
      method: 'POST',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(newWannago),
    });
  } catch (e) {
    console.log(`Error in postWannago function in apiService. Error: ${e}`);
  }
};







