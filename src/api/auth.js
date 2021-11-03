import { api } from '.';

export function registerUser(userData) {
    return api.post('signup', userData);
}

export function loginUser(userData) {
    return api.post('login', userData);
}
