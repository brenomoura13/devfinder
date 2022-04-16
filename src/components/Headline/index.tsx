import type { NextPage } from 'next'
import Image from 'next/image'
import Stats from './Stats'
import data from '../../data/stats.json'

const Headline: NextPage = () => {
  return (
    <>
      <section className="hero is-link is-fullheight-with-navbar has-background-white">
        <div className="hero-body">
          <div className="columns is-vcentered">
            <div className="column is-full">
              <h1 className="title is-size-1 has-text-black has-text-centered">
               Procurando um desenvolvedor para o seu projeto ou quer ser notado por algum recrutador?
              </h1>
              <h2 className="subtitle is-size-3 has-text-black has-text-centered has-margin-top-30">
                Nos deixe te ajudar! Realize seu <b className="has-background-primary has-text-white has-padding-3 is-underlined">registro</b> para aumentar suas chances de sucesso.
              </h2>
              <div className="column">
                <h2 className="subtitle is-size-4 has-text-black has-text-centered has-margin-top-30">Nossos números:</h2>
                <nav className="level has-text-black is-flex-direction-row">
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
