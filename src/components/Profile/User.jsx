import React from 'react';
import { RxAvatar } from 'react-icons/rx';

export default function User({ isOpen, closeModal }) {
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-md bg-blue/5 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-3xl shadow-md scale-[1.02]">
            <button
              onClick={closeModal}
              className="absolute text-4xl top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <div className="p-6 space-y-6">
              <div className="flex items-center gap-4">
                <RxAvatar className="text-4xl" />
                <div>
                  <h2 className="text-2xl font-semibold mb-1">Aiba</h2>
                  <p className="text-gray-600">aiba@gmail.com</p>
                </div>
              </div>

              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                редактировать профиль
              </button>

              <div className="flex justify-between gap-8">
                <div>
                  <h1 className="text-xl font-bold mb-2">Настройки</h1>
                  <ul className="space-y-1 text-gray-700">
                    <li>пароль</li>
                    <li>язык интерфейса</li>
                    <li>уведомление</li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-xl font-bold mb-2">Мои предпочтения</h1>
                  <ul className="space-y-1 text-gray-700">
                    <li>диета</li>
                    <li>аллергия</li>
                    <li>неподходящие продукты</li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-between gap-8">
                <div>
                  <h1 className="text-xl font-bold mb-2">История</h1>
                  <ul className="space-y-1 text-gray-700">
                    <li>История меню</li>
                    <li>История покупок</li>
                    <li>скачанные рецепты</li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-xl font-bold mb-2">Избранное</h1>
                  <ul className="space-y-1 text-gray-700">
                    <li>скачанные рецепты</li>
                    <li>любимые рецепты</li>
                    <li>избранные блюда</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

  );
}
