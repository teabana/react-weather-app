import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Result";
import { useState } from "react";
import axios from "axios";
import './App.css';


function App() {
  const [city, setCity] = useState("");
  const [results, setResults] = useState({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  });
  const getWether = (e) => {
    e.preventDefault();
    axios.get(`http://api.weatherapi.com/v1/current.json?key=0cc30297d28c4a8c919133127221107&q=${city}&aqi=no`)
      .then(res => {
        setResults({
          country: res.data.location.country,
          cityName: res.data.location.name,
          temperature: res.data.current.temp_c,
          conditionText: res.data.current.condition.text,
          icon: res.data.current.condition.icon
        });
      });
  };
  return (
    <div className="App">
      <h1>こんにちは</h1>
      <Title />
      <Form setCity={setCity} getWether={getWether}/>
      <Results results={results}/>
    </div>
  );
}

export default App;
