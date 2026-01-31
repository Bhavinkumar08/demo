import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../animations'

export default function Hero(){
  return (
    <section id="home" className="hero container">
      <motion.div className="hero-inner" initial="hidden" whileInView="show" viewport={{ once:true }} variants={staggerContainer}
        transition={{ staggerChildren: 0.12 }}>

        <motion.div className="hero-left" variants={fadeUp}>
          <div className="kicker">Admission Open</div>
          <h2>Preparing Students for Higher Education</h2>
          <p className="small" style={{marginTop:12}}>Christian PU College welcomes students seeking strong academics, mentorship, and a supportive campus atmosphere.</p>
          <div className="buttons" style={{marginTop:18}}>
            <motion.button whileTap={{ scale: 0.96 }} whileHover={{ scale: 1.02 }} className="btn btn-primary">Apply for Admission</motion.button>
            <motion.button whileTap={{ scale: 0.98 }} whileHover={{ scale: 1.02 }} className="btn btn-ghost">Download Prospectus</motion.button>
          </div>
        </motion.div>

        <motion.div className="hero-right" variants={fadeUp}>
          <svg width="220" height="220" viewBox="0 0 220 220" className="hero-svg" xmlns="http://www.w3.org/2000/svg">
            <circle cx="110" cy="110" r="110" fill="url(#g)" />
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0" stopColor="#ff6b35" />
                <stop offset="1" stopColor="#f2a365" />
              </linearGradient>
            </defs>
          </svg>
          <div className="inner">PR</div>
        </motion.div>

      </motion.div>
    </section>
  )
}
