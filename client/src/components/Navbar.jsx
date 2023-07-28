import { useState } from "react"
import "./styles/navbar.css";
import menu from "./styles/menu.svg"

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
       NewsX
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        <img style={{width:"100%"}}src={menu} alt="logo"/>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}