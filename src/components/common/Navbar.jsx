/** @format */

import React, {useState} from 'react';
import logo from '../../assets/Images/store-name.png';
import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { IoSearchSharp } from 'react-icons/io5';
import { BsCart4 } from 'react-icons/bs';
import { NavbarData } from '../../data/NavbarData';

const CATEGORY_TITLES = [
	'Bikes',
	'Clothing',
	'Helmets',
	'Accessories',
	'Components',
];

const CategoryDropdown = ({ title, links }) => (
	<div className='group'>
		<p className='font-medium'>{title}</p>
		<div className='invisible absolute z-[1000] top-10 left-0 w-full group-hover:visible bg-white rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-black flex justify-start gap-8 p-4 flex-wrap'>
			<div className='grid grid-cols-6 gap-x-8 gap-y-4 place-content-center place-items-start mx-auto font-medium'>
				{links.map((sublink, index) => (
					<Link to={sublink.link}>
						<p key={index}>{sublink.title}</p>
					</Link>
				))}
			</div>
		</div>
	</div>
);

function Navbar() {
	const [inputVisible, setInputVisible] = useState(false);

  const handleButtonClick = () => {
    setInputVisible(!inputVisible);
  };
	return (
		<div className='bg-gradient-to-r from-violet-600 to-indigo-600 w-full h-18 flex items-center justify-center relative p-4'>
			<div className='flex w-11/12 justify-between max-w-maxContent items-center'>
				<div>
					<Link to='/'>
						<img
							src={logo}
							width={300}
							height={50}
							loading='lazy'
							alt='logoImg'
						/>
					</Link>
				</div>

				<div className='flex justify-center items-center text-white gap-4 text-[18px] w-screen'>
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
				<div className='text-white flex justify-center items-center gap-4'>
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
					<Link to="/login">
					<FaRegUser
						fontWeight={2}
						fontSize={18}
					/>
					</Link>
					
					<BsCart4
						fontWeight={2}
						fontSize={18}
					/>
				</div>
			</div>
		</div>
	);
}

export default Navbar;

