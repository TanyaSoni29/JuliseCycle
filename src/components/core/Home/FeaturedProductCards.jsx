/** @format */

import React from 'react';
import FeatureImg from '../../../assets/Images/Featured Product Image/trek-wahoo-26_22549_tmbLong.jpg';
import { GoStarFill } from 'react-icons/go';
import { Link } from 'react-router-dom';
import CTAButton from './Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import {} from 'swiper/modules';
import '../../../App.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

function FeaturedProductCards() {
	const Products = [
		{
			image: `${FeatureImg}`,
			title: 'AVANT H50',
			description: 'Orbea',
			colors: 'only color',
			rating: '5.0',
		},
		{
			image: `${FeatureImg}`,
			title: 'AVANT H50',
			description: 'Orbea',
			colors: 'only color',
			rating: '5.0',
		},
		{
			image: `${FeatureImg}`,
			title: 'AVANT H50',
			description: 'Orbea',
			colors: 'only color',
			rating: '5.0',
		},
		{
			image: `${FeatureImg}`,
			title: 'AVANT H50',
			description: 'Orbea',
			colors: 'only color',
			rating: '5.0',
		},
		{
			image: `${FeatureImg}`,
			title: 'AVANT H50',
			description: 'Orbea',
			colors: 'only color',
			rating: '5.0',
		},
	];

	// const pagination = {
	// 	clickable: true,
	// 	renderBullet: function (index, className) {
	// 		return '<span class="' + className + '"></span>';
	// 	  },
	// }

	return (
		<div>
			<div className='flex flex-row md:flex-wrap justify-center items-center w-[80%] gap-2 mx-auto rounded-lg overflow-hidden mt-10'>
				<Swiper
					slidesPerView={1}
					spaceBetween={10}
					loop={true}
					freeMode={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					modules={[FreeMode, Pagination, Autoplay]}
					// pagination={pagination}
					className='w-full'
					breakpoints={{
						320: {
							slidesPerView: 1,
							spaceBetween: 10,
						},
						480: {
							slidesPerView: 1,
							spaceBetween: 10,
						},
						540: {
							slidesPerView: 1,
							spaceBetween: 10,
						},
						640: {
							slidesPerView: 2,
							spaceBetween: 15,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
						1280: {
							slidesPerView: 4,
							spaceBetween: 40,
						},
						1458: {
							slidesPerView: 4,
							spaceBetween: 40,
						},
					}}
				>
					{Products.map((product, i) => (
						<SwiperSlide
							key={i}
							className='p-2'
						>
							<div className='flex flex-col max-w-lg rounded-md bg-white gap-2 justify-center items-center p-2'>
								{/* <Link to='#'>
									<img
										className='rounded-t-lg'
										src={product.image}
										alt='product image'
									/>
								</Link>
								<div className='flex flex-col justify-between items-center px-2 pb-4 w-full'>
									<div className='text-center'>
										<h5 className='text-xl font-semibold text-black'>
											{product.title}
										</h5>
										<p>{product.description}</p>
										<p>{product.colors}</p>
									</div>
									<div className='flex flex-col justify-center items-center gap-2'>
										<div className='flex justify-center items-center'>
											<GoStarFill color='#F7F700' fontSize={22} />
											<GoStarFill color='#F7F700' fontSize={22} />
											<GoStarFill color='#F7F700' fontSize={22} />
											<GoStarFill color='#F7F700' fontSize={22} />
											<GoStarFill color='#F7F700' fontSize={22} />
										</div>
										<p className='text-black text-xl font-medium'>
											{product.rating}
										</p>
									</div>
								</div> */}
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
											<div className='text-gray-400 text-[0.8rem]'>{product.description}</div>
										</div>
										<div>⭐⭐⭐⭐⭐</div>
									</div>

									<div className='flex flex-row flex-wrap gap-2'>
										<div className='line-through'>3000</div>
										<div>2000</div>
										<div>10%</div>
									</div>
									<div className='flex w-full items-center justify-end gap-2 mx-auto'>
									<div className="bg-pink-400 w-4 h-4 rounded-full"></div>
									<div className="bg-pink-400 w-4 h-4 rounded-full"></div>
									<button className='text-black bg-gray-300 py-1 px-4 font-medium rounded-md'>Buy Now</button>
									<button className='border border-gray-300 font-medium rounded-md py-1 px-2'>Add to Cart</button>
								</div>
								</div>
								
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default FeaturedProductCards;
