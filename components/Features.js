const Features = () => {
	return (
		<section className="my-10 md:my-20">
			<div className="container mx-auto">
				<h1 className="capitalize text-center md:text-left font-bold text-xl md:text-3xl mb-10">
					<span className="md:border-b-4 border-orange-600">
						minimum living cost
					</span>{" "}
					takes care of everything
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-3 md:gap-20">
					<div className="col-span-1 bg-red-500">image</div>
					<div className="col-span-2 py-8 md:py-14 grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-y-5 md:gap-y-14">
						<div>
							<div className="h-14 w-14 rounded-md mb-3 bg-white flex items-center justify-center shadow-md">
								<img src="/currency.svg" className="h-8 w-8" alt="" />
							</div>
							<p className="text-sm md:text-xl font-bold">
								Pay As Little <br /> As Possible!
							</p>
						</div>
						<div>
							<div className="h-14 w-14 rounded-md mb-3 bg-white flex items-center justify-center shadow-md">
								<img src="/building.svg" className="h-8 w-8" alt="" />
							</div>
							<p className="text-sm md:text-xl font-bold">
								Enjoy Wisdom <br /> Of Community!
							</p>
						</div>
						<div>
							<div className="h-14 w-14 rounded-md mb-3 bg-white flex items-center justify-center shadow-md">
								<img src="/stack.svg" className="h-8 w-8" alt="" />
							</div>
							<p className="text-sm md:text-xl font-bold">
								Let's Somebody Else <br /> Take Care Of Landlord!
							</p>
						</div>
						<div>
							<div className="h-14 w-14 rounded-md mb-3 bg-white flex items-center justify-center shadow-md">
								<img src="/flower.svg" className="h-8 w-8" alt="" />
							</div>
							<p className="text-sm md:text-xl font-bold">
								Enjoy Peaceful <br /> Environment!
							</p>
						</div>
						<div>
							<div className="h-14 w-14 rounded-md mb-3 bg-white flex items-center justify-center shadow-md">
								<img src="/badge.svg" className="h-8 w-8" alt="" />
							</div>
							<p className="text-sm md:text-xl font-bold">
								Stay Safe! <br /> Save Money!!
							</p>
						</div>
						<div>
							<div className="h-14 w-14 rounded-md mb-3 bg-white flex items-center justify-center shadow-md">
								<img src="/moon.svg" className="h-8 w-8" alt="" />
							</div>
							<p className="text-sm md:text-xl font-bold">
								Pay For What <br /> You Use!
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
