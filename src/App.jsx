import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import  HomePage  from "./pages/HomePage"
import { AboutPage } from "./pages/About"
import { ProjectPage } from "./pages/Projects"
import { ContactPage } from "./pages/Contact"


function App() {
  

  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
