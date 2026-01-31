import React from 'react'
import { motion } from 'framer-motion'

export default function Admissions(){
  return (
    <section id="admissions" className="admissions">
      <div className="container">
        <div className="left">
          <h3>Admissions Open 2026</h3>
          <ul>
            <li>Merit based selection</li>
            <li>Scholarships & financial aid</li>
          </ul>
        </div>
        <motion.div>
          <motion.button whileHover={{ scale:1.03 }} whileTap={{ scale:0.98 }} className="apply-btn">Apply Now</motion.button>
        </motion.div>
      </div>
    </section>
  )
}
