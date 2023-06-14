import { useState, useEffect } from 'react';
import {Route, Routes} from "react-router-dom"
import LogIn from "./components/LogIn";
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import './App.css'



function App() {


  return (
    <>
    <NavBar />
    <Routes>
      <Route path = "/LogIn" element = {<LogIn />}/>
    </Routes>
     <h2>Hello World</h2>

    </>
  )
}

export default App
