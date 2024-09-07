import React from 'react'
import Header from '../components/Header'
import Landing from '../components/Landing'
import HomeCom from '../components/communities.js/HomeCom';
import ModifiedCom from '../components/ModifiedCom';
import Benifits from '../components/Benifits';

function Home() {
  return (
    <>
    <Header />
    <Landing />
    <ModifiedCom />
    <Benifits />
    </>
  )
}

export default Home;