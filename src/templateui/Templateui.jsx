import Navmenu from '@/components/Navmenu'
import React from 'react'

const Templateui = ({children}) => {
  return (
    <div className='container mx-auto'> 
    <Navmenu/>
    {children}
     
    </div>
  )
}

export default Templateui
