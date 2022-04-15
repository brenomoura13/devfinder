import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import '../../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
