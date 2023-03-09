import React, { useState } from 'react'

import { partnersList } from '../CONSTANTS'

const Partners = () => {
  const [list, setList] = useState(partnersList)
  return (
    <div className="py-8 space-y-4 flex items-center flex-col justify-center ">
      <h1 className="text-xl text-center">Trusted by over 100+ Starups and freelance bussiness</h1>
      <div className="flex flex-wrap items-center justify-center gap-5 md:space-x-6">
        {
          list.map((item, index) => {
            return <div className="" key={index}>
              <img src={item.img} alt="" />
            </div>
          })
        }
      </div>
    </div>
  )
}



export default Partners