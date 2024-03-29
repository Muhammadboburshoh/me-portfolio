import { Link } from "react-router-dom"

import Logo from "../../images/logo.svg"
import "./header.css"

function Header ({executeScroll}) {

  return(
    <header className="header">
      <div className="container">
        <nav className="header-nav">
          <Link className="header__logo" to="#">
            <img src={Logo} alt="Me logo" width="80" height="80" />
          </Link>
          
          <ul className="header__menu">
            <li className="haeder__menu-item">
              <Link onClick={executeScroll} to="#" className="header__menu-link">About me</Link>
            </li>
            <li className="haeder__menu-item">
              <Link onClick={executeScroll} to="#" className="header__menu-link">Work</Link>
            </li>
            <li className="haeder__menu-item">
              <a href="tel:+998950551612" className="white-button">
                <span className="white-button-span">Contact me</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="header__intro">
          <div className="header__intro-left">
            <p className="header__intro-text">
              <span className="header__intro-teg">&lt;head&gt;</span>Hey, what's up?<span className="header__intro-teg">&lt;/head&gt;</span>
            </p>
            <h1 className="header__intro-heading">My name is Muhammadbobur, i am a web Beckend Programmer</h1>

            <div className="header__intro-buttons">
              <a href="tel:+998950551612" className="header__intro-button green-button">
                <span className="white-button-span">Contact me</span>
              </a>

              <Link onClick={executeScroll} to="#about" className="header__intro-button white-button">
                <span className="white-button-span">About me</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header