import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Line from "../components/Linte";
import { useEffect, useState } from "react";

import achievementsListDataFile from '../../data/achievements.json'

interface Achievement {
    name: string,
    place: string,
    photoUrl: string,
    eventUrl: string,
}

const AchievementsPage = () => {

    const [achievementList, setAchievementList] = useState<(Achievement|null)[]> ([]);

    useEffect(() => {
        setAchievementList(achievementsListDataFile);
    }, [achievementsListDataFile])


    return(
        <>
            <div className="relative min-h-screen bg-cover flex flex-col items-center p-5 dark:bg-dark-bg bg-light-bg">
                <Navbar/>
                <h1 className="lg:text-6xl text-5xl mt-16 font-bold dark:text-dark-yellow text-light-yellow">Achievements</h1>
                <h3 className="lg:text-xl text-md mt-2 font-thin dark:text-dark-fg text-light-fg mb-10">Stuff I've been up to</h3>
                <Line width={20} rounded={true}/>
                    <div className="md:w-[40%] w-[90%] flex flex-col items-center mt-10">
                        {   
                            achievementList.map((achievement) =>(
                                <div className="md:w-[100%] md:h-40 h-auto w-[90%] p-4 dark:bg-dark-brown bg-light-brown rounded-xl flex md:flex-row flex-col">
                                    <img src={achievement?.photoUrl} 
                                    className="md:w-[25%] w-[100%]  rounded-2xl opacity-70 hover:cursor-pointer hover:opacity-100 hover:transition-opacity"
                                    onClick={()=>{window.open(achievement?.eventUrl)}}
                                    />

                                    <div
                                    className="md:w-[70%] md:h-[100%] w-[100%]  flex flex-col justify-center  md:items-start items-center md:ml-2 p-5"
                                    >
                                        <h1 className="text-3xl font-bold dark:text-dark-fg text-light-fg">{achievement?.name}</h1>
                                        <h2 className="text-2xl font-normal dark:text-dark-aqua text-light-fg mt-2">{achievement?.place}</h2>
                                    </div>
                                </div>
                            ))
                        }   
                    </div>
                <Footer/>
            </div> 
        </>
    );
}

export default AchievementsPage