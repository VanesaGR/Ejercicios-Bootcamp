import '../styles/App.scss';
import { useState } from 'react';

function App() {

  const [lastKeyPressed, setLastKeyPressed] = useState(null);

  function handleKeyPress(event) {
    setLastKeyPressed(event.key);
    console.log({lastKeyPressed})
  }

  return <div className="App">{
    <form className='form'>
      <input type="text" className='formInput'placeholder='Escribe algo' onKeyDown={handleKeyPress}></input>
    </form>
  }</div>;
}

export default App;
