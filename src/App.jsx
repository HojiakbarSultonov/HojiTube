import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import {Main, Login, Register} from './components'

function App() {
  return <div>
    <Routes>
        <Route path="/" element = {<Main/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/register" element = {<Register/>}/>
    </Routes>
  </div>;
}

export default App;
