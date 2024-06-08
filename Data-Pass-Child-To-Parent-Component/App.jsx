import React, {useState} from 'react';


/* Child Componnet */
export function Child({changeCity, city}) {
  return (
    <div className='App'>
      <input type="text" name="city" onChange={changeCity} value={city} />
    </div>
  );
}

/* Parent Componnet */
export function App(props) {
  const [city, setCity] = useState('Kolkata');

  return (
    <div className='App'>
      <h1>City: {city}</h1>
      <Child changeCity={(e) => setCity(e.target.value)} city={city}  />
    </div>
  );
}
