import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Alert from '../components/Alert';
import { Titulo, Info } from '../data/Privacypolicy';

const Terms = () => {
	return (
		<div>
			<Head>
				<title>Política de privacidad</title>
				<meta name='description' content='All Products' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<div className='bg-primaryGray border-2 border-t-primaryOrange border-transparent'>
				<main className='container mx-auto pt-8'>
					<div className='space-y-4'>
						<h1 className='text-2xl font-bold text-primaryYellow sm:text-3xl'>
							Política de privacidad de El asador de Richard
						</h1>
						<h3 className='text-primaryYellow'>GENERALIDADES</h3>
						<p className='text-justify text-white text-sm sm:text-lx'>
							Esta Política de privacidad describe cómo se recopila, utiliza y
							comparte su información personal cuando visita o hace una compra
							en https://www.elasadorderichard.live/ (denominado en lo sucesivo
							el “Sitio”).
						</p>

						{Titulo.map((item, index) => (
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

									<p className='mt-4 leading-relaxed text-gray-700 text-justify'>
										{Info[index]}
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
