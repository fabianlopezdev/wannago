export const apiRequest = async (endPoint, userToken, options = {}) => {
  const url = `http://localhost:4020/${endPoint}`;

  const headers = {
    Authorization: `Bearer ${userToken}`,
  };

  const requestOptions = {
    ...options,
    headers: {
      ...options.headers,
      ...headers,
    },
  };

  return await fetch(url, requestOptions);
};

