import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../animations'

export default function Resources(){
  return (
    <section id="resources" className="container" style={{padding:'36px 0'}}>
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}}>
        <h3>Notice Board</h3>
        <ul>
          <li>Winter Break: Dec 20 - Jan 2</li>
          <li>Admission Counselling: March 15</li>
          <li>Exam Schedule Released: Check PDF</li>
        </ul>

        <h3 style={{marginTop:12}}>Downloads</h3>
        <ul>
          <li><a href="#">Prospectus (PDF)</a></li>
          <li><a href="#">Admission Form (PDF)</a></li>
          <li><a href="#">Previous Year Question Papers</a></li>
        </ul>

        <h3 style={{marginTop:12}}>Student Results & Achievements</h3>
        <p>Hall of Fame: Board toppers and sports achievers are recognized here.</p>
      </motion.div>
    </section>
  )
}
