import { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [status, setStatus] = useState(false);

  const toggleMenu = () => {
    setStatus(!status);
  };

  return (
    <nav>
      <img className="logo" src="../../public/logo.png"></img>

      <button className={status ? "btn-open" : "btn-closed"} onClick={toggleMenu}>
        ☰
      </button>

      <ul className={status ? "open" : "closed"}>
        <li>About</li>
        <li>Services</li>
        <li>Results</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
