import http from "./httpService";
import config from "../config.json";
import store from '../store';

const apiEndPoint = config.apiUrl + "/login";
const tokenKey = "token";
// http.setJwt(getJwt());

export async function login(user) {
  const {data} = await http.post(apiEndPoint, { email :user.email, password: user.password });
  localStorage.setItem(tokenKey, data.token);
  store.dispatch('updateToken', data.token);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getJwt() {
  localStorage.getItem(tokenKey);
}

// export function getCurrentUser() {
//   try {
//     const jwt = localStorage.getItem(tokenKey);
//     return jwtDecode(jwt);
//   } catch (ex) {
//     return null;
//   }
// }

export default {
  login,
  // loginWithJwt,
  logout,
  // getJwt,
};
