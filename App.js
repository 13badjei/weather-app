import React from 'react';
import './App.css';

function App() {
  const [temp, setTemp] = React.useState(0);
  const [inval, setInVal] = React.useState();
  //"°C"
  const weatherResults = async (location) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=90e354fbb13ee60a9841f63c21139448`);

      const resData = await response.json()
      setTemp(resData.main.temp);
    } catch (error) {
      console.error(error);
    }

    //console.log(resData.main.temp);
  };

  React.useEffect(() => {
    if(inval){
    weatherResults(inval);
    }
  }, [inval])

  const searchSubmit = (event) => {
    setInVal(event.target.value);
  };

  return (
    <div className="App">
      <header className="info">
        <h1>weather app</h1>
        <h2>{inval}</h2>
        <h2 className="location"><i className="map"><img src="https://img.icons8.com/plasticine/35/000000/worldwide-location.png"/></i></h2>
        <h2>Local Temp is  {temp} °C</h2>
        <form onSubmit>
          <input className="SearchBar" onSubmit={searchSubmit}/>
          <button>Enter</button>
        </form>
      </header>
    </div>
  );
}

export default App;
