import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../animations'

const faculty = {
  'Commerce': [
    {name:'Ms. Leela Rao', qual:'M.Com.', exp:'10 yrs'},
    {name:'Mr. Suresh K', qual:'M.Com., B.Ed.', exp:'7 yrs'},
  ],
  'Arts': [
    {name:'Mrs. Meera Shenoy', qual:'M.A.', exp:'9 yrs'},
  ]
}

export default function Faculty(){
  return (
    <section id="faculty" className="container" style={{padding:'24px 0'}}>
      <h3>Faculty Directory</h3>
      <motion.div className="faculty-grid" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once:true}}>
        {Object.entries(faculty).map(([dept, list])=> (
          <motion.div key={dept} variants={fadeUp} className="faculty-item">
            <h4>{dept}</h4>
            {list.map(f=> (
              <div key={f.name} style={{display:'flex',gap:12,alignItems:'center',marginTop:12}}>
                <div className="faculty-avatar">{f.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
                <div>
                  <div style={{fontWeight:700}}>{f.name}</div>
                  <div style={{color:'var(--muted)'}}>{f.qual} • {f.exp}</div>
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
