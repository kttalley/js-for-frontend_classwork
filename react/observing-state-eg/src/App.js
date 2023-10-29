import React, { useState } from 'react';
import Heading from './Heading';
import './App.css';

function App() {
  const [word, setWord] = React.useState('Eat')
  let drink = false;
  function handleClick() {
    if (drink === false){
      setWord('Drink');
      drink = true;
    } else {
      setWord('Eat');
      drink = false;
    }
    
  }
  
  return (
   <>
    <div className='App'>
      <Heading message={word + " at Little Lemon"} />
      <button onClick={handleClick}>Change the state of this component.</button>
    </div>
   </>
  );
}

export default App;
