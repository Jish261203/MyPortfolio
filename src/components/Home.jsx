import React from "react";
import HeroImage1 from "../assets/heroImage1.png";
import { FaPersonWalkingArrowRight } from "react-icons/fa6";
import { Link } from "react-scroll";

const Home = () => {
	return (
		<div
			name="home"
			className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 ">
			<div
				className="max-w-screen-lg mx-auto flex flex-col
      items-center justify-center h-full px-4 md:flex-row">
				<div className="flex flex-col justify-center h-full">
					<h2 className="text-4xl sm:text-7xl font-bold text-white">
						{" "}
						I'm a Business Analyst
					</h2>
					<p className="text-gray-400 py-4 max-w-md">
						PGDM candidate specializing in Finance with a minor in Analytics,
						with skill set honed through hands-on experience in business
						analysis and automation. Proven ability to conduct market research,
						analyze data, automate tasks, and collaborate with cross-functional
						teams to deliver results. Seeking to enhance and utilize these
						skills while developing managerial qualities and promoting
						organizational growth.
					</p>
					<div>
						<Link
							to="portfolio"
							smooth
							duration={500}
							className="group text-yellow-100 w-fit px-6 py-3 my-2
            flex items-center rounded-md bg-gradient-to-r from-emerald-500 via-teal-700 to-teal-900 cursor-pointer">
							Portfolio
							<span className="group-hover:rotate-90 duration-300">
								<FaPersonWalkingArrowRight size={25} className="ml-1" />
							</span>
						</Link>
					</div>
				</div>

				<div>
					<img
						src={HeroImage1}
						alt="my profile"
						className="rounded-2xl mx-auto w-2/3 md:w-[70%]"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
