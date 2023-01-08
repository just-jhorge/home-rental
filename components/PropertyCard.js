import { FaBed } from "react-icons/fa";
import { GiBathtub } from "react-icons/gi";
import { RxDimensions } from "react-icons/rx";

const PropertyCard = ({ name, type, amount, bedrooms, bathrooms, size }) => {
	return (
		<div className="w-full h-[28rem] rounded-lg bg-white hover:shadow-2xl transition-shadow duration-200">
			<div className="h-1/2 bg-yellow-500 rounded-t-lg">image</div>
			<div className="h-1/2 flex flex-col items-center justify-between rounded-b-lg border-l border-b border-r border-gray-200">
				<div className="p-4 mb-1">
					<h3 className="text-xl font-semibold mb-5">{name}</h3>
					<p className="capitalize text-sm text-gray-500">{type} room</p>
					<p className="text-orange-600 font-bold text-2xl">${amount}/Month</p>
				</div>
				<div className="w-full flex-1 rounded-b-lg border-t border-gray-200 grid grid-cols-3 font-bold">
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
