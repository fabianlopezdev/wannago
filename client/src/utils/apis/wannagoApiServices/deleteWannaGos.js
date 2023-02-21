//Internal dependencies
// import { URL, KOA_PORT, BACKEND_LINK } from '../../config';

export const deleteWannago = async (id) => {
  console.log('id', id)
  try {
    const WG = await fetch(
      `https://wannago-ito3.vercel.app/wannago/delete`,
      // `http://localhost:4020/wannago/delete`,
      {
        method: 'DELETE',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ id }),
      }
    );

    console.log('WWWWWWW', WG)
    return WG
  } catch (e) {
    console.log(`Error in deleteWannaGo function in apiService. Error: ${e}`);
  }
};







