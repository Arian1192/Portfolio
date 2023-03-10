import Head from "next/head";
import Navbar from "../components/Navbar";
import PortfolioHome from "../components/PortfolioHome";
import { motion } from "framer-motion";
export default function Home() {

	const date = new Date().getFullYear();

	return (
		<div className="overflow-hidden">
			<Head>
				{/*<title>Arian Portfolio</title>*/}
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header>
				<Navbar />
			</header>
			<main>
				<>
					<PortfolioHome
						title="Oh hello there!"
						presentation="I'm Arian Collaso"
					/>
					<motion.div
						className="flex flex-col justify-start mx-auto w-1/4 mt-10"
						initial={{ opacity: 0, y: 700 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1.5 }}
					>
						<hr />
					</motion.div>
				</>
			</main>

			<footer className="w-full flex flex-row items-center justify-center mt-20 mb-20 text-lg text-white">
				<h2>{`@ ${date}`}</h2>
			</footer>
		</div>
	);
}
