import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Nav: NextPage = () => {
  const [isBurger, setIsBurger] = useState(false);
  const isBurgerActive = isBurger ? "is-active" : "";
  const { width } = useWindowDimensions()
  let isTouchDevice:boolean = width < 1023 && width != 0 ? true : false;
  let logo:string = isTouchDevice ? "df-logo.png" : "df-escrito.png"
  let logoWidth:number = isTouchDevice ? 320 : 1089
  let logoHeight:number = isTouchDevice ? 188 : 348
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand is-justify-content-center">
        <Link href="/">
          <a className="navbar-item">
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
            <a className="navbar-item is-link is-light">
              Home
            </a>
          </Link>

          <Link href="/">
            <a className="navbar-item is-link is-light">
              Sobre
            </a>
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link href="/">
                <a className="button is-primary">
                  <strong>Registrar</strong>
                </a>
              </Link>
              <p className="is-size-8">ou </p>
              <Link href="/">
                <a className="button has-text-black is-inverted is-small">
                  Login
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
