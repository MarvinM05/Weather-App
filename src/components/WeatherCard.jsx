import { useState } from "react";



const WeatherCard = ({ data, action }) => {

  return (
    <div className="p-container">
      <img
        className="icon-weather"
        src={`/iconos/${data.weather?.[0]?.icon}.svg`}
        alt=""
      />
      <div className="weather-card">
        <section className="info-card">
          <h2 className="feels-like">
            {action
              ? Math.round(data.main?.feels_like) + " " + "º"
              : Math.round((data.main?.feels_like * 9) / 5 + 32) + "  " + "º"}
          </h2>
          <p>{`Viento: ${Math.round(
            (data.wind?.speed * 3600) / 1000
          )} km/h`}</p>
          <p>{`Humedad: ${data.main?.humidity}%`}</p>
          <p>{`Presión: ${data.main?.pressure}`}</p>
          <h3>
            {`${data.name},`} {data.sys?.country}
          </h3>
        </section>
        <div className="info-card-dos">
          <p>{data.weather?.[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard