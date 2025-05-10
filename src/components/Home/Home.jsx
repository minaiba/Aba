import React, { useState } from 'react'
import photo from '../../assets/броколи.png'
import photo2 from '../../assets/клубника.png'
import photo3 from '../../assets/лимон.png'
import { translations } from '../Notice/Translations';
import '../Notice/Translations'

export default function Home({lang}) {
    const t = translations[lang];
  return (
    <section className="bg-orange-50">
      <div className='w-[1200px] m-auto py-26 px-3 items-center'>
        <h1 className="text-4xl md:text-5xl font-bold text-orange-900">{t.todayLunch}</h1>
        <div className='relative'>  
          <img src={photo}  className='w-[130px] h-[130px] absolute ml-[98%]'/>      
          <img src={photo2} className='w-[70px] h-[70px] absolute mt-28 ml-26'/>      
          <img src={photo3} className='w-[120px] h-[120px] absolute ml-[70%] -top-38'/>      
        </div>
        <p className="text-2xl text-orange-800 mt-6">{t.addProduct}</p>
      </div>       
    </section>
  )
}
