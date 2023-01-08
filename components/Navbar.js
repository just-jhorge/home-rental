import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="absolute top-0 h-16 w-full border-b border-gray-300 flex items-center justify-between">
			<div>logo</div>
			<div className="h-full hidden md:flex items-center gap-20 text-xl text-white">
				<Link href="/">Home</Link>
				<Link href="/landlord">Landlord</Link>
				<Link href="/tenants">Tenants</Link>
				<Link href="/contact">Contact Us</Link>
			</div>
			<div className="hidden md:flex items-center justify-center gap-5 text-white">
				<Link href="/login">
					<button>Log in</button>
				</Link>
				<Link href="signup">
					<button>Sign Up </button>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
