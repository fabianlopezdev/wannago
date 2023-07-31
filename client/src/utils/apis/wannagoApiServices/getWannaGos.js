//Internal dependencies
// import { URL, KOA_PORT, BACKEND_LINK } from '../../config';
import { apiRequest } from './apiRequest';
export const getUserWannagos = async (userId, userToken) => {
  console.log('the user id is', userId);
  try {
    const wannagos = await apiRequest(`wannagos/host-id/${userId}`, userToken);
    console.log('wannagos fetched', wannagos);
    return await wannagos.json();
  } catch (e) {
    console.log(`Error in getUserWannagos function in apiService. Error: ${e}`);
  }
};

export const getWannagoByDateCreated = async (dateCreated) => {
  try {
    const wannaGo = await apiRequest(`wannago/${dateCreated}`);
    return await wannaGo.json();
  } catch (e) {
    console.log(
      `Error in getWannagoByDateCreated function in apiService. Error: ${e}`
    );
  }
};

// export const getWannagos = async () => {
//   try {
//     const wannaGos = await fetch(`https://wannago-ito3.vercel.app/wannagos`);
//     return await wannaGos.json();
//   } catch (e) {
//     console.log(`Error in getWannaGos function in apiService. Error: ${e}`);
//   }
// };

// export const getWannaGoByParams = async (what, when) => {
//   try {
//     const wannaGo = await fetch(
//       `https://wannago-ito3.vercel.app/wannago/${what}/${when}`
//     );
//     return await wannaGo.json();
//   } catch (e) {
//     console.log(
//       `Error in getWannaGoByParams function in apiService. Error: ${e}`
//     );
//   }
// };

