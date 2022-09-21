const URL = 'http://localhost:';
const PORT = 5001;

export const getWannaGos = async () => {
  try {
    const wannaGos = await fetch(`${URL}${PORT}/wannagos`);
    return wannaGos.json();
  } catch (e) {
    console.log(`Error in getWannaGos function in apiService. Error: ${e}`);
  }
};

export const postAwannaGo = async (wannaGo) => {
  try {
    return fetch(`${URL}${PORT}/wannago`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(wannaGo),
    });
  } catch (e) {
    console.log(`Error in postAwannaGo function in apiService. Error: ${e}`);
  }
};

