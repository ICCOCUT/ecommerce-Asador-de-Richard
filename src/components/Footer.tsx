import NextLink from 'next/link';
import Image from 'next/image';

/**
 * Este es un componente de React para el pie de página de un sitio web que incluye información sobre
 * el restaurante, enlaces de navegación y un aviso de derechos de autor.
 * @returns Se devuelve el componente de pie de página.
 */
const Footer = () => {
	return (
		<footer className='text-gray-400 bg-primaryGray body-font'>
			<div className='container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
				<div className='w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
					<a
						href='https://www.facebook.com/people/El-asador-de-Richard/100063706142326/'
						target='_blank'
						rel='noreferrer'
						className='flex title-font font-medium items-center md:justify-start justify-center text-white'>
						<Image
							src='/logo.svg'
							width='10'
							height='10'
							alt='empresa'
							className='h-14 w-auto'
						/>
						<span className='ml-3 text-xl'>EL ASADOR DE RICHARD</span>
					</a>
					<p className='mt-2 text-sm text-gray-100 text-justify'>
						Nuestro restaurante te espera, servicio y comida al más alto nivel,
						porque te lo mereces
					</p>
				</div>
				<div className='flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center'>
					<div className='lg:w-1/3 md:w-1/2 w-full px-4'>
						<h2 className='title-font font-bold text-white tracking-widest text-sm mb-3'>
							TIEMPO DE ATENCIÓN
						</h2>
						<nav className='list-none mb-10 text-gray-100'>
							<ul>
								<li>
									<p>Lunes - Viernes</p>
									<p>8:00 AM - 10:00 PM</p>
								</li>
								<li>
									<p>Sábado</p>
									<p>8:00 AM - 9:00 PM</p>
								</li>
								<li>
									<p>Domingo</p>
									<p>Cerrado</p>
								</li>
							</ul>
						</nav>
					</div>
					<div className='lg:w-1/3 md:w-1/2 w-full px-4'>
						<h2 className='title-font font-bold text-white tracking-widest text-sm mb-3'>
							NAVEGACIÓN
						</h2>
						<nav className='list-none mb-10'>
							<ul>
								<li>
									<NextLink
										href='/'
										className='text-gray-100 hover:text-teal-300'>
										Inicio
									</NextLink>
								</li>
								<li>
									<NextLink
										href='/About'
										className='text-gray-100 hover:text-teal-300'>
										Sobre nosotros
									</NextLink>
								</li>
								<li>
									<NextLink
										href='/Menu'
										className='text-gray-100 hover:text-teal-300'>
										Menu
									</NextLink>
								</li>
								<li>
									<NextLink
										href='/Contacto'
										className='text-gray-100 hover:text-teal-300'>
										Contacto
									</NextLink>
								</li>
							</ul>
						</nav>
					</div>
					<div className='lg:w-1/3 md:w-1/2 w-full px-4'>
						<h2 className='title-font font-bold text-white tracking-widest text-sm mb-3'>
							PLATOS
						</h2>
						<nav className='list-none mb-10'>
							<p className='text-gray-100 text-justify'>
								Contamos con una variedad de platillos asados y preparados
								distinguidos por nuestro sabor único y especial
							</p>
						</nav>
					</div>
				</div>
			</div>
			<div className='border border-transparent border-t-white'>
				<div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
					<p className='text-gray-100 text-sm text-center sm:text-left'>
						© 2023 El Asador de Richard. Todos los derechos reservados
					</p>
					<span className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
						<NextLink href='/Terms'>
							<p className='text-gray-100 hover:text-teal-300'>
								Términos de servicio
							</p>
						</NextLink>
						<p className='text-gray-100 mx-2'>|</p>
						<NextLink href='/Privacypolicy'>
							<p className='text-gray-100 hover:text-teal-300'>
								Política de privacidad
							</p>
						</NextLink>
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
