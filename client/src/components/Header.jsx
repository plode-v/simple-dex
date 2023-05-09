import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {

	const [isOpen, setIsOpen] = useState(false);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	}

	return (
		<nav className="font-epilogue font-semibold py-5 text-white fixed w-full">
			<div className={`flex items-center justify-between px-[4vw]`}>
				<ul className="flex gap-3 items-center">
					<li>
						<img src="" alt="" />
					</li>
					<div className="lg:hidden">
						<button type="button" className="focus:outline-none" onClick={toggleNavbar}>
							menu
						</button>
					</div>
					<Link to="/tokens">
						<li className="hover:bg-[#9ba4b525] hover:opacity-80 py-2 px-4 rounded-full hover:scale-105 duration-100">
							Tokens
						</li>
					</Link>
					<Link to="/">
						<li className="hover:bg-[#9ba4b525] hover:opacity-80 py-2 px-4 rounded-full hover:scale-105 duration-100">
							Swap
						</li>
					</Link>
				</ul>
				<ul className="flex items-center gap-3 justify-center">
					<li className="bg-slate-500 px-4 py-2 rounded-full flex gap-2 cursor-pointer hover:scale-105 duration-100 items-center">
						<img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Ethereum-icon-purple.svg" alt="chain" className="w-[18px] h-[18px] bg-white bg-opacity-50 rounded-full" />
						<span>Ethereum</span>
					</li>
					<li className="bg-violet-400 px-4 py-2 rounded-full cursor-pointer duration-100 hover:scale-105">
						<span className="text-white">Connect</span>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Header