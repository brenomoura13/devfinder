import { faArrowRightFromBracket, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Nav: NextPage = () => {
  const [isBurger, setIsBurger] = useState(false);
  const isBurgerActive = isBurger ? "is-active" : "";
  const { width } = useWindowDimensions()
  let isTouchDevice:boolean = width < 1023 || width === 0 ? true : false;
  let logo:string = isTouchDevice ? "df-logo.png" : "df-escrito.png"
  let logoWidth:number = isTouchDevice ? 320 : 1089
  let logoHeight:number = isTouchDevice ? 188 : 348
  console.log(logoWidth, logoHeight)
  return (
    <nav className="navbar has-text-centered" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item is-justify-content-center">
            <Image src={`/assets/images/${logo}`} width={logoWidth} height={logoHeight} alt="DevFinder Logo" />
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
              <Link href="/" passHref>
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
