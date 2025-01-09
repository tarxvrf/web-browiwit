

import Hero from '@/components/Hero'
import Navmenu from '@/components/menudropdown/Navmenu'
import React from 'react'

const Templateui = ({children}) => {
  return (
    <div> 
    <Navmenu/>
    {children}
     
    </div>
  )
}

export default Templateui
