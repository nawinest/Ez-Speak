import {
    REGISTER_USER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    LOGIN_FAILED,
    USER_LOADED,
    USER_LOADED_FAILED,
    UPDATE_PROFILE_FAILED,
    UPDATE_PROFILE_SUCCESS
} from '../actions/type'

const initialState = {
    user: null,
    isAuthenticated: false,
    isUpdateProfile: false
}

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case REGISTER_USER_SUCCESS:
            return {
                ...state, customer: { ...payload }, isRegistered: true, loading: false
            }
        case REGISTER_FAIL:
            return {
                ...state
            }
        case USER_LOADED:
            return {
                ...state, user: payload, isAuthenticated: true
            }
        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state, isUpdateProfile: true
            }
        case UPDATE_PROFILE_FAILED:
            return {
                ...state, isUpdateProfile: false
            }
        case USER_LOADED_FAILED:
            return {
                ...state, user: null, isAuthenticated: false
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('access_token', payload.access_token)
            return {
                ...state,
            }
        case LOGIN_FAILED:
            localStorage.removeItem('access_token')
            return {
                ...state, user: null, isAuthenticated: false
            }
        case LOGOUT_SUCCESS:
            localStorage.removeItem('access_token')
            return {
                ...state, user: null, isAuthenticated: false
            }
        default:
            return state
    }
}