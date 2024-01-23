import React, { useState }  from 'react';


const CurrentDate = () => {

    const presentDate = new Date().toDateString();
    const [prev, setPrev] = useState(presentDate);
    const [next, setnext] = useState(presentDate);

    const HandleTimeChange = (e) => {
      
    }

  return (
    <div>
      {presentDate}
    </div>
  )
}

export default CurrentDate
