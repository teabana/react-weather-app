
const Form = ({setCity, getWether}) => {
  return (
    <form>
      <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)}/>
      <button type="submit" onClick={getWether}>Get Weather</button>
    </form>
  );
};

export default Form;