import React from 'react'
import Header from '../components/Header'
import Landing from '../components/Landing'
import HomeCom from '../components/communities.js/HomeCom';
import ModifiedCom from '../components/ModifiedCom';
import Benifits from '../components/Benifits';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
    <Header />
    <Landing />
    <ModifiedCom />
    <Benifits />
    <ContactUs/>
    <Footer />
    </>
  )
}

export default Home;