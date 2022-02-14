import Navbar from '../components/Navbar'
import Image from 'next/image'
import About from '../components/About'
import Cards from '../components/Cards'
import HeroSection from '../components/HeroSection'
import Uslugi from '../components/Uslugi'
import Form from "../components/Form"
import Head from 'next/head'

export default function Home() {
  return (

    <>
      <Head>
        <title>NFT-YR</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Уникальная услуга, которую предостовляем только мы. Мы создаем nft. Иди в будущее вместе с нами."/>
      </Head>
      <main>
<Navbar/>
      <HeroSection id="firstsection"/>
      <About id="secondsection"/>
      <Uslugi id="thirdsection"/>
      <Form id="fourthsection"/>
      {/* <Cards id="bann"/> */}
      </main>
    </>
  )
}
