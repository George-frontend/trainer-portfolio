import { useState } from "react";
import "../styles/navbar.css"; 
import { Menu, X } from "lucide-react";

const Navbar = () => {

  const [ status, setStatus ] = useState(false);

  const toogle = () => {
    setStatus(!status);
  }

  return (
    <nav className="navbar">

      <a className="name" href="#hero">Venelin Hristov</a>

      <button className="nav-btn" aria-label="toogle-menu" onClick={toogle}>{status ? <X /> : <Menu />}</button>

      <ul className={`links ${status ? "open" : "closed"}`}>
        <li className="li-element"><a href="#about">About</a></li>
        <li className="li-element"><a href="#services">Services</a></li>
        <li className="li-element"><a href="#results">Results</a></li>
        <li className="li-element"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
