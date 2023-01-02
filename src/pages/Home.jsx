import React from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';

export default function Home() {
    return (
    <div>
        <Header />
        <main>
          <Banner img="/assets/BANNER_HOME.png" text="Chez vous, partout et ailleurs" />
          <Card />
        </main>
        <Footer />
    </div>
    );
  }
