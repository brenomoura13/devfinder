import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Footer from '../components/Footer'
import Headline from '../components/Home/Headline'
import Nav from '../components/Nav'
import Partners from '../components/Home/Partners'
import VideoSection from '../components/Home/VideoSection'
import Considerations from '../components/Home/Considerations'
import Map from '../components/Home/Map'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title='Home | DevFinder'
        description="Um portal de desenvolvedores para recrutadores."
      />
      <Nav />
      <Headline />
      <VideoSection />
      <Partners />
      <Considerations />
      <Map />
      <Footer />
    </>
  )
}

export default Home
