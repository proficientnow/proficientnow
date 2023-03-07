import { useState, useEffect } from "react"
import axios from "axios"
export default function useCurrentLocation(showLocation) {
    const [location, setLocation] = useState(null)
    useEffect(() => {
        if(showLocation==true){
            navigator.geolocation.getCurrentPosition(position => {
                let lat = position.coords.latitude
                let long = position.coords.longitude
                let apiKey = "AIzaSyAuecGLrVABPhJXc235NQ2smQpO1VUe2oY"
                let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat}%2C${long}&result_type=locality&key=${apiKey}`
                axios.get(url).then(a => {
                    let city =
                        a.data.results[0].address_components[0].long_name
                  return setLocation({
                    city: city
                   })
                })
            })
        }

    }, [showLocation])

    if(showLocation==true){
        return location
    }
    return
}