/** @format */
import HeroSectionImg1 from "../../../assets/Images/HeroSectionImg/test-1653215665_sized (1).jpg";
import HeroSectionImg2 from "../../../assets/Images/HeroSectionImg/title-row-1-1771410896_sized (1).jpg";
import HeroSectionImg3 from "../../../assets/Images/HeroSectionImg/title-row-1-222380793_sized.jpg";
import HeroSectionImg4 from "../../../assets/Images/HeroSectionImg/title-row-1-379378388_sized (1).jpg";
import HeroSectionImg5 from "../../../assets/Images/HeroSectionImg/title-row-1-5262487_sized (1).jpg";
import HeroSectionImg6 from "../../../assets/Images/HeroSectionImg/trek-1986369131_sized (1).jpg";


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { FreeMode, Autoplay } from 'swiper/modules';
import '../../../App.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

function HeroSection() {
	const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '"></span>';
		  },
	}
	return (
		<div className='w-screen mx-auto h-[600px] shadow-2xl shadow-grey'>
			<Swiper
				pagination={pagination}
				freeMode={true}
				loop={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				modules={[Pagination, FreeMode, Autoplay]}
				className='w-full h-full'
			>
				<SwiperSlide>

						<img
							src={HeroSectionImg1}
							loading='lazy'
							className='w-full h-full object-cover'
						/>

				</SwiperSlide>
				<SwiperSlide>

						<img
							src={HeroSectionImg2}
							loading='lazy'
							className='h-full w-full object-cover'
						/>

				</SwiperSlide>
				<SwiperSlide>

          <img
						src={HeroSectionImg3}
						loading='lazy'
						className='w-full h-full object-cover'
					/>

				</SwiperSlide>
				<SwiperSlide>
					<img
						src={HeroSectionImg4}
						loading='lazy'
						className='h-full w-full object-cover'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={HeroSectionImg5}
						loading='lazy'
						className='h-full w-full object-cover'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={HeroSectionImg6}
						loading='lazy'
						className='h-full w-full object-cover'
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}


export default HeroSection;
