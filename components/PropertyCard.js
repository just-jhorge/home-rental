import { FaBed } from "react-icons/fa";
import { GiBathtub } from "react-icons/gi";
import { RxDimensions } from "react-icons/rx";

const PropertyCard = ({
	name,
	type,
	amount,
	bedrooms,
	bathrooms,
	size,
	imgSrc,
}) => {
	return (
		<div className="w-full h-auto md:h-[28rem] flex flex-row md:flex-col md:rounded-lg bg-white hover:shadow-2xl transition-shadow duration-200">
			<div className="h-full md:h-1/2 w-1/3 md:w-full bg-yellow-500 md:rounded-t-lg">
				<img
					src={imgSrc}
					className="h-full w-full md:rounded-t-md object-cover"
					alt="Property Image"
				/>
			</div>
			<div className="h-full md:h-1/2 w-2/3 md:w-full flex flex-col items-center justify-between md:rounded-b-lg md:border-l md:border-b md:border-r border-gray-200">
				<div className="p-4 mb-1">
					<h3 className="text-base md:text-xl font-semibold mb-5">{name}</h3>
					<p className="capitalize text-xs md:text-sm text-gray-500">
						{type} room
					</p>
					<p className="text-orange-600 font-bold text-lg md:text-2xl">
						${amount}/Month
					</p>
				</div>
				<div className="w-full text-xs md:text-base py-2 md:py-0 flex-1 rounded-b-lg border-t border-gray-200 grid grid-cols-3 font-bold">
					<div className="justify-self-center self-center flex gap-3 items-center">
						<FaBed />
						{bedrooms}
					</div>
					<div className="justify-self-center self-center flex gap-3 items-center">
						<GiBathtub />
						{bathrooms}
					</div>
					<div className="justify-self-center self-center flex gap-3 items-center">
						<RxDimensions />
						{size}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PropertyCard;
