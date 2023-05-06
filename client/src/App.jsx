import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Header, Swap, Tokens } from "./components"

function App() {

	return (
		<div className="from-[#16223b] to-[#080e1c] bg-gradient-to-bl">
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Swap />} />
					<Route path="/tokens" element={<Tokens />} />
				</Routes>
			</Router>

		</div>
	)
}

export default App
