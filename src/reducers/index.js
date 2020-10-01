import {combineReducers} from 'redux'
import {reducer as form } from 'redux-form'
import shops from './shops'

export default combineReducers({ shops, form })