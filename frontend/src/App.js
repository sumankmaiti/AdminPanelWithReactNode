import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './screens/Home'
import View from './screens/View'

function App() {
  return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/view' element={<View />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App;
