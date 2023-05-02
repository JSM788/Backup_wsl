import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards';
import DiscountHeader from '../components/DiscountHeader';
import FIltroSuperior from '../components/FIltroSuperior';
import Footer from '../components/Footer';
import Header from '../components/Header'
import Hero from '../components/Hero';

export default function Home() {
  const [token, setToken] = useState(false);
  let tokens = localStorage.getItem('token');
useEffect(()=> {
  if(tokens){
    setToken(true);
    return
  }
},[tokens])


  return (
    <>
    <section className=''>
      <DiscountHeader/>
      <Header setToken={setToken}/>
      <Hero/>
      <FIltroSuperior/>
      <Cards/>
    </section>
    <Footer/> 
    </>
  )
}
