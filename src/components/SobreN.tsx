import NextImage from 'next/image';
import { Mision, Vision, Historia, Equipo, Richard } from '../data/About';

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
							src='/img/About/AsadorCompleto.png'
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
							src='/img/About/Preparacion.png'
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
							src='/img/About/Servicio.png'
						/>
					</div>
				</div>
			</section>
			<section>
				<div className='container px-5 py-24 pb-0 mx-auto flex flex-wrap'>
					<div className='lg:w-2/3 mx-auto'>
						<div className='flex flex-wrap w-full bg-gray-800 py-52 px-10 relative mb-4'>
							<NextImage
								width={720}
								height={600}
								alt='gallery'
								className='w-full object-cover h-full object-center block absolute inset-0'
								src='/img/About/Patio.jpg'
							/>
						</div>
					</div>
				</div>
			</section>
			<section className='text-white body-font'>
				<div className='container px-5 py-12 pt-0 mx-auto'>
					<div className='flex flex-col text-center w-full mb-20'>
						<h1 className='text-2xl font-medium title-font mb-4 text-white tracking-widest'>
							Nuestro Equipo
						</h1>
						<p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
							{Equipo}
						</p>
					</div>
				</div>
			</section>
			<section>
				<div className='container mx-auto flex px-5 pb-0 items-center justify-center flex-col'>
					<NextImage
						className='lg:w-2/6 md:w-3/6 w-5/6 object-cover object-center rounded'
						width={720}
						height={600}
						alt='hero'
						src='/img/About/a.jpg'
					/>
				</div>
			</section>
			<section className='text-gray-400 body-font'>
				<div className='container px-5 py-24 pt-4 mx-auto'>
					<div className='xl:w-1/2 lg:w-3/4 w-full mx-auto text-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							className='inline-block w-8 h-8 text-primaryYellow mb-8'
							viewBox='0 0 975.036 975.036'>
							<path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
						</svg>
						<p className='leading-relaxed text-lg text-white'>{Richard}</p>
						<span className='inline-block h-1 w-10 rounded bg-primaryYellow mt-8 mb-6'></span>
						<h2 className='text-white font-medium title-font tracking-wider text-2xl'>
							Nuestra tía Olga
						</h2>
						<p className='text-white'>CTO y Fundador de Asador de Richard</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contacto;
