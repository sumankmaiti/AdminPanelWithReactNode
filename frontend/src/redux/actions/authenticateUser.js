import axios from 'axios'
import * as actionTypes from '../actionTypes/actionsTypes'

export const authenticateUser = (userid, password) => (dispatch) => {
	dispatch({
		type: actionTypes.FETCH_USERS_REQUESTED,
	})

	axios.post('http://localhost:4000/api/for/validate', {userid, password})
	.then((response) => {
		if (response.data.error){
			dispatch({
				type: actionTypes.FETCH_USERS_FAILED,
				payload: response.data.error
			})
		}
		else {
			dispatch({
				type: actionTypes.FETCH_USERS_SUCCESS,
				payload:response.data.info
			})
		}
	})
	.catch((error) => {
		dispatch({
			type:actionTypes.FETCH_USERS_FAILED,
			payload: error
		})
	})
}
