import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";

const InfoPage = () => {
  return (
    <>
      <div className="relative min-h-screen bg-cover flex flex-col items-center p-5 dark:bg-dark-bg bg-light-bg">
        <Navbar />

        <div className="flex flex-col w-full h-[90vh] items-center justify-center">

          <div className="grid lg:grid-cols-3 grid-cols-1 lg:grid-rows-3  gap-10 w-full h-full md:p-20">
        
            <div className="flex flex-col items-center  animate-jump animate-once animate-duration-300 animate-delay-0 animate-ease-in-out w-full h-full col-span-1 row-span lg:row-span-3 dark:bg-dark-brown bg-light-brown lg:p-0 pt-6 pb-6 rounded-xl">
              <div className="w-[100%] h-[100%] flex flex-col items-center  justify-center p-10 break-words" >
                <h1 className="text dark:text-dark-fg text-light-fg  text-4xl font-semibold">About Me</h1>
                <p className="text dark:text-dark-fg text-light-fg mt-10 md:text-xl text-md font-normal">
                High school CS student from Romania passionate about <span className="dark:text-dark-green text-light-secondary font-bold">full-stack development</span> and <span className="dark:text-dark-primary font-bold text-light-primary">open source tech</span>.
                </p>

                <p className="text dark:text-dark-fg text-light-fg mt-10 md:text-xl text-md font-medium">
                💻 Started coding in 5th grade, dived into competitive programming at the <span className="dark:text-dark-yellow text-light-secondary font-bold"> National Olympiad of Informatics (ONI 🇷🇴) </span>.
                </p>

                <p className="text dark:text-dark-fg text-light-fg mt-10 md:text-xl text-md font-medium">
                🌟 Since 8th grade, I've explored multiple<span className="dark:text-dark-green text-light-secondary font-bold"> languages</span> and <span className="dark:text-dark-aqua text-light-aqua font-bold">frameworks</span>. Achieved in hackathons and olympiads.
                </p>

                <p className="text dark:text-dark-fg text-light-fg mt-10 md:text-xl text-md font-medium">
                  🌐 Enthusiastic about <span className="dark:text-dark-green text-light-secondary font-bold">fullstack development</span>, passionate about <span className="dark:text-dark-aqua text-light-aqua font-bold">Linux && FOSS</span>, and diving into <span className="dark:text-dark-purple text-light-purple font-bold">machine learning</span>.
                </p>

              </div>
            </div>

            <div className="animate-jump animate-once animate-duration-300 animate-delay-[30ms] animate-ease-in-out w-full h-full flex flex-col items-center col-span-1 row-span-1 lg:row-span-2  dark:bg-dark-brown bg-light-brown lg:p-0 pt-6 pb-6 rounded-xl">
                <div className="w-[100%] h-[100%] flex flex-col items-center  justify-start p-10 break-words" >
                  <h1 className="text dark:text-dark-fg text-light-fg  md:text-3xl text-2xl font-semibold">Technologies I use</h1>
                  <div className="flex flex-col items-center justify-center">

                    <h2 className="text dark:text-dark-fg text-light-fg  md:text-2xl text-xl font-normal mt-5" >Frontend</h2>
                    <div className="flex flex-row items-center justify-center w-[100%] h-auto">
                      <a href="">
                        <img src=""
                      </a>
                    </div>

                  </div>
                </div>
            </div>

            <div className="animate-jump animate-once animate-duration-300 animate-delay-[60ms] animate-ease-in-out h-full dark:bg-dark-brown bg-light-brown lg:p-0  rounded-xl flex flex-col items-center justify-center"> 
              <img src="https://github-readme-stats.vercel.app/api?username=Jarvx200&show_icons=true&theme=gruvbox&bg_color=202020&hide_border=true" className="w-full h-full rounded-xl"/>
            </div>
            <div className="animate-jump animate-once animate-duration-300 animate-delay-[90ms]  animate-ease-in-out w-full h-full dark:bg-dark-brown bg-light-brown lg:p-0 pt-6 pb-6 lg:row-span-2 row-span-1 rounded-xl"></div>
            
            <div className="animate-jump animate-once animate-duration-300 animate-delay-[120ms] animate-ease-in-out w-full h-full dark:bg-dark-brown bg-light-brown lg:p-0 pt-6 pb-6  row-span-1 rounded-xl"></div>

          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default InfoPage;
