import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import EmailConnect from '../components/common/EmailConnect';
import Footer from '../components/common/Footer';
import Filter from '../components/common/Filter';
import ShopCards from '../components/common/ShopCards';
import FilterheadImg from "../assets/Images/bikes1692012374.jpg";
import { NavbarData } from '../data/NavbarData';

const ShopPage = () => {
    const { category, subCategory } = useParams();
    const [filters, setFilters] = useState({ category: category || '', subCategory: subCategory || '', priceRange: [0, 1000] });
    const [subCategories, setSubCategories] = useState([]);

    useEffect(() => {
        // Fetch subcategories based on the main category
        const categoryData = NavbarData.find(cat => cat.title.toLowerCase() === category.toLowerCase());
        if (categoryData) {
            setSubCategories(categoryData.links.map(link => link.title));
        }
    }, [category]);

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    return (
        <div className='mt-20'>
            <div className='w-full flex flex-col justify-center items-center'>
                {/* Section-1 button and heading */}
                <div className='mt-10 w-[70%] flex justify-between items-center gap-10'>
                    <p className='font-semibold text-2xl'>{category.toUpperCase()}</p>
                    <Link to='/'>
                        <button className='text-blue-600'>HOME</button>
                    </Link>
                    <div className='w-full text-center border-blue-800 border-[1px] border-dashed shadow-sm'></div>
                    <Link to='#'>
                        <button className='text-blue-600'>{category.toUpperCase()}</button>
                    </Link>
                </div>
                {/* Filter component */}
                <div className='flex gap-10 w-[70%] h-full mt-8'>
                    <Filter category={category}
                        subCategories={subCategories}
                        onFilterChange={handleFilterChange}
                    />
                    <div className='w-[80%]'>
                        <div className='relative'>
                            <div className='w-full h-[10%]'>
                                <img src={FilterheadImg} className='object-contain' />
                            </div>
                            <h1 className='absolute left-[35%] top-[40%] text-8xl text-white'>{category.toUpperCase()}</h1>
                        </div>
                        <div>
                            <ShopCards filters={filters} />
                        </div>
                    </div>
                </div>
                {/* Mail Box */}
                <div className='flex w-full flex-col justify-center items-center'>
                    <EmailConnect />
                </div>
                {/* Footer */}
                <div className='w-screen bg-gradient-to-r from-violet-600 to-indigo-600 mt-20'>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default ShopPage;
