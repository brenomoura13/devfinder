import { faClipboardUser, faFilePen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NextPage } from 'next'

const RegisterSteps: NextPage = () => {
  return (
    <>
      <ul className="steps is-narrow is-medium is-centered has-content-centered">
        <li className="steps-segment is-active">
          <a href="#" className="has-text-dark">
            <span className="steps-marker">
              <span className="icon">
                <FontAwesomeIcon icon={faClipboardUser} />
              </span>
            </span>
            <div className="steps-content">
              <p className="heading">Informações pessoais</p>
            </div>
          </a>
        </li>
        <li className="steps-segment">
          <a href="#" className="has-text-dark">
            <span className="steps-marker">
              <span className="icon">
                <FontAwesomeIcon icon={faFilePen}/>
              </span>
            </span>
            <div className="steps-content">
              <p className="heading">Hard Skills</p>
            </div>
          </a>
        </li>
      </ul>
    </>
  )
}

export default RegisterSteps
