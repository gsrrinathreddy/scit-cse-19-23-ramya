
import './App.css';
import Navbar from './components/Navbar';
import{ BrowserRouter,Routes,Route} from 'react-router-dom';
import { CircleNotifications } from '@mui/icons-material';
import Aboutme from './pages/Aboutme';
import Skills from './pages/Skills';
import Qualifications from './pages/Qualifications';
import Hobbies from './pages/Hobbies';
import Workshop from './pages/Workshop';
import Contactme from './pages/Contactme';
import Projects from './pages/Projects';
import Experience from './pages/Experience';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path ="/Aboutme" element={<Aboutme/>}/>
        <Route path ="/Qualifications" element={<Qualifications/>}/>
        <Route path ="/Skills" element={<Skills/>}/>
        <Route path ="/Hobbies" element={<Hobbies/>}/>
       <Route path ="/Experience" element={<Experience/>}/>
       <Route path ="/Workshop" element={<Workshop/>}/>
       <Route path ="/contactme" element={<Contactme/>}/>
       <Route path ="/Projects" element={<Projects/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
