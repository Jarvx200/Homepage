import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";


const HomePage = () => {
    return(<>
        <div className="relative min-h-screen bg-cover flex flex-col items-center justify-center p-5 dark:bg-dark-bg bg-light-bg">
            <Navbar/>
                <h1 className="animate-fade-down text-center animate-once animate-duration-300 mb-5 animate-ease-in-out  md:text-7xl text-4xl dark:text-dark-fg text-light-fg font-semibold mt-12">Bigu Cezar</h1>
                <h2 className="animate-fade-down animate-once animate-duration-300 animate-ease-in-out animate-delay-100 md:text-4xl text-2xl  dark:text-dark-aqua text-light-aqua font-semibold mt-2 mb-5">(jarvx)</h2>

                <div className="w-full h-auto flex flex-row items-center justify-center gap-x-2  lg:visible collapse">
                    <p className="animate-fade-up animate-once animate-duration-300 animate-ease-in-out dark:text-dark-purple text-light-purple font-semibold show   text-center  dark:bg-dark-brown bg-light-brown md:p-1 p-2  rounded-md mb-2 text-wrap"> Full Stack Web Developer </p>
                    <p className="animate-fade-up animate-once animate-duration-300 animate-ease-in-out dark:text-dark-green text-light-green font-semibold show   text-center  dark:bg-dark-brown bg-light-brown md:p-1 p-2  rounded-md mb-2 text-wrap"> Cybersecurity Practitioner</p>
                    <p className="animate-fade-up animate-once animate-duration-300 animate-ease-in-out dark:text-dark-yellow text-light-yellow font-semibold show   text-center  dark:bg-dark-brown bg-light-brown md:p-1 p-2  rounded-md mb-2 text-wrap"> C && Linux Enthusiast </p>
                </div>
                
                <ProfileCard/>
                <div className="mb-5 mt-5"/>
            <Footer/>
        </div> 
    </>);
}

export default HomePage