import { Route, Routes } from "react-router-dom"
import { Header, Swap } from "./components"
import { colors } from "./constants"

function App() {

	return (
		<div className="bg-red-400">
			<Header />
			<div>
				<Routes>
					<Route path="/" element={Swap} />
				</Routes>
			</div>	
		</div>
	)
}

export default App
