import { UserLogin } from '../features/Login/types/UserLogin';
import { Response, User, UserRegistration } from '../features/Registration/types/UserState';

export const login = async (user: UserLogin): Promise<Response> => {
  const res = await (fetch('http://localhost:4000/api/auth/login', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(user),
  }));
  return res.json();
};
export const registration = async (user: UserRegistration): Promise<Response> => {
  const res = await (fetch('http://localhost:4000/api/auth/registration', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(user),
  }));
  return res.json();
};
export const logout = async (): Promise<Response> => {
  const res = await (fetch('http://localhost:4000/api/auth/logout', {
    credentials: 'include',
  }));
  return res.json();
};

export const updateprofile = async (user: User): Promise<User> => {
  const res = await (fetch('http://localhost:4000/users/user/profile', {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: { 'Content-type': 'application/json' },
  }));
  return res.json();
};

export async function getuser(): Promise<{ isLoggedIn: boolean; user: User; }> {
  const res = await fetch('http://localhost:4000/api/auth/user', { credentials: 'include' });
  return res.json();
}
