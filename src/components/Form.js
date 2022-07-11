import { useState } from "react";
import axios from "axios";



const Form = () => {
  const [city, setCity] = useState("");
  const getWether = (e) => {
    e.preventDefault();
    axios.get("http://api.weatherapi.com/v1/current.json?key=0cc30297d28c4a8c919133127221107&q=London&aqi=no")
      .then(res => console.log(res))
  };
  return (
    <form>
      <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)}/>
      <button type="submit" onClick={getWether}>Get Weather</button>
    </form>
  );
};

export default Form;