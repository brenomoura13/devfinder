import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCheck } from '@fortawesome/free-solid-svg-icons'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Map: NextPage = () => {
  const navMap: { title: string; names:{p:string, link:string}[] }[] = [
    {
      title: "Navegação",  
      names: [
        {p: "Sobre", link: "/sobre"},
        {p: "Contato", link: "/contato"},
        {p: "Termos de Uso", link: "/termos-de-uso"},
        {p: "Avaliações", link: "/avaliacoes"},
        {p: "Parceiros", link: "/parceiros"}
      ]
    },
    {
      title: "Redes Sociais",
      names: [
        {p: "Instagram", link: "/"},
        {p: "Facebook", link: "/"},
        {p: "LinkedIn", link: "/"}
      ]
    },
  ]
  return (
    <section className="section has-background-primary">
      <div className="columns is-gapless is-vcentered">
        <div className="column has-text-centered has-margin-50">
          <Image src="/assets/images/df-white.png" alt="Map" width={851/4} height={110/4} />
          <p className="is-size-7 has-text-white"><b>2022</b> &copy; Todos os direitos reservados</p>
        </div>
        <div className="column is-8 is-offset-4">
          <div className="columns is-uppercase has-text-centered-mobile">
            {navMap.map(({ title, names }) => (
              <div className="column" key={title}>
                <h1 className="title is-size-5 has-text-white">
                  {title}
                </h1>
                <ul>
                  {names.map(({ p,link }) => (
                    <Link href={link} passHref key={p}>
                      <li>
                        <a className="has-text-primary-light" target="_blank" rel="noopener noreferrer">
                          {p}
                        </a>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>        
            ))}
            <div className="column">
              <h1 className="title is-size-5 has-text-white">
                Newsletter
              </h1>
              <div className="is-flex-mobile is-justify-content-center">
                <div className="field has-addons">
                  <div className="control has-icons-left">
                    <input className="input is-small" type="email" placeholder="Digite seu e-mail" />
                    <span className="icon is-small is-left has-text-primary">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                  </div>
                  <div className="control">
                    <a className="button is-small has-text-primary has-background-white">
                      <FontAwesomeIcon icon={faCheck} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Map
