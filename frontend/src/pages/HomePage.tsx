import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";


const HomePage = () => {
    return(<>
        <div className="relative w-full h-[100vh] bg-cover flex flex-col items-center p-5 dark:bg-dark-bg bg-light-bg">
            <Navbar></Navbar>
            <h1 className="animate-fade-down animate-once animate-duration-300 animate-ease-in-out  md:text-8xl text-6xl dark:text-dark-fg text-light-fg font-semibold mt-12">Bigu Cezar</h1>
            <h2 className="animate-fade-down animate-once animate-duration-300 animate-ease-in-out animate-delay-100 md:text-5xl text-3xl  dark:text-dark-aqua text-light-aqua font-semibold mt-2 mb-10">(jarvx)</h2>

            <p className="animate-fade-up animate-once animate-duration-300 animate-ease-in-out dark:text-dark-purple text-light-purple font-semibold show text-xl  dark:bg-dark-brown bg-light-brown p-0.5 pl-1 pr-1 rounded-md mb-2">Full Stack Web Developer / Foss && Linux Enthusiast </p>
            
            <ProfileCard></ProfileCard>
        </div> 
    </>);
}

export default HomePage