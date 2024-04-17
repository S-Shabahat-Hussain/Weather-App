import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
export default function Searchbox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error,setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "f11cd61b0b76855a4e5db0fe1f715d1b";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            name: jsonResponse.name,
            temp: jsonResponse.main.temp,
            tempMax: jsonResponse.main.temp_max,
            tempMin: jsonResponse.main.temp_min,
            feelsLike: jsonResponse.main.feels_like,
            humidity: jsonResponse.main.humidity,
            weather: jsonResponse.weather[0].description,

        };
        console.log(result);
        return result;
        } catch(err) {
            throw err;
        }
        
    }

    let inputChangeHandler = (event) => {
        setCity(event.target.value);
    }

    let submitHandler = async (event) => {
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch(err) {
            setError(true);
        }
       
    }
    return (
        <div className='searchBox'>
            <form onSubmit={submitHandler}>
                <TextField id="city" label="City" variant="outlined" value={city} onChange={inputChangeHandler} required />
                <br /><br />
                <Button variant="contained" type='submit'>
                    Search
                </Button>
                {error && <p style={{color: "red"}}>No,Such place exist</p>}
            </form>
        </div>
    )
}