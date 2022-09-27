//Internal dependencies
import { URL, KOA_PORT} from '../../config'

export const getWannaGos = async () => {
  try {
    const wannaGos = await fetch(`${URL}${KOA_PORT}/wannagos`);
    return wannaGos.json();
  } catch (e) {
    console.log(`Error in getWannaGos function in apiService. Error: ${e}`);
  }
};

export const getAllWannaGosOfUser = async (owner) => {
  try {
    const allWannaGosOfUser = await fetch(
      `${URL}${KOA_PORT}/wannagos/owner/${owner}`
    );
    return allWannaGosOfUser.json();
  } catch (e) {
    console.log(
      `Error in getAllWannaGosOfUser function in apiService. Error: ${e}`
    );
  }
};

export const getWannaGoByParams = async (what, when) => {
  try {
    const wannaGo = await fetch(`${URL}${KOA_PORT}/wannago/${what}/${when}`);
    return wannaGo.json();
  } catch (e) {
    console.log(
      `Error in getWannaGoByParams function in apiService. Error: ${e}`
    );
  }
};

export const getWannaGoById = async (id) => {
  try {
    const wannaGo = await fetch(`${URL}${KOA_PORT}/wannago/${id}`);
    return wannaGo.json();
  } catch (e) {
    console.log(`Error in getWannaGoById function in apiService. Error: ${e}`);
  }





};