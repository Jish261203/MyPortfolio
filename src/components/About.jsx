import React from "react";

const About = () => {
	return (
		<div
			name="about"
			className="w-full h-screen bg-gradient-to-b from-gray-800
        to-black text-white">
			<div
				className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
        w-full h-full">
				<div className="pb-8">
					<p
						className="text-4xl font-bold inline border-b-4
          border-gray-500">
						About
					</p>
				</div>
				<h2 className="text-xl sm:text-xl font-bold text-white underline">
					EXPERIENCE
				</h2>
				<p className="text-xl mt-10">
					Senior Executive - Business Analyst |Versa Networks, Bangalore
					Mar2022-May2023. • Conducted market research and competitor analysis
					to identify emerging trends, threats, and opportunities in the
					industry, producing comparison dashboards and executive briefings. •
					Collaborated with cross-functional teams to identify opportunities for
					process improvement and automation, increasing efficiency of the
					project by 20-25%. • Produced monthly and quarterly reports,
					additionally examined revenue based performance of global accounts and
					also identified trends and insights for the business decision.
					Skills:- Data Analysis · Microsoft Power BI · Microsoft Excel · Excel
					Dashboards · Business Analysis · Python
				</p>
				<br />

				<p className="text-xl mt-10">
					Systems Engineer | INFOSYS Limited, Pune-India. Oct, 2020 –Mar2022. 
					Worked on Alteryx tool forExtraction of data from multiple sources and
					Transform it as per requirement and finally load the data in
					Excel/Database. Also used for Analysis of data.  Created automated
					processes using Python scripts and Macros to ensure timely completion
					of business day tasks.  Implementing web scraping techniques using
					libraries such as Requests, Selenium, and lxml to gatherrelevant data
					from various sources.  Overall, my goal was to ensure that clients
					received reliable, high-quality data and reports that met their
					specific needs in a timely manner. Skills: - Alteryx · Microsoft Power
					BI · Tableau · SQL · Microsoft Excel · Python
				</p>
				<br />
			</div>
		</div>
	);
};

export default About;
