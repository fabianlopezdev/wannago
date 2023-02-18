//Internal dependencies
// import { URL, KOA_PORT, BACKEND_LINK } from '../../config';

export const getWannaGos = async () => {
  try {
    const wannaGos = await fetch(`https://wannago-ito3.vercel.app/wannagos`);
    return await wannaGos.json();
  } catch (e) {
    console.log(`Error in getWannaGos function in apiService. Error: ${e}`);
  }
};

export const getAllWannaGosOfUser = async (owner) => {
  try {
    const allWannaGosOfUser = await fetch(
      `https://wannago-ito3.vercel.app/wannagos/owner/${owner}`
    );
    return await allWannaGosOfUser.json();
  } catch (e) {
    console.log(
      `Error in getAllWannaGosOfUser function in apiService. Error: ${e}`
    );
  }
};

export const getWannaGoByParams = async (what, when) => {
  try {
    const wannaGo = await fetch(
      `https://wannago-ito3.vercel.app/wannago/${what}/${when}`
    );
    return await wannaGo.json();
  } catch (e) {
    console.log(
      `Error in getWannaGoByParams function in apiService. Error: ${e}`
    );
  }
};

export const getWannagoByDateCreated = async (dateCreated) => {
  try {
    const wannaGo = await fetch(
      // `https://wannago-ito3.vercel.app/wannago/${dateCreated}`
      `http://localhost:4020/wannago/${dateCreated}`
    );
    return await wannaGo.json();
  } catch (e) {
    console.log(`Error in getWannagoByDateCreated function in apiService. Error: ${e}`);
  }
};
















