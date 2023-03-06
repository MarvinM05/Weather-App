

const WeatherCard = ({data}) => {
    return (
      <div className="weather-card">
        <section className="info-card">
          <h2>{`${Math.round(data.main?.feels_like)} c`}</h2>
          <p>{`Viento: ${data.wind.speed}`}</p>
          <p>{`Humedad: ${ data.main.humidity}`}</p>
          <p>{`Presión: ${data.main.pressure}`}</p>
          <h3>
            {`${data.name},`} {data.sys?.country}
          </h3>
        </section>
        <div className="info-card-dos">
          <img src="#" alt="" />
          <p>{data.weather?.[0].description}</p>
        </div>
      </div>
    );
}

export default WeatherCard