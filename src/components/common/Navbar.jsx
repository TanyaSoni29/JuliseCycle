/** @format */

import React, { useState } from 'react';
import logo from '../../assets/Images/store-name.png';
import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { IoSearchSharp } from 'react-icons/io5';
import { BsCart4 } from 'react-icons/bs';
import { NavbarData } from '../../data/NavbarData';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { MdArrowRight } from 'react-icons/md';
import { useSelector } from 'react-redux';

const CATEGORY_TITLES = [
	'Bikes',
	'Clothing',
	'Helmets',
	'Accessories',
	'Components',
];

const CategoryDropdown = ({ title, links }) => (
	<div className='group py-8'>
		<p className='font-medium cursor-pointer'>{title}</p>
		<div className='invisible opacity-0 transition-opacity duration-200 ease-linear absolute z-[1000] top-20 left-0 w-full group-hover:visible group-hover:opacity-100 bg-white rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-black flex justify-start p-2 flex-wrap hover:opacity-100'>
			<div className='grid grid-cols-6 gap-x-8 gap-y-4 place-content-center place-items-start mx-auto font-medium cursor-pointer'>
				{links.map((sublink, index) => (
					<Link to={sublink.link}>
						<p
							key={index}
							className=''
						>
							{sublink.title}
						</p>
					</Link>
				))}
			</div>
		</div>
	</div>
);

function Navbar() {
	const [inputVisible, setInputVisible] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const {cart} = useSelector(state => state.cart);

	const handleButtonClick = () => {
		setInputVisible(!inputVisible);
	};
	const handleHambergerClick = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	return (
		<div className='bg-gradient-to-r from-violet-600 to-indigo-600 w-full h-20 flex items-center justify-center fixed top-0 z-[1200] px-4 py-6'>
			<div className='flex w-11/12 justify-between max-w-maxContent items-center'>
				<div className='flex-shrink-0'>
					<Link to='/'>
						<img
							src={logo}
							width={150}
							height={35}
							loading='lazy'
							alt='logoImg'
							className='object-contain'
						/>
					</Link>
				</div>

				<div className='hidden md:flex justify-center items-center text-white gap-4 xl:text-[18px] w-screen lg:text-[18px] md:text-[16px] sm:text-[14px]'>
					{CATEGORY_TITLES.map((title) => {
						const category = NavbarData.find((cat) => cat.title === title);
						return (
							category && (
								<CategoryDropdown
									key={title}
									title={category.title}
									links={category.links}
								/>
							)
						);
					})}
					<div className='font-medium'>Sales</div>
					<div className='font-medium'>Brands</div>
					<div className='font-medium'>Workshop</div>
				</div>
				<div className='hidden text-white md:flex justify-center items-center gap-4'>
					<div className='flex items-center'>
						<button
							onClick={handleButtonClick}
							className='bg-transparent text-white rounded'
						>
							<IoSearchSharp
								fontWeight={2}
								fontSize={18}
							/>
						</button>
						{inputVisible && (
							<input
								type='text'
								className='ml-2 p-2 h-8 placeholder-slate-200 focus:outline-none bg-gradient-to-r from-violet-600 to-indigo-600 rounded'
								placeholder='Type here...'
							/>
						)}
					</div>
					<Link to='/login'>
						<FaRegUser
							fontWeight={2}
							fontSize={18}
						/>
					</Link>
					<Link to='/basket'>
					<div>
					<BsCart4
							fontWeight={2}
							fontSize={18}
							className='text-white'
						/>
						{/* {cart.length>0 && (<span className='absolute -top-1 -right-2 bg-green-600 text-xs h-5 w-5 flex justify-center items-center animate-bounce rounded-full text-white'>{cart.length}</span>) } */}
					</div>
					</Link>
				</div>

				<div className='md:hidden flex gap-4 items-center'>
					<div className='flex items-center'>
						<button
							onClick={handleButtonClick}
							className='bg-transparent text-white rounded'
						>
							<IoSearchSharp
								fontWeight={2}
								fontSize={18}
							/>
						</button>
						{inputVisible && (
							<input
								type='text'
								className='ml-2 p-2 h-8 placeholder-slate-200 focus:outline-none bg-gradient-to-r from-violet-600 to-indigo-600 rounded'
								placeholder='Type here...'
							/>
						)}
					</div>
					<Link to='/basket'>
					<div>
					<BsCart4
							fontWeight={2}
							fontSize={18}
							className='text-white'
						/>
						{/* {cart.length>0 && (<span className='absolute -top-1 -right-2 bg-green-600 text-xs h-5 w-5 flex justify-center items-center animate-bounce rounded-full text-white'>{cart.length}</span>) } */}
					</div>
						
					</Link>
					<button
						onClick={handleHambergerClick}
						className='text-white'
					>
						<GiHamburgerMenu fontSize={24} />
					</button>
				</div>
			</div>
			{mobileMenuOpen && (
				<div className='absolute top-0 left-0 w-full h-screen z-[1000] bg-black text-white rounded-md shadow-lg md:hidden'>
					<div className='flex gap-4 justify-start items-center text-white bg-blue-700 w-full h-20 m-0 p-4 top-0'>
						<RxCross2
							onClick={() => setMobileMenuOpen(false)}
							fontSize={24}
						/>
						<p className='font-normal text-xl'>CLOSE</p>
					</div>
					<div className='flex flex-col justify-center items-center p-4 bg-black text-white w-full h-[cal(100vh - 5rem)]'>
						{CATEGORY_TITLES.map((title, i) => {
							const category = NavbarData.find((cat) => cat.title === title);
							return (
								category && (
									<div
										key={i}
										className='flex justify-between items-center mb-4 border-b-[1px] border-b-gray-800 w-full p-2 '
									>
										<p className='font-medium text-white'>{category.title}</p>
										<MdArrowRight className='text-white' />
									</div>
								)
							);
						})}

						<div className='font-medium flex justify-start items-center mb-4 border-b-[1px] border-b-gray-800 w-full p-2 uppercase'>
							Sales
						</div>
						<div className='font-medium flex justify-start items-center mb-4 border-b-[1px] border-b-gray-800 w-full p-2 uppercase'>
							Brands
						</div>
						<div className='font-medium flex justify-start items-center mb-4 border-b-[1px] border-b-gray-800 w-full p-2 uppercase'>
							Workshop
						</div>
						<div className='font-medium flex justify-start items-center mb-4 border-b-[1px] border-b-gray-800 w-full p-2 uppercase'>
							Contact Us
						</div>
						<div className='font-medium flex justify-start items-center mb-4 border-b-[1px] border-b-gray-800 w-full p-2 uppercase'>
							Latest News
						</div>
						<div className='font-medium flex justify-start items-center mb-4 border-b-[1px] border-b-gray-800 w-full p-2 uppercase'>
							Login
						</div>
						<div className='font-medium flex justify-start items-center mb-4 border-b-[1px] border-b-gray-800 w-full p-2 uppercase'>
							Register
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Navbar;
