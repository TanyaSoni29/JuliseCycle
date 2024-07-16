/** @format */

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';


function EmailConnect() {
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
		<div className='flex flex-col justify-center items-center mt-10 bg-gray-200 rounded-lg w-[70%] p-4 mb-10'>
			<div className='flex flex-col justify-center items-center mt-4 gap-4 mb-10'>
				<h2 className='text-center text-5xl font-semibold mt-6 text-blue-800'>
					{' '}
					Ride Ahead with Us
				</h2>
				<p className='text-grey font-medium'>
					Stay Ahead: Get the Latest Updates on Our Company, Products, Special
					Offers, and More.
				</p>
				<form
					className='flex flex-col gap-4 w-full'
					onSubmit={handleSubmit(submitContactForm)}
				>
					<div className='flex gap-2 lg:w-full justify-center items-center'>
						<input
							type='text'
							name='email'
							id='email'
							placeholder='Enter Email'
							className='w-full rounded-md border border-black p-2'
							{...register('email', { required: true })}
						/>
						{errors.email && (
							<span className='-mt-1 text-[12px] text-black'>
								Please enter your email
							</span>
						)}
					</div>
					<button type='submit' className='text-center text-[13px] sm:text-[16px] shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] bg-gradient-to-r from-violet-600 to-indigo-600 inline-block shrink-0 rounded-md  px-12 py-3 text-sm font-medium text-white transition-all focus:outline-none hover:shadow-none hover:scale-95 duration-200'>
								Send
							</button>
				</form>
			</div>
		</div>
	);
}

export default EmailConnect;
