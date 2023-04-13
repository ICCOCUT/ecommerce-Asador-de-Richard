// En el componente Carousel
import React, { useState } from 'react';
import { items } from '../../data/Testimonials'; // Ruta al archivo de datos
import Image from 'next/image';

/**
 * Este es un componente funcional que muestra un carrusel de testimonios con botones de navegación
 * para cambiar entre ellos.
 * @returns Se está devolviendo el componente Carrusel, que representa una sección con un título, una
 * imagen, un nombre, una profesión y un testimonio. También incluye dos botones para navegar a través
 * de los testimonios, que son manejados por las funciones handlePrev y handleNext que actualizan el
 * estado del índice actual.
 */
const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	/**
	 * La función maneja el índice anterior de una matriz, regresando al final si el índice actual está al
	 * principio.
	 */
	const handlePrev = () => {
		setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
	};

	/**
	 * La función maneja el siguiente elemento en una lista actualizando el índice actual.
	 */
	const handleNext = () => {
		setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
	};

	return (
		<section className='text-gray-400 bg-gray-600  body-font bg-no-repeat bg-cover bg-[url(/img/Bg-Testimonials.png)]'>
			<div className='container px-5 py-16 mx-auto'>
				<h2 className='text-4xl font-medium title-font text-primaryYellow text-center'>
					Testimonials
				</h2>

				<div className='flex justify-center items-center rounded-full h-36 w-36 bg-transparent mx-auto mb-6 overflow-hidden'>
					<Image
						width='300'
						height='300'
						src={items[currentIndex]?.imgUrl}
						alt={items[currentIndex]?.name}
						className='object-cover rounded-full'
					/>
				</div>
				<h3 className='text-2xl font-medium text-primaryYellow text-center'>
					{items[currentIndex]?.name}
				</h3>
				<h3 className='text-xl font-bold title-font text-white text-center'>
					{items[currentIndex]?.profession}
				</h3>
				<p className='text-white text-xl text-center'>
					{items[currentIndex]?.testimonial}
				</p>
				<div className='flex justify-center mt-4'>
					<button name='pasar al anterior testimonio' onClick={handlePrev}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='h-14 w-14 hover:text-primaryYellow'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
							/>
						</svg>
					</button>
					<button name='pasar al siguiente testimonio' onClick={handleNext}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='h-14 w-14 hover:text-primaryYellow'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
							/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Carousel;
