const Navbar = () => {
	return (
		<nav className="absolute top-0 h-16 w-full border-b border-gray-300 flex items-center justify-between">
			<div>logo</div>
			<ul className="h-full hidden md:flex items-center gap-20 text-xl text-white">
				<li className="h-full flex items-center justify-center border-b-2 border-white">
					Home
				</li>
				<li>Landlord</li>
				<li>Tenants</li>
				<li>Contact Us</li>
			</ul>
			<div className="hidden md:flex items-center justify-center gap-5 text-white">
				<button>Log in</button>
				<button>Sign Up </button>
			</div>
		</nav>
	);
};

export default Navbar;
