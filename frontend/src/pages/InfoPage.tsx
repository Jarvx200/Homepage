import Navbar from "../components/Navbar";

import { SiC, SiCplusplus, SiCsharp, SiExpress, SiMongodb, SiMysql, SiRedux, SiSocketdotio, SiTailwindcss, SiTypescript, SiVim } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";
import { VscTerminalBash } from "react-icons/vsc";


import { FaFigma, FaLinux, FaNodeJs, FaPython } from "react-icons/fa";

const InfoPage = () => {
  return (
    <>
      <div className="relative min-h-screen bg-cover flex flex-col items-center p-5 dark:bg-dark-bg bg-light-bg">
        <Navbar />

        <div className="flex flex-col w-full h-[90vh] items-center justify-center">

          <div className="grid lg:grid-cols-3 grid-cols-1 lg:grid-rows-3  gap-10 w-full h-full md:p-20">
        
            <div className="flex flex-col items-center  animate-jump animate-once animate-duration-300 animate-delay-0 animate-ease-in-out w-full h-full col-span-1 row-span lg:row-span-3 dark:bg-dark-brown bg-light-brown lg:p-0 pt-6 pb-6 rounded-xl">
              <div className="w-[100%] h-[100%] flex flex-col items-center  justify-center p-10 break-words" >
                <h1 className="text dark:text-dark-fg text-light-fg  text-4xl font-semibold">	• About Me •</h1>
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
                <div className="w-[100%] h-[100%] flex flex-col items-center  justify-center p-10 break-words" >
                  <h1 className="text dark:text-dark-fg text-light-fg  md:text-3xl text-2xl font-semibold">	• Technologies I use 	•</h1>
                  <div className="flex flex-col items-center justify-center">

                  <div className="flex flex-row items-center justify-center mt-5">
                    <h2 className="md:text-2xl text-xl font-bold mt-2 mr-3 dark:text-dark-primary text-light-primary " >Frontend:</h2>
                    <div className="flex flex-row items-center justify-center w-[100%] h-auto">
                      <a href="https://www.javascript.com/" className="text-5xl dark:text-dark-yellow text-light-yellow hover:opacity-50 ml-1.5 mr-1.5">
                        <BiLogoJavascript/>
                      </a>
                      <a href="https://www.typescriptlang.org/" className="text-4xl dark:text-dark-blue text-light-blue hover:opacity-50 ml-1.5 mr-1.5">
                        <SiTypescript/>
                      </a>

                      <a href="https://tailwindcss.com/" className="text-5xl dark:text-dark-aqua text-light-aqua hover:opacity-50 ml-1.5 mr-1.5">
                        <SiTailwindcss/>
                      </a>
                      <a href="https://redux.js.org/" className="text-4xl dark:text-dark-purple text-light-pruple hover:opacity-50 ml-1.5 mr-1.5">
                        <SiRedux/>
                      </a>
                    </div>
                  </div>  

                <div className="flex flex-row items-center justify-center mt-5">
                    <h2 className="md:text-2xl text-xl font-bold mt-2 mr-3 dark:text-dark-aqua text-light-text-dark-aqua" >Backend:</h2>
                    <div className="flex flex-row items-center justify-center w-[100%] h-auto">
                      <a href="https://www.python.org/" className="text-5xl dark:text-dark-aqua text-light-aqua hover:opacity-50 ml-1.5 mr-1.5">
                        <FaPython/>
                      </a>
                      <a href="https://nodejs.org/en" className="text-5xl dark:text-dark-green text-light-green hover:opacity-50 ml-1.5 mr-1.5">
                        <FaNodeJs/>
                      </a>
                      <a href="https://expressjs.com/" className="text-5xl dark:text-dark-blue text-light-blue hover:opacity-50 ml-1.5 mr-1.5">
                        <SiExpress/>
                      </a>
                      <a href="https://socket.io/" className="text-4xl dark:text-dark-purple text-light-pruple hover:opacity-50 ml-1.5 mr-1.5">
                        <SiSocketdotio/>
                      </a>
                    </div>
                </div>

                <div className="flex flex-row items-center justify-center mt-5">                  
                    <h2 className="md:text-2xl text-xl font-bold mt-2 mr-3 dark:text-dark-yellow text-light-yellow " >Database:</h2>
                    <div className="flex flex-row items-center justify-center w-[100%] h-auto">
                      <a href="https://www.mongodb.com/" className="text-5xl dark:text-dark-green text-light-green hover:opacity-50 ml-1.5 mr-1.5">
                        <SiMongodb/>
                      </a>
                      <a href="https://www.mysql.com/" className="text-5xl dark:text-dark-blue text-light-blue hover:opacity-50 ml-1.5 mr-1.5">
                        <SiMysql/>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row items-center justify-center mt-5">                  
                    <h2 className="md:text-2xl text-xl font-bold mt-2 mr-3 dark:text-dark-orange text-light-orange " >Others:</h2>
                    <div className="flex flex-row items-center justify-center w-[100%] h-auto">
                      <a href="https://www.linux.org/" className="text-4xl dark:text-dark-green text-light-green hover:opacity-50 ml-1.5 mr-1.5">
                        <FaLinux/>
                      </a>
                      <a href="https://www.gnu.org/software/bash/" className="text-4xl  dark:text-dark-blue text-light-blue hover:opacity-50 ml-1.5 mr-1.5">
                        <VscTerminalBash/>
                      </a>
                      <a href="" className="text-3xl dark:text-dark-pruple text-light-purple hover:opacity-50 ml-1.5 mr-1.5">
                        <SiC/>
                      </a>
                      <a href="https://cplusplus.com/" className="text-3xl  dark:text-dark-orange text-light-orange hover:opacity-50 ml-1.5 mr-1.5">
                        <SiCplusplus/>
                      </a>
                      <a href="https://learn.microsoft.com/en-us/dotnet/csharp/" className="text-3xl  dark:text-dark-red text-light-red hover:opacity-50 ml-1.5 mr-1.5">
                        <SiCsharp/>
                      </a>
                      <a href="https://www.vim.org" className="text-3xl  dark:text-dark-green text-light-green hover:opacity-50 ml-1.5 mr-1.5">
                        <SiVim/>
                      </a>
                      <a href="https://www.figma.com/" className="text-3xl  dark:text-dark-primary text-light-primary hover:opacity-50 ml-1.5 mr-1.5">
                        <FaFigma/>
                      </a>
                    </div>
                </div>
                
              {/*TODO: organize better and add more :))*/}

              </div>
            </div>

            <div className="animate-jump animate-once animate-duration-300 animate-delay-[60ms] animate-ease-in-out h-full dark:bg-dark-brown bg-light-brown lg:p-0  rounded-xl flex flex-col items-center justify-center"> 
              <img src="https://github-readme-stats.vercel.app/api?username=Jarvx200&show_icons=true&theme=gruvbox&bg_color=202020&hide_border=true" className="w-full h-full rounded-xl"/>
            </div>

            <div className="animate-jump animate-once animate-duration-300 animate-delay-[90ms]  animate-ease-in-out w-full h-full dark:bg-dark-brown bg-light-brown lg:p-0  lg:row-span-2 row-span-1 rounded-xl">
              <img src=" https://gruvbox-wallpapers.pages.dev/wallpapers/anime/5m5kLI9.png" className="w-[100%] h-[100%] rounded-xl hover:opacity-50"></img>
            </div>
            
            <div className="animate-jump  animate-once animate-duration-300 animate-delay-[120ms] animate-ease-in-out w-full h-full dark:bg-dark-brown bg-light-brown lg:p-0   row-span-1 rounded-xl">
              <img src="https://gruvbox-wallpapers.pages.dev/wallpapers/anime/wall.jpg" className="w-[100%] h-[100%] rounded-xl hover:opacity-50"></img>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default InfoPage;
