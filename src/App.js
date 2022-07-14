
import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import Home from './components/Pages/Home';
import Search from './components/Pages/Search';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route  path='/search' element={<Search/>}/>
            <Route path='/' element={<Home/>}/>
          </Routes>
      </BrowserRouter>
     
      
 

    </div>
  );
}

export default App;
