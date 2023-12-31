import React from 'react';
import {FlexContent, Hero, Sales, Stories, Footer} from './components';
import { heroapi, popularsales,toprateslaes,highlight, sneaker, story, footerAPI } from './data/data.js';
import {Navbar, Cart} from './components';

const App = () => {
  return (
    <>
    <Navbar />
    <Cart />
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story}/>
      </main>
      <Footer footerAPI={footerAPI}/>
    </>
  );
}

export default App