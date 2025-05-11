import React, { useState } from 'react';
import { translations } from '../Notice/Translations';

export default function Recipe({lang}) {
  const t = translations[lang];

  return (
    <div className="w-[1200px] m-auto text-blue-950 pb-10">
      <h1 className="text-4xl font-bold italic mb-6 text-center text-white">{t.recipes}</h1>
      <div className="flex space-x-10">
        <div>
          <h2 className="font-semibold mb-2 text-white">{t.kitchen}</h2>
          <select className="rounded px-3 py-2 bg-white shadow border border-gray-300">
            <option value="italian">{t.italian}</option>
            <option value="asian">{t.asian}</option>
            <option value="home">{t.home}</option>
            <option value="slavic">{t.slavic}</option>
            <option value="korean">{t.korean}</option>
            <option value="chinese">{t.chinese}</option>
            <option value="japanese">{t.japanese}</option>
          </select>
        </div>
        <div>
          <h2 className="font-semibold mb-2 text-white">{t.dishes}</h2>
          <select className="rounded px-3 py-2 bg-white shadow border border-gray-300">
            <option value="soups">{t.soups}</option>
            <option value="salads">{t.salads}</option>
            <option value="main">{t.mainDishes}</option>
            <option value="dessert">{t.desserts}</option>
          </select>
        </div>
        <div>
          <h2 className="font-semibold mb-2 text-white">{t.ingredients}</h2>
          <select className="rounded px-3 py-2 bg-white shadow border border-gray-300">
            <option value="chicken">{t.chicken}</option>
            <option value="rice">{t.rice}</option>
            <option value="vegetables">{t.vegetables}</option>
            <option value="pasta">{t.pasta}</option>
          </select>
        </div>
      </div>
    </div>
  );
}

