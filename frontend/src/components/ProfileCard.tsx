import {useState} from 'react'

import { FaGithub, FaLinkedin} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import profilePicture from "../assets/photos/profile.jpg"
import gopher from "../assets/photos/gopher.png"

const ProfileCard = () => {

    const [gopherImage, setGopherImage] = useState(false)
    const toggleGopherImage = () => {
        setGopherImage(!gopherImage);
    }

    return(<>
        
        <img src={gopher} className={`absolute 2xl:visible invisible top-[40%] w-[20%] ${gopherImage ? `shown left-[16%] animate-fade-left animate-once animate-duration-100 animate-ease-in-out` : `hidden left-[45%]`}`} />
        <div className="animate-fade-up animate-once animate-duration-300 animate-ease-in-out md:w-[40vw] w-[90%] p-8 dark:bg-dark-brown bg-light-brown flex md:flex-row flex-col items-center justify-center rounded-md  ">
            <div className="md:w-[50%] w-[100%] h-auto flex flex-col justify-center mr-1 md:mb-0 mb-5">
                <img className="max-w-[100%]  hover:cursor-pointer h-auto bg-cover rounded-lg mb-4"  
                src={profilePicture}
                onClick={()=>toggleGopherImage()}
                ></img>
                <ul className="w-[100%] pl-2 pr-2 flex flex-row items-center justify-center">
                    <li className="ml-6 mr-6 mt-3 md:mb-0 mb-4"><a href="https://github.com/Jarvx200" className="font-bold text-4xl  dark:text-dark-fg text-light-fg hover:dark:text-dark-purple hover:text-light-purple transition-all"><FaGithub></FaGithub></a></li>
                    <li className="ml-6 mr-6 mt-3 md:mb-0 mb-4"><a href="https://twitter.com/Jarvx404" className="font-bold text-4xl  dark:text-dark-fg text-light-fg hover:dark:text-dark-blue hover:text-light-blue  transition-all"><FaXTwitter></FaXTwitter></a></li>
                    <li className="ml-6 mr-6 mt-3 md:mb-0 mb-4"><a href="mailto:cezarbigu404@gmail.com" className="font-bold text-4xl  dark:text-dark-fg text-light-fg hover:dark:text-dark-yellow transition-all hover:text-light-yellow "><MdEmail></MdEmail></a></li>
                    <li className="ml-6 mr-6 mt-3 md:mb-0 mb-4"><a href="https://www.linkedin.com/in/bigu-cezar-9769112a0/" className="font-bold text-4xl  dark:text-dark-fg text-light-fg hover:dark:text-dark-aqua hover:text-light-aqua   transition-all"><FaLinkedin/></a></li>
                </ul>
            </div>
            <div className="md:w-[50%] w-[100%] h-auto flex flex-col items-center ml-1 dark:text-dark-fg text-light-fg">
                    <h1 className="text-3xl ">jarvx<span className="dark:text-dark-purple text-light-purple font-semibold">@</span>homepage</h1>
                    <p>- - - - - -</p>
                    <p className=" md:text-2xl text-xl"><span className="font-bold text-2xl  dark:text-dark-purple text-light-purple">Name:</span> Bigu Cezar</p>
                    <p className=" md:text-2xl text-xl"><span className="font-bold text-2xl  dark:text-dark-blue text-light-blue">Location:</span> Romania</p>
                    <p className=" md:text-2xl text-xl"><span className="font-bold text-2xl  dark:text-dark-yellow text-light-yellow">Uptime:</span> 17 yrs</p>
                    <p className=" md:text-2xl text-xl"><span className="font-bold text-2xl  dark:text-dark-blue text-light-blue">Pronouns:</span> he / him</p>
            </div>
        </div>
    </>)
}   

export default ProfileCard
