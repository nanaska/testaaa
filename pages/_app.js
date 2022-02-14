import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return <>
  
    <Head>
      
    </Head> 
    
  <Component {...pageProps} /> </>
}

export default MyApp
