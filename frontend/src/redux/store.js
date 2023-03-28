import {combineReducers, createStore} from 'redux';

import {fetchAllUserReducer} from './reducers/fetchAllUserReducer'

const reducer = combineReducers({
	allUsers: fetchAllUserReducer
})

const store = createStore(reducer)

export default store;