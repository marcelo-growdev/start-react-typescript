import { IActions } from '../../types';
import { USER_SESSION } from './constants';

export function login(payload: any): IActions {
  return {
    action: USER_SESSION.LOGIN,
    payload,
  };
}

export function logout(): IActions {
  return {
    action: USER_SESSION.LOGOUT,
  };
}
