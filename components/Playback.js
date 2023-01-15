import { ImQuotesLeft } from "react-icons/im";
import ReactPlayer from "react-player/youtube";

const Playback = () => {
	return (
		<section className="h-[27rem] w-full bg-orange-50 flex items-center justify-center">
			<div className="h-full container flex items-center justify-center gap-10">
				<div className="h-full w-1/2 py-20">
					<div className="relative">
						<ImQuotesLeft className="absolute -top-14 -left-14 text-8xl text-red-300 opacity-50" />
						<p className="leading-loose font-semibold mb-5">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
							quos, dicta mollitia nemo velit voluptas quibusdam soluta
							consequatur hic itaque nulla repellendus officia consectetur
							veritatis aut molestias ipsum ducimus iste? Placeat, eveniet
							fugiat magni incidunt, qui corrupti doloremque in eius eaque
							voluptates aut quos quidem possimus dicta harum deleniti.
						</p>
						<div className="flex items-center justify-start gap-5 mb-10">
							<img
								src="/avatar.avif"
								className="h-12 w-12 rounded-full ring-4 ring-red-500"
								alt=""
							/>
							<div>
								<h5 className="font-bold text-orange-600 text-base">
									Harry Wilson
								</h5>
								<p className="text-sm text-gray-600">Property Owner</p>
							</div>
						</div>
						<div className="flex items-center gap-3">
							<div className="h-2 w-2 rounded-full bg-orange-600"></div>
							<div className="h-2 w-2 rounded-full bg-gray-400"></div>
							<div className="h-2 w-2 rounded-full bg-gray-400"></div>
						</div>
					</div>
				</div>
				<div className="w-1/2">
					<ReactPlayer url="https://youtu.be/QxCLWQdZdmg" height={432} />
				</div>
			</div>
		</section>
	);
};

export default Playback;
