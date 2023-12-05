import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";


const HomePage = () => {
    return(<>
        <div className="w-full h-[100vh] bg-cover flex flex-col items-center p-5 dark:bg-dark-bg bg-light-bg">
            <Navbar></Navbar>
            <h1 className="text-5xl dark:text-dark-fg text-light-fg font-semibold mt-7">Bigu Cezar</h1>
            <h2 className="text-[2.2vw]  text-aqua font-semibold mt-2 mb-5">(jarvx)</h2>

            <p className="text-purple font-semibold text-sm bg-brown p-0.5 pl-1 pr-1 rounded-md mb-2">Full Stack Web Developer / Foss && Linux Enthusiast </p>
            
            <ProfileCard></ProfileCard>
        </div> 
    </>);
}

export default HomePage