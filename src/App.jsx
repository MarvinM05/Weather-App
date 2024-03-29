import axios from 'axios';
import { useState, useEffect } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard';
import Form from './components/Form';
import Loader from './components/Loader';

const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;

const API_key = `7b293b5b3c8defc39fbc08725a59605f`;


function App() {

  const [responseData, setResponseData] = useState({})
  const [changeTemp, setChangeTemp] = useState(false)
  const [loaderS, setLoaderS] = useState(true)
  const [c, setC] = useState("ºF");
  
  
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let finalAPIEndPoint = `${API_endpoint}lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_key}&lang=es&units=metric`;

      getData(finalAPIEndPoint);
    });
  }, []);
  
  const getData = (url) => {
    axios.get(url).then((res) => {
      setResponseData(res.data)

      setTimeout(() => {
        setLoaderS(false)
      }, 2000)
      // setLoaderS(false)
    })

  }
  
  const onSubmit = (value) => {  
    axios
      .get(`${API_endpoint}q=${value}&appid=${API_key}&lang=es&units=metric`)
      .then((res) => setResponseData(res.data))
      .catch((error) => console.log(error));  
    
    
  };

   const toggleTemperatureUnit = () => {
     setC(c === "ºF" ? "ºC" : "ºF");
     setChangeTemp(!changeTemp);
   };
  
  return (
    <div className="App">
      {loaderS && <Loader />}

      <Form submitSearch={onSubmit} />

      <WeatherCard data={responseData} action={changeTemp} />

      <button onClick={toggleTemperatureUnit}>
        Cambiar a {c === "ºF" ? "ºC" : "ºF"}
      </button>
    </div>
  );
}

export default App
