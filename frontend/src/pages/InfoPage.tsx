import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const InfoPage = () => {
  return (
    <>
      <div className="relative min-h-screen bg-cover flex flex-col items-center p-5 dark:bg-dark-bg bg-light-bg">
        <Navbar />

        <div className="flex flex-col w-full h-[90vh] items-center justify-center">
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:grid-rows-2 grid-rows-1 gap-10 w-full h-full p-20">
        
            <div className="w-full h-full col-span-1 lg:row-span-2 dark:bg-dark-brown bg-light-brown lg:p-0 pt-6 pb-6 rounded-xl"></div>
            <div className="w-full h-full col-span-1 lg:row-span-2 dark:bg-dark-brown bg-light-brown lg:p-0 pt-6 pb-6 rounded-xl"></div>

            <div className="h-full dark:bg-dark-brown bg-light-brown lg:p-0 pb-6 rounded-xl flex flex-col items-center justify-center"> 
              <img src="https://github-readme-stats.vercel.app/api?username=Jarvx200&show_icons=true&theme=gruvbox&bg_color=202020&hide_border=true" className="w-full h-full"/>
            </div>
            <div className="w-full h-full dark:bg-dark-brown bg-light-brown lg:p-0 pt-6 pb-6 rounded-xl"></div>

          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default InfoPage;
