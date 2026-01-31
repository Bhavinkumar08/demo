import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../animations'

export default function About(){
  return (
    <section id="about" className="about container">
      <div className="about-inner">
        <motion.div className="content" initial="hidden" whileInView="show" viewport={{ once:true }} variants={fadeIn('up',20)}>
          <h3>Education with Purpose</h3>
          <p>Christian PU College blends academic rigor with character development and community engagement to prepare students for higher education and responsible citizenship.</p>
        </motion.div>

        <motion.div className="image" initial={{opacity:0, scale:0.98}} whileInView={{opacity:1,scale:1}} viewport={{ once:true }} transition={{duration:0.6}}>
          Image Placeholder
        </motion.div>
      </div>
    </section>
  )
}
