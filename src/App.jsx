import LeftCard from './components/LeftCard';
import RightCard from './components/RightCard';
import { useState } from "react";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  }
  return (
    <>
      <div className={`min-h-screen w-full flex flex-col sm:flex-row subpixel-antialiased ${darkMode ? "bg-black":"bg-white"}`}>
        <LeftCard darkMode = {darkMode} toggleDarkMode = {toggleDarkMode} />
        <RightCard />
      </div>
    </>
  )
}

export default App;