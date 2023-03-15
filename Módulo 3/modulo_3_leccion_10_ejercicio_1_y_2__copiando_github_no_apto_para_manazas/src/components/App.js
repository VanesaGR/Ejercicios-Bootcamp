import '../styles/App.scss';

import {Link, Route, Routes} from 'react-router-dom';
import Overview from './Overview';
import Repositories from './Repositories';
import Packages from './Packages';
import People from './People';
import Teams from './Teams';
import Projects from './Projects';
import Settings from './Settings';
import NotFoundPage from './NotFoundPage';


const App = () => {
  return (
    
    <div>
      <h2>Este título aparece siempre</h2>

      <Routes>
        <Route path='/overview' element={<Overview />} />
        <Route path='/repositories' element={<Repositories />} />
        <Route path='/packages' element={<Packages />}/>
        <Route path='/people' element={<People />}/>
        <Route path='/teams' element={<Teams />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/settings' element={<Settings />}/>
        <Route path='/notFoundPage' element={<NotFoundPage />} /> 
        {/* FALTA IMPLEMENTARLO BIEN (LA PAGINA NOT FOUND PAGE)*/}
      </Routes>

      <nav>
        <ul>
          <li>
            <Link to='/overview'>Overview</Link>
          </li>
          <li>
            <Link to='/repositories'>Repositories</Link>
          </li>
          <li>
            <Link to='/packages'>Packages</Link>
          </li>
          <li>
            <Link to='/people'>People</Link>
          </li>
          <li>
            <Link to='/teams'>Teams</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/settings'>Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};


export default App;
