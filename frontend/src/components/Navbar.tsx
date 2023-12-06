import { useEffect, useState } from "react";

const Navbar = () => {

    const [activePage, setActivePage] = useState("home");

    useEffect(()=>{
        setActivePage('home')
    })

    return(
        <>
            <div className="w-[50%] flex flex-row items-center justify-center">
                <button className=""></button>
                <ul className="flex md:flex-row flex-col items-center dark:text-dark-fg">
                    <li className={`text-2xl ml-6 mr-6 hover:cursor-pointer ${activePage === 'home' ? `dark:text-dark-blue text-blue font-black text-light-blue` : `dark:text-dark-fg text-light-fg` }`}> Home </li>
                    <li className={`text-2xl ml-6 mr-6 hover:cursor-pointer ${activePage === 'achievements' ? `dark:text-dark-yellow  text-light-yellow` : `dark:text-dark-fg text-light-fg` }`}> Achievements </li>
                    <li className={`text-2xl ml-6 mr-6 hover:cursor-pointer ${activePage === 'projects' ? `dark:text-dark-aqua text-light-aqua` : `dark:text-dark-fg text-light-fg` }`}> Projects </li>
                    <li className={`text-2xl ml-6 mr-6 hover:cursor-pointer ${activePage === 'info' ? `dark:text-dark-purple text-light-purple font-bold` : `dark:text-dark-fg text-light-fg` }`}> Info </li>
                    <li className={`text-2xl ml-6 mr-6 hover:cursor-pointer ${activePage === 'blog' ? `dark:text-dark-orange text-light-orange` : `dark:text-dark-fg text-light-fg` }`}> Blog </li>
                </ul>
            </div>
        </>
    );
}

export default Navbar