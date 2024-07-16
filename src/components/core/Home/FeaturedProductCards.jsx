/** @format */

import React, { useEffect, useState } from 'react';
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

import FeaturedProductCard from './FeaturedProductCard';
import Spinner from '../../common/Spinner';

const Products = [
	{
		id: 1,
		image: `${FeatureImg}`,
		title: 'AVANT H50',
		description: 'Orbea',
		colors: 'only color',
		rating: '5.0',
	},
	{
		id: 2,
		image: `${FeatureImg}`,
		title: 'AVANT H50',
		description: 'Orbea',
		colors: 'only color',
		rating: '5.0',
	},
	{
		id: 3,
		image: `${FeatureImg}`,
		title: 'AVANT H50',
		description: 'Orbea',
		colors: 'only color',
		rating: '5.0',
	},
	{
		id: 4,
		image: `${FeatureImg}`,
		title: 'AVANT H50',
		description: 'Orbea',
		colors: 'only color',
		rating: '5.0',
	},
	{
		id: 5,
		image: `${FeatureImg}`,
		title: 'AVANT H50',
		description: 'Orbea',
		colors: 'only color',
		rating: '5.0',
	},
];

function FeaturedProductCards() {

	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	
	const fetchData = async () => {
		setLoading(true);
		try {
			setProducts(Products);
		} catch (error) {
			console.error(error.message);
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	// const pagination = {
	// 	clickable: true,
	// 	renderBullet: function (index, className) {
	// 		return '<span class="' + className + '"></span>';
	// 	  },
	// }

	

	return (
		<div>
		{
			loading? (<Spinner/>) : (
				products.length > 0 ? (<div className='flex flex-row md:flex-wrap justify-center items-center w-[80%] gap-2 mx-auto rounded-lg overflow-hidden mt-10'>
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
					{products.map((product) => (
						<SwiperSlide
							key={product.id}
							className='p-2'
						>
							<div className='flex flex-col max-w-lg rounded-md bg-white gap-2 justify-center items-center p-2'>
								<FeaturedProductCard key={product.id} product={product} />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>) : (
				<div><p>No Data Found</p></div>
			)
			)
		}
			
		</div>
	);
}

export default FeaturedProductCards;
