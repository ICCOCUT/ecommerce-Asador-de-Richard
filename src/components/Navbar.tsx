import NextLink from 'next/link';
import Image from 'next/image';

const Navbar = () => {
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
										href='/menu'>
										MENÚ
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
										href='/platillos'>
										PLATILLOS
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
						<div className='sm:flex sm:gap-4'>
							<div className='px-5 py-2.5 text-sm text-primaryYellow flex'>
								<Image
									src='carrito.svg'
									alt='carrito de compras'
									width={40}
									height={40}
								/>
								<div className='border-l-2 border-primaryYellow' />
							</div>
							<div className='hidden sm:flex'>
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
								className='rounded bg-transparent p-2 text-primaryYellow transition hover:text-gray-600/75'>
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
		</header>
	);
};

export default Navbar;
