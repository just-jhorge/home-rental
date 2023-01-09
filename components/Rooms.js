const Rooms = () => {
	return (
		<section className="my-20">
			<div className="container mx-auto flex items-center justify-center gap-20">
				<div className="hidden md:block w-1/2">images</div>
				<div className="w-full md:w-1/2">
					<h1 className="font-black text-3xl md:text-5xl leading-snug mb-5">
						Flexibility and options <br />
						to suit your lifestyle.
					</h1>
					<p className="md:leading-loose text-gray-600 text-base md:text-lg mb-6 md:mb-10">
						You need it? We got it. We make finding your next home easy,
						comfortable, and simple. From our happiness guarantee to our
						selective roommate finder option. We provide you the flexibility
						that you most desire.
					</p>
					<button className="bg-orange-600 text-white font-semibold px-4 md:px-7 py-2.5 md:py-4 rounded-md">
						Search Rooms
					</button>
				</div>
			</div>
		</section>
	);
};

export default Rooms;
