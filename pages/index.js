import Navbar from '../components/Navbar'
import Image from 'next/image'
import About from '../components/About'
import Cards from '../components/Cards'
import HeroSection from '../components/HeroSection'
import Uslugi from '../components/Uslugi'
import Form from "../components/Form"


export default function Home() {
  return (

    <>
<Navbar/>
      <HeroSection id="firstsection"/>
      <About id="secondsection"/>
      <Uslugi id="thirdsection"/>
      <Form id="fourthsection"/>
      {/* <Cards id="bann"/> */}
      
    </>
  )
}
