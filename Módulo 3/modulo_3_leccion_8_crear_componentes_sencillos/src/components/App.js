import '../styles/App.scss';
import '../styles/css/style.css';
import Header from './header';
import Main from './main';

function App() {
  return (<div className="App">{
    <div>
    <Header/>
    <Main/>
    </div>
  }
  </div>);
}

export default App;
