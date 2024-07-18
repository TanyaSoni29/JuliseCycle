/** @format */

import React from 'react';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { remove } from '../../../redux/Slices/CartSlice';

function CartItems({ item, itemIndex }) {
	const dispatch = useDispatch();

	const removeFromCart = () => {
		// console.log('Removing item with id:', item.sku);
		dispatch(remove(item.sku));
		console.log('Item Removed Successfully');
	};
	return (
		<div className='border-b-2 border-x-slate-400 w-full'>
			<div className='flex justify-center gap-x-10 items-center mb-8'>
				<div className=''>
					<img
						className='h-[200px] w-[200px] mt-2 object-contain'
						src={item.images}
					/>
				</div>
				<div className='w-full'>
					<h1 className='font-bold text-slate-800'>{item.product_title
                    }</h1>
					<h1 className='font-semibold text-slate-500'>
						{item?.short_desc?.split(" ").slice(0, 15).join(" ") + "..."}
					</h1>
					<div className='flex items-center justify-between'>
						<p className='text-green-800 font-bold'>${item.price}</p>
						<div
							onClick={removeFromCart}
							className='bg-red-200 rounded-full text-center p-4'
						>
							<MdDelete className='text-red-600 text-1xl' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartItems;
