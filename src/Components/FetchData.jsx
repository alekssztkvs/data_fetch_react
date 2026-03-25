import React from 'react'
import UseFetch from './UseFetch'
import './FetchData.css'

const FetchData = () => {

  const [data]=UseFetch('https://api.npoint.io/9045c260b1565daa9e15');
  const [data_1]=UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
  return (
    <>
     <ul className='list_data_main'>
        <h1 className='usefetch_heading'>Info About Products</h1>
        {data.map((e, index) => (
            <li key={index} className='list_data'>
              <h3>{e.name}</h3>
              <p><strong>Importance: </strong>{e.importance}</p>
              <p><strong>Benefits: </strong>{e.benefits}</p>
              <p><strong>Best Time to Eat: </strong>{e.best_time_to_intake}</p>
            </li>
        ))}
     </ul>
    <ul className='list_data_main'>
        <h1 className='usefetch_heading'>Yoga Benefits</h1>
        {data_1.map((e, index) => (
          <li key={index} className='list_data'>
            <h3>{e.name}</h3>
            <p><strong>Benefits: </strong>{e.benefits}</p>
            <p><strong>Duration: </strong>{e.time_duration}</p>
          </li>
        ))}
    </ul>
    </>
  )
}

export default FetchData