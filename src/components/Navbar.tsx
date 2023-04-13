import { useState } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';

/* Este es un componente funcional que representa la barra de navegación de un sitio web. Utiliza el
enlace useState para administrar el estado de un botón de alternancia de menú, que controla la
visibilidad de los enlaces de navegación en pantallas más pequeñas. El componente representa un
elemento de encabezado con un logotipo, enlaces de navegación y botones para un carrito de compras e
inicio de sesión. Los enlaces de navegación se representan condicionalmente en función del estado
del botón de alternancia del menú. El componente también usa el componente de enlace Next.js para la
navegación del lado del cliente. */
const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header aria-label='Site Header' className='bg-primaryGray w-full'>
			<div className='mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex h-16 items-center justify-between'>
					<div className='md:flex md:items-center md:gap-12'>
						<NextLink
							className='block text-teal-600 dark:text-teal-600'
							href='/'>
							<Image src='/logo.svg' alt='logo' width={50} height={50} />
						</NextLink>
					</div>
					<div className='hidden md:block'>
						<nav aria-label='Site Nav'>
							<ul className='flex items-center gap-6 text-sm'>
								<li className='text-center'>
									<NextLink
										className='text-primaryYellow hover:text-white/75 font-bold text-xl'
										href='/'>
										INICIO
									</NextLink>
								</li>
								<li className='text-center'>
									<NextLink
										className='text-primaryYellow hover:text-white/75 font-bold text-xl'
										href='/about'>
										SOBRE NOSOTROS
									</NextLink>
								</li>
								<li className='text-center'>
									<NextLink
										className='text-primaryYellow hover:text-white/75 font-bold text-xl'
										href='/Menu'>
										MENU
									</NextLink>
								</li>
								<li className='text-center'>
									<NextLink
										className='text-primaryYellow hover:text-white/75 font-bold text-xl'
										href='/contacto'>
										CONTACTOS
									</NextLink>
								</li>
							</ul>
						</nav>
					</div>
					<div className='flex items-center gap-4'>
						<div className='flex sm:gap-4'>
							<div className='px-5 py-2.5 text-sm text-primaryYellow flex'>
								<Image
									className='h-auto w-auto'
									src='carrito.svg'
									alt='carrito de compras'
									width={40}
									height={40}
								/>
								<div className='border-l-2 border-primaryYellow' />
							</div>
							<div className='flex'>
								<NextLink
									className='rounded-2xl px-2 py-1.5 text-center text-base font-medium text-black bg-primaryYellow hover:bg-primaryYellow/75 hover:text-black/75 self-center'
									href='/'>
									Iniciar sesión
								</NextLink>
							</div>
						</div>
						<div className='block md:hidden'>
							<button
								type='button'
								name='menu-toggle'
								className='rounded bg-transparent p-2 text-primaryYellow transition hover:text-gray-600/75'
								onClick={() => setIsMenuOpen(!isMenuOpen)}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth='2'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M4 6h16M4 12h16M4 18h16'
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
				<nav aria-label='Site Nav'>
					<ul className='block sm:flex-col items-center gap-6 text-sm'>
						<li className='text-center'>
							<NextLink
								className='text-primaryYellow hover:text-white/75 font-bold text-xl'
								href='/'>
								INICIO
							</NextLink>
						</li>
						<li className='text-center'>
							<NextLink
								className='text-primaryYellow hover:text-white/75 font-bold text-xl'
								href='/about'>
								SOBRE NOSOTROS
							</NextLink>
						</li>
						<li className='text-center'>
							<NextLink
								className='text-primaryYellow hover:text-white/75 font-bold text-xl'
								href='/Menu'>
								MENU
							</NextLink>
						</li>
						<li className='text-center'>
							<NextLink
								className='text-primaryYellow hover:text-white/75 font-bold text-xl'
								href='/contacto'>
								CONTACTOS
							</NextLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
