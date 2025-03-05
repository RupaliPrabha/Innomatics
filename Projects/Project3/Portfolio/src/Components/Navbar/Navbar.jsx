import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import nav_pattern from "../../assets/nav-pattern.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/lines.svg'
import menu_close from '../../assets/close.svg'

const Navbar = () => {
  const [active, setActive] = useState("home");
  const menuRef =useRef();

  const openMenu=()=>{
    menuRef.current.style.right="0"
  }

  const closeMenu=()=>{
    menuRef.current.style.right="-300px"
  }

  return (
    <div className="navbar">
      <img className="nav-logo" src={logo} alt="logo" />
      <img  src={menu_open} alt="lines" onClick={openMenu} className="nav-mob-open" />

      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} alt="close" onClick={closeMenu} className="nav-mob-close" />
        <li><AnchorLink  className="anchor-link" href="#home"><p onClick={() => setActive("home")}>Home</p>{" "}</AnchorLink>{active === "home" ? (<img src={nav_pattern} alt="nav-pattern" />) : (<></>)}</li>
        <li><AnchorLink offset={20} className="anchor-link" href="#about"><p onClick={() => setActive("about")}>About Me</p></AnchorLink>{active === "about" ? (<img src={nav_pattern} alt="nav-pattern" />) : ( <></>)}</li>
        <li><AnchorLink offset={20} className="anchor-link" href="#experience"><p onClick={() => setActive("experience")}>Experience</p></AnchorLink>{active === "experience" ? (<img src={nav_pattern} alt="nav-pattern" />) : (<></>)}</li>
        <li><AnchorLink offset={50} className="anchor-link" href="#project"><p onClick={() => setActive("project")}>Projects</p></AnchorLink>{active === "project" ? (<img src={nav_pattern} alt="nav-pattern" />) : (<></>)}</li>
        <li><AnchorLink  className="anchor-link" href="#contact"><p onClick={() => setActive("contact")}>Contact</p></AnchorLink>{active === "contact" ? (<img src={nav_pattern} alt="nav-pattern" />) : (<></>)}</li>
        </ul>
      <div className="nav-connect">
        <AnchorLink  className="anchor-link" href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
