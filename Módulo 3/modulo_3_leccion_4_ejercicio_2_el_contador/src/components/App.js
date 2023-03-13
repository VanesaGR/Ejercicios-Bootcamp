import '../styles/App.scss';
import { useState } from 'react';

function App() {

    const [count, setCount] = useState(0);

  const handleIncrement = (ev) => {
    ev.preventDefault();
    setCount(count + 1);
  };

  const handleDecrement = (ev) => {
    ev.preventDefault();
    setCount(count - 1);
  };

  return <div className="App">{

    <form className='form'>
      <p>Contador: {count}</p>
      <button class="btnIncrement" value="Incrementar" onClick={handleIncrement}>Incrementar</button>
      <button class="btnDecrease" value="Decrementar" onClick={handleDecrement}>Decrementar</button>
    </form>

  }</div>;
}

export default App;
