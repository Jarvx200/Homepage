import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";


const HomePage = () => {
    return(<>
        <div className="relative min-h-screen bg-cover flex flex-col items-center p-5 dark:bg-dark-bg bg-light-bg">
            <Navbar/>
                <h1 className="animate-fade-down animate-once animate-duration-300 animate-ease-in-out  md:text-7xl text-6xl dark:text-dark-fg text-light-fg font-semibold mt-12">Bigu Cezar</h1>
                <h2 className="animate-fade-down animate-once animate-duration-300 animate-ease-in-out animate-delay-100 md:text-4xl text-3xl  dark:text-dark-aqua text-light-aqua font-semibold mt-2 mb-10">(jarvx)</h2>

                <p className="animate-fade-up animate-once animate-duration-300 animate-ease-in-out dark:text-dark-purple text-light-purple font-semibold show md:text-xl text-lg  text-center  dark:bg-dark-brown bg-light-brown md:p-1 p-2  rounded-md mb-2">Full Stack Web Developer / Foss && Linux Enthusiast </p>

                <ProfileCard/>
                <div className="mb-5 mt-5"/>
            <Footer/>
        </div> 
    </>);
}

export default HomePage