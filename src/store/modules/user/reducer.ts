/* eslint-disable default-param-last */
import { IActions } from '../../types';
import { USER_SESSION } from './constants';

export interface IUser {
  user: any;
  login: string;
  password?: string;
}

const initialState: IUser = {
  login: '',
  user: '',
  password: '',
};
const userReducer = (
  state: IUser = initialState,
  { type, payload }: IActions,
) => {
  switch (type) {
    case USER_SESSION.LOGIN:
      return payload;

    case USER_SESSION.LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
