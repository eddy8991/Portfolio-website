import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faBars,
  faClose,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link 
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="Logo" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <div className="mobile-logo">
          <img src={LogoS} alt="logo" />
          <span>Edwin</span>
        </div>
        <div className='navigationLinks'>
        <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" className='link-icon' />
        </NavLink>
        <NavLink 
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" className='link-icon' />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" className='link-icon' />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}
        >
        <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" className='link-icon' />
        </NavLink>
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#00c97c"
          size="3x"
          className='close-icon' />
        </div>
        
        <div className='mobileLinks'>
          <a
            href="https://www.linkedin.com/in/eddy-mwas-5b2141235/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#424342c"
              className="anchor-icon"
            />
          </a>
          <a
            href="https://github.com/eddy8991?tab=repositories"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon
              icon={faGithub}
              color="#424342c"
              className="anchor-icon" />
          </a>
        </div>
        
        <p className='footer'>&copy; All rights reserverd <br />Designed & Built by Edwin Kahiga</p>
      </nav>
      <ul>
        <li>
          <a
            href="https://github.com/eddy8991"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#424342c"
              className="anchor-icon"
            />
          </a>
          <a
            href="https://github.com/eddy8991?tab=repositories"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon
              icon={faGithub}
              color="#424342c"
              className="anchor-icon"/>
          </a>
        </li>
      </ul>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#00c97c"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar
