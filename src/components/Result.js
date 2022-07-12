
const Results = ({results}) => {
  const { cityName, country, temperature, conditionText,icon } = results
  return (
    <div>
      {cityName && <div className="results-cityName">{cityName}</div>}
      {country && <div className="results-country">{country}</div>}
      {temperature && <div className="results-temp">{temperature}
        <span>°C</span></div>}
      {conditionText && 
        <div className="results-condition">
            <img src={icon} alt="icon" />
            <span>{conditionText}</span>
      </div>
      }
    </div>
  );
};

export default Results;
 