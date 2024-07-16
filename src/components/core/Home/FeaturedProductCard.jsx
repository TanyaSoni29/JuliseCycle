/** @format */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../../redux/Slices/CartSlice';

function FeaturedProductCard({ product }) {
	const { cart } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const addtoCart = () => {
		dispatch(add(product));
		console.log('Product Added to Cart Successfully');
	};

	return (
		<div className='w-[300px] flex flex-col p-4 gap-4 border rounded-md shadow-lg hover:shadow-[255_255_255_255] '>
			<div className='flex flex-col justify-center items-center'>
				<img
					src={product.image}
					className=''
				/>
			</div>
			<div className='flex justify-between items-center gap-2'>
				<div>
					<div className='text-gray-500 hover:text-blue-600 line-clamp-1'>
						{product.title}
					</div>
					<div className='text-gray-400 text-[0.8rem]'>
						{product.description.split(' ').slice(0, 12).join(' ') + '...'}
					</div>
				</div>
				<div>⭐⭐⭐⭐⭐</div>
			</div>

			<div className='flex flex-row flex-wrap gap-2'>
				<div className='line-through'>3000</div>
				<div>2000</div>
				<div>10%</div>
			</div>
			<div className='flex w-full items-center justify-end gap-2 mx-auto'>
				<div className='bg-pink-400 w-4 h-4 rounded-full'></div>
				<div className='bg-pink-400 w-4 h-4 rounded-full'></div>
				<button className='text-black bg-gray-300 py-1 px-4 font-medium rounded-md'>
					Buy Now
				</button>

				{cart.some((p) => p.id === product.id) ? (
					''
				) : (
					<button
						className='border border-gray-300 font-medium rounded-md py-1 px-2'
						onClick={addtoCart}
					>
						Add to Cart
					</button>
				)}
			</div>
		</div>
	);
}

export default FeaturedProductCard;
