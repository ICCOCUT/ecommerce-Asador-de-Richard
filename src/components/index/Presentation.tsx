import React from 'react';
import Image from 'next/image';

/**
 * Devuelve una sección con un contenedor con un div con un flex con un div con una p con un lapso.
 * @returns Una sección con un contenedor con un div con un flex con una sección con un div con un flex
 * con una sección con un div con un flex con una sección
 */
export default function Presentation() {
	return (
		<section
			className='text-gray-400 body-font bg-slate-600  bg-no-repeat bg-cover bg-[url(/img/heroImage.png)]
		'>
			<div className='container px-5 pt-24 pb-24 mx-auto'>
				<div className='flex flex-col text-center w-full mb-52 text-primaryYellow'>
					<h2 className='sm:text-5xl text-3xl font-medium title-font mb-4'>
						Bienvenido a
					</h2>
					<h2 className='sm:text-7xl text-5xl font-medium title-font mb-4'>
						Nuestro asador
					</h2>
					<div>
						<p className='lg:w-2/3 mx-auto leading-relaxed text-xl text-white'>
							<span>La mejor casa de comidas</span>
						</p>
					</div>
				</div>
				<div className='flex flex-wrap xl:gap-8 lg:gap-5 md:gap-4 sm:gap-2 gap-2 justify-center '>
					<section className='xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 w-1/2 px-8 py-6 bg-primaryGray text-clip'>
						<div className='flex justify-center items-center'>
							<Image
								src='platillo.svg'
								alt='Plato servido'
								width='100'
								height='100'
							/>
						</div>
						<h2 className='text-lg sm:text-xl text-white font-medium title-font mb-2 text-center'>
							Atmósfera <span className='text-primaryYellow'>Mágica</span>
						</h2>
						<p className='leading-relaxed text-base mb-4 text-center text-white'>
							En nuestro establecimiento reina un ambiente mágico lleno de
							aromas deliciosos
						</p>
					</section>
					<section className='xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 w-1/2 px-8 py-6 bg-primaryGray'>
						<div className='flex justify-center items-center'>
							<Image
								src='platillo.svg'
								alt='Plato servido'
								width='100'
								height='100'
							/>
						</div>
						<h2 className='text-lg sm:text-xl text-white font-medium title-font mb-2 text-center'>
							Alimentos de la mejor{' '}
							<span className='text-primaryYellow'>Calidad</span>
						</h2>
						<p className='leading-relaxed text-base mb-4 text-center text-white'>
							La calidad de nuestra comida es excelente
						</p>
					</section>
					<section className='xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 w-1/2 px-8 py-6 bg-primaryGray'>
						<div className='flex justify-center items-center'>
							<Image
								src='platillo.svg'
								alt='Plato servido'
								width='100'
								height='100'
							/>
						</div>
						<h2 className='text-lg sm:text-xl text-white font-medium title-font mb-2 text-center'>
							Sabor <span className='text-primaryYellow'>Inigualable</span>
						</h2>
						<p className='leading-relaxed text-base mb-4 text-center text-white'>
							Nuestros chefs preparan todos los platos
						</p>
					</section>
				</div>
			</div>
		</section>
	);
}
