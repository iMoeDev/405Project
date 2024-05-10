
import React, { useState } from 'react';
import './styles/weather.css';


function Weather() {

const [weather,setWeather ]= useState(null)
const [error, setError] = useState(null);
const [input,setInput]= useState('')

const handle = (e)=>{

 const text = e.target.value

 setInput(text)

}


const Submiting = async (e)=>{
    e.preventDefault()

        const fetchData =  async () => {
            try{
                const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=3e762bb960a84d92a90152616241005&q=${input}&aqi=yes`)
                if(res.status === 200){
                const data = await res.json()
                console.log(data)
                setWeather(data)
                }
                else{
                const error = await res.json()
                console.log(error['error']['message'])
                setError(error['error']['message'])
                }
            }
            catch(err){
                console.error(err.message)
            } 
        }
    
    fetchData()
    
   
}

    return (
        
      <div className="Weather">
        <h1>Weather App</h1>
     <form onSubmit={Submiting}>
     <input type="text" 
     placeholder="write a city name"
     onChange={handle}
     />     
     <button type='submit'> click me</button>
     </form>

        {error && (<div><h1>{error}</h1></div>)}
     {weather && (
            <div>
            <img  src={`https:${weather.current.condition.icon}`} alt="Weather Icon" />
          <h1>Weather in {weather.location.name}</h1>
          <p>Temperature: {weather.current.temp_c}°C / {weather.current.temp_f}°F</p>
          <p>Condition: {weather.current.condition.text}</p>
          <p>Feels Like: {weather.current.feelslike_c}°C / {weather.current.feelslike_f}°F</p>
          <p>Humidity: {weather.current.humidity}%</p>
          <p>Wind: {weather.current.wind_kph} kph from the {weather.current.wind_dir}</p>
          </div>
      )}
      </div>
    );
  }
  
  export default Weather;
  