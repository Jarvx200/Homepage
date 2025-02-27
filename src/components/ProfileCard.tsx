import {useState} from 'react'

import { FaFingerprint, FaGithub, FaLinkedin, FaMastodon} from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import profilePicture from "../assets/photos/profile.jpg"
import duke from "../assets/photos/duke.png"

const ProfileCard = () => {

    const [dukeImage, setdukeImage] = useState(false)
    const toggledukeImage = () => {
        setdukeImage(!dukeImage);
    }

    return(<>
        
        <img src={duke} className={`absolute 2xl:visible invisible top-[20%] w-[15%] ${dukeImage ? `shown left-[20%] animate-fade-left animate-once animate-duration-100 animate-ease-in-out` : `hidden left-[45%]`}`} />
        <div className="animate-fade-up animate-once animate-duration-300 animate-ease-in-out md:w-[40vw] w-[90%] p-8 dark:bg-dark-brown bg-light-brown flex md:flex-row flex-col items-center justify-center rounded-md  ">
            <div className="md:w-[50%] w-[100%] h-auto flex flex-col justify-center mr-1 md:mb-0 mb-5">
                <img className="max-w-[100%]  hover:cursor-pointer h-auto bg-cover rounded-lg mb-4"  
                src={profilePicture}
                onClick={()=>toggledukeImage()}
                ></img>
                <ul className="w-[100%] pl-2 pr-2 flex flex-row items-start justify-center md:gap-x-12 gap-x-5 md:gap-y-3 gap-y-5">
                    <li className="mt-3 "><a href="https://github.com/Jarvx200" className="font-bold text-3xl  dark:text-dark-fg text-light-fg hover:dark:text-dark-purple hover:text-light-purple transition-all"><FaGithub/></a></li>
                    <li className="mt-3 "><a href="https://infosec.exchange/@jarvx" className="font-bold text-3xl  dark:text-dark-fg text-light-fg hover:dark:text-dark-blue hover:text-light-blue  transition-all"><FaMastodon/></a></li>
                    <li className="mt-3 "><a href="mailto:cezarbigu404@gmail.com" className="font-bold text-3xl  dark:text-dark-fg text-light-fg hover:dark:text-dark-yellow transition-all hover:text-light-yellow "><MdEmail/></a></li>
                    <li className="mt-3 "><a href="https://www.linkedin.com/in/bigu-cezar-9769112a0/" className="font-bold text-3xl  dark:text-dark-fg text-light-fg hover:dark:text-dark-aqua hover:text-light-aqua   transition-all"><FaLinkedin/></a></li>
                    <li className="mt-3 "><a href="https://keys.openpgp.org/vks/v1/by-fingerprint/270318073B6E1FA06F4150A69F5CAAB305B2B421" className="font-bold text-3xl  dark:text-dark-fg text-light-fg hover:dark:text-dark-purple hover:text-light-purple transition-all"><FaKey/></a></li>
                </ul>
            </div>
            <div className="md:w-[50%] w-[100%] h-auto flex flex-col items-center ml-1 dark:text-dark-fg text-light-fg">
                    <h1 className="text-3xl ">jarvx<span className="dark:text-dark-purple text-light-purple font-semibold">@</span>homepage</h1>
                    <p>- - - - - -</p>
                    <div className=' md:text-2xl text-lg gap-y-2 flex flex-col '>
                        <p><span className="font-bold md:text-2xl text-xl   dark:text-dark-purple text-light-purple">Name:</span> Bigu Cezar</p>
                        <p><span className="font-bold md:text-2xl text-xl  dark:text-dark-blue text-light-blue">Location:</span> Romania</p>
                        <p><span className="font-bold md:text-2xl text-xl  dark:text-dark-yellow text-light-yellow">Uptime:</span> 17 yrs</p>
                        <p><span className="font-bold md:text-2xl text-xl  dark:text-dark-blue text-light-blue">Pronouns:</span> he / him</p>
                    </div>
                    
                    </div>

            
        </div>
        <div className='animate-fade-up  gap-x-3 flex flex-row animate-once mt-2 animate-duration-300 animate-ease-in-out md:w-[40vw] w-[90%] p-2 dark:bg-dark-brown bg-light-brown items-center justify-center rounded-md'>
            <FaFingerprint className='md:visible invisible'/>
            <p>PGP Fingerprint: <span className='text-dark-primary'>2703 1807 3B6E 1FA0 6F41</span>  <span className='text-dark-secondary'>50A6 9F5C AAB3 05B2 B421</span></p>
        </div>
    </>)
}   

export default ProfileCard
