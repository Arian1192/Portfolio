import ParticlesBg from "./ParticlesBG";
import { motion } from "framer-motion";
import LinkedinIcon from "./linkedinIcon";
import GitHubIcon from "./gitHubIcon";

const PortfolioHome = (props: any) => {
	const { title, presentation } = props;
	return (
		<>
			<div className="mt-24 flex flex-row mx-auto  lg:w-[1100px] max-md:flex-col max-sm:flex-col max-sm:w-full">
				<div className="p-5 mx-auto  max-sm:w-full md:w-4/5 lg:w-3/6 ">
					<motion.h1
						className="text-7xl mt-10 pl-5 bg-gradient-to-r bg-clip-text  text-transparent
            from-slate-50 via-amber-200 to-amber-500
            animate-text max-md:text-5xl max-sm:text-4xl max-sm:w-full"
						initial={{ opacity: 0, y: -100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1.3 }}
					>
						{title}
					</motion.h1>
					<motion.h1
						className="text-8xl pl-5 bg-gradient-to-r bg-clip-text  text-transparent
            from-slate-50 via-amber-200 to-amber-500
            animate-text max-md:text-4xl max-sm:text-5xl"
						initial={{ opacity: 0, x: -200 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.9 }}
					>
						{presentation}
					</motion.h1>
					<motion.p
						className="text-[24px]  mt-5 text-slate-100 pl-5 max-sm:text-slate-100 "
						initial={{ opacity: 0, y: 150 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1.5 }}
					>
						This is my Portfolio 👐!
						<br />I have been a technology lover since I was very young, this
						made me change my plans and my way of life and I started to learn
						web development.
					</motion.p>
				</div>
				<motion.div
					className="w-2/4 mx-auto max-sm:w-full md:w-4/5 lg:w-3/6"
					initial={{ opacity: 0.5, x: 700 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.9 }}
				>
					<ParticlesBg />
				</motion.div>
			</div>
			<div className="w-3/5 mx-auto flex flex-row items-center justify-center">
				<motion.div
					initial={{ opacity: 0.5, x: 700 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.9 }}
					className="cursor-pointer motion-safe:animate-pulse hover:motion-safe:animate-spin"
				>
					<LinkedinIcon />
				</motion.div>
				<motion.div
					initial={{ opacity: 0.5, x: 700 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1.3 }}
					className="cursor-pointer motion-safe:animate-pulse hover:motion-safe:animate-spin"
				>
					<GitHubIcon />
				</motion.div>
			</div>
		</>
	);
};

export default PortfolioHome;
