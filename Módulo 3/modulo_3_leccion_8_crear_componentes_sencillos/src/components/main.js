const Main = ()=>{
    return (
<main>
    <form class="form">            
        <label htmlFor="inputNumber" className="label">Introduce aquí tu número:</label><br/>    
        <input type="number" id="inputNumber" class="inputNumber js-inputNumber" placeholder="Introduce un número"/><br/>
        <input className="button js-button" type="button" value="Prueba"/>
        </form>
        <p class="clue js-clue">Pista: Escribe aquí tu número y dale a Prueba</p>      
        <p class="try js-try">Número de intentos: 0</p>
    </main>
    );
}

export default Main;
