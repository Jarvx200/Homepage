import { useNavigate, useLocation} from 'react-router-dom';

const Navbar = () => {

    const navigate =  useNavigate();
    let currentLocation = useLocation();

    const navigateTo = (place : string) => {
        navigate(place)
    }


    return(
        <>
            <div className="w-[50%] lg:flex flex-row items-center justify-center ">
                <ul className="flex md:flex-row flex-col items-center dark:text-dark-fg">

                    <li className={`text-2xl ml-6 mr-6 hover:cursor-pointer ${currentLocation.pathname === '/' ? `dark:text-dark-blue text-blue font-black text-light-blue` : `dark:text-dark-fg text-light-fg` }`}
                    onClick={()=>navigateTo('/')}
                    > Home </li>

                    <li className={`text-2xl ml-6 mr-6 hover:cursor-pointer ${currentLocation.pathname === '/achievements' ? `dark:text-dark-yellow  text-light-yellow` : `dark:text-dark-fg text-light-fg` }`}
                    onClick={()=>navigateTo('/achievements')}
                    > Achievements </li>

                    <li className={`text-2xl ml-6 mr-6 hover:cursor-pointer ${currentLocation.pathname === '/projects' ? `dark:text-dark-aqua text-light-aqua` : `dark:text-dark-fg text-light-fg` }`}
                    onClick={()=>navigateTo('/projects')}
                    > Projects </li>

                    <li className={`text-2xl ml-6 mr-6 hover:cursor-pointer ${currentLocation.pathname === '/info' ? `dark:text-dark-purple text-light-purple font-bold` : `dark:text-dark-fg text-light-fg` }`}
                    onClick={()=>navigateTo('/info')}
                    > Info </li>
            
                    <li className={`text-2xl ml-6 mr-6 hover:cursor-pointer ${currentLocation.pathname === '/blog' ? `dark:text-dark-orange text-light-orange` : `dark:text-dark-fg text-light-fg` }`}
                    > <a href="https://blog.cezarb.com">Blog</a></li>

                </ul>
            </div>
        </>
    );
}

export default Navbar
