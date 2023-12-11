import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"
import AchievementsPage from './pages/AchievementsPage';

function App() {

  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<HomePage/>} />  
            <Route path="/achievements" element={<AchievementsPage/>} />  
          </Routes>
        </Router>
    
      <Analytics />
    </>
  )
}

export default App
