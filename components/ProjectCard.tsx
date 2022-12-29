import { motion } from "framer-motion";
import { IGithubRepo } from "../utils/getReposFromGithub";
import { useState } from "react";

const ProjectCard: React.FC<{ repo: IGithubRepo }> = (props) => {
	const { repo } = props;
	const { name, description, html_url, language } = repo;
    const [open , setOpen] = useState(false)
	const handleClick = (html_url: string) => {
		window.open(html_url, "_blank");
	};

	const textMotion = {
		rest: {
			color: "text-white",
			transition: {
				duration: 0.5,
				type: "spring",
				stiffness: 100,
				ease: "easeIn",
			},
		},
		hover: {
			color: "text-[#21222c]",
			transition: {
				duration: 0.5,
				type: "spring",
				stiffness: 100,
				ease: "easeOut",
			},
		},
	};
	const slashMotionLeft = {
		rest: {
			opacity: 1,
			scale: 1,
			ease: "easeOut",
			duration: 0.2,
			type: "tween",
			rotate: 180,
		},
		hover: {
			rotate: 0,
			scale: 1.5,
			opacity: 1,
			transition: {
				duration: 0.4,
				type: "tween",
				ease: "easeIn",
			},
		},
	};

	const slashMotionRigth = {
		rest: {
			opacity: 1,
			scale: 1,
			ease: "easeOut",
			duration: 0.2,
			type: "tween",
			rotate: 0,
		},
		hover: {
			rotate: 180,
			opacity: 1,
			scale: 1.5,
			transition: {
				duration: 0.4,
				type: "tween",
				ease: "easeIn",
			},
		},
	};

	return (
		<motion.div
			className="relative w-2/5  cursor-pointer max-md:w-2/5 md:w-2/5 max-sm:w-full px-3 py-2 mt-10 mb-24"
			initial={{ opacity: 0, x: -700 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.4 }}
			whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
		>
			<div style={open? {height: "200px"}: undefined} className="absolute inset-0 mx-2 bg-gradient-to-bl bg-clip-padding from-yellow-400 to-purple-400 rotate-180  blur-md"></div>
			<motion.div  style={open? {height: "200px"}:undefined} className="relative rounded-2xl bg-[#21222c] p-5   max-sm:w-full">
				<div className='flex flex-row justify-between'>
					<h1 className="text-white mb-5 text-ellipsis whitespace-nowrap overflow-hidden">
						{name}
					</h1>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6 text-white"
                        style={{transform: open? "rotate(180deg)": undefined, transition: "0.5s", color:open? "palevioletred": "paleturquoise"} }
                        onClick={() => setOpen(!open)}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
						/>
					</svg>
				</div>
				<div className="flex justify-end">
					<button className="w-full text-white border border-gray-500 p-2 rounded flex justify-around  divide-x divide-gray-500 gap-2">
						<motion.span
							className="text-green-300 flex gap-2 pr-2 ml-3"
							initial="rest"
							animate="rest"
							whileHover="hover"
						>
							<motion.svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6 max-sm:w-4 max-sm:h-4 max-sm:text-sm max-sm:mt-0.5"
								variants={slashMotionLeft}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
								/>
							</motion.svg>
							<span className="text-white max-sm:text-sm">Project Site</span>
						</motion.span>
						<motion.span
							className="text-yellow-300 pl-4 flex group/code hover:text-green-500"
							initial="rest"
							animate="rest"
							whileHover="hover"
						>
							<motion.svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								// className="w-6 h-6 rotate-180 group-hover/code:rotate-0 group-hover/code:transition-transform group-hover/code:ease-in duration-1000 max-sm:w-4 max-sm:h-4 max-sm:text-sm max-sm:mt-0.5"
								className="w-6 h-6 rotate-180  max-sm:w-4 max-sm:h-4 max-sm:text-sm max-sm:mt-0.5"
								variants={slashMotionLeft}
							>
								<path
									fillRule="evenodd"
									d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
									clipRule="evenodd"
								/>
							</motion.svg>
							<motion.span
								className="text-white  max-sm:text-sm "
								onClick={() => handleClick(html_url)}
								onTouchEnd={() => {
									handleClick(html_url);
								}}
								variants={textMotion}
							>
								Go to Github
							</motion.span>
							<motion.svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-6 h-6 rotate-180  max-sm:w-4 max-sm:h-4 max-sm:text-sm max-sm:mt-0.5"
								variants={slashMotionRigth}
							>
								<path
									fillRule="evenodd"
									d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
									clipRule="evenodd"
								/>
							</motion.svg>
						</motion.span>
					</button>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default ProjectCard;
