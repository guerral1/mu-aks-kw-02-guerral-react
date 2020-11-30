const PROFILE_URL = 'http://localhost:3001';

const handleFetchResponse = (res) => {
  if (res.status >= 400 && res.status < 600) {
    throw new Error(JSON.stringify(res));
  }
  return res.json();
};

const getAllEmployees = () => {
  return fetch(`${PROFILE_URL}/employees`).then(handleFetchResponse);
};

const getDetailsById = async (id) => {
  return fetch(`${PROFILE_URL}/details/${id}`).then(handleFetchResponse);
};

export { getAllEmployees, getDetailsById };
