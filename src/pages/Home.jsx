import React from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner_home';
import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';

export default function Home() {
    return (
    <div>
        <Header />
        <main>
          <Banner origin="Home" />
          <Card />
        </main>
        <Footer />
    </div>
    );
  }
