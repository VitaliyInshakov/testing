import axios from 'axios';
import { CHANGE_AUTH } from './types';
import { FETCH_USERS } from './types';

export function authenticate(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
}

export function fetchUsers() {
  const request = axios.get('https://jsonplaceholder.typicode.com/users');
  
  return {
    type: FETCH_USERS,
    payload: request
  }
}