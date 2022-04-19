import type { NextPage } from 'next'
import Aos from 'aos'
import { useEffect } from 'react'
import PartnerImages from './PartnerImages'

const Partners: NextPage = () => {
  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])
  return (
    <>
      <h1 className="is-size-1 is-size-3-mobile  is-family-code is-uppercase has-background-primary has-text-white has-text-centered is-underlined has-padding-20 has-text-weight-bold">Empresas homologadas</h1>
      <section className="section is-medium has-background-dark is-align-items-center">
        <div className="columns is-flex-direction-column is-align-items-center">
          <div data-aos="zoom-in-up" className="column is-justify-content-center">
            <PartnerImages />
          </div>
          <p className="subtitle is-size-7 has-text-white has-text-centered has-margin-top-10">Caso tenha interesse em aparecer aqui, entre em contato conosco através <b className="has-text-light is-underlined">deste link.</b></p>
        </div>
      </section>
    </>
  )
}

export default Partners
