/** @format */

import React from 'react';
import HeroSection from '../components/core/Home/HeroSection';
import CTAButton from '../components/core/Home/Button';
import ProductCategoryCard from '../components/core/Home/ProductCategoryCard';
import ProductCategoryImg1 from '../assets/Images/opt-tk21-checkpoint-gravel-colorado-29-jpg-221c418811204e37822870f6eb019ba4.jpg';
import ProductCategoryImg2 from '../assets/Images/opt-service-jpeg-75ae13cc3c503a648c5c9ab7449c5c4d-min-jpg-d8e126b1e99b878c7ecf14237a7919db.jpg';
import ProductCategoryImg3 from '../assets/Images/opt-finance-jpeg-41095e508b2800f8d8fe2be6c0bc21d8-min-jpg-2d2a8c8e8b408e5bdae5335674b7e4a9.jpg';
import ProductCategoryImg4 from '../assets/Images/opt-ad-block-500x500-px-1-jpeg-7a4dc2e3e866ee0428055b561c2fd364.jpg';
import ProductCategoryImg5 from '../assets/Images/opt-custom-dimensions-1200x600-px-jpeg-d7425e73ddfda09cc24b6d768463fb0d.jpg';
import FeaturedProductCards from '../components/core/Home/FeaturedProductCards';
import Review from '../components/common/Review';
import ReviewImg from '../assets/Images/reviews_by_listen360_large.png';
import { GoStarFill } from 'react-icons/go';

import EmailConnect from '../components/core/Home/EmailConnect';
import Footer from '../components/common/Footer';

function Home() {
	return (
		<div className='mx-auto w-[100%]'>
			<HeroSection />
			{/* Product Category */}

			<div className='flex flex-col gap-10 w-[80%] mx-auto p-4 mt-20'>
				<div className='text-center text-5xl font-semibold mt-6'>
					Product Category
				</div>
				<div className='w-11/12 mx-auto text-center text-grey text-lg font-bold flex lg:flex-row gap-2 mt-8'>
					<ProductCategoryCard
						image={ProductCategoryImg1}
						text={'Trek Bikes'}
						subText={'See the range'}
					/>
					<ProductCategoryCard
						image={ProductCategoryImg2}
						text={'Shimano Service Center'}
						subText={'24X7'}
					/>
					<ProductCategoryCard
						image={ProductCategoryImg3}
						text={'0% Finance'}
						subText={'Available now'}
					/>
					<ProductCategoryCard
						image={ProductCategoryImg4}
						text={'E-Bikes'}
						subText={'See the range'}
					/>
				</div>

				<div className='flex gap-7 mt-2 mx-auto'>
					<CTAButton
						active={true}
						linkto={'/signup'}
					>
						Explore More
					</CTAButton>
				</div>
			</div>

			{/* Featured product */}

			<div className='flex flex-col gap-10 w-[90%] mx-auto p-4 mt-20'>
				<div className='text-center text-5xl font-semibold mt-6'>
					Featured Products
				</div>
				<FeaturedProductCards />
			</div>

			{/* Review By Other */}
			<div className='flex flex-col gap-10 w-screen mx-auto mt-20 justify-center items-center bg-white p-10'>
				<div className='flex flex-col justify-center items-center w-11/12 mt-6'>
					<img
						src={ReviewImg}
						loading='lazy'
						height={200}
						width={200}
					/>
					<div className='flex w-[80%] flex-row justify-center items-center gap-2'>
						<div className='flex flex-row justify-center items-center'>
							<GoStarFill color='#F7F700' />
							<GoStarFill color='#F7F700' />
							<GoStarFill color='#F7F700' />
							<GoStarFill color='#F7F700' />
							<GoStarFill color='#F7F700' />
						</div>
						<p className='text-greyDark text-xl font-medium'>4.9 out of 5</p>
					</div>
					<Review />
				</div>
			</div>

			{/* Email form  */}

			<div className='flex flex-col justify-center items-center'>
				<EmailConnect />
			</div>

			{/* Footer */}
			<div className='w-screen bg-gradient-to-r from-violet-600 to-indigo-600 mt-20'>
				<Footer />
			</div>
		</div>
	);
}

export default Home;
