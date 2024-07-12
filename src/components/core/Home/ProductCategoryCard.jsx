/** @format */
import React from 'react'

function ProductCategoryCard({image, text, subText}) {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={image} alt="Open Source Projects" />
        <div className="absolute bottom-0 left-0 right-0 flex flex-col bg-black bg-opacity-50 px-4 py-2">
          <h2 className="text-white text-xl font-bold">{text}</h2>
          <p className='text-white text-[15px] font-semibold'>{subText}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCategoryCard
