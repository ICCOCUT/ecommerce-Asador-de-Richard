import React from 'react';
import Image from 'next/image';

/**
 * Devuelve una sección con un contenedor que tiene un div con una clase flexible y un div con una
 * clase flexible.
 * @returns Una sección con un contenedor con un div con un div con un h2 con un lapso con un texto.
 */
export default function Galery() {
	return (
		<section className='bg-primaryGray'>
			<div className='container mx-auto px-5 py-2 lg:px-32 lg:pt-12 pb-16'>
				<h2 className='text-5xl font-title text-primaryYellow  mb-4 text-center'>
					Platillos
				</h2>
				<div className='-m-1 flex flex-wrap md:-m-2'>
					<div className='flex w-1/2 flex-wrap'>
						<div className='w-1/2 p-1 md:p-2'>
							<Image
								width={500}
								height={500}
								alt='gallery'
								className='block h-full w-full rounded-lg object-cover object-center'
								src='/img/Galery/chorizo.jpg'
							/>
						</div>
						<div className='w-1/2 p-1 md:p-2'>
							<Image
								width={500}
								height={500}
								alt='gallery'
								className='block h-full w-full rounded-lg object-cover object-center'
								src='/img/Galery/platillo1.jpg'
							/>
						</div>
						<div className='w-full p-1 md:p-2'>
							<Image
								width={500}
								height={500}
								alt='gallery'
								className='block h-full w-full rounded-lg object-cover object-center'
								src='/img/Galery/asador.jpg'
							/>
						</div>
					</div>
					<div className='flex w-1/2 flex-wrap'>
						<div className='w-full p-1 md:p-2'>
							<Image
								width={500}
								height={500}
								alt='gallery'
								className='block h-full w-full rounded-lg object-cover object-center'
								src='/img/Galery/platoenmesa.jpg'
							/>
						</div>
						<div className='w-1/2 p-1 md:p-2'>
							<Image
								width={500}
								height={500}
								alt='gallery'
								className='block h-full w-full rounded-lg object-cover object-center'
								src='/img/Galery/pollo.jpg'
							/>
						</div>
						<div className='w-1/2 p-1 md:p-2'>
							<Image
								width={500}
								height={500}
								alt='gallery'
								className='block h-full w-full rounded-lg object-cover object-center'
								src='/img/Galery/platillopapas.jpg'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
