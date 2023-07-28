export const apiRequest = async (endPoint, userToken, options) => {
  const url = `http://localhost:4020/${endPoint}`;
  // const url = `https://wannago-ito3.vercel.app/$${endpoint}`
  if (userToken === undefined && options === undefined) return await fetch(url);

  const headers = {
    Authorization: `Bearer ${userToken}`,
  };

  const requestOptions = {
    ...options,
    headers: {
      ...options?.headers,
      ...headers,
    },
  };

  return await fetch(url, requestOptions);
};

