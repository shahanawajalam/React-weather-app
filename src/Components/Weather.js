import React, { useState } from "react";
import ShowWeather from "./ShowWeather";

function Weather() {    

     const APIKEY="7497cd4d96a83216ed37b25758e514b2";


  const [location, setLocation] = useState({
    city: "",
    country: "",
  });

  
  const [weather, setWeather] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (location.city === ""|| location.country==="") {
      alert("Please, add Your city and Country name respectively.... Thank You!!");
    } else {
        const data = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${location.city},${location.country}&APPID=${APIKEY}`
          )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
        }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "city") setLocation({ ...location, city: value });
    if (name === "country") setLocation({ ...location, country: value });
  };

  return (
      <div>
    <div className=" box card">
      <form>
        <label className="wrapper">
          <input
            type="input"
            className="textfield"
            name="city"
            onChange={(e) => handleChange(e)}
            placeholder=" "
          />
          <span class="placeholder">City</span>
        </label>

        <label className="wrapper countryInput">
        <input
            type="input"
            className="textfield"
            name="country"
            onChange={(e) => handleChange(e)}
            placeholder=" "
          />
          <span class="placeholder">Country</span>
        </label>
        <button className="submitButton" onClick={(e)=> handleSubmit(e)}>Submit</button>
      </form>

    </div>
        <div className="">
      {weather.data !== undefined ? (
        <div>
          <ShowWeather data={weather.data} />
        </div>
      ) : null}

        </div>
    </div>
  );
}

export default Weather;
