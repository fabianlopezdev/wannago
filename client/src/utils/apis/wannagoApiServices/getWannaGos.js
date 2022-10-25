//Internal dependencies
import { URL, KOA_PORT, VERCEL_LINK } from '../../config';

export const getWannaGos = async () => {
  try {
    const wannaGos = await fetch(`${VERCEL_LINK}/wannagos`);
    return await wannaGos.json();
  } catch (e) {
    console.log(`Error in getWannaGos function in apiService. Error: ${e}`);
  }
};

export const getAllWannaGosOfUser = async (owner) => {
  try {
    const allWannaGosOfUser = await fetch(
      `${VERCEL_LINK}/wannagos/owner/${owner}`
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

export const getWannaGoById = async (id) => {
  try {
    const wannaGo = await fetch(`${VERCEL_LINK}/wannago/${id}`);
    return await wannaGo.json();
  } catch (e) {
    console.log(`Error in getWannaGoById function in apiService. Error: ${e}`);
  }
};





