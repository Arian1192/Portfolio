import TechnologySoftware from "./TechnologySoftware";
import { FaReact, FaNode, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
	SiAdobeillustrator,
	SiTypescript,
	SiNotion,
	SiJsonwebtokens,
} from "react-icons/si";
import { DiScrum, DiMongodb } from "react-icons/di";
import { ISoftwareElement } from "../Interfaces/ISoftwareElement";
import { TbBrandNextjs } from "react-icons/tb";
import dynamic from "next/dynamic";

const TechnologyCard = (props: any) => {
	const software: ISoftwareElement[] = [
		{
			id: 1,
			softwareTechnology: "Frontend",
			name: "React",
			icon: <FaReact />,
			website: "https://reactjs.org/",
		},
		{
			id: 2,
			softwareTechnology: "Backend",
			name: "Node",
			icon: <FaNode />,
			website: "https://nodejs.org/en/",
		},
		{
			id: 3,
			softwareTechnology: "Frontend",
			name: "Javascript",
			icon: <IoLogoJavascript />,
			website: "https://www.javascript.com/",
		},
		{
			id: 4,
			softwareTechnology: "Backend",
			name: "MongoDB",
			icon: <DiMongodb />,
			website: "https://www.mongodb.com/home",
		},
		{
			id: 5,
			softwareTechnology: "Ux/Ui",
			name: "Figma",
			icon: <FaFigma />,
			website: "https://www.figma.com/",
		},
		{
			id: 6,
			softwareTechnology: "Ux/Ui",
			name: "Illustrator",
			icon: <SiAdobeillustrator />,
			website: "https://www.adobe.com/products/illustrator.html",
		},
		{
			id: 7,
			softwareTechnology: "Methodology",
			name: "Scrum",
			icon: <DiScrum />,
			website: "https://www.scrum.org/",
		},
		{
			id: 8,
			softwareTechnology: "Frontend",
			name: "Typescript",
			icon: <SiTypescript />,
			website: "https://www.typescriptlang.org/",
		},
		{
			id: 9,
			softwareTechnology: "Frontend",
			name: "Nextjs",
			icon: <TbBrandNextjs />,
			website: "https://nextjs.org/",
		},
		{
			id: 10,
			softwareTechnology: "Methodology",
			name: "Notion",
			icon: <SiNotion />,
			website: "https://www.notion.so/",
		},
		{
			id: 11,
			softwareTechnology: "Backend",
			name: "JWT",
			icon: <SiJsonwebtokens />,
			website: "https://jwt.io/",
		},
	];

	const { typeOfSoftware } = props;
	return (
		<div className="w-full flex flex-col  items-center max-sm:w-full p-5">
			<h2
				className="text-3xl mb-10 font-semibold bg-gradient-to-r bg-clip-text  text-transparent
            from-slate-50 via-amber-200 to-amber-500
            animate-text max-sm:text-[20px] "
			>
				{typeOfSoftware}
			</h2>
			{software.map((software: ISoftwareElement) => {
				if (software.softwareTechnology === typeOfSoftware) {
					return (
						<TechnologySoftware
							key={software.id}
							technologyName={software.name}
							component={software.icon}
							website={software.website}
						/>
					);
				}
			})}
		</div>
	);
};

export default dynamic(() => Promise.resolve(TechnologyCard), { ssr: false });
