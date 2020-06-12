import axios from 'axios';


//must be preceded with REACT_APP_etc.
const googleKey = process.env.REACT_APP_GOOGLE_KEY;
const weatherKey = process.env.REACT_APP_WEATHER_KEY;

export default {
    getWeather: function(location){
            console.log(googleKey, weatherKey)
    }
}

