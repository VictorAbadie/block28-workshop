import { Routes, Route, Link } from "react-router-dom";
import Fire from "./components/Fire"
import Water from "./components/Water"
import Space from "./components/Space"
import Earth from "./components/Earth"
import Air from "./components/Air"
import './App.css'


function App() {


  return (
    <>

<div id="container">

<h1>The Five Elements:</h1>

      <div id="main-section">

        <Routes>
            <Route path="/" element={ <Space/> }/>
            <Route path="/fire" element={ <Fire/> }/>
            <Route path="/water" element={ <Water/> }/>
            <Route path="/earth" element={ <Earth/> }/>
            <Route path="/air" element={ <Air/> }/>

        </Routes>

       
        </div>

        <div id="navbar">
        <Link to="/">Space</Link>
        <Link to="/fire">Fire</Link>
        <Link to="/water">Water</Link>
        <Link to="/earth">Earth</Link>
        <Link to="/air">Air</Link>
      </div>

        </div>

    </>
  )
}

export default App
