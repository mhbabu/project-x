import http from "./httpService";
import config from '../config.json';

const apiEndPoint = config.apiUrl + "/contacts";

function getContactUrl(id) {
  return `${apiEndPoint}/${id}`;
}

export function getContacts() {
  return http.get(apiEndPoint);
}

export function getContact(contactId) {
  return http.get(getContactUrl(contactId));
}

export function saveContact(contact) {
  if (contact._id) {
    const body = { ...contact };
    delete body._id;
    return http.put(getContactUrl(contact._id), body);
  }
  return http.post(apiEndPoint, contact);
}

export function deleteContact(contactId) {
  return http.delete(getContactUrl(contactId));
}
