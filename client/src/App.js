import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import SecurePage from './components/SecurePage';
// import Logout from './components/Logout';

const App=()=> {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/securepage' element={<SecurePage/>}/>
        {/* <Route path='/logout' element={<Logout/>}/> */}
      </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App;
