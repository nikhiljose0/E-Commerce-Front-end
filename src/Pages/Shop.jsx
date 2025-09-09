import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollection from '../Components/NewCollections/NewCollection'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

// export default Shop
export default function Shop() {
  return (
    <div style={{ minHeight: "100%", height: "auto", overflowY: "auto" }}>
        <Hero />
        <Popular />
        <Offers />
        <NewCollection />
        <NewsLetter />
    </div>
    
  );
}
