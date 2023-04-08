import React from 'react';
import Image from 'next/image';

/**
 * Devuelve un elemento de sección con un elemento div dentro, que contiene dos elementos div, uno de
 * los cuales contiene un elemento h2 y un elemento p, y el otro contiene un elemento de imagen
 * @returns Una sección con un contenedor con un flex div con un flex div con un flex div con un flex
 * div con un flex div con un flex div con un flex div con un flex div con un flex div con un flex div
 * con un flex div con un flex div con un flex div con un flex div con un flex div con un flex div con
 * un flex div con un flex div con un flex
 */
export default function History() {
	return (
		<section className='text-gray-400 bg-primaryGray body-font'>
			<div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
				<div className='lg:flex-grow md:w-1/2 lg:pr-96 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
					<h2 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white italic self-center'>
						Nuestra <span className='text-primaryYellow'>Historia</span>
					</h2>
					<p className='mb-8 leading-relaxed text-center text-white'>
						Como cualquier otro lugar distintivo, tenemos nuestra propia
						historia especial. La idea del restaurante surgió de la nada.
						Durante un paseo por el bosque, el creador de nuestro restaurante
						quedó varado a cientos de kilómetros del asentamiento más cercano.
						Lejos de la civilización y de las comunicaciones, tuvieron que
						montar durante un tiempo un hogar rudimentario, buscar y preparar
						sus propios alimentos.
					</p>
					<div className='flex justify-center text-white w-full space-b gap-5'>
						<div>
							<p className='text-primaryYellow text-center text-5xl'>10</p>
							<p className='text-center'>Bebidas</p>
						</div>
						<div>
							<p className='text-primaryYellow text-center text-5xl'>15</p>
							<p className='text-center'>Alimentos</p>
						</div>
						<div>
							<p className='text-primaryYellow text-center text-5xl'>7</p>
							<p className='text-center'>Postres</p>
						</div>
					</div>
				</div>
				<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 border border-red-300'>
					<Image
						className='object-cover object-center rounded'
						alt='hero'
						src='/img/collage.png'
						width='720'
						height='600'
					/>
				</div>
			</div>
		</section>
	);
}
