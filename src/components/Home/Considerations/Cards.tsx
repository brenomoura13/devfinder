import type { NextPage } from 'next'
import Image from 'next/image'
import Aos from 'aos'
import { useEffect } from 'react'

const Cards: NextPage = () => {
  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])
  return (
    <>
      <div className="columns is-justify-content-center">
        <div className="column is-4">
          <div data-aos="fade-right" className="card has-border">
            <div className="card-image">
              <figure className="image">
                <Image src="/assets/images/considerations/first.jpg" alt="Placeholder image" width={760} height={750} />
              </figure>
              <div className="tags is-justify-content-center">
                <span className="tag is-primary is-light">Recrutadora</span>
                <span className="tag is-warning is-light">Pleno</span>
                <span className="tag is-info is-light">Verificado</span>
              </div> 
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <Image src="/assets/images/considerations/first-icon.jpg" alt="Placeholder image" width={96} height={96} />
                  </figure>
                                 
                </div>
                <div className="media-content">
                  <p className="title is-4">Tauana Oliveira</p>
                  <p className="subtitle is-6">@tauana</p>
                </div>
              </div>

              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br/>
                <time dateTime="2016-1-1">11:09 PM - 1 Jan 2022</time>
              </div>
            </div>
          </div>
        </div>
        
        <div className="column is-4">
          <div data-aos="fade-up" className="card has-border">
            <div className="card-image">
              <figure className="image">
                <Image src="/assets/images/considerations/second.jpg" alt="Placeholder image" width={760} height={750} />
              </figure>
              <div className="tags is-justify-content-center">
                  <span className="tag is-primary is-light">Desenvolvedor Fullstack</span>
                  <span className="tag is-danger is-light">Sênior</span>
                  <span className="tag is-info is-light">Verificado</span>
              </div>                
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <Image src="/assets/images/considerations/second-icon.jpg" alt="Placeholder image" width={96} height={96} />
                  </figure>
                </div>
                <div className="media-content">
                  <h2 className="title is-4">Lucas Samuel</h2>
                  <h3 className="subtitle is-6">@lucas22
                  </h3>              
                </div>
              </div>

              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br/>
                <time dateTime="2016-1-1">02:22 AM - 1 Jan 2022</time>
              </div>
            </div>
          </div>
        </div>

        <div className="column is-4">
          <div data-aos="fade-right"  className="card has-border">
            <div className="card-image">
              <figure className="image">
                <Image src="/assets/images/considerations/third.jpg" alt="Placeholder image" width={760} height={750} />
              </figure>
              <div className="tags is-justify-content-center">
                <span className="tag is-primary is-light">Desenvolvedora Fullstack</span>
                <span className="tag is-success is-light">CEO</span>
                <span className="tag is-info is-light">Verificada</span>
              </div>   
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <Image src="/assets/images/considerations/third-icon.jpg" alt="Placeholder image" width={96} height={96} />
                  </figure>                              
                </div>
                <div className="media-content">
                  <p className="title is-4">Nonkululeko Ntshona</p>
                  <p className="subtitle is-6">@nonkuntshona</p>
                </div>
              </div>
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br/>
                <time dateTime="2016-1-1">11:09 PM - 1 Jan 2022</time>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Cards
