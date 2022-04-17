import type { NextPage } from 'next'
import Stats from './Stats'
import data from '../../../data/stats.json'
import Aos from 'aos'
import { useEffect } from 'react'


const Headline: NextPage = () => {
  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])
  return (
    <>
      <section className="hero is-link is-fullheight-with-navbar has-background-dark">
        <div className="hero-body">
          <div className="columns is-vcentered is-justify-content-flex-end">
            <div className="column is-full">
              <h1 data-aos="fade-left" className="title is-size-1 has-text-white has-text-centered">
               Procurando um desenvolvedor para o seu projeto ou quer ser notado por algum recrutador?
              </h1>
              <h2 data-aos="fade-right" className="subtitle is-size-3 has-text-white has-text-centered has-margin-top-30">
                Nos deixe te ajudar! Realize seu <b className="has-background-light has-padding-3 is-underlined">registro</b> para aumentar suas chances de sucesso.
              </h2>
              <div data-aos="fade-up" className="column">
                <h2 className="subtitle is-size-4 has-text-white has-text-centered has-margin-top-30">Junte-se a nossa plataforma e faça parte das estatisticas:</h2>
                <nav className="level has-text-white is-flex-direction-row">
                  {data.counts.map(count => <Stats key={count.id} data={count}/>)}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Headline
