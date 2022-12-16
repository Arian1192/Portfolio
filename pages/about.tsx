import {motion} from "framer-motion"
import Head from "next/head";
import Navbar from "./components/Navbar";

export default function About(){

    return(
        <div>
        <Head>
            <title>About Me</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
            <header>
                <Navbar />
            </header>
            <main>
                {/*TODO: Modify Color of the text*/}
        <div className='mt-10 mb-5 flex flex-col mx-auto  lg:w-[1100px] max-md:flex-col max-sm:flex-col max-sm:w-full'>
            <motion.h2 className='text-5xl p-5 font-bold max-sm:text-3xl bg-gradient-to-r text-transparent from-slate-200 bg-clip-text to-amber-500'
            >About Me</motion.h2>
            <p className='p-5 text-white text-2xl max-sm:text-[16px]'>One thing that describes me very well is that I like to teach what I learn, and to help others in their endeavours. </p>
            <p className='p-5 text-white text-2xl max-sm:text-[16px]'>I love researching, working in teams and trying new technologies, I believe that learning should never stop and that makes me keep an eye on any new technology.</p>
        </div>
            {/*<div className='w-1/4 mx-auto'>*/}
            {/*    <hr/>*/}
            {/*</div>*/}
                <div className='mx-auto p-10 w-3/5 max-sm:w-full'>
                {/*TODO CREAR EL COMPONENTE QUE RENDERIZE UN DIV CON UN H4 Y UN PARRAFO CORTO*/}
                    <div className='w-4/4 flex flex-row p-5  max-md:flex-row border max-sm:flex-col max-sm:w-full'>
                        <div className='w-2/6 flex flex-row items-center justify-center'>
                            <motion.h4 className='text-3xl font-bold text-white mb-10'
                                       initial={{opacity: 0, y: 200}}
                                       animate={{opacity: 1, y: 0}}
                                       transition={{duration: 1.3}}>20<span className='text-amber-200'>22</span></motion.h4>
                        </div>
                        {/*TODO al cargar el mode mobile y cargar las animaciones se scala el texto ARREGLAR lo mismo en el HOME*/}
                        <motion.div className=' p-5 w-3/6 flex flex-row items-center justify-start max-sm:w-full'
                                    initial={{opacity: 0, x: 400}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{duration: 1.3}}>
                        <ul>
                            <li className='text-white text-[16px] mb-5'>After finishing my Máster in Full Stack Development, I started to develop for <span className='font-semibold'>BLUEMOTION-COMPETITION</span> their landing page. </li>
                                <div className='w-2/4 mx-auto mb-5'>
                                    <hr/>
                                </div>
                            <li className='text-white text-[16px]'>The academy where I studied the Master, offered me to mentor the students of the next edition, to help them in their development as developers.</li>
                        </ul>
                        </motion.div>
                    </div>
                </div>
            </main>
        </div>
    )
}
