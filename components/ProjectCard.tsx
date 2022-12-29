import { motion } from "framer-motion";
import { IGithubRepo } from "../utils/getReposFromGithub";

const ProjectCard: React.FC<{repo:IGithubRepo}> = (props) => {
    const { repo } = props;
    const { name, description, html_url, language } = repo;

    const handleClick = (html_url:string) => {
        window.open(html_url, "_blank");
    };
	return (
		<motion.div className="relative w-2/5  cursor-pointer max-md:w-2/5 md:w-2/5 max-sm:w-full px-3 py-2 mt-10 mb-24" initial={{ opacity: 0, x: -700 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }} whileHover={{scale: 1.1, transition:{duration:0.2}}}>
			<div className="absolute inset-0 mx-2 bg-gradient-to-bl bg-clip-padding from-yellow-400 to-purple-400 rotate-180  blur-md"></div>
			<motion.div className="relative rounded-2xl bg-[#21222c] p-5   max-sm:w-full">
				<h1 className="text-white mb-5 text-ellipsis whitespace-nowrap overflow-hidden">{name}</h1>
				<div className="flex justify-end">
					<button className="w-full text-white border border-gray-500 p-2 rounded flex justify-around  divide-x divide-gray-500 gap-2 ">
						<span className="text-green-300 flex gap-2 pr-2 ml-3 group/box">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6 group-hover/box:rotate-90 group-hover/box:transition-all group-hover/box:ease-linear duration-1000  max-sm:w-4 max-sm:h-4 max-sm:text-sm max-sm:mt-0.5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
								/>
							</svg>
							<span className="text-white max-sm:text-sm">Project Site</span>
						</span>
						<span className="text-yellow-300 pl-4 flex group/code hover:text-green-500">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-6 h-6 rotate-180 group-hover/code:rotate-0 group-hover/code:transition-all group-hover/code:ease-linear duration-1000 max-sm:w-4 max-sm:h-4 max-sm:text-sm max-sm:mt-0.5"
							>
								<path
									fillRule="evenodd"
									d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
									clipRule="evenodd"
								/>
							</svg>
							<span className="text-white  max-sm:text-sm" onClick={() => handleClick(html_url)}>Go to Github</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-6 h-6 rotate-0 group-hover/code:rotate-180 group-hover/code:transition-all group-hover/code:ease-linear duration-1000 max-sm:w-4 max-sm:h-4 max-sm:text-sm max-sm:mt-0.5"
							>
								<path
									fillRule="evenodd"
									d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
					</button>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default ProjectCard;
