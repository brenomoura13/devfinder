import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { NextPage } from 'next'
import Link from 'next/link'

const Footer: NextPage = () => {
  return (
    <footer className="footer has-background-primary">
      <div className="content has-text-light has-text-right has-text-centered-mobile">
        <p className="has-text-white is-size-7">
          <b>DevFinder</b> by <b><a target="_blank" href='https://github.com/brenomoura13' className="has-text-primary-light" rel="noreferrer">Breno Moura</a></b> with <FontAwesomeIcon icon={faHeart} />
        </p>
      </div>
    </footer>
  )
}

export default Footer
