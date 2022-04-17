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
      <h1 className="is-size-1 is-family-code is-uppercase has-background-primary has-text-white has-text-centered is-underlined has-padding-20 has-text-weight-bold">Empresas homologadas</h1>
      <section className="section is-medium has-background-dark">
        <div className="columns is-centered">
          <div className="column is-10">
            <PartnerImages />
          </div>
        </div>
      </section>
    </>
  )
}

export default Partners
