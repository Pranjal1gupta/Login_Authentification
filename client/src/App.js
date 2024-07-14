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
        <Route path='https://login-authentification-api.vercel.app/' element={<Home/>}/>
        <Route path='https://login-authentification-api.vercel.app/login' element={<Login/>}/>
        <Route path='https://login-authentification-api.vercel.app/signup' element={<Signup/>}/>
        <Route path='https://login-authentification-api.vercel.app/about' element={<About/>}/>
        <Route path='https://login-authentification-api.vercel.app/securepage' element={<SecurePage/>}/>
        {/* <Route path='/logout' element={<Logout/>}/> */}
      </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App;
