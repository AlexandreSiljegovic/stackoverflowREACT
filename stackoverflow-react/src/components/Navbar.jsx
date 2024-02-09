import React, { useState } from "react";
import Signin from "../components/Signin";
import Signup from "../components/Signup";

function Navbar() {
	const [showSignin, setShowSignInForm] = useState(true);

	const handleSignup = () => {
		setShowSignInForm(false);
	};

	return (
		<nav className="flex items-end md-8">
			{showSignin ? <Signin /> : <Signup />}
			<div className="mt-auto">
				<div className="pt-6 flex items-center">
					<input
						type="button"
						className="flex justify-center px-4 py-3 mb-3 leading-loose text-xs font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl mr-2 h-12 w-24"
						value="Sign in !"
						onClick={() => setShowSignInForm(true)}
					/>
					<input
						type="button"
						className="flex justify-center px-4 py-3 mb-2 leading-loose text-xs text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl h-12 w-24"
						value="Sign Up"
						onClick={handleSignup}
					/>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
