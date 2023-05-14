import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Alert from '../components/Alert';
import { generalidades, section, sectionContent } from '../data/Terms';

/* Este es un componente funcional en TypeScript React que representa la página de términos de
servicio. Incluye el título de la página, la meta descripción y el favicon en el componente Head.
También se incluyen los componentes Navbar, Footer y Alert. El contenido principal de la página está
envuelto en un contenedor con un color de fondo gris. Incluye un título, información general y una
lista de secciones con detalles que se pueden expandir o contraer. El contenido de las secciones se
almacena en las matrices `generalidades`, `section` y `sectionContent`. La función `mapa` se usa
para iterar sobre la matriz `sección` y generar un elemento `detalles` para cada sección. El
elemento `detalles` incluye un elemento `resumen` que muestra el título de la sección y un icono de
alternancia. El elemento `p` dentro del elemento `detalles` muestra el contenido de la sección. */
const Terms = () => {
	return (
		<div>
			<Head>
				<title>Términos de servicio</title>
				<meta name='description' content='All Products' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<div className='bg-primaryGray border-2 border-t-primaryOrange border-transparent'>
				<main className='container mx-auto'>
					<div className='space-y-4'>
						<h1 className='text-2xl font-bold text-primaryYellow sm:text-3xl'>
							Términos de Servicio
						</h1>
						<h3 className='text-primaryYellow'>GENERALIDADES</h3>
						<p className='text-justify text-white'>{generalidades[0]}</p>
						<p className='text-justify text-white'>{generalidades[1]}</p>
						{section.map((item, index) => (
							<div key={index}>
								<details
									className='group border-l-4 border-green-500 bg-red-200 p-6 [&_summary::-webkit-details-marker]:hidden'
									open>
									<summary className='flex items-center justify-between cursor-pointer'>
										<h2 className='text-lg font-medium text-gray-900'>
											{item}
										</h2>
										<span className='ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45'
												viewBox='0 0 20 20'
												fill='currentColor'>
												<path
													fillRule='evenodd'
													d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
													clipRule='evenodd'
												/>
											</svg>
										</span>
									</summary>
									<p className='mt-4 leading-relaxed text-gray-700'>
										{sectionContent[index]}
									</p>
								</details>
							</div>
						))}
					</div>
				</main>
				<Alert />
			</div>
			<Footer />
		</div>
	);
};

export default Terms;
