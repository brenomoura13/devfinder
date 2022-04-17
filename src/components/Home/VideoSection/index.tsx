import { faHandshakeAngle, faShield, faCircleNodes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { NextPage } from 'next'
import Aos from 'aos'
import { useEffect } from 'react'
import { faBrain } from '@fortawesome/free-solid-svg-icons'

const Footer: NextPage = () => {
  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])
  return (
    <>
      <h1 className="title is-size-1 is-family-code is-uppercase has-background-primary has-text-white has-text-centered is-underlined has-margin-top-minus-200 has-padding-20 has-text-weight-bold">Conheça a DevFinder</h1>
      <section className="section is-medium">
        <div className="columns is-vcentered is-centered">
          <div className="column is-4">
            <div data-aos="flip-up" className="box has-background-primary">
              <iframe width="100%" height="320" src="https://www.youtube.com/embed/DXTPjzFYs4k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
          <div className="column is-8">
            <h1 data-aos="fade-down" className="title is-size-3">A maior plataforma para dar <b className="has-text-primary is-underlined">match</b></h1>
            <p data-aos="fade-right" className="subtitle is-size-4">Explore ao máximo nossa plataforma para conseguir se destacar entre as empresas ou candidatos.</p>
            <div className="columns is-align-items-stretch">
              <div className="column">
                <div data-aos="zoom-in-up" className="box has-border">
                  <h2 className="subtitle has-text-primary has-text-weight-bold is-size-5 is-underlined"><FontAwesomeIcon icon={faShield} className="has-margin-right-10"/>Confiabilidade</h2>
                  <p className="is-size-6">Aqui nós garantimos que toda e qualquer informação sensível é guardada em <b className="has-text-primary">7 chaves</b>.</p>
                </div>               
              </div>
              <div className="column">
                <div data-aos="zoom-in-up" className="box has-border">
                  <h2 className="subtitle has-text-primary has-text-weight-bold is-size-5"><FontAwesomeIcon icon={faCircleNodes} className="has-margin-right-10"/>Conectividade</h2>
                  <p className="is-size-6">De uma ponta a outra, conecte-se e converse com <b className="has-text-primary">recrutadores</b> e <b className="has-text-primary">desenvolvedores</b> do Brasil todo.</p>
                </div>
              </div>
              <div className="column">
                <div data-aos="zoom-in-up" className="box has-border">
                  <h2 className="subtitle has-text-primary has-text-weight-bold is-size-5"><FontAwesomeIcon icon={faHandshakeAngle} className="has-margin-right-10"/>Acessibilidade</h2>
                  <p className="is-size-6">Plataforma desenvolvida pensando em <b className="has-text-primary">todos</b>, com funções especiais para pessoas <b className="has-text-primary">PCD</b>.</p>
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
