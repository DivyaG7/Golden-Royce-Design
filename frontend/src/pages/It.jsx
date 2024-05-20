import React from 'react'
import { Animation } from '../components/IT/animation'
import { Service1 } from '../components/IT/service1'
import { Service2 } from '../components/IT/service2'

export const It = () => {
  return (
    <div style={{background: '#01057F'}}>
      <div>
        <Animation />
      </div>

      <section>
        <Service1 />
      </section>

      <section>
        <Service2 />
      </section>
      
    </div>
  )
}
