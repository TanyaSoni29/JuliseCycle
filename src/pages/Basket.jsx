/** @format */

import React from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import ProductImg from "../assets/Images/Featured Product Image/trek-wahoo-26_22549_tmbLong.jpg"

function Basket() {
	return (
		<div className=' mt-20'>
			<div className='border-t-[1px] border-black mt-10 w-[60%] mx-auto flex flex-row items-center justify-between p-4 font-medium'>
				<p>ITEMS</p>
				<div className='flex flex-row w-[40%] justify-start items-center gap-20'>
					<p>QUANTITY</p>
					<p>SUBTOTAL</p>
					<p></p>
				</div>
			</div>
			<div className='border-t-[1px] border-black mt-10 w-[60%] mx-auto flex flex-row items-center justify-between p-4 font-medium'>
				<div className='flex justify-start items-center gap-4'>
					<img src={ProductImg} loading='lazy' alt='productImg' height={150} width={150} className='object-cover'/>
					<p>Title</p>
				</div>
				<div className='flex flex-row justify-start items-center gap-20 w-[40%]'>
					<div className='flex flex-row justify-center items-center gap-4 border-[1px] border-gray-100 py-2 px-4'>
						<p>1</p>
						<MdArrowDropDown className='text-black' />
					</div>
                    <p>£2,350.00</p>
                    <p> × Remove</p>

				</div>
			</div>
		</div>
	);
}

export default Basket;
