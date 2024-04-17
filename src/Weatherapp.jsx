import { useState } from 'react';
import Info from './Info';
import Searchbox from './Searchbox'
export default function Weatherapp() {
    let [weatherInfo,setWeatherInfo] = useState({
            name: "Patna",
            feelsLike: 27.18,
            humidity: 42,
            temp: 27.27,
            tempMax: 27.27,
            tempMin: 27.27,
            weather: "overcast clouds"
        });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign: "center"}}>
            <h1>Weather App by  Delta</h1>
            <Searchbox updateInfo={updateInfo}/>
            <Info info={weatherInfo}/>
        </div>
    );
}