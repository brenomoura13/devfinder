import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Nav from '../../components/Nav'
import RegisterMainPage from '../../components/Register/MainPage'

const Register: NextPage = () => {
  return (
    <>
      <NextSeo
        title='Registro | DevFinder'
        description="É um(a) desenvolvedor(a) ou retrutador(a)? Registre-se na DevFinder e encontre o que você está procurando."
      />
      <Nav />
      <RegisterMainPage />
    </>
  )
}

export default Register
