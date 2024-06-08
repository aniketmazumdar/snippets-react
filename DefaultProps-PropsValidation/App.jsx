import React from 'react';
import {PropTypes} from 'prop-types';


export function App({name, age}) {
  return (
    <div className='App'>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
};

App.defaultProps = {
  name: 'Aniket',
  age: 50
}
