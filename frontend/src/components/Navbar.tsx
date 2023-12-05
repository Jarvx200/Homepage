import { useState } from "react";

const Navbar = () => {

    const [activePage, setActivePage] = useState("home");

    return(
        <>
            <div className="w-[50%] flex flex-row items-center justify-center">
                <ul className="flex flex-row items-center dark:text-dark-fg">
                    <li className={`text-2xl ml-6 mr-6 hover:cursor-pointer ${activePage === 'home' ? `text-blue font-black` : `dark:text-dark-fg text-light-fg` }`}> Home </li>
                    <li className={`text-2xl ml-6 mr-6 hover:cursor-pointer ${activePage === 'achievements' ? `text-yellow` : `dark:text-dark-fg text-light-fg` }`}> Achievements </li>
                    <li className={`text-2xl ml-6 mr-6 hover:cursor-pointer ${activePage === 'projects' ? `text-aqua` : `dark:text-dark-fg text-light-fg` }`}> Projects </li>
                    <li className={`text-2xl ml-6 mr-6 hover:cursor-pointer ${activePage === 'info' ? `text-purple font-bold` : `dark:text-dark-fg text-light-fg` }`}> Info </li>
                    <li className={`text-2xl ml-6 mr-6 hover:cursor-pointer ${activePage === 'blog' ? `text-orange` : `dark:text-dark-fg text-light-fg` }`}> Blog </li>
                </ul>
            </div>
        </>
    );
}

export default Navbar