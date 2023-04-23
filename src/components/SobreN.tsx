import NextImage from 'next/image';
import { Mision, Vision, Historia } from '../data/About';

const Contacto = () => {
	return (
		<div>
			<section className='body-font'>
				<div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
					<div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
						<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
							Nuestra Mision
						</h1>
						{Mision.map((item, index) => (
							<p
								key={index}
								className='mb-8 leading-relaxed text-white text-justify'>
								{item}
							</p>
						))}
					</div>
					<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
						<NextImage
							className='object-cover object-center rounded'
							alt='hero'
							width={720}
							height={600}
							src='/img/Galery/platoenmesa.jpg'
						/>
					</div>
				</div>
			</section>
			<section className='text-gray-400 body-font'>
				<div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
					<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10'>
						<NextImage
							className='object-cover object-center rounded'
							alt='hero'
							width={720}
							height={600}
							src='/img/Galery/platoenmesa.jpg'
						/>
					</div>
					<div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
						<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
							Nuestra Vision
						</h1>
						{Vision.map((item, index) => (
							<p
								key={index}
								className='mb-8 leading-relaxed text-white text-justify'>
								{item}
							</p>
						))}
					</div>
				</div>
			</section>
			<section className='text-gray-400 body-font'>
				<div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
					<div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
						<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
							Nuestra Historia
						</h1>
						{Historia.map((item, index) => (
							<p
								key={index}
								className='mb-8 leading-relaxed text-white text-justify'>
								{item}
							</p>
						))}
					</div>
					<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
						<NextImage
							className='object-cover object-center rounded'
							alt='hero'
							width={720}
							height={600}
							src='/img/Galery/platoenmesa.jpg'
						/>
					</div>
				</div>
			</section>
			<section className='text-white body-font'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='flex flex-col text-center w-full mb-20'>
						<h1 className='text-2xl font-medium title-font mb-4 text-white tracking-widest'>
							Nuestro Equipo
						</h1>
						<p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
							El equipo de trabajo de El Asador de Richard es una familia de
							apasionados de la gastronomía y la hospitalidad. Compuesto por
							talentosos chefs, amables camareros, dedicados personal de cocina
							y otros profesionales, el equipo de El Asador de Richard trabaja
							en armonía para ofrecer una experiencia culinaria excepcional a
							sus comensales. Con una visión compartida de brindar el mejor
							servicio y la mejor comida, este equipo se enorgullece de su
							compromiso con la calidad, la creatividad y la innovación en la
							cocina. Unidos por su amor por la comida y la satisfacción del
							cliente, el equipo de El Asador de Richard trabaja incansablemente
							para superar las expectativas de los comensales en cada visita.
						</p>
					</div>
					<div className='flex flex-wrap -m-4'>
						<div className='p-4 lg:w-1/2'>
							<div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
								<NextImage
									width={206}
									height={206}
									alt='team'
									src='/img/Galery/asador.jpg'
									className='flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4'
								/>
								<div className='flex-grow sm:pl-8'>
									<h2 className='title-font font-medium text-lg text-white'>
										Holden Caulfield
									</h2>
									<h3 className='text-gray-500 mb-3'>UI Developer</h3>
									<p className='mb-4'>
										DIY tote bag drinking vinegar cronut adaptogen squid fanny
										pack vaporware.
									</p>
								</div>
							</div>
						</div>
						<div className='p-4 lg:w-1/2'>
							<div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
								<NextImage
									width={206}
									height={206}
									alt='team'
									src='/img/Galery/asador.jpg'
									className='flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4'
								/>
								<div className='flex-grow sm:pl-8'>
									<h2 className='title-font font-medium text-lg text-white'>
										Alper Kamu
									</h2>
									<h3 className='text-gray-500 mb-3'>Designer</h3>
									<p className='mb-4'>
										DIY tote bag drinking vinegar cronut adaptogen squid fanny
										pack vaporware.
									</p>
								</div>
							</div>
						</div>
						<div className='p-4 lg:w-1/2'>
							<div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
								<NextImage
									width={206}
									height={206}
									alt='team'
									src='/img/Galery/asador.jpg'
									className='flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4'
								/>
								<div className='flex-grow sm:pl-8'>
									<h2 className='title-font font-medium text-lg text-white'>
										Atticus Finch
									</h2>
									<h3 className='text-gray-500 mb-3'>UI Developer</h3>
									<p className='mb-4'>
										DIY tote bag drinking vinegar cronut adaptogen squid fanny
										pack vaporware.
									</p>
									<span className='inline-flex'>
										<a className='text-gray-500'>
											<svg
												fill='none'
												stroke='currentColor'
												stroke-linecap='round'
												stroke-linejoin='round'
												stroke-width='2'
												className='w-5 h-5'
												viewBox='0 0 24 24'>
												<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
											</svg>
										</a>
										<a className='ml-2 text-gray-500'>
											<svg
												fill='none'
												stroke='currentColor'
												stroke-linecap='round'
												stroke-linejoin='round'
												stroke-width='2'
												className='w-5 h-5'
												viewBox='0 0 24 24'>
												<path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
											</svg>
										</a>
										<a className='ml-2 text-gray-500'>
											<svg
												fill='none'
												stroke='currentColor'
												stroke-linecap='round'
												stroke-linejoin='round'
												stroke-width='2'
												className='w-5 h-5'
												viewBox='0 0 24 24'>
												<path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
											</svg>
										</a>
									</span>
								</div>
							</div>
						</div>
						<div className='p-4 lg:w-1/2'>
							<div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
								<NextImage
									width={206}
									height={206}
									src='/img/Galery/asador.jpg'
									alt='team'
									className='flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4'
								/>
								<div className='flex-grow sm:pl-8'>
									<h2 className='title-font font-medium text-lg text-white'>
										Henry Letham
									</h2>
									<h3 className='text-gray-500 mb-3'>Designer</h3>
									<p className='mb-4'>
										DIY tote bag drinking vinegar cronut adaptogen squid fanny
										pack vaporware.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='text-gray-400 body-font'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='xl:w-1/2 lg:w-3/4 w-full mx-auto text-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							className='inline-block w-8 h-8 text-primaryYellow mb-8'
							viewBox='0 0 975.036 975.036'>
							<path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
						</svg>
						<p className='leading-relaxed text-lg text-white'>
							Nuestro restaurante, El Asador de Richard, es el resultado de mi
							pasión por la buena comida, la hospitalidad y el amor por
							compartir experiencias inolvidables. Cada plato que servimos, cada
							detalle en nuestra decoración y cada sonrisa en nuestro equipo
							refleja el amor y dedicación que hemos puesto en este sueño hecho
							realidad. Estamos comprometidos en brindar a nuestros comensales
							una experiencia culinaria excepcional, donde los sabores se
							mezclan en armonía y los momentos se convierten en recuerdos
							imborrables. Esperamos darle la bienvenida a nuestro restaurante y
							ser parte de sus momentos especiales.
						</p>
						<span className='inline-block h-1 w-10 rounded bg-primaryYellow mt-8 mb-6'></span>
						<h2 className='text-white font-medium title-font tracking-wider text-2xl'>
							Richard
						</h2>
						<p className='text-white'>CTO y Fundador de Asador de Richard</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contacto;
