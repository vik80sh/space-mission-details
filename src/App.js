import React from 'react';
import './App.css';
import Home from './component/Home'; 

function App() {
  return (
    <section className="container-fluid">
      <h1>SpacEx Launch Programs</h1>
        <Home/>
        
        <div className="developer-name">Developed By <strong>Vikash Gupta, vik80sh@gmail.com</strong></div>
    </section>
  );
}

export default App;
