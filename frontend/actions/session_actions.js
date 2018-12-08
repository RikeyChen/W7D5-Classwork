export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

export const receiveErrors = (errors) => ({
  type: LOGOUT_CURRENT_USER
})


