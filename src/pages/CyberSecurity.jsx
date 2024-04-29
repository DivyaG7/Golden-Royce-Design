import React from 'react'
import { Cyber1 } from '../components/Cyber/cyber1'
import { CyberService } from '../components/Cyber/cyber-service'
import { Cyber2 } from '../components/Cyber/cyber2'

export const CyberSecurity = () => {
  return (
    <div>
      <section>
        <Cyber1 />
      </section>

      <section>
        <CyberService />
      </section>

      <section>
        <Cyber2 />
      </section>

    </div>
  )
}

