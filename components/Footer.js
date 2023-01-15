import { MdLocationOn, MdLocalPhone, MdPrint } from "react-icons/md";
import {
	AiFillFacebook,
	AiOutlineTwitter,
	AiOutlineYoutube,
	AiOutlineInstagram,
	AiOutlineGooglePlus,
} from "react-icons/ai";
import { FaLinkedinIn, FaPinterest } from "react-icons/fa";

const Footer = () => {
	const iconClass = "text-orange-600 text-2xl";
	const iconContainer = "flex items-center gap-2";

	return (
		<footer className="w-full flex flex-col items-center justify-center mt-20">
			<div className="container mx-auto py-10 w-full flex flex-col md:flex-row items-center justify-between border-t-2 border-orange-600">
				<div className="text-5xl font-bold mb-5 md:mb-0">Logo</div>
				<div className="w-1/2 flex items-center justify-center">
					<div className="flex flex-col items-start justify-center">
						<div className={`${iconContainer} mb-2`}>
							<MdLocationOn className={iconClass} />
							<p className="text-sm">
								345 Faulconer Drive, Suite 4 - Charlottesville, CA, 12345
							</p>
						</div>
						<div className="flex items-center justify-between mb-8">
							<div className={`${iconContainer} mr-10`}>
								<MdLocalPhone className={iconClass} />
								<p className="text-sm">(123) 456-7890</p>
							</div>
							<div className={iconContainer}>
								<MdPrint className={iconClass} />
								<p className="text-sm">(123) 456-7890</p>
							</div>
						</div>
						<div className="flex items-center gap-6">
							<p className="text-sm text-gray-500">Social Media</p>
							<div className="flex items-center gap-5">
								<AiFillFacebook className={iconClass} />
								<AiOutlineTwitter className={iconClass} />
								<FaLinkedinIn className={iconClass} />
								<AiOutlineYoutube className={iconClass} />
								<AiOutlineInstagram className={iconClass} />
								<AiOutlineGooglePlus className={iconClass} />
								<FaPinterest className={iconClass} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container mx-auto py-10 w-full flex flex-col items-center justify-between">
				<ul className="flex items-start md:items-center justify-center gap-3 mb-3 md:mb-0 md:gap-7 text-xs font-semibold">
					<li>ABOUT US</li>
					<li>CONTACT US</li>
					<li>HELP</li>
					<li>PRIVACY POLICY</li>
					<li>DISCLAIMER</li>
				</ul>
				<p className="text-xs md:text-sm text-center text-gray-500">
					Copyright &copy; {new Date().getFullYear()} Minimumlivingcost. All
					rights reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
