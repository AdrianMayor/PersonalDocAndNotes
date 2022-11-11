import { useEffect, useState } from "react";
import Clock from "../../../components/Clock";
import IconWeather from "../../../components/IconWeather";
import Location from "../../../components/Location";
import api from "../../../services";
import "./index.scss";

const Header = () => {
  const [prediction, setPrediction] = useState(null);
  useEffect(() => {
    const loadData = async () => {
      const myPrediction = await api.weather.getMyWeather();
      setPrediction(myPrediction);
    };
    loadData();
  }, []);

  return (
    prediction && (
      <div className="header">
        <IconWeather
          weather={prediction.description}
          className="icon"
        ></IconWeather>
        <Location city={prediction.city.name} className="location"></Location>
        <Clock className="clock"></Clock>
      </div>
    )
  );
};
export default Header;
