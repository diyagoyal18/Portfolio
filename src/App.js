import './App.scss';
import { Routes , Route} from 'react-router-dom';
import MagneticButton from './components/Layout'
import Navbar from './components/Navbar';
function App() {
  return (
   <>
   <Routes>
    <Route path='/nav' element={<MagneticButton/>}/>
    <Route path='/' element={<Navbar/>}/>
   </Routes>
   </>
  );
}

export default App;
