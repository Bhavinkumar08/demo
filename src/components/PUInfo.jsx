import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '../animations'

export default function PUInfo(){
  return (
    <section className="puinfo container" style={{padding:'20px 0'}}>
      <div style={{display:'flex',gap:18,alignItems:'flex-start'}}>
        <motion.div style={{flex:1}} initial="hidden" whileInView="show" viewport={{once:true}} variants={fadeUp}>
          <h2 style={{color:'var(--primary)'}}>ADMISSION OPEN</h2>
          <h3 style={{fontSize:28,marginTop:6}}>2025 - 2026</h3>
          <p style={{color:'var(--muted)',marginTop:12}}>Welcome to Christian PU College, where the journey of academic excellence and personal growth continues. We invite prospective students and their families to join our dynamic and supportive learning community.</p>
        </motion.div>

        <motion.div style={{width:360}} initial="hidden" whileInView="show" viewport={{once:true}} variants={staggerContainer}>
          <motion.div className="pu-card" style={{padding:16,borderRadius:12}} variants={fadeUp}>
            <h4 style={{color:'var(--primary)'}}>Our Facilities</h4>
            <ul style={{color:'var(--muted)'}}>
              <li>Personality development programs</li>
              <li>Provide Individual Attention to Students</li>
              <li>Dedicated Educators</li>
              <li>Strict Discipline on Campus</li>
            </ul>

            <h4 style={{marginTop:10,color:'var(--primary)'}}>Why Choose Us?</h4>
            <ul style={{color:'var(--muted)'}}>
              <li>Qualified and Certified Teachers</li>
              <li>Excellent Academic Programs</li>
              <li>Extracurricular Opportunities</li>
              <li>Good Computer Lab</li>
            </ul>

            <h4 style={{marginTop:10,color:'var(--primary)'}}>For More Information</h4>
            <p style={{color:'#b33'}}>8105135218, 7338210163</p>
            <p style={{color:'var(--muted)'}}>Mission Compound, Udupi</p>
            <p style={{color:'var(--muted)'}}>Instagram: @youthofcpuc</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
