import React from 'react';
import Image from 'next/image';

/**
 * Devuelve una sección con un contenedor que tiene un div con una clase flexible y un div con una
 * clase flexible.
 * @returns Una sección con un contenedor con un div con un div con un h2 con un lapso con un texto.
 */
export default function Galery() {
	return (
		<section className='text-gray-400 bg-primaryGray body-font'>
			<div className='container px-5 py-24 mx-auto flex flex-wrap'>
				<div className='flex w-full mb-20 flex-wrap mx-auto justify-center items-center'>
					<h2 className='sm:text-5xl text-4xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4 text-center'>
						Galería de <span className='text-primaryYellow'>Alimentos</span>
					</h2>
				</div>
				{/* <div className='flex flex-wrap md:-m-2 -m-1'>
					<div className='flex flex-wrap w-1/2'>
						<div className='md:p-2 p-1 w-1/2'>
							<Image
								alt='gallery'
								className='w-full object-cover h-full object-center block border border-white'
								src=''
							/>
						</div>
						<div className='md:p-2 p-1 w-1/2'>
							<Image
								alt='gallery'
								className='w-full object-cover h-full object-center block border border-white'
								src=''
							/>
						</div>
						<div className='md:p-2 p-1 w-full'>
							<Image
								alt='gallery'
								className='w-full h-full object-cover object-center block border border-white'
								src=''
							/>
						</div>
					</div>
					<div className='flex flex-wrap w-1/2'>
						<div className='md:p-2 p-1 w-full'>
							<Image
								alt='gallery'
								className='w-full h-full object-cover object-center block border border-white'
								src=''
							/>
						</div>
						<div className='md:p-2 p-1 w-1/2'>
							<Image
								alt='gallery'
								className='w-full object-cover h-full object-center block border border-white'
								src=''
							/>
						</div>
						<div className='md:p-2 p-1 w-1/2'>
							<Image
								alt='gallery'
								className='w-full object-cover h-full object-center block border border-white'
								src=''
							/>
						</div>
					</div>
				</div> */}
			</div>
		</section>
	);
}
