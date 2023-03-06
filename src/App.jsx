import axios from 'axios';
import { useState, useEffect } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard';

const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;

const API_key = `7b293b5b3c8defc39fbc08725a59605f`;

function App() {

  const [city, setCity] = useState('')
  const [latitud, setLatitud] = useState('')
  const [longitud, setLongitud] = useState('')
  const [responseData, setResponseData] = useState({})

  const searchCity = (e) => {
    setCity(e.target.value)
    console.log(e.target.value);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitud(position.coords.latitude);
      setLongitud(position.coords.longitude);

    });

    let finalAPIEndPoint = `${API_endpoint}lat=${latitud}&lon=${longitud}&appid=${API_key}&units=metric`;

    axios.get(finalAPIEndPoint).then((res) => {
      setResponseData(res.data);
      console.log(res.data);
    });
  }, []);


  return (
    <div className="App">
      <input
        type="text"
        placeholder="Buscar una ciudad"
        onChange={searchCity}
      />
      <WeatherCard
        data={responseData}      
      />
      <button>cambiar a F</button>
    </div>
  );
}

export default App
