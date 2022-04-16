import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Footer from '../components/Footer'
import Headline from '../components/Headline'
import Nav from '../components/Nav'
import VideoSection from '../components/VideoSection'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title='Home | DevFinder - Encontre o seu dev favorito'
        description="Um portal de desenvolvedores para recrutadores."
      />
      <Nav />
      <Headline />
      <VideoSection />
      <Footer />
    </>
  )
}

export default Home
