import React from 'react'
import { motion } from 'framer-motion'
import { fadeDown } from './_local_variants'

const Menu = ['Home','About','Academics','Faculty','Admissions','Contact']

export default function Navbar(){
  return (
    <motion.header className="navbar" initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className="container">
        <div className="brand">
          <div className="logo" aria-hidden />
          <h1>Christian PU College</h1>
        </div>
        <nav className="nav-links">
          {Menu.map((m)=> <a key={m} href={`#${m.toLowerCase()}`}>{m}</a>)}
        </nav>
        <button className="cta-apply">Apply Now</button>
      </div>
    </motion.header>
  )
}
