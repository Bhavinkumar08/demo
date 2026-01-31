import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '../animations'

const cards = [
  {
    title: 'Commerce',
    combos: [
      'History, Economics, Business Studies, Accountancy (HEBA)',
      'Statistics, Economics, Business Studies, Accountancy (SEBA)',
      'Economics, Business Studies, Accountancy, Computer Science (EBACS)'
    ],
    desc: 'Strong commerce curriculum with practical accountancy and business skills.'
  },
  {
    title: 'Arts',
    combos: [
      'History, Economics, Business, Political Science, Sociology (HEPS)',
      'History, Economics, Business Studies, Accountancy (HEBA)'
    ],
    desc: 'Humanities and social sciences with focused subject combinations.'
  }
]

export default function Academics(){
  return (
    <section id="academics" className="academics container">
      <motion.div className="cards-grid" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once:true }}>
        {cards.map((c)=> (
          <motion.div className="card" key={c.title} variants={fadeUp} whileHover={{ y:-8, boxShadow:'0 24px 48px rgba(5,92,75,0.08)'}}>
            <div className="card-flag">{c.title.charAt(0)}</div>
            <h5>{c.title}</h5>
            <p>{c.desc}</p>
            <ul style={{marginTop:10,color:'var(--muted)'}}>
              {c.combos.map(combo => <li key={combo}>{combo}</li>)}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
