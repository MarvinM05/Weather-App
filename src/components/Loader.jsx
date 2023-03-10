const Loader = () => {
  return (
    <div className="loader">
      <span>
        <img className="loading-cloud" src={`/iconos/cloud.png`} alt="" />
      </span>
      <h3>Weather App</h3>
      <div className="loading-icons">
        <span>
          <i className="bx bx-wind"></i>
        </span>
        <span>
          <i className="bx bx-cloud-drizzle"></i>
        </span>
        <span>
          <i className="bx bx-sun"></i>
        </span>
        <span>
          <i className="bx bx-cloud-lightning"></i>
        </span>
        <span>
          <i className="bx bx-cloud-snow"></i>
        </span>
      </div>
    </div>
  );
};

export default Loader;
