import { FaGithub} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSignature } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ProfileCard = () => {
    return(<>
        <div className="w-[40vw] p-6 bg-brown flex md:flex-row flex-col items-center justify-center rounded-md ">
            <div className="w-[50%] h-auto flex flex-col justify-center mr-1">
                <img className="w-[100%] h-auto bg-cover rounded-lg mb-4" src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/a325e722353999.5631184951d59.jpg"></img>
                <ul className="w-[100%] pl-2 pr-2 flex flex-row items-center justify-center">
                    <li className="ml-3 mr-3"><a href="" className="text-2xl dark:text-dark-fg text-light-fg hover:text-purple transition-all"><FaGithub></FaGithub></a></li>
                    <li className="ml-3 mr-3"><a href="" className="text-2xl dark:text-dark-fg text-light-fg hover:text-blue transition-all"><FaXTwitter></FaXTwitter></a></li>
                    <li className="ml-3 mr-3"><a href="" className="text-2xl dark:text-dark-fg text-light-fg hover:text-yellow transition-all"><MdEmail></MdEmail></a></li>
                    <li className="ml-3 mr-3"><a href="" className="text-2xl dark:text-dark-fg text-light-fg hover:text-green transition-all"><FaSignature></FaSignature></a></li>
                </ul>
            </div>
            <div className="w-[50%] h-auto flex flex-col items-center ml-1 dark:text-dark-fg text-light-fg">
                    <h1>jarvx<span className="text-purple font-semibold">@</span>homepage</h1>
                    <p>- - - - - -</p>
                    <p><span className="font-bold dark:text-dark-fg text-light-fg">Name:</span> Bigu Cezar</p>
                    <p><span className="font-bold dark:text-dark-fg text-light-fg">Location:</span> Romania</p>
                    <p><span className="font-bold dark:text-dark-fg text-light-fg">Uptime:</span> 16 yrs</p>
                    <p><span className="font-bold dark:text-dark-fg text-light-fg">Pronouns:</span> he / him</p>
                    <p><span className="font-bold dark:text-dark-fg text-light-fg">Stack:</span> MERN</p>
            </div>
        </div>
    </>)
}   

export default ProfileCard