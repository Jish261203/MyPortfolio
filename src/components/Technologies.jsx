import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import django from "../assets/django.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import github from "../assets/github.png";

const Technologies = () => {
	const techs = [
		{
			id: 1,
			src: html,
			title: "HTML",
			style: "shadow-orange-500",
		},
		{
			id: 2,
			src: css,
			title: "CSS",
			style: "shadow-blue-500",
		},
		{
			id: 3,
			src: javascript,
			title: "Javascript",
			style: "shadow-yellow-500",
		},
		{
			id: 4,
			src: react,
			title: "React",
			style: "shadow-blue-600",
		},
		{
			id: 5,
			src: node,
			title: "Node",
			style: "shadow-lime-600",
		},
		{
			id: 6,
			src: python,
			title: "Python",
			style: "shadow-blue-900",
		},
		{
			id: 7,
			src: django,
			title: "Django",
			style: "shadow-green-500",
		},
		{
			id: 8,
			src: tailwind,
			title: "Tailwind",
			style: "shadow-sky-500",
		},
		{
			id: 9,
			src: github,
			title: "GitHub",
			style: "shadow-gray-400",
		},
	];
	return (
		<div
			name="technology"
			className="bg-gradient-to-b
        from-gray-800 to-black w-full h-screen">
			<div
				className="max-w-screen-lg mx-auto p-4 flex flex-col
        justify-center w-full h-full text-white">
				<div>
					<p
						className="text-4xl font-bold inline border-b-4
                    p-2 border-gray-500">
						Techonolgies
					</p>
					<p className="py-6">Technologies I've worked with</p>
				</div>

				<div
					className="w-full grid grid-cols-3 sm:grid-cols-3
                gap-8 text-center py-8 px-12 sm:px-0">
					{techs.map(({ id, src, title, style }) => (
						<div
							key={id}
							className={`shadow-md hover:scale-105 duration-500
                    py-2 rounded-lg ${style}`}>
							<img src={src} alt="" className="w-20 mx-auto  " />
							<p className="mt-4">{title}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Technologies;
