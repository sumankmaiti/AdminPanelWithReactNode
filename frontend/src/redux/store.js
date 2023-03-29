import { configureStore } from '@reduxjs/toolkit'

import {fetchAllUserReducer} from './reducers/fetchAllUserReducer'

const reducer = {
	allUsers: fetchAllUserReducer
}

// const store = createStore(reducer)
const store = configureStore({
	reducer: reducer
})

export default store;