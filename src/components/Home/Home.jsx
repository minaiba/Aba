import React, { useState } from 'react'
import photo from '../../assets/броколи.png'
import photo4 from '../../assets/черника.png'
import photo2 from '../../assets/клубника.png'
import photo3 from '../../assets/лимон.png'
import { translations } from '../Notice/Translations';
import '../Notice/Translations'
// import video from  '../../assets/Clipchamp (1).mp4'

export default function Home({lang}) {
    const t = translations[lang];
  return (
    <section className="bg-orange-50">
              <div className="fixed bottom-2 right-4 w-[350px]">
                <div className="relative w-full flex justify-center items-end">
                  <img src={photo4} className="absolute -top-45 z-0 w-46 h-56 object-cover" />
                  <div className="relative z-10 bg-white border border-blue-800 rounded-[50px] pt-4 pb-3 w-full text-center">
                    <h4 className="text-blue-950 font-semibold text-sm">{t.question}</h4>
                    <p className="text-gray-500 text-xs mt-1">{t.chat}</p>
                  </div>
                </div>
              </div>
        {/* <video src={video}></video>       */}
      <div className='w-[1200px] m-auto py-36 px-3 items-center'>
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
