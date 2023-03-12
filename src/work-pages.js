const work_pages = {};

work_pages.baseURL = "localhost/hospitals/frontend/";

work_pages.getData = (apiURL) => {
  return axios
    .get(apiURL)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

work_pages.postData = (apiURL, data, header) => {
  return axios
    .post(apiURL, data, {
      header,
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
