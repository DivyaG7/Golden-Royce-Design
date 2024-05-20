import React from 'react'
import { Buzzbee1 } from '../components/Buzzbee/buzzbee1'
import { Buzzbee2 } from '../components/Buzzbee/buzzbee2'
import { Buzzbee3 } from '../components/Buzzbee/buzzbee3'

export const Buzzbee = () => {
  return (
    <div>
        <section>
            <Buzzbee1 />
        </section>

        <section>
            <Buzzbee2 />
        </section>

        <section>
            <Buzzbee3 />
        </section>
    </div>
  )
}

