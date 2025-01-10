import Navmenu from '@/components/Navmenu'
import React from 'react'

const Templateui = ({children}) => {
  return (
    <div className='container mx-auto border border-red-500'> 
    <Navmenu/>
    {children}
     
    </div>
  )
}

export default Templateui
