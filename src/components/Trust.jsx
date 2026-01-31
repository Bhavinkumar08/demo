import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../animations'

export default function Trust(){
  return (
    <section className="trust container">
      <motion.div className="trust-grid" initial="hidden" whileInView="show" viewport={{ once:true }}>
        <motion.div className="trust-item" variants={fadeUp} style={{flex:1}}>
          <h4>Our Commitment</h4>
          <p>Christian PU College is committed to providing a supportive, student-centered learning environment focused on academic integrity, personal growth, and community engagement.</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
