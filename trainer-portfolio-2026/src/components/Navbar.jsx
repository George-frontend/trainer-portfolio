import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/navbar.css"; 
import { Menu, X } from "lucide-react";

const Navbar = () => {

  const [ status, setStatus ] = useState(false);

  const toogle = () => {
    setStatus(!status);
  }

  const navigate = useNavigate();
  const location = useLocation();

  const navigation = (id) => {

    if (location.pathname === "/") return document.getElementById(id).scrollIntoView();

    navigate("/", { state: { scrollTo: id } });
  }

  return (
    <nav className="navbar">

      <span className="name" onClick={() => navigation("hero")}>Venelin Hristov</span>

      <button className="nav-btn" aria-label="toogle-menu" onClick={toogle}>{status ? <X /> : <Menu />}</button>

      <ul className={`links ${status ? "open" : "closed"}`}>
        <li className="li-element"><span onClick={() => navigation("about")}>About</span></li>
        <li className="li-element"><span onClick={() => navigation("services")}>Services</span></li>
        <li className="li-element"><span onClick={() => navigation("feedback")}>Feedback</span></li>
        <li className="li-element"><span onClick={() => navigation("contact")}>Contact</span></li>
      </ul>
    </nav>
  );
};

export default Navbar;
