import React from 'react'
import Navbar from './components/Navbar'
import Parallax from './components/Parallax'
import Hero from './components/Hero'
import Trust from './components/Trust'
import About from './components/About'
import Academics from './components/Academics'
import Faculty from './components/Faculty'
import Admissions from './components/Admissions'
import PUInfo from './components/PUInfo'
import Resources from './components/Resources'
import Contact from './components/Contact'
import CampusLife from './components/CampusLife'
import Footer from './components/Footer'
import './styles/app.css'

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <Parallax />
      <main>
        <Hero />
        <Trust />
        <About />
        <Academics />
        <Faculty />
        <Admissions />
        <PUInfo />
        <Resources />
        <Contact />
        <CampusLife />
      </main>
      <Footer />
    </div>
  )
}
