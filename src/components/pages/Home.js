import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import Featured from '../Featured';
import BST from '../BST';

function Home() {
    return(
        <>
          <HeroSection />
          <Cards />
          <Featured />
          <BST />
          <Footer />
        </>
    )
}

export default Home;