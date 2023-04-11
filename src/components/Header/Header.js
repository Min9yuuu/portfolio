import React from "react";
import "./Header.css";

function Header() {
  return (
    <header id='main-header'>
      <nav className='container'>
        <div className='header-box'>
          <a href='/' className='logo'>
            <span>Logo</span>
          </a>
          <div className='menu-box'>
            <ul className='nav-bar'>
              <li>
                <a href='/'>
                  <span>HOME</span>
                </a>
              </li>
              <li>
                <a href='/'>
                  <span>ABOUT US</span>
                </a>
              </li>
              <li>
                <a href='/'>
                  <span>SERVICES</span>
                </a>
              </li>
              <li>
                <a href='/'>
                  <span>PORTFOLIO</span>
                </a>
              </li>
              <li>
                <a href='/'>
                  <span>BLOG</span>
                </a>
              </li>
              <li>
                <a href='/'>
                  <span>CONTACT</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
