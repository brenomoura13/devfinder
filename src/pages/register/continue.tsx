import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import Nav from '../../components/Nav'
import RegisterInformations from '../../components/Register/SendInfos'

const ContinueRegister: NextPage = () => {
  const router = useRouter()
  const query = router.query
  const name = query.email
  return (
    <>
      <NextSeo
        title='Registro | DevFinder'
        description="É um(a) desenvolvedor(a) ou retrutador(a)? Registre-se na DevFinder e encontre o que você está procurando."
      />
      <Nav />
      
      <RegisterInformations email={name} />
    </>
  )
}

export default ContinueRegister
