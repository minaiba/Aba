import React, { useState } from 'react'
import logo from '../../assets/logoAiba.png';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { translations } from '../Notice/Translations';

export default function Footer({lang}) { 
      const t = translations[lang];
  return (
  <div className="font-serif w-full shadow-md bg-white text-blue-950 text-[19px]">
      <div className="max-w-[1200px] mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
        <div>
          <Link to="/main">
            <img src={logo} alt="Aiba logo" className="w-[100px] h-auto mb-4" />
          </Link>
          <p className="max-w-[300px]">{t.title}</p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <ul className="space-y-3">
            <li><Link to="/home" className="hover:underline hover:text-blue-700">{t.main}</Link></li>
            <li><Link to="/conditions" className="hover:underline hover:text-blue-700">{t.our}</Link></li>
            <li><Link to="/connection" className="hover:underline hover:text-blue-700">{t.confidentiality}</Link></li>
          </ul>
          <ul className="space-y-3 ml-18">
            <li><Link to="/reviews" className="hover:underline hover:text-blue-700">{t.user}</Link></li>
            <li><Link to="/contacts" className="hover:underline hover:text-blue-700">{t.contacts}</Link></li>
            <li><Link to="/feedback" className="hover:underline hover:text-blue-700">{t.reviews}</Link></li>
          </ul>
        </div>
        <div className='ml-28'>
          <h4 className="mb-4 font-semibold">{t.connect}</h4>
          <div className="space-y-4">
            <div className="flex gap-3">
              <FaPhoneAlt className="mt-5" />
              <div className="flex flex-col">
                <a href="tel:+996509340665" className="hover:text-blue-700">+996 509 340 665</a>
                <a href="tel:+996707183611" className="hover:text-blue-700">+996 707 183 611</a>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <FaEnvelope />
              <a href="" className="hover:text-blue-700">aiba@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 text-center py-4 text-sm"> © {new Date().getFullYear()} Aiba. {t.law} </div>
    </div>
  )
}
