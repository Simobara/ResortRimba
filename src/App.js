import React from "react";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';




function App() {
  return (
  <>
  <Navbar/> 
    <Routes>
      <Route path='/'  element={<Home/>} />
      <Route exact path='/rooms'  element={<Rooms/>} />
      <Route exact path='/singleRoom' element={<SingleRoom/>} />
      <Route path='*' element={<Error/>} />
    </Routes>
  </>
  );
}

export default App;