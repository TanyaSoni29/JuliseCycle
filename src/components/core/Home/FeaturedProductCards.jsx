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
			rating: "5.0",
		},
		{
			image: `${FeatureImg}`,
			title: 'AVANT H50',
			description: 'Orbea',
			colors: 'only color',
			rating: "5.0",
		},
		{
			image: `${FeatureImg}`,
			title: 'AVANT H50',
			description: 'Orbea',
			colors: 'only color',
			rating: "5.0",
		},
		{
			image: `${FeatureImg}`,
			title: 'AVANT H50',
			description: 'Orbea',
			colors: 'only color',
			rating: "5.0",
		},
		{
			image: `${FeatureImg}`,
			title: 'AVANT H50',
			description: 'Orbea',
			colors: 'only color',
			rating: "5.0",
		},
	];
	return (
		<div>
			<div class='flex flex-row justify-center items-center w-[80%] gap-2 mx-auto rounded-lg overflow-hidden mt-10'>
				<Swiper
					slidesPerView={4}
					spaceBetween={16}
					loop={true}
					freeMode={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					modules={[FreeMode, Pagination, Autoplay]}
					className='w-full'
				>
					{Products.map((product, i) => 
						(
						<SwiperSlide key={i} className='p-2'>
							<div className='flex flex-row max-w-lg rounded-md bg-white flex-wrap gap-4 justify-center items-center border-black'>
							<div className='border border-black rounded-md'>
							<Link to='#'>
								<img
									className='p-8 rounded-t-lg'
									src={product.image}
									alt='product image'
								/>
							</Link>
							<div class='flex flex-row justify-between items-center px-2 pb-4'>
								<div>
									<h5 class='text-xl font-semibold text-black'>
										{product.title}
									</h5>
									<p>{product.description}</p>
									<p>{product.colors}</p>
								</div>
								<div className='flex justify-between items-center gap-2'>
									<div className='flex flex-row justify-center items-center'>
										<GoStarFill color='#F7F700' fontSize={22} />
										<GoStarFill color='#F7F700' fontSize={22}/>
										<GoStarFill color='#F7F700' fontSize={22}/>
										<GoStarFill color='#F7F700' fontSize={22}/>
										<GoStarFill color='#F7F700' fontSize={22}/>
									</div>
									<p className='text-black text-xl font-medium'>
										{product.rating}
									</p>
								</div>
							</div>
							<div className='flex items-center justify-center gap-2 mt-2 mx-auto mb-6'>
								<CTAButton
									active={true}
									linkto={'/signup'}
								>
									Add To Cart
								</CTAButton>
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
