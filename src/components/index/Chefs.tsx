import React from 'react';
import Image from 'next/image';

/**
 * Devuelve un div con una sección dentro de él.
 * @returns Un div con una sección dentro de él.
 */

export default function Chefs() {
	return (
		<div className='bg-primaryGray'>
			<div className='container  px-6 mx-auto'>
				{/* <!-- Section: Design Block --> */}
				<section className='text-gray-800 text-center lg:text-left'>
					<h2 className='text-3xl font-bold mb-12 pt-8 text-center text-primaryYellow'>
						Nuestros Cocineros
					</h2>

					<div className='grid lg:grid-cols-3 gap-x-6 lg:gap-x-12'>
						<div
							className='bg-yellow-600 block rounded-lg shadow-lg mb-6 lg:mb-0'
							data-mdb-ripple='true'
							data-mdb-ripple-color='light'>
							<div className='relative overflow-hidden bg-no-repeat bg-cover'>
								<Image
									width={400}
									height={400}
									alt='cocinero1'
									src='/img/cocineros/cocinero1.png'
									className='w-full rounded-t-lg'
								/>
								<section>
									<div className='absolute top-0 right-0 bg-yellow-600 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-50 transition duration-300 ease-in-out' />
								</section>
								<svg
									className='absolute left-0 bottom-0'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 1440 320'>
									<path
										fill='#CA8A04'
										d='M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
									/>
								</svg>
							</div>
							<div className='p-6'>
								<h3 className='font-bold text-lg mb-3'>Juan García</h3>
								<p className='mb-4 pb-2 text-justify'>
									Juan es un carismático chef de cocina italiana con un amor
									profundo por la pasta. Nacido en Italia y criado en Nueva
									York, Juan ha perfeccionado su habilidad en la preparación de
									auténticos platillos italianos. Sus platos son conocidos por
									su sabor casero y la calidad de sus ingredientes. Juan es un
									apasionado de la cocina italiana y siempre está buscando
									nuevas formas de innovar en los clásicos italianos, creando
									sabores sorprendentes y deliciosos.
								</p>
							</div>
						</div>

						<div className='bg-yellow-600 block rounded-lg shadow-lg mb-6 lg:mb-0'>
							<div
								className='relative overflow-hidden bg-no-repeat bg-cover'
								data-mdb-ripple='true'
								data-mdb-ripple-color='light'>
								<Image
									width={400}
									height={400}
									alt='cocinero1'
									src='/img/cocineros/cocinero2.png'
									className='w-full rounded-t-lg'
								/>
								<section>
									<div className='absolute top-0 bg-yellow-600 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-50 transition duration-300 ease-in-out' />
								</section>
								<svg
									className='absolute left-0 bottom-0'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 1440 320'>
									<path
										fill='#CA8A04'
										d='M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
									/>
								</svg>
							</div>
							<div className='p-6'>
								<h3 className='font-bold text-lg mb-3'>Carlos Ramírez</h3>
								<p className='mb-4 pb-2 text-justify'>
									Carlos es un reconocido chef de cocina española con una gran
									pasión por los sabores intensos y los ingredientes frescos del
									mediterráneo. Ha trabajado en restaurantes de alta cocina en
									Barcelona y Madrid, y es conocido por su dominio de las
									técnicas culinarias tradicionales españolas, como la paella,
									el jamón ibérico y el gazpacho. Carlos es apasionado,
									carismático y siempre busca innovar en sus platos para
									sorprender a sus comensales.
								</p>
							</div>
						</div>

						<div className='bg-yellow-600 block rounded-lg shadow-lg'>
							<div
								className='relative overflow-hidden bg-no-repeat bg-cover'
								data-mdb-ripple='true'
								data-mdb-ripple-color='light'>
								<Image
									width={400}
									height={400}
									alt='cocinero1'
									src='/img/cocineros/cocinero3.png'
									className='w-full rounded-t-lg'
								/>
								<section>
									<div className='absolute top-0 right-0 bg-yellow-600 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-50 transition duration-300 ease-in-out' />
								</section>
								<svg
									className='absolute left-0 bottom-0'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 1440 320'>
									<path
										fill='#CA8A04'
										d='M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
									/>
								</svg>
							</div>
							<div className='p-6'>
								<h3 className='font-bold text-lg mb-3'>Alessandro Rossi</h3>
								<p className='mb-4 pb-2 text-justify'>
									Alessandro es un chef italiano con una larga trayectoria en la
									cocina clásica italiana. Nacido en la región de la Toscana,
									Alessandro ha viajado por toda Italia para aprender y
									perfeccionar su arte culinario. Es conocido por su habilidad
									en la preparación de platos de pasta fresca hecha a mano, así
									como por su maestría en la creación de salsas y ragús de
									sabores profundos. Alessandro es perfeccionista, exigente con
									la calidad de los ingredientes y siempre busca llevar la
									auténtica cocina italiana a un nivel superior.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
