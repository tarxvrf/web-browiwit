import SponsorCoding from '@/components/sponsor'

import React from 'react'
import Marquee from 'react-fast-marquee'

const Sponsorship = () => {
  return (
    <div className="grid-cols-1 w-full" data-aos="zoom-in">
        <h1 className="text-center font-semibold">
          {" "}
          Bahasa Pemrograman dan Tools yg saya{" "}
          <span className="text-teal-400">kuasai</span>{" "}
        </h1>
        <div className="mt-10"data-aos="fade-right">        
          <SponsorCoding />
    
        </div>
      </div>
  )
}

export default Sponsorship
