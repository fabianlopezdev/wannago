const URL = 'http://localhost:';
const PORT = 4000;

export const getWannaGos = async () => {
  try {
    const wannaGos = await fetch(`${URL}${PORT}/wannagos`);
    return wannaGos.json();
  } catch (e) {
    console.log(`Error in getWannaGos function in apiService. Error: ${e}`);
  }
};

export const getWannaGoByParams = async (what, when) => {
  try {
    const wannaGo = await fetch(`${URL}${PORT}/wannago/${what}/${when}`);
    return wannaGo.json();
  } catch (e) {
    console.log(
      `Error in getWannaGoByParams function in apiService. Error: ${e}`
    );
  }
};

export const getWannaGoById = async (id) => {
  try {
    const wannaGo = await fetch(`${URL}${PORT}/wannago/${id}`);
    return wannaGo.json();
  } catch (e) {
    console.log(`Error in getWannaGoById function in apiService. Error: ${e}`);
  }

};