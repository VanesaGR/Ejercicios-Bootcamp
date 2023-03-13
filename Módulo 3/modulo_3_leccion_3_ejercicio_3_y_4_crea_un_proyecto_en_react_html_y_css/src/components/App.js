import '../styles/App.scss';

function App() {
  return (
    <>
      <header>
        <h1 className="guess-number">Adivina el número</h1>
      </header>
      <main>
        <form className="form">            
          <label htmlFor="inputNumber" className="label">Introduce aquí tu número:</label><br />
          <input type="number" id="inputNumber" className="inputNumber js-inputNumber" placeholder="Introduce un número" /><br />
          <input className="button js-button" type="button" value="Prueba" /><br />
        </form>
        <p className="clue js-clue">Pista: Escribe aquí tu número y dale a Prueba</p>      
        <p className="try js-try">Número de intentos: 0</p>
      </main>
    </>
  );
}

export default App;
