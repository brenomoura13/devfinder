import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { NextPage } from 'next'
import Link from 'next/link'

const RegisterMainPage: NextPage = () => {
  return (
    <section className="hero is-white is-fullheight-with-navbar">
      <div className="hero-body is-justify-content-center is-flex-direction-column">
        <div className="columns">
          <div className="column is-justify-content-center has-text-centered is-family-secondary">
            <h1 className="title is-size-2">
              Obrigado por se interessar na <b className="has-text-primary">DevFinder</b> :)
            </h1>
            <label className="subtitle is-size-4 has-margin-top-50" htmlFor="email">
              Informe seu melhor e-mail para continuar
            </label>
            <div className="field">
              <div className="control">
                <input className="input is-medium is-primary has-text-primary" id="email" type="email" placeholder="E-mail" />
                <button className="button is-rounded is-primary has-margin-top-10" onClick={()=>{alert('Uhul!')}}>
                  <span className="icon has-text-light">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                  <span>Continuar</span>
                </button>
              </div>
            </div>
            <h3 className="subtitle is-size-6 has-margin-top-100">
              Já é registrado? <Link href="/login"><a className="has-text-primary is-underlined">Clique aqui</a></Link> para fazer o login.
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterMainPage
