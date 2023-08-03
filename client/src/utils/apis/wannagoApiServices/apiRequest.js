import {URL} from '../../config'
export const apiRequest = async (endPoint, options, userToken) => {
  const url = `${URL}/${endPoint}`;
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

