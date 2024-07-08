import './App.scss';
import { Routes , Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Animation from './components/Animation/Animation'
function App() {
  return (
   <>
   <Animation/>
   <Routes>
    
    <Route path='/' element={<Navbar/>}/>
   </Routes>
   </>
  );
}

export default App;
