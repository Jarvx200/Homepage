import { Analytics } from '@vercel/analytics/react';
import HomePage from "./pages/HomePage"

function App() {

  return (
    <>
      <HomePage></HomePage>
      <Analytics />
    </>
  )
}

export default App
