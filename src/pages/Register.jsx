/** @format */

import React, { useEffect } from 'react';
import logoImg from '../assets/Images/store-name.png';
import { IoIosBicycle } from 'react-icons/io';
import BgImg from '../assets/Images/bikes1692012374.jpg';
import { useForm } from 'react-hook-form';
import EmailConnect from '../components/common/EmailConnect';
import Footer from '../components/common/Footer';
import { Link } from 'react-router-dom';

function Register() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitSuccessful },
	} = useForm();

	const submitContactForm = async (data) => {
		try {
			console.log(data);
		} catch (error) {
			console.log('ERROR MESSAGE - ', error.message);
		}
	};

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({
				email: '',
			});
		}
	}, [reset, isSubmitSuccessful]);
	return (
		<>
			<div className='lg:grid lg:min-h-screen lg:grid-cols-12'>
			<section className='relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6'>
				<img
					alt=''
					src={BgImg}
					className='absolute inset-0 h-full w-full object-cover opacity-50'
				/>

				<div className='hidden lg:relative lg:block lg:p-12'>
					<Link
						className='block text-white'
						to='/'
					>
						<span className='sr-only'>Home</span>
						<img
							src={logoImg}
							alt='Julies Cycle'
							height={400}
							width={400}
						/>
					</Link>

					<h2 className='flex flex-row gap-2 justify-start items-center mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl'>
						Welcome to Julies Cycles <IoIosBicycle />
					</h2>

					<p className='mt-4 leading-relaxed text-white/90'>
						Julie's Cycles Limited is a company registered in England & Wales
						with company number 05616464. Registered office: 212-216 Clarendon
						Park Road, LEICESTER, LE2 3AG. VAT number: 114 3499 79.
					</p>
				</div>
			</section>

			<main className='flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6'>
				<div className='max-w-xl lg:max-w-3xl'>
					<div className='relative -mt-16 block lg:hidden'>
						<Link
							className='inline-flex size-16 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-blue-600 sm:size-20'
							to='/'
						>
							<p className='text-3xl font-bold italic text-white text-center'>JC</p>
						</Link>

						<h2 className='flex flex-row gap-2 justify-start items-center mt-6 text-2xl font-bold text-black sm:text-3xl md:text-4xl'>
							Welcome to Julies Cycles <IoIosBicycle color='black'/>
						</h2>

						<p className='mt-4 leading-relaxed text-gray-500'>
						Julie's Cycles Limited is a company registered in England & Wales
						with company number 05616464. Registered office: 212-216 Clarendon
						Park Road, LEICESTER, LE2 3AG. VAT number: 114 3499 79.
					</p>
					</div>

					<form
						className='mt-8 grid grid-cols-6 gap-6'
						onSubmit={handleSubmit(submitContactForm)}
					>
						<div className='col-span-6 sm:col-span-3'>
							<label
								htmlFor='firstName'
								className='block text-sm font-medium text-gray-700'
							>
								First Name
							</label>

							<input
								type='text'
								name='firstName'
								id='firstName'
								placeholder='Enter your first name'
								className='mt-1 w-full p-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
								{...register('firstName', { required: true })}
							/>
							{errors.firstName && (
								<span className='-mt-1 text-[12px] text-pink-400'>
									Please enter your first name
								</span>
							)}
						</div>

						<div className='col-span-6 sm:col-span-3'>
							<label
								htmlFor='LastName'
								className='block text-sm font-medium text-gray-700'
							>
								Last Name
							</label>

							<input
								type='text'
								id='lastName'
								name='lastName'
								placeholder='Enter your last name'
								{...register('lastName', { required: true })}
								className='mt-1 w-full p-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
							/>
							{errors.firstName && (
								<span className='-mt-1 text-[12px] text-pink-400'>
									Please enter your last name
								</span>
							)}
						</div>

						<div className='col-span-6'>
							<label
								htmlFor='email'
								className='block text-sm font-medium text-gray-700'
							>
								{' '}
								Email{' '}
							</label>
							<input
								type='text'
								id='email'
								name='email'
								placeholder='Enter your email'
								{...register('email', { required: true })}
								className='mt-1 w-full p-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
							/>
							{errors.firstName && (
								<span className='-mt-1 text-[12px] text-pink-400'>
									Please enter your email
								</span>
							)}
						</div>

						<div className='col-span-6 sm:col-span-3'>
							<label
								htmlFor='password'
								className='block text-sm font-medium text-gray-700'
							>
								{' '}
								Password{' '}
							</label>

							<input
								type='password'
								id='password'
								name='password'
								placeholder='Enter your password'
								{...register('passowrd', { required: true })}
								className='mt-1 w-full p-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
							/>
							{errors.password && (
								<span className='-mt-1 text-[12px] text-pink-400'>
									Please enter password
								</span>
							)}
						</div>

						<div className='col-span-6 sm:col-span-3'>
							<label
								htmlFor='confirmPassword'
								className='block text-sm font-medium text-gray-700'
							>
								Confirm Password
							</label>

							<input
								type='text'
								id='confirmPassword'
								name='confirmPassword'
								placeholder='Enter your confirm password'
								{...register('confirmPassword', { required: true })}
								className='mt-1 w-full p-2 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
							/>
							{errors.confirmPassword && (
								<span className='-mt-1 text-[12px] text-pink-400'>
									Please enter your confirm password
								</span>
							)}
						</div>

						<div className='col-span-6'>
							<label
								htmlFor='MarketingAccept'
								className='flex gap-4'
							>
								<input
									type='checkbox'
									id='MarketingAccept'
									name='MarketingAccept'
									{...register('MarketingAccept')}
									className='size-5 rounded-md border-gray-200 bg-white shadow-sm'
								/>

								<span className='text-sm text-gray-700'>
									I want to receive emails about events, product updates and
									company announcements.
								</span>
							</label>
						</div>

						<div className='col-span-6'>
							<p className='text-sm text-gray-500'>
								By creating an account, you agree to our
								<Link
									to='/termAndCondition'
									className='text-gray-700 underline'
								>
									{' '}
									terms and conditions{' '}
								</Link>
								.
							</p>
						</div>

						<div className='col-span-6 sm:flex sm:items-center sm:gap-4'>
							<button
								type='submit'
								className='text-center text-[13px] sm:text-[16px] shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] bg-gradient-to-r from-violet-600 to-indigo-600 inline-block shrink-0 rounded-md px-12 py-3 text-sm font-medium text-white transition-all hover:bg-transparent hover:text-gray-200 focus:outline-none active:text-blue-500 hover:shadow-none hover:scale-95 duration-200'
							>
								Create an account
							</button>

							<p className='mt-4 text-sm text-gray-500 sm:mt-0'>
								Already have an account?
								<Link
									to='/login'
									className='text-gray-700 underline'
								>
									Log in
								</Link>
								.
							</p>
						</div>
					</form>
				</div>
			</main>
		</div>
		<div className='flex flex-col justify-center items-center'>
				<EmailConnect />
			</div>

			{/* Footer */}
			<div className='w-screen bg-gradient-to-r from-violet-600 to-indigo-600 mt-20'>
				<Footer />
			</div>
		</>
	);
}

export default Register;
