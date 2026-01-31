import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../animations'

export default function Contact(){
  return (
    <section id="contact" className="container" style={{padding:'24px 0'}}>
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once:true}}>
        <h3>Contact Us</h3>
        <p>Mission Compound, Udupi</p>
        <p>Phone: 8105135218, 7338210163</p>
        <p>Email: info@christianpucollege.edu (placeholder)</p>

        <div className="map-embed" style={{marginTop:12}}>
          <iframe
            title="Christian PU College Location"
            src="https://www.google.com/maps?q=13.3299274,74.7479151&z=17&output=embed"
            width="100%"
            height="320"
            style={{border:0,borderRadius:10}}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </motion.div>
    </section>
  )
}
