import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return <>
  
    <Head>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.13.1/css/all.css"
        integrity="sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q"
        crossOrigin="anonymous"
      />
      <link
      href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap"
      rel="stylesheet"
    />
     <link href="https://allfont.ru/allfont.css?fonts=airport-cyr" rel="stylesheet" type="text/css" />
    </Head> 
    
  <Component {...pageProps} /> </>
}

export default MyApp
