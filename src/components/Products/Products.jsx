import React, { useState } from 'react'
import { translations } from '../Notice/Translations';

export default function Products({lang}) {
  const [products, setProducts] = useState(['']);
  const t = translations[lang];

  const handleChange = (index, value) => {
    const updated = [...products];
    updated[index] = value;
    setProducts(updated);
  };

  const addProductInput = () => {
    setProducts([...products, '']);
  };
  return (
<div className="bg-gradient-to-br bg-blue-900 min-h-screen pt-16 px-4 text-white font-sans">
  <div className="max-w-screen-xl mx-auto">
    <h1 className="text-4xl font-extrabold italic text-center mb-12 drop-shadow-lg tracking-wide">{t.myProducts}</h1>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold underline decoration-white decoration-wavy mb-4">{t.categories}</h2>
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-md hover:scale-[1.02] transition">
          <h3 className="text-2xl font-semibold mb-2">🥶 {t.inFridge}</h3>
          <p className="text-lg text-blue-100">{t.inFridgeItems}</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-md hover:scale-[1.02] transition">
          <h3 className="text-2xl font-semibold mb-2">❄️ {t.inFreezer}</h3>
          <p className="text-lg text-blue-100">{t.inFreezerItems}</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-md hover:scale-[1.02] transition">
          <h3 className="text-2xl font-semibold mb-2">📦 {t.inPantry}</h3>
          <p className="text-lg text-blue-100">{t.inPantryItems}</p>
        </div>

      </div>
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-lg flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6">{t.addYourProducts}</h2>

        <div className="flex flex-col gap-4 w-full items-center">
          {products.map((product, index) => (
            <input
              key={index}
              type="text"
              value={product}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder={`${t.myProducts} ${index + 1}`}
              className="w-[90%] max-w-[400px] px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          ))}
        <button
          onClick={addProductInput}
          className="mt-8 bg-white text-blue-950 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-100 transition-all duration-300"
        >{t.addProductBtn}</button>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
