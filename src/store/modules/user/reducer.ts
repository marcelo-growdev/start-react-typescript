/* eslint-disable default-param-last */
import { IActions } from '../../types';
import { IUser } from './models';
import { USER_SESSION } from './constants';

const initialState = {
  login: '',
  password: '',
};

const userReducer = (
  state: IUser = initialState,
  { action, payload }: IActions,
) => {
  switch (action) {
    case USER_SESSION.LOGIN:
      return payload;

    case USER_SESSION.LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;