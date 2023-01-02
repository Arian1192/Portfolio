import { motion } from "framer-motion";

export const ExperienceCard = () => {
	interface IExperience {
		id: number;
		company?: string;
		description?: string;
	}

	const experience: IExperience[] = [
		{
			id: 1,
			company: "Bluetime Competition",
			description:
				"After finishing my Máster in Full Stack Development, I started to develop for BLUEMOTION-COMPETITION their landing page.",
		},
		{
			id: 2,
			company: "Nuclio Digital School",
			description:
				"The academy where I studied the Master, offered me to mentor the students of the next edition, to help them in their development as developers.",
		},
	];

	return (
		<>
			{experience.map((exp) => (
				<motion.div
					key={exp.id}
					className="relative  w-3/6 cursor-pointer max-md:w-4/5 md:w-4/5 max-sm:w-full p-2 mt-10 mb-10"
					initial={{ opacity: 0, x: 700 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1.3 }}
				>
					<div className="absolute  inset-0 mx-2 bg-gradient-to-bl bg-clip-padding from-yellow-400 to-purple-400 rotate-180 blur-md "></div>
					<div className="relative  rounded-2xl bg-[#21222c] p-6 max-sm:w-full">
						<p className="text-white text-end">{exp.company}</p>
						<br />
						<p className="text-white">{exp.description}</p>
					</div>
				</motion.div>
			))}
		</>
	);
};
