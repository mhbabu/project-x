import http from "./httpService";
import config from '../config.json';

const apiEndPoint = config.apiUrl + "/registers";

export function register(user) {
  
  return http.post(apiEndPoint, {
    name: user.name,
    email: user.email,
    password: user.password,
    confirm_password: user.confirm_password
  });
}