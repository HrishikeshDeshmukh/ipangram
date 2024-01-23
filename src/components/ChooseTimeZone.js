import React,{useState} from 'react'

const ChooseTimeZone = ({selected, setSelected}) => {
  const [isActive, setIsActive] = useState(false)

  const options = ["UTC−09:30",
    "UTC−08:00",
    "UTC−07:00",
    "UTC−06:00",
    "UTC−05:00", 
    "UTC±00:00", 
    "UTC+04:00", 
   " UTC+05:00", 
   " UTC+10:00",
    "UTC+11:00"]
    

  return (
    <div className='dropdown'>
        <div className='dropdown-btn' onClick={e => 
        setIsActive(!isActive)} >{selected}</div>
       
       {isActive && (<div className='dropdown-content'>
           {options.map(option => ( 
            <div  onClick={e=> {
                setSelected(option)
                setIsActive(false)
            }}
             className='dropdown-item'>
               {option}
            </div>
            ))}
           
            
        </div>
       )}
      
    </div>
  )
}

export default ChooseTimeZone
