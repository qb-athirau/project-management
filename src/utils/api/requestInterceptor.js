export const requestOnFailed = (error) => Promise.reject(error);

export const onRequest = (config) => {
  const customConfig = config;
  const token = localStorage.getItem('tempAuthToken');
  if (token && !customConfig.headers.Authorization) {
    customConfig.headers.Authorization = `token ${token}`;
  }
  return config;
};
