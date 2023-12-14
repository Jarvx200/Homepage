import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const InfoPage = () => {
    return(<>
        <div className="relative min-h-screen bg-cover flex flex-col items-center p-5 dark:bg-dark-bg bg-light-bg">
            <Navbar/>
                <div className="grid grid-cols-4 grid-rows-3 gap-4 w-full h-full p-20">
                    <div className="w-full h-32 col-span-1 dark:bg-dark-brown bg-light-brown"></div>
                    <div className="w-full h-full dark:bg-dark-brown bg-light-brown"></div>
                    <div className="w-full h-full dark:bg-dark-brown bg-light-brown"></div>
                </div>
            <Footer/>
        </div>
    </>)
}

export default InfoPage