import React from 'react';

export default function User({ isOpen, closeModal }) {
  return (
<div>
  {isOpen && (
    <div className="fixed inset-0 backdrop-blur-md bg-blue/5 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-3xl shadow-md scale-[1.02]">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4">Заголовок модального окна</h2>
        <p>Это текст внутри модального окна.</p>
      </div>
    </div>
  )}
</div>

  );
}
