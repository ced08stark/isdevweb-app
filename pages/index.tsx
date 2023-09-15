import Head from 'next/head'
import Image from 'next/image'
import  '../styles/Home.module.css'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Main from '../components/Main.jsx'


export default function Home() {

  return (
    
   <div>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet"/>
    </Head>
      <div style={{fontFamily: "DM Sans"}}>
        <Header />
        <Main />
        <Footer />
      </div>
      
   </div>
      
    
    
  )
}
