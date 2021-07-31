import React, { useState, useEffect } from 'react'

//Style
import './styles/style.css'

const Card = () => {
  const [city, setCity] = useState(null)
  const [search, setSearch] = useState('Karachi')

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a7f10885740cb5d2cb750010c2ce51f9`
      const response = await fetch(url)
      const resJson = await response.json()
      setCity(resJson.main)
    }
    fetchApi()
  }, [search])

  return (
    <div className='Card'>
      <div className='inputData'>
        <input
          type='search'
          placeholder='Search'
          className='inputField'
          onChange={(event) => {
            setSearch(event.target.value)
          }}
        />
      </div>
      {!city ? (
        <p>City Not Found</p>
      ) : (
        <div className='displayInfo'>
          <h1 className='location'>
            <i style={{ paddingRight: '3px' }} className='fas fa-city'></i>
            {search}
          </h1>
          <h5 className='location'>Feels Like {city.feels_like}°Cel</h5>
          <h1 className='location'>{city.temp}°Cel</h1>
          <h3 className='location'>
            Min {city.temp_min}°Cel | Max : {city.temp_max}°Cel
          </h3>
          <h4 className='location'>
            Pressure : {city.pressure} | Humidity : {city.humidity}
          </h4>
        </div>
      )}
    </div>
  )
}

export default Card
