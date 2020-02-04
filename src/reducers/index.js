import {combineReducers } from 'redux'
import landing from './landing'
import user from './user'
import globalState from './globalState'
export default combineReducers({landing, user, globalState})