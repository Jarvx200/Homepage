import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"
import AchievementsPage from './pages/AchievementsPage';
import InfoPage from './pages/InfoPage'

import UnderConstruction from './pages/UnderConstruction';
import NotFoundPage from './pages/NotFoundPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {

  return (
    <>
      <Router>
          <Routes>
            <Route path='*' element={<NotFoundPage/>}/>
            <Route path="/" element={<HomePage/>} />  
            <Route path="/achievements" element={<AchievementsPage/>} />  
            <Route path="/info" element={<InfoPage/>} />
            <Route path="/projects" element={<ProjectsPage/>} />
            <Route path="/blog" element={<UnderConstruction/>} />
          </Routes>
        </Router>
    
      <Analytics />
    </>
  )
}

export default App
