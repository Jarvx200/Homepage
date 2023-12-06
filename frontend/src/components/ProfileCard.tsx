import { FaGithub} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSignature } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ProfileCard = () => {
    return(<>
        <div className="md:w-[40vw] w-[90%] p-8 dark:bg-dark-brown flex md:flex-row flex-col items-center justify-center rounded-md  ">
            <div className="md:w-[50%] w-[100%] h-auto flex flex-col justify-center mr-1 md:mb-0 mb-5">
                <img className="w-[100%] h-auto bg-cover rounded-lg mb-4" src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/a325e722353999.5631184951d59.jpg"></img>
                <ul className="w-[100%] pl-2 pr-2 flex flex-row items-center justify-center">
                    <li className="ml-6 mr-6 mt-3 md:mb-0 mb-4"><a href="https://github.com/Jarvx200" className="font-bold text-4xl  dark:text-dark-fg text-light-fg hover:dark:text-dark-purple hover:text-light-purple transition-all"><FaGithub></FaGithub></a></li>
                    <li className="ml-6 mr-6 mt-3 md:mb-0 mb-4"><a href="https://twitter.com/Jarvx404" className="font-bold text-4xl  dark:text-dark-fg text-light-fg hover:dark:text-dark-blue hover:text-light-blue  transition-all"><FaXTwitter></FaXTwitter></a></li>
                    <li className="ml-6 mr-6 mt-3 md:mb-0 mb-4"><a href="" className="font-bold text-4xl  dark:text-dark-fg text-light-fg hover:dark:text-dark-yellow transition-all hover:text-light-yellow "><MdEmail></MdEmail></a></li>
                    <li className="ml-6 mr-6 mt-3 md:mb-0 mb-4"><a href="" className="font-bold text-4xl  dark:text-dark-fg text-light-fg hover:dark:text-dark-aqua hover:text-light-aqua   transition-all"><FaSignature></FaSignature></a></li>
                </ul>
            </div>
            <div className="md:w-[50%] w-[100%] h-auto flex flex-col items-center ml-1 dark:text-dark-fg text-light-fg">
                    <h1 className="text-3xl ">jarvx<span className="dark:text-dark-purple text-light-purple font-semibold">@</span>homepage</h1>
                    <p>- - - - - -</p>
                    <p className=" md:text-2xl text-xl"><span className="font-bold text-2xl  dark:text-dark-purple text-light-purple">Name:</span> Bigu Cezar</p>
                    <p className=" md:text-2xl text-xl"><span className="font-bold text-2xl  dark:text-dark-blue text-light-blue">Location:</span> Romania</p>
                    <p className=" md:text-2xl text-xl"><span className="font-bold text-2xl  dark:text-dark-yellow text-light-yellow">Uptime:</span> 16 yrs</p>
                    <p className=" md:text-2xl text-xl"><span className="font-bold text-2xl  dark:text-dark-blue text-light-blue">Pronouns:</span> he / him</p>
                    <p className=" md:text-2xl text-xl"><span className="font-bold text-2xl  dark:text-dark-green text-light-green">Stack:</span> MERN</p>
            </div>
        </div>
    </>)
}   

export default ProfileCard