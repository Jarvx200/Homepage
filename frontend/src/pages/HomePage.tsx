import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";


const HomePage = () => {
    return(<>
        <div className="w-full h-[100vh] bg-cover flex flex-col items-center p-5 dark:bg-dark-bg bg-light-bg">
            <Navbar></Navbar>
            <h1 className="md:text-8xl text-6xl dark:text-dark-fg text-light-fg font-semibold mt-12">Bigu Cezar</h1>
            <h2 className="md:text-5xl text-3xl  dark:text-dark-aqua text-light-aqua font-semibold mt-2 mb-10">(jarvx)</h2>

            <p className="dark:text-dark-purple text-light-purple font-semibold show text-xl  dark:bg-dark-brown bg-light-bown p-0.5 pl-1 pr-1 rounded-md mb-2">Full Stack Web Developer / Foss && Linux Enthusiast </p>
            
            <ProfileCard></ProfileCard>
        </div> 
    </>);
}

export default HomePage