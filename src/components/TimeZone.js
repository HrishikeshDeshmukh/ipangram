import React, { useState } from 'react'
import ChooseTimeZone from './ChooseTimeZone'

const TimeZone = () => {
  const [selected, setSelected] = useState("UTC−05:00")
  return (
    <div className='timezone'>
        <label className='timehead'>TimeZone</label>
        <ChooseTimeZone selected={selected} setSelected={setSelected}/>
      
    </div>
  )
}

export default TimeZone
