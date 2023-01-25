import { useState } from "react"
import "../common/Nav.css"

const Nav = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        B&S
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
       <svg viewBox='0 0 100 100'>
<g >
    <path d="M 2 10 98 10"></path>
    <path d="M 2 50 98 50"></path>
    <path d="M 2 90 98 90"></path>
  </g>
</svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;