import { faHandshakeAngle, faShield } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { NextPage } from 'next'

const Footer: NextPage = () => {
  return (
    <>
      <h1 className="title is-size-1 is-family-code is-uppercase is-italic has-background-primary has-text-white has-text-centered is-underlined has-margin-top-minus-200 has-padding-20 has-text-weight-bold">Conheça a DevFinder</h1>
      <section className="section is-medium">
        <div className="columns">
          <div className="column is-4">
            <div className="box">
              <iframe width="100%" height="320" src="https://www.youtube.com/embed/DXTPjzFYs4k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
          <div className="column is-8 has-padding-left-90">
            <h1 className="title is-size-3">A maior plataforma para dar <b className="has-text-primary is-underlined">match</b></h1>
            <p className="subtitle is-size-4">Explore ao máximo nossa plataforma para conseguir se destacar entre as empresas ou candidatos.</p>
            <div className="columns">
              <div className="column">
                <div className="box">
                  <h2 className="subtitle has-text-primary has-text-weight-bold is-size-5"><FontAwesomeIcon icon={faShield} className="has-margin-right-10"/> Confiabilidade</h2>
                  <ul>
                    <li>teste</li>
                  </ul>
              </div>
                
              </div>
              <div className="column">
                <div className="box">
                  <h2 className="subtitle has-text-primary has-text-weight-bold is-size-5"><FontAwesomeIcon icon={faShield} className="has-margin-right-10"/> Acessibilidade</h2>
                </div>
              </div>
              <div className="column">
                <div className="box">
                  <h2 className="subtitle has-text-primary has-text-weight-bold is-size-5"><FontAwesomeIcon icon={faHandshakeAngle} className="has-margin-right-10"/> Acessibilidade</h2>
                </div>
              </div>
            </div>            
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
