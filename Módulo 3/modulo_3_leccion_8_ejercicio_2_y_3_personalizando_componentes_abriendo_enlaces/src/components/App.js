import '../styles/App.scss';
import '../styles/css/style.css';
import Link from './Link';
import Header from './Header';

function App() {
  return (<div className="App">{
    <div>
    <Header/>
    <main>
    <form className="form">            
        <label htmlFor="inputNumber" className="label">Introduce aquí tu número:</label><br/>    
        <input type="number" id="inputNumber" className="inputNumber js-inputNumber" placeholder="Introduce un número"/><br/>
        <input className="button js-button" type="button" value="Prueba"/>
        </form>
        <p className="clue js-clue">Pista: Escribe aquí tu número y dale a Prueba</p>      
        <p className="try js-try">Número de intentos: 0</p>
    </main>
    </div>
  }
  </div>);
}

export default App;
