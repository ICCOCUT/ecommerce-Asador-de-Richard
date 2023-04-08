import Link from 'next/link';

/**
 * Una función que devuelve un div con una sección que contiene un contenedor con un div que contiene
 * un h2 y un botón.
 * @returns Un div con una sección dentro de él.
 */
export default function Hero() {
	return (
		<div>
			<section className='text-gray-400 bg-gray-600  body-font bg-no-repeat bg-cover bg-[url(/img/delicious.png)]'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-center mx-auto'>
						<h2 className='flex-grow sm:pr-16 text-4xl font-medium title-font text-primaryYellow text-center'>
							Celebremos en uno de <br /> los mejores Asadores <br />
							<span className='text-white text-xl'>
								Almuerzos a partir de $60 sólo este mes
							</span>
						</h2>
						<Link
							href='/Menu'
							className='flex-shrink-0 text-black bg-primaryYellow border-0 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded-3xl text-lg mt-10 sm:mt-0'>
							ORDEN DE LA MESA
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
