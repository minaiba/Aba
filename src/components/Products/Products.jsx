import React, { useState } from 'react'

export default function Products() {
  const [products, setProducts] = useState(['']);

  const handleChange = (index, value) => {
    const updated = [...products];
    updated[index] = value;
    setProducts(updated);
  };

  const addProductInput = () => {
    setProducts([...products, '']);
  };
  return (
    <div className='bg-blue-950'>
   <div className='w-[1200px] text-white m-auto'>
      <h1 className='text-4xl text-center font-bold italic mb-8'>Мои продукты</h1>
      
      <div className="flex flex-col gap-4 items-center">
        {products.map((product, index) => (
          <input
            key={index}
            type="text"
            value={product}
            onChange={(e) => handleChange(index, e.target.value)}
            placeholder={`Продукт ${index + 1}`}
            className="w-[300px] px-4 py-2 rounded-3xl"
          />
        ))}

        <button
          onClick={addProductInput}
          className="text-2xl text-black bg-white w-10 h-10 rounded-full flex items-center justify-center shadow"
        >
          +
        </button>
      </div>
    </div>
    </div>
  )
}
