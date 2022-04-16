import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Headline from '../components/Headline'
import Nav from '../components/Nav'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title='Home | DevFinder - Encontre o seu dev favorito'
        description="Um portal de desenvolvedores para recrutadores."
      />
      <Nav />
      <Headline />
    </>
  )
}

export default Home
