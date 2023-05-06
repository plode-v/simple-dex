import { Link } from "react-router-dom"

const Header = () => {
	return (
		<nav className="font-epilogue font-semibold py-5 text-white fixed w-full">
			<div className={`lex items-center justify-between`}>
				<ul className="flex gap-3 px-[3vw] items-center">
					<Link to="/tokens">
						<li className="hover:bg-[#9ba4b525] hover:opacity-80 py-2 px-4 rounded-sm">
							Tokens
						</li>
					</Link>
					<Link to="/">
						<li className="hover:bg-[#9ba4b525] hover:opacity-80 py-2 px-4 rounded-sm">
							Swap
						</li>
					</Link>
				</ul>
			</div>
		</nav>
	)
}

export default Header