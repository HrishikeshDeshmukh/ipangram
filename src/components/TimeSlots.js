import React from 'react'


const TimeSlots = () => {

    const Weekday = ['Mon','Tue','Wed','Thu','Fri']

  let date = new Date().getMonth()
  let day = new Date().getDate();
  let days = new Date().getDay();




    return (
        <div className='container'>
       
           <div className='cont-date'>
           <label className='day'>{Weekday[days-1]}</label>
           <label className='date' >{date+1}/{day-1}</label>
        </div>
        <div className='cont-date'>
           <label className='day'>{Weekday[days]}</label>
           <label className='date'>{date+1}/{day}</label>
        </div>
        <div className='cont-date'>
           <label className='day'>{Weekday[days+1]}</label>
           <label className='date'>{date+1}/{day+1}</label>
        </div>
        <div className='cont-date'>
           <label className='day'>{Weekday[days+2]}</label>
           <label className='date'>{date+1}/{day+2}</label>
        </div>
        <div className='cont-date'>
           <label className='day'>{Weekday[days-2]}</label>
           <label className='date'>{date+1}/{day+5}</label>
        </div>
      
       
        </div>
    )
}

export default TimeSlots
