import axios from 'axios';
import { useState, useEffect } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard';
import Form from './components/Form';

const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;

const API_key = `7b293b5b3c8defc39fbc08725a59605f`;


function App() {

  const [responseData, setResponseData] = useState({})
  const [changeTemp, setChangeTemp] = useState(false);


  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let finalAPIEndPoint = `${API_endpoint}lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_key}&lang=es&units=metric`;


      getData(finalAPIEndPoint)
    });
  }, []);

  const getData = (url) => {
    axios.get(url).then((res) => {
      setResponseData(res.data);
      console.log(res.data);
    });
  }

  const onSubmit = (value) => {
    
    axios
      .get(`${API_endpoint}q=${value}&appid=${API_key}&lang=es&units=metric`)
      .then((res) => setResponseData(res.data))
      .catch((error) => console.log(error));
    
  };

  return (
    <div className="App">
      <Form submitSearch={onSubmit} />

      <WeatherCard data={responseData} action={changeTemp} />

      <button onClick={() => setChangeTemp(!changeTemp)}>Cambiar a ºF</button>
    </div>
  );
}

export default App
