/** @format */

import React from 'react';
import UserReviewImg from '../../assets/Images/userReview.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  } from 'swiper/modules';
import '../../App.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

function Review() {
	const reviews = [
		{
			image: `${UserReviewImg}`,
			name: 'Jane Doe',
			date: 'July 11, 2024',
			text: 'This is an amazing product! Highly recommend to everyone.',
			tags: ['quality', 'recommend', 'value'],
		},
		{
			image: `${UserReviewImg}`,
			name: 'Jane Doe',
			date: 'July 11, 2024',
			text: 'This is an amazing product! Highly recommend to everyone.',
			tags: ['quality', 'recommend', 'value'],
		},
		{
			image: `${UserReviewImg}`,
			name: 'Jane Doe',
			date: 'July 11, 2024',
			text: 'This is an amazing product! Highly recommend to everyone.',
			tags: ['quality', 'recommend', 'value'],
		},
		{
			image: `${UserReviewImg}`,
			name: 'Jane Doe',
			date: 'July 11, 2024',
			text: 'This is an amazing product! Highly recommend to everyone.',
			tags: ['quality', 'recommend', 'value'],
		},
        {
			image: `${UserReviewImg}`,
			name: 'Jane Doe',
			date: 'July 11, 2024',
			text: 'This is an amazing product! Highly recommend to everyone.',
			tags: ['quality', 'recommend', 'value'],
		},
	];
	return (
		<div className='flex flex-row justify-center items-center w-[80%] gap-2 mx-auto rounded-lg overflow-hidden mt-20 mb-20'>
			<Swiper
				slidesPerView={4}
				spaceBetween={25}
				loop={true}
				freeMode={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[FreeMode, Pagination, Autoplay]}
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
				{reviews.map((review, i) => (
					<SwiperSlide key={i} className=''>
						<div
							className='flex flex-row max-w-xs rounded-md bg-gray-100 flex-wrap gap-4 justify-center items-center'
						>
							<div className='px-6 py-4'>
								<div className='flex items-center mb-4'>
									<img
										className='w-12 h-12 rounded-full mr-4'
										src={review.image}
										alt={review.name}
									/>
									<div className='text-sm'>
										<p className='text-gray-900 leading-none'>{review.name}</p>
										<p className='text-gray-600'>{review.date}</p>
									</div>
								</div>
								<p className='text-gray-700 text-base'>{review.text}</p>
							</div>
							<div className='flex flex-row flex-wrap justify-between items-center px-6 pt-4 pb-2'>
								{review.tags.map((tag, index) => (
									<span
										key={index}
										className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
									>
										#{tag}
									</span>
								))}
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default Review;
