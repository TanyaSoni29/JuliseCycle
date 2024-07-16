/** @format */

import React, { useEffect, useState } from 'react';
// import { MdArrowDropDown } from 'react-icons/md';
// import ProductImg from "../assets/Images/Featured Product Image/trek-wahoo-26_22549_tmbLong.jpg"
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartItems from '../components/core/Home/CartItems';

function Basket() {
	const cart = useSelector((state) => state.cart);
	const [totalAmount, setTotalAmount] = useState(0);

	useEffect(() => {
		setTotalAmount(cart.reduce((acc, crr) => acc + Number(crr.price), 0));
	}, [cart]);

	return (
		<div className='mt-20 h-screen'>
			{cart.length > 0 ? (
				<div className='flex gap-x-20 h-[80vh] mt-10 max-w-6xl mx-auto'>
					<div className='w-full h-full ml-5'>
						{cart.map((item, index) => (
							<CartItems
								key={item.id}
								item={item}
								itemIndex={index}
							/>
						))}
					</div>
					<div className='flex flex-col w-full h-full justify-between'>
						<div className='h-full w-full'>
							<div className='text-green-700 font-bold uppercase text-1xl'>
								Your Cart
							</div>
							<div className='text-green-800 -mt-[8px] font-bold uppercase text-[40px]'>
								Summary
							</div>
							<p className='font-bold mt-20'>
								<span>Total Items: {cart.length}</span>
							</p>
						</div>

						<div className=''>
							<p className='font-bold mb-4'>
								<span className='font-bold text-slate-600'>Total Amount: </span>
								${totalAmount}
							</p>
							<button className='bg-gradient-to-r from-violet-600 to-indigo-600 w-full text-white font-bold rounded-lg p-5 px-10'>
								Checkout Now
							</button>
						</div>
					</div>
				</div>
			) : (
				<div className='flex flex-col justify-center items-center h-[80vh] gap-4'>
					<h2 className='font-bold text-2xl'>Your Cart is Empty</h2>
					<NavLink to='/'>
						<button className='bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full p-4 px-6  text-lg font-bold hover:bg-violet-700 transition duration-200 ease-in text-white'>
							Shop Now
						</button>
					</NavLink>
				</div>
			)}
		</div>
	);
}

export default Basket;

// consumer key = ck_2fb948a3089654e0b2d99ce186bfa40348ee96a2
// consumer secret = cs_d9a8154709bb0612409365e37b1c8356657b555c
