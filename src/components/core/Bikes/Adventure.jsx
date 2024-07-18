import React from 'react';
import EmailConnect from '../../common/EmailConnect';
import Footer from '../../common/Footer';
import { Link } from 'react-router-dom';
import { NavbarData } from '../../../data/NavbarData';
import FilterheadImg from "../../../assets/Images/bikes1692012374.jpg"
import ShopCards from '../../common/ShopCards';

function Adventure() {
  return (
    <div className='mt-20'>
    <div className='w-full flex flex-col justify-center items-center'>
        {/* section-1 button and heading */}
        <div className='mt-10 w-[70%] flex justify-between items-center gap-10'>
            <p className='font-semibold text-2xl'>BIKES</p>
            <Link to='/'>
                <button className='text-blue-600'>HOME</button>
            </Link>
            <div className='w-full text-center border-blue-800 border-[1px] border-dashed shadow-sm'></div>
            <Link to='#'>
                <button className='text-blue-600'>BIKES</button>
            </Link>
        </div>
        {/*filter component */}
        <div className='flex gap-10 w-[70%] h-full mt-8'>
            <div className='w-[20%] flex flex-col justify-start gap-2'>
                <p className='flex justify-between items-center gap-4 text-2xl font-semibold'>
                    Our Bikes <span className='text-center'>-</span>
                </p>
                {NavbarData.filter((category) => category.title === "Bikes")[0].links.map(subCategory => (
                   <Link to ={`/shop/bikes/sub/${subCategory.title.split(" ").join("-").toLowerCase()}`} > <div>{subCategory.title}</div></Link>
                ))}
                <div className='border-t-[1px] border-black mt-4 border-opacity-25'>
                  
                </div>
                <div>
                    <p className='font-semibold text-2xl'>Price Range</p>
                   
                </div>


                
            </div>
            <div className='w-[80%]'>
                <div className='relative'>
                  <div className='w-full h-[10%]'>
                  <img src={FilterheadImg} className='object-contain'/>
                  </div>
                    <h1 className='absolute left-[20%] top-[40%] text-6xl text-white'>ADVENTURE & GRAVEL</h1>
                </div>
                <div>
                   <ShopCards/>
                </div>
            </div>
        </div>
        {/* Mail Box */}
        <div className='flex w-full flex-col justify-center items-center'>
            <EmailConnect />
        </div>
        {/* footer */}
        <div className='w-screen bg-gradient-to-r from-violet-600 to-indigo-600 mt-20'>
            <Footer />
        </div>
    </div>
</div>
  )
}

export default Adventure