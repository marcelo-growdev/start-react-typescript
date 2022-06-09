import { IActions } from '../../types';
import { USER_SESSION } from './constants';

export function login(payload: any): IActions {
  return {
    type: USER_SESSION.LOGIN,
    payload,
  };
}

export function logout(): IActions {
  return {
    type: USER_SESSION.LOGOUT,
  };
}
