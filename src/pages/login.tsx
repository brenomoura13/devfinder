import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Login from '../components/Login'
import Nav from '../components/Nav'

const LoginPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title='Login | DevFinder'
        description="Faça login na DevFinder e se aventure."
      />
      <Nav />
      <Login />
    </>
  )
}

export default LoginPage
