import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { NextPage } from 'next'

const Footer: NextPage = () => {
  return (
    <footer className="footer has-background-primary">
      <div className="content has-text-centered">
        <p className="has-text-white">
          <b className="has-text-white">DevFinder</b> by <b>Breno Moura</b> with <FontAwesomeIcon icon={faHeart} />
        </p>
      </div>
    </footer>
  )
}

export default Footer
