import Navbar from "../components/Navbar";
import projectsListDataFile from '../../data/projects.json' 
import{useState, useEffect } from "react";


interface Project {
  name : string, 
  url : string, 
  photoUrl : string, 
  description : string,
}

const ProjectsPage = () => {

    const [projectsList, setProjectsList] = useState<(Project | null)[]>([]);

    useEffect(() => {
    setProjectsList(projectsListDataFile);
    }, [projectsListDataFile])

  return (
    <>
      <div className="relative min-h-screen bg-cover flex flex-col items-center p-5 dark:bg-dark-bg bg-light-bg">
        <Navbar />

            <div className="flex flex-col w-full h-[90vh] items-center justify-center">

                <div className="grid lg:grid-cols-5  grid-cols-1 gap-5 w-full h-full md:p-20">
                    {
                    projectsList.map((project) => (
                        <div className="flex flex-col items-center animate-jump animate-once animate-duration-300 animate-delay-0 animate-ease-in-out w-full h-96 col-span-1 row-span lg:row-span-3 dark:bg-dark-brown bg-light-brown lg:p-0 rounded-xl">
                            <img src={project?.photoUrl} className="object-cover w-full rounded-b-2xl h-[10rem] rounded-tl-xl rounded-tr-xl hover:cursor-pointer hover:opacity-50" onClick={()=>{window.open(project?.url)}}/>
                            <div className="w-full h-full flex flex-col items-center justify-start p-3">
                                <a href={project?.url}  target="_blank" className={`text dark:text-dark-purple text-light-purple  text-3xl font-semibold mt-5`}> {project?.name} </a>
                                <h2 className="text dark:text-dark-fg text-light-fg  text-md font-normal mt-2 m-l2 text-center"> {project?.description} </h2>
                            </div>
                        </div>
                    ))
                    }
                </div>
        </div>
       </div>
    </>)
}

export default ProjectsPage
