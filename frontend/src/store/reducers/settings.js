import {
  GET_ACCOUNT_USER_INFO_SUCCESS,
  GET_ACCOUNT_USER_INFO_FAILURE,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILURE,
  SUBMIT_EDIT_USER_DETAIL_FORM_SUCCESS,
  SUBMIT_EDIT_USER_DETAIL_FORM_FAILURE,
  SUBMIT_EDIT_USER_PASSWORD_FORM_SUCCESS,
  SUBMIT_EDIT_USER_PASSWORD_FORM_FAILURE,
} from '../actions/settings'
import {
  immutableAppendOrUpdate,
  normalizeRecordsById,
} from '../../utils/reducerHelpers'

export default (state = { users: {} }, action) => {
  switch (action.type) {
    case GET_ACCOUNT_USER_INFO_FAILURE:
      return {
        ...state,
        error: action.error,
      }
    case GET_ACCOUNT_USER_INFO_SUCCESS:
      return {
        ...state,
        users: immutableAppendOrUpdate(state.users, action.user),
      }
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: normalizeRecordsById(action.users),
      }
    case GET_ALL_USERS_FAILURE:
      // TODO handle error
      return {
        ...state,
        error: action.error,
      }
    case SUBMIT_EDIT_USER_DETAIL_FORM_SUCCESS:
      return {
        ...state,
        users: immutableAppendOrUpdate(state.users, action.user),
      }
    case SUBMIT_EDIT_USER_DETAIL_FORM_FAILURE:
      return {
        ...state,
        error: action.error,
      }
    case SUBMIT_EDIT_USER_PASSWORD_FORM_SUCCESS:
      return {
        ...state,
        users: immutableAppendOrUpdate(state.users, action.user),
      }
    case SUBMIT_EDIT_USER_PASSWORD_FORM_FAILURE:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}

//edituser
