import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  loginRequest: ['username', 'password'],
  loginSuccess: ['username'],
  loginFailure: ['error'],
  requestWithDefaultValues: { username: 'guest', password: null },
  logout: null,
});

export const INITIAL_STATE = { error: false, goodies: null }

export const success = (state = INITIAL_STATE, action) => {
  return { ...state, error: false, goodies: action.goodies }
}

export const failure = (state = INITIAL_STATE, action) => {
  return { ...state, error: true, goodies: null }
}

export default createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: success,
  [Types.LOGIN_FAILURE]: failure
})