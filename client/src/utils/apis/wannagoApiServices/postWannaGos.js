const URL = 'http://localhost:';
const PORT = 4000;

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

export const postPplGoing = async (name, email, id) => {
  try {
    return fetch(`${URL}${PORT}/wannago/ppl_going`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ name, email, id }),
    });
  } catch (error) {}
};

