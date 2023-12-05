import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";


const HomePage = () => {
    return(<>
        <div className="w-full h-[100vh] bg-cover flex flex-col items-center p-5 dark:bg-dark-bg bg-light-bg">
            <Navbar></Navbar>
            <h1 className="md:text-8xl text-6xl dark:text-dark-fg text-light-fg font-semibold mt-12">Bigu Cezar</h1>
            <h2 className="md:text-5xl text-3xl  text-aqua font-semibold mt-2 mb-10">(jarvx)</h2>

            <p className="text-purple font-semibold md:show hidden text-xl  bg-brown p-0.5 pl-1 pr-1 rounded-md mb-2">Full Stack Web Developer / Foss && Linux Enthusiast </p>
            
            <ProfileCard></ProfileCard>
        </div> 
    </>);
}

export default HomePage