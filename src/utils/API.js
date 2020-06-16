import axios from 'axios';


//must be brought in from process.env and preceded with REACT_APP_etc.
//env file which put into git ignore makes sure to hide your api keys so they don't got to gihub
//but better to be on backend
const googleKey = process.env.REACT_APP_GOOGLE_KEY;
const weatherKey = process.env.REACT_APP_WEATHER_KEY;

export default {
    getWeather: function(location){
            console.log(googleKey, weatherKey)
        //returning the axios call lets user do more
            return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${googleKey}`)
            .then(res=> 
                {console.log(res)})
            .catch(err => {
                console.log(err)
            })
    }
}

