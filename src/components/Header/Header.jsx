import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosNotificationsOutline } from "react-icons/io";
import logo from '../../assets/logoAiba.png';
import { translations } from '../Notice/Translations';
import { RxAvatar } from "react-icons/rx";
import User from '../Profile/User';

export default function Header({ lang, setLang }) {
  const t = translations[lang];
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openModal = () => setIsOpen(true);  
  const closeModal = () => setIsOpen(false);


  return (
    <div>
      <div className={`fixed top-0 left-0 right-0 z-10 shadow-md ${scrolled ? 'bg-white' : 'text-black'}`}>
        <div className="max-w-screen-xl w-full mx-auto py-3 px-4 flex flex-col">
          <div className="flex items-center justify-between">
            <nav className="flex text-blue-950 font-bold italic space-x-10">
              <button onClick={() => handleMenuClick('menu')} className="cursor-pointer">{t.menuTitle}</button>
              <button onClick={() => handleMenuClick("recipe")} className="cursor-pointer">{t.recipes}</button>
              <button onClick={() => handleMenuClick("product")} className="cursor-pointer">{t.myProducts}</button>
              <button onClick={() => handleMenuClick("purchase")} className="cursor-pointer">{t.shoppingList}</button>
            </nav>
            <img onClick={() => handleMenuClick('home')} src={logo} className="w-20 cursor-pointer" />
            <div className="flex items-center font-bold text-blue-950 italic space-x-4">
              <input
                type="search"
                className="rounded-3xl border border-blue-200 px-2 py-1"
                placeholder={t.input}
              />
              <select
                onChange={(e) => setLang(e.target.value)}
                value={lang}
                className="text-blue-950 rounded px-2 py-1 outline-none focus:ring-0 focus:border-none"
              >
                <option className="bg-blue-950 text-white italic" value="ru">русский</option>
                <option className="bg-blue-950 text-white italic" value="kg">кыргызча</option>
                <option className="bg-blue-950 text-white italic" value="kz">казахский</option>
                <option className="bg-blue-950 text-white italic" value="eng">английский</option>
                <option className="bg-blue-950 text-white italic" value="uzb">узбекский</option>
                <option className="bg-blue-950 text-white italic" value="arab">арабский</option>
              </select>

              <Link to="notice">
                <IoIosNotificationsOutline className="text-red-600 text-2xl" />
              </Link>
              <Link to='user' onClick={openModal}>
                <RxAvatar className="text-4xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <User isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}

