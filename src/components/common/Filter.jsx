import React, { useState } from 'react';

const Filter = ({ subCategories, onFilterChange, category }) => {
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleSubCategoryChange = (subCategory) => {
    setSelectedSubCategory(subCategory);
    onFilterChange({ subCategory, priceRange });
  };

  const handlePriceChange = (range) => {
    setPriceRange(range);
    onFilterChange({ subCategory: selectedSubCategory, priceRange: range });
  };

  return (
    <div className='w-[20%] flex flex-col justify-start gap-2'>
      <p className='flex justify-between items-center gap-4 text-2xl font-semibold'>
        Our {category.charAt(0).toUpperCase() + category.slice(1)} <span className='text-center'>-</span>
      </p>
      {subCategories.map((subCategory) => (
        <div key={subCategory} onClick={() => handleSubCategoryChange(subCategory)}>
          {subCategory}
        </div>
      ))}
      <div className='border-t-[1px] border-black mt-4 border-opacity-25'></div>
      <div>
        <p className='font-semibold text-2xl'>Price Range</p>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[0]}
          onChange={(e) => handlePriceChange([Number(e.target.value), priceRange[1]])}
        />
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[1]}
          onChange={(e) => handlePriceChange([priceRange[0], Number(e.target.value)])}
        />
        <div>Range: {priceRange[0]} - {priceRange[1]}</div>
      </div>
    </div>
  );
};

export default Filter;

