import Image from "next/image";
import Link from "next/link";

import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
	return (
		<nav className="absolute top-0 h-16 w-full border-b border-gray-300 flex items-center justify-center">
			<div className="container mx-auto flex items-center justify-between">
				<Image
					src="/logo-white.png"
					alt="Company Logo"
					width={100}
					height={50}
				/>
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
				<div className="block md:hidden">
					<HiMenuAlt3 className="text-3xl text-white" />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
