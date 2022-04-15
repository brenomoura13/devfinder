import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Headline: NextPage = () => {
  return (
    <section className="hero is-link is-fullheight-with-navbar has-background-white has-text-centered">
      <div className="hero-body">
        <p className="title is-size-2 has-text-black">
          Uma plataforma desenvolvida para <strong className="has-background-primary">desenvolvedores</strong> e <strong className="has-background-primary">recrutadores</strong>
        </p>
      </div>
    </section>
  )
}

export default Headline
