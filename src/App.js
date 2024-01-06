import "./App.css";
import Nav from './components/Nav'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PrivateRoute from "./components/PrivateRoute";
import { Route,Routes } from "react-router-dom";
import { useState } from "react";
function App() {

  const[isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div className="w-[100vw] min-h-[100vh] h-full bg-[#04364A]  flex flex-col ">
      <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Nav>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/signup" element={<Signup  setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Home/>
          </PrivateRoute>
        } />
      </Routes>
    </div>
  )
}

export default App;
