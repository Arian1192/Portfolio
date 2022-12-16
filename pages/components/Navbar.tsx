import Link from "next/link";
import React, { useState } from "react";
import IconHambuger from "./IconHambuger";
import CloseIconHamburger from "./CloseIconHamburger";
import { motion } from "framer-motion";
import Typed from "react-typed";
import {ISection} from "../Interfaces/ISection";


const sections:ISection[] = [
	{
		id: 1,
		name: "Home",
		link: "/",
	},
	{
		id: 2,
		name: "About",
		link: "/about",
	},
	{
		id: 3,
		name: "Projects",
		link: "/projects",
	},
	{
		id: 4,
		name: "Contact",
		link: "/contact",

	}
]

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	console.log(menuOpen);
	return (
		<>
			<div className="w-4/5 p-5 mx-auto 2xl:w-2/4  max-md:w-full flex flex-row justify-between max-sm:w-full z-50">
				<div>
					<span className='text-white'>dev.</span>
					<Typed
						strings={[
							"",
							"",
							"",
							"",
							"Arian",
							"",
							"",
							"",
							"",
							"",
							"",
							"Sleep",
							"Code",
							"Repeate",
						]}
						typeSpeed={50}
						backSpeed={100}
						loop
						className="font-semibold text-3xl bg-gradient-to-r text-transparent from-slate-200 bg-clip-text to-amber-400"
					/>
				</div>
				<ul className="flex flex-row gap-12 max-sm:hidden text-white text-2xl  justify-between items-end">
					{sections.map((section:ISection ) => (
						<li key={section.id} className='hover:text-amber-200'>
							<Link href={section.link}>{section.name}</Link>
						</li>
					))}
				</ul>
				{menuOpen && (
					<button className="md:hidden " onClick={() => setMenuOpen(!menuOpen)}>
						<CloseIconHamburger color="#ffffb3" />
					</button>
				)}
				{!menuOpen && (
					<button className="md:hidden " onClick={() => setMenuOpen(!menuOpen)}>
						<IconHambuger color="#ffffb3" />
					</button>
				)}
			</div>
			{menuOpen && (
				<motion.div
					className="w-full  mx-auto text-3xl bg-black"
					animate={{
						scale: [0, 1],
						x: [-600, 0],}}>
					<motion.ul
						className="absolute h-screen py-5 w-full bg-cyan-800 flex flex-col items-center justify-center gap-10 text-[#ffffb3] text-5xl"
						animate={{ scale: [0, 0.5, 1], y: [-600, 0] }}>
						{sections.map((section:ISection ) => (
							<li key={section.id} className='hover:text-amber-200' >
								<Link href={section.link}>{section.name}</Link>
							</li>
						))}
					</motion.ul>
				</motion.div>
			)}
		</>
	);
};
export default Navbar;
