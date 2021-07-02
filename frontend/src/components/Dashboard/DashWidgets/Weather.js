import React,{useState, useEffect}from 'react'
import axios from 'axios'
import '../../../styling/customWeather.scss'
function Weather() {
const [input, setInput] = useState('')
const [city, setCity] = useState('')
const [searchResults, setSearchResults] = useState({
})

console.log(input);
// const {name, country, main, description,temp,feels_like,temp_min,temp_max, wind} = city

const handleInput=(e,input)=>{
    e.preventDefault()
    setCity({name:input})
// const newCity =  
// setCity(e.target.value)
console.log(input);

}

const {name} = city


useEffect(() => {
    const api = {
    key: 'fcc8de7015bbb202209bbf0261babf4c', 
    base: 'https://api.openweathermap.org/data/2.5/weather?q='
}
    axios.get(`${api.base}${name}&units=metric&APPID=${api.key}`)
    .then((result)=>{ 
        const {name, sys, main, weather, wind, id}=result.data
        const newCity = {
            id:id,
            name:name,
            country:sys.country,
            weather:weather[0].main,
            description:weather[0].description,
            temp:main.temp,
            temp_min:main.temp_min,
            temp_max:main.temp_max,
            wind_speed:wind.speed,
        }
        // setCity(newCity)
        
        setSearchResults(newCity)
        console.log(searchResults);
    })
    },[city])

    return (
        <div>
            <div className="weather-app-container">

            <div className="weather-card">
                <form className="input-field" onSubmit={(e)=>{handleInput(e,input)}} >
                    <input className='city-input' value={input} type="text" onChange={(e)=>{setInput(e.target.value)}}  />
                </form>
                <div className="result-field">
                <h3>{searchResults.name} {searchResults.country} </h3>
                <br />
                <h5>Weather is: </h5>
                <h7>{searchResults.weather}</h7> 
                {/* <h7>{searchResults.description}</h7>  */}
                <h5>Temp is: {searchResults.temp} degrees </h5>
                <h6>Highs of: </h6>
                <h6>Lows of: </h6>
                
                </div> 
            </div>
            
            
            </div>
        </div>
    )
}

export default Weather
