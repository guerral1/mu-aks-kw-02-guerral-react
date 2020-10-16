import configuration from '../config.json';

const PROFILE_URL = 'https://<pl4c3h0ld3r>-security-api-profile.apps.cac.preview.pcf.manulife.com';


const login = async (username, password) => {
  const loginRequestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'username': username,
      'password': password
    }
  };

  const response = await fetch(`${PROFILE_URL}/authenticate`, loginRequestOptions);
  const user = await handleResponse(response);

  // login successful if there's a user in the response
  if (user) {
    user.authdata = window.btoa(username + ':' + password);
    localStorage.setItem('user', JSON.stringify(user));
  }
  return user;
}

const handleResponse = (response) => {
  return response.json().then(data => {
    if (data.status === 'error') {
      if (data.code === 401) {
        // auto logout if 401 response returned from api
        logout();
        //location.reload(true);
      }

      const error = data.data.message || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}


const getEmployee = async (employee_id) => {
  const requestOptions = {
    method: 'GET'
  };

  const employeeResult = await fetch(`${PROFILE_URL}/employees/${employee_id}`, requestOptions);
  const employeeData = await employeeResult.json();
  return employeeData[0];
}

const getDetails = async (employee_id) => {
  const requestOptions = {
    method: 'GET'
  };

  const detailsResult = await fetch(`${PROFILE_URL}/fulldetails/${employee_id}`, requestOptions);
  const fullDetailsInfo = await detailsResult.json();

  return { fullDetails: { employee_id: employee_id, fullDetailsInfo: fullDetailsInfo } };
};



const logout = async (employee_id) => {
  // let's remove user from local storage in order to log them out of the UI
  localStorage.removeItem('user');
};

export { login, getEmployee, getDetails, logout };
