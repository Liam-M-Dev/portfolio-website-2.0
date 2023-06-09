import { useState } from "react"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Footer } from "./components/Footer"
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
        <Footer />
    </BrowserRouter>
  )
}

export default App
