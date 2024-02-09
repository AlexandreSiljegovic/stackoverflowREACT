

function Navbar() {
	return (
		<nav className="flex items-end">
			<div className="relative mr-3 md:mr-0 hidden md:block">
				<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
					<svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
							clipRule="evenodd"
						></path>
					</svg>
				</div>
				<input
					type="text"
					id="email-adress-icon"
					className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2"
					placeholder="Search..."
				/>
			</div>
			<div className="mt-auto">
				<div className="pt-6 flex">
					<a
						className="flex justify-center items-center px-4 py-3 mb-3 leading-loose text-xs font-semibold leading-none bg-gray-200 hover:bg-gray-100 rounded-xl mr-2 h-12 w-24"
						href="#"
					>
						Log in
					</a>
					<a
						className="flex justify-center items-center px-4 py-3 mb-2 leading-loose text-xs text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl h-12 w-24"
						href="#"
					>
						Sign Up
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
