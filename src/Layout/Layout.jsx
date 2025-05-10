import React, { useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Home from '../components/Home/Home';
import Menu from '../components/Menu/Menu';
import Purchase from '../components/Purchase/Purchase';
import Products from '../components/Products/Products';
import Recipe from '../components/Recipe/Recipe';
import photo from '../assets/черника.png'
import { Outlet } from 'react-router-dom';


export default function Layout() {
  const [activePath, setActivePath] = useState(null);
    const [lang, setLang] = useState('ru');

  return (
    <div>
      <Header lang={lang} setLang={setLang}/>
      <div className="m-auto bg-blue-950">
        <div className="fixed bottom-2 right-4 w-[350px]">
          <div className="relative w-full flex justify-center items-end">
            <img src={photo} className="absolute -top-45 z-0 w-46 h-56 object-cover" />
            <div className="relative z-10 bg-white border border-blue-800 rounded-[50px] pt-4 pb-3 w-full text-center">
              <h4 className="text-blue-950 font-semibold text-sm">
                Есть вопросы? Обращайтесь к нам!
              </h4>
              <p className="text-gray-500 text-xs mt-1">
                Мы всегда на связи — напишите в чат поддержки.
              </p>
            </div>
          </div>
        </div>
        <Home lang={lang}/>
        <Menu lang={lang}/>
        <Products lang={lang}/>
        <Recipe lang={lang}/>
        <Purchase lang={lang}/>
        {/* <Outlet/> */}
      </div>
      <Footer />
    </div>
  );
}
