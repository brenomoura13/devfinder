import { faArrowRightFromBracket, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react';

const Nav: NextPage = () => {
  const [isBurger, setIsBurger] = useState(false)
  const isBurgerActive = isBurger ? "is-active" : ""
  return (
    <nav className="navbar has-text-centered" role="navigation" aria-label="main navigation">
      <div className="navbar-brand is-justify-content-space-between">
        <Link href="/">
          <a className="navbar-item is-justify-content-center">
            <p className="is-size-3 has-text-weight-bold has-text-primary">DEVFINDER</p>
          </a>
        </Link>
        <a role="button" onClick={() => setIsBurger(!isBurger)} className={`navbar-burger ` + isBurgerActive} aria-label="menu" aria-expanded="false" data-target="navbar">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar" className={`navbar-menu ` + isBurgerActive}>
        <div className="navbar-start">
          <Link href="/">
            <a className="navbar-item is-link-light is-light">
              Home
            </a>
          </Link>

          <Link href="/">
            <a className="navbar-item is-link-light is-light">
              Sobre
            </a>
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons has-addons is-justify-content-center">
              <Link href="/register" passHref>
                <button className="button is-primary has-text-light is-small">
                  <span className="icon is-small">
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />
                  </span>
                  <span> Registrar</span>
                </button>
              </Link>
              <Link href="/login" passHref>
                <button className="button is-light has-text-primary is-small">
                  <span className="icon is-small">
                  <FontAwesomeIcon icon={faLock} />
                  </span>
                  <span> Login</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
