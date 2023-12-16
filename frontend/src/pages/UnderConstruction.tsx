import Navbar from "../components/Navbar"

const UnderConstruction = () => {
    return(<>
   
        <div className="w-[100vw] h-[100vh] flex flex-col items-center p-5">
            <Navbar/>
            <h1 className="md:text-5xl text-2xl dark:text-dark-fg text-light-fg font-bold mt-28">Under Construction!</h1>
            <img src="https://static.wixstatic.com/media/494a44_8b10afc9e00445c4a2c8765af75278b8~mv2.png/v1/fill/w_720,h_720,al_c,lg_1,q_90,usm_1.20_1.00_0.01,enc_auto/depositphotos_129088418-stock-photo-buil.png"
            className="md:w-[512px] w-[256px]"
            />
        </div> 
    </>)
}

export default UnderConstruction