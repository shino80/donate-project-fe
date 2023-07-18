import axios from "axios";

const API_URL = "https://api.escuelajs.co/api/v1";

const register = (email, pass, name) => {
  return axios
    .post(`${API_URL}/users/`, {
      // Request body data
      email: email,
      password: pass,
      name: name,
     
    })
    .then((response) => {
      // Check if the response contains an accessToken
      if (response.data.accessToken) {
        // Store the user data in the localStorage as a stringified JSON object
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      // Return the response data
      return response.data;
    });
};

const login = (email, password) => {
  return axios
    .post(`${API_URL}/auth/login`, {
      email: email,
      password: password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default authService;
