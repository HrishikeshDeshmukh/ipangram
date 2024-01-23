import React, { useState } from 'react'

const TimeTable = () => {
    const mortiming = ["8.00 AM", "8.30 AM", "9.00 AM", "9.30 AM", "10.00 AM", "10.30 AM", "11.00 AM", "11.30 AM"]
    const aftertiming = ["12.00 PM", "12.30 PM", "1.00 PM", "1.30 PM", "2.00 PM", "2.30 PM", "3.00 PM", "3.30 PM", "4.00 PM", "4.30 PM", "5.00 PM"]
    const eventiming = ["7.00 PM", "7.30 PM", "8.00 PM", "8.30 PM", "9.00 PM", "9.30 PM", "10.00 PM", "10.30 PM", "11.00 PM"]


    return (<div className='wrapper'>

        <div className='timeslots'>
            <div className='timings'>{
                mortiming.map((time, index) =>
                    <div className='innertime'>
                        <input type='checkbox' />  <li className='times' key={index}>{time}</li>
                    </div>)}
            </div>

            <div className='timings'>{
                aftertiming.map((time, index) =>
                    <div className='innertime'>
                        <input type='checkbox' />  <li className='times' key={index}>{time}</li>
                    </div>)}
            </div>

            <div className='timings'>{
                eventiming.map((time, index) =>
                    <div className='innertime'>
                        <input type='checkbox' />  <li className='times' key={index}>{time}</li>
                    </div>)}
            </div>
        </div>

        <div className='timeslots'>
            <div className='timings'>{
                mortiming.map((time, index) =>
                    <div className='innertime'>
                        <input type='checkbox' />  <li className='times' key={index}>{time}</li>
                    </div>)}
            </div>

            <div className='timings'>{
                aftertiming.map((time, index) =>
                    <div className='innertime'>
                        <input type='checkbox' />  <li className='times' key={index}>{time}</li>
                    </div>)}
            </div>

            <div className='timings'>{
                eventiming.map((time, index) =>
                    <div className='innertime'>
                        <input type='checkbox' />  <li className='times' key={index}>{time}</li>
                    </div>)}
            </div>
        </div>

        <div className='timeslots'>
            <div className='timings'>{
                mortiming.map((time, index) =>
                    <div className='innertime'>
                        <input type='checkbox' />  <li className='times' key={index}>{time}</li>
                    </div>)}
            </div>

            <div className='timings'>{
                aftertiming.map((time, index) =>
                    <div className='innertime'>
                        <input type='checkbox' />  <li className='times' key={index}>{time}</li>
                    </div>)}
            </div>

            <div className='timings'>{
                eventiming.map((time, index) =>
                    <div className='innertime'>
                        <input type='checkbox' />  <li className='times' key={index}>{time}</li>
                    </div>)}
            </div>
        </div>


        <div className='timeslots'>
            <div className='timings'>{
                mortiming.map((time, index) =>
                    <div className='innertime'>
                        <input type='checkbox' />  <li className='times' key={index}>{time}</li>
                    </div>)}
            </div>

            <div className='timings'>{
                aftertiming.map((time, index) =>
                    <div className='innertime'>
                        <input type='checkbox' />  <li className='times' key={index}>{time}</li>
                    </div>)}
            </div>

            <div className='timings'>{
                eventiming.map((time, index) =>
                    <div className='innertime'>
                        <input type='checkbox' />  <li className='times' key={index}>{time}</li>
                    </div>)}
            </div>
        </div>

        <div className='timeslots'>
            <div className='timings'>{
                mortiming.map((time, index) =>
                    <div className='innertime'>
                        <input type='checkbox' />  <li className='times' key={index}>{time}</li>
                    </div>)}
            </div>

            <div className='timings'>{
                aftertiming.map((time, index) =>
                    <div className='innertime'>
                        <input type='checkbox' />  <li className='times' key={index}>{time}</li>
                    </div>)}
            </div>

            <div className='timings'>{
                eventiming.map((time, index) =>
                    <div className='innertime'>
                        <input type='checkbox' />  <li className='times' key={index}>{time}</li>
                    </div>)}
            </div>
        </div>


    </div>
    )
}

export default TimeTable
