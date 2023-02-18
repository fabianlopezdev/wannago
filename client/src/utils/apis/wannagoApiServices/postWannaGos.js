//Internal dependencies
// import { URL, KOA_PORT, BACKEND_LINK } from '../../config';

export const postWannago = async (wannaGo) => {
  try {
    // return await fetch(`https://wannago-ito3.vercel.app/wannago`, 
    return await fetch(`http://localhost:4020/wannago`, 
    {
      method: 'POST',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(wannaGo),
    });
  } catch (e) {
    console.log(`Error in postWannago function in apiService. Error: ${e}`);
  }
};






