import { BiSearchAlt } from "react-icons/bi";
import { Loader, LoaderOptions } from "google-maps";
import Navbar from "./Navbar";

const Header = () => {
	return (
		<header className="relative h-[90vh]">
			<img
				className="absolute z-10 h-full w-full object-cover"
				style={{ filter: "brightness(0.65)" }}
				src="/cover.png"
				alt=""
			/>
			<div className="relative h-full z-20 container mx-auto flex items-center justify-center">
				<Navbar />
				<div className="w-full flex flex-col md:flex-row items-center justify-between gap-20">
					<h2 className="w-1/2 text-white text-center md:text-left capitalize text-2xl md:text-5xl font-bold leading-snug mb-3 md:mb-0">
						the most affordable <br /> place to stay in the <br /> san francisco
						bay area
					</h2>
					<div className="w-1/2 flex flex-col items-center justify-center gap-10">
						<div id="map" className="w-full h-full bg-white"></div>
						<div className="w-full flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0 py-2.5 px-3 h-auto md:h-20 bg-white rounded-md">
							<select
								className="h-full w-full md:w-2/3 p-1.5 md:p-3 text-gray-600 border md:rounded-l-md border-gray-300"
								name="alltype"
							>
								<option value="all">All Type</option>
							</select>
							<select
								className="h-full w-full md:w-2/3 p-1.5 md:p-3 text-gray-600 border border-gray-300"
								name="neighborhood"
							>
								<option value="neighborhood">Neighborhood</option>
							</select>
							<button className="h-full w-full md:w-1/3 flex items-center justify-center py-1.5 md:py-0 text-white border border-blue-600 md:rounded-r-md bg-blue-600">
								<BiSearchAlt />
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
