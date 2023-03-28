import * as actionTypes from '../actionTypes/actionsTypes'

const initialState = {
	loading: false,
	users: [],
	error: ''
}
const fetchAllUserReducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.FETCH_USERS_REQUESTED:
			return {
				...state, loading: true
			}
		case actionTypes.FETCH_USERS_SUCCESS:
			return {
				...state, loading: false, users: action.payload
			}
		case actionTypes.FETCH_USERS_FAILED:
			return {
				...state, loading: false, users: [], error: action.payload
			}
		default:
			return state
	}

}

export default fetchAllUserReducer