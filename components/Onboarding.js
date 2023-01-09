const Onboarding = () => {
	return (
		<section className="my-10 md:my-20">
			<div className="container mx-auto flex flex-col items-center justify-center gap-10">
				<h3 className="text-xl md:text-2xl font-bold">
					Your property with us and be Confident that Your Room will be Filled
					Out!
				</h3>
				<form className="bg-white drop-shadow-lg p-5 md:p-16 rounded-lg w-full">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 mb-5">
						<div className="flex flex-col items-start justify-start">
							<label htmlFor="name" className="font-bold mb-1">
								Name <span className="text-orange-600">*</span>
							</label>
							<input
								type="text"
								className="bg-gray-100 px-2 py-3 rounded-md border border-gray-300 w-full"
								placeholder="Enter Name"
							/>
						</div>
						<div className="flex flex-col items-start justify-start">
							<label htmlFor="name" className="font-bold mb-1">
								Address <span className="text-orange-600">*</span>
							</label>
							<input
								type="text"
								className="bg-gray-100 px-2 py-3 rounded-md border border-gray-300 w-full"
								placeholder="Enter Address"
							/>
						</div>
						<div className="flex flex-col items-start justify-start">
							<label htmlFor="name" className="font-bold mb-1">
								Unit Number <span className="text-orange-600">*</span>
							</label>
							<input
								type="number"
								className="bg-gray-100 px-2 py-3 rounded-md border border-gray-300 w-full"
								placeholder="Enter Unit"
							/>
						</div>
						<div className="flex flex-col items-start justify-start">
							<label htmlFor="city" className="font-bold mb-1">
								City <span className="text-orange-600">*</span>
							</label>
							<select
								id="city"
								className="bg-gray-100 px-2 py-3 rounded-md border border-gray-300 w-full"
							>
								<option selected>Select City</option>
								<option value="ACC">Accra</option>
								<option value="KSI">Kumasi</option>
								<option value="KO">Koforidua</option>
								<option value="OB">Obuasi</option>
							</select>
						</div>
						<div className="flex flex-col items-start justify-start">
							<label htmlFor="state" className="font-bold mb-1">
								State <span className="text-orange-600">*</span>
							</label>
							<select
								id="state"
								className="bg-gray-100 px-2 py-3 rounded-md border border-gray-300 w-full"
							>
								<option selected>Select State</option>
								<option value="CL">California</option>
								<option value="TX">Texas</option>
								<option value="FL">Florida</option>
								<option value="DC">Washington</option>
							</select>
						</div>
						<div className="flex flex-col items-start justify-start">
							<label htmlFor="room" className="font-bold mb-1">
								Room Type <span className="text-orange-600">*</span>
							</label>
							<select
								id="room"
								className="bg-gray-100 px-2 py-3 rounded-md border border-gray-300 w-full"
							>
								<option selected>Select Room Type</option>
								<option value="private">Private</option>
								<option value="commercial">Commercial</option>
							</select>
						</div>
						<div className="flex flex-col items-start justify-start">
							<label htmlFor="name" className="font-bold mb-1">
								Price <span className="text-orange-600">*</span>
							</label>
							<input
								type="number"
								className="bg-gray-100 px-2 py-3 rounded-md border border-gray-300 w-full"
								placeholder="Enter Price"
							/>
						</div>
					</div>
					<div className="mb-5">
						<label htmlFor="description" className="font-bold mb-1">
							Description <span className="text-orange-600">*</span>
						</label>
						<textarea
							rows="5"
							className="bg-gray-100 px-2 py-3 rounded-md border border-gray-300 w-full"
							placeholder="Enter Description"
						/>
					</div>
					<div className="flex flex-col items-start justify-center w-full">
						<label htmlFor="file" className="font-bold mb-1">
							Upload Photos
						</label>
						<div className="flex flex-col items-center justify-center w-full border-2 border-orange-600 border-dashed rounded-lg cursor-pointer bg-gray-100">
							<div className="flex flex-col items-center justify-center pt-5 pb-6">
								<svg
									aria-hidden="true"
									className="w-10 h-10 mb-3 text-gray-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
									></path>
								</svg>
								<p className="mb-2 text-sm text-orange-600">
									<span className="font-semibold text-black">
										Drag your images here, or
									</span>{" "}
									browse
								</p>
								<p className="text-xs text-gray-500">
									Supported: JPG, JPEG, PNG
								</p>
							</div>
							<input id="dropzone-file" type="file" className="hidden" />
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Onboarding;
