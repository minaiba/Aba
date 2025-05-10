import React from 'react';
import logo from '../../assets/logoAiba.png';
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function Header({ activePath, setActivePath }) {
  const handleMenuClick = (path) => {
    setActivePath(path);
  };

  return (
    <div className='w-[1200px] py-3 m-auto flex flex-col'>
      <div className='flex items-center justify-between'>
        <nav className='flex text-blue-950 font-bold italic space-x-6'>
          <h1 onClick={() => handleMenuClick('menu')} className="cursor-pointer">Меню</h1>
          <h1 onClick={() => handleMenuClick("recipe")} className="cursor-pointer">Рецепты</h1>
          <h1 onClick={() => handleMenuClick("product")} className="cursor-pointer">Продукты</h1>
          <h1 onClick={() => handleMenuClick("purchase")} className="cursor-pointer">Покупки</h1>
        </nav>
        <img onClick={() => handleMenuClick('home')} src={logo} className='w-20 cursor-pointer' />
        <div className='flex items-center font-bold text-blue-950 italic space-x-4'>
          <input type="search" className='rounded-3xl border border-blue-200 px-3 py-1' placeholder="Поиск..." />
          <Link to='notice'><IoIosNotificationsOutline className='text-red-600 text-xl' /> </Link>
          <h1>Профиль</h1>
        </div>
      </div>
      <div className="mt-2 text-sm text-gray-600 italic">
      {activePath ? ` / ${activePath}` : ""}
      </div>
    </div>
  );
}

