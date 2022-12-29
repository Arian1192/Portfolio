
import Head from "next/head";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { getReposFromGithub, IGithubRepo } from "../utils/getReposFromGithub";


export default function Projects({ repos }: { repos: IGithubRepo[] }) {

	return (
		<div className="overflow-hidden">
			<Head>
				<title>Projects</title>
				<meta name="description" content="Algunos de mis proyectos" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header>
				<Navbar />
			</header>
			<main>
				<div className="w-3/5 flex flex-row mx-auto justify-start items-center lg:w-[1100px] md:w-4/5 max-md:w-3/5 max-sm:w-full">
					<h1
						className="flex flex-row justify-start font-bold items-center mt-24 text-6xl bg-gradient-to-r bg-clip-text  text-transparent
						from-purple-600 via-amber-200 to-amber-500 animate-text max-sm:text-3xl max-sm:ml-4"
					>
						Projects
					</h1>
				</div>
				<motion.div
					className="w-3/5 mt-10 flex flex-col mx-auto justify-start items-start lg:w-[1100px] md:w-4/5 max-md:w-3/5 max-sm:w-full"
					initial={{ opacity: 0, x: 700 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1.3 }}
				>
					<p className="text-white text-2xl mt-5 max-sm:text-[16px] p-5">
						In this section you will find some of the jobs I have worked on or
						am currently working on.
						<br />
						In these projects I try to test my skills by tackling new
						technologies such as Deno.
					</p>
				</motion.div>
				<div className="w-3/5 p-5 gap-10 mx-auto flex flex-row flex-wrap justify-around items-start lg:w-3/5 max-md:w-3/5 md:w-full max-sm:w-full max-sm:flex-col">
                    {repos.map((repo : IGithubRepo) => (
                        <ProjectCard key={repo.id} repo={repo} />
                    ))}
				</div>
			</main>
		</div>
	);
}

export async function getStaticProps() {
	const repos: IGithubRepo[] = await getReposFromGithub("Arian1192");
	return {
		props: { repos },
	};
}
