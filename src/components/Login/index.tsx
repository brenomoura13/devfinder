import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextPage } from 'next';
import Link from 'next/link';

const Login: NextPage = () => {
  return (
    <section className="hero is-white is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered is-flex-direction-column is-align-items-center">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen is-light">
              <form action="">
                <div className="field">
                  <label htmlFor="e-mail" className="label is-unselectable">E-mail</label>
                  <div className="control has-icons-left">
                    <input type="email" id="e-mail" placeholder="ex: querovaga@email.com" className="input is-primary has-text-light" required />
                    <span className="icon is-small is-left">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="password" className="label is-unselectable">Senha</label>
                  <div className="control has-icons-left">
                    <input type="password" placeholder="******" className="input is-primary has-text-light" id="password" required />
                    <span className="icon is-small is-left">
                      <FontAwesomeIcon icon={faLock} />
                    </span>
                  </div>
                </div>
                <div className="field">
                  <input type="checkbox" id="remember" className="is-checkradio" />
                  <label htmlFor="remember" className="checkbox">
                    <span className="is-unselectable">Permanecer conectado</span>
                  </label>
                </div>
                <div className="field is-flex is-justify-content-center">
                  <button className="button is-primary has-text-light">
                    Login
                  </button>
                </div>
              </form>
              
            </div>
            <div className="column">
              <h3 className="subtitle is-size-6 has-margin-top-100">
                Ainda não é registrado? <Link href="/register"><a className="has-text-primary is-underlined">Clique aqui</a></Link> para fazer seu cadastro DevFinder.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
