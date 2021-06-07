import React, { useState } from "react";
import { motion } from "framer-motion";

function ShowWeather(props) {
  const [step, setStep] = useState(1);

  const handleLeftArrow = (e) => {
   e.preventDefault();
    if (step === 1) {
      setStep(8);
    } else {
      setStep(step - 1);
    }
  };

  const handleRightArrow = (e) => {
    e.preventDefault();
    if (step === 8) {
      setStep(1);
    } else {
      setStep(step + 1);
    }
  };

  const goToSlide1 = () => {
    setStep(1);
  };

  const goToSlide2 = () => {
    setStep(2);
  };

  const goToSlide3 = () => {
    setStep(3);
  };

  const goToSlide4 = () => {
    setStep(4);
  };

  const goToSlide5 = () => {
    setStep(5);
  };

  const goToSlide6 = () => {
    setStep(6);
  };

  const goToSlide7 = () => {
    setStep(7);
  };

  const goToSlide8 = () => {
    setStep(8);
  };
  const { data } = props;
  const iconurl =
    "http://openweathermap.org/img/w/" +
    `${data.cod !== 404 ? data.weather[0].icon : null}` +
    ".png";
  return (
    <div className="displayweather">
      {data.cod !== 404 ? (
        <div className="MainContainer">
          <div className="maincard">
            <span className="cardtitle">
              {data.name} , {data.sys.country}. Weather
            </span>
            <br></br>
            <span className="cardsubtitle">
              As of {new Date().toLocaleTimeString()}
            </span>

            <h2>
              Temperature : ' {Math.floor(data.main.temp - 273.15)}
              <sup>o</sup>'
            </h2>
            <div className="cardSubtitle2">
              <span className="weather-main">{data.weather[0].main}</span>
              <img className="weather-icon" src={iconurl} alt="" srcset="" />
              <span className="weather-description">
                {" "}
                {data.weather[0].description}
              </span>
            </div>
          </div>
                <div className="arrow-card"> 
          <div className="btn  btn-sm left-arrow" onClick={(e)=>handleLeftArrow(e)}>
            <i class="fas fa-arrow-left"></i>
          </div>
          <div className="containers">
            {step === 1 && (
              <motion.div className="HighLow ">
                <h4>High/Low</h4>
                <span>
                  {Math.floor(data.main.temp_max - 273.15)}
                  <sup>o</sup>/{Math.floor(data.main.temp_min - 273.15)}
                  <sup></sup>
                </span>
              </motion.div>
            )}
            {step === 2 && (
              <motion.div className="Humidity">
                <h4>Humidity</h4>

                <span>{data.main.humidity} %</span>
              </motion.div>
            )}
            {step === 3 && (
              <motion.div className="Pressure">
                <h4>Pressure</h4>

                <span>{data.main.pressure} hPa</span>
              </motion.div>
            )}
            {step === 4 && (
              <motion.div className="Visibility">
                <h4>Visibility</h4>

                <span>{data.visibility / 1000} Km</span>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div className="Wind">
                <h4>Wind</h4>

                <span>{Math.floor((data.wind.speed * 18) / 5)} km/hr</span>
              </motion.div>
            )}
            {step === 6 && (
              <motion.div className="WindDirection">
                <h4>Wind Direction</h4>

                <span>
                  {data.wind.deg}
                  <sup>o</sup> deg
                </span>
              </motion.div>
            )}
            {step === 7 && (
              <motion.div className="Sunrise ">
                <h4>Sunrise</h4>

                <span>
                  {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                </span>
              </motion.div>
            )}
            {step === 8 && (
              <motion.div className="Sunset ">
                <h4>Sunset</h4>

                <span>
                  {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                </span>
              </motion.div>
            )}
          </div>
          <div className=" btn btn-sm right-arrow" onClick={(e)=>handleRightArrow(e)}>
            <i class=" fas fa-arrow-right "></i>
          </div>

                </div>
          <div className="indicators-box">
            {step === 1 && (
              <>
                <div className="indicator active"></div>
                <div className="indicator" onClick={goToSlide2}></div>
                <div className="indicator" onClick={goToSlide3}></div>
                <div className="indicator" onClick={goToSlide4}></div>
                <div className="indicator" onClick={goToSlide5}></div>
                <div className="indicator" onClick={goToSlide6}></div>
                <div className="indicator" onClick={goToSlide7}></div>
                <div className="indicator" onClick={goToSlide8}></div>
              </>
            )}

            {step === 2 && (
              <>
              <div className="indicator" onClick={goToSlide1}></div>
              <div className="indicator active"></div>
              <div className="indicator" onClick={goToSlide3}></div>
              <div className="indicator" onClick={goToSlide4}></div>
              <div className="indicator" onClick={goToSlide5}></div>
              <div className="indicator" onClick={goToSlide6}></div>
              <div className="indicator" onClick={goToSlide7}></div>
              <div className="indicator" onClick={goToSlide8}></div>
              </>
            )}

            {step === 3 && (
              <>
                <div className="indicator" onClick={goToSlide1}></div>
                <div className="indicator" onClick={goToSlide2}></div>
                <div className="indicator active"></div>
                <div className="indicator" onClick={goToSlide4}></div>
                <div className="indicator" onClick={goToSlide5}></div>
                <div className="indicator" onClick={goToSlide6}></div>
                <div className="indicator" onClick={goToSlide7}></div>
                <div className="indicator" onClick={goToSlide8}></div>
              </>
            )}
            {step === 4 && (
              <>
                <div className="indicator" onClick={goToSlide1}></div>
                <div className="indicator" onClick={goToSlide2}></div>
                <div className="indicator" onClick={goToSlide3}></div>
               <div className="indicator active"></div>
                <div className="indicator" onClick={goToSlide5}></div>
                <div className="indicator" onClick={goToSlide6}></div>
                <div className="indicator" onClick={goToSlide7}></div>
                <div className="indicator" onClick={goToSlide8}></div>
              </>
            )}

            {step === 5 && (
              <>
                <div className="indicator" onClick={goToSlide1}></div>
                <div className="indicator" onClick={goToSlide2}></div>
                <div className="indicator" onClick={goToSlide3}></div>
                <div className="indicator" onClick={goToSlide4}></div>
              <div className="indicator active"></div>
                <div className="indicator" onClick={goToSlide6}></div>
                <div className="indicator" onClick={goToSlide7}></div>
                <div className="indicator" onClick={goToSlide8}></div>
              </>
            )}

            {step === 6 && (
              <>
                <div className="indicator" onClick={goToSlide1}></div>
                <div className="indicator" onClick={goToSlide2}></div>
                <div className="indicator" onClick={goToSlide3}></div>
                <div className="indicator" onClick={goToSlide4}></div>
                <div className="indicator" onClick={goToSlide5}></div>
                <div className="indicator active"></div>
                <div className="indicator" onClick={goToSlide7}></div>
                <div className="indicator" onClick={goToSlide8}></div>
                </>
            )}{step === 7 && (
              <>
                <div className="indicator" onClick={goToSlide1}></div>
                <div className="indicator" onClick={goToSlide2}></div>
                <div className="indicator" onClick={goToSlide3}></div>
                <div className="indicator" onClick={goToSlide4}></div>
                <div className="indicator" onClick={goToSlide5}></div>
                <div className="indicator" onClick={goToSlide6}></div>
                <div className="indicator active"></div>
                <div className="indicator" onClick={goToSlide8}></div>
             </>
            )}

            {step === 8 && (
              <>
                <div className="indicator" onClick={goToSlide1}></div>
                <div className="indicator" onClick={goToSlide2}></div>
                <div className="indicator" onClick={goToSlide3}></div>
                <div className="indicator" onClick={goToSlide4}></div>
                <div className="indicator" onClick={goToSlide5}></div>
                <div className="indicator" onClick={goToSlide6}></div>
                <div className="indicator" onClick={goToSlide7}></div>
               <div className="indicator active"></div>
                </>
            )}
          </div>
        </div>
      ) : (
        <div className="maincard">
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  );
}

export default ShowWeather;
