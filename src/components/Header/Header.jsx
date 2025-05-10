import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosNotificationsOutline } from "react-icons/io";
import logo from '../../assets/logoAiba.png';
import { translations } from '../Notice/Translations';
import { RxAvatar } from "react-icons/rx";

export default function Header({lang, setLang }) {
  const t = translations[lang];

  return (
    <div className='w-[1200px] py-3 m-auto flex flex-col'>
      <div className='flex items-center justify-between'>
        <nav className='flex text-blue-950 font-bold italic space-x-10'>
          <h1 onClick={() => handleMenuClick('menu')} className="cursor-pointer">{t.menuTitle}</h1>
          <h1 onClick={() => handleMenuClick("recipe")} className="cursor-pointer">{t.recipes}</h1>
          <h1 onClick={() => handleMenuClick("product")} className="cursor-pointer">{t.myProducts}</h1>
          <h1 onClick={() => handleMenuClick("purchase")} className="cursor-pointer">{t.shoppingList}</h1>
        </nav>
        <img onClick={() => handleMenuClick('home')} src={logo} className='w-20 cursor-pointer' />
        <div className='flex items-center font-bold text-blue-950 italic space-x-4'>
          <input type="search" className='rounded-3xl border border-blue-200 px-2 py-1' placeholder="Поиск..." />
          <select
            onChange={(e) => setLang(e.target.value)}
            value={lang}
            className="bg-white text-blue-950 rounded px-2 py-1"
          >
            <option value="ru">русский</option>
            <option value="kg">кыргызча</option>
            <option value="kz">казахский</option>
            <option value="eng">английский</option>
          </select>
          <Link to='notice'><IoIosNotificationsOutline className='text-red-600 text-2xl' /></Link>   
          <RxAvatar className='text-4xl'/>       
        </div>
      </div>
    </div>
  );
}
