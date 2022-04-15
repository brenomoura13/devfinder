import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Nav: NextPage = () => {
  const { width } = useWindowDimensions()
  let isTouchDevice:boolean = width < 1023 && width != 0 ? true : false;
  let logo:string = isTouchDevice ? "df-logo.png" : "df-escrito.png"
  let logoWidth:number = isTouchDevice ? 68 : 200
  let logoHeight:number = isTouchDevice ? 68 : 64
  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="/" passHref>
          <a className="navbar-item is-large">
            <Image src={`/assets/images/${logo}`} width={logoWidth} height={logoHeight} alt="DevFinder Logo" />
          </a>
        </Link>
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar" className="navbar-menu">
        <div className="navbar-start">
          <Link href="/">
            <a className="navbar-item">
              Home
            </a>
          </Link>

          <Link href="/">
            <a className="navbar-item">
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
              <Link href="/">
                <a className="button is-light">
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
