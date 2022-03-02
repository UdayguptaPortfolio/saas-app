import React from 'react'
import About from './components/about';
import Header from './components/header';
import NavBar from './components/navbar';
import "./sass/main.scss";
function App() {
  return (
    <div>
      <NavBar/>
    <Header/>
    <About/>
    </div>
  )
}

export default App;