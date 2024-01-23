import React, {useState} from 'react'
import PrevButton from './PrevButton'
import CurrentDate from './CurrentDate'
import NextButton from './NextButton'


const Header = () => {
 
  const presentDate = new Date().toDateString();
    const [prev, setPrev] = useState(presentDate);
    const [next, setnext] = useState(presentDate);
  

  return (
    <header className='header'>
     <PrevButton prev={prev} set={setPrev}/>
     <CurrentDate/>
     <NextButton next={next} setnext={setnext}/>
      
    </header>
  )

  }
export default Header
