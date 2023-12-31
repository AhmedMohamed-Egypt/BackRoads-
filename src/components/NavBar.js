import React from "react";

import logo from '../images/logo.svg'
import { pageLinks ,socialLinks} from "../data";

function NavBar(){
return (
    <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} className="nav-logo" alt="backroads" />
        <button type="button" className="nav-toggle" id="nav-toggle">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    
      <ul className="nav-links" id="nav-links">
        {pageLinks.map((item)=>{
            return   <li key={item.id}>
            <a rel="norefer" href={item.href} className="nav-link"> {item.text} </a>
          </li>
        })}

      

      </ul>

      <ul className="nav-icons">
        {socialLinks.map((item)=>{
            const {id,href,classLnk} = item
            return   <li key={id}>
            <a href={href} rel="noreferrer"  target="_blank" className="nav-icon">
                <i className={classLnk}></i>
            </a>
          </li>
        })}
      
      

      </ul>
    </div>
  </nav>
)
}

export default NavBar;