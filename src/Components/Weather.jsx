import React, { useEffect } from 'react'
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import './Weather.css'
function Weather() {
  const toDateFunction = () => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const WeekDays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    const currentDate = new Date();
    const date = `${WeekDays[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]
        }`;
    return date;
};
    const [city , setCity] =useState('Kerala')
    const[weather ,setWeather] =useState({})
    const fetchData = async()=>{
        const apikey = '3a2043f343346b608fe60ef6b48213ca'
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    const response= await axios.get(url)
     setWeather(response.data)
     setCity('')
    

    }
    
    useEffect(()=>{fetchData()},[])
   
    
    
  return (
    <div id='d3'   className=' mt-3 pb-4 col-md-4 col-8 rounded container shadow card'>
     
           <h1 className='text-light mt-3 text-center'>Weather</h1>
        <div className='w-100 container  text-center mt-4  '>
        <Row className="g-2 bg-transparent  w-100 ">
      <Col md>
       
        <FloatingLabel className='w-75 ms-5 ' controlId="floatingInputGrid" label="City">
          <Form.Control className=' bg-light  ' type="text" onChange={e=>setCity(e.target.value)} value={city}  />
        </FloatingLabel>
        
        <div className='mt-2'>
        <button onClick={fetchData} className='btn btn-danger ps-5 pe-5 border-rounded'>Search</button> 
        <br />
       </div>
      </Col>
      
      </Row> 
      
        <div className=' w-100 bg-transparent d-flex justify-content-between  pt-2 '>
            
            <div className='col-6'>
            <h3 className='text-light'>  {weather.name} </h3>
            <h5 className='text-light'>{weather.sys?.country} </h5>
            <span className='text-light'>{toDateFunction()}</span>
            
            </div>
            <div className='w-50'>
              
              <span><img width={50} height={50} src="https://nepza.gov.ng/wp-content/uploads/2021/10/cloudy.png" alt="" /><h5 className='text-light'> {weather.main?.temp} ℃</h5></span>
            <h5 className='text-light'>Feels like {weather.main?.feels_like} ℃</h5>
            <h6 className='text-light'> {weather.weather?.[0]?.main} , {weather.weather?.[0]?.description}</h6>
            <h6 className='text-light'>Humidity : {weather.main?.humidity} %</h6>
            <h6 className='text-light'>Wind Spped : {weather.wind?.speed} m/s </h6>
            </div>
            <br /><br />

            
            
        </div>
       
        </div>
        
      

    </div>
  )
}

export default Weather