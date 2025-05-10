import React from 'react'
import photo from '../../assets/броколи.png'
import photo2 from '../../assets/клубника.png'
import photo3 from '../../assets/лимон.png'

export default function Home() {
  return (
    <section className="bg-orange-50">
      <div className='w-[1200px] m-auto py-16 px-4 items-center'>
        <h1 className="text-4xl md:text-5xl font-bold text-orange-900">
          Не знаешь, что приготовить?
        </h1>
        <div className='relative'>  
          <img src={photo}  className='w-[130px] h-[130px] absolute ml-[98%]'/>      
          <img src={photo2} className='w-[60px] h-[60px] absolute mt-18 ml-26'/>      
          <img src={photo3} className='w-[120px] h-[120px] absolute ml-[70%] bottom-[2%]'/>      
        </div>
        <p className="text-2xl text-orange-800 mt-6">
          Введи, что у тебя есть в холодильнике — и получи готовое меню на неделю:
          завтрак, обед, полдник и ужин!
        </p>
      </div>       
    </section>
  )
}
