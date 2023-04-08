import React from 'react';
import Image from 'next/image';

/**
 * Devuelve un div con una sección dentro de él.
 * @returns Un div con una sección dentro de él.
 */
export default function Chefs() {
	return (
		<div className='bg-primaryGray'>
			<section className='mb-20 text-gray-700'>
				<div className='mx-auto text-center md:max-w-xl lg:max-w-3xl'>
					<h3 className='mb-6 text-3xl font-bold text-white'>
						Nuestros <span className='text-primaryYellow'>Cocineros</span>
					</h3>
				</div>

				<div className='grid gap-6 text-center md:grid-cols-3'>
					<div>
						<div className='block rounded-lg bg-white shadow-lg'>
							<div className='p-6'>{/* <Image /> */}</div>
						</div>
					</div>
					<div>
						<div className='block rounded-lg bg-white shadow-lg'>
							<div className='p-6'>{/* <Image /> */}</div>
						</div>
					</div>
					<div>
						<div className='block rounded-lg bg-white shadow-lg'>
							<div className='p-6'>{/* <Image /> */}</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
