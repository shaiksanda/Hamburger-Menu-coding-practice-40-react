import {GiHamburgerMenu} from 'react-icons/gi'
import Popup from 'reactjs-popup'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import {Link} from 'react-router-dom'

import './index.css'
import 'reactjs-popup/dist/index.css'

const Header = props => {
  console.log(props)
  return (
    <div className="header-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            className="trigger-button"
            type="button"
            aria-label="Open Menu"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu size="20px" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="popup-body">
            <div className="button">
              <button
                type="button"
                className="close-button"
                onClick={close}
                aria-label="Close"
                data-testid="closeButton"
              >
                <IoMdClose size="24px" />
              </button>
            </div>
            <ul className="menu-options">
              <Link to="/" className="nav-link" onClick={close}>
                <li className="menu-item">
                  <AiFillHome size={24} />
                  <h1 className="menu-text">Home</h1>
                </li>
              </Link>
              <Link to="/about" className="nav-link" onClick={close}>
                <li className="menu-item">
                  <BsInfoCircleFill size={24} />
                  <h1 className="menu-text">About</h1>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default Header
