import Link from "next/link";
import { useState, useEffect } from "react";
import IconHambuger from "./IconHambuger";
import CloseIconHamburger from "./CloseIconHamburger";
import { motion } from "framer-motion";

import { ISection } from "../Interfaces/ISection";

const sections: ISection[] = [
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
	},
];

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [color, setColor] = useState('transparent')
	const [textcolor, setTextColor] = useState('white')
	useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 10) {
                setColor('#21222c')
                setTextColor('white')
            } else {
                setColor('transparent')
                setTextColor('white')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])

	return (
		<div style={{backgroundColor: `${color}`}} className="fixed left-0 top-0 w-full z-10">
			<div className="w-4/5 p-5 mx-auto 2xl:w-2/4   max-md:w-full flex flex-row justify-between max-sm:w-full z-50">
				<div>
					<span className="text-white">dev.</span>
				</div>
				<ul style={{color: `${textcolor}`}} className="flex flex-row gap-12 max-sm:hidden text-white text-2xl  justify-between items-end">
					{sections.map((section: ISection) => (
						<li key={section.id} className="hover:text-amber-200">
							<Link href={section.link}>{section.name}</Link>
						</li>
					))}
				</ul>
				{!menuOpen && (
					<button className="md:hidden " onClick={() => setMenuOpen(!menuOpen)}>
						<IconHambuger color="#ffffb3" />
					</button>
				)}
			</div>
			{menuOpen && (
				<motion.div
					className="w-full h-screen mx-auto text-3xl text-white  bg-cyan-800  absolute top-0 left-0"
					animate={{
						scale: [0, 1],
						x: [-600, 0],
					}}
				>
					<div className=" flex flex-row items-center justify-end m-5">
						<CloseIconHamburger
							color="#ffffb3"
							onClick={() => setMenuOpen(!menuOpen)}
						/>
					</div>
					<motion.ul
						className="absolute   h-screen w-full bg-cyan-800 flex flex-col items-center justify-center gap-10 text-[#ffffb3] text-5xl"
						animate={{ scale: [0, 0.5, 1], y: [-600, 0] }}
					>
						{sections.map((section: ISection) => (
							<li key={section.id} className="hover:text-amber-200">
								<Link href={section.link}>{section.name}</Link>
							</li>
						))}
					</motion.ul>
				</motion.div>
			)}
		</div>
	);
};
export default Navbar;
