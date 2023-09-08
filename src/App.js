import React from 'react';
import Navbar from "./components/navbar/Navbar";
import Home from './pages/Home';
import Blog from './pages/Blog';
import  "./styles/main.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blogs/:blogId" element={<Blog/>}/>
      </Routes>
    </Router>
  );
}

export default App;
