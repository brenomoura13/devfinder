import type { NextPage } from 'next'
import Cards from './Cards'

const Considerations: NextPage = () => {
  return (
    <>
      <h1 className="title is-size-1 is-family-code is-uppercase has-background-primary has-text-white has-text-centered is-underlined has-margin-top-minus-200 has-padding-20 has-text-weight-bold">Avaliações em destaque</h1>
      <section className="section is-background-white">
        <div className="columns">
          <Cards />
        </div>
      </section>
    </>
  )
}

export default Considerations
