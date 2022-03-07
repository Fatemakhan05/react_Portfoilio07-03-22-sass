import Intro from "./components/topbar/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import Portfolio from "./components/topbar/portfolio/Portfolio"
import Works from  "./components/works/Works"
import "./app.scss"
import Testimonials from "./components/testimonials/Testimonials"
import Contacts from "./components/contact/Contact"
 import {useState} from "react"
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen,setMenuOpen]=useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
      <Intro/> 
      <Portfolio/>
      <Works/>
      <Testimonials/>
      <Contacts/>
       
       
       </div>   
    </div>
  );
}

export default App;
