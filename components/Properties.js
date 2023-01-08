import { useState } from "react";
import PropertyCard from "./PropertyCard";
import { Pagination } from "@mui/material";

const Properties = ({ properties }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [propertiesPerPage] = useState(8);

	const indexOfLastProperty = currentPage * propertiesPerPage;
	const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
	const currentProperties = properties.slice(
		indexOfFirstProperty,
		indexOfLastProperty
	);

	const paginate = (value) => {
		setCurrentPage(value);
		window.scrollTo({ top: 1800, behavior: "smooth" });
	};

	return (
		<section className="bg-orange-50 py-20">
			<div className="container mx-auto flex flex-col items-center justify-center">
				<div className="w-full flex items-center justify-between mb-10">
					<h1 className="capitalize font-bold text-xl md:text-3xl">
						<span className="border-b-4 border-orange-600">List</span> of
						Properties
					</h1>
					<button className="bg-orange-600 text-sm md:text-base text-white px-6 py-3 rounded-md">
						View all properties
					</button>
				</div>
				<div className="w-full grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-14 mb-8">
					{currentProperties.map((property) => (
						<PropertyCard
							key={property.id}
							name={property.name}
							type={property.roomType}
							amount={property.rent}
							bedrooms={property.bedrooms}
							bathrooms={property.bath}
							size={property.sqrInch}
						/>
					))}
				</div>
				<div>
					{properties.length > 8 && (
						<Pagination
							color="secondary"
							shape="rounded"
							variant="outlined"
							size="large"
							defaultPage={1}
							count={Math.ceil(properties.length / propertiesPerPage)}
							page={currentPage}
							onChange={paginate}
						/>
					)}
				</div>
			</div>
		</section>
	);
};

export default Properties;
