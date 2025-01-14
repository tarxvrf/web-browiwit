import Navmenu from '@/components/Navmenu'
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
