import React, { useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Home from '../components/Home/Home';
import Menu from '../components/Menu/Menu';
import Purchase from '../components/Purchase/Purchase';
import Products from '../components/Products/Products';
import Recipe from '../components/Recipe/Recipe';
import { Outlet } from 'react-router-dom';
import { translations } from '../components/Notice/Translations';


export default function Layout() {
  const [activePath, setActivePath] = useState(null);
  const [lang, setLang] = useState('ru');
  return (
    <div>
      <Header lang={lang} setLang={setLang}/>
      <div className="m-auto bg-blue-900">
     
         <Home lang={lang}/>
        <Outlet/>            
        {/* <Menu lang={lang}/>
        <Products lang={lang}/>
        <Recipe lang={lang}/>
        <Purchase lang={lang}/>  */}
      </div>
      <Footer lang={lang}/>
    </div>
  );
}
